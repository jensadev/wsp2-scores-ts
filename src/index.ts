import app from './app';

const PORT: string | number = process.env.PORT || 4000;

const server = app.listen(PORT, () =>
    console.log(`Server is running on port ${PORT}`)
);
