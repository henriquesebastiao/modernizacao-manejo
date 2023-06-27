/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class RootService {
	/**
	 * Root
	 * Rota principal.
	 * @returns any Successful Response
	 * @throws ApiError
	 */
	public static rootRoot(): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: 'GET',
			url: '/'
		});
	}
}
