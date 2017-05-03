import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventCreate } from './event-create';

@NgModule({
  declarations: [
    EventCreate,
  ],
  imports: [
    IonicPageModule.forChild(EventCreate),
  ],
  exports: [
    EventCreate
  ]
})
export class EventCreateModule {}
