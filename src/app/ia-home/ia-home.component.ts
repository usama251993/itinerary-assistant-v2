import { Component, OnInit } from '@angular/core';
import { IaNavigationService } from '../shared/services/ia-navigation.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ia-home',
  templateUrl: './ia-home.component.html',
  styleUrls: ['./ia-home.component.scss']
})
export class IaHomeComponent implements OnInit {

  constructor(private navService: IaNavigationService, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  navigateTo(destination: string) {
    this.navService.goTo(destination, this.route);
  }

}
