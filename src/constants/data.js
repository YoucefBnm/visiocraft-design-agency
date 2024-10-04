import {
  ActifeetHeroImage,
  AgencyFeaturesImage,
  AgencyHeroImage,
  BizadvisorCta2Image,
  BizadvisorCtaImage,
  BizadvisorHero2Image,
  BizadvisorHero3Image,
  BizadvisorHero4Image,
  BizadvisorHeroImage,
  FeaturesExpertiseImage,
  FeaturesInnovativeImage,
  KatadysiCta2Image,
  KatadysiCtaImage,
  KatadysiHeroImage,
  ServiceDevImage,
  ServiceEcomImage,
  ServiceUxImage,
  WorkActifeetImage,
  WorkBizadvisorImage,
  WorkKatadysiImage,
} from "../assets";

export const heroContent = {
  title: "Crafting Digital Experiences Through Design",
  description:
    "Specializing in web design & frontend development crafting digital experiences that captivate engage and inspire.",
};

export const galleryImages = {
  col1: [
    KatadysiCtaImage,
    KatadysiHeroImage,
    KatadysiCta2Image,
    AgencyHeroImage,
  ],
  col2: [
    BizadvisorHero2Image,
    ActifeetHeroImage,
    BizadvisorHeroImage,
    BizadvisorCta2Image,
  ],
  col3: [
    BizadvisorHero3Image,
    BizadvisorCtaImage,
    AgencyFeaturesImage,
    BizadvisorHero4Image,
  ],
};

export const aboutContent = {
  title: "Who we are",
  description:
    "VisioCraft is a leading web design agency dedicated to crafting exceptional online experiences for businesses worldwide. With a passion for creativity and a commitment to excellence, we specialize in transforming visions into reality.",
};

export const services = [
  {
    id: "service-ux",
    imageUrl: ServiceUxImage,
    title: "UIUX Design",
    subTitle: "Reflecting Your Unique Story",
    description:
      "User experience and user interface design are pivotal in captivating and retaining your audience. Our UI/UX design services focus on creating intuitive interfaces and delightful user experiences.",
  },
  {
    id: "service-ecom",
    imageUrl: ServiceEcomImage,
    title: "Ecommerce Solutions",
    subTitle: "Ensuring Enjoyable Shopping Experience",
    description:
      "Maximize your online potential with our e-commerce expertise. From user-friendly interfaces to secure payment gateways and shop pages, we provide end-to-end solutions for your online store.",
  },
  {
    id: "service-dev",
    imageUrl: ServiceDevImage,
    title: "Frontend Development",
    subTitle: "Turning Your Vision Into A Functional Experience",
    description:
      "Our web development services are tailored to build responsive, user-friendly high-performing websites. Using the latest technologies and industry best practices, we create custom solutions.",
  },
];

export const workProjects = [
  {
    id: "work-actifeet",
    title: "Actifeet Ecommerce",
    tags: ["Ecommerce", "Design", "Branding", "Development"],
    description:
      "BizAdvisor is a comprehensive platform designed for a B2B consulting agency. This project demonstrates my proficiency in creating professional and business-oriented web applications using fundamental web technologies.",
    imageUrl: WorkActifeetImage,
  },
  {
    id: "work-bizadvisor",
    title: "Bizadvisor Consulting",
    tags: ["Consultation", "Design", "Branding"],
    description:
      "BizAdvisor is a comprehensive platform designed for a B2B consulting agency. This project demonstrates my proficiency in creating professional and business-oriented web applications using fundamental web technologies.",
    imageUrl: WorkBizadvisorImage,
  },
  {
    id: "work-katadysi",
    title: "Katadysi Travel",
    tags: ["Travel", "Design", "Branding"],
    description:
      "Katadysi is a vibrant and engaging website created for a travel agency. This project highlights my ability to use Webflow to design and implement visually appealing and highly functional travel websites.",
    imageUrl: WorkKatadysiImage,
  },
];

export const featuresContent = [
  {
    id: "features-expertise",
    title: "Skills Expertise",
    description:
      "With years of experience in the industry and the various projects we have worked on, we have a deep understanding of the latest trends and technologies. Our team is highly skilled in web design, development, and digital marketing.",
    imageUrl: FeaturesExpertiseImage,
  },
  {
    id: "features-innovation",
    title: "Innovative Approach",
    description:
      "We stay at the forefront of technological advancements and design trends to provide innovative solutions that meets our clients goals and keep them ahead of the curve.",
    imageUrl: FeaturesInnovativeImage,
  },
];

export const navLinks = [
  {
    id: "nav-link-home",
    title: "Home",
    path: "/",
  },
  {
    id: "nav-link-process",
    title: "Process",
    path: "/process",
  },
  {
    id: "nav-link-expertise",
    title: "pricing",
    path: "/pricing",
  },
  {
    id: "nav-link-contact",
    title: "contact",
    path: "/contact",
  },
];

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
      "Our commitment continues beyond launch. We offer post-launch support to address questions, provide assistance, and ensure your website remains updated and optimized. The Website Design Process isn't just about creating a website; it's about crafting a digital experience that resonates, engages, and converts. At Visiocraft, we navigate this journey with precision, creativity, and a dedication to excellence. Ready to embark on your website design journey? Let's bring your digital vision to life.",
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
      value: 0,
    },
    {
      id: "price-sub-sections",
      title: "sections",
      price: 20,
      value: 0,
    },
    {
      id: "price-sub-products",
      title: "products",
      price: 50,
      value: 0,
    },
    {
      id: "price-sub-portfolios",
      title: "portfolios",
      price: 50,
      value: 0,
    },
    // {
    //     id: 'price-sub-listings',
    //     title: 'number of listings',
    //     price: 50,
    //     value: 0,
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

export const socialLinks = [
  {
    id: "x",
    label: "X",
    url: "https://x.com/visiocraft",
  },
  {
    id: "instagram",
    label: "Instagram",
    url: "https://instagram.com/visiocraft",
  },
  {
    id: "dribbble",
    label: "Dribbble",
    url: "https://dribbble.com/visiocraft",
  },
  {
    id: "github",
    label: "Github",
    url: "https://github.com/youcefbnm",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/youcef-bnm-692392123/",
  },
];
