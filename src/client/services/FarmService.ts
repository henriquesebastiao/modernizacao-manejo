/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FarmSchema } from '../models/FarmSchema';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class FarmService {
	/**
	 * Get All
	 * @returns any Successful Response
	 * @throws ApiError
	 */
	public static farmGetAll(): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: 'GET',
			url: '/farm/'
		});
	}

	/**
	 * Create
	 * @param requestBody
	 * @returns any Successful Response
	 * @throws ApiError
	 */
	public static farmCreate(requestBody: FarmSchema): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: 'POST',
			url: '/farm/',
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`
			}
		});
	}

	/**
	 * Get By
	 * @param farmId
	 * @returns any Successful Response
	 * @throws ApiError
	 */
	public static farmGetBy(farmId: number): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: 'GET',
			url: '/farm/{farm_id}',
			path: {
				farm_id: farmId
			},
			errors: {
				422: `Validation Error`
			}
		});
	}

	/**
	 * Delete
	 * @param farmId
	 * @returns any Successful Response
	 * @throws ApiError
	 */
	public static farmDelete(farmId: number): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: 'DELETE',
			url: '/farm/{farm_id}',
			path: {
				farm_id: farmId
			},
			errors: {
				422: `Validation Error`
			}
		});
	}

	/**
	 * Update
	 * @param farmId
	 * @param requestBody
	 * @returns any Successful Response
	 * @throws ApiError
	 */
	public static farmUpdate(farmId: number, requestBody: FarmSchema): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: 'PATCH',
			url: '/farm/{farm_id}',
			path: {
				farm_id: farmId
			},
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`
			}
		});
	}
}
