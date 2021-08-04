import express from 'express';

import {getResults, getIanaCode} from './database';

export default function createServer(){
    const app = express();

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

    return app;
}