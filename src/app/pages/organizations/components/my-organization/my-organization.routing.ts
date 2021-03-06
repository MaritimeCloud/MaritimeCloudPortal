import { RouterModule, Routes } from '@angular/router';
import { MyOrganization } from "./my-organization.component";
import { CertificateIssueNewComponent } from "../../../shared/components/certificate-issue-new/certificate-issue-new.component";
import { MyOrganizationUpdateComponent } from "../my-organization-update/my-organization-update.component";
import { CertificateRevokeComponent } from "../../../shared/components/certificate-revoke/certificate-revoke.component";

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: MyOrganization,
    data:{breadcrumb: 'My Organization'},
    children: [
    ]
  },
  {
    path: 'issuecert',
    component: CertificateIssueNewComponent,
    data:{breadcrumb: 'New Certificate'},
    children: [
    ]
  },
	{
		path: 'revokecert',
		component: CertificateRevokeComponent,
		data:{breadcrumb: 'Revoke Certificate'},
		children: [
		]
	},
	{
		path: 'update',
		component: MyOrganizationUpdateComponent,
		data:{breadcrumb: 'Update'}
	}
];

export const routing = RouterModule.forChild(routes);
