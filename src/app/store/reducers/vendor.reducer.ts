import { Action } from '@ngrx/store';
import { Vendor } from 'src/app/features/vendor/models/vendor.model';
import * as VendorActions from '../actions/vendor.actions';


export interface State {
  vendors: Vendor[];
}

export const initialState: State = {
  vendors: [
    {
      id: 1,
      title: "vendor 1",
      color: "#007bff",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      title: "vendor 2",
      color: "#e83e8c",
      description: "Integer quis lectus diam. Fusce egestas, urna et pretium facilisis, lectus dui consectetur enim, vehicula molestie lacus arcu nec tellus.",
    },
    {
      id: 3,
      title: "vendor 3",
      color: "#6f42c1",
      description: "Maecenas viverra nulla ac risus dictum imperdiet pulvinar ac lacus. Pellentesque hendrerit volutpat risus quis congue.",
    }
  ],
};

export function reducer(state = initialState, action: VendorActions.VendorActions): State {
  switch (action.type) {
    case VendorActions.VendorActionTypes.AddVendor:
      return handleAddVendor(state, action);
    default:
      return state;
  }
}

function handleAddVendor(state: State, action: VendorActions.AddVendor): State {
  return {
    ...state, vendors: [...state.vendors, action.payload]
  }
};