import { Action } from '@ngrx/store';
import { Vendor } from 'src/app/features/vendor/models/vendor.model';

export enum VendorActionTypes {
  AddVendor = '[Vendor] Add Vendor'
}

export class AddVendor implements Action {
  readonly type = VendorActionTypes.AddVendor;
  constructor(public payload: Vendor) { }
}

export type VendorActions = AddVendor;
