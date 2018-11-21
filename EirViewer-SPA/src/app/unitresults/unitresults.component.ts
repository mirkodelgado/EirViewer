import { Component, OnInit } from '@angular/core';
import { Gate } from '../_models/gate';
import { GateService } from '../_services/gate.service';
import { AlertifyService } from '../_services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-unitresults',
  templateUrl: './unitresults.component.html',
  styleUrls: ['./unitresults.component.css']
})
export class UnitresultsComponent implements OnInit {

  gateUnitResults: Gate[];
  gateEirResult: Gate[];

  userParams: any = {};

  constructor(private gateService: GateService, private alertifyService: AlertifyService, private router: Router) { }

  ngOnInit() {

    this.gateUnitResults = this.gateService.getGateUnitResults();
  }

  getGateEir(eir) {

    console.log('Unit Results: ' + eir);

    this.gateService.setUserParams(eir);

    this.router.navigate(['app-eirresults']);

    // this.userParams.eir = eir;

    // this.gateService.getGateByEir(this.userParams).subscribe((gateByEir: Gate[]) => {

    //  this.gateEirResult = gateByEir;

    //  if (this.gateEirResult.length < 1) {
    //    this.alertifyService.error('EIR ' + eir + ' could not be found');
    //  } else {
    //    this.router.navigate(['app-eirresults']);
    //  }

    // },
    // error => {
    //  this.alertifyService.error(error);
    // });




  }
}
