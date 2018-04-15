import { Injectable } from '@angular/core';

@Injectable()
export class CryptoService {
  private masterPassword: string;

  constructor() {}

  public checkPassword(passwordToCheck: string): boolean {
    // TODO actual check
    return true;
  }

  public setCurrentMasterPassword(password: string): void {
    this.masterPassword = password;
  }
}
