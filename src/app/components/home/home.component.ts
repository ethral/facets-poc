import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AppService} from '../../service/app.service';
import {EstimateService} from '../../service/estimate.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  members = new Array<any>(1);
  claimLine: FormArray;
  estimateForm = this.fb.group({
    provID: ['', Validators.required],
    subID: ['', Validators.required],
    membFN: ['', Validators.required],
    membLN: ['', Validators.required],
    dob: ['', Validators.required],
    claimLine: this.fb.array([this.createClaimLine()])
  });

  constructor(private fb: FormBuilder,
              private appService: AppService,
              private estimateService: EstimateService) {
  }

  ngOnInit(): void {
  }

  createClaimLine(): FormGroup {
    return this.fb.group({
      proccd: ['', Validators.required],
      serviceID: ['', Validators.required],
      pos: ['', Validators.required],
      diagcd: ['', Validators.required],
      clmfrmdt: ['', Validators.required],
      clmtodt: ['', Validators.required],
      clmamt: ['', Validators.required],
      units: ['', Validators.required],
    });
  }

  addClaimLine(): void {
    this.claimLine = this.estimateForm.get('claimLine') as FormArray;
    this.claimLine.push(this.createClaimLine());
  }

  calcEstimate(): void {
    this.appService.enableSpinner();
    this.estimateService.getEstimate(this.estimateForm.value).subscribe(response => {
      this.appService.disableSpinner();
    }, error => {
      this.appService.disableSpinner();
    });
  }
}
