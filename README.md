
# Express Graphql Sample

> Sample usage of graphql using express and mongoose

## Build

```
npm install
```

## Configuration

Edit the config file, you must set the mongoose database url.

## Running

```
npm start
```

## Interface

After start the application you should open the graphql interface on

http://localhost:8080/graphql

## Variables

```
{
  "id": "5afc23793a70ae656d172970",
  "todo": {
    "id": "5e67f0a35ec9df6c04d45f3a",
    "title": "My todo",
    "done": false
  }
}
```

## Queries

### Create Todo

```
mutation newTodo($todo: TodoCreateInput) {
  createTodo(todo: $todo) {
    id
    title
    done
  }
}
```

### Update Todo

```
mutation updateTodo($todo: TodoUpdateInput) {
  updateTodo (todo: $todo) {
    id
    title
    done
  }
}
```

### Remove Todo
```
mutation remoteTodo($id: ID!) {
  removeTodo (id: $id) {
    id
    title
    done
  }
}
```

### Find One Todo
```
query {
  todo: findOneTodo(id: "5e67f0a35ec9df6c04d45f3a") {
    id
    title
    done
  }
}
```

### Find Todos
```
query {
  todos: findTodo (params: {}) {
    id
    title
    done
  }
}
```
