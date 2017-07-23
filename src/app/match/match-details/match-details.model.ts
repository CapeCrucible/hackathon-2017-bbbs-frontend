import { ConsolidatedUserInfo } from '../../user/consolidated-user-info.model';
import { Interest } from '../../user/interest.model';
import { UserAccount } from '../../user/user-account.model';

export interface MatchDetails {
  matchId: number;
  big: ConsolidatedUserInfo;
  little: ConsolidatedUserInfo;
  parent: ConsolidatedUserInfo;
  sharedInterests: Interest[];
}

export interface ShallowMatchDetails {
  matchId: number;
  big: UserAccount;
  little: UserAccount;
  parent: UserAccount;
}
