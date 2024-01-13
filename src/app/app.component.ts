import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BiographyComponent } from "./biography/biography.component";
import { IntroductionComponent } from "./introduction/introduction.component";
import { NavbarComponent } from "./navbar/navbar.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, BiographyComponent, IntroductionComponent, NavbarComponent]
})
export class AppComponent {
  title = 'Profile';
}
