/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FarmerSchema } from '../models/FarmerSchema';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class FarmerService {

    /**
     * Get All
     * @returns any Successful Response
     * @throws ApiError
     */
    public static farmerGetAll(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/farmer/',
        });
    }

    /**
     * Create
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static farmerCreate(
        requestBody: FarmerSchema,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/farmer/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get By
     * @param farmerId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static farmerGetBy(
        farmerId: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/farmer/{farmer_id}',
            path: {
                'farmer_id': farmerId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Delete
     * @param farmerId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static farmerDelete(
        farmerId: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/farmer/{farmer_id}',
            path: {
                'farmer_id': farmerId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Update
     * @param farmerPlanId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static farmerUpdate(
        farmerPlanId: number,
        requestBody: FarmerSchema,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/farmer/{farmer_plan_id}',
            path: {
                'farmer_plan_id': farmerPlanId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

}
