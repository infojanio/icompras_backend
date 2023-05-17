interface ICreateOrderDTO {
  user_id: string;
  company_id: string;
  delivery_status_id: string;
  payment_type: string;
  change?: number; //troco em dinheiro
  freight: number; //frete
  discount?: number; //desconto
  subtotal?: number;
  total?: number;
  order_date?: Date;
}

export { ICreateOrderDTO };
