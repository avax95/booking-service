const mongoose = require('mongoose');
const database = mongoose.connection;
mongoose.connect('mongodb://localhost/booking');
database.on('error', console.error.bind(console, 'connection error'));
database.once('open', function(){
	console.log('MongoDB is connected')
})

const usersSchema = new mongoose.Schema({
	id: Number,
  userName: String,
  creditCardNumber: Number,
  billingAddress: String,
  
});
const ownersSchema = new mongoose.Schema({
  id: Number,
  ownerName: String,
  creditCardNumber: Number,
  billingAddress: String, 
  superHost: Boolean, 
  
});

const listingsSchema = new mongoose.Schema({
  id: Number,
  ownerID: {type: Schema.ObjectId, ref: 'ownersSchema'}
  maxGuests: Number,
  price: Number,
  minStay: Number,
  cleaningFee: Number,
  areaTax: Number
});

const bookingsSchema = new mongoose.Schema({
  id: Number,
  listingID: {type: Schema.ObjectId, ref: 'listingsSchema'},
  userID: {type: Schema.ObjectId, ref: 'usersSchema'},
  startDate: Date,
  endDate: Data,
  
});

const reviewsSchema = new mongoose.Schema({
  id: Number,
  rating: Number,
  listingID: {type: Schema.ObjectId, ref: 'listingsSchema'},
});

const Users = mongoose.model('Users', usersSchema);
const Owners = mongoose.model('Owners', ownersSchema);
const Listings = mongoose.model('Listings', listingsSchema);
const Bookings = mongoose.model('Bookings', bookingsSchema);
const Reviews = mongoose.model('Reviews', reviewsSchema);