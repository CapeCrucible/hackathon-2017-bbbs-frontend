import { UserAccount } from '../user/user-account.model';
import { ContactInfo } from '../user/contact-info.model';
import { Address } from '../user/address.model';
import { Interest } from '../user/interest.model';

export interface RegisterAccountRequest {
  user: UserAccount;
  address: Address;
  contactInfo: ContactInfo;
  interests: Interest[];
}
