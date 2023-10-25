# Express Calculator

This is a simple Express.js application that provides statistical operations for an arbitrary list of numbers. The application calculates the mean (average), median (midpoint), and mode (most frequent) of a list of numbers. Each operation is exposed through a separate route.

## Usage

To run the project, follow these steps:

1. Initialize the project using `npm init` if you haven't already.

2. Install the Express.js framework, which is used to create the web server, by running:

```bash
npm install express
```

3. Start the application by running:

```bash
node calculator.js
```

4. You can now access the following routes in your web browser or via tools like cURL or Postman:

- Calculate the median:
  - Example: http://localhost:3000/median?nums=1,2,3,6,7

- Calculate the mode:
  - Example: http://localhost:3000/mode?nums=1,2,3,6,7

- Calculate the mean:
  - Example: http://localhost:3000/mean?nums=1,2,3,6,7

## Error Handling

The application "gracefully" handles errors, such as invalid input and missing query parameters. It responds with the appropriate status codes and error messages according to the requirements.

Feel free to extend the functionality, add unit tests for statistical operations, and explore further study options mentioned in the requirements.