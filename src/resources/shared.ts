// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as EntitiesAPI from '@clear-street/studio-sdk/resources/entities/entities';
import * as RegtMarginSimulationsAPI from '@clear-street/studio-sdk/resources/entities/regt-margin-simulations';

export interface LocateOrder {
  /**
   * Account ID for the account.
   */
  account_id: string;

  /**
   * Unique locate ID assigned by us.
   */
  locate_order_id: string;

  /**
   * Unique MPID assigned by us.
   */
  mpid: string;

  /**
   * The timestamp indicating when the locate order was requested.
   */
  requested_at: number;

  /**
   * String representation of quantity.
   */
  requested_quantity: string;

  /**
   * The status of the locate order.
   */
  status: 'pending' | 'offered' | 'filled' | 'rejected' | 'declined' | 'expired' | 'cancelled';

  symbol: string;

  /**
   * The timestamp indicating when the locate order was last updated.
   */
  updated_at: number;

  /**
   * The rate charged if the instrument is held overnight.
   */
  borrow_rate?: string;

  /**
   * Comment from the desk.
   */
  desk_comment?: string;

  /**
   * The timestamp indicating when the locate-order will expire.
   */
  expires_at?: number;

  /**
   * The locate ID, available once the locate order has been offered
   */
  locate_id?: string;

  /**
   * The timestamp indicating when the locate-order was located.
   */
  located_at?: number;

  /**
   * The quantity that has been located.
   */
  located_quantity?: string;

  /**
   * The reference ID provided by you.
   */
  reference_id?: string;

  /**
   * The total cost of the locate.
   */
  total_cost?: string;

  /**
   * Comment from the trader.
   */
  trader_comment?: string;
}

export interface Order {
  /**
   * Account ID for the account.
   */
  account_id: string;

  /**
   * When the order was created in milliseconds since epoch.
   */
  created_at: number;

  /**
   * The quantity that has been filled.
   */
  filled_quantity: string;

  /**
   * An internally generated unique ID for this order.
   */
  order_id: string;

  /**
   * The type of order, can be one of the following:
   *
   * - `limit`: A limit order will execute at-or-better than the limit price you
   *   specify
   * - `market`: An order that will execute at the prevailing market prices
   */
  order_type: 'limit' | 'market';

  /**
   * The requested quantity on this order.
   */
  quantity: string;

  /**
   * Buy, sell, sell-short indicator.
   */
  side: 'buy' | 'sell' | 'sell-short';

  /**
   * Simplified order state, which is inferred from `OrderStatus`. Makes it easier to
   * determine whether an order can be executed against.
   *
   * - `open`: Order _can_ potentially be executed against.
   * - `rejected`: Order _cannot_ be executed against because it was rejected. This
   *   is a terminal state.
   * - `closed`: Order _cannot_ be executed against. This is a terminal state.
   */
  state: 'open' | 'rejected' | 'closed';

  /**
   * Granular order status using
   * [standard values come FIX tag 39](https://www.fixtrading.org/online-specification/order-state-changes).
   */
  status:
    | 'new'
    | 'partially-filled'
    | 'filled'
    | 'canceled'
    | 'replaced'
    | 'pending-cancel'
    | 'stopped'
    | 'rejected'
    | 'suspended'
    | 'pending-new'
    | 'calculated'
    | 'expired'
    | 'accepted-for-bidding'
    | 'pending-replace'
    | 'done-for-day';

  /**
   * Strategy type used for execution, can be one of below. Note, we use sensible
   * defaults for strategy parameters at the moment. In future, we will provide a way
   * to provide specify these parameters.
   *
   * - `sor`: Smart order router
   * - `dark`: Dark pool
   * - `ap`: Arrival price
   * - `pov`: Percentage of volume
   * - `twap`: Time weighted average price
   * - `vwap`: Volume weighted average price
   *
   * For more information on these strategies, please refer to our
   * [documentation](https://docs.clearstreet.io/studio/docs/execution-strategies).
   */
  strategy_type: 'sor' | 'dark' | 'ap' | 'pov' | 'twap' | 'vwap';

  symbol: string;

  /**
   * The lifecycle enforcement of this order.
   *
   * - `day`: The order will exist for the duration of the current trading session
   * - `ioc`: The order will immediately be executed or cancelled
   * - `day-plus`: The order will exist only for the duration the current trading
   *   session plus extended hours, if applicable
   * - `at-open`: The order will exist only for the opening auction of the next
   *   session
   * - `at-close`: The order will exist only for the closing auction of the current
   *   session
   */
  time_in_force: 'day' | 'ioc' | 'day-plus' | 'at-open' | 'at-close';

  /**
   * When the order was updated in milliseconds since epoch.
   */
  updated_at: number;

  /**
   * A monotonically increasing number indicating the version of this order. A higher
   * number indicates a more recent version of the order.
   */
  version: number;

  /**
   * Calculated average price of all fills on this order.
   */
  average_price?: number;

  /**
   * The last reason why this order was updated
   */
  order_update_reason?: 'place' | 'modify' | 'cancel' | 'execution-report' | 'cancel-reject';

  /**
   * The requsted limit price on this order.
   */
  price?: string;

  /**
   * The ID you provided when creating this order.
   */
  reference_id?: string;

  /**
   * Free form text typically contains reasons for a reject.
   */
  text?: string;
}

export interface PnlSummaryForAccount extends EntitiesAPI.PnlSummary {
  /**
   * Account ID
   */
  account_id: string;
}

export interface Position {
  /**
   * Account ID for the account.
   */
  account_id?: string;

  /**
   * String representation of quantity.
   */
  quantity?: string;

  symbol?: string;
}

export interface RegtMarginSimulation {
  /**
   * The margin calculation after applying simulated trades.
   */
  after: EntitiesAPI.RegtMargin;

  /**
   * The margin calculation before applying simulated trades.
   */
  before: EntitiesAPI.RegtMargin;

  /**
   * Timestamp of when this simulation was created.
   */
  created_at: number;

  /**
   * Name of this simulation that you provided when creating it.
   */
  name: string;

  /**
   * Unique ID for a simulation.
   */
  simulation_id: RegtMarginSimulationsAPI.SimulationID;
}

export interface Trade {
  /**
   * When this trade happened in milliseconds since epoch.
   */
  created_at: number;

  /**
   * The order ID of the order this trade occurred on.
   */
  order_id: string;

  /**
   * The traded price.
   */
  price: string;

  /**
   * The amount that was traded.
   */
  quantity: string;

  /**
   * The side this trade occurred on.
   */
  side: 'buy' | 'sell' | 'sell-short';

  /**
   * Unique trade ID assigned by us.
   */
  trade_id: string;

  /**
   * Account ID for the account.
   */
  account_id?: string;

  /**
   * The symbol this trade was for.
   */
  symbol?: string;
}
