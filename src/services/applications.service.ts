import { Application } from '../model/application';

export class ApplicationsService {
  public getAllApplications(): Application[] {
    // TODO actual retrieval of applications
    return [
      {
        id: 1,
        credentials: {
          creationDate: new Date(),
          lastModified: new Date(),
          salt: '',
          hash: ''
        },
        name: 'nom1',
        url: 'url1'
      },
      {
        id: 2,
        credentials: { creationDate: new Date(), salt: '', hash: '' },
        name: 'nom2',
        url: 'url2'
      },
      {
        id: 3,
        credentials: { creationDate: new Date(), salt: '', hash: '' },
        name: 'nom3',
        url: 'url3'
      }
    ];
  }
}
