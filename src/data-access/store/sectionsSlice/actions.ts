import { Section1 } from "../../types";
import { AppDispatch } from "../store";
import { sectionsSlice } from "./slice";

const { updateSection1 } = sectionsSlice.actions;

const updateSection1Data = async (dispatch: AppDispatch, section: Section1) => {
  dispatch(updateSection1(section));
};

export { updateSection1Data };
