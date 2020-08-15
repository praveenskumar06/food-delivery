export interface Orders {
    id: number;
    orderId: string;
    userId: string;
    orderItems: string[];
    totalAmount: number;
    foodName: string;
    foodPrice: number;
}