import { UserAccount } from './user-account.model';
import { ContactInfo } from './contact-info.model';
import { Address } from './address.model';
import { Interest } from './interest.model';

export interface ConsolidatedUserInfo {
  user: UserAccount;
  address: Address;
  contactInfo: ContactInfo;
  interests: Interest[];
}
