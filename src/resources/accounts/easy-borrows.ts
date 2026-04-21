// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class EasyBorrows extends APIResource {
  /**
   * List all current easy-to-borrow stock symbols. This list changes dynamically
   * daily.
   *
   * @example
   * ```ts
   * const easyBorrows = await client.accounts.easyBorrows.list(
   *   '100000',
   * );
   * ```
   */
  list(accountID: string, options?: RequestOptions): APIPromise<EasyBorrowListResponse> {
    return this._client.get(path`/accounts/${accountID}/easy-borrows`, options);
  }
}

export interface EasyBorrowListResponse {
  data: Array<string>;
}

export declare namespace EasyBorrows {
  export { type EasyBorrowListResponse as EasyBorrowListResponse };
}
