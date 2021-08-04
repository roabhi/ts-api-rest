import createServer from './server';

createServer().listen(3000 || process.env.PORT, '0.0.0.0', () => {
    console.log('listening');
});