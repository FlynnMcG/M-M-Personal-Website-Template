export const config = {
  firstName: "Mehdi",
  lastName: "Merali",
  github: "https://github.com/mmerali96",
  linkedin: "https://www.linkedin.com/in/mehdimerali/",
  twitter: "https://twitter.com",
  profile_picture: "https://media-exp1.licdn.com/dms/image/C4D03AQFkIiRlOhdTwA/profile-displayphoto-shrink_400_400/0?e=1603929600&v=beta&t=mSP8AUNhByVZmDPTB__6fz7CjSZRYl3QZQb3X0F_bMA",
  location: "New York, NY",
  bio: "I have been a software developer professionally since 2018. Before that, I attended Binghamton University where I earned my B.S. in Computer Science. I am strongest in Java and Javascript. Outside of work, I enjoy biking, snowboarding, and watching Netflix docu-series.",
  phone: "(516) 203-6130",
  email: "mmerali1@binghamton.edu",
  current_role: "Software Developer @ IBM",
  projects: [
    {
      id: 0,
      title: "Open Liberty Contributor",
      image: "https://i.imgur.com/SCUZZVH.png",
      description: `Part of my current role on the Liberty team has been to implement and test features for the Open Liberty, which is an IBM open source project. Here are a few features that I added: A new attribute for specifying an NBF claim to the jwtBuilder configuration element. A non-persistant EJB Timers that allowed timers to propagate contexts based on the parent that created them. My contributions to Open Liberty has made me an GitHub Arctic Code Vault Contributor.`,
      organization: "IBM",
    },
    {
      id: 1,
      title: "WebSphere Liberty Profile",
      image: "https://i.imgur.com/69M9X04.jpg",
      description: `Enhancements to SAF Authorization API to allow application to get more information about an authorization failure.
      Added audit capability to SAF Authorization API and created Kibana dashboard template for audit records.
      Created Display Work modify command for MVS console that displayed server metrics such as active requests, slow requests, hung requests, and total requests.
      Created Cache Clear Auth modify command that clears all users from the Liberty Authorization cache. This saves a system admin the trouble of having to restart the entire server when they want to clear the cache.
      Implemented logic needed to allow non-persistent Enterprise Java Bean timers to propagate contexts such as the zWLMContext and SecurityContext.
      Implemented REST API to change password for z/OS MVS Console. Allows application developer to build a form to change passwords and call it using.
      `,
      organization: "IBM",
    },
    {
      id: 2,
      title: "Ovations zBounty Program",
      image: "https://material-ui.com/static/images/cards/contemplative-reptile.jpg",
      description: `Collaborate on developing a portal for executives to post projects and match them with engineers seeking additional projects. Incorporate gamification feature to provide rewards-based system for engineers completing them. 
      Tools used: React, Carbon UI, Swagger, Node, Docker, and DB2 SQL`,
      organization: "IBM",
    },
    {
      id: 3,
      title: "VSAM Database Rest API",
      image: "https://i.imgur.com/88WVRjU.png?1",
      description: "This is where the project description goes.",
      organization: "IBM",
    },
    {
      id: 4,
      title: "Semantic Search Application",
      image: "https://material-ui.com/static/images/cards/contemplative-reptile.jpg",
      description: "This is where the project description goes.",
      organization: "IBM",
    },
    {
      id: 5,
      title: "IHS PKCS11 Security Driver",
      image: "https://i.imgur.com/eKcJ1AV.jpg",
      description: "This is where the project description goes.",
      organization: "IBM",
    },
    {
      id: 6,
      title: "School Projects",
      image: "https://i.imgur.com/kk9c4bj.png",
      description: "This is where the project description goes.",
      organization: "Binghamton University",
    },
    {
      id: 7,
      title: "Project Title 8",
      image: "https://material-ui.com/static/images/cards/contemplative-reptile.jpg",
      description: "This is where the project description goes.",
      organization: "My Org",
    },
  ],
};
