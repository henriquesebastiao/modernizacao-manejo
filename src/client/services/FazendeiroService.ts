/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FazendeiroCreate } from '../models/FazendeiroCreate';
import type { FazendeiroSchema } from '../models/FazendeiroSchema';
import type { FazendeiroUpdate } from '../models/FazendeiroUpdate';

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
     * @returns FazendeiroSchema Successful Response
     * @throws ApiError
     */
    public static createFazendeiroPost(
        requestBody: FazendeiroCreate,
    ): CancelablePromise<FazendeiroSchema> {
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
     * Get By Id
     * @param fazendeiroId
     * @returns FazendeiroSchema Successful Response
     * @throws ApiError
     */
    public static getByIdFazendeiroFazendeiroIdGet(
        fazendeiroId: number,
    ): CancelablePromise<FazendeiroSchema> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/fazendeiro/{fazendeiro_id}',
            path: {
                'fazendeiro_id': fazendeiroId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Delete
     * @param fazendeiroId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static deleteFazendeiroFazendeiroIdDelete(
        fazendeiroId: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/fazendeiro/{fazendeiro_id}',
            path: {
                'fazendeiro_id': fazendeiroId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Update
     * @param fazendeiroId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static updateFazendeiroFazendeiroIdPatch(
        fazendeiroId: number,
        requestBody: FazendeiroUpdate,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/fazendeiro/{fazendeiro_id}',
            path: {
                'fazendeiro_id': fazendeiroId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

}
