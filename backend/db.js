const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://aastha_0711:aasthagarg@cluster0.x2r0n.mongodb.net/GoFoodieMern?retryWrites=true&w=majority";

module.exports = function (callback) {
  mongoose.connect(
    mongoURI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    async (err, result) => {
      if (err) {
        console.log("Connection error:", err);
        callback(err, null, null); // Handle error if connection fails
      } else {
        console.log("Connected to MongoDB");

        try {
          const foodCollection =
            mongoose.connection.db.collection("food_items");
          const categoryCollection =
            mongoose.connection.db.collection("foodCategory");

          const foodData = await foodCollection.find({}).toArray();
          const categoryData = await categoryCollection.find({}).toArray();

          // Call callback with data from both collections
          callback(null, foodData, categoryData);
        } catch (error) {
          console.log("Error fetching data:", error);
          callback(error, null, null);
        }
      }
    }
  );
};
