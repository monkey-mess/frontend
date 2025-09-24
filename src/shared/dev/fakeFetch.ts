export async function fakeFetch<T>(returnData: T, expectedStatus: "fulfilled" | "rejected") {
  let returnPromise = new Promise<T>((resolve, reject) => {
    setTimeout(() => {
      if (expectedStatus == "fulfilled") {
        resolve(returnData);
      } else {
        reject();
      }
    }, 100);
  });
  return returnPromise;
}
