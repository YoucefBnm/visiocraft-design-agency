import { CarouselActifeetHeroImage, CarouselActifeetHeroImageMd, CarouselActifeetShopImage, CarouselActifeetShopImageMd, CarouselArtImage, CarouselArtImageMd, CarouselDesignImage, CarouselDesignImageMd, CarouselPricingImage, CarouselPricingImageMd, CarouselYogaImage, CarouselYogaImageMd, IconApproach, IconCard, IconDev, IconExpertise, IconSolution, IconUiux, PortfolioActifeet2Image, PortfolioActifeet2ImageMd, PortfolioActifeet2ImageSm, PortfolioActifeetHeroImage, PortfolioActifeetHeroImageMd, PortfolioActifeetHeroImageSm, PortfolioActifeetShopImage, PortfolioActifeetShopImageMd, PortfolioDesign2Image, PortfolioDesign2ImageMd, PortfolioDesignHeroImage, PortfolioDesignHeroImageMd, PortfolioDesignHeroImageSm, PortfolioYoga2Image, PortfolioYoga2ImageMd, PortfolioYogaHeroImage, PortfolioYogaHeroImageMd, PortfolioYogaHeroImageSm, SphereBlueLgImage, SphereBlueSmImage, SpherePurpleMdImage, SpherePurpleSmImage } from "../assets"

export const heroContent = {
    headings: ['creative','design','agency'],
    paragraph: 'crafting engaging inspiring digital experiences',
}

export const services = [
    {
        id: 'services-uiux',
        icon: IconUiux,
        title: 'UI/UX Design',
        paragraph: "User experience (UX) and user interface (UI) design are pivotal in captivating and retaining your audience. Our UI/UX design services focus on creating intuitive interfaces and delightful user experiences. Through meticulous research and user testing, we design interfaces that not only look visually appealing but also function seamlessly, resulting in increased user engagement and satisfaction."
    },
    {
        id: 'services-web',
        icon: IconDev,
        title: 'Web Development',
        paragraph: "Our web development services are tailored to build responsive, user-friendly, and high-performing websites. Using the latest technologies and industry best practices, we create custom solutions that align perfectly with your business objectives. From dynamic landing pages to complex web applications, we turn your vision into a functional, seamless online experience."
    },
    {
        id: 'services-ecommerce',
        icon: IconCard,
        title: 'Ecommerce Solutions',
        paragraph: "Unlock the potential of online sales with our e-commerce solutions. We specialize in developing robust and intuitive online stores that drive conversions. Our team integrates secure payment gateways, implements user-friendly interfaces, and optimizes for mobile responsiveness to ensure a smooth and enjoyable shopping experience for your customers."
    }
]

export const calculateSecionText = {
    lead: 'Starting from $700',
    heading: 'Our Pricing',
    paragraph: 'Starting from 650$, our design services are for everyone from small, mid-size to large businisses.'
}

export const pricing = {
    mainCategories: [
        {
            id: 'price-main-new_website',
            title: 'New Website',
            price: 500,
        },
        {
            id: 'price-main-redesign',
            title: 'Redesign Website',
            price: 400
        }
    ],
    subCategories: [
        {
            id: 'price-sub-pages',
            title: 'number of pages',
            price: 100,
            value: 1,
        },
        {
            id: 'price-sub-sections',
            title: 'number of sections',
            price: 20,
            value: 1,
        },
        {
            id: 'price-sub-products',
            title: 'number of products',
            price: 50,
            value: 1,
        },
        {
            id: 'price-sub-portfolios',
            title: 'number of portfolios',
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
            id: 'price-add-logo',
            title: 'logo',
            price: 400,
            isChecked: false
        },
        // {
        //     id: 'price-add-video-edit',
        //     title: 'video editing',
        //     price: 500,
        //     isChecked: false
        // },
        {
            id: 'price-add-ecom',
            title: 'ecommerce',
            price: 400,
            isChecked: false
        },
        {
            id: 'price-add-portfolio',
            title: 'portfolio',
            price: 350,
            isChecked: false   
        },
        // {
        //     id: 'price-add-prop',
        //     title: 'Properties (non MLS)',
        //     price: 350,
        //     isChecked: false
        // },
        {
            id: 'price-add-mobile',
            title: 'listings',
            price: 400,
            isChecked: false
        },
        {
            id: 'price-add-appointments',
            title: 'appointments',
            price: 100,
            isChecked: false
        }
    ]
}

export const PortfolioItems = [
    {
        id: 'portfolio-actifeet-hero',
        name: 'actifeet landing hero',
        imageXl: PortfolioActifeetHeroImage,
        imageMd: PortfolioActifeetHeroImageMd,
        imageSm: PortfolioActifeetHeroImageSm,
        
    },
    {
        id: 'portfolio-actifeet-shop',
        name: 'actifeet shop',
        imageXl: PortfolioActifeetShopImage,
        imageMd: PortfolioActifeetShopImageMd,
    },
    {
        id: 'portfolio-actifeet-2',
        name: 'actifeet cta',
        imageXl: PortfolioActifeet2Image,
        imageMd: PortfolioActifeet2ImageMd,
        imageSm: PortfolioActifeet2ImageSm,
    },

    {
        id: 'portfolio-yoga-2',
        name: 'yoga features',
        imageXl: PortfolioYoga2Image,
        imageMd: PortfolioYoga2ImageMd,
    },
    {
        id: 'portfolio-design-2',
        name: 'design agency cta',
        imageXl: PortfolioDesign2Image,
        imageMd: PortfolioDesign2ImageMd,
    },
    {
        id: 'portfolio-yoga-hero',
        name: 'yoga hero',
        imageXl: PortfolioYogaHeroImage,
        imageMd: PortfolioYogaHeroImageMd,
        imageSm: PortfolioYogaHeroImageSm
    },
    {
        id: 'portfolio-design-hero',
        name: 'design agency hero',
        imageXl: PortfolioDesignHeroImage,
        imageMd: PortfolioDesignHeroImageMd,
        imageSm: PortfolioDesignHeroImageSm,
    }
]

export const featuresItems = {
    heading: 'Blend creativity with cutting edge technology',
    lead: 'With our experience, we blend creativity with cutting edge technology to deliver exceptional results.',
    items: [
        {
            id: 'features-experience',
            icon: IconExpertise,
            title: 'Years of experience',
            description: 'With years of experience, we blend creativity with cutting-edge technology to deliver exceptional results.',
        },
        {
            id: 'features-solution',
            icon: IconSolution,
            title: 'Tailored Solutions',
            description: "We understand every business is unique; our solutions are custom-made to fit your specific needs.",
        },
        {
            id: 'features-approach',
            icon: IconApproach,
            title: 'Collaborative Approach',
            description: "We believe in partnership. Your input is invaluable, and we work closely with you throughout the process."
        }
    ]
}

export const carouselImages = [
    {
        id: 'carousel-actifeet-hero',
        website: 'actifeet',
        image: CarouselActifeetHeroImage,
        imageMd: CarouselActifeetHeroImageMd
    },
    {
        id: 'carousel-actifeet-shop',
        website: 'actifeet',
        image: CarouselActifeetShopImage,
        imageMd: CarouselActifeetShopImageMd
    },
    {
        id: 'carousel-actifeet-design',
        website: 'design agency',
        image: CarouselDesignImage,
        imageMd: CarouselDesignImageMd
    },
    {
        id: 'carousel-actifeet-yoga',
        website: 'yoga gym',
        image: CarouselYogaImage,
        imageMd: CarouselYogaImageMd
    },
    {
        id: 'carousel-actifeet-pricing',
        website: 'pricing page',
        image: CarouselPricingImage,
        imageMd: CarouselPricingImageMd
    },
    {
        id: 'carousel-actifeet-art',
        website: 'art landing page',
        image: CarouselArtImage,
        imageMd: CarouselArtImageMd

    }
]

export const navLinks = [
    {
        id: 'home',
        title: 'Home',
    },
    {
        id: 'showcase',
        title: 'Showcase'
    },
    {
        id: 'services',
        title: 'Services'
    },
    {
        id: 'about',
        title: 'About'
    },
    {
        id: 'why-us',
        title: 'Why us'
    },
    {
        id: 'portfolio',
        title: 'Portfolio'
    },
    {
        id: 'pricing',
        title: 'Pricing'
    }
]

export const processPhases = [
    {
        id: 'process-phase-discovery',
        step: 1,
        titleMain: 'Discovery Phase',
        titleSub: 'Understanding Your Vission',
        paragraph: 'Our journey begins with a deep dive into your vision. In the Discovery phase, we engage in meaningful conversations to grasp your brand identity, goals, and the essence you want to convey. This phase sets the stage for all that follows.'
    },
    {
        id: 'process-phase-research',
        step: 2,
        titleMain: 'Research and Analysis',
        titleSub: 'Navigating the Digital Landscape',
        paragraph: 'With your vision in mind, we enter the Research and Analysis phase. Here, we examine your competitors, industry trends, and user preferences. This informed approach ensures your website stands out and provides an excellent user experience.'
    },
    {
        id: 'process-phase-information_arch',
        step: 3,
        titleMain: 'Information Architecture',
        titleSub: 'Designing the Blueprint',
        paragraph: "Information Architecture is where we sketch the blueprint of your website. We map out how users will navigate, where content will reside, and how it all connects. This step ensures an organized and intuitive user experience.",
    },
    {
        id: 'process-phase-wireframing_prototype',
        step: 4,
        titleMain: 'Wireframing and Prototyping',
        titleSub: 'Visualizing the Experience',
        paragraph: "We move on to Wireframing and Prototyping, where we create skeletal representations of your website's pages. These visual blueprints allow us to test and refine the user experience before diving into design."
    },
    {
        id: 'process-phase-design_creation',
        step: 5,
        titleMain: "Design Creation",
        titleSub: "Crafting Visual Excelence",
        paragraph: "Now, it's time for the Design Creation phase. Our talented designers bring your vision to life. We focus on aesthetics, ensuring your website not only looks stunning but also aligns perfectly with your brand identity.",
    },
    {
        id: 'process-phase-review_feedback',
        step: 6,
        titleMain: "Review and Feedback",
        titleSub: "Collaboration in Action",
        paragraph: "We value your input. After presenting initial designs, we invite your feedback. This iterative process allows us to fine-tune the design to match your vision and objectives."
    },
    {
        id: 'process-phase-development',
        step: 7,
        titleMain: 'Development Phase',
        titleSub: "Building the Digital Foundation",
        paragraph: "Once the design is finalized, our developers step in to build the digital foundation. They transform the visuals into a functioning website, ensuring responsiveness and optimal performance across all devices."
    },
    {
        id: 'process-phase-test_quality',
        step: 8,
        titleMain: "Testing and Quality Assurance",
        titleSub: "Honing Perfection",
        paragraph: "Before your website goes live, it undergoes rigorous Testing and Quality Assurance. We meticulously examine functionality, performance, and compatibility to ensure a seamless user experience."
    },
    {
        id: 'process-phase-launch',
        step: 9,
        titleMain: "Launch Phase",
        titleSub: "Unveiling your Digital Presence",
        paragraph: "The Launch phase is the culmination of hard work. We optimize, configure, and prepare for the grand reveal. Your website is now ready to shine in the digital world."
    },
    {
        id: 'process-phase-post_launch',
        step: 10,
        titleMain: 'Post Launch Support',
        titleSub: "Nurturing Growth",
        paragraph: "Our commitment continues beyond launch. We offer post-launch support to address questions, provide assistance, and ensure your website remains updated and optimized. The Website Design Process isn't just about creating a website; it's about crafting a digital experience that resonates, engages, and converts. At [Your Agency Name], we navigate this journey with precision, creativity, and a dedication to excellence. Ready to embark on your website design journey? Let's bring your digital vision to life."
    }
]
