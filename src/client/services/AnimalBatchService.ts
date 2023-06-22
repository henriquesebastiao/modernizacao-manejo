/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BatchSchema } from '../models/BatchSchema';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AnimalBatchService {

    /**
     * Get All
     * @returns any Successful Response
     * @throws ApiError
     */
    public static animalBatchGetAll(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/animal/batch/',
        });
    }

    /**
     * Create
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static animalBatchCreate(
        requestBody: BatchSchema,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/animal/batch/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get By
     * @param batchId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static animalBatchGetBy(
        batchId: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/animal/batch/{batch_id}',
            path: {
                'batch_id': batchId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Delete
     * @param batchId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static animalBatchDelete(
        batchId: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/animal/batch/{batch_id}',
            path: {
                'batch_id': batchId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Update
     * @param batchId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static animalBatchUpdate(
        batchId: number,
        requestBody: BatchSchema,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/animal/batch/{batch_id}',
            path: {
                'batch_id': batchId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

}
