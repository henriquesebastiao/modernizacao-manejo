/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EmploymentSchema } from '../models/EmploymentSchema';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class EmploymentService {
	/**
	 * Get All
	 * @returns any Successful Response
	 * @throws ApiError
	 */
	public static employmentGetAll(): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: 'GET',
			url: '/employment/'
		});
	}

	/**
	 * Create
	 * @param requestBody
	 * @returns any Successful Response
	 * @throws ApiError
	 */
	public static employmentCreate(requestBody: EmploymentSchema): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: 'POST',
			url: '/employment/',
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`
			}
		});
	}

	/**
	 * Get By
	 * @param employmentId
	 * @returns any Successful Response
	 * @throws ApiError
	 */
	public static employmentGetBy(employmentId: number): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: 'GET',
			url: '/employment/{employment_id}',
			path: {
				employment_id: employmentId
			},
			errors: {
				422: `Validation Error`
			}
		});
	}

	/**
	 * Delete
	 * @param employmentId
	 * @returns any Successful Response
	 * @throws ApiError
	 */
	public static employmentDelete(employmentId: number): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: 'DELETE',
			url: '/employment/{employment_id}',
			path: {
				employment_id: employmentId
			},
			errors: {
				422: `Validation Error`
			}
		});
	}

	/**
	 * Update
	 * @param employmentId
	 * @param requestBody
	 * @returns any Successful Response
	 * @throws ApiError
	 */
	public static employmentUpdate(
		employmentId: number,
		requestBody: EmploymentSchema
	): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: 'PATCH',
			url: '/employment/{employment_id}',
			path: {
				employment_id: employmentId
			},
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`
			}
		});
	}
}
