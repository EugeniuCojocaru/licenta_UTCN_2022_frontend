import { sectionsSlice } from "./slice";
import { AppDispatch } from "../store";
import { Section1 } from "../../types/sectionsTypes";

const { updateSection1 } = sectionsSlice.actions;

const updateSection1Data = async (dispatch: AppDispatch, section: Section1) => {
  dispatch(updateSection1(section));
};

export { updateSection1Data };
