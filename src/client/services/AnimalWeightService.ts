/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AnimalWeightSchema } from '../models/AnimalWeightSchema';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AnimalWeightService {
	/**
	 * Get All
	 * Retorna todos os pesos de todos os animais
	 * @returns any Successful Response
	 * @throws ApiError
	 */
	public static animalWeightGetAll(): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: 'GET',
			url: '/animal/weight/'
		});
	}

	/**
	 * Create
	 * Registra um novo peso para um animal
	 *
	 * - **id (int)**: Identificador do peso do animal
	 * - **weight_type_id (int)**: Identificador do tipo de peso
	 * - **animal_id (int)**: Identificador do animal
	 * - **weight (float)**: Peso do animal
	 * - **weight_date (datetime)**: Data da pesagem do animal
	 * @param requestBody
	 * @returns any Successful Response
	 * @throws ApiError
	 */
	public static animalWeightCreate(requestBody: AnimalWeightSchema): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: 'POST',
			url: '/animal/weight/',
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`
			}
		});
	}

	/**
	 * Get By
	 * Retorna um peso de um animal com base no seu identificador
	 * @param animalWeightId
	 * @returns any Successful Response
	 * @throws ApiError
	 */
	public static animalWeightGetBy(animalWeightId: number): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: 'GET',
			url: '/animal/weight/{animal_weight_id}',
			path: {
				animal_weight_id: animalWeightId
			},
			errors: {
				422: `Validation Error`
			}
		});
	}

	/**
	 * Update
	 * Atualiza um peso de um animal com base no seu identificador
	 *
	 * - **id (int)**: Identificador do peso do animal
	 * - **weight_type_id (int)**: Identificador do tipo de peso
	 * - **animal_id (int)**: Identificador do animal
	 * - **weight (float)**: Peso do animal
	 * - **weight_date (datetime)**: Data da pesagem do animal
	 * @param animalWeightId
	 * @param requestBody
	 * @returns any Successful Response
	 * @throws ApiError
	 */
	public static animalWeightUpdate(
		animalWeightId: number,
		requestBody: AnimalWeightSchema
	): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: 'PATCH',
			url: '/animal/weight/{animal_weight_id}',
			path: {
				animal_weight_id: animalWeightId
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
	 * Deleta um peso de um animal com base no seu identificador
	 * @param animalWeightId
	 * @returns any Successful Response
	 * @throws ApiError
	 */
	public static animalWeightDelete(animalWeightId: number): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: 'DELETE',
			url: '/animal/weight/{animal_weight_id}',
			path: {
				animal_weight_id: animalWeightId
			},
			errors: {
				422: `Validation Error`
			}
		});
	}
}
