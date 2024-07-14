import { Movie, Product, RequestTokenResponse } from "../types/item/itemTypes";

export const initialState = {
  common: {
    loading: false as boolean,
    error: "" as string,
    success: false as boolean,
    contents: [] as Array<Movie | Product> | RequestTokenResponse
  }
};