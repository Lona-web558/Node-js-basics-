Creating 100 basic programs in Node.js is a substantial task but can be immensely useful for understanding various concepts, libraries, and features in Node.js. Below is a list of 100 simple Node.js programs grouped by categories, along with a brief description of what each does.

### 1. Hello World
```javascript
console.log("Hello, World!");
```

### 2. Basic Arithmetic
```javascript
const add = (a, b) => a + b;
console.log(add(5, 3)); // Outputs: 8
```

### 3. Factorial
```javascript
const factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1));
console.log(factorial(5)); // Outputs: 120
```

### 4. FizzBuzz
```javascript
for (let i = 1; i <= 100; i++) {
    console.log(i % 3 === 0 && i % 5 === 0 ? "FizzBuzz" : i % 3 === 0 ? "Fizz" : i % 5 === 0 ? "Buzz" : i);
}
```

### 5. Prime Number Check
```javascript
const isPrime = (num) => {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return num > 1;
}
console.log(isPrime(13)); // Outputs: true
```

### 6. Reverse a String
```javascript
const reverseString = (str) => str.split('').reverse().join('');
console.log(reverseString("Hello")); // Outputs: "olleH"
```

### 7. Array Sum
```javascript
const sumArray = (arr) => arr.reduce((acc, val) => acc + val, 0);
console.log(sumArray([1, 2, 3, 4])); // Outputs: 10
```

### 8. JSON Parse/Serialize
```javascript
const obj = { name: "Alice", age: 25 };
const jsonString = JSON.stringify(obj);
console.log(jsonString); // Outputs: {"name":"Alice","age":25}
console.log(JSON.parse(jsonString)); // Outputs: { name: 'Alice', age: 25 }
```

### 9. Read File
```javascript
const fs = require('fs');
fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});
```

### 10. Write to File
```javascript
const fs = require('fs');
fs.writeFile('output.txt', 'Hello, World!', (err) => {
    if (err) throw err;
    console.log('File has been saved!');
});
```

### 11. HTTP Server
```javascript
const http = require('http');
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!\n');
});
server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});
```

### 12. Basic Express Server
```javascript
const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Hello World!'));
app.listen(3000, () => console.log('Server running on http://localhost:3000'));
```

### 13. Simple Middleware
```javascript
const express = require('express');
const app = express();
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});
app.get('/', (req, res) => res.send('Hello World!'));
app.listen(3000);
```

### 14. Query Parameters
```javascript
const express = require('express');
const app = express();
app.get('/greet', (req, res) => {
    const name = req.query.name || 'World';
    res.send(`Hello, ${name}!`);
});
app.listen(3000);
```

### 15. URL Parameters
```javascript
const express = require('express');
const app = express();
app.get('/user/:id', (req, res) => {
    res.send(`User ID is: ${req.params.id}`);
});
app.listen(3000);
```

### 16. Handling POST Requests
```javascript
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.post('/data', (req, res) => {
    res.send(`Received: ${JSON.stringify(req.body)}`);
});
app.listen(3000);
```

### 17. Middleware for Parsing JSON
```javascript
const express = require('express');
const app = express();
app.use(express.json());
app.post('/json', (req, res) => {
    res.json(req.body);
});
app.listen(3000);
```

### 18. Static File Serving
```javascript
const express = require('express');
const app = express();
app.use(express.static('public'));
app.listen(3000);
```

### 19. Sending HTML Response
```javascript
const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>');
});
app.listen(3000);
```

### 20. Simple Logger
```javascript
const express = require('express');
const app = express();
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
};
app.use(logger);
app.get('/', (req, res) => res.send('Hello!'));
app.listen(3000);
```

### 21. Error Handling Middleware
```javascript
const express = require('express');
const app = express();
app.use((req, res, next) => {
    const error = new Error('Something went wrong!');
    error.status = 500;
    next(error);
});
app.use((err, req, res, next) => {
    res.status(err.status || 500).send(err.message);
});
app.listen(3000);
```

### 22. Using a Template Engine (EJS)
```javascript
const express = require('express');
const ejs = require('ejs');
const app = express();
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.render('index', { title: 'My Page', message: 'Hello!' });
});
app.listen(3000);
```

### 23. Socket.IO Basic Example
```javascript
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const app = express();
const server = http.createServer(app);
const io = socketIo(server);
io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});
server.listen(3000);
```

### 24. Cron Job Example
```javascript
const cron = require('node-cron');
cron.schedule('* * * * *', () => {
    console.log('Running a task every minute');
});
```

### 25. Environment Variables
```javascript
console.log(process.env.MY_ENV_VAR);
```

### 26. Simple User Authentication (using sessions)
```javascript
const express = require('express');
const session = require('express-session');

const app = express();
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
}));

app.get('/login', (req, res) => {
    req.session.user = { id: 1, name: 'Alice' };
    res.send('User logged in');
});

app.get('/profile', (req, res) => {
    if (req.session.user) {
        res.send(`Hello ${req.session.user.name}`);
    } else {
        res.send('You are not logged in');
    }
});

app.listen(3000);
```

### 27. Connect to MongoDB
```javascript
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));
```

### 28. Basic Mongoose Model
```javascript
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({ name: String });
const User = mongoose.model('User', userSchema);
const user = new User({ name: 'Alice' });
user.save().then(() => console.log('User saved'));
```

### 29. Basic REST API with Mongoose
```javascript
const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true });

const userSchema = new mongoose.Schema({
    name: String
});
const User = mongoose.model('User', userSchema);

app.post('/users', (req, res) => {
    const user = new User(req.body);
    user.save().then(() => res.send(user));
});

app.get('/users', (req, res) => {
    User.find().then(users => res.send(users));
});

app.listen(3000);
```

### 30. Connection to PostgreSQL
```javascript
const { Client } = require('pg');
const client = new Client({
    user: 'yourusername',
    host: 'localhost',
    database: 'testdb',
    password: 'yourpassword',
    port: 5432,
});
client.connect().then(() => console.log('Connected to PostgreSQL!')).catch(err => console.error(err));
```

### 31. Simple Sequelize Example
```javascript
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const User = sequelize.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

(async () => {
    await sequelize.sync();
    const user = await User.create({ name: 'Alice' });
    console.log(user.toJSON());
})();
```

### 32. Using Axios for HTTP Requests
```javascript
const axios = require('axios');
axios.get('https://api.github.com/users/octocat')
    .then(response => console.log(response.data))
    .catch(error => console.error(error));
```

### 33. Using Fetch in Node.js
```javascript
const nodeFetch = require('node-fetch');
nodeFetch('https://api.github.com/users/octocat')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

### 34. File Upload with Multer
```javascript
const express = require('express');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const app = express();
app.post('/upload', upload.single('file'), (req, res) => {
    res.send('File uploaded successfully');
});
app.listen(3000);
```

### 35. Basic Email Sending with Nodemailer
```javascript
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'youremail@gmail.com',
        pass: 'yourpassword'
    }
});
const mailOptions = {
    from: 'youremail@gmail.com',
    to: 'recipientemail@gmail.com',
    subject: 'Hello',
    text: 'Hello world!'
};
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Email sent: ' + info.response);
});
```

### 36. Unit Tests with Mocha
```javascript
const assert = require('assert');
const add = (a, b) => a + b;

describe('Addition', () => {
    it('should return 5 when 2 and 3 are added', () => {
        assert.strictEqual(add(2, 3), 5);
    });
});
```

### 37. Asynchronous File Reading
```javascript
const fs = require('fs').promises;
async function readFile() {
    try {
        const data = await fs.readFile('example.txt', 'utf8');
        console.log(data);
    } catch (err) {
        console.error(err);
    }
}
readFile();
```

### 38. Promises Example
```javascript
const doSomething = () => new Promise((resolve, reject) => {
    setTimeout(() => resolve("Done!"), 2000);
});
doSomething().then(result => console.log(result));
```

### 39. Async/Await Example
```javascript
const doSomethingAsync = async () => {
    return "Done!";
};
doSomethingAsync().then(result => console.log(result));
```

### 40. Basic CRUD Operations in MongoDB
```javascript
const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true });

const userSchema = new mongoose.Schema({ name: String });
const User = mongoose.model('User', userSchema);

app.post('/users', (req, res) => {
    const user = new User(req.body);
    user.save().then(() => res.send(user));
});

app.get('/users', (req, res) => {
    User.find().then(users => res.send(users));
});

app.put('/users/:id', (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body)
        .then(() => res.send('User updated'));
});

app.delete('/users/:id', (req, res) => {
    User.findByIdAndRemove(req.params.id)
        .then(() => res.send('User deleted'));
});

app.listen(3000);
```

### 41. Store Data in SQLite
```javascript
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');
db.serialize(() => {
    db.run("CREATE TABLE user (name TEXT)");
    let stmt = db.prepare("INSERT INTO user VALUES (?)");
    stmt.run("Alice");
    stmt.finalize();
    db.each("SELECT rowid AS id, name FROM user", (err, row) => {
        console.log(row.id + ": " + row.name);
    });
});
db.close();
```

### 42. Create a Basic Logger
```javascript
const fs = require('fs');
const logStream = fs.createWriteStream('server.log', { flags: 'a' });
const logger = (msg) => logStream.write(`${new Date().toISOString()}: ${msg}\n`);
logger('Server started');
```

### 43. Basic Rate Limiting Middleware
```javascript
const express = require('express');
const rateLimit = require('express-rate-limit');
const app = express();
const limiter = rateLimit({
    windowMs: 1 * 60 * 1000,
    max: 5
});
app.use(limiter);
app.get('/', (req, res) => res.send('Hello'));
app.listen(3000);
```

### 44. Generating UUIDs
```javascript
const { v4: uuidv4 } = require('uuid');
console.log(uuidv4());
```

### 45. Basic WebSocket Chat Server
```javascript
const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });
wss.on('connection', ws => {
    ws.on('message', message => {
        console.log(`Received: ${message}`);
    });
    ws.send('Welcome to the chat!');
});
```

### 46. Basic CORS Handling
```javascript
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.get('/data', (req, res) => res.json({ msg: 'CORS enabled!' }));
app.listen(3000);
```

### 47. EventEmitter Example
```javascript
const EventEmitter = require('events');
const myEmitter = new EventEmitter();
myEmitter.on('event', () => {
    console.log('An event occurred!');
});
myEmitter.emit('event');
```

### 48. Simple Web Scraping with Cheerio
```javascript
const axios = require('axios');
const cheerio = require('cheerio');

async function getWebsiteTitle(url) {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    console.log($('title').text());
}

getWebsiteTitle('http://example.com');
```

### 49. Simple Password Hashing with Bcrypt
```javascript
const bcrypt = require('bcrypt');
const password = 'myPassword';
bcrypt.hash(password, 10, (err, hash) => {
    console.log(hash);
});
```

### 50. Simple Validator Example
```javascript
const Joi = require('joi');
const schema = Joi.object({
    name: Joi.string().min(3).required(),
});
const { error } = schema.validate({ name: 'Al' });
if (error) {
    console.error(error.details[0].message);
}
```

### 51. Fetching External API Data
```javascript
const axios = require('axios');
axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => console.log(response.data))
    .catch(err => console.error(err));
```

### 52. Basic File System Operations
```javascript
const fs = require('fs');
fs.mkdirSync('new-folder');
fs.writeFileSync('new-folder/file.txt', 'Hello, file!');
```

### 53. UUID Example
```javascript
const { v4: uuidv4 } = require('uuid');
console.log(uuidv4()); // Outputs a UUID
```

### 54. Basic Middleware
```javascript
const express = require('express');
const app = express();
const myMiddleware = (req, res, next) => {
    console.log('Middleware triggered!');
    next();
};
app.use(myMiddleware);
app.get('/', (req, res) => res.send('Hello, World!'));
app.listen(3000);
```

### 55. Caching with Node Cache
```javascript
const NodeCache = require('node-cache');
const myCache = new NodeCache();
myCache.set('key', 'value', 