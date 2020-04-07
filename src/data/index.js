export const projects_data = [
  {
    id: 1,
    name: "Retro Flickr",
    tools: "jQuery",
    categories: ["development"],
    description:
      "This is a small project I made for learning jQuery using Flickr's API to retrieve photos based on a user's search. I added a vintage photo filter with CSS to give it a polaroid effect.",
    thumbnail: {
      fallback: { src: "retroflickr/thumbnail.webp", type: "image/webp" },
      main: { src: "retroflickr/thumbnail.png", type: "image/png" },
    },
    sections: [
      {
        assets: [
          {
            fallback: { src: "retroflickr/01.webp", type: "image/webp" },
            main: { src: "retroflickr/01.png", type: "image/png" },
          },
        ],
      },
      {
        assets: [
          {
            fallback: { src: "retroflickr/02.webp", type: "image/webp" },
            main: { src: "retroflickr/02.png", type: "image/png" },
          },
        ],
      },
    ],
    websiteURI: "https://candicecz.github.io/retro-flickr/",
    bg: "#FF6B82",
  },
  {
    id: 2,
    name: "Work Flow",
    tools: "React, Node.js, MySQL, Material-UI",
    categories: ["development", "design", "back end", "front end"],
    description:
      "I worked on this project management app with a few friends. It consists of an app that helps users organize projects, assign users to tasks, see who's on a task, message fellow team members and track progress.",
    thumbnail: {
      fallback: { src: "wrkflow/thumbnail.webp", type: "image/webp" },
      main: { src: "wrkflow/thumbnail.png", type: "image/png" },
    },
    sections: [
      {
        title: "Projects / Tasks View",
        assets: [
          {
            fallback: { src: "wrkflow/projects.webp", type: "image/webp" },
            main: { src: "wrkflow/projects.png", type: "image/png" },
          },
          {
            fallback: { src: "wrkflow/tasks.webp", type: "image/webp" },
            main: { src: "wrkflow/tasks.png", type: "image/png" },
          },
        ],
      },
      {
        title: "Create a Project",
        assets: [
          {
            fallback: {
              src: "wrkflow/create_project.webm",
              type: "video/webm",
            },
            main: { src: "wrkflow/create_project.mp4", type: "video/mp4" },
          },
        ],
      },
      {
        title: "Mobile View",
        assets: [
          {
            fallback: { src: "wrkflow/mobile.webp", type: "image/webp" },
            main: { src: "wrkflow/mobile.png", type: "image/png" },
          },
        ],
        styles: { boxShadow: "none" },
      },
    ],
    websiteURI: "http://wrkflow.herokuapp.com/",
    bg: "#282828",
  },
  {
    id: 3,
    name: "CCS - It's My Life",
    tools: "Javascript",
    categories: ["development"],
    description:
      "I worked on this project for the Canadian Cancer Society with a team of skilled graphic designers and developers. This project aims to inform the user about daily decisions that could impact their risk of cancer. The codebase consisted of a custom in-house framework using elements of Python, d3.js and JavaScript.",
    thumbnail: {
      fallback: { src: "ccs/thumbnail.webp", type: "image/webp" },
      main: { src: "ccs/thumbnail.png", type: "image/png" },
    },
    sections: [
      {
        title: "Intro Animation",
        assets: [
          {
            fallback: { src: "ccs/intro.webm", type: "video/webm" },
            main: { src: "ccs/intro.mp4", type: "video/mp4" },
          },
        ],
      },
      {
        title: "Assessing Cancer Risk - Smoking",
        assets: [
          {
            fallback: { src: "ccs/smoking.webm", type: "video/webm" },
            main: { src: "ccs/smoking.mp4", type: "video/mp4" },
          },
        ],
      },
      {
        title: "Stats and Me",
        assets: [
          {
            fallback: { src: "ccs/stats.webm", type: "video/webm" },
            main: { src: "ccs/stats.mp4", type: "video/mp4" },
          },
        ],
      },
      {
        title: "Mobile View",
        assets: [
          {
            fallback: { src: "ccs/mobile.webp", type: "image/webp" },
            main: { src: "ccs/mobile.png", type: "image/png" },
          },
        ],
        styles: { boxShadow: "none" },
      },
    ],
    websiteURI: "http://itsmylife.cancer.ca/index.html",
    bg: "#78AA27",
  },
  {
    id: 4,
    name: "CBRAIN Website",
    tools: "Javascript, After Effects, Illustrator",
    categories: [
      "development",
      "design",
      "UI",
      "icon design",
      "animation",
      "illustration",
    ],
    description:
      "I worked on this project as both a graphic designer and developer for the McGill Neurological Institute. The goal was to redesign and redevelop an existing website with a more modern look. This project was a great exercise in learning more about animations particulary in leveraging Adobe tools and JavaScript libraries to create light-weight animations.",
    thumbnail: {
      fallback: { src: "cbrain-website/thumbnail.webp", type: "image/webp" },
      main: { src: "cbrain-website/thumbnail.png", type: "image/png" },
    },
    sections: [
      {
        title: "Icon Design",
        assets: [
          {
            main: { src: "cbrain-website/icons_01.svg", type: "image/svg" },
          },
          {
            main: { src: "cbrain-website/icons_02.svg", type: "image/svg" },
          },
          {
            main: { src: "cbrain-website/icons_03.svg", type: "image/svg" },
          },
          {
            main: { src: "cbrain-website/icons_04.svg", type: "image/svg" },
          },
          {
            main: { src: "cbrain-website/icons_05.svg", type: "image/svg" },
          },
          {
            main: { src: "cbrain-website/icons_06.svg", type: "image/svg" },
          },
        ],
        styles: {
          boxShadow: "none",
          maxWidth: "320px",
        },
      },
      {
        title: "Animation Design",
        assets: [
          {
            fallback: {
              src: "cbrain-website/features.webm",
              type: "video/webm",
            },
            main: { src: "cbrain-website/features.mp4", type: "video/mp4" },
          },
        ],
        styles: { maxWidth: "200px", aspectRatio: "100%" },
      },
      {
        title: "Mobile View",
        assets: [
          {
            fallback: {
              src: "cbrain-website/mobile.webp",
              type: "image/webp",
            },
            main: { src: "cbrain-website/mobile.png", type: "image/png" },
          },
        ],
        styles: { boxShadow: "none" },
      },
    ],
    websiteURI: "http://www.cbrain.ca/",
    githubURI: "-",
    bg: "#029ACD",
  },
  {
    id: 5,
    name: "CBRAIN Application",
    tools: "Node.js, React, Apollo, GraphQL, Styled-Components",
    categories: [
      "development",
      "design",
      "front end",
      "back end",
      "UI/UX",
      "icon design",
      "software architecture",
    ],
    description:
      "CBRAIN wanted to create a new user interface for their computing application. This project encompassed the full spectrum of my skills and was a fantastic learning opportunity. Their goals were to have a front-end entirely separate from the back-end that used their new API. On the back-end side, I wrote the GraphQL server-side code and authentication layer. On the front-end, I led the project and made the software architecture decisions as well as created the design system. On a UX note, I was in charge of the layout design and icon design. ",
    thumbnail: {
      fallback: {
        src: "cbrain-application/thumbnail.webp",
        type: "image/webp",
      },
      main: { src: "cbrain-application/thumbnail.png", type: "image/png" },
    },
    sections: [
      {
        title: "Cards / List View",
        assets: [
          {
            fallback: {
              src: "cbrain-application/card_view.webp",
              type: "image/webp",
            },
            main: {
              src: "cbrain-application/card_view.png",
              type: "image/png",
            },
          },
          {
            fallback: {
              src: "cbrain-application/list_view.webp",
              type: "image/webp",
            },
            main: {
              src: "cbrain-application/list_view.png",
              type: "image/png",
            },
          },
        ],
      },
      {
        title: "Create a Project",
        assets: [
          {
            fallback: {
              src: "cbrain-application/create_project.webm",
              type: "video/webm",
            },
            main: {
              src: "cbrain-application/create_project.mp4",
              type: "video/mp4",
            },
          },
        ],
      },
      {
        title: "Create a Task",
        assets: [
          {
            fallback: {
              src: "cbrain-application/create_task.webm",
              type: "video/webm",
            },
            main: {
              src: "cbrain-application/create_task.mp4",
              type: "video/mp4",
            },
          },
        ],
      },
      {
        title: "GraphQL Playground",
        assets: [
          {
            fallback: {
              src: "cbrain-application/graphql_playground.webm",
              type: "video/webm",
            },
            main: {
              src: "cbrain-application/graphql_playground.mp4",
              type: "video/mp4",
            },
          },
        ],
      },
      {
        title: "Mobile View",
        assets: [
          {
            fallback: {
              src: "cbrain-application/mobile.webp",
              type: "image/webp",
            },
            main: {
              src: "cbrain-application/mobile.png",
              type: "image/png",
            },
          },
        ],

        styles: { boxShadow: "none" },
      },
      {
        title: "Styleguide",
        assets: [
          {
            fallback: {
              src: "cbrain-application/styleguide.webm",
              type: "video/webm",
            },
            main: {
              src: "cbrain-application/styleguide.mp4",
              type: "video/mp4",
            },
          },
        ],
      },
    ],
    bg: "#002c47",
  },
  {
    id: 6,
    name: "NeuroHUB",
    tools: "Ruby on Rails",
    categories: ["development", "design", "front end", "UI/UX", "icon design"],
    description:
      "The goal: Build a functional data management application in three months. Built with a team of developers, this app was built in an agile fashion using CBRAIN as its backbone. I handled the front-end side as well as the design (which was based on the NeuroHub website).",
    thumbnail: {
      fallback: { src: "neurohub/thumbnail.webp", type: "image/webp" },
      main: { src: "neurohub/thumbnail.png", type: "image/png" },
    },
    sections: [
      {
        title: "Cards / List View",
        assets: [
          {
            fallback: { src: "neurohub/card_view.webp", type: "image/webp" },
            main: {
              src: "neurohub/card_view.png",
              type: "image/png",
            },
          },
          {
            fallback: { src: "neurohub/list_view.webp", type: "image/webp" },
            main: {
              src: "neurohub/list_view.png",
              type: "image/png",
            },
          },
        ],
      },

      {
        title: "Icon Design",
        assets: [
          {
            main: {
              src: "neurohub/NH_features_discoverable.svg",
              type: "image/svg",
            },
          },
          {
            main: {
              src: "neurohub/NH_features_readable.svg",
              type: "image/svg",
            },
          },
          {
            main: {
              src: "neurohub/NH_features_tools.svg",
              type: "image/svg",
            },
          },
        ],
        styles: {
          boxShadow: "none",
          maxWidth: "150px",
          aspectRatio: "100%",
        },
      },
      {
        title: "Dashboard",
        assets: [
          {
            fallback: {
              src: "neurohub/dashboard.webp",
              type: "image/webp",
            },
            main: {
              src: "neurohub/dashboard.png",
              type: "image/png",
            },
          },
        ],
      },
      {
        title: "Mobile View",
        assets: [
          {
            fallback: { src: "neurohub/mobile.webp", type: "image/webp" },
            main: {
              src: "neurohub/mobile.png",
              type: "image/png",
            },
          },
        ],

        styles: { boxShadow: "none" },
      },
      {
        title: "StyleGuide",
        assets: [
          {
            fallback: { src: "neurohub/neurohub.webp", type: "image/webp" },
            main: {
              src: "neurohub/neurohub.png",
              type: "image/png",
            },
          },
        ],
        styles: {
          aspectRatio: "177%",
        },
      },
    ],
    bg: "#00A1A0",
  },
];
