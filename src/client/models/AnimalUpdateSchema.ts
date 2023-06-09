/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Sexo } from './Sexo';

/**
 * Classe para validação de dados de atualização de Animal.
 */
export type AnimalUpdateSchema = {
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

