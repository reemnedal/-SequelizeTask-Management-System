 
// const sequelize = require('./db'); // Import the configured Sequelize instance
// const createUserModel = require('./models/User'); 
// const createTaskModel = require('./models/Task'); 
// const express=require('express');
// const app=express();
// const User = createUserModel(sequelize); // Initialize the User model
// const Task= createTaskModel(sequelize); // Initialize the User model
// app.use(express.json());//we must use it to use req.body
// const cors = require('cors'); //to handle also data fromo front end to back end 
// app.use(cors());

// // const app=express();
// //we must use post when we want to insert to db 
// // app.post('/insert' ,(req,res)=>{

// //     User.create({

// //     username:"reeemnedal",
// //     email:"reemnedal@gmail.com",
// //     password:"123456"
// //     }).catch((err)=>    
// //     {
// //         if(err){console.log("there is an err in i nsert "+err)}


// //     });
// //     res.send("to insert data") ;

// app.post('/insert', async (req, res) => {
//   try {
//     const { Title, Description } = req.body;

//     console.log("Received data:", Title, Description);

//     await Task.create({
//       "Title": Title,
//       "descriptions": Description,
//       "deleted": 0
//     });

//     res.send('Data inserted successfully');
//   } catch (err) {
//     console.error("There is an error in insert: ", err);
//     res.status(500).send('Error inserting data: ' + err.message);
//   }
// });


// // });



// sequelize.sync({ force: false, alter: true }) 
//   .then(() => {
//     console.log('Database synced successfully.');
       
//     // Start the server after the database is synced
//     app.listen(3001, () => {
//       console.log("The server is running on port 3001");
//     });
//   })
//   .catch(err => {
//     console.error('Unable to sync the database:', err);
//   });


// // // Sync the model with the database
// // sequelize.sync({force: false,alter: true   }) // `force: true` will drop the table if it already exists
// //   .then(() => {
// //     console.log('User table has been created.');
// //   })
// //   .catch(err => {
// //     console.error('Unable to create the table:', err);
// //   });
// // // Sync the model with the database
// // sequelize.sync({ force: false,alter: true  }) // `force: true` will drop the table if it already exists
// //   .then(() => {
// //     console.log('Task table has been created.');
// //   })
// //   .catch(err => {
// //     console.error('Unable to create the table Task:', err);
// //   });

 






const sequelize = require('./db'); // Import the configured Sequelize instance
const createUserModel = require('./models/User'); 
const createTaskModel = require('./models/Task'); 
const express = require('express');
const cors = require('cors'); // To handle data from front end to back end

const app = express();
app.use(express.json()); // Middleware to parse JSON request bodies
app.use(cors()); // Middleware to enable CORS

// Initialize models
const User = createUserModel(sequelize); 
const Task = createTaskModel(sequelize); 

// Route to insert a new Task
app.post('/insert', async (req, res) => {
  try {
    const { Title, Description } = req.body;

    console.log("Received data:", Title, Description);

    await Task.create({
      title: Title, // 'title' field should be lowercase to match your model
      description: Description, // 'description' field should be lowercase to match your model
      deleted: 0
    });

    res.send('Data inserted successfully');
  } catch (err) {
    console.error("There is an error in insert: ", err);
    res.status(500).send('Error inserting data: ' + err.message);
  }
});





app.get('/', async (req, res) => {
  await Task.findAll({where :{deleted:0}})
  .then((tasks)=>{

res.send(tasks);


  });

});



// const taskid = req.params.taskid;
//   app.post('/softdel:taskid', async (req, res) => {
//   try {
//     // const { Title, Description } = req.body;

//     // console.log("Received data:", Title, Description);

//     await Task.create({
//        deleted:1
//     });

//     res.send('Data inserted successfully');
//   } catch (err) {
//     console.error("There is an error in insert: ", err);
//     res.status(500).send('Error inserting data: ' + err.message);
//   }
// });



// Sync the models with the database and start the server
    sequelize.sync({ force: false, alter: true }) 
    .then(() => { 
    console.log('Database synced successfully.');

    // Start the server after the database is synced
    app.listen(3001, () => {
      console.log("The server is running on port 3001");
    });
  })
  .catch(err => {
    console.error('Unable to sync the database:', err);
  });
