import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="footer" id="contacts">
    <div class="container has-text-centered">
      <p class="title is-2 is-spaced">Contacts</p>
      <a class="button is-warning footer-btn mr-1" href="mailto:anil.john13542@gmail.com" target="_blank"><i class="bi bi-mailbox2"> Email</i></a>
      <a class="button is-dark footer-btn mr-1" href="https://github.com/janiljohn" target="_blank"><i class="bi-github" role="img" aria-label="GitHub"> GitHub</i></a>
      <a class="button is-info footer-btn mr-1" href="https://www.linkedin.com/in/joelaniljohn/" target="_blank"><i class="bi bi-linkedin"> LinkedIn</i></a>
      <a class="button is-link footer-btn mr-1" href="https://github.com/janiljohn/resume/raw/main/Resume.pdf" target="_blank"><i class="bi bi-file-text-fill"> Resume</i></a>
      <p class="has-text-dark subtitle is-3 pt-5 mb-1">Made by Joel Anil John</p>
      <p class="has-text-dark subtitle is-3 mb-1">Copyright 2022</p>
      <p class="has-text-dark subtitle is-3 mb-1">Built with Angular & Bulma</p>
    </div>
  </footer>
  `,
  styles: [`
  .footer-padding{
    padding-bottom: 0px;
  }
  `
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
