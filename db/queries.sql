-- FIND ALL DEPARTMENTS
"SELECT id, name FROM department;"

-- CREATE NEW DEPARTMENT RECORD
'INSERT INTO department (name) VALUES($1);'


-- FIND ALL ROLES
"SELECT * FROM role;"
"SELECT id, title, salary, department_id FROM role;"


-- FIND ALL ROLES
"SELECT * FROM employee;"
"SELECT id, first_name, last_name, role_id, manager_id FROM employee;"


-- CREATE NEW ROLE RECORD
'INSERT INTO rale (title, salary, department_id) VALUES($1, $2, $3);'