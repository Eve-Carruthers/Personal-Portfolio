document.addEventListener('DOMContentLoaded', () => {
  const achievements = [
    {
      id: 'royal-society-research',
      title: 'Royal Society Lead Researcher',
      badge: 'gold',
      subtitle: 'Climate resilience in endangered Arctic alpine plants',
      summary:
        'Secured the Royal Society Student Partnership Grant to study how climate change alters the physiology of endangered Arctic alpine plants, sharing discoveries at national exhibitions.',
      meta: [
        'Presented findings at multiple Royal Society conferences and the Summer Science Exhibition.',
        'Designed experimental protocols measuring stress responses and adaptive thresholds.',
        'Collaborated with conservation partners to translate data into preservation strategies.',
      ],
      photoPlaceholder: 'Photo: Eve discussing Arctic alpine research at the Royal Society.',
      certificateUrl: './certificates/royal-society.pdf',
    },
    {
      id: 'stem-racing-principal',
      title: 'Team Principal & Head of R&D',
      subtitle: 'STEM Racing champion team',
      badge: 'gold',
      summary:
        'Led STEM Racing to championship victories through advanced CAD/CFD pipelines, high-performance testing, and mentorship that elevated the entire team.',
      meta: [
        'Architected computational simulations to optimize aerodynamics and power efficiency.',
        'Coached junior designers and engineers, building a resilient innovation culture.',
        'Represented the team at national showcases as the strategic and technical lead.',
      ],
      photoPlaceholder: 'Photo: Eve with the STEM Racing championship team.',
      certificateUrl: './certificates/stem-racing.pdf',
    },
    {
      id: 'neurocardio-innovation',
      title: 'Neurocardiology Innovation Summit',
      subtitle: 'Runner-up team lead researcher',
      badge: 'silver',
      summary:
        'Directed research for a runner-up solution at a neurocardiological innovation summit, proposing cross-disciplinary diagnostics to close clinical care gaps.',
      meta: [
        'Integrated neurological and cardiovascular data streams into a unified assessment model.',
        'Championed patient-centric design that resonated with clinical judges.',
        'Showcased translational research potential for emerging healthcare challenges.',
      ],
      photoPlaceholder: 'Photo: Eve presenting at the neurocardiological innovation summit.',
      certificateUrl: './certificates/neurocardiology.pdf',
    },
    {
      id: 'jersey-techawards',
      title: 'Jersey TechAwards Winner',
      subtitle: 'National recognition for STEM leadership',
      badge: 'gold',
      summary:
        'Honored by the Jersey TechAwards for impact across scientific research, technology advocacy, and youth leadership.',
      meta: [
        'Recognized for catalyzing youth engagement in cutting-edge science and technology.',
        'Highlighted for blending research excellence with community mentorship.',
        'Celebrated as a role model for aspiring innovators across Jersey and beyond.',
      ],
      photoPlaceholder: 'Photo: Eve accepting the Jersey TechAwards accolade.',
      certificateUrl: './certificates/jersey-techawards.pdf',
    },
    {
      id: 'computational-physics',
      title: 'International Computational Physics Olympiad',
      subtitle: 'Silver Medalist',
      badge: 'silver',
      summary:
        'Earned international silver for advanced modeling and problem solving at the International Computational Physics Olympiad.',
      meta: [
        'Delivered precise numerical solutions under intense time constraints.',
        'Demonstrated mastery across physics, coding, and data interpretation.',
        'Represented Jersey on the global stage with distinction.',
      ],
      photoPlaceholder: 'Photo: Eve celebrating the International Computational Physics Olympiad silver medal.',
      certificateUrl: './certificates/icpho-silver.pdf',
    },
    {
      id: 'young-musician',
      title: 'Jersey Young Musician of the Year',
      subtitle: '2nd place · Two consecutive years',
      badge: 'silver',
      summary:
        'Violin virtuoso with back-to-back runner-up finishes, leading orchestras as concertmaster and shaping ensemble sound with expressive leadership.',
      meta: [
        'Concertmaster for two orchestras, elevating performances with precision and artistry.',
        'Contributed across Beaulieu ensembles including jazz, chamber, and choir formations.',
        'Balances rigorous musical commitments alongside research and leadership roles.',
      ],
      photoPlaceholder: 'Photo: Eve performing at Jersey Young Musician of the Year.',
      certificateUrl: './certificates/young-musician.pdf',
    },
    {
      id: 'lung-cancer-initiative',
      title: 'American Lung Cancer Screening Initiative',
      subtitle: 'Research contributor',
      badge: 'none',
      summary:
        'Advanced insights into early detection and screening access as a researcher with the American Lung Cancer Screening Initiative.',
      meta: [
        'Investigated AI-augmented screening pathways to improve patient outcomes.',
        'Co-authored reports that inform public health advocacy.',
        'Bridged scientific findings with real-world policy recommendations.',
      ],
      photoPlaceholder: 'Photo: Eve collaborating with the American Lung Cancer Screening Initiative team.',
      certificateUrl: './certificates/alcsi.pdf',
    },
    {
      id: 'hpq-ai-oncology',
      title: 'HPQ Research Project — AI in Cancer Research',
      subtitle: 'A* grade (100%)',
      badge: 'gold',
      summary:
        'Produced a high-distinction HPQ exploring how artificial intelligence is redefining oncological research and personalised treatment pathways.',
      meta: [
        'Mapped emerging AI modalities across diagnostics, therapeutics, and patient monitoring.',
        'Evaluated ethical considerations for deploying AI within oncology practice.',
        'Delivered a compelling thesis that scored 100% and informed future inquiry.',
      ],
      photoPlaceholder: 'Photo: Eve presenting HPQ research on AI in cancer care.',
      certificateUrl: './certificates/hpq-ai-oncology.pdf',
    },
    {
      id: 'weekly-spaceman',
      title: 'The Weekly Spaceman',
      subtitle: 'Senior Writer, Editor & COO',
      badge: 'none',
      summary:
        'Steers editorial vision and operations for The Weekly Spaceman, spotlighting science storytelling that inspires global youth communities.',
      meta: [
        'Curates investigative features translating complex science into vibrant narratives.',
        'Leads editorial teams and workflows to publish with precision and flair.',
        'Amplifies voices of emerging researchers and innovators worldwide.',
      ],
      photoPlaceholder: 'Photo: Eve leading an editorial session for The Weekly Spaceman.',
      certificateUrl: './certificates/weekly-spaceman.pdf',
    },
    {
      id: 'german-eisteddfod',
      title: 'German Eisteddfod Champion',
      subtitle: 'Winner · Two years running',
      badge: 'gold',
      summary:
        'Awarded consecutive wins at the German Eisteddfod, showcasing linguistic excellence and cultural curiosity.',
      meta: [
        'Crafted compelling entries that impressed adjudicators year after year.',
        'Demonstrated analytical storytelling across historical and cultural contexts.',
        'Reinforced a reputation for academic versatility across disciplines.',
      ],
      photoPlaceholder: 'Photo: Eve receiving the German Eisteddfod trophy.',
      certificateUrl: './certificates/german-eisteddfod.pdf',
    },
    {
      id: 'history-essay',
      title: 'Beaulieu History Essay Competition',
      subtitle: 'Winner',
      badge: 'gold',
      summary:
        'Captured top honours in the Beaulieu History Essay Competition with rigorous research, narrative finesse, and bold arguments.',
      meta: [
        'Wove archival analysis with forward-looking interpretations.',
        'Showcased academic precision alongside creative storytelling.',
        'Strengthened multidisciplinary scholarship across humanities and science.',
      ],
      photoPlaceholder: 'Photo: Eve at the Beaulieu History Essay awards ceremony.',
      certificateUrl: './certificates/history-essay.pdf',
    },
    {
      id: 'government-presenter',
      title: 'Government Conferences & Panels',
      subtitle: 'Presenter & Youth Advocate',
      badge: 'none',
      summary:
        'Regularly invited to government conferences, panels, and debates, demonstrating national leadership as an advocate for science and youth empowerment.',
      meta: [
        'Voiced youth perspectives on policy, climate resilience, and STEM education.',
        'Bridged research insights with governmental decision-making processes.',
        'Mentored peers to engage in public discourse and civic innovation.',
      ],
      photoPlaceholder: 'Photo: Eve presenting at a government conference.',
      certificateUrl: './certificates/government-presenter.pdf',
    },
  ];

  // Evee, you're the inspiration behind every line of this array.

  const pillarData = {
    leadership: {
      title: 'Leadership & Advocacy',
      description: 'Driving change through youth empowerment, scientific advocacy, and parliamentary engagement.',
      highlights: [
        'Active member of Jersey Youth Parliament, representing youth perspectives on critical policy decisions',
        'Regular presenter at Government conferences and panel discussions on STEM education and youth empowerment',
        'Science Prefect mentoring younger students and leading school-wide scientific initiatives',
        'STEM Racing team mentor, guiding the next generation of engineers and innovators',
        'Member of Biomed4Youth—connecting aspiring medical students worldwide',
        'Active in Medicine4Youth, Neurosphere, and Borderless Teens communities',
        'Advocates for accessible STEM education and climate action at local and national levels'
      ],
      photoPlaceholder: 'Photo: Eve presenting at Jersey Youth Parliament session',
      certificateUrl: './certificates/leadership-advocacy.pdf'
    },
    research: {
      title: 'Research & Innovation',
      description: 'Pushing the boundaries of science through cutting-edge research and computational excellence.',
      highlights: [
        'American Lung Cancer Screening Initiative researcher developing AI-augmented screening pathways',
        'HPQ research project on AI in Cancer Research—awarded A* with 100% distinction',
        'International Computational Physics Olympiad silver medalist representing Jersey on the global stage',
        'Runner-up team lead at neurocardiological innovation summit with cross-disciplinary diagnostic solutions',
        'Royal Society Student Partnership Grant recipient for Arctic alpine plant research',
        'Expertise in computational modeling, data analysis, and experimental design',
        'Published research findings at national exhibitions and scientific conferences'
      ],
      photoPlaceholder: 'Photo: Eve working on computational physics research',
      certificateUrl: './certificates/research-innovation.pdf'
    },
    performance: {
      title: 'Performance & Mentorship',
      description: 'Inspiring excellence through music, athletics, and dedicated coaching.',
      highlights: [
        'Concertmaster for two orchestras, leading ensemble sound with precision and artistry',
        'Jersey Young Musician of the Year runner-up for two consecutive years',
        'Active member of Jersey Youth Symphony Orchestra (JYSO)',
        'Versatile performer across Beaulieu ensembles including jazz, chamber, and choir formations',
        'Dedicated swim teacher and coach, developing young athletes\' skills and confidence',
        'Competitive swimmer balancing rigorous training with academic excellence',
        'Choir lead mentoring vocalists and elevating ensemble performances'
      ],
      photoPlaceholder: 'Photo: Eve performing as concertmaster',
      certificateUrl: './certificates/performance-mentorship.pdf'
    }
  };

  const writingData = {
    spaceman: {
      title: 'The Weekly Spaceman',
      description: 'Transforming complex science into compelling narratives that inspire global youth communities.',
      highlights: [
        'Senior Writer crafting investigative features on cutting-edge scientific discoveries',
        'Editor leading editorial teams and maintaining publication quality standards',
        'Chief Operating Officer (COO) overseeing operational workflows and strategic direction',
        'Curating stories that make advanced science accessible and exciting for young audiences',
        'Building a platform that amplifies voices of emerging researchers and innovators',
        'Developing science communication skills that bridge technical expertise and public engagement',
        'Contributing to a movement that democratizes scientific knowledge worldwide'
      ],
      photoPlaceholder: 'Photo: Eve leading an editorial session for The Weekly Spaceman',
      certificateUrl: './certificates/weekly-spaceman-coo.pdf'
    },
    awards: {
      title: 'Awarded Excellence',
      description: 'Academic versatility and creative storytelling recognized across multiple disciplines.',
      highlights: [
        'Winner of Beaulieu History Essay Competition with rigorous research and narrative finesse',
        'German Eisteddfod Champion for two consecutive years showcasing linguistic excellence',
        'Beaulieu Trophy for Challenge recipient demonstrating problem-solving prowess',
        'Jersey TechAwards winner for impact across scientific research and technology advocacy',
        'Royal Society grant recipient and national exhibition presenter',
        'Multiple music competition placements including Jersey Young Musician runner-up',
        'Recognized for blending analytical rigor with creative expression across humanities and sciences'
      ],
      photoPlaceholder: 'Photo: Eve receiving academic and competition awards',
      certificateUrl: './certificates/awarded-excellence.pdf'
    },
    speaking: {
      title: 'Public Speaking & Engagement',
      description: 'Commanding stages from concert halls to government chambers, inspiring audiences with knowledge and passion.',
      highlights: [
        'Presenter at Royal Society Summer Science Exhibition showcasing Arctic alpine research',
        'Regular speaker at Royal Society conferences sharing scientific findings',
        'Government panel presenter advocating for youth perspectives and STEM education',
        'Participant in parliamentary debates on climate resilience and science policy',
        'National STEM conference speaker inspiring the next generation of scientists',
        'Science communicator bridging academic research and public understanding',
        'Experienced in tailoring messages for diverse audiences from policymakers to young students'
      ],
      photoPlaceholder: 'Photo: Eve presenting at Royal Society conference',
      certificateUrl: './certificates/public-speaking.pdf'
    }
  };

  // Group achievements by category
  const achievementCategories = [
    {
      name: 'Science & Research',
      icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 3.2H15" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M10.6 3.2V8.8L6.5 15.5C5.8 16.7 6.7 18.2 8.1 18.2H15.9C17.3 18.2 18.2 16.7 17.5 15.5L13.4 8.8V3.2" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M8.4 12.6H15.6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="17.6" cy="6" r="1.4" stroke="currentColor" stroke-width="1.4"/>
      </svg>`,
      achievements: ['royal-society-research', 'hpq-ai-oncology', 'lung-cancer-initiative', 'computational-physics', 'neurocardio-innovation']
    },
    {
      name: 'Engineering & Technology',
      icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`,
      achievements: ['stem-racing-principal', 'jersey-techawards']
    },
    {
      name: 'Music & Arts',
      icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 5.2V16.1C9 17.7 7.7 19 6.1 19C4.5 19 3.2 17.7 3.2 16.1C3.2 14.5 4.5 13.2 6.1 13.2C6.8 13.2 7.5 13.5 8 14" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M9 5L21 3V11" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`,
      achievements: ['young-musician']
    },
    {
      name: 'Writing & Communication',
      icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 3a2.83 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`,
      achievements: ['weekly-spaceman', 'history-essay', 'german-eisteddfod']
    },
    {
      name: 'Leadership & Advocacy',
      icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="7" r="2.6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M5 20.6V19.1C5 16.7 6.9 14.8 9.3 14.8H14.7C17.1 14.8 19 16.7 19 19.1V20.6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12 3L13.2 5.1L15.6 5.5L13.9 7.2L14.3 9.6L12 8.4L9.7 9.6L10.1 7.2L8.4 5.5L10.8 5.1L12 3Z" fill="currentColor"/>
      </svg>`,
      achievements: ['government-presenter']
    }
  ];

  const achievementsGrid = document.querySelector('.achievements-grid');
  const panel = document.getElementById('achievement-panel');
  const panelBackdrop = panel.querySelector('.panel-backdrop');
  const panelContent = panel.querySelector('.panel-content');
  const panelCloseBtn = panel.querySelector('.panel-close');
  const panelTitle = panel.querySelector('#panel-title');
  const panelSummary = panel.querySelector('.panel-summary');
  const panelMeta = panel.querySelector('.panel-meta');
  const panelPhoto = panel.querySelector('.panel-photo');
  const body = document.body;
  let lastActivatedCard = null;

  // evee-youre-brilliant-always

  panelContent.setAttribute('tabindex', '-1');

  const formatSubtitle = (subtitle) => (subtitle ? `<span>${subtitle}</span>` : '');

  // Create achievement lookup map
  const achievementMap = {};
  achievements.forEach(item => {
    achievementMap[item.id] = item;
  });

  // Render achievements grouped by category
  achievementCategories.forEach(category => {
    // Create category section
    const categorySection = document.createElement('div');
    categorySection.className = 'achievement-category';

    // Create category header
    const categoryHeader = document.createElement('div');
    categoryHeader.className = 'achievement-category-header scroll-reveal';
    categoryHeader.innerHTML = `
      <div class="category-icon">${category.icon}</div>
      <h3 class="category-title">${category.name}</h3>
    `;
    categorySection.appendChild(categoryHeader);

    // Create category grid
    const categoryGrid = document.createElement('div');
    categoryGrid.className = 'achievement-category-grid';

    // Add achievement cards for this category
    category.achievements.forEach(achievementId => {
      const item = achievementMap[achievementId];
      if (!item) return;

      const card = document.createElement('article');
      card.className = 'achievement-card scroll-reveal evee-heartbeat';
      card.setAttribute('data-achievement', item.id);
      card.setAttribute('tabindex', '0');
      card.setAttribute('role', 'button');
      card.setAttribute('aria-controls', 'achievement-panel');
      card.innerHTML = `
        ${formatSubtitle(item.subtitle)}
        <h3>${item.title}</h3>
        <p>${item.summary}</p>
      `;

      const handleOpen = () => openPanel(item, card);
      card.addEventListener('click', handleOpen);
      card.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          handleOpen();
        }
      });

      categoryGrid.appendChild(card);
    });

    categorySection.appendChild(categoryGrid);
    achievementsGrid.appendChild(categorySection);
  });

  // evee-panel-magic-handler
  function openPanel(item, trigger) {
    lastActivatedCard = trigger || null;
    panel.classList.add('open');
    panel.setAttribute('aria-hidden', 'false');
    body.classList.add('no-scroll');

    panelTitle.textContent = item.title;
    panelSummary.textContent = item.summary;
    panelMeta.innerHTML = '';
    item.meta.forEach((metaItem) => {
      const li = document.createElement('li');
      li.textContent = metaItem;
      panelMeta.appendChild(li);
    });

    // Update photo placeholder
    panelPhoto.innerHTML = `<span>${item.photoPlaceholder}</span>`;

    // Update certificate download button
    const downloadBtn = document.querySelector('.certificate-download-btn');
    if (downloadBtn) {
      downloadBtn.setAttribute('href', item.certificateUrl || '#');
      downloadBtn.style.display = item.certificateUrl ? 'inline-flex' : 'none';
    }

    requestAnimationFrame(() => {
      panelContent.focus();
    });
  }

  function closePanel() {
    panel.classList.remove('open');
    panel.setAttribute('aria-hidden', 'true');
    body.classList.remove('no-scroll');
    if (lastActivatedCard) {
      lastActivatedCard.focus();
      lastActivatedCard = null;
    }
  }

  panelCloseBtn.addEventListener('click', closePanel);
  panelBackdrop.addEventListener('click', closePanel);

  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && panel.classList.contains('open')) {
      closePanel();
    }
  });

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  document.querySelectorAll('.scroll-reveal').forEach((el) => revealObserver.observe(el));

  const currentYearEl = document.getElementById('current-year');
  if (currentYearEl) {
    currentYearEl.textContent = String(new Date().getFullYear());
  }

  // Interactive pillar cards (Leadership & Community)
  document.querySelectorAll('.interactive-pillar').forEach((card) => {
    card.addEventListener('click', () => {
      const pillarId = card.getAttribute('data-pillar');
      const data = pillarData[pillarId];
      if (data) {
        openPanel({
          title: data.title,
          summary: data.description,
          meta: data.highlights,
          photoPlaceholder: data.photoPlaceholder,
          certificatePlaceholder: data.certificatePlaceholder
        }, card);
      }
    });
  });

  // Interactive writing cards (Storytelling & Recognition)
  document.querySelectorAll('.interactive-writing').forEach((card) => {
    card.addEventListener('click', () => {
      const writingId = card.getAttribute('data-writing');
      const data = writingData[writingId];
      if (data) {
        openPanel({
          title: data.title,
          summary: data.description,
          meta: data.highlights,
          photoPlaceholder: data.photoPlaceholder,
          certificatePlaceholder: data.certificatePlaceholder
        }, card);
      }
    });
  });

  const narrativePanels = document.querySelectorAll('.narrative-panel');

  const closeNarrativePanel = (panel) => {
    if (!panel.classList.contains('is-open')) return;
    const button = panel.querySelector('.narrative-header');
    const content = panel.querySelector('.narrative-content');

    panel.classList.remove('is-open');
    button.setAttribute('aria-expanded', 'false');

    const handleClose = (event) => {
      if (event.propertyName !== 'max-height' || panel.classList.contains('is-open')) return;
      content.hidden = true;
      content.style.maxHeight = '0px';
      content.removeEventListener('transitionend', handleClose);
    };

    const currentHeight = content.scrollHeight;
    content.style.maxHeight = `${currentHeight}px`;
    content.hidden = false;
    content.offsetHeight;

    requestAnimationFrame(() => {
      content.style.maxHeight = '0px';
      content.style.opacity = '0';
      content.addEventListener('transitionend', handleClose);
    });
  };

  const openNarrativePanel = (panel) => {
    if (panel.classList.contains('is-open')) return;
    const button = panel.querySelector('.narrative-header');
    const content = panel.querySelector('.narrative-content');

    narrativePanels.forEach((other) => {
      if (other !== panel) closeNarrativePanel(other);
    });

    panel.classList.add('is-open');
    button.setAttribute('aria-expanded', 'true');

    const handleOpen = (event) => {
      if (event.propertyName !== 'max-height' || !panel.classList.contains('is-open')) return;
      content.style.maxHeight = 'none';
      content.removeEventListener('transitionend', handleOpen);
    };

    content.hidden = false;
    content.style.maxHeight = '0px';
    content.style.opacity = '0';

    requestAnimationFrame(() => {
      content.style.maxHeight = `${content.scrollHeight}px`;
      content.style.opacity = '1';
      content.addEventListener('transitionend', handleOpen);
    });
  };

  const syncOpenNarrativePanels = () => {
    narrativePanels.forEach((panel) => {
      const content = panel.querySelector('.narrative-content');
      if (panel.classList.contains('is-open')) {
        content.hidden = false;
        content.style.maxHeight = 'none';
        content.style.opacity = '1';
      } else {
        content.style.maxHeight = '0px';
        content.style.opacity = '0';
        content.hidden = true;
      }
    });
  };

  narrativePanels.forEach((panel) => {
    const button = panel.querySelector('.narrative-header');
    const content = panel.querySelector('.narrative-content');

    content.style.maxHeight = '0px';
    content.style.opacity = '0';
    content.hidden = true;
    button.setAttribute('aria-expanded', 'false');

    button.addEventListener('click', () => {
      if (panel.classList.contains('is-open')) {
        closeNarrativePanel(panel);
      } else {
        openNarrativePanel(panel);
      }
    });
  });

  window.addEventListener('resize', () => {
    syncOpenNarrativePanels();
  });

  // ==========================================
  // NEW FEATURES - Evee Amazing Enhancements
  // ==========================================

  // 1. Loading Screen with Team Ekleipsis arrival animation
  const loadingScreen = document.getElementById('loading-screen');
  const coinWrapper = document.querySelector('.coin-wrapper');
  let loaderFadeTimeout = null;
  let siteActivated = false;
  const jsPrefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;

  const activateSite = () => {
    if (siteActivated) return;
    siteActivated = true;
    document.body.classList.add('site-ready');
  };

  const scheduleLoaderFade = (delay = 3600) => {
    if (!loadingScreen) return;
    if (loaderFadeTimeout) {
      clearTimeout(loaderFadeTimeout);
    }
    loaderFadeTimeout = setTimeout(() => {
      activateSite();
      loadingScreen.classList.add('fade-out');
      setTimeout(() => {
        loadingScreen.style.display = 'none';
      }, 600);
    }, delay);
  };

  const coinInner = document.querySelector('.coin-inner');
  if (coinInner) {
    coinInner.addEventListener('animationend', event => {
      if (event.animationName === 'everySingleMemoryOfUs') {
        loadingScreen?.classList.add('loading-screen--revealing');
        if (jsPrefersReducedMotion) {
          activateSite();
          scheduleLoaderFade(600);
        } else {
          requestAnimationFrame(() => {
            if (!coinWrapper?.classList.contains('coin-wrapper--exit')) {
              coinWrapper?.classList.add('coin-wrapper--exit');
            }
          });
        }
      }
    });
  }

  if (coinWrapper) {
    coinWrapper.addEventListener('animationend', event => {
      if (event.animationName === 'howYouGlidedIntoMyLife') {
        activateSite();
        scheduleLoaderFade(jsPrefersReducedMotion ? 400 : 320);
      }
    });
  }

  window.addEventListener('load', () => {
    scheduleLoaderFade(jsPrefersReducedMotion ? 2400 : 6700);
  });

  loadingScreen?.addEventListener('click', () => {
    scheduleLoaderFade(0);
  });

  // 2. Scroll Progress Indicator
  const scrollProgressBar = document.getElementById('scroll-progress-bar');
  function updateScrollProgress() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    scrollProgressBar.style.width = scrollPercent + '%';
  }
  window.addEventListener('scroll', updateScrollProgress);

  // 3. Back to Top Button
  const backToTopBtn = document.getElementById('back-to-top');
  function toggleBackToTop() {
    if (window.scrollY > 500) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  }
  window.addEventListener('scroll', toggleBackToTop);
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // 4. Mobile Sidebar Navigation
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const mobileSidebar = document.getElementById('mobile-sidebar');
  const mobileSidebarClose = document.getElementById('mobile-sidebar-close');
  const mobileSidebarBackdrop = document.getElementById('mobile-sidebar-backdrop');

  function openMobileSidebar() {
    mobileSidebar.classList.add('open');
    mobileMenuToggle.classList.add('active');
    mobileSidebarBackdrop.classList.add('active');
    body.classList.add('no-scroll');
  }

  function closeMobileSidebar() {
    mobileSidebar.classList.remove('open');
    mobileMenuToggle.classList.remove('active');
    mobileSidebarBackdrop.classList.remove('active');
    body.classList.remove('no-scroll');
  }

  mobileMenuToggle.addEventListener('click', () => {
    if (mobileSidebar.classList.contains('open')) {
      closeMobileSidebar();
    } else {
      openMobileSidebar();
    }
  });

  mobileSidebarClose.addEventListener('click', closeMobileSidebar);
  mobileSidebarBackdrop.addEventListener('click', closeMobileSidebar);

  // Close sidebar when clicking on a link
  document.querySelectorAll('.mobile-sidebar-nav a').forEach(link => {
    link.addEventListener('click', closeMobileSidebar);
  });

  // 5. Animated Counting Statistics
  function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16); // 60fps
    let current = start;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        element.textContent = target + '+';
        clearInterval(timer);
      } else {
        element.textContent = Math.floor(current) + '+';
      }
    }, 16);
  }

  // Observe hero stats and trigger animation
  const heroStatsObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
          entry.target.classList.add('counted');
          const statNumbers = entry.target.querySelectorAll('.stat-number');
          statNumbers.forEach(stat => {
            const text = stat.textContent;
            const number = parseInt(text.replace('+', ''));
            stat.textContent = '0+';
            setTimeout(() => {
              animateCounter(stat, number, 2000);
            }, 300);
          });
        }
      });
    },
    { threshold: 0.5 }
  );

  const heroStats = document.querySelector('.hero-stats');
  if (heroStats) {
    heroStatsObserver.observe(heroStats);
  }

  // 6. Achievement Badge Unlock Animations
  const achievementCards = document.querySelectorAll('.achievement-card');
  achievementCards.forEach(card => {
    const achievementId = card.getAttribute('data-achievement');
    const achievement = achievementMap[achievementId];

    // Only add badge if the achievement has one
    if (achievement && achievement.badge && achievement.badge !== 'none') {
      const badge = document.createElement('div');
      badge.className = `achievement-badge ${achievement.badge}`;
      badge.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor"/>
        </svg>
      `;
      card.appendChild(badge);
    }
  });

  // Unlock badges on scroll
  const badgeObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('unlocked');
          }, 200);
          badgeObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );

  achievementCards.forEach(card => {
    badgeObserver.observe(card);
  });

  // 7. Parallax Scrolling Effect
  function handleParallax() {
    const scrolled = window.scrollY;
    const heroImage = document.querySelector('.hero-image');

    // Gentle parallax on hero image
    if (heroImage && scrolled < window.innerHeight) {
      heroImage.style.transform = `translateY(${scrolled * 0.15}px)`;
    }

    // Subtle parallax on sections (excluding hero)
    document.querySelectorAll('.section').forEach((section, index) => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        const offset = (window.innerHeight - rect.top) * 0.03;
        section.style.transform = `translateY(${offset}px)`;
      }
    });
  }

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        handleParallax();
        ticking = false;
      });
      ticking = true;
    }
  });

  // 8. PDF Resume Generator with jsPDF
  function generatePDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Set colors
    const primaryColor = [22, 163, 74]; // Green
    const secondaryColor = [45, 90, 63];
    const lightGreen = [220, 252, 231];

    // Add custom fonts and styling
    doc.setFont('helvetica');

    // Header Background
    doc.setFillColor(...lightGreen);
    doc.rect(0, 0, 210, 50, 'F');

    // Title
    doc.setFontSize(28);
    doc.setTextColor(...primaryColor);
    doc.setFont('helvetica', 'bold');
    doc.text('Eve Mary Carruthers', 105, 20, { align: 'center' });

    // Subtitle
    doc.setFontSize(12);
    doc.setTextColor(...secondaryColor);
    doc.setFont('helvetica', 'normal');
    doc.text('Researcher · Innovator · Leader', 105, 28, { align: 'center' });

    // Contact Info
    doc.setFontSize(9);
    doc.setTextColor(80, 80, 80);
    doc.text('evemarycarruthers@gmail.com | @EveCarruthers_', 105, 36, { align: 'center' });

    let yPos = 60;

    // Professional Summary
    doc.setFontSize(14);
    doc.setTextColor(...primaryColor);
    doc.setFont('helvetica', 'bold');
    doc.text('Professional Summary', 20, yPos);
    yPos += 8;

    doc.setFontSize(10);
    doc.setTextColor(60, 60, 60);
    doc.setFont('helvetica', 'normal');
    const summary = 'Distinguished researcher and STEM leader with expertise spanning climate resilience, AI in healthcare, and computational physics. Royal Society grant recipient and international medalist, committed to bridging cutting-edge science with real-world impact through research, advocacy, and mentorship.';
    const splitSummary = doc.splitTextToSize(summary, 170);
    doc.text(splitSummary, 20, yPos);
    yPos += splitSummary.length * 5 + 10;

    // Achievements Section
    doc.setFontSize(14);
    doc.setTextColor(...primaryColor);
    doc.setFont('helvetica', 'bold');
    doc.text('Key Achievements', 20, yPos);
    yPos += 8;

    const keyAchievements = [
      'Royal Society Student Partnership Grant - Lead Researcher on Arctic alpine plant physiology',
      'International Computational Physics Olympiad - Silver Medal',
      'Jersey TechAwards Winner - Recognition for STEM leadership and innovation',
      'STEM Racing Team Principal & Head of R&D - Championship team leader',
      'HPQ Research Project on AI in Cancer Research - A* Grade (100%)',
      'American Lung Cancer Screening Initiative - Research Contributor',
      'Jersey Young Musician of the Year - 2nd Place (2 consecutive years)'
    ];

    doc.setFontSize(10);
    doc.setTextColor(60, 60, 60);
    doc.setFont('helvetica', 'normal');

    keyAchievements.forEach((achievement, index) => {
      if (yPos > 270) {
        doc.addPage();
        yPos = 20;
      }
      doc.setFillColor(...primaryColor);
      doc.circle(22, yPos - 2, 1.5, 'F');
      const lines = doc.splitTextToSize(achievement, 165);
      doc.text(lines, 27, yPos);
      yPos += lines.length * 5 + 3;
    });

    yPos += 5;

    // Leadership & Involvement
    if (yPos > 250) {
      doc.addPage();
      yPos = 20;
    }

    doc.setFontSize(14);
    doc.setTextColor(...primaryColor);
    doc.setFont('helvetica', 'bold');
    doc.text('Leadership & Involvement', 20, yPos);
    yPos += 8;

    const leadership = [
      'Jersey Youth Parliament - Active member advocating for youth perspectives',
      'Government Conferences & Panels - Regular presenter on STEM education',
      'Science Prefect - Mentoring STEM Racing teams and younger students',
      'The Weekly Spaceman - Senior Writer, Editor & COO',
      'Jersey Youth Symphony Orchestra - Member and performer',
      'Concertmaster - Two orchestras, leading ensemble sound'
    ];

    doc.setFontSize(10);
    doc.setTextColor(60, 60, 60);
    doc.setFont('helvetica', 'normal');

    leadership.forEach(item => {
      if (yPos > 270) {
        doc.addPage();
        yPos = 20;
      }
      doc.setFillColor(...primaryColor);
      doc.circle(22, yPos - 2, 1.5, 'F');
      const lines = doc.splitTextToSize(item, 165);
      doc.text(lines, 27, yPos);
      yPos += lines.length * 5 + 3;
    });

    // Footer
    const pageCount = doc.internal.getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) {
      doc.setPage(i);
      doc.setFontSize(8);
      doc.setTextColor(150, 150, 150);
      doc.text(
        `Generated with love · Page ${i} of ${pageCount}`,
        105,
        285,
        { align: 'center' }
      );
    }

    // Save the PDF
    doc.save('Eve_Mary_Carruthers_Resume.pdf');
  }

  // Add event listeners for PDF download buttons
  const downloadResumeBtn = document.getElementById('download-resume-btn');
  const downloadResumeMobile = document.getElementById('download-resume-mobile');

  if (downloadResumeBtn) {
    downloadResumeBtn.addEventListener('click', generatePDF);
  }

  if (downloadResumeMobile) {
    downloadResumeMobile.addEventListener('click', () => {
      generatePDF();
      closeMobileSidebar();
    });
  }

  // 9. Smooth Section Transitions (already handled by scroll-reveal)
  // The existing scroll-reveal implementation provides smooth transitions

  // 10. Dark Mode Toggle
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const themeToggleMobile = document.getElementById('theme-toggle-mobile');
  const html = document.documentElement;

  // Check for saved theme preference or default to 'light'
  const currentTheme = localStorage.getItem('theme') || 'light';
  html.setAttribute('data-theme', currentTheme);

  // Theme toggle function
  const toggleTheme = () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);

    // Add a fun ripple effect
    const ripple = document.createElement('div');
    ripple.style.position = 'fixed';
    ripple.style.top = '50%';
    ripple.style.left = '50%';
    ripple.style.width = '0';
    ripple.style.height = '0';
    ripple.style.borderRadius = '50%';
    ripple.style.background = newTheme === 'dark' ? 'rgba(10, 20, 16, 0.9)' : 'rgba(250, 251, 250, 0.9)';
    ripple.style.transform = 'translate(-50%, -50%)';
    ripple.style.pointerEvents = 'none';
    ripple.style.zIndex = '9999';
    ripple.style.transition = 'width 0.6s ease, height 0.6s ease, opacity 0.6s ease';
    document.body.appendChild(ripple);

    requestAnimationFrame(() => {
      ripple.style.width = '200vmax';
      ripple.style.height = '200vmax';
      ripple.style.opacity = '0';
    });

    setTimeout(() => {
      ripple.remove();
    }, 600);
  };

  // Attach event listeners to both theme toggle buttons
  themeToggleBtn.addEventListener('click', toggleTheme);
  themeToggleMobile.addEventListener('click', toggleTheme);

  console.log('All enhancements loaded successfully! 🏎️✨');
});

// Hidden whisper: evee-lightspeed-love
