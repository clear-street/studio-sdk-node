// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class RegtMarginSimulations extends APIResource {
  /**
   * Simulate Reg-T margin calculation for a given hypothetical set of prices and/or
   * trades. This is useful for understanding the impact of price fluctuations or
   * trades on margin requirements. Once a simulation is created, it remains
   * available for 48-hours, after which it will automatically be deleted.
   *
   * Simulations created through the API are visible in the Studio UI under the Risk
   * & Margin section, after enabling the "Risk Simulations" toggle.
   */
  create(
    entityID: string,
    body: RegtMarginSimulationCreateParams,
    options?: RequestOptions,
  ): APIPromise<RegtMarginSimulationCreateResponse> {
    return this._client.post(path`/entities/${entityID}/regt-margin-simulations`, { body, ...options });
  }

  /**
   * Get a Reg-T margin simluation that was previously created. Note, simulations are
   * automatically deleted after 48-hours.
   */
  retrieve(
    simulationID: SimulationID,
    params: RegtMarginSimulationRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<Shared.RegtMarginSimulation> {
    const { entity_id } = params;
    return this._client.get(path`/entities/${entity_id}/regt-margin-simulations/${simulationID}`, options);
  }
}

/**
 * Unique ID for a simulation.
 */
export type SimulationID = string;

export interface RegtMarginSimulationCreateResponse {
  /**
   * Unique ID for a simulation.
   */
  simulation_id: SimulationID;
}

export interface RegtMarginSimulationCreateParams {
  /**
   * A name for this simulation for reference.
   */
  name: string;

  /**
   * If true, the simulation will ignore any existing positions and balances in the
   * account. Set to true if you want to simulate from a clean slate, i.e. an empty
   * account.
   */
  ignore_existing?: boolean;

  /**
   * List of prices to use in the simulation, i.e. fair-market-values you specify for
   * each symbol. If this is not provided, current market prices will be used, if
   * they are available.
   */
  prices?: Array<RegtMarginSimulationCreateParams.Price>;

  /**
   * List of hypothetical trades to include in the simulation, if any.
   */
  trades?: Array<RegtMarginSimulationCreateParams.Trade>;
}

export namespace RegtMarginSimulationCreateParams {
  export interface Price {
    /**
     * The price to use in the simulation.
     */
    price: string;

    /**
     * The symbol for the instrument.
     */
    symbol: string;

    /**
     * Denotes the format of the provided `symbol` field.
     */
    symbol_format?: 'cms' | 'osi';
  }

  export interface Trade {
    /**
     * The price of the simulated trade.
     */
    price: string;

    /**
     * The quantity of the simulated trade.
     */
    quantity: string;

    /**
     * The side of the simulated trade.
     */
    side: 'buy' | 'sell';

    /**
     * The symbol for the instrument.
     */
    symbol: string;

    /**
     * Denotes the format of the provided `symbol` field.
     */
    symbol_format?: 'cms' | 'osi';
  }
}

export interface RegtMarginSimulationRetrieveParams {
  /**
   * Entity ID for the legal entity.
   */
  entity_id: string;
}

export declare namespace RegtMarginSimulations {
  export {
    type SimulationID as SimulationID,
    type RegtMarginSimulationCreateResponse as RegtMarginSimulationCreateResponse,
    type RegtMarginSimulationCreateParams as RegtMarginSimulationCreateParams,
    type RegtMarginSimulationRetrieveParams as RegtMarginSimulationRetrieveParams,
  };
}
