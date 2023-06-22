/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserTypeSchema } from '../models/UserTypeSchema';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UserTypeService {

    /**
     * Get All
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getAllUserTypeGet(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/type/',
        });
    }

    /**
     * Create
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static createUserTypePost(
        requestBody: UserTypeSchema,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user/type/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get By
     * @param userTypeId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getByUserTypeUserTypeIdGet(
        userTypeId: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/type/{user_type_id}',
            path: {
                'user_type_id': userTypeId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Delete
     * @param userTypeId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static deleteUserTypeUserTypeIdDelete(
        userTypeId: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/user/type/{user_type_id}',
            path: {
                'user_type_id': userTypeId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Update
     * @param userTypeId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static updateUserTypeUserTypeIdPatch(
        userTypeId: number,
        requestBody: UserTypeSchema,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/user/type/{user_type_id}',
            path: {
                'user_type_id': userTypeId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

}
