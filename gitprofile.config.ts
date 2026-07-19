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
  header: 'Kaggle Analytics Notebooks',

  projects: [
    {
      title: 'E-commerce Funnel Analysis',
      description:
        'Analyzed customer progression through key conversion stages, identified major drop-off points, and translated funnel behaviour into recommendations for improving conversion performance.',
      imageUrl: '/projects/ecommerce-funnel-analysis.png',
      link:
        'https://www.kaggle.com/code/miaadnabizadeh/e-commerce-funnel-analysis',
    },

    {
      title: 'A/B Testing Evaluation on Web Conversion',
      description:
        'Evaluated a web experiment using statistical hypothesis testing, assessed whether the observed conversion difference was significant, and communicated a practical business recommendation.',
      imageUrl: '/projects/ab-testing-web-conversion.png',
      link:
        'https://www.kaggle.com/code/miaadnabizadeh/a-b-testing-evaluation-on-web-conversion',
    },

    {
      title: 'Customer Segmentation with RFM & SQL',
      description:
        'Used SQL and RFM analysis to segment customers by recency, frequency, and monetary value, creating actionable groups for retention, reactivation, and CRM campaigns.',
      imageUrl: '/projects/rfm-customer-segmentation.png',
      link:
        'https://www.kaggle.com/code/miaadnabizadeh/customer-segmentation-rfm-analysis-with-sql',
    },
  ],
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
    website: 'miaadnbz.github.io',

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