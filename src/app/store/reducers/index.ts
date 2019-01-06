import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { Vendor } from 'src/app/features/vendor/models/vendor.model';
import * as fromVendor from './vendor.reducer';

export interface State {
  vendor: fromVendor.State;
}

export const reducers: ActionReducerMap<State> = {
  vendor: fromVendor.reducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];