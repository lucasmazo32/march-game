import { levelFormat, sortArray } from '../src/API/helperFunctions';

test('Level Format', () => {
  // I have a particular level format, so having it is important for the scores
  const user = levelFormat(2, 'FooBar');
  expect(user).toEqual('Level-2-FooBar');
});

test('Sorted Array (And limited to a max of 10)', () => {
  // This is the most important step, works and arranges the score data from the API
  const myObj = [];
  const result = [];
  for (let index = 0; index < 15; index += 1) {
    myObj.push({ user: `Level-1-Foo-${index}`, score: index * 50 });
  }
  for (let index = 14; index > 4; index -= 1) {
    result.push({ user: myObj[index].user.slice(8), score: myObj[index].score });
  }
  const newArr = sortArray({ result: myObj }, 1);
  expect(newArr).toEqual(result);
});

test('Sorted Array with double digits level (And limited to a max of 10)', () => {
  // This is the most important step, works and arranges the score data from the API
  const myObj = [];
  const result = [];
  for (let index = 0; index < 15; index += 1) {
    myObj.push({ user: `Level-10-Foo-${index}`, score: index * 50 });
  }
  for (let index = 14; index > 4; index -= 1) {
    result.push({ user: myObj[index].user.slice(9), score: myObj[index].score });
  }
  const newArr = sortArray({ result: myObj }, 10);
  expect(newArr).toEqual(result);
});