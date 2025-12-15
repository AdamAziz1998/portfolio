import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';

declare var particlesJS: any;

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
