// Blog system for Eve's portfolio - evee-blog-engine-pro

class MarkdownBlogEngine {
  constructor() {
    this.posts = [];
    this.postsContainer = null;
  }

  // Simple markdown parser
  parseMarkdown(markdown) {
    let html = markdown;

    // Headers
    html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
    html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
    html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');

    // Bold
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

    // Italic
    html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');

    // Links
    html = html.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');

    // Line breaks
    html = html.replace(/\n\n/g, '</p><p>');
    html = html.replace(/^(?!<[h|p])/gim, '<p>');
    html = html.replace(/(<\/h[1-3]>)<p>/g, '$1');

    // Lists
    html = html.replace(/^\- (.*$)/gim, '<li>$1</li>');
    html = html.replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>');

    return html;
  }

  // Extract metadata from markdown
  extractMetadata(content) {
    const lines = content.split('\n');
    const metadata = {
      title: '',
      date: '',
      category: '',
      excerpt: ''
    };

    // Extract title (first # heading)
    const titleMatch = content.match(/^# (.+)$/m);
    if (titleMatch) {
      metadata.title = titleMatch[1];
    }

    // Extract date and category
    const dateMatch = content.match(/\*\*Date:\*\* (.+)/);
    const categoryMatch = content.match(/\*\*Category:\*\* (.+)/);

    if (dateMatch) metadata.date = dateMatch[1];
    if (categoryMatch) metadata.category = categoryMatch[1];

    // Extract excerpt (first paragraph after title)
    const paragraphs = content.split('\n\n').filter(p => !p.startsWith('#') && !p.startsWith('**'));
    if (paragraphs[0]) {
      metadata.excerpt = paragraphs[0].substring(0, 150) + '...';
    }

    return metadata;
  }

  // Fetch and parse blog posts from /posts directory
  async loadPosts() {
    try {
      // In a real scenario, you'd fetch a list of markdown files
      // For now, we'll use a manifest approach or try to fetch known posts
      const postFiles = ['example-post.md']; // Add more as you create them

      for (const file of postFiles) {
        try {
          const response = await fetch(`./posts/${file}`);
          if (response.ok) {
            const content = await response.text();
            const metadata = this.extractMetadata(content);
            const html = this.parseMarkdown(content);

            this.posts.push({
              ...metadata,
              content: html,
              slug: file.replace('.md', '')
            });
          }
        } catch (error) {
          console.log(`Could not load post: ${file}`);
        }
      }

      // Sort by date (newest first)
      this.posts.sort((a, b) => new Date(b.date) - new Date(a.date));

      this.renderPosts();
    } catch (error) {
      console.error('Error loading blog posts:', error);
    }
  }

  // Render blog posts to the page
  renderPosts() {
    this.postsContainer = document.querySelector('.blog-grid');
    if (!this.postsContainer) return;

    if (this.posts.length === 0) {
      this.postsContainer.innerHTML = `
        <div class="blog-empty">
          <p>No blog posts yet. Check back soon for updates on research, projects, and insights!</p>
        </div>
      `;
      return;
    }

    this.posts.forEach(post => {
      const card = document.createElement('article');
      card.className = 'blog-card scroll-reveal';
      card.innerHTML = `
        <div class="blog-card-header">
          <span class="blog-category">${post.category || 'General'}</span>
          <span class="blog-date">${post.date}</span>
        </div>
        <h3 class="blog-title">${post.title}</h3>
        <p class="blog-excerpt">${post.excerpt}</p>
        <button class="blog-read-more" data-slug="${post.slug}">
          Read Article
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      `;

      const readMoreBtn = card.querySelector('.blog-read-more');
      readMoreBtn.addEventListener('click', () => this.openPost(post.slug));

      this.postsContainer.appendChild(card);
    });
  }

  // Open full blog post in modal
  openPost(slug) {
    const post = this.posts.find(p => p.slug === slug);
    if (!post) return;

    const modal = document.getElementById('blog-modal');
    const modalContent = modal.querySelector('.blog-modal-content');

    modalContent.innerHTML = `
      <button class="modal-close" aria-label="Close">&times;</button>
      <article class="blog-post-full">
        <header class="blog-post-header">
          <span class="blog-category">${post.category || 'General'}</span>
          <span class="blog-date">${post.date}</span>
        </header>
        <div class="blog-post-body">
          ${post.content}
        </div>
      </article>
    `;

    modal.classList.add('open');
    document.body.classList.add('no-scroll');

    const closeBtn = modalContent.querySelector('.modal-close');
    const backdrop = modal.querySelector('.modal-backdrop');

    const closeModal = () => {
      modal.classList.remove('open');
      document.body.classList.remove('no-scroll');
    };

    closeBtn.addEventListener('click', closeModal);
    backdrop.addEventListener('click', closeModal);

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('open')) {
        closeModal();
      }
    });
  }
}

// Initialize blog engine when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  const blogEngine = new MarkdownBlogEngine();
  blogEngine.loadPosts();
});

// evee-hidden-message: "brilliance in every line"
