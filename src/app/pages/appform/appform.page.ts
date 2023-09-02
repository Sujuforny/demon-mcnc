import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appform',
  templateUrl: './appform.page.html',
  styleUrls: ['./appform.page.scss'],
})
export class AppformPage implements OnInit {

  myForm : FormGroup;
  constructor(private formBuilder :FormBuilder, private router : Router) {

    this.myForm = this.formBuilder.group({
      idCard: ['', Validators.required],
      nationality: ['', Validators.required],
      age: ['', Validators.required],
      borrowerType: ['', Validators.required],
      collateral: ['', [Validators.required]],
      jobExperience: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      monthlyIncome: ['', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]],
      monthlyExpense: ['', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]],
      applicationAmount: ['', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]],
      currency: ['', [Validators.required]],
      loanTerm: ['', [Validators.required, Validators.pattern(/^\d+$/)]],  
      collateralValue: ['', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]],
      ltv: ['', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]],
      debtToIncomeRatio: ['', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]],
      rcr: ['', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]],
      kScore: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      disbursedLoans24Months: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      latePaymentsLast3Months: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      punctualPaymentsLast12Months: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      internalWriteOffLast12Months: ['', [Validators.required, Validators.pattern(/^\d+$/)]],

      totalExternalActiveLoansLast12Months: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      cbcEnquiriesLast6Months: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      loansWithPastDue: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      writeOffLoans: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      internalLoansWithDayPastDue60Days: [
        '',
        [Validators.required, Validators.pattern(/^\d+$/)],
      ],
      totalCountOfLenders: [
        '',
        [Validators.required, Validators.pattern(/^\d+$/)],
      ],
      collateralOwnership: [
        '', // Initial value
        [Validators.required], // Validation rule for required field
      ],
      hasActiveRestructuredLoan: [
        '', // Initial value
        [Validators.required], // Validation rule for required field
      ],
      // Add more form controls and validation rules for other fields
    });
   }

  ngOnInit() {
  }
  submitForm() {
    if (this.myForm.valid) {
      // Form is valid, you can perform the submission action here.
      this.router.navigateByUrl("/res");
      console.log("hello oo")
    } else {
      // Form is invalid, display error messages to the user.
    }
  }
}
