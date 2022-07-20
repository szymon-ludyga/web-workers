// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import Worker from 'web-worker';
import NxWelcome from './nx-welcome';

export function App() {
  const url = new URL('./worker.js', import.meta.url);
  const worker = new Worker(url);

  worker.addEventListener('message', e => {
    console.log(e.data)  // "hiya!"
  });

  worker.postMessage('hello');

  return (
    <>
      <NxWelcome title="hehe" />
      <div />
    </>
  );
}

export default App;
