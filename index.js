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
    start();
});

function start(){
        inquirer.prompt({
        type: "list", 
        choices: [
            "Add Department",
            "Add Role",
            "Add Employee",
            "View Department",
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
                    addEmployee();
                    break; 
                case "View Department":
                    viewDepartment();
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
        
    };



//add Department Function
function addDepartment(){

    inquirer.prompt({

        type: "input",
        message: "What is the name of the department?",
        name: "deptName"
    }).then(function(answer){

        connection.query("INSERT INTO department (name) VALUES (?) ", [answer.deptName], function (err,res){
            if (err) throw (err);
            console.table(res)
            start();
            
        }
        )
    })
};

//add role function 
function addRole() {
    inquirer.prompt([
        {
            type: "list",
            choices: [
                "Engineer",
                "Finance",
                "Legal",
                "Sales"
            ],
            message: "Please select your role?", 
            name: "addRoleTitle"
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
        connection.query("insert into role (title ,salary ,department_id) values (?,?,?)", [answer.addRoleTitle, answer.salaryTot, answer.deptID], function( err, res){
            if (err) throw (err);
            console.table(answer);
            start();
        }
        )
    })
};

//add employee function
function addEmployee(){
    inquirer.prompt([
        {
            type: "input",
            message: "What is the Employee's First Name?",
            name: "employeeFirstName"
        },
        {
            type: "input",
            message: "What is the Employee's Last Name?",
            name: "employeeLastName"
        },
        {
            type: "input",
            message: "What is the Employee's Role ID Number?",
            name: "roleID"
        },
        {
            type: "input",
            message: "What is the Employee Manager's ID Number?",
            name: "managerID"
        }
    ])
    .then(function(answer){

        connection.query("INSERT INTO employee (firstname, lastname, role_id, manager_id) VALUES (?,?,?,?)", [answer.employeeFirstName, answer.employeeLastName, answer.roleID, answer.managerID], function (err, res){
            if (err) throw err;
            console.table(res);
            start();
        })
    })
}
//update employee function 
function updateEmployee(){
    inquirer.prompt([
        {
            type:"Input",
            message: "Which employee would you like to update?",
            name: "empUpdate"
        },
        {
           type: "input",
            message: "What would you the Employee Role ID to be updated to?",
            name: "updateRole"
        }
    ]).then(function(answer){
        connection.query("UPDATE employee SET firstname=? WHERE role_id =?", [answer.empUpdate,answer.updateRole], function(err, res){
            if (err) throw err;
            console.table(res);
            start();
        })
    })
}

function viewDepartment() {
    let query ="SELECT * FROM department";
    connection.query(query, function(err,res){
        if (err) throw err;
        console.table(res);
        start();
    })
}

function viewEmployees() {
    let query ="SELECT * FROM employee";
    connection.query(query, function(err,res){
        if (err) throw err;
        console.table(res);
        start();
    })
}

function viewRoles() {
    let query ="SELECT * FROM role";
    connection.query(query, function(err,res){
        if (err) throw err;
        console.table(res);
        start();
    })
}

function quit(){
    connection.end();
    process.exit();
};