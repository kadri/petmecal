import {Directive, Attribute, ElementRef, DynamicComponentLoader} from 'angular2/core';
import {Router, RouterOutlet, ComponentInstruction} from 'angular2/router';
import {MyUserSignIn} from '../user/my.user.signin';
import { tokenNotExpired } from 'angular2-jwt';

@Directive({
  selector: 'router-outlet'
})
export class LoggedInRouterOutlet extends RouterOutlet {
  publicRoutes: any;
  private parentRouter: Router;

  constructor(_elementRef: ElementRef, _loader: DynamicComponentLoader,
    _parentRouter: Router, @Attribute('name') nameAttr: string) {
    super(_elementRef, _loader, _parentRouter, nameAttr);

    this.parentRouter = _parentRouter;
    this.publicRoutes = {
      'signin': true,
      'signup': true
    };
  }

  activate(instruction: ComponentInstruction) {
    var url = instruction.urlPath;
    console.log(url);
    if (!this.publicRoutes[url] && !localStorage.getItem('jwt')){
      console.log('The token has expired!')
      localStorage.removeItem('jwt');
      this.parentRouter.navigateByUrl('/signin');
    }
    return super.activate(instruction);
  }
}
