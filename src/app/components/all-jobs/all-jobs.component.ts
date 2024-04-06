import { Component, NgModule, OnInit } from '@angular/core';
import { JobSearchAppServiceService } from '../../common/service/job-search-app-service.service';
import { CommonModule } from '@angular/common';
import { ListItemComponent } from '../list-item/list-item.component';
import { Jobs } from '../../common/model/jobs.model';
import { Jobdescription } from '../../common/model/jobdescription.model';



@Component({
  selector: 'app-all-jobs',
  standalone: true,
  imports: [CommonModule, ListItemComponent],
  templateUrl: './all-jobs.component.html',
  styleUrl: './all-jobs.component.css'
})
export class AllJobsComponent implements OnInit {

  jobs: [] = [];
  constructor(private jobService: JobSearchAppServiceService) {

  }

  ngOnInit(): void {
    this.getJobs();
  }

  async getJobs() {
    this.jobs = await this.jobService.getJobLists();
  }
}
