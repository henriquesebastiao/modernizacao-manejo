/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FarmerCreate } from '../models/FarmerCreate';
import type { FarmerSchema } from '../models/FarmerSchema';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class FarmerService {
	/**
	 * Get All
	 * @returns FarmerSchema Successful Response
	 * @throws ApiError
	 */
	public static farmerGetAll(): CancelablePromise<Array<FarmerSchema>> {
		return __request(OpenAPI, {
			method: 'GET',
			url: '/farmer/'
		});
	}

	/**
	 * Create
	 * @param requestBody
	 * @returns FarmerSchema Successful Response
	 * @throws ApiError
	 */
	public static farmerCreate(requestBody: FarmerCreate): CancelablePromise<FarmerSchema> {
		return __request(OpenAPI, {
			method: 'POST',
			url: '/farmer/',
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`
			}
		});
	}

	/**
	 * Get By
	 * @param farmerId
	 * @returns FarmerSchema Successful Response
	 * @throws ApiError
	 */
	public static farmerGetBy(farmerId: number): CancelablePromise<FarmerSchema> {
		return __request(OpenAPI, {
			method: 'GET',
			url: '/farmer/{farmer_id}',
			path: {
				farmer_id: farmerId
			},
			errors: {
				422: `Validation Error`
			}
		});
	}

	/**
	 * Delete
	 * @param farmerId
	 * @returns FarmerSchema Successful Response
	 * @throws ApiError
	 */
	public static farmerDelete(farmerId: number): CancelablePromise<FarmerSchema> {
		return __request(OpenAPI, {
			method: 'DELETE',
			url: '/farmer/{farmer_id}',
			path: {
				farmer_id: farmerId
			},
			errors: {
				422: `Validation Error`
			}
		});
	}

	/**
	 * Update
	 * @param farmerPlanId
	 * @param requestBody
	 * @returns FarmerSchema Successful Response
	 * @throws ApiError
	 */
	public static farmerUpdate(
		farmerPlanId: number,
		requestBody: FarmerSchema
	): CancelablePromise<FarmerSchema> {
		return __request(OpenAPI, {
			method: 'PATCH',
			url: '/farmer/{farmer_plan_id}',
			path: {
				farmer_plan_id: farmerPlanId
			},
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`
			}
		});
	}
}
