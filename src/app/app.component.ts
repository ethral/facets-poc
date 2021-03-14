import {Component, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {AppService} from './service/app.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'facets-poc';
  isSpinnerEnable: Subject<boolean> = this.appService.isSpinnerEnable;

  constructor(private appService: AppService) {}

  ngOnInit(): void {}
}
