const { exec } = require('child_process');
const db = require('./connectPost.js');


const test = `INSERT INTO test VALUES (1, 'name')`;

const execTest = `mongoimport --db booking --collection test --type csv --headerline --file '/Users/aigerimzholmurzayeva/Desktop/HRSF95/SDC/booking-service/mock-data/DatabaseData/test.csv'`
// db(tes);

exec(execTest, (err, stdout, stderr) => {
	if(err) {
		console.log('Error exec:', err); 
		return;
	}
	console.log('stdout:', stdout);
	console.log('stderr:', stderr);
})


