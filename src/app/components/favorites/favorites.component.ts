import { Component } from '@angular/core';
import { JobSearchAppServiceService } from '../../common/service/job-search-app-service.service';
import { ListItemComponent } from '../list-item/list-item.component';
import { CommonModule } from '@angular/common';
import { Jobs } from '../../common/model/jobs.model';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [ListItemComponent, CommonModule],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css'
})
export class FavoritesComponent {

  favouriteJobsArray: Jobs[] = [];
  favourites: Jobs = {
    companyName: '',
    title: '',
    companyLogo: '',
    reference: '',
    id: 0
  };
  constructor(private jobService: JobSearchAppServiceService) {}

  ngOnInit(): void {
    this.jobService.getFavourites().forEach(favObj => {
      this.favourites = favObj;
      this.getJobs();
    });
  }

  async getJobs() {
    let jobs = await this.jobService.getJobLists();
    this.favouriteJobsArray = jobs.filter((job: Jobs) => this.favourites[job?.id]);
  }
}
