import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { AlertifyService } from './../_services/alertify.service';
import { GateService } from '../_services/gate.service';
import { Gate } from '../_models/gate';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  model: any = {};

  gateUnits: Gate[];

  userParams: any = {};

  constructor(private gateService: GateService, private alertifyService: AlertifyService, private router: Router) { }

  ngOnInit() {
  }

  findGate(form: NgForm) {

    const value = form.value;

    console.log('eir/unit: ' + value.eir_unit);

    const eir_unit = RegExp('^[0-9]*$');

    // if its all numbers....its an EIR

    if (eir_unit.test(value.eir_unit) === true)  {

      console.log('got eir');

      this.gateService.setUserParams(value.eir_unit);

      this.router.navigate(['app-eirresults']);


      // this.gateService.getGateByEir(this.userParams).subscribe((gateUnits: Gate[]) => {

      //  this.gateUnits = gateUnits;

      //  if (this.gateUnits.length < 1) {
      //    this.alertifyService.error('EIR ' + value.eir_unit + ' could not be found');
      //  } else {
      //    this.router.navigate(['app-eirresults']);
      //  }

      // },
      // error => {
      //  this.alertifyService.error(error);
      // });

    } else {

      console.log('got unit');

      this.userParams.unitId = value.eir_unit;

      this.gateService.getGateByUnit(this.userParams).subscribe((gateUnits: Gate[]) => {

        this.gateUnits = gateUnits;

        if (this.gateUnits.length < 1) {
          console.log('error1');
          this.alertifyService.error('Unit ' + value.eir_unit + ' could not be found');
        } else {
          this.router.navigate(['app-unitresults']);
        }

      },
      error => {
        console.log('error2:' + error);
        this.alertifyService.error(error);
      });

    }

    // console.log ('home client: ' + this.gateUnits[0].igClientId + ', home unit: ' + this.gateUnits[0].igUnitId);
}


}
