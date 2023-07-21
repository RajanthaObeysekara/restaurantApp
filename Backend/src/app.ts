// src/app.ts
import express, { Request, Response } from "express";
import swaggerUi from "swagger-ui-express";
import swaggerconfig from "./swagger-definition.json";

// import routes
import userRouter from "./routes/UserRoutes";

// Application variables
const app = express();

// middlewear
app.use(express.json())

// add routes
app.use('/user',userRouter)

app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerconfig))

export default app;
