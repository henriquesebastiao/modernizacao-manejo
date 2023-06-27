/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Body_Token_login_for_access_token } from '../models/Body_Token_login_for_access_token';
import type { Token } from '../models/Token';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class TokenService {
	/**
	 * Login For Access Token
	 * Cria o token de acesso para o usuário se autenticar
	 * @param formData
	 * @returns Token Successful Response
	 * @throws ApiError
	 */
	public static tokenLoginForAccessToken(
		formData: Body_Token_login_for_access_token
	): CancelablePromise<Token> {
		return __request(OpenAPI, {
			method: 'POST',
			url: '/token',
			formData: formData,
			mediaType: 'application/x-www-form-urlencoded',
			errors: {
				422: `Validation Error`
			}
		});
	}
}
