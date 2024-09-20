import express from "express";
import productRoutes from './routes/productRoutes.js';
import costumersRoutes from './routes/customerRoutes.js';

const app = express();
app.use(express.json());

app.use(productRoutes);
app.use(costumersRoutes);

app.listen(3000, () => {
  console.log(`Servidor rodando na porta 3000`);
});
