import { Application } from '../model/application';

export class ApplicationsService {
  public getAllApplications(): Application[] {
    // TODO actual retrieval of applications
    return [
      {
        credentials: {
          creationDate: new Date(),
          lastModified: new Date(),
          salt: '',
          hash: ''
        },
        name: 'nom',
        url: 'url'
      },
      {
        credentials: { creationDate: new Date(), salt: '', hash: '' },
        name: 'nom',
        url: 'url'
      },
      {
        credentials: { creationDate: new Date(), salt: '', hash: '' },
        name: 'nom',
        url: 'url'
      }
    ];
  }
}
