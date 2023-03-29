import { UiComponentModule } from './../ui-component/ui-component.module';
import { ManageReportComponent } from "./manage-report/manage-report.component";

import {NgModule} from '@angular/core'

@NgModule({
  declarations: [
    ManageReportComponent
  ],
  imports: [
    UiComponentModule
  ],
  exports: [
    ManageReportComponent
  ]
})

export class ComponentsModule {}