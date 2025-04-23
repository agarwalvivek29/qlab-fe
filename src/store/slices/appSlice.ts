import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  demoValue: 'Hello Redux!',
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setDemoValue: (state, action) => {
      state.demoValue = action.payload;
    },
  },
});

export const { setDemoValue } = appSlice.actions;
export default appSlice.reducer;
