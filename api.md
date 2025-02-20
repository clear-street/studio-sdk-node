# Shared

Types:

- <code><a href="./src/resources/shared.ts">BaseStrategy</a></code>
- <code><a href="./src/resources/shared.ts">LocateOrder</a></code>
- <code><a href="./src/resources/shared.ts">Order</a></code>
- <code><a href="./src/resources/shared.ts">Position</a></code>
- <code><a href="./src/resources/shared.ts">RegtMarginSimulation</a></code>
- <code><a href="./src/resources/shared.ts">Strategy</a></code>
- <code><a href="./src/resources/shared.ts">Trade</a></code>

# Entities

Types:

- <code><a href="./src/resources/entities/entities.ts">Entity</a></code>
- <code><a href="./src/resources/entities/entities.ts">PnlSummary</a></code>
- <code><a href="./src/resources/entities/entities.ts">PortfolioMargin</a></code>
- <code><a href="./src/resources/entities/entities.ts">RegtMargin</a></code>
- <code><a href="./src/resources/entities/entities.ts">EntityListResponse</a></code>

Methods:

- <code title="get /entities/{entity_id}">client.entities.<a href="./src/resources/entities/entities.ts">retrieve</a>(entityId) -> Entity</code>
- <code title="get /entities">client.entities.<a href="./src/resources/entities/entities.ts">list</a>() -> EntityListResponse</code>

## PnlSummaries

Methods:

- <code title="get /entities/{entity_id}/pnl-summary">client.entities.pnlSummaries.<a href="./src/resources/entities/pnl-summaries.ts">retrieve</a>(entityId) -> PnlSummary</code>

## RegtMargins

Methods:

- <code title="get /entities/{entity_id}/regt-margin">client.entities.regtMargins.<a href="./src/resources/entities/regt-margins.ts">retrieve</a>(entityId) -> RegtMargin</code>

## PortfolioMargins

Methods:

- <code title="get /entities/{entity_id}/portfolio-margin">client.entities.portfolioMargins.<a href="./src/resources/entities/portfolio-margins.ts">retrieve</a>(entityId) -> PortfolioMargin</code>

## RegtMarginSimulations

Types:

- <code><a href="./src/resources/entities/regt-margin-simulations.ts">SimulationID</a></code>
- <code><a href="./src/resources/entities/regt-margin-simulations.ts">RegtMarginSimulationCreateResponse</a></code>

Methods:

- <code title="post /entities/{entity_id}/regt-margin-simulations">client.entities.regtMarginSimulations.<a href="./src/resources/entities/regt-margin-simulations.ts">create</a>(entityId, { ...params }) -> RegtMarginSimulationCreateResponse</code>
- <code title="get /entities/{entity_id}/regt-margin-simulations/{simulation_id}">client.entities.regtMarginSimulations.<a href="./src/resources/entities/regt-margin-simulations.ts">retrieve</a>(entityId, simulationId) -> RegtMarginSimulation</code>

# Accounts

Types:

- <code><a href="./src/resources/accounts/accounts.ts">Account</a></code>
- <code><a href="./src/resources/accounts/accounts.ts">AccountListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}">client.accounts.<a href="./src/resources/accounts/accounts.ts">retrieve</a>(accountId) -> Account</code>
- <code title="get /accounts">client.accounts.<a href="./src/resources/accounts/accounts.ts">list</a>() -> AccountListResponse</code>

## BulkOrders

Types:

- <code><a href="./src/resources/accounts/bulk-orders.ts">BulkOrderCreateResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/bulk-orders">client.accounts.bulkOrders.<a href="./src/resources/accounts/bulk-orders.ts">create</a>(accountId, { ...params }) -> BulkOrderCreateResponse</code>

## Orders

Types:

- <code><a href="./src/resources/accounts/orders.ts">OrderCreateResponse</a></code>
- <code><a href="./src/resources/accounts/orders.ts">OrderRetrieveResponse</a></code>
- <code><a href="./src/resources/accounts/orders.ts">OrderListResponse</a></code>
- <code><a href="./src/resources/accounts/orders.ts">OrderDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/orders">client.accounts.orders.<a href="./src/resources/accounts/orders.ts">create</a>(accountId, { ...params }) -> OrderCreateResponse</code>
- <code title="get /accounts/{account_id}/orders/{order_id}">client.accounts.orders.<a href="./src/resources/accounts/orders.ts">retrieve</a>(accountId, orderId) -> OrderRetrieveResponse</code>
- <code title="get /accounts/{account_id}/orders">client.accounts.orders.<a href="./src/resources/accounts/orders.ts">list</a>(accountId, { ...params }) -> OrderListResponse</code>
- <code title="delete /accounts/{account_id}/orders">client.accounts.orders.<a href="./src/resources/accounts/orders.ts">delete</a>(accountId, { ...params }) -> OrderDeleteResponse</code>
- <code title="delete /accounts/{account_id}/orders/{order_id}">client.accounts.orders.<a href="./src/resources/accounts/orders.ts">cancel</a>(accountId, orderId) -> void</code>
- <code title="patch /accounts/{account_id}/orders/{order_id}">client.accounts.orders.<a href="./src/resources/accounts/orders.ts">patch</a>(accountId, orderId, { ...params }) -> void</code>

## Trades

Types:

- <code><a href="./src/resources/accounts/trades.ts">TradeListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/trades/{trade_id}">client.accounts.trades.<a href="./src/resources/accounts/trades.ts">retrieve</a>(accountId, tradeId) -> Trade</code>
- <code title="get /accounts/{account_id}/trades">client.accounts.trades.<a href="./src/resources/accounts/trades.ts">list</a>(accountId, { ...params }) -> TradeListResponse</code>

## Positions

Types:

- <code><a href="./src/resources/accounts/positions.ts">PositionListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/positions/{symbol}">client.accounts.positions.<a href="./src/resources/accounts/positions.ts">retrieve</a>(accountId, symbol) -> Position</code>
- <code title="get /accounts/{account_id}/positions">client.accounts.positions.<a href="./src/resources/accounts/positions.ts">list</a>(accountId, { ...params }) -> PositionListResponse</code>

## LocateOrders

Types:

- <code><a href="./src/resources/accounts/locate-orders.ts">LocateOrderListResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/locate-orders">client.accounts.locateOrders.<a href="./src/resources/accounts/locate-orders.ts">create</a>(accountId, { ...params }) -> LocateOrder</code>
- <code title="get /accounts/{account_id}/locate-orders/{locate_order_id}">client.accounts.locateOrders.<a href="./src/resources/accounts/locate-orders.ts">retrieve</a>(accountId, locateOrderId) -> LocateOrder</code>
- <code title="patch /accounts/{account_id}/locate-orders/{locate_order_id}">client.accounts.locateOrders.<a href="./src/resources/accounts/locate-orders.ts">update</a>(accountId, locateOrderId, { ...params }) -> void</code>
- <code title="get /accounts/{account_id}/locate-orders">client.accounts.locateOrders.<a href="./src/resources/accounts/locate-orders.ts">list</a>(accountId) -> LocateOrderListResponse</code>

## EasyBorrows

Types:

- <code><a href="./src/resources/accounts/easy-borrows.ts">EasyBorrowListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/easy-borrows">client.accounts.easyBorrows.<a href="./src/resources/accounts/easy-borrows.ts">list</a>(accountId) -> EasyBorrowListResponse</code>

## PnlSummary

Types:

- <code><a href="./src/resources/accounts/pnl-summary.ts">PnlSummaryRetrieveResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/pnl-summary">client.accounts.pnlSummary.<a href="./src/resources/accounts/pnl-summary.ts">retrieve</a>(accountId) -> PnlSummaryRetrieveResponse</code>

## PnlDetails

Types:

- <code><a href="./src/resources/accounts/pnl-details.ts">PnlDetailListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/pnl-details">client.accounts.pnlDetails.<a href="./src/resources/accounts/pnl-details.ts">list</a>(accountId) -> PnlDetailListResponse</code>

## PnlSums

Types:

- <code><a href="./src/resources/accounts/pnl-sums.ts">PnlSumListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/pnl-sums">client.accounts.pnlSums.<a href="./src/resources/accounts/pnl-sums.ts">list</a>(accountId, { ...params }) -> PnlSumListResponse</code>

## Holdings

Types:

- <code><a href="./src/resources/accounts/holdings.ts">HoldingListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/holdings">client.accounts.holdings.<a href="./src/resources/accounts/holdings.ts">list</a>(accountId, { ...params }) -> HoldingListResponse</code>

## Inventories

Types:

- <code><a href="./src/resources/accounts/inventories.ts">InventoryRetrieveResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/inventories/{symbol}">client.accounts.inventories.<a href="./src/resources/accounts/inventories.ts">retrieve</a>(accountId, symbol) -> InventoryRetrieveResponse</code>

# Instruments

Types:

- <code><a href="./src/resources/instruments.ts">Instrument</a></code>

Methods:

- <code title="get /instruments/{symbol}">client.instruments.<a href="./src/resources/instruments.ts">retrieve</a>(symbol, { ...params }) -> Instrument</code>
