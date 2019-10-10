const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect to mongodb
connectDB();

//initialize bodyParser middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => {
  res.send('Home');
});

app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

const PORT = process.env.PORT || 4010;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
