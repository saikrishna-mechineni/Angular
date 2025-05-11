import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { BodyComponent } from './Components/body/body.component';
import { FooterComponent } from './Components/footer/footer.component';
import { CarouselComponent } from './Components/carousel/carousel.component';
import { CategoriesComponent } from './Components/categories/categories.component';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent,
    BodyComponent,
    FooterComponent,
    CarouselComponent,
    CategoriesComponent

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-project1';
}
