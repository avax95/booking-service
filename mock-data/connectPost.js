const pg = require('pg');
const config  = {
	database: 'booking',
	port: 5432,
}

const pool = new pg.Pool(config);

const queryHandler = function(q) {
	pool.connect((err, client, done) => {
		if(err) {
			console.log('Error connecting to postgres:', err)
		}
		client.query(q, (err, data) => {
			err ? console.log(err) : console.log('query success');
		});
	});
}

module.exports = queryHandler;