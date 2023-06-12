/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DietaCreateSchema } from '../models/DietaCreateSchema';
import type { DietaSchema } from '../models/DietaSchema';
import type { DietaUpdateSchema } from '../models/DietaUpdateSchema';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class DietaService {

    /**
     * Get All
     * @returns DietaSchema Successful Response
     * @throws ApiError
     */
    public static getAllDietaGet(): CancelablePromise<Array<DietaSchema>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/dieta/',
        });
    }

    /**
     * Create
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static createDietaPost(
        requestBody: DietaCreateSchema,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/dieta/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get
     * @param dietaId
     * @returns DietaSchema Successful Response
     * @throws ApiError
     */
    public static getDietaDietaIdGet(
        dietaId: number,
    ): CancelablePromise<DietaSchema> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/dieta/{dieta_id}',
            path: {
                'dieta_id': dietaId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Delete
     * @param dietaId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static deleteDietaDietaIdDelete(
        dietaId: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/dieta/{dieta_id}',
            path: {
                'dieta_id': dietaId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Update
     * @param dietaId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static updateDietaDietaIdPatch(
        dietaId: number,
        requestBody: DietaUpdateSchema,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/dieta/{dieta_id}',
            path: {
                'dieta_id': dietaId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

}
