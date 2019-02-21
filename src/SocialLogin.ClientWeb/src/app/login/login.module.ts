import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatCheckboxModule, MatInputModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { AuthenticationService } from '../shared/services/authentication.service';
import { Config } from '../shared/services/config.service';
import { MaterialComponentsModule } from '../layout/material-components/material-components.module';
import { SnackBarComponent } from '../layout/material-components/snack-bar/snack-bar.component';
import { MessageService, CryptographyService } from '../shared/services';

import { AuthService, AuthServiceConfig, SocialLoginModule } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider, LinkedInLoginProvider } from "angularx-social-login";

let config = new AuthServiceConfig([
    {
      id: GoogleLoginProvider.PROVIDER_ID,
      provider: new GoogleLoginProvider("624796833023-clhjgupm0pu6vgga7k5i5bsfp6qp6egh.apps.googleusercontent.com")
    },
    {
      id: FacebookLoginProvider.PROVIDER_ID,
      provider: new FacebookLoginProvider("561602290896109")
    },
    {
      id: LinkedInLoginProvider.PROVIDER_ID,
      provider: new LinkedInLoginProvider("78iqy5cu2e1fgr", false, 'en_US')
    }
  ]);
  
  export function provideConfig() {
    return config;
  }

@NgModule({
    imports: [
        CommonModule,
        LoginRoutingModule,
        MatInputModule,
        MatCheckboxModule,
        MatButtonModule,
        FlexLayoutModule.withConfig({addFlexToParent: false}),
        FormsModule,
        ReactiveFormsModule,
        MatProgressSpinnerModule,
        MaterialComponentsModule,
        SocialLoginModule
    ],
    declarations: [LoginComponent],
    providers: [AuthenticationService, Config, MessageService, SnackBarComponent, CryptographyService,
        {
            provide: AuthServiceConfig,
            useFactory: provideConfig
        }
    ]
})
export class LoginModule {}
