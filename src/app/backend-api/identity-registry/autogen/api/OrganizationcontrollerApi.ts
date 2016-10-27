/**
 * Maritime Cloud Identity Registry API
 * Maritime Cloud Identity Registry API can be used for managing entities in the Maritime Cloud.
 *
 * OpenAPI spec version: 0.0.1
 * Contact: info@maritimecloud.net
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {Http, Headers, RequestOptionsArgs, Response, URLSearchParams} from '@angular/http';
import {Injectable, Optional} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import * as models from '../model/models';
import 'rxjs/Rx';

/* tslint:disable:no-unused-variable member-ordering */

'use strict';

@Injectable()
export class OrganizationcontrollerApi {
    protected basePath = 'https://api.maritimecloud.net/';
    public defaultHeaders : Headers = new Headers();

    constructor(protected http: Http, @Optional() basePath: string) {
        if (basePath) {
            this.basePath = basePath;
        }
    }

    /**
     * applyOrganization
     * 
     * @param input input
     */
    public applyOrganizationUsingPOST (input: models.Organization, extraHttpRequestParams?: any ) : Observable<models.Organization> {
        const path = this.basePath + '/oidc/api/org/apply';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'input' is not null or undefined
        if (input === null || input === undefined) {
            throw new Error('Required parameter input was null or undefined when calling applyOrganizationUsingPOST.');
        }
        let requestOptions: RequestOptionsArgs = {
            method: 'POST',
            headers: headerParams,
            search: queryParameters
        };
        requestOptions.body = JSON.stringify(input);

        return this.http.request(path, requestOptions)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * applyOrganization
     * 
     * @param input input
     */
    public applyOrganizationUsingPOST1 (input: models.Organization, extraHttpRequestParams?: any ) : Observable<models.Organization> {
        const path = this.basePath + '/x509/api/org/apply';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'input' is not null or undefined
        if (input === null || input === undefined) {
            throw new Error('Required parameter input was null or undefined when calling applyOrganizationUsingPOST1.');
        }
        let requestOptions: RequestOptionsArgs = {
            method: 'POST',
            headers: headerParams,
            search: queryParameters
        };
        requestOptions.body = JSON.stringify(input);

        return this.http.request(path, requestOptions)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * approveOrganization
     * 
     * @param orgMrn orgMrn
     */
    public approveOrganizationUsingGET (orgMrn: string, extraHttpRequestParams?: any ) : Observable<models.Organization> {
        const path = this.basePath + '/oidc/api/org/{orgMrn}/approve'
            .replace('{' + 'orgMrn' + '}', String(orgMrn));

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'orgMrn' is not null or undefined
        if (orgMrn === null || orgMrn === undefined) {
            throw new Error('Required parameter orgMrn was null or undefined when calling approveOrganizationUsingGET.');
        }
        let requestOptions: RequestOptionsArgs = {
            method: 'GET',
            headers: headerParams,
            search: queryParameters
        };

        return this.http.request(path, requestOptions)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * approveOrganization
     * 
     * @param orgMrn orgMrn
     */
    public approveOrganizationUsingGET1 (orgMrn: string, extraHttpRequestParams?: any ) : Observable<models.Organization> {
        const path = this.basePath + '/x509/api/org/{orgMrn}/approve'
            .replace('{' + 'orgMrn' + '}', String(orgMrn));

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'orgMrn' is not null or undefined
        if (orgMrn === null || orgMrn === undefined) {
            throw new Error('Required parameter orgMrn was null or undefined when calling approveOrganizationUsingGET1.');
        }
        let requestOptions: RequestOptionsArgs = {
            method: 'GET',
            headers: headerParams,
            search: queryParameters
        };

        return this.http.request(path, requestOptions)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * deleteOrg
     * 
     * @param orgMrn orgMrn
     */
    public deleteOrgUsingDELETE (orgMrn: string, extraHttpRequestParams?: any ) : Observable<any> {
        const path = this.basePath + '/oidc/api/org/{orgMrn}'
            .replace('{' + 'orgMrn' + '}', String(orgMrn));

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'orgMrn' is not null or undefined
        if (orgMrn === null || orgMrn === undefined) {
            throw new Error('Required parameter orgMrn was null or undefined when calling deleteOrgUsingDELETE.');
        }
        let requestOptions: RequestOptionsArgs = {
            method: 'DELETE',
            headers: headerParams,
            search: queryParameters
        };

        return this.http.request(path, requestOptions)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * deleteOrg
     * 
     * @param orgMrn orgMrn
     */
    public deleteOrgUsingDELETE1 (orgMrn: string, extraHttpRequestParams?: any ) : Observable<any> {
        const path = this.basePath + '/x509/api/org/{orgMrn}'
            .replace('{' + 'orgMrn' + '}', String(orgMrn));

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'orgMrn' is not null or undefined
        if (orgMrn === null || orgMrn === undefined) {
            throw new Error('Required parameter orgMrn was null or undefined when calling deleteOrgUsingDELETE1.');
        }
        let requestOptions: RequestOptionsArgs = {
            method: 'DELETE',
            headers: headerParams,
            search: queryParameters
        };

        return this.http.request(path, requestOptions)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * getOrganization
     * 
     * @param orgMrn orgMrn
     */
    public getOrganizationUsingGET (orgMrn: string, extraHttpRequestParams?: any ) : Observable<models.Organization> {
        const path = this.basePath + '/oidc/api/org/{orgMrn}'
            .replace('{' + 'orgMrn' + '}', String(orgMrn));

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'orgMrn' is not null or undefined
        if (orgMrn === null || orgMrn === undefined) {
            throw new Error('Required parameter orgMrn was null or undefined when calling getOrganizationUsingGET.');
        }
        let requestOptions: RequestOptionsArgs = {
            method: 'GET',
            headers: headerParams,
            search: queryParameters
        };

        return this.http.request(path, requestOptions)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * getOrganization
     * 
     * @param orgMrn orgMrn
     */
    public getOrganizationUsingGET1 (orgMrn: string, extraHttpRequestParams?: any ) : Observable<models.Organization> {
        const path = this.basePath + '/x509/api/org/{orgMrn}'
            .replace('{' + 'orgMrn' + '}', String(orgMrn));

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'orgMrn' is not null or undefined
        if (orgMrn === null || orgMrn === undefined) {
            throw new Error('Required parameter orgMrn was null or undefined when calling getOrganizationUsingGET1.');
        }
        let requestOptions: RequestOptionsArgs = {
            method: 'GET',
            headers: headerParams,
            search: queryParameters
        };

        return this.http.request(path, requestOptions)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * getOrganization
     * 
     */
    public getOrganizationUsingGET2 (extraHttpRequestParams?: any ) : Observable<Array<models.Organization>> {
        const path = this.basePath + '/oidc/api/orgs';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        let requestOptions: RequestOptionsArgs = {
            method: 'GET',
            headers: headerParams,
            search: queryParameters
        };

        return this.http.request(path, requestOptions)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * getOrganization
     * 
     */
    public getOrganizationUsingGET3 (extraHttpRequestParams?: any ) : Observable<Array<models.Organization>> {
        const path = this.basePath + '/x509/api/orgs';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        let requestOptions: RequestOptionsArgs = {
            method: 'GET',
            headers: headerParams,
            search: queryParameters
        };

        return this.http.request(path, requestOptions)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * getUnapprovedOrganizations
     * 
     */
    public getUnapprovedOrganizationsUsingGET (extraHttpRequestParams?: any ) : Observable<Array<models.Organization>> {
        const path = this.basePath + '/oidc/api/org/unapprovedorgs';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        let requestOptions: RequestOptionsArgs = {
            method: 'GET',
            headers: headerParams,
            search: queryParameters
        };

        return this.http.request(path, requestOptions)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * getUnapprovedOrganizations
     * 
     */
    public getUnapprovedOrganizationsUsingGET1 (extraHttpRequestParams?: any ) : Observable<Array<models.Organization>> {
        const path = this.basePath + '/x509/api/org/unapprovedorgs';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        let requestOptions: RequestOptionsArgs = {
            method: 'GET',
            headers: headerParams,
            search: queryParameters
        };

        return this.http.request(path, requestOptions)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * newOrgCert
     * 
     * @param orgMrn orgMrn
     */
    public newOrgCertUsingGET (orgMrn: string, extraHttpRequestParams?: any ) : Observable<models.PemCertificate> {
        const path = this.basePath + '/oidc/api/org/{orgMrn}/certificate/issue-new'
            .replace('{' + 'orgMrn' + '}', String(orgMrn));

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'orgMrn' is not null or undefined
        if (orgMrn === null || orgMrn === undefined) {
            throw new Error('Required parameter orgMrn was null or undefined when calling newOrgCertUsingGET.');
        }
        let requestOptions: RequestOptionsArgs = {
            method: 'GET',
            headers: headerParams,
            search: queryParameters
        };

        return this.http.request(path, requestOptions)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * newOrgCert
     * 
     * @param orgMrn orgMrn
     */
    public newOrgCertUsingGET1 (orgMrn: string, extraHttpRequestParams?: any ) : Observable<models.PemCertificate> {
        const path = this.basePath + '/x509/api/org/{orgMrn}/certificate/issue-new'
            .replace('{' + 'orgMrn' + '}', String(orgMrn));

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'orgMrn' is not null or undefined
        if (orgMrn === null || orgMrn === undefined) {
            throw new Error('Required parameter orgMrn was null or undefined when calling newOrgCertUsingGET1.');
        }
        let requestOptions: RequestOptionsArgs = {
            method: 'GET',
            headers: headerParams,
            search: queryParameters
        };

        return this.http.request(path, requestOptions)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * revokeOrgCert
     * 
     * @param orgMrn orgMrn
     * @param certId certId
     * @param input input
     */
    public revokeOrgCertUsingPOST (orgMrn: string, certId: number, input: models.CertificateRevocation, extraHttpRequestParams?: any ) : Observable<any> {
        const path = this.basePath + '/oidc/api/org/{orgMrn}/certificate/{certId}/revoke'
            .replace('{' + 'orgMrn' + '}', String(orgMrn))
            .replace('{' + 'certId' + '}', String(certId));

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'orgMrn' is not null or undefined
        if (orgMrn === null || orgMrn === undefined) {
            throw new Error('Required parameter orgMrn was null or undefined when calling revokeOrgCertUsingPOST.');
        }
        // verify required parameter 'certId' is not null or undefined
        if (certId === null || certId === undefined) {
            throw new Error('Required parameter certId was null or undefined when calling revokeOrgCertUsingPOST.');
        }
        // verify required parameter 'input' is not null or undefined
        if (input === null || input === undefined) {
            throw new Error('Required parameter input was null or undefined when calling revokeOrgCertUsingPOST.');
        }
        let requestOptions: RequestOptionsArgs = {
            method: 'POST',
            headers: headerParams,
            search: queryParameters
        };
        requestOptions.body = JSON.stringify(input);

        return this.http.request(path, requestOptions)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * revokeOrgCert
     * 
     * @param orgMrn orgMrn
     * @param certId certId
     * @param input input
     */
    public revokeOrgCertUsingPOST1 (orgMrn: string, certId: number, input: models.CertificateRevocation, extraHttpRequestParams?: any ) : Observable<any> {
        const path = this.basePath + '/x509/api/org/{orgMrn}/certificate/{certId}/revoke'
            .replace('{' + 'orgMrn' + '}', String(orgMrn))
            .replace('{' + 'certId' + '}', String(certId));

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'orgMrn' is not null or undefined
        if (orgMrn === null || orgMrn === undefined) {
            throw new Error('Required parameter orgMrn was null or undefined when calling revokeOrgCertUsingPOST1.');
        }
        // verify required parameter 'certId' is not null or undefined
        if (certId === null || certId === undefined) {
            throw new Error('Required parameter certId was null or undefined when calling revokeOrgCertUsingPOST1.');
        }
        // verify required parameter 'input' is not null or undefined
        if (input === null || input === undefined) {
            throw new Error('Required parameter input was null or undefined when calling revokeOrgCertUsingPOST1.');
        }
        let requestOptions: RequestOptionsArgs = {
            method: 'POST',
            headers: headerParams,
            search: queryParameters
        };
        requestOptions.body = JSON.stringify(input);

        return this.http.request(path, requestOptions)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * updateOrganization
     * 
     * @param orgMrn orgMrn
     * @param input input
     */
    public updateOrganizationUsingPUT (orgMrn: string, input: models.Organization, extraHttpRequestParams?: any ) : Observable<any> {
        const path = this.basePath + '/oidc/api/org/{orgMrn}'
            .replace('{' + 'orgMrn' + '}', String(orgMrn));

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'orgMrn' is not null or undefined
        if (orgMrn === null || orgMrn === undefined) {
            throw new Error('Required parameter orgMrn was null or undefined when calling updateOrganizationUsingPUT.');
        }
        // verify required parameter 'input' is not null or undefined
        if (input === null || input === undefined) {
            throw new Error('Required parameter input was null or undefined when calling updateOrganizationUsingPUT.');
        }
        let requestOptions: RequestOptionsArgs = {
            method: 'PUT',
            headers: headerParams,
            search: queryParameters
        };
        requestOptions.body = JSON.stringify(input);

        return this.http.request(path, requestOptions)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * updateOrganization
     * 
     * @param orgMrn orgMrn
     * @param input input
     */
    public updateOrganizationUsingPUT1 (orgMrn: string, input: models.Organization, extraHttpRequestParams?: any ) : Observable<any> {
        const path = this.basePath + '/x509/api/org/{orgMrn}'
            .replace('{' + 'orgMrn' + '}', String(orgMrn));

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'orgMrn' is not null or undefined
        if (orgMrn === null || orgMrn === undefined) {
            throw new Error('Required parameter orgMrn was null or undefined when calling updateOrganizationUsingPUT1.');
        }
        // verify required parameter 'input' is not null or undefined
        if (input === null || input === undefined) {
            throw new Error('Required parameter input was null or undefined when calling updateOrganizationUsingPUT1.');
        }
        let requestOptions: RequestOptionsArgs = {
            method: 'PUT',
            headers: headerParams,
            search: queryParameters
        };
        requestOptions.body = JSON.stringify(input);

        return this.http.request(path, requestOptions)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

}
