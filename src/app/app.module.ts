import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, appComponents } from './app.routing';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ListingComponent } from './components/listing/listing.component';
import { ActionComponent } from './components/action/action.component';
import { NgbPopoverModule, NgbTooltipModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { EditItemComponent } from './components/items/edit/edit-item.component';
import { FormsModule } from '@angular/forms';
import { EditUserComponent } from './components/users/edit/edit-user.component';

@NgModule({
  declarations: [
    AppComponent,
    appComponents,
    ListingComponent,
    ActionComponent,
    EditUserComponent,
    EditItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbPopoverModule,
    NgbTooltipModule,
    NgbModalModule
  ],
  entryComponents: [
    EditUserComponent,
    EditItemComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
