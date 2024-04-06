import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { JobSearchAppServiceService } from '../../common/service/job-search-app-service.service';
import { Router } from '@angular/router';
import { Jobs } from '../../common/model/jobs.model';


@Component({
  selector: 'app-list-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-item.component.html',
  styleUrl: './list-item.component.css'
})
export class ListItemComponent implements OnInit {
  @Input('jobs') jobs!: Jobs[];
  @Input('favouritesPage')favouritesPage: boolean = false;


  constructor(private jobService: JobSearchAppServiceService, private router: Router) { }
  
  favourites: Jobs = {
    id: 0,
    companyName: '',
    title: '',
    companyLogo: '',
    reference: ''
  };
  async ngOnInit(): Promise<void> {
    this.jobService.getFavourites().forEach(async favObj => {
    this.favourites = favObj;

    });
  }

  setFavourites(id: number) {
    if (this.favourites[id]) {
      delete this.favourites[id];
    } else {
      this.favourites[id] = true;
    }
    this.jobService.setFavourites(this.favourites);
  }

  redirectPage(jobId: number) {
    this.router.navigateByUrl('/jobs/' + jobId);
  }

}
