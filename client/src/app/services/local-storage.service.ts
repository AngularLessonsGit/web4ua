import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  getItem(key: string) {
    if (!key) {
      return;
    }
    return localStorage.getItem(key);
  }

  setItem(key: string, value: string) {
    if (!key || !value) {
      return;
    }
    localStorage.setItem(key, value);
  }

  removeItem(key: string) {
    if (!key) {
      return;
    }
    localStorage.removeItem(key);
  }

  clear() {
    localStorage.clear();
  }
}
