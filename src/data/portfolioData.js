import {
    Code2,
    Database,
    Palette,
    Rocket
} from 'lucide-react';
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
} from 'react-icons/si';
import profile from '../assets/visal.png';
import coffeeShop from '../assets/coffee-pic.png';
import ecommerceShoes from '../assets/E-commerce-shoes.png';
import library from '../assets/Library.png';
import resumePdf from '../assets/Chun Rattnakvisal.pdf';
import school from '../assets/school.png';

export {
    profile,
    resumePdf
};

export const navigationItems = [{
        label: 'HOME',
        section: 'home'
    },
    {
        label: 'WORK',
        section: 'work'
    },
    {
        label: 'SKILLS',
        section: 'skills'
    },
    {
        label: 'CONTACT',
        section: 'contact'
    },
];

export const heroPills = ['Modern UI systems', 'Responsive layouts', 'Clean backend logic'];

export const profileSkills = ['Laravel', 'React', 'MySQL', 'Tailwind CSS'];

export const profileStats = [{
        value: '03',
        label: 'Featured builds'
    },
    {
        value: 'UI + API',
        label: 'Focus area'
    },
];

export const cardTechIcons = [{
        label: 'HTML',
        icon: SiHtml5,
        color: '#ff7a18',
        angle: '0deg',
        delay: '0s',
        radius: '8.8rem',
        duration: '18s',
        size: '2.7rem',
        direction: 'normal',
    },
    {
        label: 'CSS',
        icon: SiCss3,
        color: '#38bdf8',
        angle: '36deg',
        delay: '0.45s',
        radius: '6.95rem',
        duration: '15s',
        size: '2.5rem',
        direction: 'reverse',
    },
    {
        label: 'JavaScript',
        icon: SiJavascript,
        color: '#facc15',
        angle: '72deg',
        delay: '0.9s',
        radius: '8.7rem',
        duration: '20s',
        size: '2.6rem',
        direction: 'normal',
    },
    {
        label: 'Tailwind CSS',
        icon: SiTailwindcss,
        color: '#22d3ee',
        angle: '108deg',
        delay: '1.35s',
        radius: '6.8rem',
        duration: '16s',
        size: '2.5rem',
        direction: 'reverse',
    },
    {
        label: 'React',
        icon: SiReact,
        color: '#61dafb',
        angle: '144deg',
        delay: '1.8s',
        radius: '8.9rem',
        duration: '22s',
        size: '2.7rem',
        direction: 'normal',
    },
    {
        label: 'PHP',
        icon: SiPhp,
        color: '#a78bfa',
        angle: '180deg',
        delay: '2.25s',
        radius: '6.85rem',
        duration: '17s',
        size: '2.45rem',
        direction: 'reverse',
    },
    {
        label: 'Laravel',
        icon: SiLaravel,
        color: '#fb7185',
        angle: '216deg',
        delay: '2.7s',
        radius: '8.75rem',
        duration: '19s',
        size: '2.65rem',
        direction: 'normal',
    },
    {
        label: 'ASP.NET',
        icon: SiDotnet,
        color: '#60a5fa',
        angle: '252deg',
        delay: '3.1s',
        radius: '6.9rem',
        duration: '14s',
        size: '2.45rem',
        direction: 'reverse',
    },
    {
        label: 'MySQL',
        icon: SiMysql,
        color: '#34d399',
        angle: '288deg',
        delay: '3.55s',
        radius: '8.8rem',
        duration: '21s',
        size: '2.6rem',
        direction: 'normal',
    },
    {
        label: 'Docker',
        icon: SiDocker,
        color: '#38bdf8',
        angle: '324deg',
        delay: '4s',
        radius: '6.8rem',
        duration: '15.5s',
        size: '2.45rem',
        direction: 'reverse',
    },
    {
        label: 'Git',
        icon: SiGit,
        color: '#f97316',
        angle: '348deg',
        delay: '4.35s',
        radius: '8.95rem',
        duration: '23s',
        size: '2.6rem',
        direction: 'normal',
    },
];

export const projects = [{
        title: 'E-Commerce Shoes Platform',
        description: 'Full-stack e-commerce system with product management, cart, checkout, order tracking, and role-based admin panel.',
        tech: ['PHP', 'MySQL', 'Tailwind CSS', 'JavaScript', 'Vite'],
        link: 'https://github.com/Rattnakvisal/E-commerce-shoes',
        image: ecommerceShoes,
        color: '#00ff88',
    },
    {
        title: 'School Management System',
        description: 'CRUD web app for managing students with validation, search/filter, and clean MVC structure using Laravel.',
        tech: [
            'Laravel',
            'PHP',
            'MySQL',
            'Bootstrap',
            'tailwind CSS',
            'Javascript',
            'SQL Design',
            'Docker',
            'Telegram-OTP',
        ],
        link: 'https://github.com/Rattnakvisal/School-Management-System',
        image: school,
        color: '#00aaff',
    },
    {
        title: 'Library Management System',
        description: 'Database-driven system for books, authors, borrowing/return, fines calculation, and reservation workflow.',
        tech: ['ASP.NET', 'C#', 'Microsoft SQL Server', 'Jquery', 'SQL Design'],
        link: 'https://github.com/Rattnakvisal/Library-Management-System',
        image: library,
        color: '#ffaa00',
    },
    {
        title: 'Coffee Shop',
        description: 'A coffee shop website with menu, ordering system, and admin dashboard for managing products and orders.',
        tech: ['Laravel', 'PHP', 'MySQL', 'Tailwind CSS', 'JavaScript', 'Docker', 'SQL Design'],
        link: 'https://github.com/Rattnakvisal/Coffee',
        image: coffeeShop,
        color: '#ff5500',
    },
];

export const skills = [{
        category: 'Frontend Development',
        items: [
            'HTML5',
            'CSS3',
            'JavaScript (ES6+)',
            'React.js',
            'Tailwind CSS',
            'Bootstrap'
        ],
        icon: Palette,
    },
    {
        category: 'Backend Development',
        items: [
            'PHP',
            'C#',
            'Laravel Framework',
            'ASP.NET Core',
            'RESTful API',
            'Authentication & Authorization',
            'MVC Architecture'
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
            'Query Optimization'
        ],
        icon: Database,
    },
    {
        category: 'Tools & DevOps',
        items: [
            'Git & GitHub',
            'XAMPP',
            'Composer',
            'Vite',
            'Docker',
            'Figma (UI/UX Design)',
            'Postman (API Testing)'
        ],
        icon: Rocket,
    },
];
