# AngularApp2

# Math Jungle - Assignment#3

## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [How to Use](#how-to-use)
4. [Technologies Used](#technologies-used)
5. [Angular Functions Used](#angular-functions-used)
6. [Installation](#installation)

## Overview

Math Jungle is an interactive application that helps children practice basic arithmetic operations, including addition, subtraction, multiplication, and division. The app provides a series of math questions with multiple-choice answers, helping children improve their math skills in an engaging way. It includes a score tracker to motivate users as they progress through questions and provides instant feedback on whether the selected answer is correct.

This app is built using **Angular** and leverages the power of Angular components, services, and reactive programming for a smooth user experience.

## Features

- **Simple Math Operations**: Supports addition, subtraction, multiplication, and division questions.
- **Multiple Choice Questions**: Provides users with a set of possible answers for each question.
- **Instant Feedback**: Displays whether the user's answer is correct or incorrect after each attempt.
- **Score Tracker**: Keeps track of the user's score throughout the game.
- **Randomized Questions**: Each question is generated randomly with different numbers for variety.
- **Simple Division Logic**: For division questions, only simple fractions and whole numbers are used to ensure the answers are easy to compute.

## How to Use

1. **Start the Game**: Choose an arithmetic operation (addition, subtraction, multiplication, division) to begin the game.
2. **Answer Questions**: Select the correct answer from the multiple-choice options.
3. **Get Feedback**: After answering, the app will let you know if your answer is correct or incorrect and display your current score.
4. **Move to Next Question**: Click on the "Next Question" button to generate a new question.
5. **Reset the Game**: You can reset the game at any time to start fresh with a score of zero.

## Technologies Used

- **Angular**: The framework used to build the app, managing the structure and functionality.
- **TypeScript**: Used for writing the logic and defining the structure of the app's components.
- **HTML/CSS**: For rendering and styling the app's user interface.

## Angular Functions Used

- **ngOnInit()**: This lifecycle hook is used to perform any initialization logic when the component is loaded.

- **`ngStyle`**: 
  - Used to dynamically change the inline styles of elements based on conditions. In this app, we may use `ngStyle` to change the appearance of buttons, feedback messages, or other UI elements dynamically, such as changing the color of the feedback message when the user gets a correct or incorrect answer.

- **`*ngFor`**: 
  - Used to loop through arrays and display a list of items. For example, we use `*ngFor` to display the multiple-choice options dynamically as part of the current question.

- **`[(ngModel)]`**:
  - Two-way data binding is used with `ngModel` for input fields or form elements (like answer selection). This is helpful for tracking the selected answer in the form and updating it in the component automatically.

- **`[ngClass]`**:
  - Used to dynamically add or remove classes based on conditions. For example, we might use `ngClass` to add a class for styling the active operation button when it is selected, ensuring that the UI reflects the current state of the app.

- **`[disabled]`**:
  - Used to disable buttons or input fields based on certain conditions. For instance, you might disable the "Next Question" button until the user selects an answer.

- **`{{ }}` (Interpolation)**:
  - Interpolation is used throughout the app to insert dynamic values into the HTML. For example, displaying the current question, user score, and feedback messages all use interpolation.

- **`[style]`**:
  - This directive is used to apply inline styles dynamically to elements. For example, it might be used to change the background color of the feedback message or highlight the correct answer.
  
- **`generateQuestion()`**: This function generates a new math question based on the selected operation (addition, subtraction, multiplication, or division). It also handles the generation of possible incorrect answers for the multiple-choice options.

- **`generateIncorrectAnswers()`**: A helper function that creates random incorrect answers that are close to the correct one, ensuring that the multiple-choice options are realistic but not trivially easy.

- **`shuffle()`**: This function is used to randomize the order of the answer choices so that the correct answer doesn't always appear in the same position.

- **`checkAnswer()`**: This function checks if the selected answer matches the correct answer and provides feedback to the user (either "Correct!" or "Incorrect").

- **`nextQuestion()`**: This function is triggered when the user moves to the next question, clearing any feedback and generating a new question.

- **`resetGame()`**: Resets the game by setting the score back to zero, clearing the feedback, and allowing the user to select a new operation.

- **`toggleMenu()`**: A function to toggle the visibility of the menu for navigating through the app.

- **`selectOperation()`**: This function is called when the user selects an operation (addition, subtraction, multiplication, or division). It starts the game and generates the first question.

- **`isPressed()`**: This helper function checks if the selected operation is currently being used, allowing for proper styling of the active operation button.

## Installation

To run this app locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/Justindema76/AngularApp2.git
