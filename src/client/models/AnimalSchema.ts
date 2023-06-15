/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LoteLogSchema } from './LoteLogSchema';
import type { LoteSchema } from './LoteSchema';
import type { PesoLogSchema } from './PesoLogSchema';
import type { RacaSchema } from './RacaSchema';
import type { Sexo } from './Sexo';

export type AnimalSchema = {
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
    id?: number;
    lote?: LoteSchema;
    raca?: RacaSchema;
    peso_log?: Array<PesoLogSchema>;
    lote_log?: Array<LoteLogSchema>;
};

