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

'use strict';
import * as models from './models';

export interface Role {
    

    createdAt?: Date;

    id?: number;

    /**
     * The permission that should be mapped to the role
     */
    permission?: string;

    /**
     * The role that should be mapped to the permission
     */
    roleName?: Role.RoleNameEnum;

    updatedAt?: Date;
}
export namespace Role {

    export enum RoleNameEnum { 
        ROLE_SITE_ADMIN = <any> 'ROLE_SITE_ADMIN',
        ROLE_ORG_ADMIN = <any> 'ROLE_ORG_ADMIN',
        ROLE_USER = <any> 'ROLE_USER',
    }
}
