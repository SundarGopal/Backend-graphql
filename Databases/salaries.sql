USE `HRMIS`;

CREATE TABLE  IF NOT EXISTS `salaries` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `employeeId` INT NOT NULL,
  `monthYear` DATE NOT NULL,
  `basic` FLOAT NOT NULL,
  `hra` FLOAT NOT NULL,
  `lta` FLOAT NOT NULL,
  `variable` FLOAT NOT NULL,
  `bonus` FLOAT NOT NULL,
  `tds` FLOAT NOT NULL,
  `total` FLOAT NOT NULL,
  `workingDaysInMonth` FLOAT NOT NULL,
  `dateOfEntry` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `dateOfModify` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `employeeId_UNIQUE` (`employeeId` ASC));

ALTER TABLE `salaries` 
DROP INDEX `employeeId_UNIQUE` ;

INSERT INTO `salaries` (`id`, `employeeId`, `monthYear`, `basic`, `hra`, `lta`, `variable`, `bonus`, `tds`, `total`, `workingDaysInMonth`) VALUES ('1', '1', '2021-02-01', '18000', '10000', '5000', '10000', '5000', '2000', '46000', '22');
INSERT INTO `salaries` (`id`, `employeeId`, `monthYear`, `basic`, `hra`, `lta`, `variable`, `bonus`, `tds`, `total`, `workingDaysInMonth`) VALUES ('2', '1', '2021-03-01', '18000', '10000', '5000', '10000', '5000', '2000', '46000', '20');
INSERT INTO `salaries` (`id`, `employeeId`, `monthYear`, `basic`, `hra`, `lta`, `variable`, `bonus`, `tds`, `total`, `workingDaysInMonth`) VALUES ('3', '2', '2020-04-01', '16000', '9000', '5000', '9000', '5000', '2000', '42000', '21');
INSERT INTO `salaries` (`id`, `employeeId`, `monthYear`, `basic`, `hra`, `lta`, `variable`, `bonus`, `tds`, `total`, `workingDaysInMonth`) VALUES ('4', '2', '2020-05-01', '16000', '9000', '5000', '9000', '5000', '2000', '42000', '18');
INSERT INTO `salaries` (`id`, `employeeId`, `monthYear`, `basic`, `hra`, `lta`, `variable`, `bonus`, `tds`, `total`, `workingDaysInMonth`) VALUES ('5', '3', '2020-01-01', '20000', '10000', '5000', '10000', '5000', '3000', '47000', '21');
INSERT INTO `salaries` (`id`, `employeeId`, `monthYear`, `basic`, `hra`, `lta`, `variable`, `bonus`, `tds`, `total`, `workingDaysInMonth`) VALUES ('6', '3', '2020-02-01', '20000', '10000', '5000', '10000', '5000', '3000', '47000', '22');
INSERT INTO `salaries` (`id`, `employeeId`, `monthYear`, `basic`, `hra`, `lta`, `variable`, `bonus`, `tds`, `total`, `workingDaysInMonth`) VALUES ('7', '4', '2020-12-01', '15000', '9000', '5000', '9000', '5000', '2000', '41000', '20');
INSERT INTO `salaries` (`id`, `employeeId`, `monthYear`, `basic`, `hra`, `lta`, `variable`, `bonus`, `tds`, `total`,`workingDaysInMonth`) VALUES ('8', '4', '2021-01-01', '15000', '9000', '5000', '9000', '5000', '2000','41000', '20');
