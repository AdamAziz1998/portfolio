import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { Skill } from '../../models/project.model';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-skill-badge',
  templateUrl: './skill-badge.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: []
})
export class SkillBadgeComponent {
  skill = input.required<Skill>();
}
