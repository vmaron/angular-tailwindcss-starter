import {Injectable} from '@angular/core';

const APP_PREFIX = 'ANGULAR_TW_STARTER_';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  constructor() {
  }

  setItem(key: string, value: any) {
    localStorage.setItem(`${APP_PREFIX}${key}`, JSON.stringify(value));
  }

  getItem(key: string) {
    return JSON.parse(localStorage.getItem(`${APP_PREFIX}${key}`));
  }

  removeItem(key: string) {
    localStorage.removeItem(`${APP_PREFIX}${key}`);
  }

  getVersion(): number {
    const storageValue = this.getItem('SETTINGS');
    return storageValue?.localStorageVersion ? Number(storageValue.localStorageVersion) : 0;
  }
}
