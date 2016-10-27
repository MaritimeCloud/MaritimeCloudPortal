import {Injectable, OnInit} from '@angular/core';
import {Organization} from "../autogen/model/Organization";
import {OrganizationcontrollerApi} from "../autogen/api/OrganizationcontrollerApi";
import {Observable} from "rxjs";
import {AuthService} from "../../../authentication/services/auth.service";

@Injectable()
export class OrganizationsService implements OnInit {
  private myOrganization: Organization;
  constructor(private organizationApi: OrganizationcontrollerApi, private authService: AuthService) {
  }

  ngOnInit() {

  }

  public getMyOrganization(): Observable<Organization> {
    if (this.myOrganization) {
      return Observable.of(this.myOrganization);
    }

    // We create a new observable because we need to save the response for simple caching
    let orgMrn = this.authService.authState.orgMrn;
    return Observable.create(observer => {
      this.organizationApi.getOrganizationUsingGET(orgMrn).subscribe(
        organization => {
          this.myOrganization = organization;
          observer.next(organization);
        },
        err => {
          observer.error(err);
        }
      );
    });
  }

  public getOrganization(orgMrn: string): Observable<Organization> {
    return this.organizationApi.getOrganizationUsingGET(orgMrn);
  }
}
