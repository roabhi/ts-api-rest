import createServer from './server';

createServer().listen(createServer().get('port'), () => {
    console.log('listening on', createServer().get('port'));
});