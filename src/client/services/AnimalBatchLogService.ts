/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BatchLogSchema } from '../models/BatchLogSchema';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AnimalBatchLogService {

    /**
     * Get All
     * @returns any Successful Response
     * @throws ApiError
     */
    public static animalBatchLogGetAll(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/animal/batch_log/',
        });
    }

    /**
     * Create
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static animalBatchLogCreate(
        requestBody: BatchLogSchema,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/animal/batch_log/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get By
     * @param batchLogId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static animalBatchLogGetBy(
        batchLogId: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/animal/batch_log/{batch_log_id}',
            path: {
                'batch_log_id': batchLogId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Delete
     * @param batchLogId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static animalBatchLogDelete(
        batchLogId: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/animal/batch_log/{batch_log_id}',
            path: {
                'batch_log_id': batchLogId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Update
     * @param batchLogId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static animalBatchLogUpdate(
        batchLogId: number,
        requestBody: BatchLogSchema,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/animal/batch_log/{batch_log_id}',
            path: {
                'batch_log_id': batchLogId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

}
