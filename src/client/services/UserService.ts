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
	 * Retorna todos os usuários cadastrados no banco de dados.
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
	 * Registra um usuário no banco de dados
	 *
	 * - **first_name (str)**: Nome do usuário
	 * - **last_name (str)**: Sobrenome do usuário
	 * - **phone (str)**: Telefone do usuário
	 * - **email (str)**: Email do usuário
	 * - **password (str)**: Senha do usuário
	 * - **create_at (datetime)**: Data de criação do usuário
	 * - **update_at (datetime)**: Data de atualização do usuário
	 * - **active (bool)**: Status do usuário
	 * - **user_type_id (int)**: Tipo de usuário
	 * - **manager_id (int)**: ID do gerente do usuário
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
	 * Update
	 * Atualiza um usuário no banco de dados
	 *
	 * - **first_name (str)**: Nome do usuário
	 * - **last_name (str)**: Sobrenome do usuário
	 * - **email (str)**: Email do usuário
	 * - **phone (str)**: Telefone do usuário
	 * - **password (str)**: Senha do usuário
	 * - **active (bool)**: Status do usuário
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
	 * Delete
	 * Deleta um usuário do banco de dados.
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
	 * Read Users Me
	 * @returns UserSchema Successful Response
	 * @throws ApiError
	 */
	public static userReadUsersMe(): CancelablePromise<UserSchema> {
		return __request(OpenAPI, {
			method: 'GET',
			url: '/user/me'
		});
	}

	/**
	 * Read Own Items
	 * @returns any Successful Response
	 * @throws ApiError
	 */
	public static userReadOwnItems(): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: 'GET',
			url: '/user/me/items/'
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
