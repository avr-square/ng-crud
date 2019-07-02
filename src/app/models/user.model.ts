export class User {
  id: number;
  name: string;
  phoneNumber: string;
  address: string;
  items: Item[];
  constructor() {
    this.id = 0;
    this.name = '';
    this.phoneNumber = '';
    this.address = '';
    this.items = [];
  }
}

export class Item {
  id: number;
  image: string;
  name: string;
  constructor() {
    this.id = 0;
    this.image = '';
    this.name = '';
  }
}
