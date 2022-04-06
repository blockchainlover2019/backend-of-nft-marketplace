import { nanoid } from 'nanoid';

export class Nft {
  id: string;
  idToGetImg: string;
  title: string;
  owner: string;
  price?: number;
  usdPrice?: number;
  createdAt: number;
  updatedAt: number;

  constructor() {
    this.id = nanoid();
  }
}