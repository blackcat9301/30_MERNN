const express = require('express');
const cors = require('cors');
const config = require('./config');

const app = express();
///MongoDB
const mongoose = require('mongoose');
// connects our back end code with the database
mongoose.connect('mongodb://localhost:27017/mernapp', { useNewUrlParser: true });
let db = mongoose.connection;

db.once('open', () => console.log('Connected to the database'));
db.on('error', (err) => console.log('Error ' + err));

// import routes
const postRoutes = require('./routes/post.routes');

app.use(cors());
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use('/api', postRoutes);

app.listen(config.PORT, function() {
  console.log('Server is running on Port:', config.PORT);
});
app.get('/api/posts', (req, res) => {
    const data = [
      { id: '1adfasf', title: 'Lorem Ipsum', content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.' },
      { id: '2evxc34', title: 'Lorem Ipsum II', content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.' },
    ]
    res.json(data);
  });
