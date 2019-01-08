import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [UserProfileComponent],
  imports: [
    CommonModule,
    NgbModule,
  ],
  exports: [UserProfileComponent]
})
export class UserProfileModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: UserProfileModule,
      providers: [
        UserProfileComponent
      ]
    };
  }
}

