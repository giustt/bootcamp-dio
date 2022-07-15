
import express from 'express';
import errorHandler from '../middlewares/error-handler.middleware';
import statusRoute from '../routes/status.routes';
import usersRoute from '../routes/users.route';


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(usersRoute);
app.use(statusRoute);

// Configuracao do Error Handling
app.use(errorHandler);


app.listen(3000, () => {
    console.log("Aplicacao Executando na Porta 3000!");
});

