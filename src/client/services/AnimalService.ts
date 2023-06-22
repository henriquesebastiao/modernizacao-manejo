/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AnimalSchema } from '../models/AnimalSchema';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AnimalService {

    /**
     * Get All
     * @returns any Successful Response
     * @throws ApiError
     */
    public static animalGetAll(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/animal/',
        });
    }

    /**
     * Create
     * @param requestBody
     * @returns AnimalSchema Successful Response
     * @throws ApiError
     */
    public static animalCreate(
        requestBody: AnimalSchema,
    ): CancelablePromise<AnimalSchema> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/animal/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Animal already exists`,
                422: `Validation Error`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * Get By
     * @param animalId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static animalGetBy(
        animalId: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/animal/{animal_id}',
            path: {
                'animal_id': animalId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Delete
     * @param animalId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static animalDelete(
        animalId: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/animal/{animal_id}',
            path: {
                'animal_id': animalId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Update
     * @param animalId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static animalUpdate(
        animalId: number,
        requestBody: AnimalSchema,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/animal/{animal_id}',
            path: {
                'animal_id': animalId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

}
