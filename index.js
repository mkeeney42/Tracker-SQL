const { Pool } = require('pg');
const inquirer = require('inquirer');


// Connect to our Database
const pool = new Pool({
        user: 'postgres',
        password: 'test123',
        host: 'localhost',
        database: 'employees'
    }, 
    console.log("Connected to Database...")
);

// make the connection
pool.connect();



// we need to prompt the USER for an ACTION
function promptUser() {
    inquirer.prompt({
        type: 'list',
        name: 'userChoice',
        message: "What would you like to do?",
        choices: [
            "View All Departments",
            "View All Roles",
            "View All Employees",
            "Create New Department",
            "Create New Role",
        ]
    })
    .then(answers => {
        console.log("User choice: ", answers);

        switch(answers.userChoice) {
            case "View All Departments": 
                viewDepartments();
                break;
            case "View All Roles": 
                viewRoles();
                break
            case "View All Employees": 
                viewEmployees();
                break
            case "Create New Department": 
                newDepartment();
                break;
            case "Create New Role": 
                newRole();
                break;
            default: 
                console.log("No operation here");
        }
/*
        if(answers.userChoice == "View All Departments") {
            viewDepartments();
        } else if(answers.userChoice == "Create New Department") {
            newDepartment();
        }
*/
    })
    .catch(err => {
        console.log("err: ", err.message);
    });
}

promptUser();

// WE need to write functions to QUERY OUR DATABASE for the requested data
function viewDepartments() {
    // query our DB for data
    pool.query('SELECT id, name FROM department;', (err, data) => {
        // CHECK we didnt GET and ERROR RESPONSE
        if(err) {
            console.log(err)
            return;
        }
        // WE HAVE A SUCCESS RESPONSE
    //    console.log(data);
        console.table(data.rows);

        // we want to return out the USER CHOICE MENU
        promptUser();
    })
}

function viewRoles() {
    // query our DB for data
    pool.query('SELECT id, title, salary, department_id FROM role;', (err, data) => {
        // CHECK we didnt GET and ERROR RESPONSE
        if(err) {
            console.log(err)
            return;
        }
        // WE HAVE A SUCCESS RESPONSE
    //    console.log(data);
        console.table(data.rows);

        // we want to return out the USER CHOICE MENU
        promptUser();
    })
}

function viewEmployees() {
    // query our DB for data
    pool.query('SELECT id, first_name, last_name, role_id, manager_id FROM employee;', (err, data) => {
        // CHECK we didnt GET and ERROR RESPONSE
        if(err) {
            console.log(err)
            return;
        }
        // WE HAVE A SUCCESS RESPONSE
    //    console.log(data);
        console.table(data.rows);

        // we want to return out the USER CHOICE MENU
        promptUser();
    })
}


function newDepartment() {
    // What Operations do we need to consider(?)
    // --> we need to collect User input | What DATA is needed
    inquirer.prompt({
        type: 'input',
        name: 'dept',
        message: 'What is the name of the new department?'
    })
        .then(answers => {
            console.log("data : ", answers)  // --> { name: ''}

            // query our DB for data
            pool.query('INSERT INTO department (name) VALUES($1);', [answers.dept], (err, data) => {
                // CHECK we didnt GET and ERROR RESPONSE
                if(err) {
                    console.log(err)
                    return;
                }
                // WE HAVE A SUCCESS RESPONSE
            //    console.log(data);
            //    console.table(data.rows);
        
                // we want to return out the USER CHOICE MENU
               // promptUser();

                // WE could call our VIEW ALL DEPAREMENTS FUNCTION
                viewDepartments();
            })
        })
        .catch(err => {
            console.log(err.message);
            return;
        });

}


function newRole() {
    // What Operations do we need to consider(?)
    // --> we need to collect User input | What DATA is needed
    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of the new role?'
        },
        {
            type: 'input',
            name: 'salary',
            message: 'What is the salary of the new role?'
        },
        {
            type: 'input',
            name: 'department',
            message: 'What is the department id of the new role?'
        },
    ])
        .then(answers => {
            console.log("data : ", answers)  // --> { name: ''}
            console.log("Salary : ", parseFloat(answers.salary))  // --> { name: ''}
            console.log("type : ", typeof parseFloat(answers.salary))  // --> { name: ''}
            const { title, salary, department} = answers;  // we can DECONSTRUCT the input data

            // query our DB for data
            pool.query('INSERT INTO role (title, salary, department_id) VALUES($1, $2, $3);', [answers.title, parseFloat(answers.salary), answers.department], (err, data) => {
                // CHECK we didnt GET and ERROR RESPONSE
                if(err) {
                    console.log(err)
                    return;
                }
                // WE HAVE A SUCCESS RESPONSE
                console.log(data);
                console.table(data.rows);
        
                // we want to return out the USER CHOICE MENU
               // promptUser();

                // WE could call our VIEW ALL DEPAREMENTS FUNCTION
                viewRoles();
            })
        })
        .catch(err => {
            console.log(err.message);
            return;
        });
}