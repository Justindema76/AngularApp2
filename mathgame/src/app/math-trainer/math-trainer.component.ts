import { Component, OnInit } from '@angular/core';

interface Question {
  questionText: string;
  answer: number;
  choices: number[]; // Array to store multiple-choice answers
}

@Component({
  selector: 'app-math-trainer',
  templateUrl: './math-trainer.component.html',
  styleUrls: ['./math-trainer.component.css'],
})
export class MathTrainerComponent implements OnInit {
  score = 0;
  gameStarted = false; // Track if the game has started
  selectedOperation: string = ''; // Default operation
  currentQuestion: Question | null = null; // Current question object
  userAnswer: number | null = null; // User's answer
  feedback: string | null = null; // Feedback for user
  menuOpen = false; // State for menu visibility
  feedbackMessage: any;

  ngOnInit(): void {
    
  }

  // Function to round any result to 3 decimal places
  roundToThreeDecimalPlaces(num: number): number {
    return parseFloat(num.toFixed(3));
  }

  // Function to generate a new question
  generateQuestion(): void {
    
    let num1 = Math.floor(Math.random() * 5) + 1; 
    let num2 = Math.floor(Math.random() * 5) + 1; 
    let correctAnswer: number;

    switch (this.selectedOperation) {
      case '+':
        correctAnswer = num1 + num2;
        break;
      case '-':
        correctAnswer = num1 - num2;
        break;
      case 'x':
        correctAnswer = num1 * num2;
        break;
      case '/':
        
        if (num1 % num2 === 0) {
          correctAnswer = num1 / num2;
        } else {
          correctAnswer = this.roundToThreeDecimalPlaces(num1 / num2);
        }
        break;
      default:
        correctAnswer = 0;
    }

    // rounds to 3 decimal places
    correctAnswer = this.roundToThreeDecimalPlaces(correctAnswer);

    // Generate incorrect answers
    const incorrectAnswers = this.generateIncorrectAnswers(correctAnswer);

    const choices = this.shuffle([correctAnswer, ...incorrectAnswers]);

    this.currentQuestion = {
      questionText: `${num1} ${this.selectedOperation} ${num2}`,
      answer: correctAnswer,
      choices: choices,
    };
  }

  // Generate incorrect answers 
  generateIncorrectAnswers(correctAnswer: number): number[] {
    const incorrectAnswers = new Set<number>();
    let attempts = 0;

    // Generate 3 incorrect answers 
    while (incorrectAnswers.size < 3 && attempts < 10) {
      // Generate a close wrong answer
      const wrongAnswer = this.roundToThreeDecimalPlaces(correctAnswer + Math.floor(Math.random() * 3) - 1);
      if (wrongAnswer !== correctAnswer) {
        incorrectAnswers.add(wrongAnswer);
      }
      attempts++;
    }
    return Array.from(incorrectAnswers);
  }

  // Shuffle array 
  shuffle(array: number[]): number[] {
    return array.sort(() => Math.random() - 0.5);
  }

  // Check the user's answer
  checkAnswer(selectedChoice: number): void {
    if (selectedChoice === this.currentQuestion?.answer) {
      this.feedback = 'Correct! 🎉';
      this.score++;
    } else {
      this.feedback = `The correct answer is ${this.currentQuestion?.answer}. 🫢`;
    }
  }

  // Handle next question
  nextQuestion(): void {
    this.feedback = null; // Clear feedback when moving to the next question
    this.generateQuestion(); // Generate a new question
  }

  // Reset the game
  resetGame(): void {
    this.score = 0;
    this.feedback = null;
    this.selectedOperation = '';
    this.currentQuestion = null;
    this.gameStarted = false; // Reset the game state
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  // Start the game with selected operation
  selectOperation(operation: string): void {
    this.selectedOperation = operation;
    this.gameStarted = true; // Start the game
    this.generateQuestion(); // Generate the first question
  }

  // Helper to determine if an operation is selected
  isPressed(operation: string): boolean {
    return this.selectedOperation === operation;
  }
}
