console.log("hi");

var jeopardy = {
  questions: {
    qOne:
      "This infamous quote 'Im sick and tired, of being sick and tired!' used by Black women when they've had enough, was coined by this civil right activist.",
    qTwo:
      "This activist said 'Me Too' 12 years prior to the movements present day prominence, but she is often forgotten as its creator.",
    qThree:
      "This activist climbed the Statue of Liberty in protest of the inhumane seperation of families at the US/Mexico border.",
    qFour:
      "The 1994 crime bill, the catalyst for the mass incarceration of people of color was authored by this former Delaware senator.",
    qFive:
      "The Anti-Drug Abuse Act of 1986 established mandatory prison sentences for low level drug offenses, disportionally targeting communities of color, is known by what pseudoym?. ",
    qSix:
      "This Amendment ratified in 1865, reestablished slavery as form of punishment, generating roughly $3.9 billion dollars a year in free prison labor from inmates. ",
    qSeven:
      "This Supreme Court Justice believed Black students do not excel at top-tier schools, and even suggested they go to 'slower-track' schools, continuing the age old trope that Black people are not intelligent.",
    qEight:
      "This Supreme Court Justice said 'society can prevent those who are manifestly unfit from continuing their kind' ruling individuals with intellectual disabilities should be permanetnly sterilized. ",
    qNine:
      "This 1896 Supreme Court decision upheld racial segregation with the ruling 'seperate but equal' launching the US into the Jim Crow era. "
  },

  answers: {
    qOne: "who is fannie louhamer",
    qTwo: "who is tarana burke",
    qThree: "who is therese okumou",
    qFour: "who is joe biden",
    qFive: "what is the war on drugs",
    qSix: "what is the 13th amendment",
    qSeven: "who is justice antonin scalia",
    qEight: "who is justice oliver holmes",
    qNine: "what is plessy v. ferguson"
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
        alert("YASSSS!");
        //close alert box
        break;
      } else {
        this.attempts++;
        alert("That ain't it...try again!");
        //return to text box
        break;
      }
    }
  }
};
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

const qSeven = document.getElementsByClassName("box qSeven");
console.log(qSeven);
qSeven[0].addEventListener("click", function() {
  jeopardy.checkAnswer("qSeven");
});

const qEight = document.getElementsByClassName("box qEight");
console.log(qEight);
qEight[0].addEventListener("click", function() {
  jeopardy.checkAnswer("qEight");
});

const qNine = document.getElementsByClassName("box qNine");
console.log(qNine);
qNine[0].addEventListener("click", function() {
  jeopardy.checkAnswer("qNine");
});
