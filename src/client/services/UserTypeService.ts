/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserTypeCreate } from '../models/UserTypeCreate';
import type { UserTypeSchema } from '../models/UserTypeSchema';
import type { UserTypeUpdate } from '../models/UserTypeUpdate';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UserTypeService {
	/**
	 * Get All
	 * @returns UserTypeSchema Successful Response
	 * @throws ApiError
	 */
	public static userTypeGetAll(): CancelablePromise<Array<UserTypeSchema>> {
		return __request(OpenAPI, {
			method: 'GET',
			url: '/user/type/'
		});
	}

	/**
	 * Create
	 * @param requestBody
	 * @returns UserTypeSchema Successful Response
	 * @throws ApiError
	 */
	public static userTypeCreate(requestBody: UserTypeCreate): CancelablePromise<UserTypeSchema> {
		return __request(OpenAPI, {
			method: 'POST',
			url: '/user/type/',
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`
			}
		});
	}

	/**
	 * Get By
	 * @param userTypeId
	 * @returns UserTypeSchema Successful Response
	 * @throws ApiError
	 */
	public static userTypeGetBy(userTypeId: number): CancelablePromise<UserTypeSchema> {
		return __request(OpenAPI, {
			method: 'GET',
			url: '/user/type/{user_type_id}',
			path: {
				user_type_id: userTypeId
			},
			errors: {
				422: `Validation Error`
			}
		});
	}

	/**
	 * Delete
	 * @param userTypeId
	 * @returns UserTypeSchema Successful Response
	 * @throws ApiError
	 */
	public static userTypeDelete(userTypeId: number): CancelablePromise<UserTypeSchema> {
		return __request(OpenAPI, {
			method: 'DELETE',
			url: '/user/type/{user_type_id}',
			path: {
				user_type_id: userTypeId
			},
			errors: {
				422: `Validation Error`
			}
		});
	}

	/**
	 * Update
	 * @param userTypeId
	 * @param requestBody
	 * @returns UserTypeSchema Successful Response
	 * @throws ApiError
	 */
	public static userTypeUpdate(
		userTypeId: number,
		requestBody: UserTypeUpdate
	): CancelablePromise<UserTypeSchema> {
		return __request(OpenAPI, {
			method: 'PATCH',
			url: '/user/type/{user_type_id}',
			path: {
				user_type_id: userTypeId
			},
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`
			}
		});
	}
}
