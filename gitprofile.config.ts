// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'miaadnbz',
  },

  // This is a user website:
  // https://miaadnbz.github.io
  base: '/',

  projects: {
    github: {
      display: true,
      header: 'Featured Project',

      // Manual mode lets us show only the strongest project.
      mode: 'manual',

      automatic: {
        sortBy: 'updated',
        limit: 1,
        exclude: {
          forks: true,
          projects: ['miaadnbz/miaadnbz.github.io'],
        },
      },

      manual: {
        projects: [
          'miaadnbz/saas-growth-retention-analytics',
        ],
      },
    },

    // Keep this empty until you have non-GitHub projects
    // that you want to present separately.
    external: {
      header: 'Additional Projects',
      projects: [],
    },
  },

  seo: {
    title: 'Miaad Nabizadeh | Analytics Portfolio',
    description:
      'Portfolio of Miaad Nabizadeh, a data and marketing analytics professional specializing in customer, product, growth, and marketing analytics.',
    imageURL: '',
  },

  social: {
    linkedin: 'miaadnabizadeh',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '',
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '',
    discord: '',
    telegram: '',

    // GitProfile has no dedicated Kaggle property,
    // so the general website link will point to Kaggle.
    website: 'https://www.kaggle.com/miaadnabizadeh',

    phone: '',
    email: '',
  },

  resume: {
    fileUrl: '/files/Miaad-Nabizadeh-Resume.pdf',
  },

  skills: [
    'SQL',
    'Python',
    'R',
    'Power BI',
    'Tableau',
    'BigQuery',
    'dbt',
    'Looker Studio',
    'Machine Learning',
    'Marketing Analytics',
    'Product Analytics',
    'Customer Analytics',
    'Cohort Analysis',
    'A/B Testing',
    'Spatial Analysis',
  ],

  // Empty arrays hide these sections.
  // We can add them later after the first version is working.
  experiences: [],

  certifications: [],

  educations: [],

  publications: [],

  // Leave username empty to hide the blog.
  // Later, you can connect Medium or DEV.
  blog: {
    source: 'dev',
    username: '',
    limit: 3,
  },

  googleAnalytics: {
    id: '',
  },

  hotjar: {
    id: '',
    snippetVersion: 6,
  },

  themeConfig: {
    defaultTheme: 'corporate',

    // Keep the light/dark-theme selector visible.
    disableSwitch: false,

    respectPrefersColorScheme: false,

    displayAvatarRing: true,

    // A focused selection is more professional than
    // offering all 37 themes.
    themes: [
      'light',
      'dark',
      'corporate',
      'business',
      'lofi',
      'nord',
    ],
  },

footer: `© 2026 Miaad Nabizadeh · Built with
  <a
    class="text-primary"
    href="https://github.com/arifszn/gitprofile"
    target="_blank"
    rel="noreferrer"
  >
    GitProfile
  </a>
  by
  <a
    class="text-primary"
    href="https://github.com/arifszn"
    target="_blank"
    rel="noreferrer"
  >
    Ariful Alam
  </a>`,
  enablePWA: true,
};

export default CONFIG;