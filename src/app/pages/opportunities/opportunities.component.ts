import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DxButtonModule, DxDataGridModule } from 'devextreme-angular';
import { Observable } from 'rxjs';

@Component({
  templateUrl: 'opportunities.component.html',
  styleUrls: ['./opportunities.component.scss'],
})
export class OpportunitiesComponent {
  loading: boolean = false;
  costumers: any[] = [];
  initialCustomers: any[] = [];

  alert: number = 0;
  upgrade: number = 0;
  service: number = 0;
  pending: number = 0;
  delayedService: number = 0;
  noWarranty: number = 0;
  orphan: number = 0;

  constructor(private http: HttpClient) {
    this.loading = true;
    this.get().subscribe((r) => {
      this.costumers = r;
      this.initialCustomers = r;
      this.loading = false;
      this.getLength();
    });
  }

  get(): Observable<any> {
    return this.http.get<any>('http://localhost:8080/api/opportunities');
  }

  refresh() {
    this.loading = true;
    return this.http
      .get<any>('http://localhost:8080/api/opportunities')
      .subscribe((r) => {
        this.costumers = r;
        this.initialCustomers = r;
        this.loading = false;
        this.getLength();
      });
  }

  getLength() {
    const inital1 = this.initialCustomers;
    const inital2 = this.initialCustomers;
    const inital3 = this.initialCustomers;
    const inital4 = this.initialCustomers;
    const inital7 = this.initialCustomers;
    const inital8 = this.initialCustomers;
    const inital9 = this.initialCustomers;
    this.alert = inital1.filter(
      (r) =>
        r.Alert &&
        !r.Upgrade &&
        !r.Service &&
        !r.Pending &&
        !r.DelayedService &&
        !r.NoWarranty &&
        !r.Orphan
    ).length;
    this.upgrade = inital2.filter(
      (r) =>
        r.Upgrade &&
        !r.Alert &&
        !r.Service &&
        !r.Pending &&
        !r.DelayedService &&
        !r.NoWarranty &&
        !r.Orphan
    ).length;
    this.service = inital3.filter(
      (r) =>
        r.Service &&
        !r.Alert &&
        !r.Upgrade &&
        !r.Pending &&
        !r.DelayedService &&
        !r.NoWarranty &&
        !r.Orphan
    ).length;
    this.pending = inital4.filter(
      (r) =>
        r.Pending &&
        !r.Alert &&
        !r.Upgrade &&
        !r.Service &&
        !r.DelayedService &&
        !r.NoWarranty &&
        !r.Orphan
    ).length;
    this.delayedService = inital7.filter(
      (r) =>
        r.DelayedService &&
        !r.Pending &&
        !r.Alert &&
        !r.Upgrade &&
        !r.Service &&
        !r.NoWarranty &&
        !r.Orphan
    ).length;
    this.noWarranty = inital8.filter(
      (r) =>
        r.NoWarranty &&
        !r.Pending &&
        !r.Alert &&
        !r.Upgrade &&
        !r.Service &&
        !r.DelayedService &&
        !r.Orphan
    ).length;
    this.orphan = inital9.filter(
      (r) =>
        r.Orphan &&
        !r.Pending &&
        !r.Alert &&
        !r.Upgrade &&
        !r.Service &&
        !r.DelayedService &&
        !r.NoWarranty
    ).length;
  }

  getAlert() {
    this.costumers = [];
    const alert = this.initialCustomers;
    this.costumers = alert.filter(
      (r) =>
        r.Alert &&
        !r.Upgrade &&
        !r.Service &&
        !r.Pending &&
        !r.DelayedService &&
        !r.NoWarranty &&
        !r.Orphan
    );
  }

  getUpgrade() {
    this.costumers = [];
    const upgrade = this.initialCustomers;
    this.costumers = upgrade.filter(
      (r) =>
        r.Upgrade &&
        !r.Alert &&
        !r.Service &&
        !r.Pending &&
        !r.DelayedService &&
        !r.NoWarranty &&
        !r.Orphan
    );
  }

  getService() {
    this.costumers = [];
    const service = this.initialCustomers;
    this.costumers = service.filter(
      (r) =>
        r.Service &&
        !r.Alert &&
        !r.Upgrade &&
        !r.Pending &&
        !r.DelayedService &&
        !r.NoWarranty &&
        !r.Orphan
    );
  }

  getPending() {
    this.costumers = [];
    const pending = this.initialCustomers;
    this.costumers = pending.filter(
      (r) =>
        r.Pending &&
        !r.Alert &&
        !r.Upgrade &&
        !r.Service &&
        !r.DelayedService &&
        !r.NoWarranty &&
        !r.Orphan
    );
  }

  getDelayedService() {
    this.costumers = [];
    const delayed = this.initialCustomers;
    this.costumers = delayed.filter(
      (r) =>
        r.DelayedService &&
        !r.Pending &&
        !r.Alert &&
        !r.Upgrade &&
        !r.Service &&
        !r.NoWarranty &&
        !r.Orphan
    );
  }

  getNoWarranty() {
    this.costumers = [];
    const noWarranty = this.initialCustomers;
    this.costumers = noWarranty.filter(
      (r) =>
        r.NoWarranty &&
        !r.Pending &&
        !r.Alert &&
        !r.Upgrade &&
        !r.Service &&
        !r.DelayedService &&
        !r.Orphan
    );
  }

  getOrphan() {
    this.costumers = [];
    const orphan = this.initialCustomers;
    this.costumers = orphan.filter(
      (r) =>
        r.Orphan &&
        !r.Pending &&
        !r.Alert &&
        !r.Upgrade &&
        !r.Service &&
        !r.DelayedService &&
        !r.NoWarranty
    );
  }
}

const ROUTES = [
  {
    path: '',
    component: OpportunitiesComponent,
    data: {
      title: 'Opportunities',
    },
    children: [
      {
        path: '',
        component: OpportunitiesComponent,
        data: {
          title: '',
        },
      },
    ],
  },
];
@NgModule({
  imports: [
    CommonModule,
    DxDataGridModule,
    RouterModule.forChild(ROUTES),
    DxButtonModule,
  ],
  exports: [RouterModule],
  declarations: [OpportunitiesComponent],
})
export class OpportunitiesModule {}
