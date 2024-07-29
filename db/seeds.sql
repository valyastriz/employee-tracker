/*script to populate the database with initial data for testing*/

-- Insert data into the department table
INSERT INTO department (name) VALUES ('Sales');
INSERT INTO department (name) VALUES ('Engineering');
INSERT INTO department (name) VALUES ('Finance');
INSERT INTO department (name) VALUES ('Human Resources');
INSERT INTO department (name) VALUES ('Marketing');
INSERT INTO department (name) VALUES ('Customer Service');

-- Insert data into the role table
INSERT INTO role (title, salary, department_id) VALUES ('Sales Manager', 80000, 1);
INSERT INTO role (title, salary, department_id) VALUES ('Salesperson', 50000, 1);
INSERT INTO role (title, salary, department_id) VALUES ('Lead Engineer', 100000, 2);
INSERT INTO role (title, salary, department_id) VALUES ('Software Engineer', 80000, 2);
INSERT INTO role (title, salary, department_id) VALUES ('Junior Developer', 60000, 2);
INSERT INTO role (title, salary, department_id) VALUES ('Accountant', 60000, 3);
INSERT INTO role (title, salary, department_id) VALUES ('Financial Analyst', 70000, 3);
INSERT INTO role (title, salary, department_id) VALUES ('HR Manager', 75000, 4);
INSERT INTO role (title, salary, department_id) VALUES ('HR Specialist', 50000, 4);
INSERT INTO role (title, salary, department_id) VALUES ('Marketing Manager', 85000, 5);
INSERT INTO role (title, salary, department_id) VALUES ('Marketing Coordinator', 55000, 5);
INSERT INTO role (title, salary, department_id) VALUES ('Customer Service Manager', 65000, 6);
INSERT INTO role (title, salary, department_id) VALUES ('Customer Service Representative', 40000, 6);

-- Insert data into the employee table
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('John', 'Doe', 1, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Jane', 'Smith', 2, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Michael', 'Brown', 3, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Emily', 'Davis', 4, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Sarah', 'Wilson', 5, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('David', 'Miller', 6, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Laura', 'Johnson', 7, 6);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Daniel', 'Martinez', 8, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Olivia', 'Garcia', 9, 8);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('James', 'Rodriguez', 10, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Sophia', 'Martinez', 11, 10);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Liam', 'Hernandez', 12, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Mia', 'Lopez', 13, 12);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('William', 'Gonzalez', 14, 12);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Evelyn', 'Perez', 4, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Lucas', 'Sanchez', 5, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Isabella', 'Ramirez', 4, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Alexander', 'Torres', 5, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Charlotte', 'Flores', 6, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Mason', 'Gomez', 7, 6);
