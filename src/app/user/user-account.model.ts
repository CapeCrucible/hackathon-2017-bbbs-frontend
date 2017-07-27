import { UserType } from './user-type.enum';
export interface UserAccount {
  id?: number;
  userName: string;
  password?: string;
  firstName: string;
  lastName: string;
  age: number;
  userTypeId: UserType;
  pictureUrl: string;
}
