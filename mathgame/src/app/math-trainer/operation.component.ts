export class OperationComponent {
  selectedOperation: string = '';

  selectOperation(operation: string) {
    // If the same operation is selected again, deselect it.
    if (this.selectedOperation === operation) {
      this.selectedOperation = '';
    } else {
      this.selectedOperation = operation;
    }
  }

  // Helper method to check if the operation is selected
  isPressed(operation: string): boolean {
    return this.selectedOperation === operation;
  }
}
