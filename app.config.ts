export default defineAppConfig({
  ui: {
    primary: "neutral",
  },
  header: {
    menu: {
      font: {
        type: 'Arial, sans-serif',
        size: '22px',
      }
    }
  },

  landingPage: {
    hero: {
      logo: "/logo.png", //ex. /logo.png
      title: "Build the next \n generation of \n wireless", //ex. Build the next \n generation of \n wireless
      subtitle: "For A Connected World", //ex. For A Connected World
    },
    button: {
      disabled: false,
      target: "_self",
      url: "/mmintegration/", //ex. /omaspecworks
      label: "Get Started", //ex. Get Started
    }
  },

  main: {
    font: {
      type: 'Arial',
      size: '23px',
    },
    h1: {
      font: {
        type: 'DM Sans',
        size: '2em',
      },
    },
    h2: {
      font: {
        type: 'DM Sans',
        size: '1.5em',
      },
    },
    h3: {
      font: {
        type: 'DM Sans',
        size: '1.17em',
      },
    },
    h4: {
      font: {
        type: 'DM Sans',
        size: '1em',
      },
    },
    h5: {
      font: {
        type: 'DM Sans',
        size: '0.83em',
      },
    },
    h6: {
      font: {
        type: 'DM Sans',
        size: '0.67em',
      },
    },
    h7: {
      font: {
        type: 'DM Sans',
        size: '0.44em',
      },
    },
  },

  socialLinks: {
     linkedIn: {
       title: "LinkedIn",
       logo: "i-fa6-brands-linkedin",
       url: "http://www.linkedin.com/company/52819?trk=tyah",
     },
     facebook: {
       title: "Facebook",
       logo: "i-fa6-brands-square-facebook",
       url: "https://www.facebook.com/OMASpecWorks",
     },
     youtube: {
       title: "YouTube",
       logo: "i-fa6-brands-square-youtube",
       url: "https://www.youtube.com/c/OMASpecWorks",
     },
     x: {
       title: "X",
       logo: "i-fa6-brands-square-x-twitter",
       url: "https://twitter.com/OMASpecWorks",
     },
    github: {
      title: "GitHub",
      logo: "i-fa6-brands-square-github",
      url: "https://github.com/standards-hub",
    },
    // rss: {
    //   title: "RSS",
    //   logo: "i-heroicons-solid-rss",
    //   url: "http://openmobilealliance.org/rss/",
    // },
  },
});
