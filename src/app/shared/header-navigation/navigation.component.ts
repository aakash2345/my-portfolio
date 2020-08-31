import { Component, AfterViewInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
declare var $: any;

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
})
export class NavigationComponent implements AfterViewInit {
  public showSearch = false;

  constructor(private modalService: NgbModal) {}

  ngAfterViewInit() {}
}
