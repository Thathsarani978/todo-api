import express from 'express'

import todosRouter from './routes/todos.js'

const app = express()

// support for json
app.use(express.json())

// define handlers for various routes
app.use('/todos', todosRouter)
// Handle invalid JSON errors

app.use((err, req, res, next) => {

    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        return res.status(400).json({
            message: 'Invalid JSON format'
        })
    }

    next(err)
})

// export the app object to server.js where we referred to this
export default app