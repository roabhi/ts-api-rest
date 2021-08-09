"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cors_1 = __importDefault(require("cors"));
var express_1 = __importDefault(require("express"));
var database_1 = require("./database");
function createServer() {
    var app = express_1.default();
    var allowedOrigins = ['http://localhost:5000', 'http://localhost:3000', 'http://localhost:1234'];
    var options = {
        origin: allowedOrigins
    };
    app.use(cors_1.default(options));
    app.set('port', (process.env.PORT || 3001));
    app.get('/', function (req, res) {
        var result = 'App is running';
        res.send(result);
    });
    app.get('/cities/:name', function (req, res) {
        try {
            var data = database_1.getResults(req.params.name);
            res.json({ data: data });
        }
        catch (e) {
            res.status(400).json({
                error: e.message
            });
        }
        ;
    });
    app.get('/cities/iana/:name/:country', function (req, res) {
        try {
            var data = database_1.getIanaCode(req.params.name, req.params.country);
            res.json({
                "iana_code": data.timezone
            });
        }
        catch (e) {
            res.status(400).json({
                error: e.message
            });
        }
    });
    app.get('/cities/iana-iso/:name/:iso', function (req, res) {
        try {
            var data = database_1.getIanaCodeByIso(req.params.name, req.params.iso);
            res.json({
                "iana_code": data.timezone
            });
        }
        catch (e) {
            res.status(400).json({
                error: e.message
            });
        }
    });
    return app;
}
exports.default = createServer;
