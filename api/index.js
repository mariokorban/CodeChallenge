import express from 'express';
import mysql from 'mysql';
const router = express.Router();

// router.get('/employees', (req,res) => {
//     res.send( {employees: data.employees });
// });

//api call for all the employees
router.get('/allEmployees', function(req, res, next) {
	connection.query('SELECT * from employee,department,location,job_title where department.department_id = employee.department and location.location_id = employee.location and job_title.job_title_id = employee.job_title ', function (error, results, fields) {
		if (error) throw error;
		res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
	});
});


//api call for the employees with specific names
router.get('/nameEmployees/:name', function(req, res, next) {
	connection.query("SELECT * from employee,department,location,job_title where department.department_id = employee.department and location.location_id = employee.location and job_title.job_title_id = employee.job_title and `firstname` like '%"+req.params.name+"%' or `lastname` like '%"+req.params.name+"%'", function (error, results, fields) {
		if (error) throw error;
		res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
	});
});


//get department names
router.get('/getDepartments', function(req, res, next) {
	connection.query("SELECT department_name from department", function (error, results, fields) {
		if (error) throw error;
		res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
	});
});


//get locations
router.get('/getLocations', function(req, res, next) {
	connection.query("SELECT location_name from location", function (error, results, fields) {
		if (error) throw error;
		res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
	});
});


//get job titles
router.get('/getJobTitles', function(req, res, next) {
	connection.query("SELECT job_title from job_title", function (error, results, fields) {
		if (error) throw error;
		res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
	});
});





//api call for the employees with specific departments
router.get('/departmentEmployees/:dep', function(req, res, next) {
	connection.query("SELECT * from employee,department,location,job_title where department.department_name like '%"+req.params.dep+"%' and department.department_id = employee.department and location.location_id = employee.location and job_title.job_title_id = employee.job_title", function (error, results, fields) {
		if (error) throw error;
		res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
	});
});


//api call for the employees with specific location
router.get('/locationEmployees/:loc', function(req, res, next) {
	connection.query("SELECT * from employee,location,department,job_title where location.location_name like '%"+req.params.loc+"%' and department.department_id = employee.department and location.location_id = employee.location and job_title.job_title_id = employee.job_title", function (error, results, fields) {
		if (error) throw error;
		res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
	});
});

//api call for the employees with specific job title
router.get('/jobTitleEmployees/:jt', function(req, res, next) {
	connection.query("SELECT * from employee,department,location,job_title where job_title.job_title like '%"+req.params.jt+"%' and department.department_id = employee.department and location.location_id = employee.location and job_title.job_title_id = employee.job_title", function (error, results, fields) {
		if (error) throw error;
		res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
	});
});


//remove employee (delete)
router.get('/removeEmployee/:id', function(req, res, next) {
	connection.query('DELETE from employee where id ='+req.params.id, function (error, results, fields) {
		if (error) throw error;
		res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
	});
});
export default router;