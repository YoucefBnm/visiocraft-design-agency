import {
  ActifeetCategoryImage,
  ActifeetHero2Image,
  ActifeetHero3Image,
  ActifeetHeroImage,
  BizAdvisorAboutImage,
  BizAdvisorCtaImage,
  BizAdvisorHero2Image,
  BizAdvisorHero3Image,
  BizAdvisorHeroImage,
  DevServiceImage,
  EcomServiceImage,
  KatadisyCta,
  KatadisyHero,
  KatadisyShowcase,
  PortfolioActifeetImage,
  PortfolioBizadvisorImage,
  // PortfolioIntroImage,
  PortfolioKatadisyImage,
  UXServiceImage,
  WhyusCustomerImage,
  WhyusExpertiseImage,
  WhyusInnovationImage,
} from "../assets";

export const heroContent = {
  title: "Crafting digital experiences through design",
  specialities: ["web design", "frontend development", "e commerce"],
  description:
    "Visiocraft is a Design agency specializing in web design and frontend development, crafting digital experiences that captivate, engage, and inspire.",
  // "Visiocraft Design agency specializing in web design and frontend development, we blend creativity, innovation, expertise to craft digital solutions.",
};

export const heroGalleryImages = {
  actifeet: [
    ActifeetHero2Image,
    ActifeetHero3Image,
    ActifeetHeroImage,
    ActifeetCategoryImage,
  ],
  bizadvisor: [
    BizAdvisorCtaImage,
    BizAdvisorHeroImage,
    BizAdvisorAboutImage,
    BizAdvisorHero2Image,
  ],
  visiocraft: [
    KatadisyHero,
    KatadisyCta,
    KatadisyShowcase,
    BizAdvisorHero3Image,
  ],
};

export const aboutContent = {
  title: "Our focus",
  description:
    "VisioCraft is a leading web design agency dedicated to crafting exceptional online experiences for businesses worldwide. With a passion for creativity and a commitment to excellence, we specialize in transforming visions into reality.",
};

export const services = [
  {
    id: "service-ux",
    imageUrl: UXServiceImage,
    title: "UI/UX Design",
    subTitle: "Reflecting Your Unique Story",
    description:
      "User experience and user interface design are pivotal in captivating and retaining your audience. Our UI/UX design services focus on creating intuitive interfaces and delightful user experiences.",
  },
  {
    id: "service-ecom",
    imageUrl: EcomServiceImage,
    title: "Ecommerce Solutions",
    subTitle: "Ensuring Enjoyable Shopping Experience",
    description:
      "Maximize your online potential with our e-commerce expertise. From user-friendly interfaces to secure payment gateways and shop pages, we provide end-to-end solutions for your online store.",
  },
  {
    id: "service-dev",
    imageUrl: DevServiceImage,
    title: "Frontend Development",
    subTitle: "Turning Your Vision Into A Functional Experience",
    description:
      "Our web development services are tailored to build responsive, user-friendly high-performing websites. Using the latest technologies and industry best practices, we create custom solutions.",
  },
];

export const portfolioProjects = [
  // {
  //   id: "portfolio-intro",
  //   imageUrl: PortfolioIntroImage,
  //   tags: ["web design", "frontend"],
  //   title: "Some of our recent work",
  //   description:
  //     "we take pride in the projects we've delivered and the impact they've had on our clients' businesses. Here's a glimpse of some of our recent work.",
  //   route: "/portfolio",
  // },
  {
    id: "portfolio-actifeet",
    imageUrl: PortfolioActifeetImage,
    tags: ["UX design", "frontend development", "ecommerce"],
    title: "Actifeet Ecommerce",
    description:
      "Redesigning the online presence of actifeet, an established ecommerce brand specializing in athletic shoes. Creating a modern, user friendly platform that enhances the shopping experience.",
    route: "/portfolio/actifeet",
  },
  {
    id: "portfolio-bizadvisor",
    imageUrl: PortfolioBizadvisorImage,
    tags: ["UX design", "frontend development", "saas"],
    title: "Bizadvisor SAAS",
    description:
      "Designing the online presence of BizAdvisor, a software as service solution. Our goal was to create a modern, user-friendly platform that enhances the shopping experience and drives conversions.",
    route: "/portfolio/actifeet",
  },
  {
    id: "portfolio-katadisy",
    imageUrl: PortfolioKatadisyImage,
    tags: ["web design", "frontend development", "marketing"],
    title: "Katadisy Travel",
    description:
      "Katadisy travel agency curating personalized travel experiences for discerning travelers. With a focus on authenticity, adventure, cultural immersion, aiming to create unforgettable memories for their clients.",
    route: "/portfolio/katadisy",
  },
];

export const whyusContent = [
  {
    id: "whyus-skills expertise",
    title: "Skills Expertise",
    description:
      "With years of experience in the industry and the various project we worked on, we have honed our skills and expertise to deliver exceptional results that exceed our clients' expectations.",
    imageUrl: WhyusExpertiseImage,
  },
  {
    id: "whyus-customer",
    title: "Customer Satisfaction",
    description:
      "Our commitment to excellence extends beyond project completion. We strive to build long-term relationships with our clients by delivering outstanding service, support, and results.",
    imageUrl: WhyusCustomerImage,
  },
  {
    id: "whyus-innovative-approach",
    title: "Innovative Approach",
    description:
      "We stay at the forefront of technological advancements and design trends to provide innovative solutions that meets our clients goals and keep them ahead of the curve.",
    imageUrl: WhyusInnovationImage,
  },
];

export const ctaImages = [
  {
    id: "cta-actifeet-hero",
    imageUrl: ActifeetHeroImage,
  },
  {
    id: "cta-bizadvisor-about",
    imageUrl: BizAdvisorAboutImage,
  },
  {
    id: "cta-bizadvisor-cta",
    imageUrl: KatadisyCta,
  },
  {
    id: "cta-bizadvisor-hero",
    imageUrl: BizAdvisorHeroImage,
  },
];

export const socialLinks = [
  {
    id: "social-link-x",
    title: "x",
    link: "https://twitter.com/lbnm_yussef",
  },
  {
    id: "social-link-linkedin",
    title: "linkedin",
    link: "https://www.linkedin.com/in/youcef-bnm-692392123/",
  },
  {
    id: "social-link-github",
    title: "github",
    link: "https://github.com/YoucefBnm/",
  },
  {
    id: "social-link-facebook",
    title: "facebook",
    link: "https://facebook.com/",
  },
];

export const navLinks = [
  {
    id: "nav-link-home",
    title: "home",
    route: "/",
  },
  {
    id: "nav-link-process",
    title: "process",
    route: "/process",
  },
  {
    id: "nav-link-pricing",
    title: "pricing",
    route: "/pricing",
  },
  {
    id: "nav-link-contact",
    title: "contact",
    route: "/contact",
  },
];

export const pricing = {
  mainCategories: [
    {
      id: "price-main-new_website",
      title: "new website",
      price: 500,
    },
    {
      id: "price-main-redesign",
      title: "redesign website",
      price: 400,
    },
  ],
  subCategories: [
    {
      id: "price-sub-pages",
      title: "pages",
      price: 100,
      value: 1,
    },
    {
      id: "price-sub-sections",
      title: "sections",
      price: 20,
      value: 1,
    },
    {
      id: "price-sub-products",
      title: "products",
      price: 50,
      value: 1,
    },
    {
      id: "price-sub-portfolios",
      title: "portfolios",
      price: 50,
      value: 1,
    },
    // {
    //     id: 'price-sub-listings',
    //     title: 'number of listings',
    //     price: 50,
    //     value: 1,
    // }
  ],
  additionnalServices: [
    {
      id: "price-add-logo",
      title: "logo",
      price: 400,
      isChecked: false,
    },
    // {
    //     id: 'price-add-video-edit',
    //     title: 'video editing',
    //     price: 500,
    //     isChecked: false
    // },
    {
      id: "price-add-ecom",
      title: "ecommerce",
      price: 400,
      isChecked: false,
    },
    {
      id: "price-add-portfolio",
      title: "portfolio",
      price: 350,
      isChecked: false,
    },
    // {
    //     id: 'price-add-prop',
    //     title: 'Properties (non MLS)',
    //     price: 350,
    //     isChecked: false
    // },
    {
      id: "price-add-mobile",
      title: "listings",
      price: 400,
      isChecked: false,
    },
    {
      id: "price-add-appointments",
      title: "appointments",
      price: 100,
      isChecked: false,
    },
  ],
};

export const processPhases = [
  {
    id: "process-phase-discovery",
    step: 1,
    titleMain: "Discovery Phase",
    titleSub: "Understanding Your Vission",
    paragraph:
      "Our journey begins with a deep dive into your vision. In the Discovery phase, we engage in meaningful conversations to grasp your brand identity, goals, and the essence you want to convey. This phase sets the stage for all that follows.",
  },
  {
    id: "process-phase-research",
    step: 2,
    titleMain: "Research and Analysis",
    titleSub: "Navigating the Digital Landscape",
    paragraph:
      "With your vision in mind, we enter the Research and Analysis phase. Here, we examine your competitors, industry trends, and user preferences. This informed approach ensures your website stands out and provides an excellent user experience.",
  },
  {
    id: "process-phase-information_arch",
    step: 3,
    titleMain: "Information Architecture",
    titleSub: "Designing the Blueprint",
    paragraph:
      "Information Architecture is where we sketch the blueprint of your website. We map out how users will navigate, where content will reside, and how it all connects. This step ensures an organized and intuitive user experience.",
  },
  {
    id: "process-phase-wireframing_prototype",
    step: 4,
    titleMain: "Wireframing and Prototyping",
    titleSub: "Visualizing the Experience",
    paragraph:
      "We move on to Wireframing and Prototyping, where we create skeletal representations of your website's pages. These visual blueprints allow us to test and refine the user experience before diving into design.",
  },
  {
    id: "process-phase-design_creation",
    step: 5,
    titleMain: "Design Creation",
    titleSub: "Crafting Visual Excelence",
    paragraph:
      "Now, it's time for the Design Creation phase. Our talented designers bring your vision to life. We focus on aesthetics, ensuring your website not only looks stunning but also aligns perfectly with your brand identity.",
  },
  {
    id: "process-phase-review_feedback",
    step: 6,
    titleMain: "Review and Feedback",
    titleSub: "Collaboration in Action",
    paragraph:
      "We value your input. After presenting initial designs, we invite your feedback. This iterative process allows us to fine-tune the design to match your vision and objectives.",
  },
  {
    id: "process-phase-development",
    step: 7,
    titleMain: "Development Phase",
    titleSub: "Building the Digital Foundation",
    paragraph:
      "Once the design is finalized, our developers step in to build the digital foundation. They transform the visuals into a functioning website, ensuring responsiveness and optimal performance across all devices.",
  },
  {
    id: "process-phase-test_quality",
    step: 8,
    titleMain: "Testing and Quality Assurance",
    titleSub: "Honing Perfection",
    paragraph:
      "Before your website goes live, it undergoes rigorous Testing and Quality Assurance. We meticulously examine functionality, performance, and compatibility to ensure a seamless user experience.",
  },
  {
    id: "process-phase-launch",
    step: 9,
    titleMain: "Launch Phase",
    titleSub: "Unveiling your Digital Presence",
    paragraph:
      "The Launch phase is the culmination of hard work. We optimize, configure, and prepare for the grand reveal. Your website is now ready to shine in the digital world.",
  },
  {
    id: "process-phase-post_launch",
    step: 10,
    titleMain: "Post Launch Support",
    titleSub: "Nurturing Growth",
    paragraph:
      "Our commitment continues beyond launch. We offer post-launch support to address questions, provide assistance, and ensure your website remains updated and optimized. The Website Design Process isn't just about creating a website; it's about crafting a digital experience that resonates, engages, and converts. At [Your Agency Name], we navigate this journey with precision, creativity, and a dedication to excellence. Ready to embark on your website design journey? Let's bring your digital vision to life.",
  },
];
