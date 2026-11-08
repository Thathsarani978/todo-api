import express from 'express'
import { v4 as uuidv4 } from 'uuid'

const router = express.Router()

// simulate the database

let todos = []

// GET all todos

router.get('/', (req, res) => {
    res.json(todos)
})

// POST - create a new todo

router.post('/', (req, res) => {

    // Validate title
    if (
        !req.body.title ||
        typeof req.body.title !== 'string' ||
        !req.body.title.trim()
    ) {
        return res.status(400).json({
            message: 'Title is required and must be a non-empty string'
        })
    }

    // Validate state
    const validStates = ['todo', 'doing', 'done']

    if (
        req.body.state !== undefined &&
        !validStates.includes(req.body.state)
    ) {
        return res.status(400).json({
            message: 'Invalid state. Use todo, doing or done'
        })
    }


    //create a new todo
    const newTodo = {
        id: uuidv4(),
        title: req.body.title,
        description: req.body.description || '',
        state: req.body.state || 'todo',
        dueDate: req.body.dueDate || null,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    }

    todos.push(newTodo)

    res.status(201).json(newTodo)
})

// GET - get a single todo by ID

router.get('/:id', (req, res) => {
    

    const id = req.params.id

    const todo = todos.find(todo => todo.id === id)

    if (!todo) {
        return res.status(404).json({
            message: 'Todo not found'
        })
    }

    res.json(todo)
})

// PATCH - update an existing todo

router.patch('/:id', (req, res) => {

    const id = req.params.id

    const index = todos.findIndex(todo => todo.id === id)

    if (index === -1) {
        return res.status(404).json({
            message: 'Todo not found'
        })
    }

    // Validate title
    if (
        req.body.title !== undefined &&
        (
            typeof req.body.title !== 'string' ||
            !req.body.title.trim()
        )
    ) {
        return res.status(400).json({
            message: 'Title must be a non-empty string'
        })
    }

    // Validate state
    const validStates = ['todo', 'doing', 'done']

    if (
        req.body.state !== undefined &&
        !validStates.includes(req.body.state)
    ) {
        return res.status(400).json({
            message: 'Invalid state. Use todo, doing or done'
        })
    }

    const todo = todos[index]

    if (req.body.title !== undefined) {
        todo.title = req.body.title.trim()
    }

    if (req.body.description !== undefined) {
        todo.description = req.body.description
    }

    if (req.body.state !== undefined) {
        todo.state = req.body.state
    }

    if (req.body.dueDate !== undefined) {
        todo.dueDate = req.body.dueDate
    }

    todo.updatedAt = new Date().toISOString()

    res.json(todo)
})

// DELETE - delete an existing todo

router.delete('/:id', (req, res) => {

    const id = req.params.id

    const index = todos.findIndex(todo => todo.id === id)

    if (index === -1) {
        return res.status(404).json({
            message: 'Todo not found'
        })
    }

    todos.splice(index, 1)

    res.status(200).json({
        message: 'Todo deleted successfully'
    })
})

export default router

