const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://manpreet:manpreet@cluster1.idvrb.mongodb.net/Restuarant?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true }); 
connect();
async function connect(){
    try {
      await client.connect();
      const database = client.db("Resturant");
      //const collection = database.createCollection("MenuBills");
      //console.log(`Connected to Database ${database.databaseName}`)
      //console.log(`collection created ${(await collection).collectionName}`)
      //const collection = database.createCollection("Customers");
      //console.log(`Connected to Database ${database.databaseName}`)
      //console.log(`collection created ${(await collection).collectionName}`)

/*const Customers = database.collection("Customers")
    const insertCursor = await Customers.insertMany([       


{
	"id":"101",
	"Fname":"Amar",
	"Lname":"Jeet",
	"Contact":"6477862051",
	"Email":"amar@gmail.com"
},
{
	"id":"102",
	"Fname":"Sandeep",
	"Lname":"Kaur",
	"Contact":"6477862052",
	"Email":"sandeep@gmail.com"
},
{
	"id":"103",
	"Fname":"Harneel",
	"Lname":"Jeet",
	"Contact":"6477862053",
	"Email":"hj@gmail.com"
},
{
	"id":"104",
	"Fname":"Lamar",
	"Lname":"Jeet",
	"Contact":"6477862054",
	"Email":"lamar@gmail.com"
},
{
	"id":"105",
	"Fname":"Manpreet",
	"Lname":"Singh",
	"Contact":"6477862055",
	"Email":"mann@gmail.com"
},
{
	"id":"106",
	"Fname":"Rohit",
	"Lname":"Sharma",
	"Contact":"6477862056",
	"Email":"rohit@gmail.com"
}
])
console.log(insertCursor.insertedCount)*/

    const MenuBills = database.collection("MenuBills")
    const insertCursor = await MenuBills.insertMany([ 
        


{
	"id": "01",
	"Date": "2020/04/01",
	"Time": "02:02 AM",
	"WaiterId": "201",
	"TableId": "01",
	"Products": [
		{
			"FoodId": "01"
		}
	],
	"Total": "$ 25"	
},
{
	"id": "02",
	"Date": "2020/04/01",
	"Time": "02:20 AM",
	"WaiterId": "202",
	"TableId": "02",
	"Products": [
		{
			"FoodId": "01"
		}
	],
	"Total": "$ 28"	
},
{
	"id": "03",
	"Date": "2020/04/03",
	"Time": "02:30 AM",
	"WaiterId": "203",
	"TableId": "03",
	"Products": [
		{
			"FoodId": "02"
		}
	],
	"Total": "$ 28"	
},
{
	"id": "04",
	"Date": "2020/04/03",
	"Time": "02:20 AM",
	"WaiterId": "202",
	"TableId": "02",
	"Products": [
		{
			"FoodId": "02"
		}
	],
	"Total": "$ 28"	
}





    ])
    console.log(insertCursor.insertedCount)

    /*const Customers= database.collection("Customers");
    //const searchCursor = await Customers.find();
    const searchCursor = await Customers.find({"Fname":"Lamar"});
    //const searchCursor = await Customers.find({}, {projection: {_id: 0, first_name: 1, gender:2}})
    const result = await searchCursor.toArray();
    result.forEach(r=>console.log(r));
    console.table(result)*/
    /* To update document
    const Customers = database.collection("Customers");
    const updateCursor = await Customers.updateOne(
      {"Fname":"rohit"},
      {"$set":{"phoneno":"647-099-8765"}}
    )
    console.log(updateCursor.modifiedCount);
    //to delete documents
    const Customers= database.collection("Customers");
    const deleteCursor = await Customers.deleteOne(
      {"contact":"6477862055"}
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