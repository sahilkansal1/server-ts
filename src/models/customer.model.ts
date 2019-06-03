import {Entity, model, property} from '@loopback/repository';

@model({settings: {}})
export class Customer extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  customer_name: string;

  @property({
    type: 'string',
  })
  website?: string;

  @property({
    type: 'string',
    required: true,
  })
  address: string;

  @property({
    type: 'number',
    required: true,
  })
  created_by: number;

  @property({
    type: 'date',
    required: true,
  })
  created_at: string;

  @property({
    type: 'number',
    required: true,
  })
  modifed_by: number;

  @property({
    type: 'date',
    required: true,
  })
  modified_at: string;


  constructor(data?: Partial<Customer>) {
    super(data);
  }
}
