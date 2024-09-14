import { Component, inject } from '@angular/core';
import { DevicesService } from '../core/devices.service';
import { CardDetails, DeviceCardComponent } from "../shared/device-card/device-card.component";
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [DeviceCardComponent, AsyncPipe],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  deviceService = inject(DevicesService);
  devices = this.deviceService.getDevices();

  onNameChange(cardDetails: CardDetails){
    console.log(cardDetails);
    this.deviceService.renameDevice(cardDetails.id, cardDetails.name)
  }
}
