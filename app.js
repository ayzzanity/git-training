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

    //comparing current clicked box to previous box
    if (currentId != undefined && currentId != event.target.id) {
      try {
        console.clear();
        let currentBox = document.getElementById(currentId);
        //checking if input is blank
        if (textInput.value != "") {
          //saving text input to array
          currentBox.innerHTML = saveBox(textInput.value);
          //checking answer
          LogicFn().checkingAnswer(arr);
        } else {
          //get input data from array
          currentBox.innerHTML = getBoxValue(currentId);
        }
        //restore event listener of box
        currentBox.addEventListener("click", editBox);
        //setting current box id
        currentId = event.target.id;
      } catch (e) {}
    }
    //setting new box as current id
    currentId = event.target.id;
    //creating text box
    try {
      event.target.innerHTML = `
          <input id="num-input" maxlength="1"></input>
          `;
      //txt input element
      textInput = document.getElementById("num-input");
      textInput.focus();
      textInput.select();
    } catch (e) {}
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
    let boxnumbers = [0, 1, 2, 3, 4, 5, 6, 7];
    let cbox1 = [1];
    let cbox2 = [];
    let cbox3 = [];
    let cbox4 = [];
    let cbox5 = [];
    let cbox6 = [];
    let cbox7 = [];
    let cbox8 = [];
    const audio = new Audio("error.mp3");
    const audio2 = new Audio("winner.mp3");

    const checking = (value, index, data) => {
      let result = true;
      const viewbox = boxnumbers.filter((val) => !index.includes(val));

      viewbox.forEach((index) => {
        if (!(value != data[index].value)) {
          result = false;
        }
      });
      return result;
    };

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
              checking(boxValue, [0], arr)
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
              checking(boxValue, [0], arr)
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
              checking(boxValue, [1], arr)
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
              checking(boxValue, [1], arr)
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
              checking(boxValue, [2], arr)
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
              checking(boxValue, [2], arr)
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
              checking(boxValue, [3], arr)
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
              checking(boxValue, [3], arr)
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
              checking(boxValue, [4], arr)
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
              checking(boxValue, [4], arr)
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
              checking(boxValue, [5], arr)
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
              checking(boxValue, [5], arr)
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
              checking(boxValue, [6], arr)
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
              checking(boxValue, [6], arr)
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
              checking(boxValue, [7], arr)
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
              checking(boxValue, [7], arr)
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
