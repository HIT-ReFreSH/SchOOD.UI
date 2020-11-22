/**
 * MIT License
 *
 * Copyright (c) 2019 Mark Macneil
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
import {throwError, Observable} from 'rxjs';

/**
 * 服务类的基类
 */
export abstract class BaseService
{
  protected constructor()
  {
  }

  protected handleError(error: any): Observable<never>
  {

    const applicationError = error.headers.get('Application-Error');

    // either application-error in header or model error in body
    if (applicationError)
    {
      return throwError(applicationError);
    }

    let modelStateErrors: string | null = '';

    // for now just concatenate the error descriptions, alternative we could simply pass the entire error response upstream
    for (const key in error.error)
    {
      if (error.error.hasOwnProperty(key) && error.error[key])
      {
        modelStateErrors += error.error[key].description + '\n';
      }
    }

    modelStateErrors = modelStateErrors = '' ? null : modelStateErrors;
    return throwError(modelStateErrors || 'Server error');
  }
}
