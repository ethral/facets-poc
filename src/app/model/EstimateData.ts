import { Claim } from './Claim';
import { ClaimStatus } from './ClaimStatus';
import { ClaimRes } from './ClaimRes';

export interface EstimateData {

  ClaimStatus: ClaimStatus;
  Claim: ClaimRes;

}
