

import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import methodOverride from 'method-override';

const app = express();


app.set('view engine', 'ejs');
app.set('views','./public');


app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method')); // للسماح بـ PUT/DELETE من forms


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

   console.log('POST /users - Request Body:', req.body);
   
   res.setHeader('Content-Type', 'application/json');

   // Validation - التحقق من البيانات
   if(!req.body || !req.body.name || !req.body.id){
       console.log('Validation failed - Missing fields');
       return res.status(400).send('Missing required fields: name and id');
   }

   let user = req.body;
   users.push(user);
   console.log('User added successfully:', user);
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
    // ✅ استخدم req.params.id
    let id = parseInt(req.params.id);
    let newItem = req.body;
    
    if(isNaN(id)){
        return res.status(400).send('Invalid ID');
    }
    
    // ✅ استخدم findIndex
    let index = users.findIndex((user) => user.id === id);
    
    if(index !== -1){
        users[index] = {id: id, ...newItem};  // ✅ احتفظ بالـ id
        return res.render('users',{users:users})
    }
    else{
        return res.status(404).send('User not found');
    }
})



// app.get('/user/:id',(req,res)=>{
//     // make sure that id is number
//     let id = parseInt(req.params.id);
//     if(isNaN(id)){
//         return  res.status(400).send('Invalid ID');
//     }
//     //take the id send from user and compare it with the data we create in array
//     //find usere that match id that put in url 
//     const user = users.find(user => user.id === id);

//     //error handle 
//     if(!user){
//         return   res.status(404).send('User not found');
//     }
//     return  res.send(`User ID: ${user.name}`);
// })

// app.get('/users',(req,res)=>{
//     res.setHeader('Content-Type', 'application/json');
//     return   res.json(users);
// })

// app.post('/users',(req,res)=>{    
//     res.setHeader('Content-Type', 'application/json');
//     const user = req.body;
//     users.push(user);
//     return   res.status(201).json(users);
// })


// app.get('/product',(req,res)=>{
// res.sendFile(path.join(__dirname, 'public', 'index.html'));
// })

// //لهوية/معرف
// app.get('/product/:id',(req,res)=>{
//     let id = parseInt(req.params.id);
//     if(isNaN(id)){
//         return   res.status(400).send('Invalid ID');
//     }
//     const product = products.find(product => product.id === id);
//     if(!product){
//         return   res.status(404).send('Product not found');
//     }
//     return   res.json(`Product ID: ${product.name}`);
// })

// // make quary prameter for prices
// //http://localhost:3002/product/4499

// // "صح الصيغه؟" تعني "Is the syntax correct?" باللغة العربية. 
// // الكود جيد بشكل عام ولكن هناك خطأ في تعريف راوت /product/:price 
// // لأن Express سيعتبره متضارب مع /product/:id وسيقرأ كلاهما كرابط متغير بنفس المكان.
// // الصيغة الصحيحة للبحث بسعر المنتج باستخدام query string هكذا مثلاً:

// // app.get('/product/byprice', (req, res) => {
// //     let price = parseInt(req.query.price);
// //     if(isNaN(price)){
// //         return res.status(400).send('Invalid price');
// //     }
// //     const product = products.find(product => product.price === price);
// //     if(!product){
// //         return res.status(404).send('Product not found');
// //     }
// //     return res.send(`Product Price: ${product.name}`);
// // });

// // ويفضل عدم عمل /product/:price لأن :price سيتم اعتباره كأنه id أو متغير آخر.

// app.get('/product/byprice',(req,res)=>{
//     let price = parseInt(req.query.price);
//     if(isNaN(price)){
//         return   res.status(400).send('Invalid price');
//     }
//     const product = products.find(product => product.price === price);
//     if(!product){
//         return   res.status(404).send('Product not found');
//     }
//     return   res.send(`Product Price: ${product.name}`);
// })

// //

// app.get('/products',(req,res)=>{
//  const max = parseInt(req.query.max)
//  const min = parseInt(req.query.min)



//  const filter = products.filter(p=>p.price >= min && p.price <= max)

//  if(filter.length === 0){
//     return   res.status(404).send('No products found');
//  }
//  return   res.send(filter);
// })


// لتشغيل الخادم علئ المنفذ 
app.listen(3002, () => {
    console.log('Server is running on port 3002');
});





