import { Injectable, NgModule } from '@angular/core';
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
} from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';

import { UuidService } from './uuid-service';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

    constructor(private uuidService: UuidService) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const dupReq = req.clone({
            headers: req.headers.set('x-parse-application-id', this.uuidService.uuidv4()),
        });
        return next.handle(dupReq);
    }

}

@NgModule({
    providers: [
        UuidService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpInterceptorService,
            multi: true,
        },
    ],
})

export class HttpInterceptorModule { }
