/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AnimalWeightTypeSchema } from '../models/AnimalWeightTypeSchema';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AnimalWeightTypeService {
	/**
	 * Get All
	 * Retorna todos os tipos de peso de animal.
	 * @returns any Successful Response
	 * @throws ApiError
	 */
	public static animalWeightTypeGetAll(): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: 'GET',
			url: '/animal/weight/type/'
		});
	}

	/**
	 * Create
	 * Adiciona um novo tipo de peso de animal.
	 *
	 * - **name (str)**: Nome do tipo de peso de animal.
	 * @param requestBody
	 * @returns any Successful Response
	 * @throws ApiError
	 */
	public static animalWeightTypeCreate(
		requestBody: AnimalWeightTypeSchema
	): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: 'POST',
			url: '/animal/weight/type/',
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`
			}
		});
	}

	/**
	 * Get By
	 * Retorna um tipo de peso de animal pelo seu ID.
	 * @param animalWeightTypeId
	 * @returns any Successful Response
	 * @throws ApiError
	 */
	public static animalWeightTypeGetBy(animalWeightTypeId: number): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: 'GET',
			url: '/animal/weight/type/{animal_weight_type_id}',
			path: {
				animal_weight_type_id: animalWeightTypeId
			},
			errors: {
				422: `Validation Error`
			}
		});
	}

	/**
	 * Update
	 * Atualiza um tipo de peso de animal com base no seu ID.
	 *
	 * - **name (str)**: Nome do tipo de peso de animal.
	 * @param animalWeightTypeId
	 * @param requestBody
	 * @returns any Successful Response
	 * @throws ApiError
	 */
	public static animalWeightTypeUpdate(
		animalWeightTypeId: number,
		requestBody: AnimalWeightTypeSchema
	): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: 'PATCH',
			url: '/animal/weight/type/{animal_weight_type_id}',
			path: {
				animal_weight_type_id: animalWeightTypeId
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
	 * Deleta um tipo de peso de animal com base no seu ID.
	 * @param animalWeightTypeId
	 * @returns any Successful Response
	 * @throws ApiError
	 */
	public static animalWeightTypeDelete(animalWeightTypeId: number): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: 'DELETE',
			url: '/animal/weight/type/{animal_weight_type_id}',
			path: {
				animal_weight_type_id: animalWeightTypeId
			},
			errors: {
				422: `Validation Error`
			}
		});
	}
}
