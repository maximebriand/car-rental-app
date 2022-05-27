import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'dream-car-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  constructor(public http: HttpClient) {
    this.ping()
  }

  public ping() {
    this.http.get('http://localhost:3333/api')
      .subscribe(
        {
          next: (data) => console.log(data),
          error: err => console.log(err)
        }
      );
  }
}
