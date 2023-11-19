import express from 'express';
import wrapAsync from '../utils/wrapAsync.js';

/**
 * @example
 * ```
 * router.get(
 *  '/path',
 *  wrapAsync(async (req, res) => {
 *    const data = {...}
 *    return res.json(data);
 * });
 * ```
 */
const router = express.Router();

// 추가
router.get(
  '/',
  wrapAsync(async (req, res) => {
    const data = { test: 'test' };

    return res.json(data);
  })
);

export default router;
