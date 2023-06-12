/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FazendeiroCreateSchema } from '../models/FazendeiroCreateSchema';
import type { FazendeiroSchema } from '../models/FazendeiroSchema';
import type { FazendeiroUpdateSchema } from '../models/FazendeiroUpdateSchema';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class FazendeiroService {

    /**
     * Get All
     * @returns FazendeiroSchema Successful Response
     * @throws ApiError
     */
    public static getAllFazendeiroGet(): CancelablePromise<Array<FazendeiroSchema>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/fazendeiro/',
        });
    }

    /**
     * Create
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static createFazendeiroPost(
        requestBody: FazendeiroCreateSchema,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/fazendeiro/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get
     * @param cargoId
     * @returns FazendeiroSchema Successful Response
     * @throws ApiError
     */
    public static getFazendeiroCargoIdGet(
        cargoId: number,
    ): CancelablePromise<FazendeiroSchema> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/fazendeiro/{cargo_id}',
            path: {
                'cargo_id': cargoId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Delete
     * @param cargoId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static deleteFazendeiroCargoIdDelete(
        cargoId: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/fazendeiro/{cargo_id}',
            path: {
                'cargo_id': cargoId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Update
     * @param cargoId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static updateFazendeiroCargoIdPatch(
        cargoId: number,
        requestBody: FazendeiroUpdateSchema,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/fazendeiro/{cargo_id}',
            path: {
                'cargo_id': cargoId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

}
