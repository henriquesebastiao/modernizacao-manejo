/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Sexo } from './Sexo';

/**
 * Classe para validação de dados de criação de Animal.
 */
export type AnimalCreateSchema = {
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

