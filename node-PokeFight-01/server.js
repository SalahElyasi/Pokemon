import express from "express";
import cors from "cors";
import route from "./routes/route.js";

//------------------------
const app = express();
const port = 3001;
//------------------------

app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" })); //

//---------
app.use("/", route);

//--------------

//-------------------------------------
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
