import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { JobSearchAppServiceService } from '../../common/service/job-search-app-service.service';
import { filter } from 'rxjs';


@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.css'
})
export class JobsComponent implements OnInit {
 currentUrl = "";
  constructor(private jobService: JobSearchAppServiceService, private router: Router) {}
  
  ngOnInit() {
  
    this.currentUrl = this.router.url;
    this.router.events.pipe(
      filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.currentUrl = event.url;

      });

  }
  title = 'ng-job-search';
  redirectPage(pageendpoint: string) {
    this.router.navigateByUrl('/jobs/' + pageendpoint);
  }
}
