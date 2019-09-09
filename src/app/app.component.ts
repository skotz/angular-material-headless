import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-material-headless';
  private cmsUrl = "http://localhost:1337";
  private projects = [];
  constructor(private httpClient: HttpClient) {
    this.get_projects();
  }
  get_projects() {
    this.httpClient.get(this.cmsUrl + '/projects').subscribe((res: any[]) => {
      console.log(res);
      this.projects = res;
    });
  }
  parse_date(dateString) {
    var date = new Date(dateString);
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return months[date.getMonth()] + " " + date.getFullYear();
  }
}
