"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
// use ejs view engine as our template engine
app.set('view engine', 'ejs');
// serve static files folder
app.use(express_1.default.static(__dirname + '/public'));
// routes for app
app.get('/', (req, res) => {
    // render home page by specifying the view file name in views folder
    res.render('home');
});
const port = process.env.PORT || 3030;
app.listen(port);
