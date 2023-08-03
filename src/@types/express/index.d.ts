//subscreve uma tipagem dentro da biblioteca do express

declare namespace Express {
  export interface Request {
    user: {
      id: string;
    };

    company: {
      id: string;
    };

    city: {
      id: string;
    };

    tenant: {
      id: string;
    };
  }
}
