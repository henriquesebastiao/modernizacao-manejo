/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RacaCreateSchema } from '../models/RacaCreateSchema';
import type { RacaSchema } from '../models/RacaSchema';
import type { RacaUpdateSchema } from '../models/RacaUpdateSchema';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class RacaService {

    /**
     * Get All Racas
     * Retorna todos os animais.
     * @returns RacaSchema Successful Response
     * @throws ApiError
     */
    public static getAllRacasRacaGet(): CancelablePromise<Array<RacaSchema>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/raca/',
        });
    }

    /**
     * Create Raca
     * Cria um raca.
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static createRacaRacaPost(
        requestBody: RacaCreateSchema,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/raca/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get Raca
     * Retorna um raca com base no seu ID.
     * @param racaId
     * @returns RacaSchema Successful Response
     * @throws ApiError
     */
    public static getRacaRacaRacaIdGet(
        racaId: number,
    ): CancelablePromise<RacaSchema> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/raca/{raca_id}',
            path: {
                'raca_id': racaId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Delete Raca
     * Deleta um raca.
     * @param racaId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static deleteRacaRacaRacaRacaIdDelete(
        racaId: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/raca/raca/{raca_id}',
            path: {
                'raca_id': racaId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Update Raca
     * Atualiza um raca.
     * @param racaId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static updateRacaRacaRacaRacaIdPatch(
        racaId: number,
        requestBody: RacaUpdateSchema,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/raca/raca/{raca_id}',
            path: {
                'raca_id': racaId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

}
