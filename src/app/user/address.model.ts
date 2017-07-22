import { State } from '../forms/state-picker/state.model';
export interface Address {
  id?: number;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: State;
  zipCode: string;
}
