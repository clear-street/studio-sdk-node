// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as AccountsAPI from './accounts';
import * as BulkOrdersAPI from './bulk-orders';
import * as EasyBorrowsAPI from './easy-borrows';
import * as HoldingsAPI from './holdings';
import * as LocateOrdersAPI from './locate-orders';
import * as OrdersAPI from './orders';
import * as PnlDetailsAPI from './pnl-details';
import * as PnlSummaryAPI from './pnl-summary';
import * as PnlSumsAPI from './pnl-sums';
import * as PositionsAPI from './positions';
import * as TradesAPI from './trades';

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
  export import PnlSums = PnlSumsAPI.PnlSums;
  export import PnlSumListResponse = PnlSumsAPI.PnlSumListResponse;
  export import PnlSumListParams = PnlSumsAPI.PnlSumListParams;
  export import Holdings = HoldingsAPI.Holdings;
  export import HoldingListResponse = HoldingsAPI.HoldingListResponse;
  export import HoldingListParams = HoldingsAPI.HoldingListParams;
}
