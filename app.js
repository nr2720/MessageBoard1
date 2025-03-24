const express = require('express');
const app = express();
const path = require('path')
const bodyParser = require('body-parser');
const cors = require('cors');

//middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors()); // Allow cross-origin requests if needed



//Views
app.use(express.static(__dirname + '/public'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');



//Router
const router = express.Router();
const indexRouter = require('./routes/indexRouter');
const newMessageRouter = require('./routes/newMessageRouter');
const searchRouter = require('./routes/searchRouter');


app.use('/', indexRouter);
app.use('/new', newMessageRouter);
app.use('/search', searchRouter);






//listen
const PORT = 300;
app.listen(PORT, () => {
    console.log(`app logged on ${PORT}`);
})
