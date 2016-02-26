///<reference path="../node_modules/angular2/typings/browser.d.ts"/>
import {bootstrap}    from 'angular2/platform/browser'
import {AppComponent} from './app.component'
import {ROUTER_PROVIDERS, APP_BASE_HREF} from 'angular2/router'
import { Http, HTTP_PROVIDERS } from 'angular2/http';
import { provide } from 'angular2/core'
import { AuthConfig, AuthHttp } from 'angular2-jwt';

bootstrap(AppComponent,
	[
		ROUTER_PROVIDERS,
		HTTP_PROVIDERS,
		provide(APP_BASE_HREF, { useValue: '/' }),
		provide(AuthHttp, {
		 useFactory: (http) => {
			 return new AuthHttp(new AuthConfig({
				 tokenName: 'jwt'
			 }), http);
		 },
		 deps: [Http]
	 })
	]);
