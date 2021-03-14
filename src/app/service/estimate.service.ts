import {Injectable} from '@angular/core';
import {TokenService} from './token.service';
import {EstimateRes} from '../model/EstimateRes';
import {HttpHeaders, HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';
import {Constants} from '../util/constants';
import {EstimateReq} from '../model/EstimateReq';

@Injectable({
  providedIn: 'root'
})
export class EstimateService {

  constructor(private tokenSvc: TokenService,
              private http: HttpClient) {
  }

  public getEstimate(estimateRequest: EstimateReq): Observable<EstimateRes> {
    const headers = new HttpHeaders({Authorization: 'Bearer ' + this.tokenSvc.getToken()});
    const options = {headers};
    return this.http.post<EstimateRes>(environment.DOMAIN + Constants.ESTIMATE_ENDPOINT, estimateRequest, options);
  }
}
