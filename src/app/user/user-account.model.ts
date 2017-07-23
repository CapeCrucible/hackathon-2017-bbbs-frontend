import { UserType } from './user-type.enum';
export interface UserAccount {
  id?: number;
  username: string;
  password?: string;
  firstName: string;
  lastName: string;
  userTypeId: UserType;
}
