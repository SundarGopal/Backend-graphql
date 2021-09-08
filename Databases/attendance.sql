USE HRMIS;

CREATE TABLE `HRMIS`.`attendance` (
  `id` INT NOT NULL,
  `employeeId` INT NOT NULL,
  `date` DATE NOT NULL,
  `inTimeDate` DATETIME NOT NULL,
  `outTime` DATETIME NOT NULL,
  `totalHours` INT NOT NULL,
  PRIMARY KEY (`id`));


ALTER TABLE `HRMIS`.`attendance` 
CHANGE COLUMN `inTimeDate` `inTimeDate` VARCHAR(45) NOT NULL ,
CHANGE COLUMN `outTime` `outTime` VARCHAR(45) NOT NULL ;


INSERT INTO `HRMIS`.`attendance` (`id`, `employeeId`, `date`, `inTimeDate`, `outTime`, `totalHours`) VALUES ('1', '1', '2021-01-02', '09:00', '16:00', '7');
INSERT INTO `HRMIS`.`attendance` (`id`, `employeeId`, `date`, `inTimeDate`, `outTime`, `totalHours`) VALUES ('2', '1', '2021-01-03', '09:00', '16:00', '7');
INSERT INTO `HRMIS`.`attendance` (`id`, `employeeId`, `date`, `inTimeDate`, `outTime`, `totalHours`) VALUES ('3', '1', '2021-01-04', '10:00', '17:00', '7');
INSERT INTO `HRMIS`.`attendance` (`id`, `employeeId`, `date`, `inTimeDate`, `outTime`, `totalHours`) VALUES ('4', '2', '2020-04-01', '08:30', '16:30', '8');
INSERT INTO `HRMIS`.`attendance` (`id`, `employeeId`, `date`, `inTimeDate`, `outTime`, `totalHours`) VALUES ('5', '2', '2020-04-02', '08:30', '16:30', '8');
INSERT INTO `HRMIS`.`attendance` (`id`, `employeeId`, `date`, `inTimeDate`, `outTime`, `totalHours`) VALUES ('6', '3', '2020-06-01', '09:00', '17:00', '8');
INSERT INTO `HRMIS`.`attendance` (`id`, `employeeId`, `date`, `inTimeDate`, `outTime`, `totalHours`) VALUES ('7', '3', '2020-06-02', '10:00', '17:00', '7');
INSERT INTO `HRMIS`.`attendance` (`id`, `employeeId`, `date`, `inTimeDate`, `outTime`, `totalHours`) VALUES ('8', '3', '2020-06-02', '10:00', '16:00', '6');
INSERT INTO `HRMIS`.`attendance` (`id`, `employeeId`, `date`, `inTimeDate`, `outTime`, `totalHours`) VALUES ('9', '4', '2020-12-13', '08:00', '15:00', '7');
INSERT INTO `HRMIS`.`attendance` (`id`, `employeeId`, `date`, `inTimeDate`, `outTime`, `totalHours`) VALUES ('10', '4', '2020-12-14', '09:00', '16:00', '7');

