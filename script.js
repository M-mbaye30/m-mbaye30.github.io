const cvUrl = {
  fr: 'public/CvDeMouhamed.pdf',
  en: 'public/MouhamedResum.pdf',
}
const currentLangKey = 'lang'
const currentThemeKey = 'theme'

let currentLang = localStorage.getItem(currentLangKey) === 'en' ? 'en' : 'fr'
let currentTheme = localStorage.getItem(currentThemeKey) === 'dark' ? 'dark' : 'light'

const researchInterests = {
  fr: [
    'Recherche et extraction d’information',
    'Traitement des langues à faibles ressources',
    'Linguistique de corpus et annotation',
    'Graphes de connaissances',
  ],
  en: [
    'Information retrieval and extraction',
    'Low-resource language processing',
    'Corpus linguistics and annotation',
    'Knowledge graphs',
  ],
}

const projects = [
  {
    title: 'AI Orchestrator',
    description: {
      fr: "Système multi-agents autonome pour le raisonnement et l'analyse documentaire intelligente.",
      en: 'Autonomous multi-agent system for intelligent document analysis and reasoning.',
    },
    url: 'https://agentic-ai-orchestrator-181631404910.europe-west1.run.app/',
    repository: 'https://github.com/M-mbaye30/Perso_AI_AGENT',
  },
  {
    title: 'KNOW-SN RAG',
    description: {
      fr: 'Système de question-réponse sur les textes législatifs sénégalais. Recherche sémantique vectorielle (ChromaDB) combinée à GPT-4o-mini.',
      en: 'Q&A system for Senegalese legislative texts. Semantic vector search (ChromaDB) combined with GPT-4o-mini.',
    },
    url: 'https://know-sn-rag-861961046598.europe-west1.run.app/',
  },
  {
    title: 'IMGT-NER-APP',
    description: {
      fr: "Application d'extraction automatique d'entités nommées pour les anticorps monoclonaux, spécialisée dans la nomenclature DCI de l'OMS.",
      en: 'Automated named entity extraction tool for monoclonal antibodies, specialized in WHO INN nomenclature.',
    },
    url: 'https://www.imgt.org/nerapp/',
  },
]

const publications = [
  {
    authors: 'Mouhamed Mbaye, Thierno Diop',
    title: 'MudawanSn: A Gold-Standard Wolof–Arabic Parallel Corpus for Machine Translation',
    year: '2026',
    url: 'https://arxiv.org/pdf/2609.17539v1',
  },
  {
    authors: 'Mouhamed Mbaye',
    title: 'Known but Unreachable: A Diagnostic Evaluation of Wolof Entity Linking against Wikidata',
    year: '2026',
    url: 'http://sag.art.uniroma2.it/NL4AI/',
  },
]

const internshipReport = {
  author: 'Mouhamed Mbaye',
  title: 'Development of IMGT-NER-APP: Automated Named Entity Extraction for Monoclonal Antibodies',
  year: '2025',
  url: 'public/Rapport-de-stage-M2-Mouhamed.pdf',
}

const datasets = [
  {
    title: 'Wolof Entity Linking',
    description: {
      fr: "Dataset pour la tâche de liaison d'entités (Entity Linking) en langue wolof.",
      en: 'Dataset for the Entity Linking task in the Wolof language.',
    },
    url: 'https://huggingface.co/datasets/mbaye930/WolofEntityLinking',
  },
  {
    title: 'Wolof-Arabic Parallel Corpus',
    description: {
      fr: "Corpus parallèle wolof-arabe pour l'entraînement de modèles de traduction automatique et l'alignement de textes.",
      en: 'Wolof-Arabic parallel corpus for training machine translation models and text alignment.',
    },
    url: 'https://huggingface.co/datasets/mbaye930/wolof-arabic-parallel-corpus',
  },
]

const communications = {
  fr: {
    title: 'Colloque ColDoc 2026 (Université Paris Nanterre)',
    date: '9-10 Nov. 2026',
    type: 'Poster (Accepté)',
    venue: 'Université Paris Nanterre',
    documentUrl: 'https://coldoc2026.sciencesconf.org/755781/document',
    websiteUrl: 'https://coldoc2026.sciencesconf.org/',
    websiteLabel: 'Site du colloque',
  },
  en: {
    title: 'ColDoc 2026 Symposium (Université Paris Nanterre)',
    date: 'Nov. 9-10, 2026',
    type: 'Poster (Accepted)',
    venue: 'Université Paris Nanterre',
    documentUrl: 'https://coldoc2026.sciencesconf.org/755781/document',
    websiteUrl: 'https://coldoc2026.sciencesconf.org/',
    websiteLabel: 'Symposium website',
  },
}

const education = {
  fr: [
    { year: '2026 – 2027', degree: 'Master 2 Sciences du langage – parcours ADiReO (en cours)', institution: 'Université Paul-Valéry Montpellier 3, France' },
    { year: '2025', degree: 'Master 2 Traitement Automatique des Langues (TAL)', institution: 'Université Marie et Louis Pasteur, Besançon, France' },
    { year: '2024', degree: 'Master 2 Computational linguistics', institution: 'Université Mohammed V, Rabat, Maroc' },
    { year: '2022', degree: 'Licence de Linguistique', institution: 'Université Cady Ayyad de Marrakech, Maroc' },
  ],
  en: [
    { year: '2026 – 2027', degree: 'Master 2 Language Sciences – ADiReO track (in progress)', institution: 'Paul-Valéry University Montpellier 3, France' },
    { year: '2025', degree: 'Master 2 in Natural Language Processing (NLP)', institution: 'Marie and Louis Pasteur University, Besançon, France' },
    { year: '2024', degree: 'Master 2 Computational Linguistics', institution: 'Mohammed V University, Rabat, Morocco' },
    { year: '2022', degree: "Bachelor's in Linguistics", institution: 'Cady Ayyad University, Marrakech, Morocco' },
  ],
}

const certifications = {
  fr: [
    {
      year: '2025',
      title: 'Retrieval Augmented Generation (RAG)',
      issuer: 'DeepLearning.AI',
      url: 'public/rag-certification.pdf',
      details: "Conception, implémentation et déploiement de systèmes RAG complets et fiables, adaptés aux besoins spécifiques de divers domaines d'application.",
    },
    {
      year: '2025',
      title: 'Text Mining for Marketing',
      issuer: 'O.P. Jindal Global University',
      url: 'public/text-mining-marketing.pdf',
      details: "Acquisition des bases du Text Mining et identification des meilleures pratiques en analyse textuelle pour la prise de décision.",
    },
    {
      year: '2024',
      title: 'Natural Language Processing with Probabilistic Models',
      issuer: 'DeepLearning.AI',
      url: 'public/NLP With Probabilistic Models.pdf',
      details: "Maîtrise des modèles probabilistes, incluant les N-grammes, l'étiquetage de séquences et les algorithmes d'auto-complétion.",
    },
    {
      year: '2024',
      title: 'Natural Language Processing with Classification and Vector Spaces',
      issuer: 'DeepLearning.AI',
      url: 'public/NLP With Classification.pdf',
      details: 'Techniques fondamentales du TAL : analyse de sentiment, espaces vectoriels et plongements de mots (word embeddings).',
    },
    {
      year: '2024',
      title: 'Elements of AI',
      issuer: 'University of Helsinki & MinnaLearn',
      url: 'public/elements-of-ai.png',
      details: "Compréhension fondamentale des concepts de l'IA : machine learning, réseaux de neurones et implications sociétales.",
    },
  ],
  en: [
    {
      year: '2025',
      title: 'Retrieval Augmented Generation (RAG)',
      issuer: 'DeepLearning.AI',
      url: 'public/rag-certification.pdf',
      details: 'Ability to design, implement, and deploy complete and reliable RAG systems, tailored to the specific needs of various application domains.',
    },
    {
      year: '2025',
      title: 'Text Mining for Marketing',
      issuer: 'O.P. Jindal Global University',
      url: 'public/text-mining-marketing.pdf',
      details: 'Gaining the ability to comprehend the basics and applications of Text Mining, while identifying best practices in text analysis for informed decision-making.',
    },
    {
      year: '2024',
      title: 'Natural Language Processing with Probabilistic Models',
      issuer: 'DeepLearning.AI',
      url: 'public/NLP With Probabilistic Models.pdf',
      details: 'Mastery of probabilistic models, including N-grams, sequence labeling, and auto-completion algorithms.',
    },
    {
      year: '2024',
      title: 'Natural Language Processing with Classification and Vector Spaces',
      issuer: 'DeepLearning.AI',
      url: 'public/NLP With Classification.pdf',
      details: 'Foundational NLP techniques: sentiment analysis, vector spaces, and word embeddings.',
    },
    {
      year: '2024',
      title: 'Elements of AI',
      issuer: 'University of Helsinki & MinnaLearn',
      url: 'public/elements-of-ai.png',
      details: 'Fundamental understanding of AI concepts, including machine learning, neural networks, and societal implications.',
    },
  ],
}

const socialLinks = [
  {
    label: 'GitHub',
    url: 'https://github.com/M-mbaye30',
    icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.23-1.62-1.23-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 .1.77 2.05 3.29 1.55.1-.72.39-1.21.7-1.49-2.48-.28-5.09-1.24-5.09-5.53 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.05-1.14 3.05-1.14.61 1.54.23 2.68.11 2.96.72.78 1.15 1.77 1.15 2.99 0 4.3-2.61 5.25-5.1 5.52.4.35.75 1.03.75 2.08v3.09c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z"/></svg>',
  },
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/mouhamed-mbaye-nlp-tal/',
    icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#0a66c2" d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM8.01 18.34H5.03V9.75h2.98v8.59ZM6.52 8.58a1.73 1.73 0 1 1 .02-3.46 1.73 1.73 0 0 1-.02 3.46Zm11.82 9.76h-2.97v-4.18c0-1-.02-2.29-1.4-2.29-1.4 0-1.62 1.09-1.62 2.22v4.25H9.38V9.75h2.85v1.17h.04c.4-.73 1.36-1.5 2.8-1.5 3 0 3.56 1.97 3.56 4.53v4.39Z"/></svg>',
  },
  {
    label: 'Google Scholar',
    url: 'https://scholar.google.com/citations?user=gNLhmKoAAAAJ&hl=fr',
    icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#4285f4" d="M12 3 1 9l11 6 9-4.91V17h2V9L12 3Z"/><path fill="#34a853" d="M5 12.1V17c0 2.21 3.13 4 7 4s7-1.79 7-4v-4.9l-7 3.82-7-3.82Z"/></svg>',
  },
  {
    label: 'Hugging Face',
    url: 'https://huggingface.co/mbaye930',
    icon: '<img src="public/huggingface.png" alt="" width="24" height="24">',
  },
]

function renderHome(lang) {
  const isFr = lang === 'fr'
  const communication = communications[lang]
  const page = document.getElementById('page-body')
  if (!page) return

  page.innerHTML = `
    <section class="home-profile" id="profile">
      <div class="home-profile-photo-wrap">
        <img src="public/profile-photo.jpg" alt="${isFr ? 'Portrait de Mouhamed Mbaye' : 'Portrait of Mouhamed Mbaye'}" class="home-profile-photo">
      </div>
      <div class="home-profile-copy">
        <h1 class="home-heading">Mouhamed Mbaye</h1>
        <p class="home-role">${isFr ? 'Ingénieur en Traitement Automatique des Langues' : 'Natural Language Processing Engineer'}</p>
        <p class="home-affiliation"><a href="https://galsen.ai/" target="_blank" rel="noopener noreferrer">GalsenAI Lab</a><sup>1</sup> · Université Paul-Valéry Montpellier III<sup>2</sup></p>
        <a class="home-email" href="mailto:mouhamed.mbaye@galsen.ai">mouhamed.mbaye@galsen.ai<sup>1</sup></a>
        <a class="home-email" href="mailto:mouhamed.mbaye1@etu.umpv.fr">mouhamed.mbaye1@etu.umpv.fr<sup>2</sup></a>
        ${cvUrl[lang] ? `<div class="home-links">
          <a class="home-cv-link" href="${cvUrl[lang]}" target="_blank" rel="noopener noreferrer">${isFr ? 'CV (français)' : 'CV (English)'}</a>
        </div>` : ''}
        <div class="home-social-links" aria-label="${isFr ? 'Profils professionnels' : 'Professional profiles'}">
          ${socialLinks.map(item => `<a href="${item.url}" target="_blank" rel="noopener noreferrer" aria-label="${item.label}" title="${item.label}">${item.icon}</a>`).join('')}
        </div>
      </div>
    </section>

    <section class="home-section" id="research">
      <div class="home-section-heading"><h2>${isFr ? 'À propos de moi' : 'About me'}</h2></div>
      <p class="home-section-intro">${isFr
        ? "Je suis Mouhamed Mbaye, ingénieur en traitement automatique des langues (TAL/NLP) et membre de l'équipe R&D de GalsenAI Lab. Je m'intéresse particulièrement à la recherche et à l'extraction d'information ainsi qu'au traitement des langues à faibles ressources, notamment le wolof."
        : 'I am Mouhamed Mbaye, a Natural Language Processing (NLP) engineer and member of the R&D team at GalsenAI Lab. My interests include information retrieval and extraction, as well as low-resource language processing, particularly for Wolof.'
      }</p>
      <h3 class="home-subheading">${isFr ? 'Intérêts de recherche' : 'Research Interests'}</h3>
      <ul class="home-research-list">${researchInterests[lang].map(interest => `<li>${interest}</li>`).join('')}</ul>
    </section>

    <section class="home-section" id="projects">
      <div class="home-section-heading"><h2>${isFr ? 'Projets' : 'Projects'}</h2></div>
      <div class="home-project-list">
        ${projects.map(project => `
          <article class="home-project-entry">
            <div class="home-project-copy">
              <h3>${project.title}</h3>
              <p>${project.description[lang]} <a class="raw-url" href="${project.url}" target="_blank" rel="noopener noreferrer">${project.url}</a>${project.repository ? ` <a class="raw-url" href="${project.repository}" target="_blank" rel="noopener noreferrer">${project.repository}</a>` : ''}</p>
            </div>
          </article>
        `).join('')}
      </div>
    </section>

    <section class="home-section" id="publications">
      <div class="home-section-heading"><h2>Publications</h2></div>
      <p class="home-section-intro">${isFr ? 'Une sélection de publications et de ressources scientifiques.' : 'A selection of publications and scientific resources.'}</p>
      <div class="home-publication-list">
        ${publications.map(publication => `
          <article class="home-publication-entry">
            <p>${publication.authors} (${publication.year}) <strong>${publication.title}</strong>. <a class="raw-url" href="${publication.url}" target="_blank" rel="noopener noreferrer">${publication.url}</a></p>
          </article>
        `).join('')}
      </div>
      <h3 class="home-subheading">${isFr ? 'Rapport de stage' : 'Internship Report'}</h3>
      <article class="home-publication-entry">
        <p>${internshipReport.author} (${internshipReport.year}) <strong>${internshipReport.title}</strong>. <a class="raw-url" href="${internshipReport.url}" target="_blank" rel="noopener noreferrer">${isFr ? 'PDF' : 'PDF'}</a></p>
      </article>
      <h3 class="home-subheading">Corpus et Dataset</h3>
      <div class="home-publication-list">
        ${datasets.map(dataset => `
          <article class="home-publication-entry">
            <h3>${dataset.title}</h3>
            <p>${dataset.description[lang]} <a class="raw-url" href="${dataset.url}" target="_blank" rel="noopener noreferrer">${dataset.url}</a></p>
          </article>
        `).join('')}
      </div>
    </section>

    <section class="home-section" id="communications">
      <div class="home-section-heading"><h2>Communications</h2></div>
      <article class="home-communication-entry">
        <p><strong>${communication.title}</strong> · ${communication.date}</p>
        <p>${communication.type} · ${communication.venue} · <a class="raw-url" href="${communication.documentUrl}" target="_blank" rel="noopener noreferrer">${communication.documentUrl}</a> · ${communication.websiteLabel} (<a class="raw-url" href="${communication.websiteUrl}" target="_blank" rel="noopener noreferrer">${communication.websiteUrl}</a>)</p>
      </article>
    </section>

    <section class="home-section" id="background">
      <div class="home-section-heading"><h2>${isFr ? 'Formation & Certifications' : 'Education & Certifications'}</h2></div>
      <h3 class="home-subheading">${isFr ? 'Parcours Académique' : 'Academic Path'}</h3>
      <ul class="home-education-list">
        ${education[lang].map(item => `<li><span class="home-publication-year">${item.year}</span><div><h3>${item.degree}</h3><p>${item.institution}</p></div></li>`).join('')}
      </ul>
      <h3 class="home-subheading" style="margin-top: 1.75rem;">Certifications</h3>
      <ul class="home-education-list">
        ${certifications[lang].map(item => `<li><span class="home-publication-year">${item.year}</span><div><h3>${item.title}</h3><p style="margin-bottom: 0.25rem;"><strong>${item.issuer}</strong>${item.url ? ` <a class="home-cv-link" href="${item.url}" target="_blank" rel="noopener noreferrer" style="margin-left: 0.5rem; padding: 0.15rem 0.45rem; font-size: 0.78rem;">${isFr ? 'Voir le certificat' : 'View certificate'}</a>` : ''}</p><p>${item.details}</p></div></li>`).join('')}
      </ul>
    </section>
  `
}

function renderLayout() {
  const nav = document.getElementById('site-nav')
  if (!nav) return
  const isFr = currentLang === 'fr'
  nav.innerHTML = `
    <a class="nav-brand" href="#profile">Mouhamed Mbaye</a>
    <div class="nav-links">
      <a href="#profile">${isFr ? 'Profil' : 'Profile'}</a>
      <a href="#research">${isFr ? 'Recherche' : 'Research'}</a>
      <a href="#projects">${isFr ? 'Projets' : 'Projects'}</a>
      <a href="#publications">Publications</a>
      <a href="#communications">Communications</a>
      <a href="#background">${isFr ? 'Parcours' : 'Background'}</a>
    </div>
    <div class="navbar-actions">
      <button class="theme-button" id="theme-btn" type="button" onclick="toggleTheme()"></button>
      <div class="lang-toggle">
        <button class="${isFr ? 'active' : ''}" type="button" onclick="setLang('fr')" aria-label="Passer le site en français" aria-pressed="${isFr}">FR</button>
        <button class="${!isFr ? 'active' : ''}" type="button" onclick="setLang('en')" aria-label="Switch site to English" aria-pressed="${!isFr}">EN</button>
      </div>
    </div>
  `
  updateThemeIcon()
}

function initPage() {
  document.documentElement.lang = currentLang
  document.documentElement.setAttribute('data-theme', currentTheme)
  renderLayout()
  renderHome(currentLang)
}

function setLang(lang) {
  if (lang !== 'fr' && lang !== 'en') return
  currentLang = lang
  localStorage.setItem(currentLangKey, lang)
  document.documentElement.lang = lang
  renderLayout()
  renderHome(lang)
}

function toggleTheme() {
  currentTheme = currentTheme === 'light' ? 'dark' : 'light'
  localStorage.setItem(currentThemeKey, currentTheme)
  document.documentElement.setAttribute('data-theme', currentTheme)
  updateThemeIcon()
}

function updateThemeIcon() {
  const button = document.getElementById('theme-btn')
  if (!button) return
  const isDark = currentTheme === 'dark'
  button.setAttribute('aria-label', isDark
    ? (currentLang === 'fr' ? 'Activer le mode clair' : 'Switch to light mode')
    : (currentLang === 'fr' ? 'Activer le mode sombre' : 'Switch to dark mode'))
  button.innerHTML = isDark
    ? '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="5"/><path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72 1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>'
    : '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>'
  const themeColor = document.querySelector('meta[name="theme-color"]')
  if (themeColor) themeColor.content = isDark ? '#171d1b' : '#f7f7f5'
}
