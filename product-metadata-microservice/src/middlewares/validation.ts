import { Request, Response, NextFunction } from 'express';
const { body, validationResult } = require('express-validator'); //TODO Requires change to import syntax if using TypeScript

export const validateProduct = [
    body('name')
        .isString()
        .isLength({ max: 255 })
        .withMessage('Name must be a string and cannot exceed 255 characters.')
        .notEmpty()
        .withMessage('Name is required.'),
    
    body('description')
        .isString()
        .isLength({ max: 2000 })
        .withMessage('Description must be a string and cannot exceed 2000 characters.')
        .notEmpty()
        .withMessage('Description is required.'),
    
    body('tags')
        .optional()
        .isArray()
        .withMessage('Tags must be an array of strings.'),
    
    body('price')
        .isFloat({ gt: 0 })
        .withMessage('Price must be a positive number.')
        .notEmpty()
        .withMessage('Price is required.'),
    
    (req: Request, res: Response, next: NextFunction) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];