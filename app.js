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
        checkingAnswer(arr);
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

const checkingAnswer = (data) => {
  let points;
  console.log(data);
  data.map((value) => {
    console.log(`checking ${value.id}`);
    if (value.id == "box1") {
      try {
        if (
          value.value - 1 != data[1].value &&
          value.value + 1 != data[1].value &&
          value.value - 1 != data[3].value &&
          value.value + 1 != data[3].value
        ) {
          points = points++;
          console.log("box 1 is correct");
        } else {
          console.log("box 1 is wrong");
        }
      } catch (error) {
        console.log(error);
      }
    }

    if (value.id == "box2") {
      //box2 value is not equals to +- the value of box1 and box5
      try {
        if (
          value.value - 1 != data[0].value &&
          value.value + 1 != data[0].value &&
          value.value - 1 != data[4].value &&
          value.value + 1 != data[4].value
        ) {
          console.log("box 2 is correct");
        } else {
          console.log("box 2 is wrong");
        }
      } catch (error) {}
    }
    if (value.id == "box3") {
      try {
        if (
          value.value - 1 != data[3].value &&
          value.value + 1 != data[3].value
        ) {
          console.log("box 3 is correct");
        } else {
          console.log("box 3 is wrong");
        }
      } catch (error) {}
    }
    if (value.id == "box4") {
      try {
        if (
          value.value - 1 != data[0].value &&
          value.value + 1 != data[0].value &&
          value.value - 1 != data[2].value &&
          value.value + 1 != data[2].value &&
          value.value - 1 != data[4].value &&
          value.value + 1 != data[4].value &&
          value.value - 1 != data[6].value &&
          value.value + 1 != data[6].value
        ) {
          console.log("box 4 is correct");
        } else {
          console.log("box 4 is wrong");
        }
      } catch (error) {}
    }
    if (value.id == "box5") {
      try {
        if (
          value.value - 1 != data[1].value &&
          value.value + 1 != data[1].value &&
          value.value - 1 != data[3].value &&
          value.value + 1 != data[3].value &&
          value.value - 1 != data[5].value &&
          value.value + 1 != data[5].value &&
          value.value - 1 != data[7].value &&
          value.value + 1 != data[7].value
        ) {
          console.log("box 5 is correct");
        } else {
          console.log("box 5 is wrong");
        }
      } catch (error) {}
    }
    if (value.id == "box6") {
      try {
        if (
          value.value - 1 != data[4].value &&
          value.value + 1 != data[4].value
        ) {
          console.log("box 6 is correct");
        } else {
          console.log("box 6 is wrong");
        }
      } catch (error) {}
    }
    if (value.id == "box7") {
      try {
        if (
          value.value - 1 != data[3].value &&
          value.value + 1 != data[3].value &&
          value.value - 1 != data[7].value &&
          value.value + 1 != data[7].value
        ) {
          console.log("box 7 is correct");
        } else {
          console.log("box 7 is wrong");
        }
      } catch (error) {}
    }
    if (value.id == "box8") {
      try {
        if (
          value.value - 1 != data[4].value &&
          value.value + 1 != data[4].value &&
          value.value - 1 != data[6].value &&
          value.value + 1 != data[6].value
        ) {
          console.log("box 8 is correct");
        } else {
          console.log("box 8 is wrong");
        }
      } catch (error) {}
    }
  });
};

//checkingAnswer(arr);
