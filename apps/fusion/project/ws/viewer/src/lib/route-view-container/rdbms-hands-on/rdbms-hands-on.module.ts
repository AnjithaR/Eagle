/*               "Copyright 2020 Infosys Ltd.
               Use of this source code is governed by GPL v3 license that can be found in the LICENSE file or at https://opensource.org/licenses/GPL-3.0
               This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License version 3" */
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RdbmsHandsOnComponent } from './rdbms-hands-on.component'
import { RdbmsHandsOnRoutingModule } from './rdbms-hands-on-routing.module'
import { RdbmsHandsOnModule as RdbmsPluginHandsOnModule } from '../../plugins/rdbms-hands-on/rdbms-hands-on.module'
@NgModule({
  declarations: [RdbmsHandsOnComponent],
  imports: [
    CommonModule,
    RdbmsHandsOnRoutingModule,
    RdbmsPluginHandsOnModule,
  ],
  exports: [
    RdbmsHandsOnComponent,
  ],
})
export class RdbmsHandsOnModule { }