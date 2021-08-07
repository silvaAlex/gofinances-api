import { app } from "./app";

console.log(process.env['TOKEN_KEY'])

app.listen(process.env.PORT || 8080, () => console.log("Server is running!"));
