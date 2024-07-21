export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'Sathish Kumar Soundharajan',
    subtitle: 'Staff Engineer | Distributed Systems',
    description: 'Architecting the Future of Online Shopping - Sathish Kumar Soundharajan',
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        }
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        }
    ],
    socialLinks: [
        {
            text: 'X',
            href: 'https://x.com/bboysathish'
        },
        {
            text: 'LinkedIn',
            href: 'https://www.linkedin.com/in/sathishsoundharajan'
        },
        {
            text: "Github",
            href: 'https://github.com/sathishsoundharajan'
        }
    ],
    hero: {
        title: 'Welcome to My Hub of Innovation and Engineering',
        text: "I'm **Sathish Kumar Soundharajan**, a Staff Engineer at Samsung eCommerce. With a career spanning over a decade in the IT industry, I specialize in building robust distributed systems and crafting scalable microservices. My passion lies in driving innovation within the eCommerce domain. Connect with me on <a href='https://github.com/sathishsoundharajan'>GitHub</a> to explore my projects, or reach out on <a href='https://www.linkedin.com/in/sathishsoundharajan'>LinkedIn</a> for professional networking and collaboration opportunities.",
        image: {
            src: '/hero.jpg',
            alt: 'A person standing outdoor'
        },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
