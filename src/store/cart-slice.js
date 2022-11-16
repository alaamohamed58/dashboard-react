import { createSlice } from "@reduxjs/toolkit";

let storedCart = sessionStorage.getItem("cart"),
  storedFarm = sessionStorage.getItem("farm"),
  storedModel = sessionStorage.getItem("model"),
  storedPlan = sessionStorage.getItem("plan");

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    farm: storedFarm ? JSON.parse(storedFarm) : {},
    model: storedModel ? JSON.parse(storedModel) : {},
    plan: storedPlan ? JSON.parse(storedPlan) : {},
    cartItems: storedCart ? JSON.parse(storedCart) : [],
  },
  reducers: {
    addFarm: (state, action) => {
      state.farm.title = action.payload.title;
      state.farm.setupFee = action.payload.fee;
      state.farm.location = action.payload.location;

      sessionStorage.setItem("farm", JSON.stringify(state.farm));
    },

    addModel: (state, action) => {
      state.model.model = action.payload.model;
      state.model.price = action.payload.price;
      state.model.image = action.payload.image;
      state.model.quantity = action.payload.quantity;
      state.model.warrently = action.payload.warrently;
      sessionStorage.setItem("model", JSON.stringify(state.model));
    },
    addPlan: (state, action) => {
      state.plan.plan = action.payload.plan;
      state.plan.power = action.payload.power;
      sessionStorage.setItem("plan", JSON.stringify(state.plan));
    },

    addCartItems: (state) => {
      const properties = Object.assign(state.farm, state.model, state.plan, {
        id: Math.random(),
      });
      state.cartItems.push(properties);

      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },

    removeItem: (state, action) => {
      const id = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== id);
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
