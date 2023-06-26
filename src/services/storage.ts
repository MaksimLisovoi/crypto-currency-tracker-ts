import * as errorCatcher from './errorCatcher';


const save = (key: string, value: any) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
      errorCatcher.reportError({ message: errorCatcher.getErrorMessage(error) });
    }
};

const load = (key: string) => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
      errorCatcher.reportError({ message: errorCatcher.getErrorMessage(error) });
    }
};

export {
  save,
  load,
};