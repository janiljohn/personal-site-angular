import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <section class="hero is-primary is-bold is-fullheight" id="home">
      <div class="hero-body">
      <div class="container has-text-centered">
        <p class="title">
          Joel Anil John
        </p>
        <p>Computer Science Major @  <a href="https://uci.edu/" class="tag is-warning">UCI!</a> </p>
      </div>
      </div>
      <!-- <div id="projects"></div> -->
    </section>
  
  `,
  styles: [`
    .hero{
      background-image: url('/assets/img/background.jpg') !important;
      background-size: cover;
      background-position: center center;
    }
  `]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
