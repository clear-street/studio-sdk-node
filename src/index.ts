// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { type Agent } from './_shims/index';
import * as Core from './core';
import * as Errors from './error';
import * as Uploads from './uploads';
import * as API from './resources/index';
import { Instrument, InstrumentRetrieveParams, Instruments } from './resources/instruments';
import { Account, AccountListResponse, Accounts } from './resources/accounts/accounts';
import {
  Entities,
  Entity,
  EntityListResponse,
  PnlSummary,
  PortfolioMargin,
  RegtMargin,
} from './resources/entities/entities';

const environments = {
  production: 'https://api.clearstreet.io/studio/v2',
  sandbox: 'https://sandbox-api.clearstreet.io/studio/v2',
};
type Environment = keyof typeof environments;
export interface ClientOptions {
  /**
   * Defaults to process.env['STUDIO_SDK_BEARER_TOKEN'].
   */
  bearerToken?: string | undefined;

  /**
   * Specifies the environment to use for the API.
   *
   * Each environment maps to a different base URL:
   * - `production` corresponds to `https://api.clearstreet.io/studio/v2`
   * - `sandbox` corresponds to `https://sandbox-api.clearstreet.io/studio/v2`
   */
  environment?: Environment;

  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env['STUDIO_SDK_BASE_URL'].
   */
  baseURL?: string | null | undefined;

  /**
   * The maximum amount of time (in milliseconds) that the client should wait for a response
   * from the server before timing out a single request.
   *
   * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
   * much longer than this timeout before the promise succeeds or fails.
   */
  timeout?: number;

  /**
   * An HTTP agent used to manage HTTP(S) connections.
   *
   * If not provided, an agent will be constructed by default in the Node.js environment,
   * otherwise no agent is used.
   */
  httpAgent?: Agent;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we use `node-fetch` on Node.js and otherwise expect that `fetch` is
   * defined globally.
   */
  fetch?: Core.Fetch | undefined;

  /**
   * The maximum number of times that the client will retry a request in case of a
   * temporary failure, like a network error or a 5XX error from the server.
   *
   * @default 2
   */
  maxRetries?: number;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `undefined` or `null` in request options.
   */
  defaultHeaders?: Core.Headers;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Core.DefaultQuery;
}

/**
 * API Client for interfacing with the Studio SDK API.
 */
export class StudioSDK extends Core.APIClient {
  bearerToken: string;

  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Studio SDK API.
   *
   * @param {string | undefined} [opts.bearerToken=process.env['STUDIO_SDK_BEARER_TOKEN'] ?? undefined]
   * @param {Environment} [opts.environment=production] - Specifies the environment URL to use for the API.
   * @param {string} [opts.baseURL=process.env['STUDIO_SDK_BASE_URL'] ?? https://api.clearstreet.io/studio/v2] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
   * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {Core.Headers} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Core.DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({
    baseURL = Core.readEnv('STUDIO_SDK_BASE_URL'),
    bearerToken = Core.readEnv('STUDIO_SDK_BEARER_TOKEN'),
    ...opts
  }: ClientOptions = {}) {
    if (bearerToken === undefined) {
      throw new Errors.StudioSDKError(
        "The STUDIO_SDK_BEARER_TOKEN environment variable is missing or empty; either provide it, or instantiate the StudioSDK client with an bearerToken option, like new StudioSDK({ bearerToken: 'My Bearer Token' }).",
      );
    }

    const options: ClientOptions = {
      bearerToken,
      ...opts,
      baseURL,
      environment: opts.environment ?? 'production',
    };

    if (baseURL && opts.environment) {
      throw new Errors.StudioSDKError(
        'Ambiguous URL; The `baseURL` option (or STUDIO_SDK_BASE_URL env var) and the `environment` option are given. If you want to use the environment you must pass baseURL: null',
      );
    }

    super({
      baseURL: options.baseURL || environments[options.environment || 'production'],
      timeout: options.timeout ?? 60000 /* 1 minute */,
      httpAgent: options.httpAgent,
      maxRetries: options.maxRetries,
      fetch: options.fetch,
    });

    this._options = options;

    this.bearerToken = bearerToken;
  }

  entities: API.Entities = new API.Entities(this);
  accounts: API.Accounts = new API.Accounts(this);
  instruments: API.Instruments = new API.Instruments(this);

  protected override defaultQuery(): Core.DefaultQuery | undefined {
    return this._options.defaultQuery;
  }

  protected override defaultHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return {
      ...super.defaultHeaders(opts),
      ...this._options.defaultHeaders,
    };
  }

  protected override authHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return { Authorization: `Bearer ${this.bearerToken}` };
  }

  static StudioSDK = this;
  static DEFAULT_TIMEOUT = 60000; // 1 minute

  static StudioSDKError = Errors.StudioSDKError;
  static APIError = Errors.APIError;
  static APIConnectionError = Errors.APIConnectionError;
  static APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
  static APIUserAbortError = Errors.APIUserAbortError;
  static NotFoundError = Errors.NotFoundError;
  static ConflictError = Errors.ConflictError;
  static RateLimitError = Errors.RateLimitError;
  static BadRequestError = Errors.BadRequestError;
  static AuthenticationError = Errors.AuthenticationError;
  static InternalServerError = Errors.InternalServerError;
  static PermissionDeniedError = Errors.PermissionDeniedError;
  static UnprocessableEntityError = Errors.UnprocessableEntityError;

  static toFile = Uploads.toFile;
  static fileFromPath = Uploads.fileFromPath;
}

StudioSDK.Entities = Entities;
StudioSDK.Accounts = Accounts;
StudioSDK.Instruments = Instruments;
export declare namespace StudioSDK {
  export type RequestOptions = Core.RequestOptions;

  export {
    Entities as Entities,
    type Entity as Entity,
    type PnlSummary as PnlSummary,
    type PortfolioMargin as PortfolioMargin,
    type RegtMargin as RegtMargin,
    type EntityListResponse as EntityListResponse,
  };

  export { Accounts as Accounts, type Account as Account, type AccountListResponse as AccountListResponse };

  export {
    Instruments as Instruments,
    type Instrument as Instrument,
    type InstrumentRetrieveParams as InstrumentRetrieveParams,
  };

  export type BaseStrategy = API.BaseStrategy;
  export type LocateOrder = API.LocateOrder;
  export type Order = API.Order;
  export type Position = API.Position;
  export type RegtMarginSimulation = API.RegtMarginSimulation;
  export type Strategy = API.Strategy;
  export type Trade = API.Trade;
}

export { toFile, fileFromPath } from '@clear-street/studio-sdk/uploads';
export {
  StudioSDKError,
  APIError,
  APIConnectionError,
  APIConnectionTimeoutError,
  APIUserAbortError,
  NotFoundError,
  ConflictError,
  RateLimitError,
  BadRequestError,
  AuthenticationError,
  InternalServerError,
  PermissionDeniedError,
  UnprocessableEntityError,
} from '@clear-street/studio-sdk/error';

export default StudioSDK;
