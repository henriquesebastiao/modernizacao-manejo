/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Sexo } from './Sexo';

export type AnimalCreate = {
	tag?: number;
	sisbov?: number;
	gender?: Sexo;
	birth_date?: string;
	buy_date?: string;
	sell_date?: string;
	breed?: string;
	father_tag?: number;
	mother_tag?: number;
	origin?: string;
};
