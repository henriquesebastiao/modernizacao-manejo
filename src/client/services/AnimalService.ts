/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AnimalCreate } from '../models/AnimalCreate';
import type { AnimalSchema } from '../models/AnimalSchema';
import type { AnimalUpdate } from '../models/AnimalUpdate';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AnimalService {

    /**
     * Get All
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getAllAnimalGet(): CancelablePromise<any> {
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
    public static createAnimalPost(
        requestBody: AnimalCreate,
    ): CancelablePromise<AnimalSchema> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/animal/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get By Id
     * @param animalId
     * @returns AnimalSchema Successful Response
     * @throws ApiError
     */
    public static getByIdAnimalAnimalIdGet(
        animalId: number,
    ): CancelablePromise<AnimalSchema> {
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
    public static deleteAnimalAnimalIdDelete(
        animalId: number,
    ): CancelablePromise<Record<string, any>> {
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
    public static updateAnimalAnimalIdPatch(
        animalId: number,
        requestBody: AnimalUpdate,
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

    /**
     * Get By Brinco
     * @param brinco
     * @returns AnimalSchema Successful Response
     * @throws ApiError
     */
    public static getByBrincoAnimalBrincoGet(
        brinco: string,
    ): CancelablePromise<AnimalSchema> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/animal/{brinco}',
            path: {
                'brinco': brinco,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get By Chip
     * @param chip
     * @returns AnimalSchema Successful Response
     * @throws ApiError
     */
    public static getByChipAnimalChipGet(
        chip: string,
    ): CancelablePromise<AnimalSchema> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/animal/{chip}',
            path: {
                'chip': chip,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

}
