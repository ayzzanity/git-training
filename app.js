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
    //setting new box as current id
    currentId = event.target.id;
    //creating text box
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
        if (num.value <= 8 && num.value >= 1) {
          //adding to array and updating box, restoring event listener
          (async () => {
            await addToArr(currentId, num.value);
          })();
          event.target.innerHTML = num.value;
          event.target.addEventListener("click", editBox);
          //checking answer
          LogicFn().checkingAnswer(arr);
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
