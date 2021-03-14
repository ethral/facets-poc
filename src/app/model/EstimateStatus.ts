import { AppError } from './AppError';

export interface EstimateStatus {

  HttpStatusCode: number;
  StatusCode: number;
  StatusMessage: string;
  Level: number;
  Applicaton: Array<AppError>;

}
