/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UsuarioCreateSchema } from '../models/UsuarioCreateSchema';
import type { UsuarioSchema } from '../models/UsuarioSchema';
import type { UsuarioUpdateSchema } from '../models/UsuarioUpdateSchema';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UsuRioService {

    /**
     * Get All Usuarios
     * Retorna todos os animais.
     * @returns UsuarioSchema Successful Response
     * @throws ApiError
     */
    public static getAllUsuariosUsuarioGet(): CancelablePromise<Array<UsuarioSchema>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/usuario/',
        });
    }

    /**
     * Create Usuario
     * Cria um usuário.
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static createUsuarioUsuarioPost(
        requestBody: UsuarioCreateSchema,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/usuario/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get Usuario
     * Retorna um usuário com base no seu ID.
     * @param usuarioId
     * @returns UsuarioSchema Successful Response
     * @throws ApiError
     */
    public static getUsuarioUsuarioUsuarioIdGet(
        usuarioId: number,
    ): CancelablePromise<UsuarioSchema> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/usuario/{usuario_id}',
            path: {
                'usuario_id': usuarioId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Delete Usuario
     * Deleta um usuário.
     * @param usuarioId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static deleteUsuarioUsuarioUsuarioUsuarioIdDelete(
        usuarioId: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/usuario/usuario/{usuario_id}',
            path: {
                'usuario_id': usuarioId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Update Usuario
     * Atualiza um usuário.
     * @param usuarioId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static updateUsuarioUsuarioUsuarioUsuarioIdPatch(
        usuarioId: number,
        requestBody: UsuarioUpdateSchema,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/usuario/usuario/{usuario_id}',
            path: {
                'usuario_id': usuarioId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

}
