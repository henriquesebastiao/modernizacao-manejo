/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FazendaCreateSchema } from '../models/FazendaCreateSchema';
import type { FazendaSchema } from '../models/FazendaSchema';
import type { FazendaUpdateSchema } from '../models/FazendaUpdateSchema';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class FazendaService {

    /**
     * Get All
     * @returns FazendaSchema Successful Response
     * @throws ApiError
     */
    public static getAllFazendaGet(): CancelablePromise<Array<FazendaSchema>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/fazenda/',
        });
    }

    /**
     * Create
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static createFazendaPost(
        requestBody: FazendaCreateSchema,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/fazenda/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get
     * @param fazendaId
     * @returns FazendaSchema Successful Response
     * @throws ApiError
     */
    public static getFazendaFazendaIdGet(
        fazendaId: number,
    ): CancelablePromise<FazendaSchema> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/fazenda/{fazenda_id}',
            path: {
                'fazenda_id': fazendaId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Delete
     * @param fazendaId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static deleteFazendaFazendaIdDelete(
        fazendaId: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/fazenda/{fazenda_id}',
            path: {
                'fazenda_id': fazendaId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Update
     * @param fazendaId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static updateFazendaFazendaIdPatch(
        fazendaId: number,
        requestBody: FazendaUpdateSchema,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/fazenda/{fazenda_id}',
            path: {
                'fazenda_id': fazendaId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

}
