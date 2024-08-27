// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '@clear-street/studio-sdk/resource';
import { isRequestOptions } from '@clear-street/studio-sdk/core';
import { APIPromise } from '@clear-street/studio-sdk/core';
import * as Core from '@clear-street/studio-sdk/core';
import { BulkOrders } from './bulk-orders';
import { Orders } from './orders';
import { Trades } from './trades';
import { Positions } from './positions';
import { LocateOrders } from './locate-orders';
import { EasyBorrows } from './easy-borrows';
import { PnlSummary } from './pnl-summary';
import { PnlDetails } from './pnl-details';
import * as AccountsAPI from '@clear-street/studio-sdk/resources/accounts/accounts';
import * as BulkOrdersAPI from '@clear-street/studio-sdk/resources/accounts/bulk-orders';
import * as EasyBorrowsAPI from '@clear-street/studio-sdk/resources/accounts/easy-borrows';
import * as LocateOrdersAPI from '@clear-street/studio-sdk/resources/accounts/locate-orders';
import * as OrdersAPI from '@clear-street/studio-sdk/resources/accounts/orders';
import * as PnlDetailsAPI from '@clear-street/studio-sdk/resources/accounts/pnl-details';
import * as PnlSummaryAPI from '@clear-street/studio-sdk/resources/accounts/pnl-summary';
import * as PositionsAPI from '@clear-street/studio-sdk/resources/accounts/positions';
import * as TradesAPI from '@clear-street/studio-sdk/resources/accounts/trades';

export class Accounts extends APIResource {
  bulkOrders: BulkOrdersAPI.BulkOrders = new BulkOrdersAPI.BulkOrders(this._client);
  orders: OrdersAPI.Orders = new OrdersAPI.Orders(this._client);
  trades: TradesAPI.Trades = new TradesAPI.Trades(this._client);
  positions: PositionsAPI.Positions = new PositionsAPI.Positions(this._client);
  locateOrders: LocateOrdersAPI.LocateOrders = new LocateOrdersAPI.LocateOrders(this._client);
  easyBorrows: EasyBorrowsAPI.EasyBorrows = new EasyBorrowsAPI.EasyBorrows(this._client);
  pnlSummary: PnlSummaryAPI.PnlSummary = new PnlSummaryAPI.PnlSummary(this._client);
  pnlDetails: PnlDetailsAPI.PnlDetails = new PnlDetailsAPI.PnlDetails(this._client);

  /**
   * Get an account by its ID.
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
   * Entity ID for the legal entity.
   */
  entity_id: string;

  name: string;
}

export interface AccountListResponse {
  data?: Array<Account>;
}

export namespace Accounts {
  export import Account = AccountsAPI.Account;
  export import AccountListResponse = AccountsAPI.AccountListResponse;
  export import BulkOrders = BulkOrdersAPI.BulkOrders;
  export import BulkOrderCreateResponse = BulkOrdersAPI.BulkOrderCreateResponse;
  export import BulkOrderCreateParams = BulkOrdersAPI.BulkOrderCreateParams;
  export import Orders = OrdersAPI.Orders;
  export import OrderCreateResponse = OrdersAPI.OrderCreateResponse;
  export import OrderRetrieveResponse = OrdersAPI.OrderRetrieveResponse;
  export import OrderListResponse = OrdersAPI.OrderListResponse;
  export import OrderDeleteResponse = OrdersAPI.OrderDeleteResponse;
  export import OrderCreateParams = OrdersAPI.OrderCreateParams;
  export import OrderListParams = OrdersAPI.OrderListParams;
  export import OrderDeleteParams = OrdersAPI.OrderDeleteParams;
  export import Trades = TradesAPI.Trades;
  export import TradeListResponse = TradesAPI.TradeListResponse;
  export import TradeListParams = TradesAPI.TradeListParams;
  export import Positions = PositionsAPI.Positions;
  export import PositionListResponse = PositionsAPI.PositionListResponse;
  export import PositionListParams = PositionsAPI.PositionListParams;
  export import LocateOrders = LocateOrdersAPI.LocateOrders;
  export import LocateOrderListResponse = LocateOrdersAPI.LocateOrderListResponse;
  export import LocateOrderCreateParams = LocateOrdersAPI.LocateOrderCreateParams;
  export import LocateOrderUpdateParams = LocateOrdersAPI.LocateOrderUpdateParams;
  export import EasyBorrows = EasyBorrowsAPI.EasyBorrows;
  export import EasyBorrowListResponse = EasyBorrowsAPI.EasyBorrowListResponse;
  export import PnlSummary = PnlSummaryAPI.PnlSummary;
  export import PnlDetails = PnlDetailsAPI.PnlDetails;
  export import PnlDetailListResponse = PnlDetailsAPI.PnlDetailListResponse;
}
