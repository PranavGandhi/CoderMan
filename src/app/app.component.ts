import { Component } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { authCodeFlowConfig } from './sso.config';
import { JwksValidationHandler } from 'angular-oauth2-oidc-jwks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-online-ide-api';
  isLogin=false;
  userName=''

  constructor(private oauthService: OAuthService) {
    this.configureSingleSignOn();
  }

  configureSingleSignOn() {
    this.oauthService.configure(authCodeFlowConfig);
    //this.oauthService.tokenValidationHandler=new JwksValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndTryLogin();

  }

  token() {
    let claims: any = this.oauthService.getIdentityClaims();
    console.log(claims.name);
    if(claims){this.isLogin=true}
    else{this.isLogin=false}

    return claims ? claims : null;
  }

  get getToken(){
    let claims: any = this.oauthService.getIdentityClaims();
    return claims ? claims : null;
  }

  login() {
    this.oauthService.setupAutomaticSilentRefresh();
    this.oauthService.initCodeFlow();
    
  }

  logout() {
    this.oauthService.revokeTokenAndLogout();
    
  }

}
