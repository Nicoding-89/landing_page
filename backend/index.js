import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import sendEmailRoute from './routes/sendEmail.route.js'

const app = express();
const PORT = process.env.PORT || 4000;
const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:5173';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(cors({
  origin: FRONTEND_URL,
  methods: 'GET,POST'
}));

app.use('/', sendEmailRoute);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
});