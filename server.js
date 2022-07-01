import express, { response } from "express";
import axios from "axios";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 5000;
app.use(express.static(__dirname + '/public'));
app.get('/', function (req, res) {
    res.sendFile('index.html', {root: __dirname});
  })
app.get('/test', function (req, res) {
    res.sendFile('test.html', {root: __dirname});
  })
app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
}); 