import { Claim } from './Claim';

export interface EstimateReq {
  ExternalRefId: string;
  Claim: Claim;
}
