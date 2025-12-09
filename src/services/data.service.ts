import { Injectable, signal } from '@angular/core';
import { Project, Skill } from '../models/project.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  projects = signal<Project[]>([
    {
      id: 'hsbc-fd',
      title: 'HSBC and FD Project',
      tagline: 'Home insurance platform for HSBC & First Direct',
      status: 'Done',
      summary:
        'Shared backend & frontend for HSBC and First Direct home insurance flows with dynamic styling per brand.',
      features: [
        'Get quotes, buy policies, renew, cancel',
        'Customer journeys with dynamic per-brand styling',
        'Secure quote engine & payment integration',
        'Analytics hooks for user behavior tracking',
      ],
      tech: ['Angular', 'Spring Boot', 'Docker', 'Postgres', 'MongoDB', 'CI/CD'],
      repoUrl: '#',
      liveUrl: '#',
      caseStudy: {
        problem: "HSBC & First Direct needed a unified, modern, and dynamically-branded home insurance platform to replace their legacy systems, improving user experience and internal efficiency.",
        role: ["Lead Frontend Engineer", "System Design & Architecture", "API Integration with backend services", "CI/CD Pipeline setup"],
      },
    },
    {
      id: 'aviva',
      title: 'Aviva Project',
      tagline: 'Aviva business insurance web app',
      status: 'Done',
      summary:
        'B2B insurance quoting & policy lifecycle system — quotes, buy, renew, cancellations.',
      features: [
        'Multi-product quoting engine for various business insurance types',
        'Complex business logic rules engine for underwriting',
        'Admin tools for underwriting and policy management',
        'Comprehensive reporting and analytics dashboard',
      ],
      tech: ['Angular', 'Spring Boot', 'Docker', 'Postgres', 'MongoDB'],
      repoUrl: '#',
      caseStudy: {
        problem: "Aviva's existing B2B insurance portal was outdated, slow, and unable to handle complex multi-product quotes efficiently. They required a complete overhaul to streamline the process for brokers and underwriters.",
        role: ["Full-Stack Developer", "Developed key features for the quoting engine", "Built RESTful APIs", "Contributed to database design"],
      },
    },
    {
      id: 'gym-app',
      title: 'Gym Training App',
      tagline: 'Gym Training Planner (mobile)',
      status: 'Ongoing',
      summary:
        'Personal workout planner app — currently in development on GitHub; planned release to Google Play. Code hosted on GitHub — ongoing. Planned features: offline sync, admin user-management, exercise DB (SQLite local + remote sync), push notifications.',
      features: [
        'Create and customize workout plans',
        'Track progress and log sets/reps/weight',
        'Offline-first with local SQLite database',
        'Remote sync with a central server',
        'Push notifications for workout reminders',
      ],
      tech: ['React Native (Expo)', 'SQLite', 'Expo Router', 'Spring Boot', 'TypeScript'],
      repoUrl: '#',
      caseStudy: {
        problem: "Existing gym apps are often bloated, subscription-heavy, or lack robust offline capabilities. This project aims to build a lightweight, fast, and offline-first workout planner for serious trainees.",
        role: ["Solo Developer", "Mobile App Development (React Native)", "Backend API Design (Spring Boot)", "Database schema and synchronization logic"],
      },
    },
    {
      id: 'chess-engine',
      title: 'Chess engine & database',
      tagline: 'Chess engine + 4M game database',
      status: 'Epic',
      summary:
        'A hybrid chess engine that consults three sub-engines — minimax, historical database, and a neural network — plus a searchable database of ~4 million GM games.',
      features: [
        'Playable engine (play as white or black)',
        'Move suggestions from three sub-engines with confidence scores',
        'Database queries by player, ECO code, opening, year',
        'API endpoints for engine and database interaction',
      ],
      tech: ['FastAPI', 'Angular', 'PostgreSQL', 'PyTorch', 'Python'],
      liveUrl: '#',
      caseStudy: {
        problem: "Modern chess engines are dominated by neural networks, which are computationally expensive. This project explores a hybrid approach, combining a traditional alpha-beta (minimax) engine, a massive historical game database, and a lightweight neural network to provide strong moves on consumer hardware.",
        role: ["Project Lead & Developer", "Engine development (Python/PyTorch)", "Database design and querying (PostgreSQL)", "API development (FastAPI)", "Frontend playable interface (Angular)"],
      },
    },
    {
      id: 'cruiz',
      title: 'Cruiz.sa',
      tagline: 'Landing & policy pages for startup',
      status: 'Freelance',
      summary:
        'Freelance landing page, policy & FAQ pages for cruise startup — design + implementation.',
      features: [
        'SEO-optimized landing page for high conversion',
        'Static pages for Privacy Policy, ToS, etc.',
        'Integration with a headless CMS for policy edits',
        'Fully responsive design',
      ],
      tech: ['Next.js', 'React', 'Tailwind CSS', 'Vercel', 'Sanity.io'],
      liveUrl: '#',
      caseStudy: {
        problem: "The startup Cruiz.sa needed a professional, fast, and SEO-friendly web presence to attract initial customers and establish credibility. The content for legal pages needed to be easily updatable by non-technical staff.",
        role: ["Freelance Web Developer", "Design and implementation of all pages", "CMS integration", "Deployment and hosting setup on Vercel"],
      },
    }
  ]);

  skills = signal<Skill[]>([
    // Frontend
    { name: 'Angular', proficiency: 'Expert', category: 'Frontend', logoSvg: 'M12 0L1.717 4.136l1.036 15.728L12 24l9.247-4.136 1.036-15.728L12 0zm0 2.43l8.316 3.12-1.28 11.968-7.036 3.15-7.036-3.15L2.84 5.55 12 2.43zm0 3.18L6.44 18.42h2.08l1.12-2.76h4.72l1.12 2.76h2.08L12 5.61zm1.36 7.2H10.64l1.36-3.32 1.36 3.32z' },
    { name: 'TypeScript', proficiency: 'Expert', category: 'Frontend', logoSvg: 'M1.5 0 h21 v21 h-21z M3.18 1.68 v17.64 h17.64 v-17.64z M4.86 3.36 v3.36 h6.3 v12.6 h3.36 v-12.6 h6.3 v-3.36z' },
    { name: 'React', proficiency: 'Advanced', category: 'Frontend', logoSvg: 'M12 2.677a9.323 9.323 0 100 18.646 9.323 9.323 0 000-18.646zm0 17.182a7.859 7.859 0 110-15.718 7.859 7.859 0 010 15.718z M12 6.78a.65.65 0 00-.65.65v2.871a.65.65 0 001.3 0V7.43a.65.65 0 00-.65-.65zm-2.81 2.91a.65.65 0 00-.65.65v.98a.65.65 0 001.3 0v-.98a.65.65 0 00-.65-.65zm5.62 0a.65.65 0 00-.65.65v.98a.65.65 0 001.3 0v-.98a.65.65 0 00-.65-.65z M12 12a.65.65 0 00-.65.65v2.871a.65.65 0 001.3 0v-2.87a.65.65 0 00-.65-.65zm-2.81 2.91a.65.65 0 00-.65.65v.98a.65.65 0 001.3 0v-.98a.65.65 0 00-.65-.65zm5.62 0a.65.65 0 00-.65.65v.98a.65.65 0 001.3 0v-.98a.65.65 0 00-.65-.65z' },
    { name: 'RxJS', proficiency: 'Expert', category: 'Frontend', logoSvg: 'M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12c3.085 0 5.885-1.164 7.95-3.05a9.317 9.317 0 01-3.95-2.01c-1.104 0-2.01-.905-2.01-2.01 0-1.104.906-2.01 2.01-2.01 1.105 0 2.01.906 2.01 2.01 0 .28-.05.55-.15.8a11.95 11.95 0 003.15-5.74C21.836 5.885 24 3.085 24 0h-12zm-3.99 15.96c-1.104 0-2.01-.905-2.01-2.01 0-1.104.906-2.01 2.01-2.01 1.105 0 2.01.906 2.01 2.01 0 1.105-.905 2.01-2.01 2.01z' },
    { name: 'Tailwind CSS', proficiency: 'Expert', category: 'Frontend', logoSvg: 'M12 6.429c-3.15 0-5.714 2.564-5.714 5.714s2.564 5.714 5.714 5.714 5.714-2.564 5.714-5.714-2.564-5.714-5.714-5.714zm0 9.6c-2.139 0-3.886-1.746-3.886-3.886s1.747-3.886 3.886-3.886 3.886 1.746 3.886 3.886-1.747 3.886-3.886 3.886zm6.857-8.143c-1.571 0-2.857 1.286-2.857 2.857s1.286 2.857 2.857 2.857 2.857-1.286 2.857-2.857-1.286-2.857-2.857-2.857zm0 3.886c-.571 0-1.029-.457-1.029-1.029s.458-1.029 1.029-1.029 1.029.457 1.029 1.029-.458 1.029-1.029 1.029zm-13.714-3.886c-1.571 0-2.857 1.286-2.857 2.857s1.286 2.857 2.857 2.857 2.857-1.286 2.857-2.857-1.286-2.857-2.857-2.857zm0 3.886c-.571 0-1.029-.457-1.029-1.029s.458-1.029 1.029-1.029 1.029.457 1.029 1.029-.458 1.029-1.029 1.029z' },

    // Backend
    { name: 'Spring Boot', proficiency: 'Expert', category: 'Backend', logoSvg: 'M18.15 4.35A9.85 9.85 0 0012 2.1c-5.46 0-9.9 4.44-9.9 9.9s4.44 9.9 9.9 9.9c4.2 0 7.8-2.61 9.15-6.3h-2.13a7.8 7.8 0 11-7.02-7.8c1.35 0 2.61.36 3.69.96v-3.6z' },
    { name: 'Node.js', proficiency: 'Advanced', category: 'Backend', logoSvg: 'M21.282 18.665c-.175.7-.525 1.356-1.02 1.898-.53.578-1.2.98-1.95 1.2-1.08.32-2.2.32-3.29-.01l-.11-.04c-1.1-.38-2.02-1.05-2.69-1.93l1.58-1.21c.54.71 1.25 1.21 2.06 1.49l.1.03c.69.21 1.39.2 2.04-.04.53-.19.98-.56 1.29-1.05.3-.5.42-1.09.33-1.68l-8.62-2.31V3.335h10.42v2.33H12.63v4.61l8.65 2.39z' },
    { name: 'PostgreSQL', proficiency: 'Expert', category: 'Backend', logoSvg: 'M12.008 2.008c-3.156 0-5.918 1.34-7.85 3.51V2.83H1.98v7.058h7.058V7.71h-2.23c1.603-1.63 3.684-2.63 5.91-2.63 4.542 0 8.22 3.68 8.22 8.22s-3.678 8.22-8.22 8.22-8.22-3.68-8.22-8.22h-2.18c0 5.74 4.66 10.4 10.4 10.4s10.4-4.66 10.4-10.4-4.66-10.4-10.4-10.4z' },
    { name: 'Python', proficiency: 'Advanced', category: 'Backend', logoSvg: 'M16.2.7H7.8C4.5.7 2 3.2 2 6.5v3.7c0 1.1 1.1 1.8 2 1.3 1.1-.6 2.4-.3 2.9.8.5 1.1.2 2.4-.8 2.9-1 .6-1.3 1.8-1.3 2.9v3.7c0 3.3 2.5 5.8 5.8 5.8h8.4c3.3 0 5.8-2.5 5.8-5.8V18c0-1.1-1.1-1.8-2-1.3-1.1.6-2.4.3-2.9-.8-.5-1.1-.2-2.4.8-2.9 1-.6 1.3-1.8 1.3-2.9V6.5C22 3.2 19.5.7 16.2.7zM7.8 5.4c.9 0 1.6.7 1.6 1.6s-.7 1.6-1.6 1.6S6.2 8 6.2 7s.7-1.6 1.6-1.6zm8.4 13.2c-.9 0-1.6-.7-1.6-1.6s.7-1.6 1.6-1.6 1.6.7 1.6 1.6-.7 1.6-1.6 1.6z' },
    { name: 'MongoDB', proficiency: 'Advanced', category: 'Backend', logoSvg: 'M14.22.06A12.33 12.33 0 0012 0c-4.43 0-8.28 2.3-10.39 5.76a1 1 0 00.3 1.58 13.5 13.5 0 0115.82-.41 11.9 11.9 0 00-2.3-4.63l-2.06 2.05a8.7 8.7 0 014.2 8.35v6.54a1.05 1.05 0 001.05 1.05c.58 0 1.05-.47 1.05-1.05v-7.6a12.01 12.01 0 00-6.45-11.13z' },
    { name: 'FastAPI', proficiency: 'Advanced', category: 'Backend', logoSvg: 'M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zM8.016 18.66h2.24l.568-2.88H8.56l-.544 2.88zm3.208 0h2.248L14.04 15h-1.12l-.568 3.66zm.568-4.32l.568-3.12h1.68l-2.248 11.28h-1.688l-2.24-11.28h1.68l.568 3.12h1.12zM18.984 5.34h-3.368V11.1h-1.68V5.34H10.5v-1.68h8.484v1.68z' },

    // Mobile
    { name: 'React Native', proficiency: 'Advanced', category: 'Mobile', logoSvg: 'M12 2.677a9.323 9.323 0 100 18.646 9.323 9.323 0 000-18.646zm0 17.182a7.859 7.859 0 110-15.718 7.859 7.859 0 010 15.718z M12 6.78a.65.65 0 00-.65.65v2.871a.65.65 0 001.3 0V7.43a.65.65 0 00-.65-.65zm-2.81 2.91a.65.65 0 00-.65.65v.98a.65.65 0 001.3 0v-.98a.65.65 0 00-.65-.65zm5.62 0a.65.65 0 00-.65.65v.98a.65.65 0 001.3 0v-.98a.65.65 0 00-.65-.65z M12 12a.65.65 0 00-.65.65v2.871a.65.65 0 001.3 0v-2.87a.65.65 0 00-.65-.65zm-2.81 2.91a.65.65 0 00-.65.65v.98a.65.65 0 001.3 0v-.98a.65.65 0 00-.65-.65zm5.62 0a.65.65 0 00-.65.65v.98a.65.65 0 001.3 0v-.98a.65.65 0 00-.65-.65z' },
    { name: 'Expo', proficiency: 'Advanced', category: 'Mobile', logoSvg: 'M12 0L2 6v12l10 6 10-6V6L12 0zm-1.01 4.88L15.43 7.8l-4.44 2.57-4.44-2.57 4.44-2.92zM3.49 7.8l4.44 2.57v5.13L3.49 13V7.8zm17.02 0v5.2l-4.44 2.53v-5.13L20.51 7.8z' },
    { name: 'SQLite', proficiency: 'Advanced', category: 'Mobile', logoSvg: 'M18 1.5H6v6H0v15h18v-6h6V1.5H18zM6 9V7.5h10.5V9H6zm0-3V4.5h10.5V6H6zM4.5 9H3V7.5h1.5V9zm0-3H3V4.5h1.5V6zm0-3H3V1.5h1.5V3zM1.5 9H0V7.5h1.5V9zm0-3H0V4.5h1.5V6zm0-3H0V1.5h1.5V3zm15 19.5H1.5V10.5h15v10.5zm6-6h-4.5v-1.5H24v1.5zm0-3h-4.5v-1.5H24v1.5zm0-3h-4.5V9H24v1.5z' },

    // DevOps & Tooling
    { name: 'Docker', proficiency: 'Advanced', category: 'DevOps & Tooling', logoSvg: 'M23.2 8.3c-.3-.2-.7-.2-1 0l-1.4.8c-.3.2-.4.5-.4.8v5c0 .3.1.6.4.8l1.4.8c.3.2.7.2 1 0l8.3-4.8c.3-.2.4-.5.4-.8v-1.5c0-.3-.1-.6-.4-.8l-8.3-4.9zm-2.8 1.6l-1.4.8c-.3.2-.4.5-.4.8v.8l7 4v-1.6l-5.2-3zm0 10.3l-1.4.8c-.3.2-.4.5-.4.8v.8l7 4v-1.6l-5.2-3zM21.7 18.5c-.3.2-.7.2-1 0l-1.4-.8c-.3-.2-.4-.5-.4-.8v-5c0-.3.1-.6.4-.8l1.4-.8c.3-.2.7-.2 1 0l8.3 4.8c.3.2.4.5.4.8v1.5c0 .3-.1.6-.4.8l-8.3 4.8zM.9 7.5C.4 7.5 0 7.1 0 6.6V4.2c0-.5.4-.9.9-.9h4.3c.5 0 .9.4.9.9v2.5c0 .5-.4.9-.9.9H.9zm9.7 0c-.5 0-.9-.4-.9-.9V4.2c0-.5.4-.9.9-.9h4.3c.5 0 .9.4.9.9v2.5c0 .5-.4.9-.9.9h-4.3zm9.8 0c-.5 0-.9-.4-.9-.9V4.2c0-.5.4-.9.9-.9h4.3c.5 0 .9.4.9.9v2.5c0 .5-.4.9-.9.9h-4.3zM.9 12.3c-.5 0-.9-.4-.9-.9V9c0-.5.4-.9.9-.9h4.3c.5 0 .9.4.9.9v2.5c0 .5-.4.9-.9.9H.9zm9.7 0c-.5 0-.9-.4-.9-.9V9c0-.5.4-.9.9-.9h4.3c.5 0 .9.4.9.9v2.5c0 .5-.4.9-.9.9h-4.3z' },
    { name: 'AWS', proficiency: 'Advanced', category: 'DevOps & Tooling', logoSvg: 'M23.111 15.202c-.672.336-1.568.448-2.464.112-1.12-.448-1.792-1.344-2.016-2.576-.112-.672.112-1.344.448-1.904.448-.672 1.12-1.12 1.904-1.232.9-.112 1.792.112 2.464.56.672.448 1.12 1.12 1.232 1.904.112.9-.112 1.792-.672 2.464-.448.56-.9 1.008-1.904 1.232zm-9.3-1.232c-.672.336-1.568.448-2.464.112-1.12-.448-1.792-1.344-2.016-2.576-.112-.672.112-1.344.448-1.904.448-.672 1.12-1.12 1.904-1.232.9-.112 1.792.112 2.464.56.672.448 1.12 1.12 1.232 1.904.112.9-.112 1.792-.672 2.464-.448.56-1.456 1.008-1.904 1.232zm-9.3 1.232c-.672-.336-1.232-.9-1.344-1.68-.112-.9.112-1.792.672-2.464.56-.672 1.344-1.12 2.24-1.232.9-.112 1.792.112 2.464.672.672.448 1.12 1.232 1.12 2.128 0 .9-.336 1.68-.9 2.24-.56.56-1.344.9-2.24.9-.336 0-.672-.112-1.008-.224zM20.359.5C18.015 0 16.007.5 14.327 1.5c-1.68 1-2.912 2.464-3.584 4.368-2.688 1.12-4.592 3.136-5.488 5.824C1.911 12.36.007 13.032.007 15.376c0 2.24 1.904 3.024 4.368 3.024 2.576 0 4.144-1.232 4.368-3.024.224-2.24-1.344-2.8-2.912-3.136.9-2.352 2.8-4.256 5.376-5.264C16.919 1.48 19.383 0 21.607 0c1.008 0 2.016.224 2.912.672.9.448 1.568 1.12 2.128 2.016.448.9.672 1.904.56 2.912-.112 1.12-.56 2.128-1.232 2.912-.672.9-1.568 1.568-2.688 1.904-2.24 1.008-4.256 1.232-5.712.672-1.12-.336-2.128-1.008-2.8-1.904l-.672-.9c-1.12-1.568-2.016-3.36-2.016-5.6 0-1.792.56-3.472 1.568-4.928.9-1.344 2.128-2.352 3.584-2.912 1.456-.56 3.024-.672 4.592-.448 1.568.336 3.024 1.008 4.256 2.016 1.232 1.12 2.128 2.464 2.688 4.032.224.672.448 1.456.448 2.24 0 2.24-1.344 4.256-3.472 5.376 1.456.336 3.024 1.344 3.472 3.024.448 1.792-.672 3.584-2.464 4.48-1.792.9-3.92.784-5.488-.112a.84.84 0 01-.336-.56c-.112-.336.112-.672.448-.784 1.232-.448 2.576-.672 3.472.112 1.008.672 1.568 1.792 1.12 2.8-.448 1.12-1.68 1.792-2.8 1.456-1.12-.336-1.904-1.232-2.128-2.352-.112-.56-.112-1.12.112-1.568.224-.56.672-.9 1.12-1.12.9-.448 1.904-.336 2.8.224.224.112.56.112.784-.112.224-.224.224-.56.112-.784-1.232-1.456-3.136-2.128-4.928-1.792z' },
    { name: 'Google Cloud', proficiency: 'Advanced', category: 'DevOps & Tooling', logoSvg: 'M11.83.65c-.27-.2-.6-.35-.95-.41C10.1-.02 8.54-.12 7.1.18c-2.73.57-4.9 2.14-6.12 4.6-1.3 2.64-1.17 5.75.43 8.28 1.2 1.9 3.2 3.42 5.5 4.1 2.9.86 6.06.37 8.5-1.4 1.7-1.27 2.9-3.1 3.45-5.2.33-1.24.36-2.5.12-3.75-.15-.76-.43-1.48-.84-2.12-.2-.3-.5-.54-.85-.71-.35-.17-.74-.23-1.12-.17-.4.07-.77.26-1.07.54-.3.28-.5.64-.58 1.03-.07.38-.03.77.13 1.13.16.36.42.67.76.9.7.47 1.25.16 1.6-.5.18-.34.3-.7.38-1.07.16-.7.03-1.43-.37-2.02-.3-.43-.7-.78-1.16-1.03-2-.94-4.52-.7-6.23.6-1.15.86-1.9 2.1-2.2 3.5-.23 1.07.03 2.16.66 3.03.62.86 1.6 1.37 2.66 1.48 1.08.1 2.13-.2 2.97-.84.8-.6 1.3-1.5 1.5-2.5.14-.7-.03-1.4-.44-2-.3-.43-.7-.78-1.16-1.02-1.5-.7-3.3-.1-4.24 1.13-.58.74-.88 1.7-.8 2.68.08.98.56 1.88 1.33 2.5.76.63 1.77.94 2.8.86 1.03-.08 2-.56 2.7-1.3.7-.75 1.1-1.74 1.1-2.78 0-1.05-.3-2.06-.9-2.9-.6-.84-1.48-1.4-2.48-1.6-1-.2-2.04.1-2.88.7-.56.4-.95 1-.9 1.6.05.6.45 1.1.95 1.2 1.03.2 2.1-.3 2.6-1.2.14-.26.23-.55.28-.84.05-.3 0-.6-.1-.87-.1-.28-.27-.52-.5-.7-.44-.36-1-.46-1.5-.2-.5.25-.8.74-.8 1.3v.1z' },
    { name: 'GitHub Actions', proficiency: 'Advanced', category: 'DevOps & Tooling', logoSvg: 'M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2.001 17.001c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5 1.5.672 1.5 1.5-.672 1.5-1.5 1.5zm4.002 0c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5 1.5.672 1.5 1.5-.672 1.5-1.5 1.5zm3.12-6.33c-.09.33-.3.62-.59.8-1.42.88-2.31 1.07-2.31 2.22 0 .54.06 1.08.18 1.58.01.07.02.13.02.2 0 .28-.22.5-.5.5h-5.6c-.28 0-.5-.22-.5-.5 0-.07.01-.13.02-.2.12-.5.18-1.04.18-1.58 0-1.15-.89-1.34-2.31-2.22-.29-.18-.5-.47-.59-.8-.13-.48.09-1 .59-1.17 1.4-.48 2.62-1.25 2.62-2.83 0-.94-.52-1.58-1.14-1.58-.52 0-.9.2-1.2.51-.21.21-.47.62-.47 1.07 0 .28-.22.5-.5.5h-1.5c-.28 0-.5-.22-.5-.5 0-1.29.85-2.52 2.47-2.52 1.93 0 3.14 1.39 3.14 3.03 0 1.58 1.22 2.35 2.62 2.83.5.17.72.69.59 1.17z' },
    { name: 'CI/CD', proficiency: 'Expert', category: 'DevOps & Tooling', logoSvg: 'M21.6 15.2V8.8l-7.2-4.1-7.2 4.1v6.4l7.2 4.1 7.2-4.1zM14.4 4.1l5.8 3.3-5.8 3.3-5.8-3.3 5.8-3.3zM8.6 9.5l4.3 2.5v9.3l-4.3-2.5V9.5zm6.8 11.8V12l4.3-2.5v7.2l-4.3 2.5z' },

    // AI/ML
    { name: 'PyTorch', proficiency: 'Familiar', category: 'AI/ML', logoSvg: 'M18.91 10.33c-1.2-.28-1.93-1.08-1.93-2.2s.73-1.92 1.93-2.2v4.4zM22.5.5C21.49.17 19.34 0 17.5 0 13.17 0 11.13 3.32 11.13 6.64c0 3.32 2.04 6.64 6.37 6.64 1.84 0 3.99-.17 5-.5v-4.4c-1.2.28-1.93 1.08-1.93 2.2s.73 1.92 1.93 2.2V6.08c-1.2.28-1.93 1.08-1.93 2.2s.73 1.92 1.93 2.2V15c-1 .33-3.15.5-5 .5-4.33 0-6.37-3.32-6.37-6.64s2.04-6.64 6.37-6.64c1.84 0 3.99.17 5 .5v4.4zM5.09 13.67c1.2.28 1.93 1.08 1.93 2.2s-.73 1.92-1.93 2.2v-4.4zM1.5 9c1.01.33 3.16.5 5 .5 4.33 0 6.37-3.32 6.37-6.64S10.83 0 6.5 0C4.66 0 2.51.17 1.5.5v4.4c1.2-.28 1.93-1.08 1.93-2.2S2.7 1.8 1.5 1.52V6.1c1.2-.28 1.93-1.08 1.93-2.2S2.7 2.98 1.5 2.7V9z' },
    { name: 'TensorFlow', proficiency: 'Familiar', category: 'AI/ML', logoSvg: 'M12 0l-9.51 5.37v13.26L12 24l9.51-5.37V5.37L12 0zM7.13 8.44l4.87-2.75 4.87 2.75-4.87 2.75-4.87-2.75zm9.74 7.9l-4.87 2.75-4.87-2.75v-5.5l4.87 2.75 4.87-2.75v5.5z' },
    { name: 'Pandas', proficiency: 'Familiar', category: 'AI/ML', logoSvg: 'M4.5 3h3v18h-3V3zm6 0h3v18h-3V3zm6 6h3v12h-3V9zm-6 3h3v9h-3v-9z' },
    { name: 'Numpy', proficiency: 'Familiar', category: 'AI/ML', logoSvg: 'M12 0l-9 5v14l9 5 9-5V5L12 0zm-1.8 19.8V8.1l-3.6 2.1v7.5l3.6 2.1zm3.6 0l3.6-2.1v-7.5l-3.6-2.1v11.7zM12 3.3l5.4 3-5.4 3-5.4-3 5.4-3z' },
    { name: 'Matplotlib', proficiency: 'Familiar', category: 'AI/ML', logoSvg: 'M4 4h4v16H4V4zm6 0h4v16h-4V4zm6 0h4v16h-4V4zM2 20h20v2H2v-2z' },
    { name: 'Keras', proficiency: 'Familiar', category: 'AI/ML', logoSvg: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9v-2h2v2zm0-4H9V8h2v4zm4 4h-2v-2h2v2zm0-4h-2V8h2v4z' },
  ]);

  constructor() {}
}
