-- WE HAVE a DATABASE 
CREATE DATABASE employees;

-- Connect to our Database
\c employees;

-- Create our Tables that hold our data
CREATE TABLE department(
    id SERIAL PRIMARY KEY,
    name VARCHAR(30) UNIQUE NOT NULL
);


CREATE TABLE role(
    id SERIAL PRIMARY KEY,
    title VARCHAR(30) UNIQUE NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INTEGER NOT NULL,
    CONSTRAINT fk_dept FOREIGN KEY (department_id)
    REFERENCES department(id) ON DELETE CASCADE
);


CREATE TABLE employee(
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(30) UNIQUE NOT NULL,
    last_name VARCHAR(30) UNIQUE NOT NULL,
    role_id INTEGER NOT NULL,
    CONSTRAINT fk_role FOREIGN KEY (role_id)
    REFERENCES role(id) ON DELETE CASCADE,
    manager_id INTEGER,
    CONSTRAINT fk_emp FOREIGN KEY (manager_id)
    REFERENCES employee(id) ON DELETE SET NULL
);