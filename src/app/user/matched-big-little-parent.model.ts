import { ConsolidatedUserInfo } from './consolidated-user-info.model';

export interface MatchedBigLittleParentModel {
  matchId?: number;
  big: ConsolidatedUserInfo;
  little: ConsolidatedUserInfo;
  parent: ConsolidatedUserInfo;
}
