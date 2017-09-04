/**
 * Maritime Cloud Identity Registry API
 * Maritime Cloud Identity Registry API can be used for managing entities in the Maritime Cloud.
 *
 * OpenAPI spec version: 0.6.0
 * Contact: info@maritimecloud.net
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import * as models from './models';

export interface PageUser {
    content?: Array<models.User>;

    first?: boolean;

    last?: boolean;

    number?: number;

    numberOfElements?: number;

    size?: number;

    sort?: models.Sort;

    totalElements?: number;

    totalPages?: number;

}
