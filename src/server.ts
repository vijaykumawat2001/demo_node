import express, { Request, Response } from 'express';

const app = express();
const port: number = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let req:any;
// Routes
app.get('/', (request: Request, res: Response) => {
  console.log('Hello World');
 
 
  res.json({ message: 'Welcome to Node.js TypeScript Demo API' });
});

app.post('/', (request: Request, res: Response) => {
  console.log('Hello World');
  console.log(request.body);
  req = request.body;
  res.json({ message: 'Welcome to Node.js TypeScript Demo API' });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
}); 