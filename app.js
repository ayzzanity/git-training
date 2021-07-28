let arr = [];
//document.getElementbyId
const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");
const box4 = document.getElementById("box4");
const box5 = document.getElementById("box5");
const box6 = document.getElementById("box6");
const box7 = document.getElementById("box7");
const box8 = document.getElementById("box8");

//addEventListener
box1.addEventListener("click", editBox, { once: true });
box2.addEventListener("click", editBox, { once: true });
box3.addEventListener("click", editBox, { once: true });
box4.addEventListener("click", editBox, { once: true });
box5.addEventListener("click", editBox, { once: true });
box6.addEventListener("click", editBox, { once: true });
box7.addEventListener("click", editBox, { once: true });
box8.addEventListener("click", editBox, { once: true });

function editBox(event) {
  //getting box id
  event.preventDefault();
  console.log("clicked");
  //creating text box
  try {
    event.target.innerHTML = `
          <input id="num-input" maxlength="1"></input>
          <button id="ok-button" type="submit">OK</button>`;
    let num = document.getElementById("num-input");
    let btn = document.getElementById("ok-button");
    btn.addEventListener("click", () => {
      if (num.value <= 8 && num.value >= 1) {
        addToArr(event.target.id, num.value);
        event.target.innerHTML = num.value;
        btn.removeEventListener("click", () => {
          console.log("removed");
        });
      } else {
        alert("Please enter 1-8 only");
      }
    });
  } catch (e) {
    console.log(e);
  }
}

function addToArr(boxNum, boxVal) {
  const found = arr.some((el) => el.id === boxNum);
  if (!found) {
    arr = [...arr, { id: boxNum, value: boxVal }];
  } else {
    console.log("box already exist");
  }
  arr.sort((a, b) => (a.id > b.id ? 1 : b.id > a.id ? -1 : 0));
  console.log(arr);
}

const checkingAnswer = () => {
  //box1 value is not equals to +- the value of box2 and box4
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
