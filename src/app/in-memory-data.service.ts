export class InMemoryDataService {
  createDb() {
    const users = [
      { id: 195, name: 'Theo', code: 'theo' },
      { id: 4347, name: 'Philip', code: 'philip' },
      { id: 1623, name: 'Mathias', code: 'mathias' },
    ];
    return { users };
  }
}