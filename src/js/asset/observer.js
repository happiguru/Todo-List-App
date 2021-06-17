/* eslint-disable no-plusplus */
const events = {};

function on(eventName, fn) {
  events[eventName] ||= [];
  events[eventName].push(fn);
}

function off(eventName, fn) {
  if (!events[eventName]) return;

  for (let i = 0; i < events[eventName].length; i++) {
    if (events[eventName][i] === fn) {
      events[eventName].splice(i, 1);
      break;
    }
  }
}

function omit(eventName, data) {
  if (!events[eventName]) return;

  events[eventName].forEach((fn) => fn(data));
}

export { on, off, omit };