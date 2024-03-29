/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BreedSchema } from '../models/BreedSchema';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AnimalBreedService {
	/**
	 * Get All
	 * Retorna todas as raças de animais.
	 * @returns any Successful Response
	 * @throws ApiError
	 */
	public static animalBreedGetAll(): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: 'GET',
			url: '/animal/breed/'
		});
	}

	/**
	 * Create
	 * Adiciona uma nova raça de animal
	 *
	 * - **name (str)**: Nome da raça
	 * @param requestBody
	 * @returns any Successful Response
	 * @throws ApiError
	 */
	public static animalBreedCreate(requestBody: BreedSchema): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: 'POST',
			url: '/animal/breed/',
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`
			}
		});
	}

	/**
	 * Get By
	 * Retorna uma raça de animal pelo seu ID.
	 * @param breedId
	 * @returns any Successful Response
	 * @throws ApiError
	 */
	public static animalBreedGetBy(breedId: number): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: 'GET',
			url: '/animal/breed/{breed_id}',
			path: {
				breed_id: breedId
			},
			errors: {
				422: `Validation Error`
			}
		});
	}

	/**
	 * Update
	 * Atualiza uma raça de animal pelo seu ID.
	 *
	 * - **name (str)**: Nome da raça
	 * @param breedId
	 * @param requestBody
	 * @returns any Successful Response
	 * @throws ApiError
	 */
	public static animalBreedUpdate(
		breedId: number,
		requestBody: BreedSchema
	): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: 'PATCH',
			url: '/animal/breed/{breed_id}',
			path: {
				breed_id: breedId
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
	 * Deleta uma raça de animal pelo seu ID.
	 * @param breedId
	 * @returns any Successful Response
	 * @throws ApiError
	 */
	public static animalBreedDelete(breedId: number): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: 'DELETE',
			url: '/animal/breed/{breed_id}',
			path: {
				breed_id: breedId
			},
			errors: {
				422: `Validation Error`
			}
		});
	}
}
