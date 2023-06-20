/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LoteCreate } from '../models/LoteCreate';
import type { LoteSchema } from '../models/LoteSchema';
import type { LoteUpdate } from '../models/LoteUpdate';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class LoteService {

    /**
     * Get All
     * @returns LoteSchema Successful Response
     * @throws ApiError
     */
    public static getAllLoteGet(): CancelablePromise<Array<LoteSchema>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/lote/',
        });
    }

    /**
     * Create
     * @param requestBody
     * @returns LoteSchema Successful Response
     * @throws ApiError
     */
    public static createLotePost(
        requestBody: LoteCreate,
    ): CancelablePromise<LoteSchema> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/lote/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get By Id
     * @param loteId
     * @returns LoteSchema Successful Response
     * @throws ApiError
     */
    public static getByIdLoteLoteIdGet(
        loteId: number,
    ): CancelablePromise<LoteSchema> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/lote/{lote_id}',
            path: {
                'lote_id': loteId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Delete
     * @param loteId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static deleteLoteLoteIdDelete(
        loteId: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/lote/{lote_id}',
            path: {
                'lote_id': loteId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Update
     * @param loteId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static updateLoteLoteIdPatch(
        loteId: number,
        requestBody: LoteUpdate,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/lote/{lote_id}',
            path: {
                'lote_id': loteId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

}
