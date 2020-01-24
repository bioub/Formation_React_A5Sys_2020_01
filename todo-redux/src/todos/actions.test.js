import { updateTodosInput, addTodo } from './actions';

test('updateTodosInput action should create UPDATE_TODOS_INPUT action', () => {
  const action = updateTodosInput('Achet');
  expect(action).toEqual({
    type: '@@todos/UPDATE_TODOS_INPUT',
    payload: 'Achet',
  })
});

// 

test('addTodo', () => {
  const spy = jest.spyOn(Math, 'random').mockImplementation(() => 0.5);


  const action = addTodo('Acheter du pain');
  expect(action).toEqual({
    type: '@@todos/ADD_TODO',
    payload: {
      id: Math.floor(Number.MAX_SAFE_INTEGER / 2),
      title: 'Acheter du pain',
      completed: false,
    },
  });

  expect(spy).toHaveBeenCalledTimes(1);
});
