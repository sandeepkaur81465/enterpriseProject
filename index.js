
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Sippi:sandeep@cluster1.idvrb.mongodb.net/Restuarant?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true }); 
connect();
async function connect(){
  try {
    await client.connect();
    const database = client.db("Resturant");
  // const collection = database.createCollection("Food_items");
    //console.log(`Connected to Database ${database.databaseName}`)
    //console.log(`collection created ${(await collection).collectionName}`)
    //const collection = database.createCollection("Orders");
    //console.log(`Connected to Database ${database.databaseName}`)
    //console.log(`collection created ${(await collection).collectionName}`)
    const Food_items = database.collection("Food_items")
    const insertCursor = await Food_items.insertMany([
      {_id:11,name:"bigmac",price:5.99,type:"beef",category:"bigbun"},
        {_id:23,name:"cheeseburger",price:2.80,type:"regmeat",category:"sandwich"},
        {_id:34,name:"redslushy",price:2,type:"cold",category:"summerdrink"},
        {_id:45,name:"strawsmoothie",price:4,type:"cold",category:"drink"},
        {_id:56,name:"fries",price:3.45,type:"fried",category:"fried"},
      {_id:67,name:"donut",price:0.99,type:"sweet",category:"speciality"}


    ])
    console.log(insertCursor.insertedCount)
    /* To insert Data
    const StaffMembers = database.collection("StaffMembers")
    const insertCursor = await StaffMembers.insertMany([
        {staff_id:101, first_name:'heena', last_name:'khan', phoneno:657-890-9876, gender:'female', position:'manager'},
        {staff_id:102, first_name:'nancy', last_name:'pachaoto', phoneno:437-000-6767, gender:'female', position:'supervisor'},
        {staff_id:103, first_name:'jevon', last_name:'john', phoneno:437-888-8989, gender:'male', position:'waitor'},
        {staff_id:104, first_name:'amjad', last_name:'khan', phoneno:647-898-0022, gender:'male', position:'cook'},
        {staff_id:105, first_name:'karrisha', last_name:'wangdu', phoneno:647-890-9294, gender:'female', position:'cashier'}
    ])
    console.log(insertCursor.insertedCount)*/
    //To find document
    //const StaffMembers = database.collection("StaffMembers");
    //const searchCursor = await StaffMembers.find();
    //const searchCursor = await StaffMembers.find({"name":"heena"});
    //const searchCursor = await StaffMembers.find({}, {projection: {_id: 0, first_name: 1, gender:2}})
    //const result = await searchCursor.toArray();
    //result.forEach(r=>console.log(r));
    //console.table(result)

    /* To update document
    const StaffMembers = database.collection("StaffMembers");
    const updateCursor = await StaffMembers.updateOne(
      {"name":"amjad"},
      {"$set":{"phoneno":"647-898-1122"}}
    )
    console.log(updateCursor.modifiedCount);

    //to delete documents
    const StaffMembers = database.collection("StaffMembers");
    const deleteCursor = await StaffMembers.deleteOne(
      {"first_name":"heena"}
    )
    console.log(deleteCursor.deletedCount)*/
} 
catch (ex) {
    console.error(`Something bad happened ${ex}`);
}
finally {
  await client.close();
}
}

/*client.connect(err => {
  const collection = client.db("test").collection("devices");
  
  client.close();
});*/
