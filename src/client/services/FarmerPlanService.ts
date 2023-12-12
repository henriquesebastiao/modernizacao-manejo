/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FarmerPlanSchema } from '../models/FarmerPlanSchema';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class FarmerPlanService {
	/**
	 * Get All
	 * Retorna todos os planos de assinatura.
	 * @returns any Successful Response
	 * @throws ApiError
	 */
	public static farmerPlanGetAll(): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: 'GET',
			url: '/farmer/plan/'
		});
	}

	/**
	 * Create
	 * Adiciona um plano de assinatura para o agricultor
	 *
	 * - **plan (str)**: Nome do plano de assinatura
	 * @param requestBody
	 * @returns any Successful Response
	 * @throws ApiError
	 */
	public static farmerPlanCreate(requestBody: FarmerPlanSchema): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: 'POST',
			url: '/farmer/plan/',
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`
			}
		});
	}

	/**
	 * Get By
	 * Retorna um plano de assinatura pelo ID.
	 * @param farmerPlanId
	 * @returns any Successful Response
	 * @throws ApiError
	 */
	public static farmerPlanGetBy(farmerPlanId: number): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: 'GET',
			url: '/farmer/plan/{farmer_plan_id}',
			path: {
				farmer_plan_id: farmerPlanId
			},
			errors: {
				422: `Validation Error`
			}
		});
	}

	/**
	 * Update
	 * Atualiza um plano de assinatura pelo ID.
	 *
	 * - **plan (str)**: Nome do plano de assinatura
	 * @param farmerPlanId
	 * @param requestBody
	 * @returns any Successful Response
	 * @throws ApiError
	 */
	public static farmerPlanUpdate(
		farmerPlanId: number,
		requestBody: FarmerPlanSchema
	): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: 'PATCH',
			url: '/farmer/plan/{farmer_plan_id}',
			path: {
				farmer_plan_id: farmerPlanId
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
	 * Deleta um plano de assinatura pelo ID.
	 * @param farmerPlanId
	 * @returns any Successful Response
	 * @throws ApiError
	 */
	public static farmerPlanDelete(farmerPlanId: number): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: 'DELETE',
			url: '/farmer/plan/{farmer_plan_id}',
			path: {
				farmer_plan_id: farmerPlanId
			},
			errors: {
				422: `Validation Error`
			}
		});
	}
}
