import { express } from express;
import Lowdb from 'lowdb';
import { DataFileSync } from 'lowdb/node';

const app = express();
const port = 5000;

// Set up Lowdb
const adapter = new DataFileSync('db.json');
const db = Lowdb(adapter);

// Set default values for the database
db.defaults({ posts: [] }).write();

// Middleware to parse JSON bodies
app.use(express.json());

// Routes
app.get('/posts', (req, res) => {
  const posts = db.get('posts').value();
  res.json(posts);
});

app.post('/posts', (req, res) => {
  const newPost = req.body;
  db.get('posts').push(newPost).write();
  res.status(201).json(newPost);
});

app.put('/posts/:id', (req, res) => {
  const { id } = req.params;
  const updatedPost = req.body;
  db.get('posts').find({ id }).assign(updatedPost).write();
  res.json(updatedPost);
});

app.delete('/posts/:id', (req, res) => {
  const { id } = req.params;
  db.get('posts').remove({ id }).write();
  res.status(204).end();
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
