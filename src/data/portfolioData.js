import { Code2, Database, Palette, Rocket } from 'lucide-react';
import {
    SiCss3,
    SiDotnet,
    SiHtml5,
    SiJavascript,
    SiLaravel,
    SiMysql,
    SiPhp,
    SiReact,
    SiTailwindcss,
} from 'react-icons/si';
import profile from '../assets/ChatGPT Image Mar 30, 2026, 03_26_29 PM.png';
import coffeeShop from '../assets/coffee-pic.png';
import ecommerceShoes from '../assets/E-commerce-shoes.png';
import library from '../assets/Library.png';
import resumePdf from '../assets/Mr Chun Rattnakvisal.pdf';
import school from '../assets/School.png';

export { profile, resumePdf };

export const navigationItems = [
    { label: 'HOME', section: 'home' },
    { label: 'WORK', section: 'work' },
    { label: 'SKILLS', section: 'skills' },
    { label: 'CONTACT', section: 'contact' },
];

export const heroPills = [
    'Modern UI systems',
    'Responsive layouts',
    'Clean backend logic',
];

export const profileSkills = ['Laravel', 'React', 'MySQL', 'Tailwind CSS'];

export const profileStats = [
    { value: '03', label: 'Featured builds' },
    { value: 'UI + API', label: 'Focus area' },
];

export const cardTechIcons = [
    { label: 'HTML', icon: SiHtml5, color: '#ff7a18', angle: '0deg', delay: '0s' },
    { label: 'CSS', icon: SiCss3, color: '#38bdf8', angle: '40deg', delay: '0.4s' },
    {
        label: 'JavaScript',
        icon: SiJavascript,
        color: '#facc15',
        angle: '80deg',
        delay: '0.8s',
    },
    {
        label: 'Tailwind CSS',
        icon: SiTailwindcss,
        color: '#22d3ee',
        angle: '120deg',
        delay: '1.2s',
    },
    { label: 'React', icon: SiReact, color: '#61dafb', angle: '160deg', delay: '1.6s' },
    { label: 'PHP', icon: SiPhp, color: '#a78bfa', angle: '200deg', delay: '2s' },
    {
        label: 'Laravel',
        icon: SiLaravel,
        color: '#fb7185',
        angle: '240deg',
        delay: '2.4s',
    },
    { label: 'ASP.NET', icon: SiDotnet, color: '#60a5fa', angle: '280deg', delay: '2.8s' },
    { label: 'MySQL', icon: SiMysql, color: '#34d399', angle: '320deg', delay: '3.2s' },
];

export const projects = [
    {
        title: 'E-Commerce Shoes Platform',
        description:
            'Full-stack e-commerce system with product management, cart, checkout, order tracking, and role-based admin panel.',
        tech: ['PHP', 'MySQL', 'Tailwind CSS', 'JavaScript', 'Vite'],
        link: 'https://github.com/Rattnakvisal/E-commerce-shoes',
        image: ecommerceShoes,
        color: '#00ff88',
    },
    {
        title: 'School Management System',
        description:
            'CRUD web app for managing students with validation, search/filter, and clean MVC structure using Laravel.',
        tech: ['Laravel', 'PHP', 'MySQL', 'Bootstrap', 'tailwind CSS', 'Javascript', 'Blade'],
        link: 'https://github.com/Rattnakvisal/School-Management-System',
        image: school,
        color: '#00aaff',
    },
    {
        title: 'Library Management System',
        description:
            'Database-driven system for books, authors, borrowing/return, fines calculation, and reservation workflow.',
        tech: ['ASP.NET', 'C#', 'Microsoft SQL Server', 'Jquery', 'SQL Design'],
        link: 'https://github.com/Rattnakvisal/Library-Management-System',
        image: library,
        color: '#ffaa00',
    },
    {
        title: 'Coffee Shop',
        description:
            'A coffee shop website with menu, ordering system, and admin dashboard for managing products and orders.',
        tech: ['ASP.NET', 'C#', 'Microsoft SQL Server', 'Jquery', 'SQL Design'],
        link: 'https://github.com/Rattnakvisal/Coffee',
        image: coffeeShop,
        color: '#ffaa00',
    },
];

export const skills = [
    {
        category: 'Frontend',
        items: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Bootstrap'],
        icon: Palette,
    },
    {
        category: 'Backend',
        items: ['PHP', 'Laravel', 'REST API', 'Authentication', 'MVC Architecture'],
        icon: Code2,
    },
    {
        category: 'Database',
        items: ['MySQL', 'MariaDB', 'Oracle', 'PDO', 'Database Design', 'SQL Optimization'],
        icon: Database,
    },
    {
        category: 'Tools & DevOps',
        items: ['Git', 'GitHub', 'XAMPP', 'Composer', 'Vite', 'Docker'],
        icon: Rocket,
    },
];
