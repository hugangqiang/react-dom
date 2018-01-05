const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./config/dev.js');
const {defaultPath} = require('./config/default');

let app = new ( require('express') )();

let port = 9003;

config.entry.unshift('webpack-hot-middleware/client?reload=true');

let compiler = webpack(config);

app.use( webpackDevMiddleware(compiler, {publicPath: '/assets/'}) );

app.use( webpackHotMiddleware(compiler) );

app.get('/*', (req, res)=> res.sendFile(defaultPath.src + '/index.html') )

app.listen(port, (error)=>{
    if(!error){
        console.log('');
    }
});
