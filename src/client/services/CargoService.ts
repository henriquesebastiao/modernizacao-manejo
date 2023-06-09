/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CargoCreateSchema } from '../models/CargoCreateSchema';
import type { CargoSchema } from '../models/CargoSchema';
import type { CargoUpdateSchema } from '../models/CargoUpdateSchema';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class CargoService {

    /**
     * Get All Cargos
     * Retorna todos os animais.
     * @returns CargoSchema Successful Response
     * @throws ApiError
     */
    public static getAllCargosCargoGet(): CancelablePromise<Array<CargoSchema>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/cargo/',
        });
    }

    /**
     * Create Cargo
     * Cria um cargo.
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static createCargoCargoPost(
        requestBody: CargoCreateSchema,
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
     * Get Cargo
     * Retorna um cargo com base no seu ID.
     * @param cargoId
     * @returns CargoSchema Successful Response
     * @throws ApiError
     */
    public static getCargoCargoCargoIdGet(
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
     * Delete Cargo
     * Deleta um cargo.
     * @param cargoId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static deleteCargoCargoCargoCargoIdDelete(
        cargoId: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/cargo/cargo/{cargo_id}',
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
    public static updateCargoCargoCargoCargoIdPatch(
        cargoId: number,
        requestBody: CargoUpdateSchema,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/cargo/cargo/{cargo_id}',
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
