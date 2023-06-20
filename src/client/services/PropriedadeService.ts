/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PropriedadeCreate } from '../models/PropriedadeCreate';
import type { PropriedadeSchema } from '../models/PropriedadeSchema';
import type { PropriedadeUpdate } from '../models/PropriedadeUpdate';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class PropriedadeService {

    /**
     * Get All
     * @returns PropriedadeSchema Successful Response
     * @throws ApiError
     */
    public static getAllPropriedadeGet(): CancelablePromise<Array<PropriedadeSchema>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/propriedade/',
        });
    }

    /**
     * Create
     * @param requestBody
     * @returns PropriedadeSchema Successful Response
     * @throws ApiError
     */
    public static createPropriedadePost(
        requestBody: PropriedadeCreate,
    ): CancelablePromise<PropriedadeSchema> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/propriedade/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get By Id
     * @param propriedadeId
     * @returns PropriedadeSchema Successful Response
     * @throws ApiError
     */
    public static getByIdPropriedadePropriedadeIdGet(
        propriedadeId: number,
    ): CancelablePromise<PropriedadeSchema> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/propriedade/{propriedade_id}',
            path: {
                'propriedade_id': propriedadeId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Delete
     * @param propriedadeId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static deletePropriedadePropriedadeIdDelete(
        propriedadeId: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/propriedade/{propriedade_id}',
            path: {
                'propriedade_id': propriedadeId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Update
     * @param propriedadeId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static updatePropriedadePropriedadeIdPatch(
        propriedadeId: number,
        requestBody: PropriedadeUpdate,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/propriedade/{propriedade_id}',
            path: {
                'propriedade_id': propriedadeId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

}
