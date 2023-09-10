import { body } from "express-validator";

 export const createPostschema= [
    body('title')
    .isString().withMessage('debe ser string')
    .notEmpty().withMessage('no debe ser vacio'),
    body('content')
    .isString().withMessage('debe ser string')
    .notEmpty().withMessage('no debe ser vacio'),
    body('imageUrl')
    .isString().withMessage('debe ser string')
    .notEmpty().withMessage('no debe ser vacio'),

]