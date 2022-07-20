/* eslint-disable no-restricted-globals */

addEventListener('message', e => {
  if (e.data === 'hello') {
    postMessage('hiya!');
  }
});
