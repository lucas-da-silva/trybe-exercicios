import app from './app';

const PORT = Number(process.env.PORT) || 3001; 

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});