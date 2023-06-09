/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PesoLogCreateSchema } from '../models/PesoLogCreateSchema';
import type { PesoLogSchema } from '../models/PesoLogSchema';
import type { PesoLogUpdateSchema } from '../models/PesoLogUpdateSchema';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class PesoLogService {

    /**
     * Get All Peso Logs
     * Retorna todos os animais.
     * @returns PesoLogSchema Successful Response
     * @throws ApiError
     */
    public static getAllPesoLogsPesoLogGet(): CancelablePromise<Array<PesoLogSchema>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/peso_log/',
        });
    }

    /**
     * Create Peso Log
     * Cria um peso_log.
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static createPesoLogPesoLogPost(
        requestBody: PesoLogCreateSchema,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/peso_log/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get Peso Log
     * Retorna um peso_log com base no seu ID.
     * @param pesoLogId
     * @returns PesoLogSchema Successful Response
     * @throws ApiError
     */
    public static getPesoLogPesoLogPesoLogIdGet(
        pesoLogId: number,
    ): CancelablePromise<PesoLogSchema> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/peso_log/{peso_log_id}',
            path: {
                'peso_log_id': pesoLogId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Delete Peso Log
     * Deleta um peso_log.
     * @param pesoLogId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static deletePesoLogPesoLogPesoLogPesoLogIdDelete(
        pesoLogId: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/peso_log/peso_log/{peso_log_id}',
            path: {
                'peso_log_id': pesoLogId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Update Peso Log
     * Atualiza um peso_log.
     * @param pesoLogId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static updatePesoLogPesoLogPesoLogPesoLogIdPatch(
        pesoLogId: number,
        requestBody: PesoLogUpdateSchema,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/peso_log/peso_log/{peso_log_id}',
            path: {
                'peso_log_id': pesoLogId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

}
