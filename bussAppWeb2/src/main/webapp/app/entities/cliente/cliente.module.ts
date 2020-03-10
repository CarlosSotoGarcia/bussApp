import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BussAppWeb2SharedModule } from 'app/shared/shared.module';
import { ClienteComponent } from './cliente.component';
import { ClienteDetailComponent } from './cliente-detail.component';
import { ClienteUpdateComponent } from './cliente-update.component';
import { ClienteDeleteDialogComponent } from './cliente-delete-dialog.component';
import { clienteRoute } from './cliente.route';

@NgModule({
  imports: [BussAppWeb2SharedModule, RouterModule.forChild(clienteRoute)],
  declarations: [ClienteComponent, ClienteDetailComponent, ClienteUpdateComponent, ClienteDeleteDialogComponent],
  entryComponents: [ClienteDeleteDialogComponent]
})
export class BussAppWeb2ClienteModule {}
