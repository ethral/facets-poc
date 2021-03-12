import { Claim } from './claim';

export interface EstimateReq {
  ExternalRefId: string;
  Claim: Claim;
}
