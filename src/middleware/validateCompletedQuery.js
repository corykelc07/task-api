import { query } from 'express-validator';
import { checkValidationResults } from './handleValidationErrors.js';

export const validateCompleted = [
    query('completed')
        .optional()
        .isIn(['true', 'false'])
        .withMessage('completed must be true or false')
        .toBoolean(),

    checkValidationResults
];