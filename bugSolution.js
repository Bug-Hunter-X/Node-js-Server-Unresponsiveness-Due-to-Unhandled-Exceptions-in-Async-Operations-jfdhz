const express = require('express');
const app = express();
app.get('/', (req, res) => {
  try {
    setTimeout(() => {
      // Simulate a long-running task that might throw an error
      const result = someLongRunningTask();
      res.send('Hello, world! ' + result);
    }, 5000);
  } catch (error) {
    console.error('Error during long-running task:', error);
    res.status(500).send('Internal Server Error');
  }
});

function someLongRunningTask() {
  // Simulate a potential error
  if (Math.random() < 0.5) {
    throw new Error('Simulated error in long-running task');
  }
  return 'Task completed successfully';
}

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});