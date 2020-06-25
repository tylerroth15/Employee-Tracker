id,first_name,last_name,title,department,salary,manager
1,John,Doe,Sales Lead,Sales,100000,Ashley Rodriquez
2,Mike,Chan,Salesperson,Sales,80000,John Doe
3,Ashley,Rodriquez,Lead Engineer,Engineering,150000,null
4,Kevin ,Tupik,Software Engineer,Engineering,120000,Ashley Rodriquez
5,Malia ,Brown,Accountant,Finance ,125000,null
6,Sarah ,Lourd,Legal Team Lead,Legal,250000,null
7,Tom ,Allen,Lawyer,Legal,190000,Sarah Lourd

USE employee_db;

INSERT INTO department VALUES (1, "Finance");
INSERT INTO department VALUES (2, "Engineering");
INSERT INTO department VALUES (3, "Legal");
INSERT INTO department VALUES (4, "Sales");

INSERT INTO role VALUES (1, "Sales Lead", 100000, 4);
INSERT INTO role VALUES (2, "Salesperson", 80000, 4);
INSERT INTO role VALUES (3, "Lead Engineer", 150000, 2);
INSERT INTO role VALUES (4, "Software Engineer", 120000, 2);
INSERT INTO role VALUES (5, "Accountant", 125000, 1);
INSERT INTO role VALUES (6, "Legal Team Lead", 250000, 3);
INSERT INTO role VALUES (7, "Lawyer", 190000, 3);

INSERT INTO employee VALUES (1, "John", "Doe", 1, 3);
INSERT INTO employee VALUES (2, "Mike", "Chan", 2, 1);
INSERT INTO employee VALUES (3, "Ashley", "Rodriquez", 3, NULL);
INSERT INTO employee VALUES (4, "Kevin", "Tupik", 4, 3);
INSERT INTO employee VALUES (5, "Malia", "Brown", 5, NULL);
INSERT INTO employee VALUES (6, "Sarah", "Lourd", 5, NULL);
INSERT INTO employee VALUES (7, "Tom", "Allen", 7, 6);




