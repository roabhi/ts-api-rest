import express from 'express';

export default function createServer(){
    const app = express();

    app.get('/citymap/:city', (req, res) => {
        res.send(`ciudades con nombre ${req.params.city}`);
    });

    return app;
}