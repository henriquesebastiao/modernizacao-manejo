/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Sexo } from './Sexo';

export type AnimalCreate = {
    chip?: string;
    brinco?: string;
    origem?: string;
    raca_id?: number;
    mae_id?: number;
    pai_id?: number;
    sexo?: Sexo;
    data_entrada?: string;
    data_nascimento?: string;
    peso?: number;
};
