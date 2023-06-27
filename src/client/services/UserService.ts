/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserCreate } from '../models/UserCreate';
import type { UserSchema } from '../models/UserSchema';
import type { UserUpdate } from '../models/UserUpdate';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UserService {
	/**
	 * Get All
	 * @returns any Successful Response
	 * @throws ApiError
	 */
	public static userGetAll(): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: 'GET',
			url: '/user/'
		});
	}

	/**
	 * Create
	 * @param requestBody
	 * @returns UserSchema Successful Response
	 * @throws ApiError
	 */
	public static userCreate(requestBody: UserCreate): CancelablePromise<UserSchema> {
		return __request(OpenAPI, {
			method: 'POST',
			url: '/user/',
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`
			}
		});
	}

	/**
	 * Get By
	 * @param userId
	 * @returns any Successful Response
	 * @throws ApiError
	 */
	public static userGetBy(userId: number): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: 'GET',
			url: '/user/{user_id}',
			path: {
				user_id: userId
			},
			errors: {
				422: `Validation Error`
			}
		});
	}

	/**
	 * Delete
	 * @param userId
	 * @returns any Successful Response
	 * @throws ApiError
	 */
	public static userDelete(userId: number): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: 'DELETE',
			url: '/user/{user_id}',
			path: {
				user_id: userId
			},
			errors: {
				422: `Validation Error`
			}
		});
	}

	/**
	 * Update
	 * @param userId
	 * @param requestBody
	 * @returns any Successful Response
	 * @throws ApiError
	 */
	public static userUpdate(userId: number, requestBody: UserUpdate): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: 'PATCH',
			url: '/user/{user_id}',
			path: {
				user_id: userId
			},
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`
			}
		});
	}

	/**
	 * Read Users Me
	 * @param token
	 * @returns UserSchema Successful Response
	 * @throws ApiError
	 */
	public static userReadUsersMe(token?: string): CancelablePromise<UserSchema> {
		return __request(OpenAPI, {
			method: 'GET',
			url: '/user/me',
			query: {
				token: token
			},
			errors: {
				422: `Validation Error`
			}
		});
	}

	/**
	 * Read Own Items
	 * @param token
	 * @returns any Successful Response
	 * @throws ApiError
	 */
	public static userReadOwnItems(token?: string): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: 'GET',
			url: '/user/me/items/',
			query: {
				token: token
			},
			errors: {
				422: `Validation Error`
			}
		});
	}

	/**
	 * Read System Status
	 * @returns any Successful Response
	 * @throws ApiError
	 */
	public static userReadSystemStatus(): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: 'GET',
			url: '/user/status/'
		});
	}
}
