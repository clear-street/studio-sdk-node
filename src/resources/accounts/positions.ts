// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '@clear-street/studio-sdk/resource';
import { isRequestOptions } from '@clear-street/studio-sdk/core';
import { APIPromise } from '@clear-street/studio-sdk/core';
import * as Core from '@clear-street/studio-sdk/core';
import * as PositionsAPI from '@clear-street/studio-sdk/resources/accounts/positions';
import * as Shared from '@clear-street/studio-sdk/resources/shared';

export class Positions extends APIResource {
  /**
   * Get current positions for a given account for a given symbol.
   */
  retrieve(accountId: string, symbol: string, options?: Core.RequestOptions): Core.APIPromise<Shared.Position> {
    return this._client.get(`/accounts/${accountId}/positions/${symbol}`, options);
  }

  /**
   * List current positions for a given account.
   */
  list(accountId: string, query?: PositionListParams, options?: Core.RequestOptions): Core.APIPromise<PositionListResponse>
  list(accountId: string, options?: Core.RequestOptions): Core.APIPromise<PositionListResponse>
  list(accountId: string, query: PositionListParams | Core.RequestOptions = {}, options?: Core.RequestOptions): Core.APIPromise<PositionListResponse> {
    if (isRequestOptions(query)) {
      return this.list(accountId, {}, query);
    }
    return this._client.get(`/accounts/${accountId}/positions`, { query, ...options });
  }
}

export interface PositionListResponse {
  data: Array<Shared.Position>;

  /**
   * Cursor for the next page of results.
   */
  next_page_token?: string;
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

export namespace Positions {
  export import PositionListResponse = PositionsAPI.PositionListResponse;
  export import PositionListParams = PositionsAPI.PositionListParams;
}
