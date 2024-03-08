import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface StreamState {
  streamData: any;
}

const initialState: StreamState = {
  streamData: {},
};

export const streamSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    updateStream: (state, action: PayloadAction<any>) => {
      state.streamData = action.payload;
    },
  },
});

export const { updateStream } = streamSlice.actions;

export default streamSlice.reducer;
