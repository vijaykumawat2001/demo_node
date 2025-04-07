import express, { Request, Response } from 'express';

const app = express();
const port: number = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req: Request, res: Response) => {
  console.log('Hello World');
  console.log(req);
  res.json({ message: 'Welcome to Node.js TypeScript Demo API' });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
}); 