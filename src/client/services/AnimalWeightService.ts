/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AnimalWeightSchema } from '../models/AnimalWeightSchema';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AnimalWeightService {

    /**
     * Get All
     * @returns any Successful Response
     * @throws ApiError
     */
    public static animalWeightGetAll(): CancelablePromise<any> {
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
    public static animalWeightCreate(
        requestBody: AnimalWeightSchema,
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
    public static animalWeightGetBy(
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
    public static animalWeightDelete(
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
    public static animalWeightUpdate(
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

}
