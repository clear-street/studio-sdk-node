// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '@clear-street/studio-sdk/resource';
import { isRequestOptions } from '@clear-street/studio-sdk/core';
import { APIPromise } from '@clear-street/studio-sdk/core';
import * as Core from '@clear-street/studio-sdk/core';
import * as EasyBorrowsAPI from '@clear-street/studio-sdk/resources/accounts/easy-borrows';

export class EasyBorrows extends APIResource {
  /**
   * List all current easy-to-borrow stock symbols. This list changes dynamically
   * daily.
   */
  list(accountId: string, options?: Core.RequestOptions): Core.APIPromise<EasyBorrowListResponse> {
    return this._client.get(`/accounts/${accountId}/easy-borrows`, options);
  }
}

export interface EasyBorrowListResponse {
  data: Array<string>;
}

export namespace EasyBorrows {
  export import EasyBorrowListResponse = EasyBorrowsAPI.EasyBorrowListResponse;
}
