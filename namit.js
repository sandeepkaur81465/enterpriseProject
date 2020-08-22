const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Namit:namit@cluster1.idvrb.mongodb.net/Restuarant?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true }); 
connect();
async function connect(){
    try {
      await client.connect();
      const database = client.db("Resturant");
      //const collection = database.createCollection("Order_detail");
      //console.log(`Connected to Database ${database.databaseName}`)
      //console.log(`collection created ${(await collection).collectionName}`)
      //const collection = database.createCollection("Bookings");
      //console.log(`Connected to Database ${database.databaseName}`)
      //console.log(`collection created ${(await collection).collectionName}`)

      const Order_detail = database.collection("Order_detail")
     const insertCursor = await Order_detail.insertMany([
        {_id:101,order_type:"dine-in",order_date:"27/01/2020",order_time:"11:00am"},
        {_id:102,order_type:"take-out",order_date:"26/02/2020",order_time:"01:00pm"},
        {_id:103,order_type:"take-out",order_date:"26/02/2020",order_time:"02:14pm"},
        {_id:104,order_type:"delivery",order_date:"20/05/2020",order_time:"03:30am"},
        {_id:105,order_type:"dine-in",order_date:"03/03/2020",order_time:"12:12pm"},
        {_id:106,order_type:"take-out",order_date:"01/02/2020",order_time:"09:29pm"}

     ])
     /*
      const Bookings = database.collection("Bookings")
     const insertCursor = await Bookings.insertMany([ 
        {
            "id": "Booking_1",
            "Date": "2020/04/01",
            "Time": "02:02 AM",
            "CustomerID": "101"
        },
        {
            "id": "Booking_2",
            "Date": "2020/04/01",
            "Time": "02:10 AM",
            "CustomerID": "102"
        },
        {
            "id": "Booking_3",
            "Date": "2020/04/03",
            "Time": "02:20 AM",
            "CustomerID": "103"
        },
        {
            "id": "Booking_4",
            "Date": "2020/04/03",
            "Time": "02:30 AM",
            "CustomerID": "104"
        },
        {
            "id": "Booking_5",
            "Date": "2020/04/05",
            "Time": "02:40 AM",
            "CustomerID": "105"
        },
        {
            "id": "Booking_6",
            "Date": "2020/04/06",
            "Time": "02:50 AM",
            "CustomerID": "106"
        }


     ])
    const Bookings= database.collection("Bookings");
    const searchCursor = await Bookings.find();
    const result = await searchCursor.toArray();
    result.forEach(r=>console.log(r));
    console.table(result)

    const Bookings = database.collection("Bookings");
    const updateCursor = await Bookings.updateOne(
      {"time":"02:02 AM"},
      {"$set":{"CustomerID":"111"}}
    )
    console.log(updateCursor.modifiedCount);
    const Bookings = database.collection("Bookings");
    const deleteCursor = await Bookings.deleteOne(
      {"id":"Booking_1"}
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