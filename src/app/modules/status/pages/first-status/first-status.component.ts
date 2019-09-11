import { StatusService } from './../../../../core/http/status/status.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-status',
  templateUrl: './first-status.component.html',
  styleUrls: ['./first-status.component.css']
})
export class FirstStatusComponent implements OnInit {

  constructor(private statusService: StatusService) { }

  ngOnInit() {
    this.statusService.getData('https://api.github.com/users/ibuioli').subscribe((res: any) => {
      console.log(res);
    });
  }
}
