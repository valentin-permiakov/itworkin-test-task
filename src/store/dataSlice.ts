import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type DataObject = {
  id: number;
  name: string;
  type: string;
  url: string;
  created: string;
  status?: string;
  species?: string;

  gender?: string;
  origin?: {
    name: string;
    url: string;
  };
  location?: {
    name: string;
    url: string;
  };
  image?: string;
  episode?: Array<string>;
  dimension?: string;
  residents?: Array<string>;
};
type DataSlice = {
  data: Array<DataObject>;
};

const initialState: DataSlice = {
  data: [],
};

export const dataSlice = createSlice({
  name: 'dataSlice',
  initialState,
  reducers: {
    updateData: (state, action: PayloadAction<[]>) => {
      state.data = action.payload;
    },
  },
});

export const { updateData } = dataSlice.actions;
