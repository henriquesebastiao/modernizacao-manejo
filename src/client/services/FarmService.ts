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
	 * Retorna todas as fazendas.
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
	 * Adiciona uma nova fazenda
	 *
	 * - **name (str)**: Nome da fazenda
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
	 * Retorna uma fazenda pelo seu ID.
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
	 * Update
	 * Atualiza uma fazenda pelo seu ID.
	 *
	 * - **name (str)**: Nome da fazenda
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

	/**
	 * Delete
	 * Deleta uma fazenda pelo seu ID.
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
}
