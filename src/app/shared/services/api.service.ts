import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ApiService {

  constructor(private _httpClient: HttpClient) { }

  public getUrlEndpoint(): string {
    return environment.apiUrl;
  }

  public postAttachment(url: string, formData: FormData): Observable<any> {
    return this._httpClient.post(url, formData).pipe(catchError((error) => {
      this.writeLogError(error, 'POST ATTACHMENT');
      return error;
    }));
  }

  private writeLogError(error: any, httpType: string): void {
    let errorMessage: string;

    if (error instanceof Response) {
      errorMessage = `Erro ${error.status} ao acessar a URL ${error.url} - ${error.statusText}`;
    } else {
      errorMessage = error.toString();
    }

    console.log(`===== ERROR HANDLER - ${httpType}`);
    console.log(errorMessage);
  }
}
