global.foodData = require('./db')(function call(err, data, CatData) {
  if (err) console.log(err);
  global.foodData = data;          // Food items
  global.foodCategory = CatData;  // Food categories
});

const express = require('express');
const app = express();
const port = 5000;

// CORS setup
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Food data route
app.post('/api/foodData', (req, res) => {
  try {
    res.json({
      food_items: global.foodData,
      foodCategory: global.foodCategory
    });
  } catch (error) {
    console.error("Error serving food data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Auth route
app.use('/api/auth', require('./Routes/Auth'));

// Start server
app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
