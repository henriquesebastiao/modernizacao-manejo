/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CargoCreate } from '../models/CargoCreate';
import type { CargoSchema } from '../models/CargoSchema';
import type { CargoUpdate } from '../models/CargoUpdate';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class CargoService {

    /**
     * Get All
     * @returns CargoSchema Successful Response
     * @throws ApiError
     */
    public static getAllCargoGet(): CancelablePromise<Array<CargoSchema>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/cargo/',
        });
    }

    /**
     * Create
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static createCargoPost(
        requestBody: CargoCreate,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/cargo/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get By Id
     * @param cargoId
     * @returns CargoSchema Successful Response
     * @throws ApiError
     */
    public static getByIdCargoCargoIdGet(
        cargoId: number,
    ): CancelablePromise<CargoSchema> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/cargo/{cargo_id}',
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
    public static deleteCargoCargoIdDelete(
        cargoId: number,
    ): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/cargo/{cargo_id}',
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
    public static updateCargoCargoIdPatch(
        cargoId: number,
        requestBody: CargoUpdate,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/cargo/{cargo_id}',
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
