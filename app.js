const express = require('express');
const todoRouter = require('./routes/todo.route');
const authRouter = require('./routes/auth.route');

const app = express(); // intialise express;

// parse incoming json data
app.use(express.json());


// whenever the user hits /api/todo endpoint, pls revert them to todorouter file
app.use('/api/todo', todoRouter);
app.use('/api/auth', authRouter);


const PORT = 3000;

app.listen(PORT, () => {
    console.log('Server is running successfully')
})