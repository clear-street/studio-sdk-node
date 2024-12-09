// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as BulkOrdersAPI from './bulk-orders';
import { BulkOrderCreateParams, BulkOrderCreateResponse, BulkOrders } from './bulk-orders';
import * as EasyBorrowsAPI from './easy-borrows';
import { EasyBorrowListResponse, EasyBorrows } from './easy-borrows';
import * as HoldingsAPI from './holdings';
import { HoldingListParams, HoldingListResponse, Holdings } from './holdings';
import * as InventoriesAPI from './inventories';
import { Inventories, InventoryRetrieveResponse } from './inventories';
import * as LocateOrdersAPI from './locate-orders';
import {
  LocateOrderCreateParams,
  LocateOrderListResponse,
  LocateOrderUpdateParams,
  LocateOrders,
} from './locate-orders';
import * as OrdersAPI from './orders';
import {
  OrderCreateParams,
  OrderCreateResponse,
  OrderDeleteParams,
  OrderDeleteResponse,
  OrderListParams,
  OrderListResponse,
  OrderPatchParams,
  OrderRetrieveResponse,
  Orders,
} from './orders';
import * as PnlDetailsAPI from './pnl-details';
import { PnlDetailListResponse, PnlDetails } from './pnl-details';
import * as PnlSummaryAPI from './pnl-summary';
import { PnlSummary } from './pnl-summary';
import * as PnlSumsAPI from './pnl-sums';
import { PnlSumListParams, PnlSumListResponse, PnlSums } from './pnl-sums';
import * as PositionsAPI from './positions';
import { PositionListParams, PositionListResponse, Positions } from './positions';
import * as TradesAPI from './trades';
import { TradeListParams, TradeListResponse, Trades } from './trades';

export class Accounts extends APIResource {
  bulkOrders: BulkOrdersAPI.BulkOrders = new BulkOrdersAPI.BulkOrders(this._client);
  orders: OrdersAPI.Orders = new OrdersAPI.Orders(this._client);
  trades: TradesAPI.Trades = new TradesAPI.Trades(this._client);
  positions: PositionsAPI.Positions = new PositionsAPI.Positions(this._client);
  locateOrders: LocateOrdersAPI.LocateOrders = new LocateOrdersAPI.LocateOrders(this._client);
  easyBorrows: EasyBorrowsAPI.EasyBorrows = new EasyBorrowsAPI.EasyBorrows(this._client);
  pnlSummary: PnlSummaryAPI.PnlSummary = new PnlSummaryAPI.PnlSummary(this._client);
  pnlDetails: PnlDetailsAPI.PnlDetails = new PnlDetailsAPI.PnlDetails(this._client);
  pnlSums: PnlSumsAPI.PnlSums = new PnlSumsAPI.PnlSums(this._client);
  holdings: HoldingsAPI.Holdings = new HoldingsAPI.Holdings(this._client);
  inventories: InventoriesAPI.Inventories = new InventoriesAPI.Inventories(this._client);

  /**
   * Get an account by its ID or number.
   */
  retrieve(accountId: string, options?: Core.RequestOptions): Core.APIPromise<Account> {
    return this._client.get(`/accounts/${accountId}`, options);
  }

  /**
   * List all available accounts.
   */
  list(options?: Core.RequestOptions): Core.APIPromise<AccountListResponse> {
    return this._client.get('/accounts', options);
  }
}

export interface Account {
  /**
   * Account ID for the account.
   */
  account_id: string;

  /**
   * Account number for the account.
   */
  account_number: string;

  /**
   * Entity ID for the legal entity.
   */
  entity_id: string;

  name: string;
}

export interface AccountListResponse {
  data?: Array<Account>;
}

Accounts.BulkOrders = BulkOrders;
Accounts.Orders = Orders;
Accounts.Trades = Trades;
Accounts.Positions = Positions;
Accounts.LocateOrders = LocateOrders;
Accounts.EasyBorrows = EasyBorrows;
Accounts.PnlSummary = PnlSummary;
Accounts.PnlDetails = PnlDetails;
Accounts.PnlSums = PnlSums;
Accounts.Holdings = Holdings;
Accounts.Inventories = Inventories;

export declare namespace Accounts {
  export { type Account as Account, type AccountListResponse as AccountListResponse };

  export {
    BulkOrders as BulkOrders,
    type BulkOrderCreateResponse as BulkOrderCreateResponse,
    type BulkOrderCreateParams as BulkOrderCreateParams,
  };

  export {
    Orders as Orders,
    type OrderCreateResponse as OrderCreateResponse,
    type OrderRetrieveResponse as OrderRetrieveResponse,
    type OrderListResponse as OrderListResponse,
    type OrderDeleteResponse as OrderDeleteResponse,
    type OrderCreateParams as OrderCreateParams,
    type OrderListParams as OrderListParams,
    type OrderDeleteParams as OrderDeleteParams,
    type OrderPatchParams as OrderPatchParams,
  };

  export {
    Trades as Trades,
    type TradeListResponse as TradeListResponse,
    type TradeListParams as TradeListParams,
  };

  export {
    Positions as Positions,
    type PositionListResponse as PositionListResponse,
    type PositionListParams as PositionListParams,
  };

  export {
    LocateOrders as LocateOrders,
    type LocateOrderListResponse as LocateOrderListResponse,
    type LocateOrderCreateParams as LocateOrderCreateParams,
    type LocateOrderUpdateParams as LocateOrderUpdateParams,
  };

  export { EasyBorrows as EasyBorrows, type EasyBorrowListResponse as EasyBorrowListResponse };

  export { PnlSummary as PnlSummary };

  export { PnlDetails as PnlDetails, type PnlDetailListResponse as PnlDetailListResponse };

  export {
    PnlSums as PnlSums,
    type PnlSumListResponse as PnlSumListResponse,
    type PnlSumListParams as PnlSumListParams,
  };

  export {
    Holdings as Holdings,
    type HoldingListResponse as HoldingListResponse,
    type HoldingListParams as HoldingListParams,
  };

  export { Inventories as Inventories, type InventoryRetrieveResponse as InventoryRetrieveResponse };
}
