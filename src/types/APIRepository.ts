export interface APIRepository {
  id: number;
  name: string;
  description: string;
  owner: {
    id: number;
  };
}
