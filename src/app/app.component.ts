import { Component } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { ServerStatusComponent } from './dashboard/server-status/server-status.component';
import { ServerTrafficComponent } from './dashboard/server-traffic/server-traffic.component';
import { ServerTicketsComponent } from './dashboard/server-tickets/server-tickets.component';
import { DashboardItemComponent } from './dashboard/dashboard-item/dashboard-item.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    HeaderComponent,
    ServerStatusComponent,
    ServerTrafficComponent,
    ServerTicketsComponent,
    DashboardItemComponent,
  ],
})
export class AppComponent {}
