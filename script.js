console.log("hi");

var jeopardy = {
  questions: {
    qOne:
      "This activist said 'Me Too' 12 years prior to the movements present day prominece, but she is often forgotten as its creator",
    qTwo:
      "This immigration activist climbed the Statue of Liberty in protest of the seperation of families at the US/Mexico border",
    qThree:
      "The 1994 crime bill, the catalyst for the mass incarceration of people of color was authored by this former Delaware senator",
    qFour:
      "This civil rights herione said this famous quote in a speech at the 1964 Democratic National Convention 'Im sick and tired, of being sick and tired!'",
    qFive: "",
    qSix: ""
  },

  answers: {
    qOne: "who is tarana burke",
    qTwo: "who is therese okumou",
    qThree: "who is joe biden",
    qFour: "who is fannie louhamer",
    qFive: "",
    qSix: ""
  },

  checkAnswer: function(question) {
    let attempts = 0;
    // console.log("in while loop");
    while (attempts <= 2) {
      console.log("in while loop");
      this.answer = window.prompt(
        this.questions[question],
        "What is your answer"
      );
      if (this.answers[question] === this.answer) {
        this.success = true;
        alert("You are correct!");
        //make question anchor inactive
        //close alert box
        break; //break or return bc we are done
      } else {
        this.attempts++;
        alert("You are incorrect...try again");
        //return to text box
        break;
      }
    }
  }
};
// only works on intial load, need to be looped. have to refresh between selection
const qOne = document.getElementsByClassName("box qOne");
console.log(qOne);
qOne[0].addEventListener("click", function() {
  jeopardy.checkAnswer("qOne");
});

const qTwo = document.getElementsByClassName("box qTwo");
console.log(qTwo);
qTwo[0].addEventListener("click", function() {
  jeopardy.checkAnswer("qTwo");
});

const qThree = document.getElementsByClassName("box qThree");
console.log(qThree);
qThree[0].addEventListener("click", function() {
  jeopardy.checkAnswer("qThree");
});

const qFour = document.getElementsByClassName("box qFour");
console.log(qFour);
qFour[0].addEventListener("click", function() {
  jeopardy.checkAnswer("qFour");
});

const qFive = document.getElementsByClassName("box qFive");
console.log(qFive);
qFive[0].addEventListener("click", function() {
  jeopardy.checkAnswer("qFive");
});

const qSix = document.getElementsByClassName("box qSix");
console.log(qSix);
qSix[0].addEventListener("click", function() {
  jeopardy.checkAnswer("qSix");
});
