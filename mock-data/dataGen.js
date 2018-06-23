const fs = require('fs');
const faker = require('faker');
const fileUsers = fs.createWriteStream('./DatabaseData/usersTable.csv');
const fileOwners = fs.createWriteStream('./DatabaseData/ownersTable.csv');
const fileListings = fs.createWriteStream('./DatabaseData/listingsTable.csv');
const fileBookings = fs.createWriteStream('./DatabaseData/bookingsTable.csv');
const fileReviews30 = fs.createWriteStream('./DatabaseData/reviewsTable30M.csv');



const generateUsers = (writer) => {
  let i = 10000000;
  let id = 1;
	const generate = () => {
		let dataB = ``;	
		const name = faker.name.findName();
		const creditNumber = faker.random.number(28884848400783123);
		const address = faker.address.streetAddress();
		dataB+= `${id},${name},${creditNumber},${address} \n`;
		id++;
	  return dataB;
	}	
  const write = () => {
    let ok = true;
    do {
      if (i === 0) {
        let data = generate();
        writer.write(data);
        
      } else {
        let data = generate();
        ok = writer.write(data);
      }
      i--;
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  }
  write();
}

const generateOwners = (writer) => {
  let i = 10000000;
  let id = 1;
  const generate = () => {
    let dataB = ``; 
    const name = faker.name.findName();
    const creditNumber = faker.random.number(28884848400783123);
    const address = faker.address.streetAddress();
    const superhost = faker.random.boolean();
    dataB+= `${id},${name},${creditNumber},${address},${superhost} \n`;

    id++;

    return dataB;
  } 
  const write = () => {
    let ok = true;
    do {
      if (i === 0) {
        let data = generate();
        writer.write(data);
        
      } else {
        let data = generate();
        ok = writer.write(data);
      }
      i--;
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  }
  write();
}

const generateListings = (writer) => {
  let i = 10000000;
  let id = 1;
  const generate = () => {
    let dataB = ``; 
    const ownerID = faker.random.number({min:1, max:10000000});
    const maxGuests = faker.random.number({min:1, max:15});
    const price = faker.random.number({min:50, max:1500});
    const minStay = faker.random.number({min:1, max:7});
    const cleaningFee = faker.random.number(350);
    const areaTax = faker.random.number(150);
    dataB+= `${id},${ownerID},${maxGuests},${price},${minStay},${cleaningFee},${areaTax}  \n`;

    id++;

    return dataB;
  } 
  const write = () => {
    let ok = true;
    do {
      if (i === 0) {
        let data = generate();
        writer.write(data);
        
      } else {

        let data = generate();
        ok = writer.write(data);
      }
      i--;
    } while (i > 0 && ok);
    if (i > 0) {

      writer.once('drain', write);
    }
  }
  write();
}


const generateBookings = (writer) => {
  let i = 30000000;
  let id = 1;
  const generate = () => {
    //Generate date
    Date.prototype.addDays = function(days) {
      var dat = new Date(this.valueOf());
      dat.setDate(dat.getDate() + days);
      return dat;
    }
 
    let dat = new Date();
    let dataB = ``; 
    const daysAdd = faker.random.number({min:1, max:120});
    const stay = faker.random.number({min:1, max:21});
    const startDate = dat.addDays(daysAdd);
    const listingID = faker.random.number({min:1, max:10000000});
    const userID = faker.random.number({min:1, max:10000000});
    const start = JSON.stringify(startDate).slice(0,11);
    const end = JSON.stringify(startDate.addDays(stay)).slice(0,11);;
    dataB+= `${id},${listingID},${userID},${start},${end} \n`;
    id++;

    return dataB;
  } 
  const write = () => {
    let ok = true;
    do {
      if (i === 0) {
        let data = generate();
        writer.write(data);
        
      } else {
        let data = generate();
        ok = writer.write(data);
      }
      i--;
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  }
  write();
}

const generateReviews = (writer) => {
  let i = 20000000;
  let id = 10000001;
  const generate = () => {
    let dataB = ``; 
    const rating = faker.random.number({min:0, max:5});
    const listingID = faker.random.number({min:1, max:10000000});
    dataB+= `${id},${rating},${listingID} \n`;
    id++;

    return dataB;
  } 
  const write = () => {
    let ok = true;
    do {
      if (i === 0) {
        let data = generate();
        writer.write(data);
        
      } else {
        let data = generate();
        ok = writer.write(data);
      }
      i--;
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  }
  write();
}
console.time('10M-elements');
// generateUsers(fileUsers);
// generateOwners(fileOwners);
// generateListings(fileListings);
// generateBookings(fileBookings);
// generateReviews(fileReviews30);

console.timeEnd('10M-elements');

// file.end();