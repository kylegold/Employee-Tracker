DROP DATABASE IF EXISTS employeetracker_db;

CREATE DATABASE employeetracker_db;

USE employeetracker_db;

CREATE TABLE Department (
    departmentId INT NOT NULL AUTO_INCREMENT,
    departmentName VARCHAR(30),
    PRIMARY KEY(departmentId)
);

SELECT * FROM Department;

INSERT INTO Department(departmentName) VALUES ("Sales");

CREATE TABLE Role (
    roleId INT NOT NULL AUTO_INCREMENT,
    roleTitle VARCHAR(30),
    salary DECIMAL(11,2),
    departmentId INT,
    PRIMARY KEY (roleId)
);

DROP TABLE Role;

SELECT * FROM Role;

AlTER TABLE Role
ADD FOREIGN KEY (departmentId) REFERENCES Department(departmentId);

CREATE TABLE Employee (
    employeeId INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    managerId INT,
    roleId INT,
    PRIMARY KEY (employeeId)
);

SELECT * FROM Employee;

ALTER TABLE Employee
ADD FOREIGN KEY (managerId) REFERENCES Employee(employeeId);

ALTER TABLE Employee
ADD FOREIGN KEY (roleId) REFERENCES Role(roleId);