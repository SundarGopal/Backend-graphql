CREATE SCHEMA `HRMIS`;

CREATE TABLE `employee` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `address` varchar(45) NOT NULL,
  `dateOfBirth` date NOT NULL,
  `dateOfJoining` date NOT NULL,
  `education` varchar(45) NOT NULL,
  `type` varchar(45) NOT NULL,
  `role` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `dateOfEntry` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `dateOfModify` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1