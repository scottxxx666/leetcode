const canFinish = require('./index');

let numCourse;
let prerequisites;

function givenCourseNumber(num) {
  numCourse = num;
}

function givenPrerequisites(pre) {
  prerequisites = pre;
}

function shouldReturn(expected) {
  expect(canFinish(numCourse, prerequisites)).toBe(expected);
}

test('1 course 0 pre', function () {
  givenCourseNumber(1);
  givenPrerequisites([]);
  shouldReturn(true);
});

test('2 course 0 pre', function () {
  givenCourseNumber(2);
  givenPrerequisites([]);
  shouldReturn(true);
});

test('2 course 1 pre', function () {
  givenCourseNumber(2);
  givenPrerequisites([[0, 1]]);
  shouldReturn(true);
});

test('2 course 2 pre', function () {
  givenCourseNumber(2);
  givenPrerequisites([[0, 1], [1, 0]]);
  shouldReturn(false);
});

test('3 course 0 pre', function () {
  givenCourseNumber(3);
  givenPrerequisites([]);
  shouldReturn(true);
});

test('3 course 1 pre', function () {
  givenCourseNumber(3);
  givenPrerequisites([[1, 2]]);
  shouldReturn(true);
});

test('3 course 2 pre true', function () {
  givenCourseNumber(3);
  givenPrerequisites([[0, 2], [1, 2]]);
  shouldReturn(true);
});

test('3 course 2 pre true', function () {
  givenCourseNumber(3);
  givenPrerequisites([[0, 1], [1, 2]]);
  shouldReturn(true);
});

test('3 course 2 pre true', function () {
  givenCourseNumber(3);
  givenPrerequisites([[0, 1], [2, 0]]);
  shouldReturn(true);
});

test('3 course 2 pre false', function () {
  givenCourseNumber(3);
  givenPrerequisites([[2, 1], [1, 2]]);
  shouldReturn(false);
});

test('3 course 3 pre true', function () {
  givenCourseNumber(3);
  givenPrerequisites([[0, 1], [1, 2], [0, 2]]);
  shouldReturn(true);
});

test('3 course 3 pre false', function () {
  givenCourseNumber(3);
  givenPrerequisites([[0, 1], [1, 2], [2, 0]]);
  shouldReturn(false);
});

test('4 course 3 pre false', function () {
  givenCourseNumber(4);
  givenPrerequisites([[0, 1], [2, 3], [1, 2], [3, 0]]);
  shouldReturn(false);
});

