/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Sexo } from './Sexo';

export type AnimalCreate = {
	tag: number | null;
	sisbov: number | null;
	gender: Sexo | null;
	birth_date: string | null;
	buy_date: string | null;
	sell_date: string | null;
	breed: string | null;
	father_tag: number | null;
	mother_tag: number | null;
	origin: string | null;
};
