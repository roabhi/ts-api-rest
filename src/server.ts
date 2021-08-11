import cors from 'cors';
import express from 'express';


import {getResults, getIanaCode, getIanaCodeByIso} from './database';

export default function createServer(){
    const app = express();

    const allowedOrigins = ['http://localhost:5000', 'http://localhost:3000', 'http://localhost:1234'];

    const options: cors.CorsOptions = {
    origin: allowedOrigins
    };


    app.use(cors(options));

    app.set('port', (process.env.PORT || 3001));

    app.get('/', (req, res)  => {
        const result = 'App is running'
        res.send(result);
    });

    app.get('/cities/:name', (req, res) => {

        try{

            const data = getResults(req.params.name);
            res.json({data});

        }catch (e) {
            res.status(400).json({
                error: e.message
            });
        };
    });

    app.get('/cities/iana/:name/:country', (req, res) => {
        
        try{

            const data = getIanaCode(req.params.name, req.params.country);
            res.json({
                "iana_code" : data.timezone
            });

        }catch (e) {
            res.status(400).json({
                error:e.message
            });
        }


    });

    app.get('/cities/iana-iso/:name/:iso', (req, res) => {
        
        try{

            const data = getIanaCodeByIso(req.params.name, req.params.iso);
            res.json({
                "iana_code" : data.timezone
            });

        }catch (e) {
            res.status(400).json({
                error:e.message
            });
        }


    });

    return app;
}