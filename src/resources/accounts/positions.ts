// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Positions extends APIResource {
  /**
   * Get current position for a given account for a given symbol.
   *
   * @example
   * ```ts
   * const position = await client.accounts.positions.retrieve(
   *   'AAPL',
   *   { account_id: '100000' },
   * );
   * ```
   */
  retrieve(
    symbol: string,
    params: PositionRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<Shared.Position> {
    const { account_id } = params;
    return this._client.get(path`/accounts/${account_id}/positions/${symbol}`, options);
  }

  /**
   * List current positions for a given account.
   *
   * @example
   * ```ts
   * const positions = await client.accounts.positions.list(
   *   '100000',
   * );
   * ```
   */
  list(
    accountID: string,
    query: PositionListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PositionListResponse> {
    return this._client.get(path`/accounts/${accountID}/positions`, { query, ...options });
  }
}

export interface PositionListResponse {
  data: Array<Shared.Position>;

  /**
   * Cursor for the next page of results.
   */
  next_page_token?: string;
}

export interface PositionRetrieveParams {
  /**
   * The account ID or account number to get the position for.
   */
  account_id: string;
}

export interface PositionListParams {
  /**
   * Number of positions to return per page.
   */
  page_size?: number;

  /**
   * Cursor for the page to return.
   */
  page_token?: string;
}

export declare namespace Positions {
  export {
    type PositionListResponse as PositionListResponse,
    type PositionRetrieveParams as PositionRetrieveParams,
    type PositionListParams as PositionListParams,
  };
}
