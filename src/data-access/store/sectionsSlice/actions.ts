import { Section1Type } from "../../types";
import { AppDispatch } from "../store";
import { sectionsSlice } from "./slice";

const { updateSection1 } = sectionsSlice.actions;

const updateSection1Data = async (
  dispatch: AppDispatch,
  section: Section1Type
) => {
  dispatch(updateSection1(section));
};

export { updateSection1Data };
