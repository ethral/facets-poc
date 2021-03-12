import { Component } from '@angular/core';
import { EstimateService } from './estimate.service';
import { TokenService } from './token.service';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { EstimateReq } from './EstimateReq';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'facets-poc';

  estimateForm = this.fb.group({
    provID: [''],
    subID: [''],
    membFN: [''],
    membLN: [''],
    dob: [''],
    claimLine: this.fb.group({
      proccd: [''],
      serviceID: [''],
      pos: [''],
      diagcd: [''],
      clmfrmdt: [''],
      clmtodt: [''],
      clmamt: [''],
      units: ['']
    }),
  });


  x = "";
  showSpinner= 0;



  constructor(private estSvc: EstimateService, private tokenSvc: TokenService, private fb: FormBuilder) {}

  // authenticateEvent() {
  //   this.tokenSer.getToken().subscribe(response => {
  //     console.log(response.Data.access_token);
  //   });
  // }


  getClaimEstimate() {
    let token = "";
     this.showSpinner = 1;
    console.log(this.estimateForm.get('claimLine').get('proccd').value);

    let estReq: EstimateReq = {
      "ExternalRefId" : "EST000001234",
          
           
         "Claim": {
             "REC_CLT0": {
                 "REC_CLCL": {
                     "CLCL_ID": "RESCLAIM100",
                     "MEME_CK": 200974854,
                     "PRPR_ID": this.estimateForm.get('provID').value,
                     "CLCL_CL_TYPE": "M",
                     "CLCL_CL_SUB_TYPE": "M",
                     "CLCL_PRE_PRICE_IND": "",
                     "CLCL_RECD_DT": "2020-01-05",
                     "CLCL_TOT_CHG": 205
                 },
                 "CLMD_COLL": [
                     {
                         "CLMD_TYPE": "01",
                         "IDCD_ID": "12111",
                         "IDCD_ID_SUB": "12111"
                     }
                 ]},
             "CDT0_COLL": [
                 {
                     "REC_CDML": {
                         "IPCD_ID": this.estimateForm.get('claimLine').get('proccd').value,
                         "SESE_ID": this.estimateForm.get('claimLine').get('serviceID').value,
                         "PSCD_ID": this.estimateForm.get('claimLine').get('pos').value,
                         "IDCD_ID": this.estimateForm.get('claimLine').get('diagcd').value,
                         "IDCD_ID_SUB": "12111",
                         "CDML_FROM_DT": this.estimateForm.get('claimLine').get('clmfrmdt').value,
                         "CDML_TO_DT": this.estimateForm.get('claimLine').get('clmtodt').value,
                         "CDML_CHG_AMT": this.estimateForm.get('claimLine').get('clmamt').value,
                         "CDML_UNITS": this.estimateForm.get('claimLine').get('units').value
                     }}
             ]     
          
     }
     }

    this.tokenSvc.getToken().subscribe(response => {
         token = response.Data.access_token;
         this.estSvc.getEstimate(token,estReq).subscribe(response => {
           this.showSpinner=0;
           this.x = response.Status.StatusMessage;
          console.log(JSON.stringify(response));
          
        });
       });
  }

 


 
}
