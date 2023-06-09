/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FazendaCreateSchema } from '../models/FazendaCreateSchema';
import type { FazendaSchema } from '../models/FazendaSchema';
import type { FazendaUpdateSchema } from '../models/FazendaUpdateSchema';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class FazendaService {

    /**
     * Get All Fazendas
     * Retorna todos os animais.
     * @returns FazendaSchema Successful Response
     * @throws ApiError
     */
    public static getAllFazendasFazendaGet(): CancelablePromise<Array<FazendaSchema>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/fazenda/',
        });
    }

    /**
     * Create Fazenda
     * Cria um fazenda.
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static createFazendaFazendaPost(
        requestBody: FazendaCreateSchema,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/fazenda/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get Fazenda
     * Retorna um fazenda com base no seu ID.
     * @param fazendaId
     * @returns FazendaSchema Successful Response
     * @throws ApiError
     */
    public static getFazendaFazendaFazendaIdGet(
        fazendaId: number,
    ): CancelablePromise<FazendaSchema> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/fazenda/{fazenda_id}',
            path: {
                'fazenda_id': fazendaId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Delete Fazenda
     * Deleta um fazenda.
     * @param fazendaId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static deleteFazendaFazendaFazendaFazendaIdDelete(
        fazendaId: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/fazenda/fazenda/{fazenda_id}',
            path: {
                'fazenda_id': fazendaId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Update Fazenda
     * Atualiza um fazenda.
     * @param fazendaId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static updateFazendaFazendaFazendaFazendaIdPatch(
        fazendaId: number,
        requestBody: FazendaUpdateSchema,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/fazenda/fazenda/{fazenda_id}',
            path: {
                'fazenda_id': fazendaId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

}
