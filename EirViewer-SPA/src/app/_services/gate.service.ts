import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gate } from '../_models/gate';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PictureInfo } from '../_models/pictureInfo';

@Injectable({
  providedIn: 'root'
})

export class GateService {

  baseUrl = 'http://localhost:5000/api/gate/';

  gateUnitResults: Gate[];
  gateEirResult: Gate[];
  pictureInfo: PictureInfo;

  gateParams: any = {};

  constructor(private http: HttpClient) { }

  getGateByUnit(userParams): Observable<Gate[]> {

    let params = new HttpParams();

    params = params.append('unitid', userParams.unitid);

    return this.http.get<Gate[]>(this.baseUrl + 'getbyunitid', { observe: 'response', params})
      .pipe(map(response => {

        console.log('response body: ' + response.body);

        this.gateUnitResults = response.body;
        return this.gateUnitResults;
      })
    );

  }

  getGateByEir(userParams): Observable<Gate[]> {

    let params = new HttpParams();

    params = params.append('eir', userParams.eir);

    // return this.http.get<Gate[]>(this.baseUrl + 'getbyeir', { observe: 'response', params})
    //  .pipe(map(response => {

    //    console.log('response body: ' + response.body);

    //    this.gatesByEir = response.body;
    //    return this.gatesByEir;
    //  })
    // );

    return this.http.get<Gate[]>(this.baseUrl + 'getbyeir', { observe: 'response', params}).pipe(
        map((response: any) => {

        const eirInfo = response.body;

        if (eirInfo) {

          console.log('eirInfo.pictureInfo: ' + eirInfo.pictureInfo);
          console.log('eirInfo.response: ' + eirInfo.response);

          this.pictureInfo = eirInfo.pictureInfo;
          this.gateEirResult = eirInfo.response;

          return this.gateEirResult;

          // console.log('response body: ' + response.body);

          // this.gatesByEir = response.body;
          // return this.gatesByEir;

        }

      })
    );


  }

  getGateUnitResults(): Gate[] {
    return this.gateUnitResults;
  }

  getGateEirResult(): Gate[] {
    return this.gateEirResult;
  }

  getPicutreInfo(): PictureInfo {
    return this.pictureInfo;
  }

  setEirParam(eir: string) {
    this.gateParams.eir = eir;
    localStorage.setItem('eir', eir);
  }

  getEirParam(): any {
    this.gateParams.eir = localStorage.getItem('eir');
    console.log('param: ' + this.gateParams.eir);
    return this.gateParams;
  }

  getSearchEir(): string {
    return localStorage.getItem('eir');
  }

  setUnitParam(unitid: string) {
    this.gateParams.unitid = unitid;
    localStorage.setItem('unitid', unitid);
  }

  getUnitParam(): any {
    this.gateParams.unitid = localStorage.getItem('unitid');
    console.log('param: ' + this.gateParams.unitid);
    return this.gateParams;
  }

  getSearchUnit(): string {
    return localStorage.getItem('unitid');
  }

}
