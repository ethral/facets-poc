
import { REC_CLCL_RES } from './rec_clcl_res';
import { CLST_COLL_ITEM } from './clst_coll_item';
import { CLMD_COLL_RES } from './clmd_coll_res';


// tslint:disable-next-line:class-name
export interface REC_CLT0_RES {
  REC_CLCL: REC_CLCL_RES;
  CLST_COLL: Array<CLST_COLL_ITEM>;
  CLMD_COLL: CLMD_COLL_RES;
}
