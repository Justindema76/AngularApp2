import { Component, OnInit } from '@angular/core';

interface Question {
  questionText: string;
  answer: number;
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

  ngOnInit(): void {
    // Initial setup can go here if needed
  }

  generateQuestion(): void {
    // Example question generator
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;

    switch (this.selectedOperation) {
      case '+':
        this.currentQuestion = {
          questionText: `${num1} + ${num2}`,
          answer: num1 + num2,
        };
        break;
      case '-':
        this.currentQuestion = {
          questionText: `${num1} - ${num2}`,
          answer: num1 - num2,
        };
        break;
      case '*':
        this.currentQuestion = {
          questionText: `${num1} x ${num2}`,
          answer: num1 * num2,
        };
        break;
      case '/':
        this.currentQuestion = {
          questionText: `${num1} / ${num2}`,
          answer: Math.floor(num1 / num2), // Assuming integer division
        };
        break;
      default:
        this.currentQuestion = null;
    }
  }

  checkAnswer(): void {
    if (this.userAnswer === this.currentQuestion?.answer) {
      this.feedback = 'Correct! 🎉';
      this.score++;
    } else {
      this.feedback = `Incorrect. The correct answer was ${this.currentQuestion?.answer}.`;
    }

    // After checking, generate a new question
    this.generateQuestion();
    this.userAnswer = null; // Clear the input for the next question
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  navigate(route: string): void {
    console.log('Navigate to:', route);
  }

  selectOperation(operation: string): void {
    this.selectedOperation = operation;
    this.gameStarted = true; // Start the game

    this.generateQuestion(); // Generate the first question
  }

  isPressed(operation: string): boolean {
    return this.selectedOperation === operation;
  }
}
