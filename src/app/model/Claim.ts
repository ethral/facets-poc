import { REC_CLT0 } from './rec_clt0';
import { CDT0_COLL } from './cdt0_coll';
import { REC_CDML } from './rec_cdml';
import { CDT0_COLL_ITEM } from './cdt0_coll_item';

export interface Claim {
  REC_CLT0: REC_CLT0;
  CDT0_COLL: Array<CDT0_COLL_ITEM>;
}
