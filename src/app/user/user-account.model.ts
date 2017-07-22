import { UserType } from './user-type.enum';
export interface UserAccount {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  userType: UserType;
}
