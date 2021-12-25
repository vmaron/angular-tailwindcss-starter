import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {ActivatedRoute, NavigationEnd, Router, RoutesRecognized} from '@angular/router';
import {LayoutType} from '@core/settings/settings.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private routeData;

  layout: string;
  sidenavLayoutType: LayoutType = LayoutType.Sidenav;
  emptyLayoutType: LayoutType = LayoutType.Empty;

  constructor(
    private store: Store,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit(): void {

    this.router.events.subscribe((data) => {
      if (data instanceof RoutesRecognized) {
        this.routeData = data.state.root.firstChild.data;
      }
    });

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.layout = this.routeData.layout;
      }
    });
  }
}
