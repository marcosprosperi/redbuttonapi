import redButtonRoute from "./redButton";


export default app => {
  app.use("/api/redbutton", redButtonRoute);
};