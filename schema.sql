DROP DATABASE IF EXISTS employeetracker_db;

CREATE DATABASE employeetracker_db;

USE employeetracker_db;

CREATE TABLE Department (
    departmentId INT NOT NULL AUTO_INCREMENT,
    departmentName VARCHAR(30),
    PRIMARY KEY(departmentId)
);

CREATE TABLE Role (
    roleId INT NOT NULL AUTO_INCREMENT,
    roleTitle VARCHAR(30),
    salary DECIMAL(11,2),
    PRIMARY KEY (roleId),
    FOREIGN KEY (departmentId) REFERENCES department(departmentId)
);

CREATE TABLE Employee (
    employeeId INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
);

UPDATE TABLE Employee
SET FOREIGN KEY (managerId) REFERENCES Employee(employeeId);