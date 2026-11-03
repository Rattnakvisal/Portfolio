import { Code2, Database, Palette, Rocket } from 'lucide-react';
import {
    SiCss3,
    SiDocker,
    SiDotnet,
    SiGit,
    SiHtml5,
    SiJavascript,
    SiLaravel,
    SiMysql,
    SiPhp,
    SiReact,
    SiTailwindcss,
    SiTypescript,
} from 'react-icons/si';
import profile from '../assets/visal.png';
import coffeeShop from '../assets/Purr’s Coffee Management Showcase.png';
import ecommerceShoes from '../assets/E-commerce-shoes.png';
import library from '../assets/Library.png';
import resumePdf from '../assets/Mr. Chun Rattnakvisal.pdf';
import aubCertificatePdf from '../assets/AUB-Certificte_C0000224.pdf';
import school from '../assets/schooli_portfolio_showcase.png';

export { profile, resumePdf };

export const navigationItems = [
    {
        label: 'HOME',
        section: 'home',
    },
    {
        label: 'WORK',
        section: 'work',
    },
    {
        label: 'EXPERIENCE',
        section: 'experience',
    },
    {
        label: 'EDUCATION',
        section: 'education',
    },
    {
        label: 'SKILLS',
        section: 'skills',
    },
    {
        label: 'CONTACT',
        section: 'contact',
    },
];

export const heroPills = ['Modern UI systems', 'Responsive layouts', 'Clean backend logic'];

export const cardTechIcons = [
    {
        label: 'HTML',
        icon: SiHtml5,
        color: '#ff7a18',
        angle: '-10deg',
        delay: '0s',
        radius: '8.7rem',
        duration: '24s',
        size: '3rem',
        direction: 'normal',
    },
    {
        label: 'CSS',
        icon: SiCss3,
        color: '#38bdf8',
        angle: '32deg',
        delay: '0.35s',
        radius: '6.65rem',
        duration: '20s',
        size: '2.75rem',
        direction: 'reverse',
    },
    {
        label: 'JavaScript',
        icon: SiJavascript,
        color: '#facc15',
        angle: '70deg',
        delay: '0.7s',
        radius: '8.85rem',
        duration: '26s',
        size: '3rem',
        direction: 'normal',
    },
    {
        label: 'TypeScript',
        icon: SiTypescript,
        color: '#3178c6',
        angle: '108deg',
        delay: '1.05s',
        radius: '6.85rem',
        duration: '21s',
        size: '2.75rem',
        direction: 'reverse',
    },
    {
        label: 'Tailwind CSS',
        icon: SiTailwindcss,
        color: '#22d3ee',
        angle: '148deg',
        delay: '1.4s',
        radius: '8.8rem',
        duration: '25s',
        size: '2.95rem',
        direction: 'normal',
    },
    {
        label: 'React',
        icon: SiReact,
        color: '#61dafb',
        angle: '190deg',
        delay: '1.75s',
        radius: '6.7rem',
        duration: '22s',
        size: '2.85rem',
        direction: 'reverse',
    },
    {
        label: 'PHP',
        icon: SiPhp,
        color: '#a78bfa',
        angle: '226deg',
        delay: '2.1s',
        radius: '8.75rem',
        duration: '27s',
        size: '2.95rem',
        direction: 'normal',
    },
    {
        label: 'Laravel',
        icon: SiLaravel,
        color: '#fb7185',
        angle: '266deg',
        delay: '2.45s',
        radius: '6.75rem',
        duration: '20.5s',
        size: '2.8rem',
        direction: 'reverse',
    },
    {
        label: 'ASP.NET',
        icon: SiDotnet,
        color: '#60a5fa',
        angle: '306deg',
        delay: '2.8s',
        radius: '8.9rem',
        duration: '25.5s',
        size: '2.95rem',
        direction: 'normal',
    },
    {
        label: 'MySQL',
        icon: SiMysql,
        color: '#34d399',
        angle: '344deg',
        delay: '3.15s',
        radius: '6.65rem',
        duration: '21.5s',
        size: '2.8rem',
        direction: 'reverse',
    },
    {
        label: 'Docker',
        icon: SiDocker,
        color: '#38bdf8',
        angle: '130deg',
        delay: '3.5s',
        radius: '6.1rem',
        duration: '23s',
        size: '2.55rem',
        direction: 'reverse',
    },
    {
        label: 'Git',
        icon: SiGit,
        color: '#f97316',
        angle: '250deg',
        delay: '3.85s',
        radius: '6.05rem',
        duration: '24.5s',
        size: '2.55rem',
        direction: 'normal',
    },
];

export const projects = [
    {
        title: 'E-Commerce Shoes Platform',
        type: 'Full-stack commerce',
        description:
            'Full-stack e-commerce system with product management, cart, checkout, order tracking, and role-based admin panel.',
        tech: ['PHP', 'MySQL', 'Tailwind CSS', 'JavaScript', 'Vite'],
        link: 'https://github.com/Rattnakvisal/E-commerce-shoes',
        image: ecommerceShoes,
        color: '#f3532f',
        caseStudy: {
            context: 'Full-stack commerce',
            focus: 'Shopping & order management',
            overview: 'An online shoe store that connects the customer shopping journey with the tools needed to manage products and orders.',
            features: [
                { title: 'Product management', description: 'Manage the products available in the storefront.' },
                { title: 'Cart & checkout', description: 'Move from selected products to an order through a dedicated checkout flow.' },
                { title: 'Order tracking', description: 'Keep order information available after checkout.' },
                { title: 'Role-based administration', description: 'Provide a separate admin panel for managing the store.' },
            ],
        },
    },
    {
        title: 'School Management System',
        type: 'Education platform',
        description:
            'CRUD web app for managing students with validation, search/filter, and clean MVC structure using Laravel.',
        tech: [
            'Laravel',
            'PHP',
            'MySQL',
            'Bootstrap',
            'Tailwind CSS',
            'JavaScript',
            'SQL Design',
            'Docker',
            'Telegram-OTP',
        ],
        link: 'https://github.com/Rattnakvisal/School-Management-System',
        image: school,
        color: '#2878e5',
        caseStudy: {
            context: 'Education platform',
            focus: 'Student records & administration',
            overview: 'A Laravel application for organizing student records, with validation and search tools that support everyday administrative tasks.',
            features: [
                { title: 'Student records', description: 'Create, view, update, and delete student information.' },
                { title: 'Search & filtering', description: 'Find relevant records without manually scanning the full list.' },
                { title: 'Input validation', description: 'Check submitted student information before saving changes.' },
                { title: 'MVC structure', description: 'Organize application behavior across models, views, and controllers.' },
            ],
        },
    },
    {
        title: 'Library Management System',
        type: 'Internship project',
        description:
            'Built during my internship at ACLEDA University of Business to manage books, authors, borrowing and returns, fines, and reservations.',
        tech: ['ASP.NET', 'C#', 'Microsoft SQL Server', 'jQuery', 'SQL Design'],
        link: 'https://github.com/Rattnakvisal/Library-Management-System',
        image: library,
        color: '#7957d5',
        caseStudy: {
            context: 'Internship · ACLEDA University of Business',
            focus: 'Library operations',
            overview: 'Built during my software development internship at ACLEDA University of Business, this system brings book records and lending workflows into a database-driven application.',
            features: [
                { title: 'Books & authors', description: 'Organize the catalog and its author information.' },
                { title: 'Borrowing & returns', description: 'Manage the lending and return of library books.' },
                { title: 'Fines & reservations', description: 'Support fine management and book reservations.' },
                { title: 'Responsive interfaces', description: 'Present library workflows through ASP.NET Core MVC interfaces with JavaScript and jQuery interactions.' },
            ],
        },
    },
    {
        title: 'Coffee Shop',
        type: 'Point of sale & admin',
        description:
            'A coffee shop website with menu, ordering system, and admin dashboard for managing products and orders.',
        tech: ['Laravel', 'PHP', 'MySQL', 'Tailwind CSS', 'JavaScript', 'Docker', 'SQL Design'],
        link: 'https://github.com/Rattnakvisal/Coffee',
        image: coffeeShop,
        color: '#b7673b',
        caseStudy: {
            context: 'Coffee shop website',
            focus: 'Menu, ordering & administration',
            overview: 'A coffee shop website that brings the customer-facing menu and ordering experience together with an admin dashboard for daily management.',
            features: [
                { title: 'Digital menu', description: 'Display the coffee shop menu for customers to browse.' },
                { title: 'Ordering', description: 'Let customers select items and place an order.' },
                { title: 'Product administration', description: 'Manage products through the admin dashboard.' },
                { title: 'Order administration', description: 'Bring order management into the same dashboard.' },
            ],
        },
    },
];

export const education = [
    {
        school: 'Chea Sim Kompong Thmar High School',
        period: '2022 - 2023',
        highlights: ['Bacll, 2023'],
        certificate: {
            label: 'Verify 2023 Bacll',
            file: 'https://verify.gov.kh/verify/2a7592311b07f345ab9924e9ce26f323daba484b0c1464471a4757b4e5d35d07?key=71eebab40aace0f0c0bebd50e8bf6fcb1d5fed709567c191a9e008f0bc616d21',
        },
    },
    {
        school: 'ICT Professional Training Center',
        period: '2024 - 2025',
        highlights: [
            'UX/UI Designer | Jan 2025 - May 2025',
            'Backend Developer | Jan 2025 - May 2025',
            'Frontend Developer | Aug 2024 - Dec 2024',
        ],
    },
    {
        school: 'ACLEDA University of Business',
        period: '2023 - Present',
        highlights: ['Bachelor of Business Information Technology'],
        certificate: {
            label: 'View AUB Certificate',
            file: aubCertificatePdf,
        },
    },
];

export const experiences = [
    {
        role: 'Software Developer Intern',
        organization: 'ACLEDA University of Business',
        period: '2025 - 2026',
        description:
            'Built a responsive, database-driven Library Management System during a software development internship.',
        highlights: [
            'Developed the Library Management System for books, members, borrowing, returns, fines, and reservations.',
            'Developed ASP.NET Core MVC interfaces with clean data flows and responsive layouts.',
            'Built interactive frontend features using JavaScript and jQuery.',
            'Used Git and GitHub for version control and team collaboration.',
            'Improved UI/UX details for better usability across key screens.',
            'Integrated Microsoft SQL Server for backend data management.',
        ],
        stack: ['ASP.NET Core MVC', 'JavaScript', 'jQuery', 'SQL Server', 'GitHub'],
    },
    {
        role: 'Backend & Database Developer',
        organization: 'Academic and Personal Systems',
        period: '2025 - 2026',
        description:
            'Created structured backend features for data-driven applications, with attention to validation, relationships, and maintainable MVC patterns.',
        highlights: [
            'Modeled students, books, orders, products, borrowing records, and user roles.',
            'Worked with MySQL, Microsoft SQL Server, and ASP.NET/C# for database-backed systems.',
            'Practiced API-style thinking through reusable controllers, services, and organized queries.',
        ],
        stack: ['ASP.NET', 'C#', 'SQL Server', 'MySQL', 'MVC'],
    },
    {
        role: 'Frontend UI Developer',
        organization: 'Portfolio and Product Interfaces',
        period: '2023 - Present',
        description:
            'Designed responsive interfaces that keep project flows clear across desktop and mobile, using component-based UI patterns.',
        highlights: [
            'Built responsive layouts with React, JavaScript, Tailwind CSS, Bootstrap, HTML, and CSS.',
            'Created portfolio, product listing, admin, checkout, and management screens.',
            'Focused on readable hierarchy, smooth interactions, and reusable frontend components.',
        ],
        stack: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap'],
    },
];

export const skills = [
    {
        category: 'Frontend Development',
        items: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 'Flutter', 'Tailwind CSS', 'Bootstrap'],
        icon: Palette,
    },
    {
        category: 'Backend Development',
        items: [
            'PHP',
            'C#',
            'Laravel Framework',
            'Spring Boot',
            'ASP.NET Core',
            'RESTful API',
            'Authentication',
            'Authorization',
            'MVC Architecture',
        ],
        icon: Code2,
    },
    {
        category: 'Database Management',
        items: [
            'MySQL',
            'Microsoft SQL Server',
            'Oracle Database',
            'PDO (PHP Data Objects)',
            'Database Design',
            'Query Optimization',
            'Stored Procedures',
        ],
        icon: Database,
    },
    {
        category: 'Tools & DevOps',
        items: ['Git & GitHub', 'XAMPP', 'Composer', 'Vite', 'Docker', 'Figma', 'Postman'],
        icon: Rocket,
    },
];
