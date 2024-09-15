import { Component, inject } from '@angular/core';
import { DevicesService } from '../core/devices.service';
import {
  CardDetails,
  DeviceCardComponent,
} from '../shared/device-card/device-card.component';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [DeviceCardComponent, AsyncPipe, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  deviceService = inject(DevicesService);
  devices = this.deviceService.getDevices();

  renameDevice(id: string, name: string) {
    this.deviceService.renameDevice(id, name);
  }

  removeDevice(id: string) {
    this.deviceService.renameDevice(id, "");
  }

  trackById(index: number, item: any) {
    return item.id;
  }

}
