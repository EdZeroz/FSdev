const express = require('express');
const app = express();

app.get('/', (req, res) => {
 res.send('YEE');
});
app.get('/my-json-api',(req,res)=>{
    res.send('{"myJsonKey": "myJsonValue"}');
});
app.get('/my-html', (req, res) => {
    res.send('<h1>This is normal HTML</h1>');
}); 
app.listen(3000, () => {
 console.log('server started on port 3000!');
});
