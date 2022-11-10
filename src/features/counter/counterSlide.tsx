import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  state: "idle",
};

export const counterSlide = createSlice({
  name: "counter",
  initialState,

  reducers: {
    increment: (state) => {
      state.value += 1;
    },

    decrement: (state) => {
      state.value -= 1;
    },

    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlide.actions;

export const selectCount = (state: any) => state.counter.value;

export default counterSlide.reducer;
