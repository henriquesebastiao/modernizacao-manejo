/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BreedSchema } from '../models/BreedSchema';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AnimalBreedService {

    /**
     * Get All
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getAllAnimalBreedGet(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/animal/breed/',
        });
    }

    /**
     * Create
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static createAnimalBreedPost(
        requestBody: BreedSchema,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/animal/breed/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get By
     * @param breedId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getByAnimalBreedBreedIdGet(
        breedId: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/animal/breed/{breed_id}',
            path: {
                'breed_id': breedId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Delete
     * @param breedId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static deleteAnimalBreedBreedIdDelete(
        breedId: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/animal/breed/{breed_id}',
            path: {
                'breed_id': breedId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Update
     * @param breedId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static updateAnimalBreedBreedIdPatch(
        breedId: number,
        requestBody: BreedSchema,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/animal/breed/{breed_id}',
            path: {
                'breed_id': breedId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

}
