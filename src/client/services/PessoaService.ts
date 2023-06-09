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
     * Get All Pessoas
     * Retorna todos os animais.
     * @returns PessoaSchema Successful Response
     * @throws ApiError
     */
    public static getAllPessoasPessoaGet(): CancelablePromise<Array<PessoaSchema>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/pessoa/',
        });
    }

    /**
     * Create Pessoa
     * Cria um pessoa.
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static createPessoaPessoaPost(
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
     * Get Pessoa
     * Retorna um pessoa com base no seu ID.
     * @param pessoaId
     * @returns PessoaSchema Successful Response
     * @throws ApiError
     */
    public static getPessoaPessoaPessoaIdGet(
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
     * Delete Pessoa
     * Deleta um pessoa.
     * @param pessoaId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static deletePessoaPessoaPessoaPessoaIdDelete(
        pessoaId: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/pessoa/pessoa/{pessoa_id}',
            path: {
                'pessoa_id': pessoaId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Update Pessoa
     * Atualiza um pessoa.
     * @param pessoaId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static updatePessoaPessoaPessoaPessoaIdPatch(
        pessoaId: number,
        requestBody: PessoaUpdateSchema,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/pessoa/pessoa/{pessoa_id}',
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
