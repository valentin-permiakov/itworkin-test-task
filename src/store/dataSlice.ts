import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ParsedDataObj } from '../api/requestData';

export type DataKeys = keyof ParsedDataObj;

type DataSlice = {
  data: Array<ParsedDataObj>;
  currentPage: number;
  itemsPerPage: number;
  shownData: Array<ParsedDataObj>;
  totalPages: number;
  startIndex: number;
};

const initialState: DataSlice = {
  data: [],
  currentPage: 1,
  itemsPerPage: 10,
  shownData: [],
  totalPages: 0,
  startIndex: 0,
};

export const dataSlice = createSlice({
  name: 'dataSlice',
  initialState,
  reducers: {
    updateData: (state, action: PayloadAction<Array<ParsedDataObj>>) => {
      state.data = action.payload;
      state.currentPage = 1;
      state.totalPages = Math.ceil(state.data.length / state.itemsPerPage);
      state.shownData = state.data.slice(state.startIndex, state.itemsPerPage);
    },
    sortByProperty: (
      state,
      acrtion: PayloadAction<[DataKeys, 'asc' | 'desc']>
    ) => {
      const [property, order] = acrtion.payload;
      state.currentPage = 1;

      state.shownData = state.data
        .sort((a, b) => {
          const valueA = a[property];
          const valueB = b[property];

          if (typeof valueA === 'number' && typeof valueB === 'number') {
            return order === 'asc' ? valueA - valueB : valueB - valueA;
          }

          const stringA = String(valueA).toLowerCase();
          const stringB = String(valueB).toLowerCase();

          if (stringA < stringB) return order === 'asc' ? -1 : 1;
          if (stringA > stringB) return order === 'asc' ? 1 : -1;
          return 0; // Values are equal
        })
        .slice(0, state.itemsPerPage);
    },
    searchByName: (state, action: PayloadAction<string>) => {
      if (action.payload.length === 0) {
        state.shownData = state.data.slice(0, state.itemsPerPage);
      } else {
        state.shownData = state.data.filter((obj) =>
          obj.name.toLowerCase().includes(action.payload.toLowerCase())
        );
      }
    },

    // pagination
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage += action.payload;
      state.startIndex = (state.currentPage - 1) * state.itemsPerPage;
      const endIndex = state.startIndex + state.itemsPerPage;
      state.shownData = state.data.slice(state.startIndex, endIndex);
    },
    changeItemsPerPage: (state, action: PayloadAction<number>) => {
      state.currentPage = 1;
      state.itemsPerPage = action.payload;
      state.totalPages = Math.ceil(state.data.length / state.itemsPerPage);
      state.shownData = state.data.slice(0, state.itemsPerPage);
    },
  },
});

export const {
  updateData,
  sortByProperty,
  searchByName,
  setCurrentPage,
  changeItemsPerPage,
} = dataSlice.actions;
