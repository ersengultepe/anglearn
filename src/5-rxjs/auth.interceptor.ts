import {HttpEvent, HttpInterceptorFn, HttpResponse} from '@angular/common/http';
import {catchError, tap} from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (request, next) => {

  /**
   * app.config.ts
   * provideHttpClient(
   *       withInterceptors([authInterceptor]),
   *     ),
   */


  const token = localStorage.getItem('token')

  if(token){
    // İstek üzerinde değişiklik yapma (örneğin, header ekleme)
    const authReq = request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },

    });
  }

  // Değiştirilmiş isteği bir sonraki interceptor'a veya backend'e gönderme
  return next(request).pipe(
    tap((event: HttpEvent<any>)=>{
      if(event instanceof HttpResponse){
        //Burada başarılı bir yanıt alındığında yapılması gereken işlemler yapılabilir
      }
    }),
    catchError((error: HttpResponse<any>) => {
      if(error.status === 401){
        //login sayfasına yönlendir.
        //this.route.navigayteByUrl('/auth/login') gibi
      }
      return []
    })
  )

};
