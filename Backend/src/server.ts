import app from "./app";
import dotenv from "dotenv";

dotenv.config();
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Backend Server is running on PORT-${port}`);
});
