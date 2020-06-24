var mysql = require("mysql");
var inquirer = require('inquirer');
const { response } = require("express");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "rootroot",
  database: "employee_db"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n"); 
    createProduct();
    });

    connection.connect(function (err){
        console.log("Connected as id: "+ connection.threadID);
    });
var start = function(){
        inquirer.prompt({
        type: "list", 
        choices: [
            "Add Department",
            "Add Role",
            "Add Employee",
            "View Departments",
            "View Roles", 
            "View Employees",
            "Update Employee Role", 
            "Quit"
        ],
        message: "What would you like to do?",
        name: "option"
        })
        .then(function(result){
            console.log("You have entered: " + result.option);

            switch (result.option){
                case "Add Department":
                    addDepartment();
                    break;
                case "Add Role":
                    addRole();
                    break;
                case "Add Employee":
                    break; 
                    addEmployee();
                case "View Departments":
                    viewDepartments();
                    break;
                case "View Roles":
                    viewRoles();
                    break;
                case "View Employees":
                    viewEmployees();
                    break;
                case "Update Employee Role":
                    updateEmployee();
                    break;
                    default:
                    quit();
                    
            }
        });
        
    }

function addDepartment(){

    inquirer.prompt({

        type: "input",
        message: "What is the name of the department?",
        name: "deptName"
    }).then(function(answer){

        //this still needs works
        connection.query("Insert into Department (name) VALUES ? "), [answer.deptName], function (err, res){
            if (err) throw (err);
            
        }
    })
}

function addRole() {
    inquirer.prompt([
        {
            type: "List",
            message: "Please select your role?", 
            choices: [
                "Engineer",
                "Finance",
                "Legal",
                "Sales"
            ],
        },
        {
            type: "input",
            message: "What is the salary for this role?",
            name: "salaryTot"
        },
        {
            type: "input",
            message: "Please list the department ID Number.",
            name: "deptID"
        }
    ]).then(function(answer){

        //connection.query("insert into role (x,y,z) values ???")
    })
}
//Variables Here, class and constructors: department, employee, manager


//inquirer start "What do you want to do?"

//inquirer CRUD

//DB CRUD

//seperate files for employee.js, manager.js, and DB CRUD.js

//seed.sql