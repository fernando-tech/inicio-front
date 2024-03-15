import { Component, Input, OnInit } from '@angular/core';



@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: []
})
export class BreadcrumbsComponent implements OnInit {

  @Input() titleBreadcrumb: string = "";

  constructor() {}

  ngOnInit(): void {
  }

}

