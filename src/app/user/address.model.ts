import { State } from '../forms/state-picker/state.model';
export interface Address {
  id?: number;
  streetLine1: string;
  streetLine2: string;
  city: string;
  state: State;
  zipCode: string;
}
