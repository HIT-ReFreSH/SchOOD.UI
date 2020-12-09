/*
Copyright 2020 ReFreSH

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
import {Observable, of} from 'rxjs';
import {MessageService} from './message.service';
import {HttpErrorResponse} from '@angular/common/http';

/**
 * 服务类的基类
 */
export abstract class BaseService
{
  protected constructor(public messageService: MessageService)
  {

  }

  protected handleError<T>(expression = '操作失败', result?: T): (error: HttpErrorResponse) => Observable<T>
  {
    return (error: HttpErrorResponse): Observable<T> =>
    {
      console.error(`${expression}: ${error.message}`); // log to console instead
      this.messageService.addError(`${expression}: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
    // const applicationError = error.headers.get('Application-Error');
    // if (typeof this.messageService !== 'undefined')
    // {
    //   this.messageService.addError(error);
    // }
    // // either application-error in header or model error in body
    // if (applicationError)
    // {
    //   return throwError(applicationError);
    // }
    //
    // let modelStateErrors: string | null = '';
    //
    // // for now just concatenate the error descriptions, alternative we could simply pass the entire error response upstream
    // for (const key in error.error)
    // {
    //   if (error.error.hasOwnProperty(key) && error.error[key])
    //   {
    //     modelStateErrors += error.error[key].description + '\n';
    //   }
    // }
    //
    // modelStateErrors = modelStateErrors = '' ? null : modelStateErrors;
    // return throwError(modelStateErrors || 'Server error');
  }
}
