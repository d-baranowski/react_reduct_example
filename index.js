const expect = require('expect');

//Reducer for the counter example
function counter (state, action) {
  if (typeof state === 'undefined') {
    return 0;
  }

  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

//The store binds together the three principels of redux. It holds the current state, it lets you dispatch actions and when you create it you need to specify the reducer.
const store = Redux.createStore(counter);

const render = function() {
  $('#content').text(store.getState());
}

//Creates a callbask which will be called any time an action was dispached
store.subscribe(render);
render();

document.addEventListener('click', function () {
  store.dispatch({type:'INCREMENT'});
});


//When you pass value 0 to state of the function counter and the action is INCREMENT it should return 1
expect(
  counter(0, {type: 'INCREMENT'})
).toEqual(1);

expect(
  counter(1, {type: 'INCREMENT'})
).toEqual(2);

expect(
  counter(2, {type: 'DECREMENT'})
).toEqual(1);

expect(
  counter(1, {type: 'DECREMENT'})
).toEqual(0);

expect(
  counter(0, {type: 'SOMETHING'})
).toEqual(0);

expect(
  counter(undefined, {type: 'INCREMENT'})
).toEqual(0);

console.log('Tests passed!');
