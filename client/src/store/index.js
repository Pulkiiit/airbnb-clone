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

const placeSlice = createSlice({
  name: "place",
  initialState: {
    title: "",
    address: "",
    addedPhotos: [],
    photoLink: "",
    description: "",
    perks: [],
    extraInfo: "",
    checkInTime: "",
    checkOutTime: "",
    maxGuests: 1,
  },
  reducers: {
    setTitle(state, action) {
      state.title = action.payload;
    },
    setAddress(state, action) {
      state.address = action.payload;
    },
    setAddedPhotos(state, action) {
      state.addedPhotos = state.addedPhotos.concat(action.payload);
    },
    removeAddedPhotos(state, action) {
      state.addedPhotos = state.addedPhotos.filter(
        photo => photo !== action.payload
      );
    },
    setPhotoLink(state, action) {
      state.photoLink = action.payload;
    },
    setDescription(state, action) {
      state.description = action.payload;
    },
    setPerks(state, action) {
      state.perks = state.perks.concat(action.payload);
    },
    removePerks(state, action) {
      state.perks = state.perks.filter(perk => perk !== action.payload);
    },
    setExtraInfo(state, action) {
      state.extraInfo = action.payload;
    },
    setCheckInTime(state, action) {
      state.checkInTime = action.payload;
    },
    setCheckOutTime(state, action) {
      state.checkOutTime = action.payload;
    },
    setMaxGuests(state, action) {
      state.maxGuests = action.payload;
    },
  },
});

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    client: clientSlice.reducer,
    place: placeSlice.reducer,
  },
});

export const clientActions = clientSlice.actions;
export const userActions = userSlice.actions;
export const placeActions = placeSlice.actions;
export default store;
