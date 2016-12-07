/**
 * Maritime Cloud Service Registry API
 * Maritime Cloud Service Registry, developed under the Horizon 2020 Project EfficienSea2, cofunded by the European Union.
 *
 * OpenAPI spec version: 1.0
 * Contact: josef.jahn@frequentis.com
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

/* tslint:disable:no-unused-variable member-ordering */

'use strict';

@Injectable()
export class TechnicaldesignresourceApi {
    protected basePath = 'https://sr.maritimecloud.net';
    public defaultHeaders : Headers = new Headers();

    constructor(protected http: Http, @Optional() basePath: string) {
        if (basePath) {
            this.basePath = basePath;
        }
    }

    /**
     * createDesign
     *
     * @param design design
     */
    public createDesignUsingPOST (design: models.Design, extraHttpRequestParams?: any ) : Observable<models.Design> {
        const path = this.basePath + '/api/technicalDesign';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'design' is not null or undefined
        if (design === null || design === undefined) {
            throw new Error('Required parameter design was null or undefined when calling createDesignUsingPOST.');
        }

        let requestOptions: RequestOptionsArgs = {
            method: 'POST',
            headers: headerParams,
            search: queryParameters
        };
        requestOptions.body = JSON.stringify(design);

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
     * deleteDesign
     *
     * @param id id
     * @param version version
     */
    public deleteDesignUsingDELETE (id: string, version: string, extraHttpRequestParams?: any ) : Observable<{}> {
        const path = this.basePath + '/api/technicalDesign/{id}/{version}/'
            .replace('{' + 'id' + '}', String(id))
            .replace('{' + 'version' + '}', String(version));

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteDesignUsingDELETE.');
        }
        // verify required parameter 'version' is not null or undefined
        if (version === null || version === undefined) {
            throw new Error('Required parameter version was null or undefined when calling deleteDesignUsingDELETE.');
        }

        let requestOptions: RequestOptionsArgs = {
            method: 'DELETE',
            headers: headerParams,
            search: queryParameters
        };

        return this.http.request(path, requestOptions)
            .map((response: Response) => {
              return undefined;
            });
    }

    /**
     * getAllDesignsById
     *
     * @param id id
     * @param page Page number of the requested page
     * @param size Size of a page
     * @param sort Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     */
    public getAllDesignsByIdUsingGET (id: string, page?: number, size?: number, sort?: Array<string>, extraHttpRequestParams?: any ) : Observable<Array<models.Design>> {
        const path = this.basePath + '/api/technicalDesign/{id}'
            .replace('{' + 'id' + '}', String(id));

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getAllDesignsByIdUsingGET.');
        }
        if (page !== undefined) {
            queryParameters.set('page', String(page));
        }

        if (size !== undefined) {
            queryParameters.set('size', String(size));
        }

        if (sort !== undefined) {
            queryParameters.set('sort', String(sort));
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
     * getAllDesigns
     *
     * @param page Page number of the requested page
     * @param size Size of a page
     * @param sort Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     */
    public getAllDesignsUsingGET (page?: number, size?: number, sort?: Array<string>, extraHttpRequestParams?: any ) : Observable<Array<models.Design>> {
        const path = this.basePath + '/api/technicalDesign';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        if (page !== undefined) {
            queryParameters.set('page', String(page));
        }

        if (size !== undefined) {
            queryParameters.set('size', String(size));
        }

        if (sort !== undefined) {
            queryParameters.set('sort', String(sort));
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
     * getDesign
     * Returns the technical design with the specified id and version. Use version &#39;latest&#39; to get the newest one.
     * @param id id
     * @param version version
     */
    public getDesignUsingGET (id: string, version: string, extraHttpRequestParams?: any ) : Observable<models.Design> {
        const path = this.basePath + '/api/technicalDesign/{id}/{version}/'
            .replace('{' + 'id' + '}', String(id))
            .replace('{' + 'version' + '}', String(version));

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getDesignUsingGET.');
        }
        // verify required parameter 'version' is not null or undefined
        if (version === null || version === undefined) {
            throw new Error('Required parameter version was null or undefined when calling getDesignUsingGET.');
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
     * searchDesigns
     *
     * @param query query
     * @param page Page number of the requested page
     * @param size Size of a page
     * @param sort Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     */
    public searchDesignsUsingGET (query: string, page?: number, size?: number, sort?: Array<string>, extraHttpRequestParams?: any ) : Observable<Array<models.Design>> {
        const path = this.basePath + '/api/_search/technicalDesign';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'query' is not null or undefined
        if (query === null || query === undefined) {
            throw new Error('Required parameter query was null or undefined when calling searchDesignsUsingGET.');
        }
        if (page !== undefined) {
            queryParameters.set('page', String(page));
        }

        if (size !== undefined) {
            queryParameters.set('size', String(size));
        }

        if (query !== undefined) {
            queryParameters.set('query', String(query));
        }

        if (sort !== undefined) {
            queryParameters.set('sort', String(sort));
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
     * updateDesignStatus
     *
     * @param id id
     * @param version version
     * @param status status
     */
    public updateDesignStatusUsingPUT (id: string, version: string, status: string, extraHttpRequestParams?: any ) : Observable<{}> {
        const path = this.basePath + '/api/technicalDesign/{id}/{version}/status'
            .replace('{' + 'id' + '}', String(id))
            .replace('{' + 'version' + '}', String(version));

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling updateDesignStatusUsingPUT.');
        }
        // verify required parameter 'version' is not null or undefined
        if (version === null || version === undefined) {
            throw new Error('Required parameter version was null or undefined when calling updateDesignStatusUsingPUT.');
        }
        // verify required parameter 'status' is not null or undefined
        if (status === null || status === undefined) {
            throw new Error('Required parameter status was null or undefined when calling updateDesignStatusUsingPUT.');
        }
        if (status !== undefined) {
            queryParameters.set('status', String(status));
        }


        let requestOptions: RequestOptionsArgs = {
            method: 'PUT',
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
     * updateDesign
     *
     * @param design design
     */
    public updateDesignUsingPUT (design: models.Design, extraHttpRequestParams?: any ) : Observable<models.Design> {
        const path = this.basePath + '/api/technicalDesign';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'design' is not null or undefined
        if (design === null || design === undefined) {
            throw new Error('Required parameter design was null or undefined when calling updateDesignUsingPUT.');
        }

        let requestOptions: RequestOptionsArgs = {
            method: 'PUT',
            headers: headerParams,
            search: queryParameters
        };
        requestOptions.body = JSON.stringify(design);

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
