# Todo REST API

## 1. Project Description

This project is a simple Todo REST API developed using Node.js and Express.js.

The API allows users to create, retrieve, update, and delete Todo items. It also supports filtering Todo items by their state.

The application uses an in-memory JavaScript array to simulate a database. Therefore, the data is temporary and will be lost when the server restarts.

## 2. Technologies Used

- Node.js
- Express.js
- JavaScript
- UUID
- VS Code REST Client

## 3. Project Structure

```text
todo-api/
│
├── src/
│   ├── routes/
│   │   └── todos.js
│   ├── app.js
│   └── server.js
│
├── requests/
│   └── todos.http
│
├── README.md
├── package.json
└── .gitignore
```

## 4. Installation and Setup

### Prerequisites

- Node.js
- npm
- Visual Studio Code
- REST Client extension for testing API requests

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Thathsarani978/todo-api.git
```

2. Navigate to the project folder:

```bash
cd todo-api
```

3. Install dependencies:

```bash
npm install
```

4. Start the server:

```bash
npm start
```

The server runs at:

`http://localhost:3000`

## 5. Todo Data Structure

Each Todo item contains the following properties:

| Property | Description |
|---|---|
| id | Unique identifier generated using UUID |
| title | Todo title (required) |
| description | Todo description (optional) |
| state | Current state of the Todo |
| dueDate | Due date (optional) |
| createdAt | Date and time when the Todo was created |
| updatedAt | Date and time when the Todo was last updated |

Available Todo states:

- `todo`
- `doing`
- `done`

The default state is `todo`.

## 6. API Endpoints

Base URL: `http://localhost:3000/todos`

| Method | Endpoint | Description |
|---|---|---|
| POST | /todos | Create a new Todo |
| GET | /todos | Retrieve all Todos |
| GET | /todos/:id | Retrieve a Todo by ID |
| GET | /todos?state=todo | Filter Todos by state |
| PATCH | /todos/:id | Update an existing Todo |
| DELETE | /todos/:id | Delete a Todo |

## 7. Validation and Error Handling

The API includes input validation and error handling.

- A Todo must have a non-empty title.
- The title must be a string.
- The state must be `todo`, `doing`, or `done`.
- Invalid input returns `400 Bad Request`.
- A Todo that cannot be found returns `404 Not Found`.

## 8. Testing

The API was tested using the REST Client extension in Visual Studio Code.

The `requests/todos.http` file contains requests for testing the API endpoints.

The following scenarios were tested:

- Creating a new Todo.
- Retrieving all Todos.
- Retrieving a Todo by ID.
- Filtering Todos by `todo`, `doing`, and `done` states.
- Updating a Todo using PATCH.
- Deleting a Todo.
- Testing missing and invalid titles.
- Testing invalid states.
- Testing requests with non-existing Todo IDs.

Expected HTTP status codes include:

| Status Code | Meaning |
|---|---|
| 200 | OK – Request completed successfully |
| 201 | Created – Todo created successfully |
| 400 | Bad Request – Invalid input |
| 404 | Not Found – Todo does not exist |

## 9. Reflection

Through this project, I learned how to develop a REST API using Node.js and Express.js.

I gained practical experience in creating API endpoints and handling HTTP methods such as GET, POST, PATCH, and DELETE.

I also learned how to use UUID to generate unique identifiers and how to use JavaScript array methods such as `push()`, `find()`, `findIndex()`, `filter()`, and `splice()` to manage Todo items.

Another important learning outcome was implementing input validation and handling HTTP error responses.

I used the REST Client extension in Visual Studio Code to test different API requests and verify the responses.

This project helped me understand the basic principles of REST API development and how client requests are handled by a server.
