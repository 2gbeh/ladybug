export const sleep = (secs = 3) =>
  new Promise<void>(resolve => setTimeout(resolve, secs * 1000));
