import express from 'express';
import wrapAsync from '../utils/wrapAsync.js';
import { waitTime } from '../utils/waitTime.js';
import { makeRandomNumber } from '../utils/makeRandomNumber.js';

const router = express.Router();

// 랜덤 숫자(1~100) 1초 후 응답
router.get(
  '/',
  wrapAsync(async (req, res) => {
    await waitTime();

    const randomNumber = makeRandomNumber();
    const data = { number: randomNumber };

    return res.json(data);
  })
);

export default router;
