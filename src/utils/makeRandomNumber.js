/**
 * 랜덤 숫자 생성 함수
 * @param {*} n 생성 범위
 * @returns 0 ~ n 까지 생성
 */
export const makeRandomNumber = (n = 100) => {
  const randomNumber = Math.floor(Math.random() * n);

  return randomNumber;
};
