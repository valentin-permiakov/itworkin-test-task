import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type ApiChoice = {
  url: string;
  name: string;
  isLoading: boolean;
};

const initialState: ApiChoice = {
  url: 'https://rickandmortyapi.com/api/location',
  name: 'Locations',
  isLoading: false,
};

export const apiChoiceSlice = createSlice({
  name: 'apiChoice',
  initialState,
  reducers: {
    changeUrl: (state, action: PayloadAction<string>) => {
      if (action.payload === 'character') {
        state.url = 'https://rickandmortyapi.com/api/character';
        state.name = 'Characters';
      } else {
        return initialState;
      }
    },
    changeIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { changeUrl, changeIsLoading } = apiChoiceSlice.actions;
