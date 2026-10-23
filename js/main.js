/* ============================================================
   PERSONAL PORTFOLIO — MAIN SCRIPT
   ============================================================
   Reads from window.SITE_DATA (loaded via data/content.js)
   and populates all sections of the portfolio.
   ============================================================ */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', init);

  function init() {
    const data = window.SITE_DATA;
    if (!data) {
      console.error('SITE_DATA not found. Make sure data/content.js is loaded before main.js.');
      return;
    }

    renderNav(data.nav);
    renderHero(data.hero);
    renderServices(data.services);
    renderTraining(data.training);
    renderProjects(data.projects);
    renderBuilt(data.built);
    renderDashboards();
    renderExperience(data.experience);
    renderIdeas(data.ideas);
    renderContact(data.contact);
    renderFooter(data.footer);

    initMobileNav();
    initScrollHeader();
    initRevealAnimations();
    initActiveNavHighlight();
    initPortfolioEnhancements();
  }

  function initPortfolioEnhancements() {
    var selections = { audience: 'all', solution: 'all' };
    var filterButtons = document.querySelectorAll('.filter-chip');
    var status = document.getElementById('solution-finder-status');
    var filterTargets = document.querySelectorAll('.service-card, .training-card, .project-card');
    var labels = { startup: 'startup founders', enterprise: 'enterprise leaders', technical: 'technical teams', ai: 'AI & automation', analytics: 'data analytics', training: 'corporate training' };

    function applyFilters() {
      var visible = 0;
      filterTargets.forEach(function (card) {
        var audiences = (card.dataset.audiences || '').split(' ');
        var solutions = (card.dataset.solutions || '').split(' ');
        var matchesAudience = selections.audience === 'all' || audiences.indexOf(selections.audience) !== -1;
        var matchesSolution = selections.solution === 'all' || solutions.indexOf(selections.solution) !== -1;
        var show = matchesAudience && matchesSolution;
        card.classList.toggle('filter-hidden', !show);
        if (show) visible++;
      });
      if (status) {
        var context = [];
        if (selections.audience !== 'all') context.push(labels[selections.audience]);
        if (selections.solution !== 'all') context.push(labels[selections.solution]);
        status.textContent = context.length ? 'Showing ' + visible + ' relevant items for ' + context.join(' · ') : 'Showing all services, training and projects';
      }
    }

    filterButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        var group = button.dataset.filterGroup;
        selections[group] = button.dataset.filterValue;
        filterButtons.forEach(function (item) {
          if (item.dataset.filterGroup === group) {
            var active = item === button;
            item.classList.toggle('is-active', active);
            item.setAttribute('aria-pressed', String(active));
          }
        });
        applyFilters();
      });
    });

    var themeToggle = document.getElementById('theme-toggle');
    var savedTheme = null;
    try { savedTheme = localStorage.getItem('msr-theme'); } catch (error) { /* Storage may be unavailable in private contexts. */ }
    if (savedTheme === 'light') document.body.dataset.theme = 'light';
    function updateThemeControl() {
      if (!themeToggle) return;
      var isDark = document.body.dataset.theme !== 'light';
      themeToggle.textContent = isDark ? 'Light' : 'Dark';
      themeToggle.setAttribute('aria-label', 'Switch to ' + (isDark ? 'light' : 'dark') + ' theme');
    }
    updateThemeControl();
    if (themeToggle) themeToggle.addEventListener('click', function () {
      document.body.dataset.theme = document.body.dataset.theme === 'light' ? 'dark' : 'light';
      try { localStorage.setItem('msr-theme', document.body.dataset.theme); } catch (error) { /* Theme still works for this visit. */ }
      updateThemeControl();
    });

    var logs = [
      '[READY] Exploring practical data and AI solutions',
      '[FOCUS] Analytics · automation · team enablement',
      '[OPEN] Available for advisory and delivery engagements'
    ];
    var log = document.getElementById('pipeline-log');
    var logIndex = 0;
    if (log && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      window.setInterval(function () {
        logIndex = (logIndex + 1) % logs.length;
        log.classList.add('pipeline-ticker__log--changing');
        window.setTimeout(function () { log.textContent = logs[logIndex]; log.classList.remove('pipeline-ticker__log--changing'); }, 180);
      }, 4200);
    }

    if (window.matchMedia('(hover: hover) and (pointer: fine)').matches && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.querySelectorAll('.project-card, .service-card, .built-card').forEach(function (card) {
        card.addEventListener('pointermove', function (event) {
          var bounds = card.getBoundingClientRect();
          var x = (event.clientX - bounds.left) / bounds.width - .5;
          var y = (event.clientY - bounds.top) / bounds.height - .5;
          card.style.setProperty('--tilt-x', (y * -2.2).toFixed(2) + 'deg');
          card.style.setProperty('--tilt-y', (x * 2.2).toFixed(2) + 'deg');
          card.classList.add('tilt-active');
        });
        card.addEventListener('pointerleave', function () { card.classList.remove('tilt-active'); });
      });
    }
  }


  /* ----------------------------------------------------------
     UTILITIES
     ---------------------------------------------------------- */

  /** Safely set text content of an element by ID */
  function setText(id, text) {
    const el = document.getElementById(id);
    if (el && text != null) el.textContent = text;
  }

  /** Create an element with optional class(es) and innerHTML */
  function createElement(tag, className, innerHTML) {
    const el = document.createElement(tag);
    if (className) el.className = className;
    if (innerHTML) el.innerHTML = innerHTML;
    return el;
  }

  /** Simple SVG icon map — lightweight, no external library */
  const ICONS = {
    calendar:   '📅',
    education:  '🎓',
    code:       '💻',
    download:   '⬇️',
    'chart-bar': '📊',
    database:   '🗄️',
    brain:      '🧠',
    robot:      '🤖',
    handshake:  '🤝',
    email:      '✉️',
    phone:      '📱',
    linkedin:   'in',
    github:     '⌨️',
    youtube:    '▶️',
    link:       '🔗',
  };

  function getIcon(name) {
    const names = { calendar: 'calendar-blank', education: 'graduation-cap', code: 'code', download: 'file-arrow-down', 'chart-bar': 'chart-bar', database: 'database', brain: 'brain', robot: 'robot', handshake: 'handshake', email: 'envelope', phone: 'phone', linkedin: 'linkedin-logo', github: 'github-logo', youtube: 'youtube-logo', link: 'link', 'file-text': 'file-text' };
    return '<i class="ph ph-' + (names[name] || 'circle') + '" aria-hidden="true"></i>';
  }


  /* ----------------------------------------------------------
     NAVIGATION
     ---------------------------------------------------------- */

  function renderNav(navData) {
    if (!navData) return;

    // Logo
    const logoEl = document.getElementById('nav-logo');
    if (logoEl && navData.logo) {
      logoEl.textContent = navData.logo;
    }

    // Nav links
    const linksContainer = document.getElementById('nav-links');
    if (!linksContainer || !navData.links) return;

    navData.links.forEach(function (link) {
      const li = createElement('li', '', '');
      li.setAttribute('role', 'none');
      const a = createElement('a', 'nav__link', link.label);
      a.href = link.href;
      a.setAttribute('role', 'menuitem');
      li.appendChild(a);
      linksContainer.appendChild(li);
    });
  }


  /* ----------------------------------------------------------
     HERO
     ---------------------------------------------------------- */

  function renderHero(heroData) {
    if (!heroData) return;

    setText('hero-title', heroData.title);
    setText('hero-name', heroData.name);
    setText('hero-headline', heroData.headline);
    setText('hero-subtext', heroData.subtext);

    // CTA Buttons
    const ctaContainer = document.getElementById('hero-cta');
    if (!ctaContainer || !heroData.ctaButtons) return;

    heroData.ctaButtons.forEach(function (btn) {
      var styleClass = 'btn';
      if (btn.style === 'primary') styleClass += ' btn--primary';
      else if (btn.style === 'secondary') styleClass += ' btn--secondary';
      else if (btn.style === 'outline') styleClass += ' btn--outline';

      var a = createElement('a', styleClass, '');
      a.href = btn.link;
      if (btn.target) { a.target = btn.target; a.rel = 'noopener noreferrer'; }

      if (btn.link.startsWith('http') || btn.link.startsWith('mailto')) {
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
      }

      // Icon
      var iconSpan = createElement('span', 'btn__icon', getIcon(btn.icon));
      a.appendChild(iconSpan);

      // Label
      var labelSpan = createElement('span', '', btn.label);
      a.appendChild(labelSpan);

      ctaContainer.appendChild(a);
    });
  }


  /* ----------------------------------------------------------
     SERVICES
     ---------------------------------------------------------- */

  function renderServices(servicesData) {
    if (!servicesData) return;

    setText('services-title', servicesData.sectionTitle);
    setText('services-intro', servicesData.sectionIntro);

    // Engagement paths
    var pathsContainer = document.getElementById('engagement-paths');
    if (pathsContainer && servicesData.engagementPaths) {
      servicesData.engagementPaths.forEach(function (path) {
        var card = createElement('div', 'engagement-card reveal', '');
        card.innerHTML =
          '<h3 class="engagement-card__title">' + escapeHtml(path.title) + '</h3>' +
          '<p class="engagement-card__desc">' + escapeHtml(path.description) + '</p>';
        pathsContainer.appendChild(card);
      });
    }

    // Service cards
    var gridContainer = document.getElementById('services-grid');
    if (gridContainer && servicesData.items) {
      servicesData.items.forEach(function (item) {
        var card = createElement('div', 'service-card reveal', '');
        card.dataset.audiences = (item.audiences || []).join(' ');
        card.dataset.solutions = (item.solutions || []).join(' ');

        var keywordsHtml = '';
        if (item.keywords) {
          keywordsHtml = '<div class="service-card__keywords">' +
            item.keywords.map(function (k) { return '<span class="keyword-tag">' + escapeHtml(k) + '</span>'; }).join('') +
            '</div>';
        }

        card.innerHTML =
          '<div class="service-card__icon">' + getIcon(item.icon) + '</div>' +
          '<h3 class="service-card__title">' + escapeHtml(item.title) + '</h3>' +
          '<p class="service-card__desc">' + escapeHtml(item.description) + '</p>' +
          keywordsHtml;

        gridContainer.appendChild(card);
      });
    }
  }


  /* ----------------------------------------------------------
     TRAINING
     ---------------------------------------------------------- */

  function renderTraining(trainingData) {
    if (!trainingData) return;

    setText('training-title', trainingData.sectionTitle);
    setText('training-intro', trainingData.sectionIntro);

    // Highlights
    var highlightsContainer = document.getElementById('training-highlights');
    if (highlightsContainer && trainingData.highlights) {
      trainingData.highlights.forEach(function (h) {
        var badge = createElement('div', 'highlight-badge reveal', escapeHtml(h));
        highlightsContainer.appendChild(badge);
      });
    }

    // Training offerings
    var gridContainer = document.getElementById('training-grid');
    if (gridContainer && trainingData.offerings) {
      trainingData.offerings.forEach(function (item) {
        var card = createElement('div', 'training-card reveal', '');
        card.dataset.audiences = (item.audiences || ['startup', 'enterprise', 'technical']).join(' ');
        card.dataset.solutions = 'training';
        card.innerHTML =
          '<h3 class="training-card__title">' + escapeHtml(item.title) + '</h3>' +
          '<p class="training-card__desc">' + escapeHtml(item.description) + '</p>' +
          '<div class="training-card__meta">' +
            '<span>📋 ' + escapeHtml(item.format) + '</span>' +
            '<span>⏱️ ' + escapeHtml(item.duration) + '</span>' +
          '</div>';
        gridContainer.appendChild(card);
      });
    }
  }


  /* ----------------------------------------------------------
     PROJECTS
     ---------------------------------------------------------- */

  function renderProjects(projectsData) {
    if (!projectsData) return;

    setText('projects-title', projectsData.sectionTitle);
    setText('projects-intro', projectsData.sectionIntro);

    var gridContainer = document.getElementById('projects-grid');
    if (!gridContainer || !projectsData.items) return;

    projectsData.items.forEach(function (project) {
      var card = createElement('div', 'project-card reveal', '');
      card.dataset.audiences = (project.audiences || []).join(' ');
      card.dataset.solutions = (project.solutions || []).join(' ');

      var techHtml = '';
      if (project.tech) {
        techHtml = '<div class="project-card__tech">' +
          project.tech.map(function (t) { return '<span class="tech-tag">' + escapeHtml(t) + '</span>'; }).join('') +
          '</div>';
      }

      var pubsHtml = '';
      if (project.publications && project.publications.length > 0) {
        pubsHtml = '<div class="project-card__publications">' +
          '<div class="project-card__pub-label">Published Reports</div>' +
          '<ul class="project-card__pub-list">' +
            project.publications.map(function (p) { return '<li>' + escapeHtml(p) + '<div class="publication-item__meta">Contributor</div></li>'; }).join('') +
          '</ul>' +
          '</div>';
      }

      card.innerHTML =
        '<div class="project-card__header">' +
          '<h3 class="project-card__title">' + escapeHtml(project.title) + '</h3>' +
          '<span class="project-card__meta">' + escapeHtml(project.period) + '</span>' +
        '</div>' +
        '<div class="project-card__client">' + escapeHtml(project.client) + '</div>' +
        '<div class="project-card__role">' + escapeHtml(project.role) + '</div>' +
        '<div class="project-card__section">' +
          '<div class="project-card__section-label">Challenge</div>' +
          '<p class="project-card__section-text">' + escapeHtml(project.problem) + '</p>' +
        '</div>' +
        '<div class="project-card__section">' +
          '<div class="project-card__section-label">Solution & Outcome</div>' +
          '<p class="project-card__section-text">' + escapeHtml(project.contribution) + '</p>' +
        '</div>' +
        techHtml +
        pubsHtml;

      gridContainer.appendChild(card);
    });
  }


  /* ----------------------------------------------------------
     THINGS I'VE BUILT
     ---------------------------------------------------------- */

  function renderBuilt(builtData) {
    if (!builtData) return;

    setText('built-title', builtData.sectionTitle);
    setText('built-intro', builtData.sectionIntro);

    var gridContainer = document.getElementById('built-grid');
    if (!gridContainer || !builtData.items) return;

    builtData.items.forEach(function (item) {
      var card = createElement('div', 'built-card reveal', '');

      var techHtml = '';
      if (item.tech) {
        techHtml = '<div class="built-card__tech">' +
          item.tech.map(function (t) { return '<span class="tech-tag">' + escapeHtml(t) + '</span>'; }).join('') +
          '</div>';
      }

      var linksHtml = '<div class="built-card__links">';
      if (item.demoUrl) {
        linksHtml += '<a href="' + escapeAttr(item.demoUrl) + '" class="btn btn--sm btn--outline-dark" target="_blank" rel="noopener noreferrer">' +
          '<span class="btn__icon">' + getIcon('link') + '</span><span>Live Demo</span></a>';
      }
      if (item.repoUrl) {
        linksHtml += '<a href="' + escapeAttr(item.repoUrl) + '" class="btn btn--sm btn--outline-dark" target="_blank" rel="noopener noreferrer">' +
          '<span class="btn__icon">' + getIcon('github') + '</span><span>GitHub</span></a>';
      }
      linksHtml += '</div>';

      card.innerHTML =
        (item.label ? '<span class="built-card__label">' + escapeHtml(item.label) + '</span>' : '') +
        '<h3 class="built-card__title">' + escapeHtml(item.title) + '</h3>' +
        '<p class="built-card__desc">' + escapeHtml(item.description) + '</p>' +
        techHtml +
        linksHtml;

      gridContainer.appendChild(card);
    });
  }

  function renderDashboards() {
    var grid = document.getElementById('dashboard-grid');
    if (!grid) return;
    var dashboards = [
      { title: 'Stock Tracker', image: 'stock-tracker.png', url: 'https://app.powerbi.com/view?r=eyJrIjoiYmUyYjViMDItMTIxNy00NTU3LTliM2UtNWFkMWViYjExZGRjIiwidCI6Ijc0MTdhZmNkLWU3MjgtNGYxZi04YTcwLWFlNjNlMmVjZmMyOCJ9', context: 'Scan company fundamentals, sector mix and performance signals in one focused market view.', category: 'Finance & investing' },
      { title: 'Sales Dashboard', image: 'sales.png', url: 'https://public.tableau.com/views/Superstore-2021/Dashboard1?:showVizHome=no&:embed=true', context: 'Track sales, orders and product performance across categories and regions.', category: 'Commercial analytics' },
      { title: 'Development Sector Dashboard', image: 'development-sector.png', url: 'https://public.tableau.com/views/Gender_Eq_ver2_0/Dashboard1?:showVizHome=no&:embed=true', context: 'Turn gender equality survey findings into a clear view of priorities and progress.', category: 'Development & impact' },
      { title: 'Informative Dashboard', image: 'informative.png', url: 'https://public.tableau.com/views/volcanoes_1/Dashboard1?:showVizHome=no&:embed=true', context: 'Explore a global dataset through an engaging, geographic data story.', category: 'Data storytelling' },
      { title: 'Public Sector Dashboard', image: 'public-health.png', url: 'https://public.tableau.com/views/Pollution_11/Dashboard1?:showVizHome=no&:embed=true', context: 'Make public data easier to interpret with location and pollutant level comparisons.', category: 'Public sector' },
      { title: 'Nutrition Dashboard', image: 'nutrition.png', url: 'https://public.tableau.com/views/Food-TheBodyFuelIronViz2020/Dashboard2?:showVizHome=no&:embed=true', context: 'Present nutrition guidance and recommended intake across age groups.', category: 'Health & nutrition' },
      { title: 'Public Health', image: 'public-health.png', url: 'https://public.tableau.com/views/COVID-19_JHU/World_Snap?:showVizHome=no&:embed=true', context: 'Explore global COVID-19 indicators in a public health view.', category: 'Public health' },
      { title: 'Which Chart to Use When', image: 'chart-guide.png', url: 'https://app.powerbi.com/view?r=eyJrIjoiMzJlODlmM2UtNzg5OC00NjkxLTllODMtNWEwODJiYjQyZjZjIiwidCI6Ijc0MTdhZmNkLWU3MjgtNGYxZi04YTcwLWFlNjNlMmVjZmMyOCJ9', context: 'See how chart choices can make comparisons, patterns and relationships easier to understand.', category: 'Data visualization' },
      { title: 'HR Analytics', image: 'hr-analytics.png', url: 'https://app.powerbi.com/view?r=eyJrIjoiNjFlZjE1NzUtMzg2OC00NjAzLWE1NzctNmFiYTk0MTgxNzk0IiwidCI6Ijc0MTdhZmNkLWU3MjgtNGYxZi04YTcwLWFlNjNlMmVjZmMyOCJ9', context: 'Explore workforce composition, headcount trends and employee demographics.', category: 'People analytics' },
    ];
    dashboards.forEach(function (dashboard) {
      var card = createElement('article', 'dashboard-card reveal', '');
      card.innerHTML = '<div class="dashboard-card__visual"><img src="assets/images/visualizations/' + escapeAttr(dashboard.image) + '" alt="' + escapeAttr(dashboard.title) + ' preview" loading="lazy"><span class="dashboard-card__view" aria-hidden="true">View dashboard <span>↗</span></span></div><div class="dashboard-card__body"><span class="dashboard-card__category">' + escapeHtml(dashboard.category) + '</span><h4>' + escapeHtml(dashboard.title) + '</h4><p>' + escapeHtml(dashboard.context) + '</p><button class="dashboard-open" type="button" data-dashboard-url="' + escapeAttr(dashboard.url) + '" data-dashboard-title="' + escapeAttr(dashboard.title) + '">Explore live dashboard <span aria-hidden="true">↗</span></button></div>';
      grid.appendChild(card);
    });
    var dialog = document.getElementById('dashboard-dialog');
    var frame = document.getElementById('dashboard-dialog-frame');
    var title = document.getElementById('dashboard-dialog-title');
    var external = document.getElementById('dashboard-dialog-external');
    var closeButton = document.getElementById('dashboard-dialog-close');
    if (dialog && frame) {
      grid.addEventListener('click', function (event) {
        var button = event.target.closest('.dashboard-open');
        if (!button) return;
        var url = button.getAttribute('data-dashboard-url');
        title.textContent = button.getAttribute('data-dashboard-title');
        frame.src = url;
        external.href = url;
        dialog.showModal();
      });
      closeButton.addEventListener('click', function () { dialog.close(); });
      dialog.addEventListener('close', function () { frame.src = ''; });
    }
  }


  /* ----------------------------------------------------------
     EXPERIENCE & EXPERTISE
     ---------------------------------------------------------- */

  function renderExperience(expData) {
    if (!expData) return;

    setText('experience-title', expData.sectionTitle);
    setText('experience-intro', expData.sectionIntro);

    // Trust strip
    var trustContainer = document.getElementById('trust-strip');
    if (trustContainer && expData.trustStrip) {
      expData.trustStrip.forEach(function (item) {
        var el = createElement('div', 'trust-item reveal', '');
        el.innerHTML =
          '<div class="trust-item__value">' + escapeHtml(item.value) + '</div>' +
          '<div class="trust-item__label">' + escapeHtml(item.label) + '</div>';
        trustContainer.appendChild(el);
      });
    }

    // Timeline
    var timelineContainer = document.getElementById('experience-timeline');
    if (timelineContainer && expData.timeline) {
      var timelineTitle = createElement('h3', 'experience__timeline-title', 'Career Timeline');
      timelineContainer.appendChild(timelineTitle);

      var timeline = createElement('div', 'timeline', '');
      expData.timeline.forEach(function (item) {
        var typeClass = item.type ? ' timeline__item--' + item.type : '';
        var el = createElement('div', 'timeline__item' + typeClass, '');
        el.innerHTML =
          '<div class="timeline__role">' + escapeHtml(item.role) + '</div>' +
          '<div class="timeline__org">' + escapeHtml(item.org) + '</div>' +
          '<div class="timeline__period">' + escapeHtml(item.period) + '</div>';
        timeline.appendChild(el);
      });
      timelineContainer.appendChild(timeline);
    }

    // Education
    var eduContainer = document.getElementById('experience-education');
    if (eduContainer && expData.education) {
      var eduTitle = createElement('h3', 'experience__sidebar-title', 'Education');
      eduContainer.appendChild(eduTitle);

      expData.education.forEach(function (item) {
        var el = createElement('div', 'sidebar-item', '');
        el.innerHTML =
          '<div class="sidebar-item__title">' + escapeHtml(item.degree) + '</div>' +
          '<div class="sidebar-item__sub">' + escapeHtml(item.institution) + '</div>' +
          '<div class="sidebar-item__sub">' + escapeHtml(item.period) + '</div>';
        eduContainer.appendChild(el);
      });
    }

    // Certifications
    var certContainer = document.getElementById('experience-certifications');
    if (certContainer && expData.certifications) {
      var certTitle = createElement('h3', 'experience__sidebar-title', 'Certifications');
      certContainer.appendChild(certTitle);

      var certWrap = createElement('div', '', '');
      expData.certifications.forEach(function (cert) {
        var tag = createElement('span', 'certification-tag', escapeHtml(cert));
        certWrap.appendChild(tag);
      });
      certContainer.appendChild(certWrap);
    }

    // Publications
    var pubContainer = document.getElementById('experience-publications');
    if (pubContainer && expData.publications) {
      var pubTitle = createElement('h3', 'experience__sidebar-title', 'Publications');
      pubContainer.appendChild(pubTitle);

      expData.publications.forEach(function (pub) {
        var el = createElement('div', 'publication-item', '');
        var meta = escapeHtml(pub.publisher) + ', ' + escapeHtml(pub.year);
        if (pub.note) meta += ' (' + escapeHtml(pub.note) + ')';
        meta += ' · Contributor';
        el.innerHTML =
          '<div class="publication-item__title">' + escapeHtml(pub.title) + '</div>' +
          '<div class="publication-item__meta">' + meta + '</div>';
        pubContainer.appendChild(el);
      });
    }

    // Skills grid
    var skillsContainer = document.getElementById('experience-skills');
    if (skillsContainer && expData.coreSkills) {
      var skillsTitle = createElement('h3', 'skills-grid-title', 'Core Competencies');
      skillsContainer.appendChild(skillsTitle);

      var grid = createElement('div', 'skills-grid', '');
      expData.coreSkills.forEach(function (skill) {
        var el = createElement('div', 'skill-item', '');
        el.innerHTML =
          '<div class="skill-item__category">' + escapeHtml(skill.category) + '</div>' +
          '<div class="skill-item__list">' + escapeHtml(skill.skills) + '</div>';
        grid.appendChild(el);
      });
      skillsContainer.appendChild(grid);
    }
  }


  /* ----------------------------------------------------------
     IDEAS & CONTENT
     ---------------------------------------------------------- */

  function renderIdeas(ideasData) {
    if (!ideasData) return;

    setText('ideas-title', ideasData.sectionTitle);
    setText('ideas-intro', ideasData.sectionIntro);

    var container = document.getElementById('ideas-content');
    if (!container) return;

    // YouTube section
    if (ideasData.youtube) {
      var ytSection = createElement('div', 'ideas__youtube', '');

      var channelLink = createElement('a', 'ideas__channel-link', '');
      channelLink.href = ideasData.youtube.channelUrl;
      channelLink.target = '_blank';
      channelLink.rel = 'noopener noreferrer';
      channelLink.innerHTML =
        '<span class="yt-icon">' + getIcon('youtube') + '</span>' +
        '<span>' + escapeHtml(ideasData.youtube.channelName) + ' — YouTube Channel</span>';
      ytSection.appendChild(channelLink);

      // Featured videos
      if (ideasData.youtube.featuredVideos && ideasData.youtube.featuredVideos.length > 0) {
        var videosGrid = createElement('div', 'ideas__videos-grid', '');
        ideasData.youtube.featuredVideos.forEach(function (video) {
          var card = createElement('div', 'card', '');
          card.innerHTML =
            '<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:var(--border-radius-sm);">' +
              '<iframe src="https://www.youtube.com/embed/' + escapeAttr(video.videoId) + '" ' +
              'style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;" ' +
              'allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ' +
              'allowfullscreen loading="lazy" title="' + escapeAttr(video.title) + '"></iframe>' +
            '</div>' +
            '<h4 style="margin-top:var(--space-md);font-size:var(--text-base);">' + escapeHtml(video.title) + '</h4>' +
            (video.description ? '<p style="font-size:var(--text-sm);color:var(--color-text-secondary);">' + escapeHtml(video.description) + '</p>' : '');
          videosGrid.appendChild(card);
        });
        ytSection.appendChild(videosGrid);
      } else {
        var note = createElement('p', 'ideas__empty-note', 'Featured videos coming soon — subscribe to the channel for the latest content.');
        ytSection.appendChild(note);
      }

      container.appendChild(ytSection);
    }

    // Articles
    if (ideasData.articles && ideasData.articles.length > 0) {
      var articlesSection = createElement('div', 'ideas__articles', '');
      // TODO: Render articles when available
      container.appendChild(articlesSection);
    }
  }


  /* ----------------------------------------------------------
     CONTACT
     ---------------------------------------------------------- */

  function renderContact(contactData) {
    if (!contactData) return;

    setText('contact-title', contactData.sectionTitle);
    setText('contact-intro', contactData.sectionIntro);

    var container = document.getElementById('contact-content');
    if (!container) return;

    // Left: Contact info
    var infoCol = createElement('div', 'contact__info', '');

    // Email
    if (contactData.email) {
      infoCol.innerHTML +=
        '<div class="contact__item">' +
          '<div class="contact__item-icon">' + getIcon('email') + '</div>' +
          '<div class="contact__item-text"><a href="mailto:' + escapeAttr(contactData.email) + '">' + escapeHtml(contactData.email) + '</a></div>' +
        '</div>';
    }

    // Phone
    if (contactData.phone) {
      infoCol.innerHTML +=
        '<div class="contact__item">' +
          '<div class="contact__item-icon">' + getIcon('phone') + '</div>' +
          '<div class="contact__item-text"><a href="tel:' + escapeAttr(contactData.phone.replace(/[^+\d]/g, '')) + '">' + escapeHtml(contactData.phone) + '</a></div>' +
        '</div>';
    }

    // Social links
    if (contactData.socialLinks) {
      var socialsHtml = '<div class="contact__socials">';
      contactData.socialLinks.forEach(function (social) {
        socialsHtml +=
          '<a href="' + escapeAttr(social.url) + '" class="social-link" target="_blank" rel="noopener noreferrer" ' +
          'aria-label="' + escapeAttr(social.platform) + '" title="' + escapeAttr(social.platform) + '">' +
          getIcon(social.icon) +
          '</a>';
      });
      socialsHtml += '</div>';
      infoCol.innerHTML += socialsHtml;
    }

    // Company links
    var companyHtml = '<div class="contact__company-links">';
    if (contactData.companyLink) {
      companyHtml +=
        '<div class="contact__company-link">' +
          '<a href="' + escapeAttr(contactData.companyLink.url) + '" target="_blank" rel="noopener noreferrer">' +
          escapeHtml(contactData.companyLink.label) + '</a>' +
          ' — ' + escapeHtml(contactData.companyLink.description) +
        '</div>';
    }
    if (contactData.academyLink) {
      companyHtml +=
        '<div class="contact__company-link">' +
          '<a href="' + escapeAttr(contactData.academyLink.url) + '" target="_blank" rel="noopener noreferrer">' +
          escapeHtml(contactData.academyLink.label) + '</a>' +
          ' — ' + escapeHtml(contactData.academyLink.description) +
        '</div>';
    }
    companyHtml += '</div>';
    infoCol.innerHTML += companyHtml;

    container.appendChild(infoCol);

    // Right: CTA box
    var ctaBox = createElement('div', 'contact__cta-box', '');
    ctaBox.innerHTML =
      '<div class="contact__cta-label">' + escapeHtml(contactData.calendlyLabel || 'Book a Discussion') + '</div>' +
      '<p class="contact__cta-sub">No pitch, no obligation — just a focused conversation about your data challenges.</p>' +
      '<a href="' + escapeAttr(contactData.calendly) + '" class="btn btn--primary" target="_blank" rel="noopener noreferrer">' +
        '<span class="btn__icon">' + getIcon('calendar') + '</span>' +
        '<span>Schedule a Call</span>' +
      '</a>';
    container.appendChild(ctaBox);
  }


  /* ----------------------------------------------------------
     FOOTER
     ---------------------------------------------------------- */

  function renderFooter(footerData) {
    if (!footerData) return;

    var footer = document.getElementById('site-footer');
    if (!footer) return;

    var container = footer.querySelector('.container');
    if (!container) return;

    var year = new Date().getFullYear();

    var html =
      '<div class="footer__copyright">© ' + year + ' ' + escapeHtml(footerData.copyright) + '. All rights reserved.</div>';

    if (footerData.tagline) {
      html += '<div class="footer__tagline">' + escapeHtml(footerData.tagline) + '</div>';
    }

    if (footerData.links && footerData.links.length > 0) {
      html += '<div class="footer__links">';
      footerData.links.forEach(function (link) {
        html += '<a href="' + escapeAttr(link.url) + '" class="footer__link" target="_blank" rel="noopener noreferrer">' +
          escapeHtml(link.label) + '</a>';
      });
      html += '</div>';
    }

    container.innerHTML = html;
  }


  /* ----------------------------------------------------------
     MOBILE NAVIGATION
     ---------------------------------------------------------- */

  function initMobileNav() {
    var toggle = document.getElementById('nav-toggle');
    var navLinks = document.getElementById('nav-links');
    var body = document.body;

    if (!toggle || !navLinks) return;

    // Create overlay
    var overlay = createElement('div', 'nav-overlay', '');
    overlay.id = 'nav-overlay';
    body.appendChild(overlay);

    function openMenu() {
      toggle.classList.add('nav__toggle--open');
      navLinks.classList.add('nav__links--open');
      overlay.classList.add('nav-overlay--visible');
      toggle.setAttribute('aria-expanded', 'true');
      body.style.overflow = 'hidden';
    }

    function closeMenu() {
      toggle.classList.remove('nav__toggle--open');
      navLinks.classList.remove('nav__links--open');
      overlay.classList.remove('nav-overlay--visible');
      toggle.setAttribute('aria-expanded', 'false');
      body.style.overflow = '';
    }

    toggle.addEventListener('click', function () {
      var isOpen = navLinks.classList.contains('nav__links--open');
      if (isOpen) closeMenu();
      else openMenu();
    });

    overlay.addEventListener('click', closeMenu);

    // Close menu when a nav link is clicked
    navLinks.addEventListener('click', function (e) {
      if (e.target.classList.contains('nav__link')) {
        closeMenu();
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeMenu();
    });
  }


  /* ----------------------------------------------------------
     SCROLL: HEADER STYLE
     ---------------------------------------------------------- */

  function initScrollHeader() {
    var header = document.getElementById('site-header');
    if (!header) return;

    var scrollThreshold = 50;

    function onScroll() {
      if (window.scrollY > scrollThreshold) {
        header.classList.add('site-header--scrolled');
      } else {
        header.classList.remove('site-header--scrolled');
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // Check on load
  }


  /* ----------------------------------------------------------
     SCROLL: ACTIVE NAV HIGHLIGHTING
     ---------------------------------------------------------- */

  function initActiveNavHighlight() {
    var sections = document.querySelectorAll('section[id]');
    var navLinks = document.querySelectorAll('.nav__link');

    if (!sections.length || !navLinks.length) return;

    function onScroll() {
      var scrollPos = window.scrollY + 100;

      sections.forEach(function (section) {
        var top = section.offsetTop;
        var height = section.offsetHeight;
        var id = section.getAttribute('id');

        if (scrollPos >= top && scrollPos < top + height) {
          navLinks.forEach(function (link) {
            link.classList.remove('nav__link--active');
            if (link.getAttribute('href') === '#' + id) {
              link.classList.add('nav__link--active');
            }
          });
        }
      });
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }


  /* ----------------------------------------------------------
     SCROLL: REVEAL ANIMATIONS
     ---------------------------------------------------------- */

  function initRevealAnimations() {
    var reveals = document.querySelectorAll('.reveal');
    if (!reveals.length) return;

    // Use Intersection Observer if available
    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal--visible');
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
      });

      reveals.forEach(function (el) {
        observer.observe(el);
      });
    } else {
      // Fallback: just show everything
      reveals.forEach(function (el) {
        el.classList.add('reveal--visible');
      });
    }
  }


  /* ----------------------------------------------------------
     SECURITY HELPERS
     ---------------------------------------------------------- */

  function escapeHtml(str) {
    if (str == null) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function escapeAttr(str) {
    if (str == null) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

})();

