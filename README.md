# Jeopardy-project1

Description
This game is a play on the infamous Jeopardy trivia game. Users are able to select a dollar amount and answer the corresponding question in the traditional " who is.." "what is.." format. lower case and gramatically correct spacing will be accepted. This game is for the solitarie-type player looking to test their progressive political knowledge or learn something new. The game is not timed, users are given the opportunity to google answers they do not know. This game introduces lesser known facts and prominent figures that are not always recognized, and/or highlights the hyprocrisy of our current legislative system.

## List of features/User Stories

- Player can click on dollar amount in a category of their choice
- Once clicked, the corresponding question will generate with accompanying lined text box
- User will type in answer, click okay button to confirm answer, user can click cancel to exit the question
- If user answers correctly, window prompt will confirm, user is redirected back to home page
- If incorrect, window prompt will appear “Sorry, try again!”, user redirected to home page to select another question
- User selects new question, repeat process

## Approach

- Created divs with corresponding box classes that allowed for function and manipulation
- Used JS to add questions and answers in an object. created a function to reference each object
- Used a while loop to loop through user attempts at answering questions
- Use window.prompt feature that allowed for question to be revealed in an alert box, and answer evaluated with an if statement
- attempts are incremented + 1, similarly to i++

## Tech Used

- Javascript
- HTML
- CSS

# Unsolved Problems

- later in the project noticed the attempts loop only incremented once instead of 3 times like previous versions
- would like to add scoring and a timer
- would like to create a for loop for the event listeners, currently there are nine events
