const express = require('express');
const app = express();

app.use(express.json());

// Define a function to calculate the mean of an array of numbers
function calculateMean(numbers) {
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  return sum / numbers.length;
}

// Define a function to calculate the median of an array of numbers
function calculateMedian(numbers) {
  numbers.sort((a, b) => a - b);
  const middle = Math.floor(numbers.length / 2);
  if (numbers.length % 2 === 0) {
    return (numbers[middle - 1] + numbers[middle]) / 2;
  } else {
    return numbers[middle];
  }
}

// Define a function to calculate the mode of an array of numbers
function calculateMode(numbers) {
  const numCount = {};
  numbers.forEach((num) => {
    numCount[num] = (numCount[num] || 0) + 1;
  });
  let mode = null;
  let maxCount = 0;
  for (const num in numCount) {
    if (numCount[num] > maxCount) {
      maxCount = numCount[num];
      mode = parseInt(num);
    }
  }
  return mode;
}

app.get('/mean', (req, res) => {
  const nums = req.query.nums;

  if (!nums) {
    return res.status(400).json({ error: 'nums are required' });
  }

  const numArray = nums.split(',').map(parseFloat);

  if (numArray.some(isNaN)) {
    return res.status(400).json({ error: 'Invalid number(s) in nums' });
  }

  const mean = calculateMean(numArray);

  res.json({ operation: 'mean', value: mean });
});

app.get('/median', (req, res) => {
  const nums = req.query.nums;

  if (!nums) {
    return res.status(400).json({ error: 'nums are required' });
  }

  const numArray = nums.split(',').map(parseFloat);

  if (numArray.some(isNaN)) {
    return res.status(400).json({ error: 'Invalid number(s) in nums' });
  }

  const median = calculateMedian(numArray);

  res.json({ operation: 'median', value: median });
});

app.get('/mode', (req, res) => {
  const nums = req.query.nums;

  if (!nums) {
    return res.status(400).json({ error: 'nums are required' });
  }

  const numArray = nums.split(',').map(parseFloat);

  if (numArray.some(isNaN)) {
    return res.status(400).json({ error: 'Invalid number(s) in nums' });
  }

  const mode = calculateMode(numArray);

  res.json({ operation: 'mode', value: mode });
});

app.listen(3000, () => {
  console.log('App on port 3000');
});
