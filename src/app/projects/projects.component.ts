import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  template: `

    <h1 class="title is-1 has-text-centered title-padding" id="projects">Projects</h1>

    <section class="section">

      <div class="container">
        <div class="columns">

          <div class="column is-half">
            <div class="card">
              <div class="card-content">
                <div class="card-image has-text-centered">
                    <figure class="image is-inline-block">
                        <img class="" src="/assets/img/itinerary-img-320.png"/>
                    </figure>
                </div>
                <div class="title is-6 project-title-spacing">
                  Itinerary Assist
                  <div class="is-inline-block inner-div">
                    <a href="https://github.com/janiljohn/ItineraryAssist" target="_blank">
                      <i class="bi bi-github"></i>
                    </a>
                  </div>
                </div>              
                  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="" class="badges">
                  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="" class="badges">
                  <img src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white" alt="" class="badges">
                  <hr class="hr-padding">
                <div class="content">
                  This website utalizes the GoogleMaps Geocoding and NearBySearch APIs to retrieve top destination at the location the user specifies.
                </div>
              </div>
            </div>
          </div>

          <div class="column is-half">
            <div class="card">
              <div class="card-content">
                <div class="card-image has-text-centered">
                    <figure class="image is-inline-block">
                        <img class="" src="/assets/img/go-fish-img.png"/>
                    </figure>
                </div>
                <div class="title is-6 project-title-spacing">
                  Go Fish!
                  <div class="is-inline-block inner-div">
                    <a href="https://github.com/janiljohn/Go-Fish" target="_blank">
                      <i class="bi bi-github"></i>
                    </a>
                  </div>
                </div>              
                  <span class="tag is-danger badges">C++</span>
                  <hr class="hr-padding">
                <div class="content">
                  A C++ algorithm that plays the classic card game, Go Fish!
                </div>
              </div>
            </div>
          </div>
          
        </div>

        <div class="columns">

          <div class="column is-half">
              <div class="card">
                <div class="card-content">
                  <div class="card-image has-text-centered">
                      <figure class="image is-inline-block">
                          <img class="" src="/assets/img/covid-tracker.png"/>
                      </figure>
                  </div>
                  <div class="title is-6 project-title-spacing">
                    COVID-19 Stats Tracker
                    <div class="is-inline-block inner-div">
                      <a href="https://github.com/janiljohn/COVID-19-Stats-Tracker" target="_blank">
                        <i class="bi bi-github"></i>
                      </a>
                    </div>
                  </div>              
                    <img src="https://img.shields.io/badge/Python-14354C?style=for-the-badge&logo=python&logoColor=white" alt="" class="badges">
                    <hr class="hr-padding">
                  <div class="content">
                    A program written in Python displays number of deaths and confirmed cases of the area provided by the user.
                  </div>
                </div>
              </div>
            </div>

            <div class="column is-half">
              <div class="card">
                <div class="card-content">
                  <div class="card-image has-text-centered">
                      <figure class="image is-inline-block">
                          <img class="" src="/assets/img/acm-csuf.png"/>
                      </figure>
                  </div>
                  <div class="title is-6 project-title-spacing">
                    ACMCSUF.COM
                    <div class="is-inline-block inner-div">
                      <a href="https://github.com/EthanThatOneKid/acmcsuf.com" target="_blank">
                        <i class="bi bi-github"></i>
                      </a>
                    </div>
                  </div>              
                    <img src="https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00" alt="" class="badges">
                    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="" class="badges">
                    <hr class="hr-padding">
                  <div class="content">
                    Contributed to the website for the ACM chapter at California State University, Fullerton.
                  </div>
                </div>
              </div>
            </div>

        </div>


        <div class="columns">

          <div class="column is-half">
              <div class="card">
                <div class="card-content">
                  <div class="card-image has-text-centered">
                      <figure class="image is-inline-block">
                          <img class="" src="/assets/img/personal-website.png"/>
                      </figure>
                  </div>
                  <div class="title is-6 project-title-spacing">
                    Portfolio Website
                    <div class="is-inline-block inner-div">
                      <a href="https://github.com/janiljohn/personal-site-angular" target="_blank">
                        <i class="bi bi-github"></i>
                      </a>
                    </div>
                  </div>              
                    <img src="https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white" alt="" class="badges">
                    <hr class="hr-padding">
                  <div class="content">
                    Personal portfolio website made using Angular and the CSS framework Bulma.
                  </div>
                </div>
              </div>
            </div>

            <div class="column is-half">
              <div class="card">
                <div class="card-content">
                  <div class="card-image has-text-centered">
                      <figure class="image is-inline-block">
                          <img class="" src="/assets/img/acm-discord-bot.png"/>
                      </figure>
                  </div>
                  <div class="title is-6 project-title-spacing">
                    ACM CSUF Discord Bot
                    <div class="is-inline-block inner-div">
                      <a href="https://github.com/jorgeemejia/ACM-CSUF-Discord-Bot" target="_blank">
                        <i class="bi bi-github"></i>
                      </a>
                    </div>
                  </div>              
                    <img src="https://img.shields.io/badge/Python-14354C?style=for-the-badge&logo=python&logoColor=white" alt="" class="badges">
                    <hr class="hr-padding">
                  <div class="content">
                    Contributed to the discord bot used in the ACM discord server at CSUF. The bot was built using the discord.py wrapper API.
                  </div>
                </div>
              </div>
            </div>

        </div>

      </div>

      

    </section>

  `,
  styles: [`
    .card{
      margin: 4px;
    }
    .badges{
      border-radius: 30px;
      margin-right: 4px;
    }
    .inner-div{
      float: right;
      display: inline-block;
    }
    .project-title-spacing{
      margin-bottom: 10px;
      margin-top: 5px;
    }
    .hr-padding{
      margin-top: 10px;
      margin-bottom: 10px;
    }
    .title-padding{
      margin-top:20px;
      margin-bottom: 0px;
    }
  `]
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
