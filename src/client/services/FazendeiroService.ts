/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FazendeiroCreateSchema } from '../models/FazendeiroCreateSchema';
import type { FazendeiroSchema } from '../models/FazendeiroSchema';
import type { FazendeiroUpdateSchema } from '../models/FazendeiroUpdateSchema';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class FazendeiroService {

    /**
     * Get All Cargos
     * Retorna todos os animais.
     * @returns FazendeiroSchema Successful Response
     * @throws ApiError
     */
    public static getAllCargosFazendeiroGet(): CancelablePromise<Array<FazendeiroSchema>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/fazendeiro/',
        });
    }

    /**
     * Create Cargo
     * Cria um cargo.
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static createCargoFazendeiroPost(
        requestBody: FazendeiroCreateSchema,
    ): CancelablePromise<any> {
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
     * Get Cargo
     * Retorna um cargo com base no seu ID.
     * @param cargoId
     * @returns FazendeiroSchema Successful Response
     * @throws ApiError
     */
    public static getCargoFazendeiroCargoIdGet(
        cargoId: number,
    ): CancelablePromise<FazendeiroSchema> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/fazendeiro/{cargo_id}',
            path: {
                'cargo_id': cargoId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Delete Cargo
     * Deleta um cargo.
     * @param cargoId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static deleteCargoFazendeiroCargoCargoIdDelete(
        cargoId: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/fazendeiro/cargo/{cargo_id}',
            path: {
                'cargo_id': cargoId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Update Cargo
     * Atualiza um cargo.
     * @param cargoId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static updateCargoFazendeiroCargoCargoIdPatch(
        cargoId: number,
        requestBody: FazendeiroUpdateSchema,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/fazendeiro/cargo/{cargo_id}',
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
