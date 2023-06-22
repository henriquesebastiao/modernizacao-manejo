/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Sexo } from './Sexo';

export type AnimalSchema = {
    id?: number;
    tag?: number;
    sisbov?: number;
    gender?: Sexo;
    breed_id?: number;
    father_id?: number;
    mother_id?: number;
    origin_id?: number;
    birth_date?: string;
    buy_date?: string;
    sell_date?: string;
};

