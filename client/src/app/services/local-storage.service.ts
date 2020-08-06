import { Injectable } from '@angular/core';
import * as CryptoTs from 'crypto-ts';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  getItem(key: string) {
    if (!key || !localStorage.getItem(key)) {
      return;
    }
    return CryptoTs.AES.decrypt(localStorage.getItem(key), 'web4ua').toString(CryptoTs.enc.Utf8);
  }

  setItem(key: string, value: string) {
    if (!key || !value) {
      return;
    }
    localStorage.setItem(key, CryptoTs.AES.encrypt(value, 'web4ua').toString());
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
