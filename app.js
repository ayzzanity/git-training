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
let currentId;
let currentInput;
let textInput;

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
box1.addEventListener("click", HtmlFn().editBox);
box2.addEventListener("click", HtmlFn().editBox);
box3.addEventListener("click", HtmlFn().editBox);
box4.addEventListener("click", HtmlFn().editBox);
box5.addEventListener("click", HtmlFn().editBox);
box6.addEventListener("click", HtmlFn().editBox);
box7.addEventListener("click", HtmlFn().editBox);
box8.addEventListener("click", HtmlFn().editBox);

function HtmlFn() {
  //EDITABLE BOX
  function editBox(event) {
    //temporarily removing event listener on box
    event.target.removeEventListener("click", editBox);
    console.clear();
    let cc = checkEmptyVal();
    //if user switched to new box
    if (currentId != undefined && currentId != event.target.id) {
      try {
        //get element of previous
        let prevBox = document.getElementById(currentId);
        //checking if input is blank
        if (textInput.value != "") {
          //saving text input to array
          prevBox.innerHTML = saveBox(textInput.value);
          //checking answer of prev box
          LogicFn().checkingAnswer(arr);
        } else {
          //get input data from array
          prevBox.innerHTML = getBoxValue(currentId);
        }
        //restore event listener of prev box
        prevBox.addEventListener("click", editBox);
      } catch (e) {
        console.log(e);
      }
    }
    //setting new box as current id
    currentId = event.target.id;
    //creating text box
    //if last box, add ok button
    if (cc <= 2) {
      event.target.innerHTML = `<input id="num-input" maxlength="1"></input>
      <button id="ok-button" type="submit">OK</button>`;
      try {
        // check final answer if ok is pressed
        btn = document.getElementById("ok-button");
        btn.addEventListener("click", () => {
          //saving num to array
          event.target.innerHTML = saveBox(textInput.value);
          //checking answer
          LogicFn().checkingAnswer(arr);
        });
      } catch (e) {}
    } else {
      //else just input box
      event.target.innerHTML = `<input id="num-input" maxlength="1"></input>`;
    }
    try {
      //txt input element
      textInput = document.getElementById("num-input");
      textInput.focus();
      textInput.select();
    } catch (e) {}
  }

  //check if only one box left to enter
  function checkEmptyVal() {
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].value == "") {
        counter++;
      }
    }
    return counter;
  }
  //save text input to box
  function saveBox(boxVal) {
    if (boxVal <= 8 && boxVal >= 1) {
      //adding to array and updating box, restoring event listener
      (async () => {
        await addToArr(currentId, boxVal);
      })();
    } else {
      alert("Please enter 1-8 only");
    }
    return boxVal;
  }
  //getting box value from array
  function getBoxValue(boxNum) {
    let val;
    arr.forEach((obj) => {
      if (obj.id === boxNum) {
        val = obj.value;
      }
    });
    return val;
  }
  //adding box info to array
  function addToArr(boxNum, boxVal) {
    //update value for existing box
    return new Promise((resolve, reject) => {
      arr.forEach((obj) => {
        if (obj.id === boxNum) {
          obj.value = boxVal;
        }
      });
      resolve(console.log(arr));
    });
  }
  return { editBox };
}

function LogicFn() {
  const checkingAnswer = (data) => {
    let score = 0;
    const audio = new Audio("error.mp3");
    const audio2 = new Audio("winner.mp3");
    data.map((value) => {
      let boxValue = parseInt(value.value);
      if (value.id == "box1" && value.value != "") {
        try {
          if (value.value == "1") {
            if (
              boxValue + 1 != data[1].value &&
              boxValue + 1 != data[3].value &&
              boxValue + 1 != data[2].value &&
              boxValue + 1 != data[4].value &&
              boxValue != data[1].value &&
              boxValue != data[3].value &&
              boxValue != data[2].value &&
              boxValue != data[4].value &&
              boxValue != data[5].value &&
              boxValue != data[6].value &&
              boxValue != data[7].value
            ) {
              score = score + 1;

              box1.style.color = "white";
            } else {
              box1.style.color = "red";

              audio.play();
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
              boxValue + 1 != data[4].value &&
              boxValue != data[1].value &&
              boxValue != data[3].value &&
              boxValue != data[2].value &&
              boxValue != data[4].value &&
              boxValue != data[5].value &&
              boxValue != data[6].value &&
              boxValue != data[7].value
            ) {
              score = score + 1;
              box1.style.color = "white";
            } else {
              box1.style.color = "red";

              audio.play();
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
              boxValue + 1 != data[3].value &&
              boxValue + 1 != data[4].value &&
              boxValue + 1 != data[5].value &&
              boxValue != data[0].value &&
              boxValue != data[2].value &&
              boxValue != data[3].value &&
              boxValue != data[4].value &&
              boxValue != data[5].value &&
              boxValue != data[6].value &&
              boxValue != data[7].value
            ) {
              score = score + 1;
              box2.style.color = "white";
            } else {
              box2.style.color = "red";

              audio.play();
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
              boxValue + 1 != data[5].value &&
              boxValue != data[0].value &&
              boxValue != data[2].value &&
              boxValue != data[3].value &&
              boxValue != data[4].value &&
              boxValue != data[5].value &&
              boxValue != data[6].value &&
              boxValue != data[7].value
            ) {
              score = score + 1;
              box2.style.color = "white";
            } else {
              box2.style.color = "red";

              audio.play();
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
              boxValue + 1 != data[6].value &&
              boxValue != data[0].value &&
              boxValue != data[1].value &&
              boxValue != data[3].value &&
              boxValue != data[4].value &&
              boxValue != data[5].value &&
              boxValue != data[6].value &&
              boxValue != data[7].value
            ) {
              score = score + 1;
              box3.style.color = "white";
            } else {
              box3.style.color = "red";

              audio.play();
            }
          } else {
            if (
              boxValue - 1 != data[3].value &&
              boxValue + 1 != data[3].value &&
              boxValue - 1 != data[0].value &&
              boxValue + 1 != data[0].value &&
              boxValue - 1 != data[6].value &&
              boxValue + 1 != data[6].value &&
              boxValue != data[0].value &&
              boxValue != data[1].value &&
              boxValue != data[3].value &&
              boxValue != data[4].value &&
              boxValue != data[5].value &&
              boxValue != data[6].value &&
              boxValue != data[7].value
            ) {
              score = score + 1;
              box3.style.color = "white";
            } else {
              box3.style.color = "red";

              audio.play();
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
              boxValue + 1 != data[7].value &&
              boxValue != data[0].value &&
              boxValue != data[1].value &&
              boxValue != data[2].value &&
              boxValue != data[4].value &&
              boxValue != data[5].value &&
              boxValue != data[6].value &&
              boxValue != data[7].value
            ) {
              score = score + 1;
              box4.style.color = "white";
            } else {
              box4.style.color = "red";

              audio.play();
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
              boxValue + 1 != data[7].value &&
              boxValue != data[0].value &&
              boxValue != data[1].value &&
              boxValue != data[2].value &&
              boxValue != data[4].value &&
              boxValue != data[5].value &&
              boxValue != data[6].value &&
              boxValue != data[7].value
            ) {
              score = score + 1;
              box4.style.color = "white";
            } else {
              box4.style.color = "red";

              audio.play();
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
              boxValue + 1 != data[5].value &&
              boxValue + 1 != data[6].value &&
              boxValue + 1 != data[7].value &&
              boxValue != data[0].value &&
              boxValue != data[1].value &&
              boxValue != data[2].value &&
              boxValue != data[3].value &&
              boxValue != data[5].value &&
              boxValue != data[6].value &&
              boxValue != data[7].value
            ) {
              score = score + 1;
              box5.style.color = "white";
            } else {
              box5.style.color = "red";

              audio.play();
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
              boxValue + 1 != data[6].value &&
              boxValue != data[0].value &&
              boxValue != data[1].value &&
              boxValue != data[2].value &&
              boxValue != data[3].value &&
              boxValue != data[5].value &&
              boxValue != data[6].value &&
              boxValue != data[7].value
            ) {
              score = score + 1;
              box5.style.color = "white";
            } else {
              box5.style.color = "red";

              audio.play();
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
              boxValue + 1 != data[7].value &&
              boxValue != data[0].value &&
              boxValue != data[1].value &&
              boxValue != data[2].value &&
              boxValue != data[3].value &&
              boxValue != data[4].value &&
              boxValue != data[6].value &&
              boxValue != data[7].value
            ) {
              score = score + 1;
              box6.style.color = "white";
            } else {
              box6.style.color = "red";

              audio.play();
            }
          } else {
            if (
              boxValue - 1 != data[4].value &&
              boxValue + 1 != data[4].value &&
              boxValue - 1 != data[1].value &&
              boxValue + 1 != data[1].value &&
              boxValue - 1 != data[7].value &&
              boxValue + 1 != data[7].value &&
              boxValue != data[0].value &&
              boxValue != data[1].value &&
              boxValue != data[2].value &&
              boxValue != data[3].value &&
              boxValue != data[4].value &&
              boxValue != data[6].value &&
              boxValue != data[7].value
            ) {
              score = score + 1;
              box6.style.color = "white";
            } else {
              box6.style.color = "red";

              audio.play();
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
              boxValue + 1 != data[7].value &&
              boxValue != data[0].value &&
              boxValue != data[1].value &&
              boxValue != data[2].value &&
              boxValue != data[3].value &&
              boxValue != data[4].value &&
              boxValue != data[5].value &&
              boxValue != data[7].value
            ) {
              score = score + 1;
              box7.style.color = "white";
            } else {
              box7.style.color = "red";

              audio.play();
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
              boxValue + 1 != data[2].value &&
              boxValue != data[0].value &&
              boxValue != data[1].value &&
              boxValue != data[2].value &&
              boxValue != data[3].value &&
              boxValue != data[4].value &&
              boxValue != data[5].value &&
              boxValue != data[7].value
            ) {
              score = score + 1;
              box7.style.color = "white";
            } else {
              box7.style.color = "red";

              audio.play();
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
              boxValue + 1 != data[6].value &&
              boxValue != data[0].value &&
              boxValue != data[1].value &&
              boxValue != data[2].value &&
              boxValue != data[3].value &&
              boxValue != data[4].value &&
              boxValue != data[5].value &&
              boxValue != data[6].value
            ) {
              score = score + 1;
              box8.style.color = "white";
            } else {
              box8.style.color = "red";

              audio.play();
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
              boxValue + 1 != data[5].value &&
              boxValue != data[0].value &&
              boxValue != data[1].value &&
              boxValue != data[2].value &&
              boxValue != data[3].value &&
              boxValue != data[4].value &&
              boxValue != data[5].value &&
              boxValue != data[6].value
            ) {
              score = score + 1;
              box8.style.color = "white";
            } else {
              box8.style.color = "red";

              audio.play();
            }
          }
        } catch (error) {}
      }
    });
    console.log(`Score is ${score}`);
    if (score == 8) {
      console.log("You are a winner");
      setTimeout(() => {
        audio2.play();
        alert("Congratulations! You got all the correct answers! :D");
      }, 500);
    } else {
      console.log("You are a loser");
    }
  };
  return { checkingAnswer };
}
