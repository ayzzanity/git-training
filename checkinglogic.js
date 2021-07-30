let arr = [
  { id: "box1", value: "" },
  { id: "box2", value: "" },
  { id: "box3", value: "" },
  { id: "box4", value: "" },
  { id: "box5", value: "" },
  { id: "box6", value: "" },
  { id: "box7", value: "" },
  { id: "box8", value: "" },
];
const boxvalue = 0;

const boxnumbers = [0, 1, 2, 3, 4, 5, 6, 7];
const checking = (value, index, data) => {
  let result = false;
  const viewbox = boxnumbers.filter((val) => !index.includes(val));

  viewbox.forEach((index) => {
    if (value != data[index].value) {
      result = true;
    } else {
      result = false;
    }
  });
  return result;
};

console.log(checking(boxvalue, [1], arr));
