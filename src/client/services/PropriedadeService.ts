/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PropriedadeCreateSchema } from '../models/PropriedadeCreateSchema';
import type { PropriedadeSchema } from '../models/PropriedadeSchema';
import type { PropriedadeUpdateSchema } from '../models/PropriedadeUpdateSchema';

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
     * @returns any Successful Response
     * @throws ApiError
     */
    public static createPropriedadePost(
        requestBody: PropriedadeCreateSchema,
    ): CancelablePromise<any> {
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
     * Get
     * @param propriedadeId
     * @returns PropriedadeSchema Successful Response
     * @throws ApiError
     */
    public static getPropriedadePropriedadeIdGet(
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
        requestBody: PropriedadeUpdateSchema,
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
