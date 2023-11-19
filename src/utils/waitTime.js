/**
 * 타이머 비동기 함수
 * @param {*} t 기다리는 시간 (ms)
 */
export const waitTime = async (t = 1000) => {
  await new Promise((resolve, reject) => setTimeout(resolve, t));
};
