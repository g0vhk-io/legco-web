export function delayResponse(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, Math.floor(Math.random() * 500) + 500);
  });
}