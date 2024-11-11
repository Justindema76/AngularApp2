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
  // minNumber: number = 0; 
  // maxNumber: number = 0; 

  ngOnInit(): void {
    // Initial setup can go here if needed
  }

  generateQuestion(): void {
    // Example question generator
    let num1 = Math.floor(Math.random() * 10) + 1;
    let num2 = Math.floor(Math.random() * 10) + 1;
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
        correctAnswer = Math.floor(num1 / num2); // Assuming integer division
        break;
      default:
        correctAnswer = 0;
    }

 

    // Generate random incorrect answers
    const incorrectAnswers = this.generateIncorrectAnswers(correctAnswer);

    // Combine the correct answer and incorrect answers into choices
    const choices = this.shuffle([correctAnswer, ...incorrectAnswers]);

    // Create the current question with choices
    this.currentQuestion = {
      questionText: `${num1} ${this.selectedOperation} ${num2}`,
      answer: correctAnswer,
      choices: choices,
    };
  }

  // Generate incorrect answers (simple strategy to generate close wrong answers)
  generateIncorrectAnswers(correctAnswer: number): number[] {
    const incorrectAnswers = new Set<number>();
    let attempts = 0;

    // Generate 3 incorrect answers
    while (incorrectAnswers.size < 3 && attempts < 10) {
      const wrongAnswer = correctAnswer + Math.floor(Math.random() * 5) - 2; 
      if (wrongAnswer !== correctAnswer) {
        incorrectAnswers.add(wrongAnswer);
      }
      attempts++;
    }
    console.log("Generated incorrect answers:", incorrectAnswers);
    return Array.from(incorrectAnswers);
  }

  // Shuffle an array to randomize the order of answers
  shuffle(array: number[]): number[] {
    return array.sort(() => Math.random()-.5);
    }


  setDifficulty(difficulty: string): void {
   
    switch (difficulty) {
      case 'easy':
        // this.minNumber = 0;
        // this.maxNumber = 9;
        break;
      case 'medium':
        // Set range for medium questions
        break;
      case 'hard':
        // Set range for hard questions
        break;
      default:
        break;
    }
  }

  checkAnswer(selectedChoice: number): void {
    if (selectedChoice === this.currentQuestion?.answer) {
      this.feedback = 'Correct! 🎉';
      this.score++;
    } else {
      this.feedback = `The correct answer is ${this.currentQuestion?.answer}. 🫢`;
    }

    // After checking, generate a new question
    this.generateQuestion();
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
