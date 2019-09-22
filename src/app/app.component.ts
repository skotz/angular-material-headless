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
      this.projects = res.filter(function (value, index, arr) {
        return value.Enabled == 1;
      });
      this.projects.sort((a, b) => new Date(b.Date).getTime() - new Date(a.Date).getTime())
    });
  }
  parse_date(dateString) {
    var date = new Date(dateString);
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return months[date.getMonth()] + " " + date.getFullYear();
  }
}
