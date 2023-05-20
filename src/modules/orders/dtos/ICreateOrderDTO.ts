interface ICreateOrderDTO {
  user_id: string;
  store_id: string;
  address_id: string;
  product_id: string;
  form_payment: string;
  change?: number; //troco em dinheiro
  freight: number; //frete
  discount?: number; //desconto
  subtotal?: number;
  total?: number;
  order_date?: Date;
}

export { ICreateOrderDTO };
