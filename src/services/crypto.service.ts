import { Injectable } from '@angular/core';
import { Credentials } from '../model/credentials';

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

  public decypher(credentials: Credentials): string {
    // TODO
    return 'P@55wOr!)';
  }
}
