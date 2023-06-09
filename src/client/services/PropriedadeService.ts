/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PropriedadeCreateSchema } from '../models/PropriedadeCreateSchema';
import type { PropriedadeSchema } from '../models/PropriedadeSchema';
import type { PropriedadeUpdateSchema } from '../models/PropriedadeUpdateSchema';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class PropriedadeService {

    /**
     * Get All Propriedades
     * Retorna todos os animais.
     * @returns PropriedadeSchema Successful Response
     * @throws ApiError
     */
    public static getAllPropriedadesPropriedadeGet(): CancelablePromise<Array<PropriedadeSchema>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/propriedade/',
        });
    }

    /**
     * Create Propriedade
     * Cria um propriedade.
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static createPropriedadePropriedadePost(
        requestBody: PropriedadeCreateSchema,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/propriedade/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get Propriedade
     * Retorna um propriedade com base no seu ID.
     * @param propriedadeId
     * @returns PropriedadeSchema Successful Response
     * @throws ApiError
     */
    public static getPropriedadePropriedadePropriedadeIdGet(
        propriedadeId: number,
    ): CancelablePromise<PropriedadeSchema> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/propriedade/{propriedade_id}',
            path: {
                'propriedade_id': propriedadeId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Delete Propriedade
     * Deleta um propriedade.
     * @param propriedadeId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static deletePropriedadePropriedadePropriedadePropriedadeIdDelete(
        propriedadeId: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/propriedade/propriedade/{propriedade_id}',
            path: {
                'propriedade_id': propriedadeId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Update Propriedade
     * Atualiza um propriedade.
     * @param propriedadeId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static updatePropriedadePropriedadePropriedadePropriedadeIdPatch(
        propriedadeId: number,
        requestBody: PropriedadeUpdateSchema,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/propriedade/propriedade/{propriedade_id}',
            path: {
                'propriedade_id': propriedadeId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

}
