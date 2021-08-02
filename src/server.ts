import express from 'express';

import {getResults} from './database';

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
        }
;
    });

    return app;
}