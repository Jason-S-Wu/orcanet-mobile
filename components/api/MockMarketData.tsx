type User = {
  id: string;
  name: string;
  ip: string;
  port: number;
  price: number; // per MB
};

type File = {
  fileHash: string;
  name: string;
  size: number; //in MB
};

export const marketData = [
  {
    id: 1,
    name: 'Movie 1',
    cost: 10,
    hash: 'QmXp4FGDzFbPzcypwA6rLf1LuA2jT2Z3MgJYVJuY8rhJFm',
  },
  {
    id: 2,
    name: 'Movie 2',
    cost: 15,
    hash: 'QmV5T6Nw8SCFKe3t7H8KZuTyuX5DmLZ39uMMu5oBDHZFfv',
  },
  {
    id: 3,
    name: 'Show 1',
    cost: 8,
    hash: 'QmUx6Qe3c56JpV93HZqo51FUsXbt7YvLpcRUPFDK5ewFLd',
  },
];
