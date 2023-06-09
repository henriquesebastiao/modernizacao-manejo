/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LoteLogCreateSchema } from '../models/LoteLogCreateSchema';
import type { LoteLogSchema } from '../models/LoteLogSchema';
import type { LoteLogUpdateSchema } from '../models/LoteLogUpdateSchema';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class LoteLogService {

    /**
     * Get All Lote Logs
     * Retorna todos os animais.
     * @returns LoteLogSchema Successful Response
     * @throws ApiError
     */
    public static getAllLoteLogsLoteLogGet(): CancelablePromise<Array<LoteLogSchema>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/lote_log/',
        });
    }

    /**
     * Create Lote Log
     * Cria um lote_log.
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static createLoteLogLoteLogPost(
        requestBody: LoteLogCreateSchema,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/lote_log/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get Lote Log
     * Retorna um lote_log com base no seu ID.
     * @param loteLogId
     * @returns LoteLogSchema Successful Response
     * @throws ApiError
     */
    public static getLoteLogLoteLogLoteLogIdGet(
        loteLogId: number,
    ): CancelablePromise<LoteLogSchema> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/lote_log/{lote_log_id}',
            path: {
                'lote_log_id': loteLogId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Delete Lote Log
     * Deleta um lote_log.
     * @param loteLogId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static deleteLoteLogLoteLogLoteLogLoteLogIdDelete(
        loteLogId: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/lote_log/lote_log/{lote_log_id}',
            path: {
                'lote_log_id': loteLogId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Update Lote Log
     * Atualiza um lote_log.
     * @param loteLogId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static updateLoteLogLoteLogLoteLogLoteLogIdPatch(
        loteLogId: number,
        requestBody: LoteLogUpdateSchema,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/lote_log/lote_log/{lote_log_id}',
            path: {
                'lote_log_id': loteLogId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

}
