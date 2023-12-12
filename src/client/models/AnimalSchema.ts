/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Sexo } from './Sexo';

export type AnimalSchema = {
	tag: number | null;
	sisbov: number | null;
	gender: Sexo | null;
	birth_date: string | null;
	buy_date: string | null;
	sell_date: string | null;
	breed_id: number | null;
	father_id: number | null;
	mother_id: number | null;
	origin_id: number | null;
};
