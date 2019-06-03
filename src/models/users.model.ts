import {Entity, model, property} from '@loopback/repository';

@model({settings: {}})
export class Users extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  first_name: string;

  @property({
    type: 'string',
  })
  middle_name?: string;

  @property({
    type: 'string',
  })
  last_name?: string;

  @property({
    type: 'string',
    required: true,
  })
  address: string;

  @property({
    type: 'number',
  })
  phone_no?: number;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'number',
    required: true,
  })
  roles: number;

  @property({
    type: 'date',
    required: true,
  })
  created_at: string;

  @property({
    type: 'date',
    required: true,
  })
  modified_at: string;

  constructor(data?: Partial<Users>) {
    super(data);
  }
}
