import express from "express";
import helmet from "helmet";
import cors from "cors";
import router from "./routes/router.js";

const PORT = 7000;
const app = express();

app.use(helmet());
app.use(cors());
app.use(router);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});