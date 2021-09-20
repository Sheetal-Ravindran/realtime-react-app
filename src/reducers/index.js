const inputReducer = (input = [], action) => {
  if (action.type === "SUBMIT_FORM") {
    const newInputList = JSON.parse(JSON.stringify(input));
    if (action.payload.firstname && action.payload.lastname) {
      newInputList.push(action.payload);
    }
    return newInputList;
  }
  return input;
};

export default inputReducer;
