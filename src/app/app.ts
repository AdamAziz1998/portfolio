import {Component, inject, signal} from '@angular/core';
import {Project, Skill} from '../models/project.model';
import {DataService} from '../services/data.service';
import {HeaderComponent} from '../components/header/header.component';
import {SkillBadgeComponent} from '../components/skill-badge/skill-badge.component';
import {ProjectCardComponent} from '../components/project-card/project-card.component';
import {ProjectModalComponent} from '../components/project-modal/project-modal.component';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, SkillBadgeComponent, ProjectCardComponent, ProjectModalComponent, DatePipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio');

  private dataService = inject(DataService);

  projects = this.dataService.projects;
  skills = this.dataService.skills;

  frontendSkills = signal<Skill[]>(this.skills().filter(s => s.category === 'Frontend'));
  backendSkills = signal<Skill[]>(this.skills().filter(s => s.category === 'Backend'));
  mobileSkills = signal<Skill[]>(this.skills().filter(s => s.category === 'Mobile'));
  devopsSkills = signal<Skill[]>(this.skills().filter(s => s.category === 'DevOps & Tooling'));
  aiSkills = signal<Skill[]>(this.skills().filter(s => s.category === 'AI/ML'));

  selectedProject = signal<Project | null>(null);

  today = new Date();

  openProjectModal(project: Project) {
    this.selectedProject.set(project);
    document.body.style.overflow = 'hidden';
  }

  closeProjectModal() {
    this.selectedProject.set(null);
    document.body.style.overflow = 'auto';
  }
}
