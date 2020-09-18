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
      description: `
      <p>Part of my current role on the Liberty team has been to implement and test 
      features for the Open Liberty, which is an IBM open source project.<\/p>
      <p>Here are a few features that I added:<\/p>
      <ul>
        <li>A new attribute for specifying an NBF claim to the jwtBuilder configuration element.<\/li>
        <li>A non-persistant EJB Timers that allowed timers to propagate contexts based on the parent that created them.<\/li>
      <\/ul>
      <p>My contributions to Open Liberty has made me an GitHub Arctic Code Vault Contributor.<\/p>`,
      organization: "IBM",
    },
    {
      id: 1,
      title: "WebSphere Liberty Profile",
      image: "https://i.imgur.com/69M9X04.jpg",
      description: `
      <p>There WebSphere Liberty Profile is a Java application server that is used to run 
      critical applications by many Fortune 500 companies. I work on a squad with 3 others 
      to implement new features requested by clients that run the server on the z/OS platform.<\/p>
      <p>Here are a couple features that I implemented:<\/p>
      <ul>
        <li>Enhancements to SAF Authorization API to allow application to get more information about an authorization failure.<\/li>
        <li>Added audit capability to SAF Authorization API and created Kibana dashboard template for audit records.<\/li>
        <li>Created Display Work modify command for MVS console that displayed server metrics such as active requests, slow requests, hung requests, and total requests.<\/li>
        <li>Created Cache Clear Auth modify command that clears all users from the Liberty Authorization cache. This saves a system admin the trouble of having to restart the entire server when they want to clear the cache.<\/li>
        <li>Implemented REST API to change password for z/OS MVS Console. Allows application developer to build a form to change passwords and call it using.<\/li>
      <\/ul>`,
      organization: "IBM",
    },
    {
      id: 2,
      title: "Ovations zBounty Program",
      image: "https://i.imgur.com/MPnEU0B.jpg",
      description: `<p>As a side project, my team and I created this tool to help those
      who had ideas for internal projects but lacked the resources to make them come to 
      life. We created this internal tool where these side projects are bounties and 
      people looking for projects are bounty hunters. A bounty hunter is rewarded in 
      points in exchange for completing a bounty. Bounty hunters can redeem these points
      for various goods. Also, the entire program was Star Wars themed to make it more fun.<\/p>
      <p>Our bounty program was created with 3 main components: A React UI using the Carbon UI
      Framework, a Node.js server using Swagger to define the API endpoints, and a DB2 SQL database
      where we stored all the bounty and user information.<\/p>`,
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
      image: "https://i.imgur.com/dODFHX3.jpg",
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
    }
  ],
};
