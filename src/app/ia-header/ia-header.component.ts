import { Component, OnInit } from '@angular/core';
import { IaNavigationService } from '../shared/services/ia-navigation.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ia-header',
  templateUrl: './ia-header.component.html',
  styleUrls: ['./ia-header.component.scss']
})
export class IaHeaderComponent implements OnInit {

  constructor(private navService: IaNavigationService, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  navigateTo(destination: string) {
    this.navService.goTo(destination, this.route);
  }

}
