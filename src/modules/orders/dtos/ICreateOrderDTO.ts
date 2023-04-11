interface ICreateOrderDTO {
  user_id: number;
  store_id: number;
  address_id: number;
  form_payment: string;
  change?: number; //troco em dinheiro
  freight: number; //frete
  discount?: number; //desconto
  subtotal?: number;
  total?: number;
  order_date?: Date;
}

export { ICreateOrderDTO };
