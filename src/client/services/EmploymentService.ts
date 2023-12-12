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
	 * Retorna todos os funcionários.
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
	 * Adiciona um novo funcionário
	 *
	 * - **user_id (int)**: ID do usuário
	 * - **farmer_id (int)**: ID do produtor
	 * - **farm_id (int)**: ID da fazenda
	 * - **employment_position_id (int)**: ID do cargo
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
	 * Retorna um funcionário pelo ID.
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
	 * Update
	 * Atualiza um funcionário
	 *
	 * - **user_id (int)**: ID do usuário
	 * - **farmer_id (int)**: ID do produtor
	 * - **farm_id (int)**: ID da fazenda
	 * - **employment_position_id (int)**: ID do cargo
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

	/**
	 * Delete
	 * Deleta um funcionário pelo ID.
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
}
