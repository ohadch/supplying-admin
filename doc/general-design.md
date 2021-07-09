# Supplying Admin

## User types in the process
- Supplier: Sells items to the dealer, and send the items to the warehouse.
- Dealer (Trans Computers): Buys items from supplier, and sells them to company.
- Company (Danieli Supplies): Buys items from dealer, and sells them to customer.
- Customer: Buys items from company. There can be many customers
- Warehouse: Receives the items from the supplier, builds pallets per customer and gives them to export.
- Export: Collects the pallets from the warehouse, and delivers them to the customers (door to door).

## Item types in the process
- Catalog Item: Goods that selling them provides profit.
- Offer: A group of catalog items, each item includes quantity and price. An offer is made of an array of Offer Versions/Rounds. The latest offer can be marked as the “final offer”.
- Order: Linked to an offer, this is one side A wants to buy the offer that was offered by side B.
- Shipping: The process of delivery of the order from the warehouse to the customer.
- Invoice: Based on an order, but includes only the items that were actually delivered to the customer.
- CMR: A certificate that the items arrived at the customer’s warehouse.
- Deal: A group of offers and orders.
- Supplier: A person/company that sells catalog items
- Customer: Buys catalog items from company.

## Invoice types that are produced after the process
1. Invoice of the sale made by dealer to company
2. Invoice of the sale made by company to customer

## The supplying flow
1. The supplier sends an excel catalog of the available items to dealer.
2. Dealer forwards the catalog to the company.
3. Company creates an offer to a customer.
4. Customer replies with his desired items, including the quantity and the price he wishes to pay for each item.
5. After negotiation, company and customer agree on a final offer.
6. The customer places an order based on the final offer to the company.
7. Company receives the offer, and tries to sell the leftover items from the catalog to another customer. A unique order is produced for each customer.
8. Company forwards the orders to the dealer.
9. Dealer places orders to the supplier. Each customer has a different order.
10. Supplier receives the orders, and sends the items to the warehouse.
11. When all the items are stored at the warehouse, supplier issues invoices to the dealer.
12. On shipping day, dealer issues invoice to company, and then on the same day company issues the invoice to customer.

## Supplier’s Available Items Excel
- The supplier sends a an excel of available items. Each item has quantity and price (EUR). Some items have discount (%), and then we can see the price before and after the discount.
- Upon receiving the excel, the dealer builds his own excel in the “known format”, and aggregates the items in order to see the buying total price.
- For each item, the dealer specifies the selling price to the customer, and sees the total selling price. This is offer version #1.
- The dealer forwards the offer to the company (including the items, the prices and the total) and the company sends the offer to customer.
- Each negotiation round results in a new offer version (#2, #3, …). The version that is used for calculating the leftovers is always the latest version.
- When the company and the customer agree on an offer, it is marked as the “final offer”, and the customer places an order to the company.
- Company forwards the order to the dealer, and the dealer places an order to the supplier.

## Building the invoices
- Each item has its custom code.
- We know the custom code of each item, but we do not receive it from the supplier.
- The items are grouped by their custom codes.

## Further topics
- CMRs
- Confirmations & controls
- Banks
