import {Entity, model, property} from '@loopback/repository';

@model({settings: {}})
export class Roles extends Entity {
  @property({
    type: 'number',
    required: true,
    default: 2,
  })
  keys: number;

  @property({
    type: 'string',
    required: true,
  })
  role: string;

  @property({
    type: 'number',
    required: true,
  })
  modified_by: number;

  @property({
    type: 'date',
    required: true,
  })
  modified_at: string;

  @property({
    type: 'date',
    required: true,
  })
  created_at: string;

  @property({
    type: 'number',
    required: true,
  })
  created_by: number;

  @property({
    type: 'number',
    id: true,
  })
  id?: number;


  constructor(data?: Partial<Roles>) {
    super(data);
  }
}
