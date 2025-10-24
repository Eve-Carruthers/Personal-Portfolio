// Live Activity Feed for Eve's portfolio - GitHub & Twitter Integration

class ActivityFeed {
  constructor() {
    this.blogContainer = null;
    this.githubUsername = 'Eve-Carruthers';
    this.twitterUsername = 'EveCarruthers_';
    this.nitterInstances = [
      'nitter.net',
      'nitter.privacydev.net',
      'nitter.poast.org',
      'nitter.1d4.us'
    ];
  }

  // Fetch recent GitHub activity
  async fetchGitHubActivity() {
    try {
      const response = await fetch(`https://api.github.com/users/${this.githubUsername}/events/public?per_page=5`);

      if (!response.ok) {
        throw new Error(`Failed to fetch GitHub activity: ${response.status}`);
      }

      const events = await response.json();
      return this.formatGitHubEvents(events);
    } catch (error) {
      return [];
    }
  }

  // Format GitHub events into readable activity items
  formatGitHubEvents(events) {
    return events.map(event => {
      const date = new Date(event.created_at);
      const timeAgo = this.getTimeAgo(date);

      let action = '';
      let icon = '';
      let link = '';

      switch (event.type) {
        case 'PushEvent':
          const commits = event.payload.commits?.length || 0;
          action = `Pushed ${commits} commit${commits !== 1 ? 's' : ''} to ${event.repo.name}`;
          icon = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 11L12 14L22 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M21 12V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>`;
          link = `https://github.com/${event.repo.name}`;
          break;

        case 'CreateEvent':
          action = `Created ${event.payload.ref_type} ${event.payload.ref || ''} in ${event.repo.name}`;
          icon = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19M5 12H19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>`;
          link = `https://github.com/${event.repo.name}`;
          break;

        case 'PullRequestEvent':
          action = `${event.payload.action} pull request in ${event.repo.name}`;
          icon = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 15V18C18 19.1046 17.1046 20 16 20C14.8954 20 14 19.1046 14 18V15M18 15C19.1046 15 20 14.1046 20 13C20 11.8954 19.1046 11 18 11C16.8954 11 16 11.8954 16 13C16 14.1046 16.8954 15 18 15Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6 9V6C6 4.89543 6.89543 4 8 4C9.10457 4 10 4.89543 10 6V9M6 9C4.89543 9 4 9.89543 4 11C4 12.1046 4.89543 13 6 13C7.10457 13 8 12.1046 8 11C8 9.89543 7.10457 9 6 9Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>`;
          link = event.payload.pull_request?.html_url || `https://github.com/${event.repo.name}`;
          break;

        case 'IssuesEvent':
          action = `${event.payload.action} issue in ${event.repo.name}`;
          icon = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2"/>
            <path d="M12 8V12M12 16H12.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>`;
          link = event.payload.issue?.html_url || `https://github.com/${event.repo.name}`;
          break;

        case 'WatchEvent':
          action = `Starred ${event.repo.name}`;
          icon = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>`;
          link = `https://github.com/${event.repo.name}`;
          break;

        case 'ForkEvent':
          action = `Forked ${event.repo.name}`;
          icon = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 3V7M6 7C7.10457 7 8 7.89543 8 9C8 10.1046 7.10457 11 6 11C4.89543 11 4 10.1046 4 9C4 7.89543 4.89543 7 6 7Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M18 3V7M18 7C19.1046 7 20 7.89543 20 9C20 10.1046 19.1046 11 18 11C16.8954 11 16 10.1046 16 9C16 7.89543 16.8954 7 18 7Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6 11V15C6 16.1046 6.89543 17 8 17H16C17.1046 17 18 16.1046 18 15V11" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>`;
          link = event.payload.forkee?.html_url || `https://github.com/${event.repo.name}`;
          break;

        default:
          action = `Activity in ${event.repo.name}`;
          icon = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2"/>
          </svg>`;
          link = `https://github.com/${event.repo.name}`;
      }

      return {
        type: 'github',
        action,
        icon,
        link,
        timeAgo,
        date: date.toISOString()
      };
    });
  }

  // Calculate time ago from date
  getTimeAgo(date) {
    const seconds = Math.floor((new Date() - date) / 1000);

    const intervals = {
      year: 31536000,
      month: 2592000,
      week: 604800,
      day: 86400,
      hour: 3600,
      minute: 60
    };

    for (const [unit, secondsInUnit] of Object.entries(intervals)) {
      const interval = Math.floor(seconds / secondsInUnit);
      if (interval >= 1) {
        return `${interval} ${unit}${interval !== 1 ? 's' : ''} ago`;
      }
    }

    return 'just now';
  }

  // Fetch X posts via RSS2JSON API
  async fetchXPosts() {
    // Try multiple Nitter instances with RSS2JSON
    for (const instance of this.nitterInstances) {
      try {
        const rssUrl = `https://${instance}/${this.twitterUsername}/rss`;
        const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}&count=5`;

        const response = await fetch(apiUrl);

        if (!response.ok) continue;

        const data = await response.json();

        if (data.status === 'ok' && data.items && data.items.length > 0) {
          const posts = data.items.map(item => ({
            text: item.title || item.description.replace(/<[^>]*>/g, '').substring(0, 280),
            link: item.link.replace(instance, 'x.com'),
            date: new Date(item.pubDate),
            timeAgo: this.getTimeAgo(new Date(item.pubDate))
          }));

          return posts;
        }
      } catch (error) {
        continue; // Try next instance
      }
    }

    // Fallback to curated posts if fetching fails
    return this.getCuratedPosts();
  }

  // Curated fallback posts
  getCuratedPosts() {
    return [
      {
        text: "Excited to share insights on climate resilience research and Arctic alpine plant conservation. The work continues! 🌱🔬 #STEMResearch #ClimateScience",
        link: `https://x.com/${this.twitterUsername}`,
        timeAgo: 'Recent'
      },
      {
        text: "Another incredible day at the Royal Society showcasing our research findings. Grateful for the opportunity to contribute to scientific discovery. #RoyalSociety #Research",
        link: `https://x.com/${this.twitterUsername}`,
        timeAgo: 'Recent'
      },
      {
        text: "Leading Team Ekleipsis has been one of the most rewarding experiences. Innovation, collaboration, and pushing boundaries together! 🚀 #TeamEkleipsis #Innovation",
        link: `https://x.com/${this.twitterUsername}`,
        timeAgo: 'Recent'
      },
      {
        text: "Passionate about empowering the next generation of scientists and researchers. Youth leadership in STEM is crucial for our future! 💡 #YouthLeadership #STEMAdvocacy",
        link: `https://x.com/${this.twitterUsername}`,
        timeAgo: 'Recent'
      },
      {
        text: "AI in healthcare innovation continues to amaze me. Exciting times ahead for medical research and patient care! 🏥🤖 #AIinHealthcare #Innovation",
        link: `https://x.com/${this.twitterUsername}`,
        timeAgo: 'Recent'
      }
    ];
  }

  // Render X posts section
  renderXPosts(posts) {
    return `
      <div class="twitter-feed-container">
        <div class="twitter-feed-header">
          <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
          <h3>Latest from X</h3>
        </div>
        <div class="activity-list">
          ${posts.map(post => `
            <a href="${post.link}" target="_blank" rel="noopener noreferrer" class="activity-item twitter-post scroll-reveal">
              <div class="activity-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </div>
              <div class="activity-content">
                <p class="activity-action">${post.text}</p>
                <span class="activity-time">${post.timeAgo}</span>
              </div>
            </a>
          `).join('')}
        </div>
        <a href="https://x.com/${this.twitterUsername}" target="_blank" rel="noopener noreferrer" class="activity-view-more">
          View X Profile →
        </a>
      </div>
    `;
  }

  // Render the activity feed
  async render() {
    this.blogContainer = document.querySelector('.blog-grid');

    if (!this.blogContainer) {
      return;
    }

    // Show loading state
    this.blogContainer.innerHTML = `
      <div class="activity-loading">
        <div class="loading-spinner"></div>
        <p>Loading recent activity...</p>
      </div>
    `;

    try {
      // Fetch both GitHub and X activity in parallel
      const [githubActivities, xPosts] = await Promise.all([
        this.fetchGitHubActivity(),
        this.fetchXPosts()
      ]);

      // Clear loading state
      this.blogContainer.innerHTML = '';

      // Create two-column layout
      this.blogContainer.style.display = 'grid';
      this.blogContainer.style.gridTemplateColumns = 'repeat(auto-fit, minmax(400px, 1fr))';
      this.blogContainer.style.gap = 'var(--space-2xl)';

      // GitHub Activity Section
      const githubSection = document.createElement('div');
      githubSection.className = 'activity-section github-section';
      githubSection.innerHTML = `
        <div class="activity-header">
          <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
          </svg>
          <h3>GitHub Activity</h3>
        </div>
        <div class="activity-list">
          ${githubActivities.length > 0 ?
            githubActivities.map(activity => `
              <a href="${activity.link}" target="_blank" rel="noopener noreferrer" class="activity-item scroll-reveal">
                <div class="activity-icon">${activity.icon}</div>
                <div class="activity-content">
                  <p class="activity-action">${activity.action}</p>
                  <span class="activity-time">${activity.timeAgo}</span>
                </div>
              </a>
            `).join('') :
            '<p class="activity-empty">No recent GitHub activity</p>'
          }
        </div>
        <a href="https://github.com/${this.githubUsername}" target="_blank" rel="noopener noreferrer" class="activity-view-more">
          View GitHub Profile →
        </a>
      `;

      // X Posts Section
      const twitterSection = document.createElement('div');
      twitterSection.className = 'activity-section twitter-section';
      twitterSection.innerHTML = this.renderXPosts(xPosts);

      this.blogContainer.appendChild(githubSection);
      this.blogContainer.appendChild(twitterSection);

      // Apply scroll reveal to new elements
      setTimeout(() => {
        const scrollRevealElements = this.blogContainer.querySelectorAll('.scroll-reveal');
        scrollRevealElements.forEach(el => {
          // Trigger reveal observer if available
          const observer = new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  entry.target.classList.add('is-visible');
                  observer.unobserve(entry.target);
                }
              });
            },
            { threshold: 0.2 }
          );
          observer.observe(el);
        });
      }, 100);

    } catch (error) {
      this.blogContainer.innerHTML = `
        <div class="activity-error">
          <p>Unable to load activity feed. Please try again later.</p>
        </div>
      `;
    }
  }

}

// Initialize activity feed when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  const activityFeed = new ActivityFeed();
  activityFeed.render();
});
