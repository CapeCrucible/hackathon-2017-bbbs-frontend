import { UserType } from './user-type.enum';
export interface UserAccount {
  id?: number;
  userName: string;
  password?: string;
  firstName: string;
  lastName: string;
  userTypeId: UserType;
}
