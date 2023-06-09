/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LoteCreateSchema } from '../models/LoteCreateSchema';
import type { LoteSchema } from '../models/LoteSchema';
import type { LoteUpdateSchema } from '../models/LoteUpdateSchema';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class LoteService {

    /**
     * Get All Lotes
     * Retorna todos os animais.
     * @returns LoteSchema Successful Response
     * @throws ApiError
     */
    public static getAllLotesLoteGet(): CancelablePromise<Array<LoteSchema>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/lote/',
        });
    }

    /**
     * Create Lote
     * Cria um lote.
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static createLoteLotePost(
        requestBody: LoteCreateSchema,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/lote/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get Lote
     * Retorna um lote com base no seu ID.
     * @param loteId
     * @returns LoteSchema Successful Response
     * @throws ApiError
     */
    public static getLoteLoteLoteIdGet(
        loteId: number,
    ): CancelablePromise<LoteSchema> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/lote/{lote_id}',
            path: {
                'lote_id': loteId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Delete Lote
     * Deleta um lote.
     * @param loteId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static deleteLoteLoteLoteLoteIdDelete(
        loteId: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/lote/lote/{lote_id}',
            path: {
                'lote_id': loteId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Update Lote
     * Atualiza um lote.
     * @param loteId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static updateLoteLoteLoteLoteIdPatch(
        loteId: number,
        requestBody: LoteUpdateSchema,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/lote/lote/{lote_id}',
            path: {
                'lote_id': loteId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

}
