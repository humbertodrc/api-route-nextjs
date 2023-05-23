export interface User {
  id: number;
  email: string;
  password: string;
}

export const USERS: User[] = [
  {
    id: 1,
    email: 'pedro@digital.com',
    password: '123456',
  },
  {
    id: 2,
    email: 'juan@digital.com',
    password: '123456',
  },
  {
    id: 3,
    email: 'lucas@digital.com',
    password: '123456',
  },
  {
    id: 4,
    email: 'daniel@digital.com',
    password: '123456',
  }
]