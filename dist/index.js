"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = __importDefault(require("./server"));
server_1.default().listen(server_1.default().get('port'), function () {
    console.log('listening on', server_1.default().get('port'));
});
