document.addEventListener('DOMContentLoaded', () => {
  const achievements = [
    {
      id: 'royal-society-research',
      title: 'Royal Society Lead Researcher',
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

  achievements.forEach((item) => {
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

    achievementsGrid.appendChild(card);
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
});

// Hidden whisper: evee-lightspeed-love
