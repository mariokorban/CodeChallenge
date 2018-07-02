import express from 'express';
import mysql from 'mysql';
const router = express.Router();

// router.get('/employees', (req,res) => {
//     res.send( {employees: data.employees });
// });

router.get('/employees', function(req, res, next) {
	connection.query('SELECT * from employee', function (error, results, fields) {
		if (error) throw error;
		res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
	});
});

export default router;