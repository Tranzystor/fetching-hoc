export const getUserInfo = id => {
  return new Promise(resolve => setTimeout(resolve, 1000)).then(x => {
    const isError = Math.random() >= 0.5;
    if (isError) {
      console.log("failed fetching user info");
      throw "server error";
    }
    return {
      id,
      firstName: "jan",
      lastName: "kowalski"
    };
  });
};

export const getExaminationInfo = id => {
  return new Promise(resolve => setTimeout(resolve, 1000)).then(x => {
    const isError = Math.random() >= 0.7;
    if (isError) {
      console.log("failed fetching examination info");
      throw "server error";
    }
    return {
      id,
      examinationType: "ecg",
      examinationStatus: "in-progress"
    };
  });
};
