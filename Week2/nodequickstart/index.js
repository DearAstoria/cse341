const { MongoClient } = require("mongodb");
// dotenvenv is not using the right .env file, it's using my global .env (Environment Variables)for some reason, so I ended up putting the variables there.
const dotenv = require("dotenv").config({
  path: "C:\\Users\\xjose\\Documents\\Winter2024\\CSE 341\\cse341.env",
}); // Even when I wrote the direct path here
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

//console.log(`Username: ${username}`);
//console.log(`Password: ${password}`);
//console.log(`Current working directory: ${process.cwd()}`);
//console.log(`Environment variables: ${JSON.stringify(process.env, null, 2)}`);

// I had to use the encodeURIComponent function, because my pw contained special characters that required percent encoding.
const uri = `mongodb+srv://${encodeURIComponent(username)}:${encodeURIComponent(
  password
)}@cluster0.xeppspb.mongodb.net/`;
console.log(uri);

const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db("sample_mflix");
    const movies = database.collection("movies");

    // Query for a movie that has the title 'Back to the Future'
    const query = { title: "Back to the Future" };
    const movie = await movies.findOne(query);

    console.log(movie);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
