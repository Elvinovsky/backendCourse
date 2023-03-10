"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); //мы проимпортировали express
const app = (0, express_1.default)(); // создали приложение
const port = 3000; // указали порт
app.get('/', (req, res) => {
    const a = 4;
    if (a < 3) {
        res.send('ok!');
    }
    else {
        res.send('Hello World!!!!');
    }
});
app.get('/samurais', (req, res) => {
    res.send('Hello Samurais!');
});
app.post('/samurais', (req, res) => {
    res.send('We have created samurai!');
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
