

import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import methodOverride from 'method-override';

const app = express();




app.set('view engine', 'ejs');
app.set('views','./views'); 


app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method')); 


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const users = [
    {id: 1, name: 'John'},
    {id: 2, name: 'Jane'},
    {id: 3, name: 'Jim'},
];



app.get('/',(req,res)=>{
    res.send('Hello World');
});

app.get('/users',(req,res)=>{
    res.render('users',{users:users})
})

app.post('/users',(req,res)=>{


    let id = users.length + 1;
    let name = req.body.name;
    let user = {id: id, name: name};
    users.push(user);
    return res.render('users',{users:users});
})




app.delete('/users/:id',(req,res)=>{
    let id = parseInt(req.params.id)

    if(isNaN(id)){
        return   res.status(400).send('Invalid ID');
    }
    let index = users.findIndex((user)=> user.id === id)

    if(index !== -1){
        users.splice(index,1)
        return   res.render('users',{users:users})
    }
    else{
        return res.status(404).send('User not found');
    }
 
})

app.put('/users/:id',(req,res)=>{
    let id = parseInt(req.params.id);
    let newItem = req.body;
    
    if(isNaN(id)){
        return res.status(400).send('Invalid ID');
    }

    let index = users.findIndex((user) => user.id === id);
    
    if(index !== -1){
        users[index] = {id: id, ...newItem}
        return res.render('users',{users:users})
    }
    else{
        return res.status(404).send('User not found');
    }
})





app.listen(3002, () => {
    console.log('Server is running on port 3002');
});





