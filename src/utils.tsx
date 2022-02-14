import { Orders } from "./generated/graphql";

export const towDecimal = (num: number) => Math.round(num * 100) / 100;

export const calcTotalAmount = (orders: Array<Orders>) =>
  orders.reduce((memo, order) => {
    return order.order_items_aggregate.aggregate?.sum?.ttc_price + memo;
  }, 0);
