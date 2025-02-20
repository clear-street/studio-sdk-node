// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Shared from './shared';
import * as EntitiesAPI from './entities/entities';
import * as RegtMarginSimulationsAPI from './entities/regt-margin-simulations';

export interface BaseStrategy {
  /**
   * The type of strategy. This must be set to the respective strategy type.
   */
  type: 'sor' | 'dark' | 'ap' | 'pov' | 'twap' | 'vwap' | 'dma';

  /**
   * The timestamp to stop routing, defaults to market close.
   */
  end_at?: number;

  /**
   * The timestamp to start routing, defaults to now.
   */
  start_at?: number;

  /**
   * The urgency associated with the execution strategy.
   */
  urgency?: 'super-passive' | 'passive' | 'moderate' | 'aggressive' | 'super-aggressive';
}

export interface LocateOrder {
  /**
   * Account ID for the account.
   */
  account_id: string;

  /**
   * Account number for the account.
   */
  account_number: string;

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
   * Account number for the account.
   */
  account_number: string;

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
   * - `stop`: A stop order will result in a market order when the market price
   *   reaches the specified stop price
   * - `stop-limit`: A stop limit order will result in a limit order when the market
   *   price reaches the specified stop price
   */
  order_type: 'limit' | 'market' | 'stop' | 'stop-limit';

  /**
   * The requested quantity on this order.
   */
  quantity: string;

  /**
   * The position quantity at the time of this order.
   */
  running_position: string;

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
   * The requested limit price on this order.
   */
  price?: string;

  /**
   * The ID you provided when creating this order.
   */
  reference_id?: string;

  /**
   * The requested stop price on this order.
   */
  stop_price?: string;

  /**
   * The execution strategy used for this order.
   */
  strategy?: Strategy;

  /**
   * Free form text typically contains reasons for a reject.
   */
  text?: string;
}

export interface Position {
  /**
   * Account ID for the account.
   */
  account_id: string;

  /**
   * Account number for the account.
   */
  account_number: string;

  /**
   * The average cost of the position.
   */
  average_cost: number;

  /**
   * String representation of quantity.
   */
  quantity: string;

  symbol: string;
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

export type Strategy =
  | BaseStrategy
  | Strategy.VwapStrategy
  | Strategy.TwapStrategy
  | Strategy.ApStrategy
  | Strategy.PovStrategy
  | Strategy.DarkStrategy
  | Strategy.DmaStrategy;

export namespace Strategy {
  export interface VwapStrategy extends Shared.BaseStrategy {
    /**
     * The maximum percentage of market volume. Must be an integer between 0 and 50
     * (inclusive).
     */
    max_percent?: number;

    /**
     * The minimum percentage of market volume. Must be an integer between 0 and 100
     * (inclusive).
     */
    min_percent?: number;
  }

  export interface TwapStrategy extends Shared.BaseStrategy {
    /**
     * The maximum percentage of market volume. Must be an integer between 0 and 50
     * (inclusive).
     */
    max_percent?: number;

    /**
     * The minimum percentage of market volume. Must be an integer between 0 and 100
     * (inclusive).
     */
    min_percent?: number;
  }

  export interface ApStrategy extends Shared.BaseStrategy {
    /**
     * The maximum percentage of market volume. Must be an integer between 0 and 100
     * (inclusive).
     */
    max_percent?: number;

    /**
     * The minimum percentage of market volume. Must be an integer between 0 and 100
     * (inclusive).
     */
    min_percent?: number;
  }

  export interface PovStrategy extends Shared.BaseStrategy {
    /**
     * The target percentage of market volume. Must be an integer between 0 and 100
     * (inclusive).
     */
    target_percent: number;
  }

  export interface DarkStrategy extends Shared.BaseStrategy {
    /**
     * The maximum percentage of market volume. Must be an integer between 0 and 100
     * (inclusive).
     */
    max_percent?: number;
  }

  export interface DmaStrategy {
    /**
     * Order Destination.
     *
     * <table><thead>
     * <tr>
     * <th>MIC</th>
     * <th>Exchange</th>
     * </tr></thead>
     * <tbody>
     * <tr>
     * <td>ARCX</td>
     * <td>NYSE ARCA</td>
     * </tr>
     * <tr>
     * <td>BATS</td>
     * <td>BATS Exchange</td>
     * </tr>
     * <tr>
     * <td>BATY</td>
     * <td>BATS Y Exchange</td>
     * </tr>
     * <tr>
     * <td>EDGA</td>
     * <td>EDGA Exchange</td>
     * </tr>
     * <tr>
     * <td>EDGX</td>
     * <td>EDGX Exchange</td>
     * </tr>
     * <tr>
     * <td>EPRL</td>
     * <td>MIAX Pearl Equities</td>
     * </tr>
     * <tr>
     * <td>IEXG</td>
     * <td>Investors' Exchange</td>
     * </tr>
     * <tr>
     * <td>MEMX</td>
     * <td>Members' Exchange</td>
     * </tr>
     * <tr>
     * <td>XASE</td>
     * <td>NYSE American</td>
     * </tr>
     * <tr>
     * <td>XBOS</td>
     * <td>NASDAQ BX Exchange</td>
     * </tr>
     * <tr>
     * <td>XCIS</td>
     * <td>NYSE National</td>
     * </tr>
     * <tr>
     * <td>XNMS</td>
     * <td>NASDAQ/NMS (Global Market)</td>
     * </tr>
     * <tr>
     * <td>XNYS</td>
     * <td>New York Stock Exchange</td>
     * </tr>
     * </tbody></table>
     */
    destination:
      | 'arcx'
      | 'bats'
      | 'baty'
      | 'edga'
      | 'edgx'
      | 'eprl'
      | 'iexg'
      | 'memx'
      | 'xase'
      | 'xbos'
      | 'xcis'
      | 'xnms'
      | 'xnys';

    /**
     * Strategy type used for execution, can be one of below.
     *
     * - `sor`: Smart order router (default)
     * - `dark`: Dark pool
     * - `ap`: Arrival price
     * - `pov`: Percentage of volume
     * - `twap`: Time weighted average price
     * - `vwap`: Volume weighted average price
     * - `dma`: Direct market access
     *
     * For more information on these strategies, please refer to our
     * [documentation](https://docs.clearstreet.io/studio/docs/execution-strategies).
     */
    type: 'dma';
  }
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
   * The position quantity at the time of this trade.
   */
  running_position: string;

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
   * Account number for the account.
   */
  account_number?: string;

  /**
   * The symbol this trade was for.
   */
  symbol?: string;
}
