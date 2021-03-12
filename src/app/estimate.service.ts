import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { EstimateRes } from './EstimateRes';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Constants } from './util/constants';
import { EstimateReq } from './EstimateReq';

@Injectable({
  providedIn: 'root'
})
export class EstimateService {

  constructor(private tokenSvc: TokenService, private http: HttpClient) { }


  public getEstimate(token: string, estimateRequest: EstimateReq): Observable<EstimateRes> {


   // let token = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjlDOUM0NzkzRjREQzgxOUMxMUZFOUM0RjM1NEUzRTdCQTkxMzQ4RkNSUzI1NiIsInR5cCI6ImF0K2p3dCIsIng1dCI6Im5KeEhrX1RjZ1p3Ul9weFBOVTQtZTZrVFNQdyJ9.eyJuYmYiOjE2MTUzOTE2MjMsImV4cCI6MTYxNTM5NTIyMywiaXNzIjoiaHR0cHM6Ly9GYWNldHNJZGVudGl0eS9lbWJlZGRlZCIsImF1ZCI6WyJmYWNldHNyZXN0YXBpIiwiaHR0cHM6Ly9GYWNldHNJZGVudGl0eS9lbWJlZGRlZC9yZXNvdXJjZXMiXSwiY2xpZW50X2lkIjoiZmFjZXRqd3QiLCJzdWIiOiJGQUNNT0QwM3xGQXxSVENGWElVU0VSfFJUQ0ZYSVVTRVIiLCJhdXRoX3RpbWUiOjE2MTUzOTE2MjMsImlkcCI6ImZhY2V0cyIsImZhY2V0cy1yZWxlYXNlIjoiNTgwIiwiZmFjZXRzLWlkZW50aXR5LW1hY2hpbmUiOiJTVi1UUlpXRUItRDA5IiwiZmFjZXRzLXJlZ2lvbiI6IkZBQ01PRDAzIiwiZmFjZXRzLWRlYnVnIjoiTiIsImZhY2V0cy1wcm9kdWN0IjoiRkEiLCJmYWNldHMtYWN0aXZpdHktaWQiOiI5M0VGNkJCMy0xNTFDLTQ5NDktQUVERi00NkQ4QkY0RUQ0NUYiLCJmYWNldHMtdXNlcm5hbWUiOiJSVENGWElVU0VSIiwiZmFjZXRzLXVzdXNpZCI6IlJUQ0ZYSVVTRVIiLCJmYWNldHMtc2VjdXJpdHkiOiJGIiwiZmFjZXRzLWlkZW50aXR5IjoiU1ZDQUdFTlQiLCJmYWNldHMtY2FsbGluZyI6IkZBQ0VUU19SRVNUIiwianRpIjoiMTM0REQxOTMyM0YwNUNFMUQ0REFEQzBDMjZCNDkzMTUiLCJpYXQiOjE2MTUzOTE2MjMsInNjb3BlIjpbImZhY2V0c3Jlc3RhcGkiLCJvcGVuaWQiLCJvZmZsaW5lX2FjY2VzcyJdLCJhbXIiOlsicHdkIl19.qYW6Gav6Bk-NrIndHJcQq7OvXExhImx8iKgABOEM-EgtBV6RlVQGlsZNriTAovZSUUf2-hYrGrZUHSY1QILn2d9oG1xuYLWjSoZYZCTPeu3fre35wnWgGFYRph9fFL1eL9fKQlU2UyCT4x1n60iujlrP5OxruqUDyehK1NmIyWGHA6R2nxp4qejXTGyupBpsI4oBNpfAktMPexxf15smKGTVcuAoiktCQAbqKzU0FOKhgaSEGsrwnWyLm0gYRO-saYLL888gDRrHus9bgcjoBYsTBbYuooo2MUWiOxYNjBXj1SZIDMwC12U1zfFwBqxMYcQyfNL7XQ5aDcEPqEFrxA";

   

    let headers = new HttpHeaders({'Authorization': 'Bearer ' + token});

    console.log(headers);

    let options = {headers: headers};

   
    return this.http.post<EstimateRes>(environment.DOMAIN + Constants.ESTIMATE_ENDPOINT,estimateRequest,options  );
  }


}
