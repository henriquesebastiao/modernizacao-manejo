/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserCreateSchema } from '../models/UserCreateSchema';
import type { UserLoginSchema } from '../models/UserLoginSchema';
import type { UserSchema } from '../models/UserSchema';
import type { UserUpdateSchema } from '../models/UserUpdateSchema';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UserService {

    /**
     * Get All
     * @returns UserSchema Successful Response
     * @throws ApiError
     */
    public static getAllUserGet(): CancelablePromise<Array<UserSchema>> {
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
        requestBody: UserCreateSchema,
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
     * @returns UserSchema Successful Response
     * @throws ApiError
     */
    public static getUserIdGet(
        userId: number,
    ): CancelablePromise<UserSchema> {
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
        requestBody: UserUpdateSchema,
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
        requestBody: UserLoginSchema,
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
