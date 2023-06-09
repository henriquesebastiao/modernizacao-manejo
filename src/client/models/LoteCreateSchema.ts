/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Classe para validação de dados de criação de Lote.
 */
export type LoteCreateSchema = {
    nome: string;
    numero: number;
    dieta_id?: number;
    obs?: string;
};

