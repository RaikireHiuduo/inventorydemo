import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
      { id: 11, username: 'Mr. Nice', password: 'swordfish', email: 'montypython@gmail.com', fullname: 'Nice Man', position: 'CEO', expertise: 'IT', department: 'Redundant', group: 'FBI' },
      { id: 2, username: 'Narco', password: 'hunter2', email: 'meme@gmail.com', fullname: 'Narco Man', position: 'CFO', expertise: 'CS', department: 'Redundant', group: 'CIA' }
    ];
    return {users};
  }
}
