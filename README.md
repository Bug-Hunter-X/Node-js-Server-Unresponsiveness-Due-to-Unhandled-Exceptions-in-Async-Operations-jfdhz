# Node.js Server Unresponsiveness
This repository demonstrates a common issue in Node.js servers where unhandled exceptions within long-running tasks or asynchronous operations can lead to the server hanging or becoming unresponsive.  The `bug.js` file contains the problematic code, while `bugSolution.js` provides a corrected version.

The problem stems from the lack of proper error handling within the asynchronous `setTimeout` function.  If an exception occurs within this function, Node.js's event loop may not recover, leading to the server's unresponsiveness.

The solution involves using `try...catch` blocks to handle potential errors and gracefully terminate the operation or notify the user of an error.