/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AnimalCreate } from '../models/AnimalCreate';
import type { AnimalSchema } from '../models/AnimalSchema';
import type { AnimalUpdate } from '../models/AnimalUpdate';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AnimalService {
	/**
	 * Get All
	 * Retorna todos os animais do banco de dados
	 * @returns any Successful Response
	 * @throws ApiError
	 */
	public static animalGetAll(): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: 'GET',
			url: '/animal/'
		});
	}

	/**
	 * Create
	 * Cria um animal no banco de dados
	 *
	 * - **tag (int)**: Tag do animal (brinco ou RFID)
	 * - **sisbov (int)**: Número do SISBOV
	 * - **gender (str)**: Gênero do animal (Macho ou Fêmea)
	 * - **birth_date (date)**: Data de nascimento do animal
	 * - **buy_date (date)**: Data de compra do animal
	 * - **sell_date (date)**: Data de venda do animal
	 * - **breed (str)**: Raça do animal
	 * - **father_tag (int)**: Tag do pai do animal
	 * - **mother_tag (int)**: Tag da mãe do animal
	 * - **origin (str)**: Origem do animal
	 * @param requestBody
	 * @returns AnimalSchema Successful Response
	 * @throws ApiError
	 */
	public static animalCreate(requestBody: AnimalCreate): CancelablePromise<AnimalSchema> {
		return __request(OpenAPI, {
			method: 'POST',
			url: '/animal/',
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				404: `Animal not exists`,
				422: `Validation Error`,
				500: `Internal Server Error`
			}
		});
	}

	/**
	 * Get By
	 * Retorna um animal do banco de dados com base no ID
	 * @param animalId
	 * @returns any Successful Response
	 * @throws ApiError
	 */
	public static animalGetBy(animalId: number): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: 'GET',
			url: '/animal/{animal_id}',
			path: {
				animal_id: animalId
			},
			errors: {
				422: `Validation Error`
			}
		});
	}

	/**
	 * Update
	 * Atualiza um animal no banco de dados com base no ID
	 *
	 * - **animal_id (int)**: ID do animal
	 * - **tag (int)**: Tag do animal (brinco ou RFID)
	 * - **sisbov (int)**: Número do SISBOV
	 * - **gender (str)**: Gênero do animal (Macho ou Fêmea)
	 * - **birth_date (date)**: Data de nascimento do animal
	 * - **buy_date (date)**: Data de compra do animal
	 * - **sell_date (date)**: Data de venda do animal
	 * @param animalId
	 * @param requestBody
	 * @returns any Successful Response
	 * @throws ApiError
	 */
	public static animalUpdate(animalId: number, requestBody: AnimalUpdate): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: 'PATCH',
			url: '/animal/{animal_id}',
			path: {
				animal_id: animalId
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
	 * Deleta um animal do banco de dados com base no ID
	 * @param animalId
	 * @returns any Successful Response
	 * @throws ApiError
	 */
	public static animalDelete(animalId: number): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: 'DELETE',
			url: '/animal/{animal_id}',
			path: {
				animal_id: animalId
			},
			errors: {
				422: `Validation Error`
			}
		});
	}
}
