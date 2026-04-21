// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Instruments extends APIResource {
  /**
   * Get an instrument by the given symbol
   */
  retrieve(
    symbol: string,
    query: InstrumentRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Instrument> {
    return this._client.get(path`/instruments/${symbol}`, { query, ...options });
  }

  /**
   * List all available instruments.
   */
  list(options?: RequestOptions): APIPromise<InstrumentListResponse> {
    return this._client.get('/instruments', options);
  }
}

export interface Instrument {
  /**
   * The asset class of the symbol.
   */
  asset_class: 'other' | 'currency' | 'equity' | 'option' | 'debt' | 'fund';

  /**
   * A description of the instrument.
   */
  description: string;

  /**
   * The primary exchange for the instrument.
   */
  primary_exchange: string;

  symbols: Array<Instrument.Symbol>;
}

export namespace Instrument {
  export interface Symbol {
    symbol?: string;

    /**
     * Denotes the format of the provided `symbol` field.
     */
    symbol_format?: 'cms' | 'osi';
  }
}

export interface InstrumentListResponse {
  data?: Array<Instrument>;
}

export interface InstrumentRetrieveParams {
  /**
   * The format of the provided symbol.
   */
  symbol_format?: 'cms' | 'osi';
}

export declare namespace Instruments {
  export {
    type Instrument as Instrument,
    type InstrumentListResponse as InstrumentListResponse,
    type InstrumentRetrieveParams as InstrumentRetrieveParams,
  };
}
