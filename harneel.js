const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Harneel:harneel@cluster1.idvrb.mongodb.net/Restuarant?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true }); 
connect();
async function connect(){
    try {
      await client.connect();
      const database = client.db("Resturant");
     /* const collection = database.createCollection("Tables");
      console.log(`Connected to Database ${database.databaseName}`)
      console.log(`collection created ${(await collection).collectionName}`)*/
      //const collection = database.createCollection("Waiters");
      //console.log(`Connected to Database ${database.databaseName}`)
      //console.log(`collection created ${(await collection).collectionName}`)


      const Tables = database.collection("Tables")
    const insertCursor = await Tables.insertMany([
        {
            "id": "01",
            "Desc": "Sofa good"
        },
        {
            "id": "02",
            "Desc": "Chair good"
        },
        {
            "id": "03",
            "Desc": "Exotic sofa"
        },
        {
            "id": "04",
            "Desc": "Water Sofa"
        }


    ])
    console.log(insertCursor.insertedCount)
   /* const Waiters = database.collection("Waiters")
    const insertCursor = await Waiters.insertMany([
        
{
	"id": "201",
	"Name": "Babbu",
	"Contact": "6045477011",
	"Address": {
     "building": "1007",
     "coord": [ -73.856077, 40.848447 ],
     "street": "Morris Park Ave",
     "zipcode": "10462"
	},
	"Salary": "14 $/h",
	"Sex": "Male",
	"Table": "01"
},
{
	"id": "202",
	"Name": "Gaggu",
	"Contact": "6045477012",
	"Address": {
     "building": "1007",
     "coord": [ -73.856077, 40.848447 ],
     "street": "Morris Park Ave",
     "zipcode": "10462"
	},
	"Salary": "14 $/h",
	"Sex": "Male",
	"Table": "02"
},
{
	"id": "203",
	"Name": "Munna",
	"Contact": "6045477011",
	"Address": {
     "building": "1007",
     "coord": [ -73.856077, 40.848447 ],
     "street": "Morris Park Ave",
     "zipcode": "10462"
	},
	"Salary": "14 $/h",
	"Sex": "Male",
	"Table": "03"
},
{
	"id": "204",
	"Name": "Shanu",
	"Contact": "6045477011",
	"Address": {
     "building": "1008",
     "coord": [ -73.856077, 40.848447 ],
     "street": "Morris Park Ave",
     "zipcode": "10462"
	},
	"Salary": "14 $/h",
	"Sex": "Male",
	"Table": "04"
}
])
console.log(insertCursor.insertedCount)*/
//const Waiters = database.collection("Waiters");
//const searchCursor = await Waiters.find();
//const searchCursor = await Waiters.find({"sex":"Male"});
//const result = await searchCursor.toArray();
//result.forEach(r=>console.log(r));
//console.table(result)
/*const Waiters = database.collection("Waiters");
    const updateCursor = await Waiters.updateOne(
      {"id":"201"},
      {"$set":{"phoneno":"647-898-1122"}}
    )
    console.log(updateCursor.modifiedCount);*/
    /*to delete documents
    const Waiters = database.collection("Waiters");
    const deleteCursor = await Waiters.deleteOne(
      {"Name":"Munna"}
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