import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

export interface Device {
  id: string;
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class DevicesService {
  http = inject(HttpClient);

  async getDevices() {
    return await firstValueFrom(
      this.http.get<Device[]>('/api/subscriptions', { headers: this.getHeader() })
    );
  }

  // rename  device
  async renameDevice(deviceId: string, name: string) {
    return await firstValueFrom(this.http.post(
      `/api/device/${deviceId}`,
      { name: name },
      { headers: this.getHeader() }
    ));
  }

  // remove device
  async unSubscribe(deviceId: string) {
    return await firstValueFrom(this.http.post(
      `/api/device/${deviceId}`,
      { deviceId },
      { headers: this.getHeader() }
    ));
  }

  private getHeader() {
    return new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    });
  }
}
