import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { Skill } from '../../models/project.model';

@Component({
  selector: 'app-skill-badge',
  templateUrl: './skill-badge.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillBadgeComponent {
  skill = input.required<Skill>();

  getProficiencyColor(proficiency: string): string {
    switch (proficiency) {
      case 'Expert': return 'border-violet-500/50';
      case 'Advanced': return 'border-sky-500/50';
      case 'Familiar': return 'border-gray-500/50';
      default: return 'border-gray-600/50';
    }
  }
  
  getLogoColor(proficiency: string): string {
    switch (proficiency) {
      case 'Expert': return 'text-violet-400';
      case 'Advanced': return 'text-sky-400';
      case 'Familiar': return 'text-gray-300';
      default: return 'text-gray-400';
    }
  }
}