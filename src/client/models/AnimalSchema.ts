/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Sexo } from './Sexo';

export type AnimalSchema = {
	tag?: number;
	sisbov?: number;
	gender?: Sexo;
	birth_date?: string;
	buy_date?: string;
	sell_date?: string;
	breed_id?: number;
	father_id?: number;
	mother_id?: number;
	origin_id?: number;
};
