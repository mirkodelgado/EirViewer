import { AlertifyService } from './../_services/alertify.service';
import { GateService } from './../_services/gate.service';
import { Injectable } from '@angular/core';
import { Gate } from '../_models/gate';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class EirresultsResolver implements Resolve<Gate[]> {

    constructor(private gateService: GateService, private router: Router, private alertify: AlertifyService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<Gate[]> {
        return this.gateService.getGateByEir(this.gateService.getEirParam()).pipe (
            catchError(error => {
                // this.alertify.error('Problem retrieving eir data');
                this.alertify.error('Unable to find EIR ' + this.gateService.getSearchEir());
                this.router.navigate(['/home']);
                return of(null);
            })
        );
    }
}
