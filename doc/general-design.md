# Supplying Admin

## Entities
- Business: A player that can either offers and orders, or provide a kind of service
    - name
    - type (Business Type)
    - deals
    - offers
    - orders

- Deal: A group of offers and orders.
    - Supplier
    - Owner
    - Offers

- Product: Goods that selling them provides profit.
    - Manufacturer
    - Model
    - Harmonized System Code
    
- Items catalog: A group of catalog items.
    - Catalog items
    
- Catalog Item: A product inside a catalog
    - Product
    - Price
    - Quantity
    - Discount
    
- Offer: A group of catalog items, each item includes quantity and price. An offer is made of an array of Offer Versions/Rounds. The latest offer can be marked as the “final offer”.
    - Offer Rounds
    - Offerer
    - Oferree
    
- Order: Linked to an offer, this is one side A wants to buy the offer that was offered by side B.
    - Catalog

- Harmonized System Code
    - name
    - code

- Shipping: The process of delivery of the order from the warehouse to the customer.
- Invoice: Based on an order, but includes only the items that were actually delivered to the customer.
- CMR: A certificate that the items arrived at the customer’s warehouse.


## Business Types
- Supplier: Sells items to the local company, and send the items to the warehouse.
- Local company (Trans Computers): Buys items from supplier, and sells them to foreign company.
- Foreign company (Danieli Supplies): Buys items from local company, and sells them to customer.
- Customer: Buys items from foreign company. There can be many customers
- Warehouse: Receives the items from the supplier, builds pallets per TO_SUPPLIER_ORDER and gives them to export.
- Export: Collects the pallets from the warehouse, and delivers them to the customers (door to door).


## Order types
- CUSTOMER_ORDER: After final negotiation, customer sends an order to foreign company.
- TO_SUPPLIER_ORDER: Based on customer's order, local company sends an order to supplier.

## Invoice types that are produced after the process
- LOCAL_COMPANY_TO_FOREIGN_COMPANY_INVOICE: Invoice of the sale made by local company to foreign company
- TO_CUSTOMER_INVOICE: Invoice of the sale made by foreign company to customer

## The supplying flow
- The supplier sends an Excel catalog of the available items to local company.
- Local company forwards the catalog to the foreign company.
- Foreign company creates an offer to a customer.
- Customer replies with his desired items, including the quantity, and the price he wishes to pay for each item.
- After negotiation, foreign company and customer agree on a final offer.
- The customer places an order based on the final offer to the foreign company.
- Foreign company receives the offer, and tries to sell the leftover items from the catalog to another customer. A unique order is produced for each customer.
- The foreign company may receive an up to date catalog that extends the original catalog from the supplier.
- Then, the foreign company may offer the additional items both to existing customers and new customers. Each customer may have multiple offers and orders in the same deal.
- Sometimes, the foreign company negotiates with the supplier regarding price and quantity, exactly like foreign company/local company negotiates with a customer.
- Foreign company forwards the orders to the local company.
- Local company places orders to the supplier. Each customer has a different order.
- Supplier receives the orders, and sends the items to the warehouse.
- When all the items are stored at the warehouse, supplier issues invoices to the local company.
- On shipping day, local company issues invoice to foreign company, and then on the same day foreign company issues the invoice to customer.

## Supplier’s Available Items Excel
- The supplier sends a an excel of available items. Each item has quantity and price (EUR). Some items have discount (%), and then we can see the price before and after the discount.
- Upon receiving the excel, the local company builds his own excel in the “known format”, and aggregates the items in order to see the buying total price.
- For each item, the local company specifies the selling price to the customer, and sees the total selling price. This is offer version #1.
- The local company forwards the offer to the foreign company (including the items, the prices and the total) and the foreign company sends the offer to customer.
- Each negotiation round results in a new offer version (#2, #3, …). The version that is used for calculating the leftovers is always the latest version.
- When the foreign company and the customer agree on an offer, it is marked as the “final offer”, and the customer places an order to the foreign company.
- Foreign company forwards the order to the local company, and the local company places an order to the supplier.

## Building the invoices
- Each item has its custom code.
- We know the custom code of each item, but we do not receive it from the supplier.
- The items are grouped by their custom codes.

## Further topics
- CMRs
- Confirmations & controls
- Banks
