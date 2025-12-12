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
      tech: ['Angular', 'Spring Boot', 'Docker', 'Postgres', 'MongoDB', 'Kafka', 'Keycloak'],
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
      status: 'Done',
      summary:
        'A hybrid chess engine that consults three sub-engines — minimax, historical database, and a neural network — plus a searchable database of ~4 million GM games.',
      features: [
        'Playable engine (play as white or black)',
        'Move suggestions from three sub-engines with confidence scores',
        'Database queries by player, ECO code, opening, year',
        'API endpoints for engine and database interaction',
      ],
      tech: ['FastAPI', 'Angular', 'PostgreSQL', 'PyTorch', 'Python', 'Tailwind CSS'],
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
      tech: ['Angular', 'Google Cloud Platform', 'Typescript'],
      liveUrl: '#',
      caseStudy: {
        problem: "The startup Cruiz.sa needed a professional, fast, and SEO-friendly web presence to attract initial customers and establish credibility. The content for legal pages needed to be easily updatable by non-technical staff.",
        role: ["Freelance Web Developer", "Design and implementation of all pages", "CMS integration", "Deployment and hosting setup on Vercel"],
      },
    }
  ]);

  skills = signal<Skill[]>([
    // Frontend
    { name: 'Angular', category: 'Frontend', logoPath: '/assets/angular.svg'},
    { name: 'TypeScript', category: 'Frontend', logoPath: '/assets/typescript.svg' },
    { name: 'React', category: 'Frontend', logoPath: '/assets/react.svg' },
    { name: 'RxJS', category: 'Frontend', logoPath: '/assets/rxjs.svg' },
    { name: 'Tailwind CSS', category: 'Frontend', logoPath: '/assets/tailwindcss.svg' },

    // Backend
    { name: 'Spring Boot', category: 'Backend', logoPath: '/assets/spring.svg' },
    { name: 'Node.js', category: 'Backend', logoPath: '/assets/nodejs.svg' },
    { name: 'PostgreSQL', category: 'Backend', logoPath: '/assets/postgresql.svg' },
    { name: 'Python', category: 'Backend', logoPath: '/assets/python.svg' },
    { name: 'MongoDB', category: 'Backend', logoPath: '/assets/mongo.svg' },
    { name: 'FastAPI', category: 'Backend', logoPath: '/assets/fastapi.svg' },
    { name: 'Java', category: 'Backend', logoPath: '/assets/java.svg' },

    // Mobile
    { name: 'React Native', category: 'Mobile', logoPath: '/assets/reactnative.svg' },
    { name: 'Expo', category: 'Mobile', logoPath: '/assets/expo.svg' },
    { name: 'SQLite', category: 'Mobile', logoPath: '/assets/sqlite.svg' },

    // DevOps & Tooling
    { name: 'Docker', category: 'DevOps & Tooling', logoPath: '/assets/docker.svg' },
    { name: 'AWS', category: 'DevOps & Tooling', logoPath: '/assets/aws.svg' },
    { name: 'Google Cloud', category: 'DevOps & Tooling', logoPath: '/assets/googlecloud.svg' },
    { name: 'GitHub Actions', category: 'DevOps & Tooling', logoPath: '/assets/github.svg' },

    // AI/ML
    { name: 'PyTorch', category: 'AI/ML', logoPath: '' },
    { name: 'TensorFlow', category: 'AI/ML', logoPath: '' },
    { name: 'Pandas', category: 'AI/ML', logoPath: '' },
    { name: 'Numpy', category: 'AI/ML', logoPath: '' },
    { name: 'Matplotlib', category: 'AI/ML', logoPath: '' },
    { name: 'Keras', category: 'AI/ML', logoPath: '' },
  ]);

  constructor() {}
}
