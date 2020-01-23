# TP Redux

## Reprendre todo-react et l'insérer dans un projet todo-redux

Le state global devra ressembler à :

```
{
  todos: {
    inputValue: 'Acheter du pa',
    items: [
      {
        id: 1234,
        title: 'TEST',
        completed: false,
      }, {
        id: 4567,
        title: 'Autre',
        completed: true,
      }
    ]
  }
}
```

En reprendant les bonnes pratiques de hello-redux (constants, reducers, actionsCreators, FSA, combineReducers, selectors)

Sortir de state de app pour discuter directement avec le
store.