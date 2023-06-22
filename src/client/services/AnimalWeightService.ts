/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AnimalWeightSchema } from '../models/AnimalWeightSchema';
import type { BatchLogSchema } from '../models/BatchLogSchema';
import type { BatchSchema } from '../models/BatchSchema';
import type { EmploymentSchema } from '../models/EmploymentSchema';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AnimalWeightService {

    /**
     * Get All
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getAllAnimalWeightGet(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/animal/weight/',
        });
    }

    /**
     * Create
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static createAnimalWeightPost(
        requestBody: EmploymentSchema,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/animal/weight/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get By
     * @param animalWeightId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getByAnimalWeightAnimalWeightIdGet(
        animalWeightId: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/animal/weight/{animal_weight_id}',
            path: {
                'animal_weight_id': animalWeightId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Delete
     * @param animalWeightId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static deleteAnimalWeightAnimalWeightIdDelete(
        animalWeightId: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/animal/weight/{animal_weight_id}',
            path: {
                'animal_weight_id': animalWeightId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Update
     * @param animalWeightId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static updateAnimalWeightAnimalWeightIdPatch(
        animalWeightId: number,
        requestBody: AnimalWeightSchema,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/animal/weight/{animal_weight_id}',
            path: {
                'animal_weight_id': animalWeightId,
            },
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
    public static getByAnimalWeightBatchIdGet(
        batchId: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/animal/weight/{batch_id}',
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
    public static deleteAnimalWeightBatchIdDelete(
        batchId: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/animal/weight/{batch_id}',
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
    public static updateAnimalWeightBatchIdPatch(
        batchId: number,
        requestBody: BatchSchema,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/animal/weight/{batch_id}',
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

    /**
     * Get By
     * @param batchLogId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getByAnimalWeightBatchLogIdGet(
        batchLogId: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/animal/weight/{batch_log_id}',
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
    public static deleteAnimalWeightBatchLogIdDelete(
        batchLogId: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/animal/weight/{batch_log_id}',
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
    public static updateAnimalWeightBatchLogIdPatch(
        batchLogId: number,
        requestBody: BatchLogSchema,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/animal/weight/{batch_log_id}',
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

    /**
     * Get By
     * @param employmentId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getByAnimalWeightEmploymentIdGet(
        employmentId: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/animal/weight/{employment_id}',
            path: {
                'employment_id': employmentId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Delete
     * @param employmentId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static deleteAnimalWeightEmploymentIdDelete(
        employmentId: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/animal/weight/{employment_id}',
            path: {
                'employment_id': employmentId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Update
     * @param employmentId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static updateAnimalWeightEmploymentIdPatch(
        employmentId: number,
        requestBody: EmploymentSchema,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/animal/weight/{employment_id}',
            path: {
                'employment_id': employmentId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

}
