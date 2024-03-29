/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EmploymentPositionSchema } from '../models/EmploymentPositionSchema';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class EmploymentPositionService {
	/**
	 * Get All
	 * Retorna todos os cargos.
	 * @returns any Successful Response
	 * @throws ApiError
	 */
	public static employmentPositionGetAll(): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: 'GET',
			url: '/employment/position/'
		});
	}

	/**
	 * Create
	 * Adiciona um novo cargo
	 *
	 * - **name (str)**: Nome do cargo
	 * @param requestBody
	 * @returns any Successful Response
	 * @throws ApiError
	 */
	public static employmentPositionCreate(
		requestBody: EmploymentPositionSchema
	): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: 'POST',
			url: '/employment/position/',
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`
			}
		});
	}

	/**
	 * Get By
	 * Retorna um cargo pelo seu ID.
	 * @param employmentPositionId
	 * @returns any Successful Response
	 * @throws ApiError
	 */
	public static employmentPositionGetBy(employmentPositionId: number): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: 'GET',
			url: '/employment/position/{employment_position_id}',
			path: {
				employment_position_id: employmentPositionId
			},
			errors: {
				422: `Validation Error`
			}
		});
	}

	/**
	 * Update
	 * Atualiza um cargo
	 *
	 * - **name (str)**: Nome do cargo
	 * @param employmentPositionId
	 * @param requestBody
	 * @returns any Successful Response
	 * @throws ApiError
	 */
	public static employmentPositionUpdate(
		employmentPositionId: number,
		requestBody: EmploymentPositionSchema
	): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: 'PATCH',
			url: '/employment/position/{employment_position_id}',
			path: {
				employment_position_id: employmentPositionId
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
	 * Deleta um cargo pelo seu ID.
	 * @param employmentPositionId
	 * @returns any Successful Response
	 * @throws ApiError
	 */
	public static employmentPositionDelete(employmentPositionId: number): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: 'DELETE',
			url: '/employment/position/{employment_position_id}',
			path: {
				employment_position_id: employmentPositionId
			},
			errors: {
				422: `Validation Error`
			}
		});
	}
}
