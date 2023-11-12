import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { az } from "../assets/lang/az";
import { environment } from "../core/configs/app.config";
import { IState } from "./store";
import { ILang } from "../assets/lang/lang";

const initialState: IState = {
  languages: [
    {
      id: 1,
      key: "az",
      value: "AZ",
    },
  ],
  locale: az,
};

export const rootSlice = createSlice({
  name: "root",
  initialState,
  reducers: {
    setLocale: (state: IState, action: PayloadAction<ILang>) => {
      const lang = {
        az,
      };
      state.locale = lang[action.payload];
      localStorage.setItem(
        `${environment.applicationName}-locale`,
        action.payload
      );
    },
  },
});

export const { setLocale } = rootSlice.actions;

export default rootSlice.reducer;
