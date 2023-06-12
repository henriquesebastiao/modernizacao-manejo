/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PessoaCreateSchema } from '../models/PessoaCreateSchema';
import type { PessoaSchema } from '../models/PessoaSchema';
import type { PessoaUpdateSchema } from '../models/PessoaUpdateSchema';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class PessoaService {

    /**
     * Get All
     * @returns PessoaSchema Successful Response
     * @throws ApiError
     */
    public static getAllPessoaGet(): CancelablePromise<Array<PessoaSchema>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/pessoa/',
        });
    }

    /**
     * Create
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static createPessoaPost(
        requestBody: PessoaCreateSchema,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/pessoa/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get
     * @param pessoaId
     * @returns PessoaSchema Successful Response
     * @throws ApiError
     */
    public static getPessoaPessoaIdGet(
        pessoaId: number,
    ): CancelablePromise<PessoaSchema> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/pessoa/{pessoa_id}',
            path: {
                'pessoa_id': pessoaId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Delete
     * @param pessoaId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static deletePessoaPessoaIdDelete(
        pessoaId: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/pessoa/{pessoa_id}',
            path: {
                'pessoa_id': pessoaId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Update
     * @param pessoaId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static updatePessoaPessoaIdPatch(
        pessoaId: number,
        requestBody: PessoaUpdateSchema,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/pessoa/{pessoa_id}',
            path: {
                'pessoa_id': pessoaId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

}
