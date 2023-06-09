/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Classe para validação de dados de atualização de Lote.
 */
export type LoteSchema = {
    nome: string;
    numero: number;
    dieta_id?: number;
    obs?: string;
    id: number;
};

