export enum BusinessType {
    Supplier = "SUPPLIER",
    Dealer = "DEALER",
    Company = "COMPANY",
    Customer = "CUSTOMER",
    Warehouse = "WAREHOUSE",
    Export = "EXPORT",
}

export enum OfferRoundStatus {
    InPreparation = "IN_PREPARATION",
    PendingResponse = "PENDING_RESPONSE",
    Accepted = "ACCEPTED",
    Declined = "DECLINED"
}

export enum OrderStatus {
    Ordered = "ORDERED",
    Shipped = "SHIPPED",
    Delivered = "DELIVERED",
    Failed = "FAILED",
    Canceled = "CANCELED"
}