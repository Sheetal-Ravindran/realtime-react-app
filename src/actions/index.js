import { SUBMIT_FORM } from "./types";

export const submitForm = (input) => {
  return {
    type: SUBMIT_FORM,
    payload: input,
  };
};
