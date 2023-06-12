/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UsuarioCreateSchema } from '../models/UsuarioCreateSchema';
import type { UsuarioLoginSchema } from '../models/UsuarioLoginSchema';
import type { UsuarioSchema } from '../models/UsuarioSchema';
import type { UsuarioUpdateSchema } from '../models/UsuarioUpdateSchema';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UserService {

    /**
     * Get All
     * @returns UsuarioSchema Successful Response
     * @throws ApiError
     */
    public static getAllUserGet(): CancelablePromise<Array<UsuarioSchema>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/',
        });
    }

    /**
     * Create
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static createUserPost(
        requestBody: UsuarioCreateSchema,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get
     * @param userId
     * @returns UsuarioSchema Successful Response
     * @throws ApiError
     */
    public static getUserIdGet(
        userId: number,
    ): CancelablePromise<UsuarioSchema> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/{id}',
            query: {
                'user_id': userId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Delete
     * @param userId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static deleteUserIdDelete(
        userId: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/user/{id}',
            query: {
                'user_id': userId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Update
     * @param userId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static updateUserIdPatch(
        userId: number,
        requestBody: UsuarioUpdateSchema,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/user/{id}',
            query: {
                'user_id': userId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Login
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static loginUserLoginPost(
        requestBody: UsuarioLoginSchema,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user/login',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

}
