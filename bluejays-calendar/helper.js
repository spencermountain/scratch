const day = (str) => {
  let arr = str.split('/');
  let obj = {
    month: parseInt(arr[0], 10),
    date: parseInt(arr[1], 10),
    year: parseInt('20' + arr[2], 10),
  };
  return spacetime(obj);
};
