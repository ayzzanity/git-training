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
let input;
let currentId;

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
box1.addEventListener("click", editBox);
box2.addEventListener("click", editBox);
box3.addEventListener("click", editBox);
box4.addEventListener("click", editBox);
box5.addEventListener("click", editBox);
box6.addEventListener("click", editBox);
box7.addEventListener("click", editBox);
box8.addEventListener("click", editBox);

//EDITABLE BOX
function editBox(event) {
  //temporarily removing event listener on box
  event.target.removeEventListener("click", editBox);
  event.preventDefault();
  //check what box num
  if (currentId != undefined && currentId != event.target.id) {
    try {
      let currentBox = document.getElementById(currentId);
      currentBox.innerHTML = getBoxValue(currentId);
      currentBox.addEventListener("click", editBox);
      currentId = event.target.id;
    } catch (e) {}
  }

  //creating text box
  currentId = event.target.id;
  try {
    event.target.innerHTML = `
          <input id="num-input" maxlength="1"></input>
          <button id="ok-button" type="submit">OK</button>`;
    //button and txt input elements
    let num = document.getElementById("num-input");
    let btn = document.getElementById("ok-button");
    //btn listener
    btn.addEventListener("click", () => {
      console.clear();
      //checking if num is 1-8
      if (num.value <= 8 && num.value >= 0) {
        //checking if num already in the box / array
        input = num.value;
        let numFound = arr.some((el) => el.value === num.value);
        if (!numFound || input == num.value) {
          //adding to array and updating box, restoring event listener
          (async () => {
            await addToArr(currentId, num.value);
          })();
          event.target.innerHTML = num.value;
          event.target.addEventListener("click", editBox);
          //checking answer
          checkingAnswer(arr);
        } else {
          alert("Number already exists!");
        }
      } else {
        alert("Please enter 1-8 only");
      }
    });
  } catch (e) {}
}
function getBoxValue(boxNum) {
  let val;
  arr.forEach((obj) => {
    if (obj.id === boxNum) {
      val = obj.value;
    }
  });
  return val;
}
//ADDING BOX NUM AND VALUE TO ARRAY
function addToArr(boxNum, boxVal) {
  //update value for existing box
  return new Promise((resolve, reject) => {
    arr.forEach((obj) => {
      if (obj.id === boxNum) {
        obj.value = boxVal;
      }
    });
    //console.log(arr);
    resolve(console.log(arr));
  });
}

const checkingAnswer = (data) => {
  var score = 0;
  data.map((value) => {
    let boxValue = parseInt(value.value);
    console.log(`checking ${value.id}`);
    if (value.id == "box1" && value.value != "") {
      try {
        if (value.value == "1") {
          if (
            boxValue + 1 != data[1].value &&
            boxValue + 1 != data[3].value &&
            boxValue + 1 != data[2].value &&
            boxValue + 1 != data[4].value
          ) {
            score = score + 1;

            console.log("box 1 is correct", score);
            box1.style.color = "white";
          } else {
            console.log("box 1 is wrong");
            box1.style.color = "red";
          }
        } else {
          if (
            boxValue - 1 != data[1].value &&
            boxValue + 1 != data[1].value &&
            boxValue - 1 != data[3].value &&
            boxValue + 1 != data[3].value &&
            boxValue - 1 != data[2].value &&
            boxValue + 1 != data[2].value &&
            boxValue - 1 != data[4].value &&
            boxValue + 1 != data[4].value
          ) {
            score = score + 1;
            console.log("box 1 is correct");
            box1.style.color = "white";
          } else {
            console.log("box 1 is wrong");
            box1.style.color = "red";
          }
        }
      } catch (error) {
        console.log(error);
      }
    }

    if (value.id == "box2" && value.value != "") {
      try {
        if (value.value == "1") {
          if (
            boxValue + 1 != data[0].value &&
            boxValue + 1 != data[2].value &&
            boxValue + 1 != data[3].value &&
            boxValue + 1 != data[4].value
          ) {
            score = score + 1;
            console.log("box 2 is correct");
            box1.style.color = "white";
          } else {
            console.log("box 2 is wrong");
            box1.style.color = "red";
          }
        } else {
          if (
            boxValue - 1 != data[0].value &&
            boxValue + 1 != data[0].value &&
            boxValue - 1 != data[4].value &&
            boxValue + 1 != data[4].value &&
            boxValue - 1 != data[3].value &&
            boxValue + 1 != data[3].value &&
            boxValue - 1 != data[5].value &&
            boxValue + 1 != data[5].value
          ) {
            score = score + 1;
            console.log("box 2 is correct");
            box2.style.color = "white";
          } else {
            console.log("box 2 is wrong");
            box2.style.color = "red";
          }
        }
      } catch (error) {}
    }
    if (value.id == "box3" && value.value != "") {
      try {
        if (value.value == "1") {
          if (
            boxValue + 1 != data[0].value &&
            boxValue + 1 != data[3].value &&
            boxValue + 1 != data[6].value
          ) {
            score = score + 1;
            console.log("box 3 is correct");
            box3.style.color = "white";
          } else {
            console.log("box 3 is wrong");
            box3.style.color = "red";
          }
        } else {
          if (
            boxValue - 1 != data[3].value &&
            boxValue + 1 != data[3].value &&
            boxValue - 1 != data[0].value &&
            boxValue + 1 != data[0].value &&
            boxValue - 1 != data[6].value &&
            boxValue + 1 != data[6].value
          ) {
            score = score + 1;
            console.log("box 3 is correct");
            box3.style.color = "white";
          } else {
            console.log("box 3 is wrong");
            box3.style.color = "red";
          }
        }
      } catch (error) {}
    }
    if (value.id == "box4" && value.value != "") {
      try {
        if (value.value == "1") {
          if (
            boxValue + 1 != data[0].value &&
            boxValue + 1 != data[1].value &&
            boxValue + 1 != data[2].value &&
            boxValue + 1 != data[4].value &&
            boxValue + 1 != data[6].value &&
            boxValue + 1 != data[7].value
          ) {
            score = score + 1;
            console.log("box 4 is correct");
            box4.style.color = "white";
          } else {
            console.log("box 4 is wrong");
            box4.style.color = "red";
          }
        } else {
          if (
            boxValue - 1 != data[0].value &&
            boxValue + 1 != data[0].value &&
            boxValue - 1 != data[2].value &&
            boxValue + 1 != data[2].value &&
            boxValue - 1 != data[4].value &&
            boxValue + 1 != data[4].value &&
            boxValue - 1 != data[6].value &&
            boxValue + 1 != data[6].value &&
            boxValue - 1 != data[1].value &&
            boxValue + 1 != data[1].value &&
            boxValue - 1 != data[7].value &&
            boxValue + 1 != data[7].value
          ) {
            score = score + 1;
            console.log("box 4 is correct");
            box4.style.color = "white";
          } else {
            console.log("box 4 is wrong");
            box4.style.color = "red";
          }
        }
      } catch (error) {}
    }
    if (value.id == "box5" && value.value != "") {
      try {
        if (value.value == "1") {
          if (
            boxValue + 1 != data[0].value &&
            boxValue + 1 != data[1].value &&
            boxValue + 1 != data[3].value &&
            boxValue + 1 != data[4].value &&
            boxValue + 1 != data[5].value &&
            boxValue + 1 != data[6].value &&
            boxValue + 1 != data[7].value
          ) {
            score = score + 1;
            console.log("box 5 is correct");
            box5.style.color = "white";
          } else {
            console.log("box 5 is wrong");
            box5.style.color = "red";
          }
        } else {
          if (
            boxValue - 1 != data[1].value &&
            boxValue + 1 != data[1].value &&
            boxValue - 1 != data[3].value &&
            boxValue + 1 != data[3].value &&
            boxValue - 1 != data[5].value &&
            boxValue + 1 != data[5].value &&
            boxValue - 1 != data[7].value &&
            boxValue + 1 != data[7].value &&
            boxValue - 1 != data[0].value &&
            boxValue + 1 != data[0].value &&
            boxValue - 1 != data[6].value &&
            boxValue + 1 != data[6].value
          ) {
            score = score + 1;
            console.log("box 5 is correct");
            box5.style.color = "white";
          } else {
            console.log("box 5 is wrong");
            box5.style.color = "red";
          }
        }
      } catch (error) {}
    }
    if (value.id == "box6" && value.value != "") {
      try {
        if (value.value == "1") {
          if (
            boxValue + 1 != data[1].value &&
            boxValue + 1 != data[4].value &&
            boxValue + 1 != data[7].value
          ) {
            score = score + 1;
            console.log("box 6 is correct");
            box6.style.color = "white";
          } else {
            console.log("box 6 is wrong");
            box6.style.color = "red";
          }
        } else {
          if (
            boxValue - 1 != data[4].value &&
            boxValue + 1 != data[4].value &&
            boxValue - 1 != data[1].value &&
            boxValue + 1 != data[1].value &&
            boxValue - 1 != data[7].value &&
            boxValue + 1 != data[7].value
          ) {
            score = score + 1;
            console.log("box 6 is correct");
            box6.style.color = "white";
          } else {
            console.log("box 6 is wrong");
            box6.style.color = "red";
          }
        }
      } catch (error) {}
    }
    if (value.id == "box7" && value.value != "") {
      try {
        if (value.value == "1") {
          if (
            boxValue + 1 != data[2].value &&
            boxValue + 1 != data[3].value &&
            boxValue + 1 != data[4].value &&
            boxValue + 1 != data[7].value
          ) {
            score = score + 1;
            console.log("box 7 is correct");
            box7.style.color = "white";
          } else {
            console.log("box 7 is wrong");
            box7.style.color = "red";
          }
        } else {
          if (
            boxValue - 1 != data[3].value &&
            boxValue + 1 != data[3].value &&
            boxValue - 1 != data[7].value &&
            boxValue + 1 != data[7].value &&
            boxValue - 1 != data[4].value &&
            boxValue + 1 != data[4].value &&
            boxValue - 1 != data[2].value &&
            boxValue + 1 != data[2].value
          ) {
            score = score + 1;
            console.log("box 7 is correct");
            box7.style.color = "white";
          } else {
            console.log("box 7 is wrong");
            box7.style.color = "red";
          }
        }
      } catch (error) {}
    }
    if (value.id == "box8" && value.value != "") {
      try {
        if (value.value == "1") {
          if (
            boxValue + 1 != data[3].value &&
            boxValue + 1 != data[4].value &&
            boxValue + 1 != data[5].value &&
            boxValue + 1 != data[6].value
          ) {
            score = score + 1;
            console.log("box 7 is correct");
            box8.style.color = "white";
          } else {
            console.log("box 7 is wrong");
            box8.style.color = "red";
          }
        } else {
          if (
            boxValue - 1 != data[4].value &&
            boxValue + 1 != data[4].value &&
            boxValue - 1 != data[6].value &&
            boxValue + 1 != data[6].value &&
            boxValue - 1 != data[3].value &&
            boxValue + 1 != data[3].value &&
            boxValue - 1 != data[5].value &&
            boxValue + 1 != data[5].value
          ) {
            score = score + 1;
            console.log("box 8 is correct");
            box8.style.color = "white";
          } else {
            console.log("box 8 is wrong");
            box8.style.color = "red";
          }
        }
      } catch (error) {}
    }
  });
  console.log(score);
  if (score == 8) {
    console.log("You are a winner");
    setTimeout(() => {
      alert("Congratulations! You got all the correct answers! :D");
    }, 500);
  } else {
    console.log("You are a loser");
  }
};

//checkingAnswer(arr);
