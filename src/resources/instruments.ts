// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';

export class Instruments extends APIResource {
  /**
   * Get an instrument by the given symbol
   */
  retrieve(
    symbol: string,
    query?: InstrumentRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Instrument>;
  retrieve(symbol: string, options?: Core.RequestOptions): Core.APIPromise<Instrument>;
  retrieve(
    symbol: string,
    query: InstrumentRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Instrument> {
    if (isRequestOptions(query)) {
      return this.retrieve(symbol, {}, query);
    }
    return this._client.get(`/instruments/${symbol}`, { query, ...options });
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

export interface InstrumentRetrieveParams {
  /**
   * The format of the provided symbol.
   */
  symbol_format?: 'cms' | 'osi';
}

export declare namespace Instruments {
  export { type Instrument as Instrument, type InstrumentRetrieveParams as InstrumentRetrieveParams };
}
