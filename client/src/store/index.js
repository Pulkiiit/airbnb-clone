import { createSlice, configureStore } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { name: "", email: "", password: "" },
  reducers: {
    nameHandler(state, action) {
      state.name = action.payload;
    },
    emailHandler(state, action) {
      state.email = action.payload;
    },
    passwordHandler(state, action) {
      state.password = action.payload;
    },
  },
});

const clientSlice = createSlice({
  name: "client",
  initialState: { value: null, ready: false },
  reducers: {
    setClient(state, action) {
      state.value = action.payload;
    },
    setReady(state, action) {
      state.ready = action.payload;
    },
  },
});

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    client: clientSlice.reducer,
  },
});

export const clientActions = clientSlice.actions;
export const userActions = userSlice.actions;
export default store;
