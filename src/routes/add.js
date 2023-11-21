import express from 'express';
import wrapAsync from '../utils/wrapAsync.js';
import { waitTime } from '../utils/waitTime.js';
import { makeRandomNumber } from '../utils/makeRandomNumber.js';

const router = express.Router();

// 더하기 + 랜덤 숫자
router.post(
  '/',
  wrapAsync(async (req, res) => {
    await waitTime();

    console.log(req.body);
    const { a, b } = req.body;
    const result = Number(a) + Number(b);

    const randomNumber = makeRandomNumber();

    const data = { result, random: randomNumber };
    console.log(data);

    return res.json(data);
  })
);

export default router;
