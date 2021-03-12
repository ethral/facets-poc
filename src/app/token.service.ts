import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import { Injectable } from '@angular/core';
import { TokenRes } from './TokenRes';
import { environment } from 'src/environments/environment';
import { Constants } from './util/constants';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private http: HttpClient) { }

  public getToken(): Observable<TokenRes> {

    let headers = new HttpHeaders({'Authorization': 'Basic ' + btoa('RTCFXIUSER' + ':' + 'facetsmultiplan1')});

    let options = {headers: headers};

   
    return this.http.post<TokenRes>(environment.DOMAIN + Constants.AUTHENTICATE_ENDPOINT,{
      "region": "FACMOD03",
      "securityDoms": "RSBL",
      "facetsIdentity": "SVCAGENT",
      "signOnMethod": "F"
     },options  );
  }

  
}
