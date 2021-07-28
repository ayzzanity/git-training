let box1, box2, box3, box4, box5, box6, box7, box8;

const checkingAnswer = () => {
  //box1 value is not equals to +- the value of box2 and box4
  box1 = 5;
  box2 = 3;
  box4 = 8;
  box3 = 2;
  box5 = 1;
  box6 = 7;
  box7 = 6;
  box8 = 4;
  if (
    box1 - 1 != box2 &&
    box1 + 1 != box2 &&
    box1 - 1 != box4 &&
    box1 + 1 != box4
  ) {
    console.log("box 1 is correct");
  }
  //box2 value is not equals to +- the value of box1 and box5
  if (
    box2 - 1 != box1 &&
    box2 + 1 != box1 &&
    box2 - 1 != box5 &&
    box2 + 1 != box5
  ) {
    console.log("box 2 is correct");
  }
  //box3 value is not equals to +- the value of box4
  if (box3 - 1 != box4 && box3 + 1 != box4) {
    console.log("box 3 is correct");
  }
  //box4 value is not equale to +- the value of box3, box1, box5 and box7
  if (
    box4 - 1 != box1 &&
    box4 + 1 != box1 &&
    box4 - 1 != box3 &&
    box4 + 1 != box3 &&
    box4 - 1 != box5 &&
    box4 + 1 != box5 &&
    box4 - 1 != box7 &&
    box4 + 1 != box7
  ) {
    console.log("box 4 is correct");
  }
  //box5 value is not equals to +- the value of box4, box2, box6 and box8
  if (
    box5 - 1 != box2 &&
    box5 + 1 != box2 &&
    box5 - 1 != box4 &&
    box5 + 1 != box4 &&
    box5 - 1 != box6 &&
    box5 + 1 != box6 &&
    box5 - 1 != box8 &&
    box5 + 1 != box8
  ) {
    console.log("box 5 is correct");
  }
  //box6 value is not equals to +- the value of box5
  if (box6 - 1 != box5 && box6 + 1 != box5) {
    console.log("box 6 is correct");
  }
  //box7 value is not equals to +- the value of box4 and box8
  if (
    box7 - 1 != box4 &&
    box7 + 1 != box4 &&
    box7 - 1 != box8 &&
    box7 + 1 != box8
  ) {
    console.log("box 7 is correct");
  }
  //box8 value is not equals to +- the value of box5 and box7
  if (
    box8 - 1 != box5 &&
    box8 + 1 != box5 &&
    box8 - 1 != box7 &&
    box8 + 1 != box7
  ) {
    console.log("box 8 is correct");
  }
};

checkingAnswer();
