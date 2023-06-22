/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RacaCreate } from '../models/RacaCreate';
import type { RacaSchema } from '../models/RacaSchema';
import type { RacaUpdate } from '../models/RacaUpdate';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class RacaService {

    /**
     * Get All
     * @returns RacaSchema Successful Response
     * @throws ApiError
     */
    public static getAllRacaGet(): CancelablePromise<Array<RacaSchema>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/raca/',
        });
    }

    /**
     * Create
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static createRacaPost(
        requestBody: RacaCreate,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/raca/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get By Id
     * @param racaId
     * @returns RacaSchema Successful Response
     * @throws ApiError
     */
    public static getByIdRacaRacaIdGet(
        racaId: number,
    ): CancelablePromise<RacaSchema> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/raca/{raca_id}',
            path: {
                'raca_id': racaId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Delete
     * @param racaId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static deleteRacaRacaIdDelete(
        racaId: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/raca/{raca_id}',
            path: {
                'raca_id': racaId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Update
     * @param racaId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static updateRacaRacaIdPatch(
        racaId: number,
        requestBody: RacaUpdate,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/raca/{raca_id}',
            path: {
                'raca_id': racaId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

}
