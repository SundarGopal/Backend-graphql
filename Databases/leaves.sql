USE HRMIS;

CREATE TABLE IF NOT EXISTS `leaves` (
  `id` INT NOT NULL,
  `employeeId` INT NOT NULL,
  `startDate` DATE NOT NULL,
  `endDate` DATE NOT NULL,
  `count` INT NOT NULL,
  `year` INT NOT NULL,
  `dateOfEntry` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `dateOfModify` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`));


INSERT INTO `leaves` (`id`, `employeeId`, `startDate`, `endDate`, `count`, `year`) VALUES ('1', '1', '2020-02-03', '2020-02-05', '3', '2021');
INSERT INTO `leaves` (`id`, `employeeId`, `startDate`, `endDate`, `count`, `year`) VALUES ('2', '2', '2020-04-04', '2020-04-07', '4', '2020');
INSERT INTO `leaves` (`id`, `employeeId`, `startDate`, `endDate`, `count`, `year`) VALUES ('3', '3', '2020-07-01', '2020-07-04', '4', '2020');
INSERT INTO `leaves` (`id`, `employeeId`, `startDate`, `endDate`, `count`, `year`) VALUES ('4', '3', '2020-08-06', '2020-08-07', '2', '2020');
INSERT INTO `leaves` (`id`, `employeeId`, `startDate`, `endDate`, `count`, `year`) VALUES ('5', '2', '2020-09-16', '2020-09-17', '2', '2020');

