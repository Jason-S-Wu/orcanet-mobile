export type User = {
  id: string;
  name: string;
  ip: string;
  port: number;
  price: number; // per MB
};

export type MarketFile = {
  fileHash: string;
  name: string;
  size: number; //in MB
};
