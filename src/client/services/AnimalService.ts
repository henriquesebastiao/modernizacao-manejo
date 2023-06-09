/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AnimalCreateSchema } from '../models/AnimalCreateSchema';
import type { AnimalSchema } from '../models/AnimalSchema';
import type { AnimalUpdateSchema } from '../models/AnimalUpdateSchema';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AnimalService {

    /**
     * Get All Animals
     * Retorna todos os animais.
     * @returns AnimalSchema Successful Response
     * @throws ApiError
     */
    public static getAllAnimalsAnimalGet(): CancelablePromise<Array<AnimalSchema>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/animal/',
        });
    }

    /**
     * Create Animal
     * Cria um animal.
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static createAnimalAnimalPost(
        requestBody: AnimalCreateSchema,
    ): CancelablePromise<any> {
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
     * Get Animal By Id
     * Retorna um animal com base no seu ID.
     * @param animalId
     * @returns AnimalSchema Successful Response
     * @throws ApiError
     */
    public static getAnimalByIdAnimalAnimalIdGet(
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
     * Get Animal By Brinco
     * Retorna um animal com base no seu ID.
     * @param brinco
     * @returns AnimalSchema Successful Response
     * @throws ApiError
     */
    public static getAnimalByBrincoAnimalBrincoGet(
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
     * Get Animal By Chip
     * Retorna um animal com base no seu ID.
     * @param chip
     * @returns AnimalSchema Successful Response
     * @throws ApiError
     */
    public static getAnimalByChipAnimalChipGet(
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

    /**
     * Delete Animal
     * Deleta um animal.
     * @param animalId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static deleteAnimalAnimalAnimalAnimalIdDelete(
        animalId: number,
    ): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/animal/animal/{animal_id}',
            path: {
                'animal_id': animalId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Update Animal
     * Atualiza um animal.
     * @param animalId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static updateAnimalAnimalAnimalAnimalIdPatch(
        animalId: number,
        requestBody: AnimalUpdateSchema,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/animal/animal/{animal_id}',
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
