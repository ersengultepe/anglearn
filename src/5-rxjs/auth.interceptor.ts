import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable, tap} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // İstek üzerinde değişiklik yapma (örneğin, header ekleme)
    const authReq = req.clone({
      setHeaders: { Authorization: 'Bearer my-token' },
    });

    // Değiştirilmiş isteği bir sonraki interceptor'a veya backend'e gönderme
    return next.handle(authReq).pipe(
      tap((event: HttpEvent<any>)=>{
        if(event instanceof HttpResponse){
          //Burada başarılı bir yanıt alındığında yapılması gereken işlemler yapılabilir
        }
      }).catchError((error: HttpResponse<any>) => {
        if(error.status === 401){
          
        }
      })
    )
  }
}


