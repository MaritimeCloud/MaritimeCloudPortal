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
 */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { Http, Headers, URLSearchParams }                    from '@angular/http';
import { RequestMethod, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Response, ResponseContentType }                     from '@angular/http';

import { Observable }                                        from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import * as models                                           from '../model/models';
import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';

/* tslint:disable:no-unused-variable member-ordering */


@Injectable()
export class SpecificationtemplateresourceApi {
    protected basePath = 'https://sr-test.maritimecloud.net';
    public defaultHeaders: Headers = new Headers();
    public configuration: Configuration = new Configuration();

    constructor(protected http: Http, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
        }
    }

    /**
     * createSpecificationTemplate
     * 
     * @param specificationTemplate specificationTemplate
     */
    public createSpecificationTemplateUsingPOST(specificationTemplate: models.SpecificationTemplate, extraHttpRequestParams?: any): Observable<models.SpecificationTemplate> {
        return this.createSpecificationTemplateUsingPOSTWithHttpInfo(specificationTemplate, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * deleteSpecificationTemplate
     * 
     * @param id id
     */
    public deleteSpecificationTemplateUsingDELETE(id: number, extraHttpRequestParams?: any): Observable<{}> {
        return this.deleteSpecificationTemplateUsingDELETEWithHttpInfo(id, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * getAllSpecificationTemplates
     * 
     * @param page Page number of the requested page
     * @param size Size of a page
     * @param sort Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     */
    public getAllSpecificationTemplatesUsingGET(page?: number, size?: number, sort?: Array<string>, extraHttpRequestParams?: any): Observable<Array<models.SpecificationTemplate>> {
        return this.getAllSpecificationTemplatesUsingGETWithHttpInfo(page, size, sort, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * getSpecificationTemplate
     * 
     * @param id id
     */
    public getSpecificationTemplateUsingGET(id: number, extraHttpRequestParams?: any): Observable<models.SpecificationTemplate> {
        return this.getSpecificationTemplateUsingGETWithHttpInfo(id, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * searchSpecificationTemplates
     * 
     * @param query query
     * @param page Page number of the requested page
     * @param size Size of a page
     * @param sort Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     */
    public searchSpecificationTemplatesUsingGET(query: string, page?: number, size?: number, sort?: Array<string>, extraHttpRequestParams?: any): Observable<Array<models.SpecificationTemplate>> {
        return this.searchSpecificationTemplatesUsingGETWithHttpInfo(query, page, size, sort, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * updateSpecificationTemplate
     * 
     * @param specificationTemplate specificationTemplate
     */
    public updateSpecificationTemplateUsingPUT(specificationTemplate: models.SpecificationTemplate, extraHttpRequestParams?: any): Observable<models.SpecificationTemplate> {
        return this.updateSpecificationTemplateUsingPUTWithHttpInfo(specificationTemplate, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }


    /**
     * createSpecificationTemplate
     * 
     * @param specificationTemplate specificationTemplate
     */
    public createSpecificationTemplateUsingPOSTWithHttpInfo(specificationTemplate: models.SpecificationTemplate, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/api/specification-templates';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'specificationTemplate' is not null or undefined
        if (specificationTemplate === null || specificationTemplate === undefined) {
            throw new Error('Required parameter specificationTemplate was null or undefined when calling createSpecificationTemplateUsingPOST.');
        }
        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

        headers.set('Content-Type', 'application/json');

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            body: specificationTemplate == null ? '' : JSON.stringify(specificationTemplate), // https://github.com/angular/angular/issues/10612
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * deleteSpecificationTemplate
     * 
     * @param id id
     */
    public deleteSpecificationTemplateUsingDELETEWithHttpInfo(id: number, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/api/specification-templates/${id}'
                    .replace('${' + 'id' + '}', String(id));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteSpecificationTemplateUsingDELETE.');
        }
        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Delete,
            headers: headers,
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * getAllSpecificationTemplates
     * 
     * @param page Page number of the requested page
     * @param size Size of a page
     * @param sort Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     */
    public getAllSpecificationTemplatesUsingGETWithHttpInfo(page?: number, size?: number, sort?: Array<string>, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/api/specification-templates';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (page !== undefined) {
            queryParameters.set('page', <any>page);
        }

        if (size !== undefined) {
            queryParameters.set('size', <any>size);
        }

        if (sort) {
            sort.forEach((element) => {
                queryParameters.append('sort', <any>element);
            })
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * getSpecificationTemplate
     * 
     * @param id id
     */
    public getSpecificationTemplateUsingGETWithHttpInfo(id: number, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/api/specification-templates/${id}'
                    .replace('${' + 'id' + '}', String(id));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getSpecificationTemplateUsingGET.');
        }
        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * searchSpecificationTemplates
     * 
     * @param query query
     * @param page Page number of the requested page
     * @param size Size of a page
     * @param sort Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     */
    public searchSpecificationTemplatesUsingGETWithHttpInfo(query: string, page?: number, size?: number, sort?: Array<string>, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/api/_search/specification-templates';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'query' is not null or undefined
        if (query === null || query === undefined) {
            throw new Error('Required parameter query was null or undefined when calling searchSpecificationTemplatesUsingGET.');
        }
        if (query !== undefined) {
            queryParameters.set('query', <any>query);
        }

        if (page !== undefined) {
            queryParameters.set('page', <any>page);
        }

        if (size !== undefined) {
            queryParameters.set('size', <any>size);
        }

        if (sort) {
            sort.forEach((element) => {
                queryParameters.append('sort', <any>element);
            })
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * updateSpecificationTemplate
     * 
     * @param specificationTemplate specificationTemplate
     */
    public updateSpecificationTemplateUsingPUTWithHttpInfo(specificationTemplate: models.SpecificationTemplate, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/api/specification-templates';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'specificationTemplate' is not null or undefined
        if (specificationTemplate === null || specificationTemplate === undefined) {
            throw new Error('Required parameter specificationTemplate was null or undefined when calling updateSpecificationTemplateUsingPUT.');
        }
        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

        headers.set('Content-Type', 'application/json');

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Put,
            headers: headers,
            body: specificationTemplate == null ? '' : JSON.stringify(specificationTemplate), // https://github.com/angular/angular/issues/10612
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

}
