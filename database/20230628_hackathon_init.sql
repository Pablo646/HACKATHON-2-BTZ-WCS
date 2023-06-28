-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema emmaus_connect
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema emmaus_connect
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `emmaus_connect` DEFAULT CHARACTER SET utf8 ;
USE `emmaus_connect` ;

-- -----------------------------------------------------
-- Table `emmaus_connect`.`phones`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `emmaus_connect`.`phones` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `estimation_date` DATETIME NOT NULL,
  `brand` VARCHAR(150) NOT NULL,
  `model` VARCHAR(150) NOT NULL,
  `phone_year` DATE NOT NULL,
  `stockage` INT NOT NULL,
  `memory_ram` INT NOT NULL,
  `isblocked` TINYINT NOT NULL,
  `screen_size` DECIMAL(2,1) NOT NULL,
  `pohne_status` VARCHAR(65) NOT NULL,
  `estimation_price` DECIMAL(4,2) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `emmaus_connect`.`emmaus`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `emmaus_connect`.`emmaus` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `city` VARCHAR(155) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `emmaus_connect`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `emmaus_connect`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NOT NULL,
  `password` VARCHAR(150) NOT NULL,
  `role` VARCHAR(45) NOT NULL,
  `emmaus_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_users_emmaus_idx` (`emmaus_id` ASC) VISIBLE,
  CONSTRAINT `fk_users_emmaus`
    FOREIGN KEY (`emmaus_id`)
    REFERENCES `emmaus_connect`.`emmaus` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `emmaus_connect`.`users_has_phones`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `emmaus_connect`.`users_has_phones` (
  `users_id` INT NOT NULL,
  `phones_id` INT NOT NULL,
  PRIMARY KEY (`users_id`, `phones_id`),
  INDEX `fk_users_has_phones_phones1_idx` (`phones_id` ASC) VISIBLE,
  INDEX `fk_users_has_phones_users1_idx` (`users_id` ASC) VISIBLE,
  CONSTRAINT `fk_users_has_phones_users1`
    FOREIGN KEY (`users_id`)
    REFERENCES `emmaus_connect`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_users_has_phones_phones1`
    FOREIGN KEY (`phones_id`)
    REFERENCES `emmaus_connect`.`phones` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `emmaus_connect`.`room`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `emmaus_connect`.`room` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `emmaus_connect`.`message`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `emmaus_connect`.`message` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `content` TEXT(255) NOT NULL,
  `date` DATETIME NOT NULL,
  `room_id` INT NOT NULL,
  PRIMARY KEY (`id`, `room_id`),
  INDEX `fk_message_room1_idx` (`room_id` ASC) VISIBLE,
  CONSTRAINT `fk_message_room1`
    FOREIGN KEY (`room_id`)
    REFERENCES `emmaus_connect`.`room` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `emmaus_connect`.`users_has_message`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `emmaus_connect`.`users_has_message` (
  `users_id` INT NOT NULL,
  `message_id` INT NOT NULL,
  PRIMARY KEY (`users_id`, `message_id`),
  INDEX `fk_users_has_message_message1_idx` (`message_id` ASC) VISIBLE,
  INDEX `fk_users_has_message_users1_idx` (`users_id` ASC) VISIBLE,
  CONSTRAINT `fk_users_has_message_users1`
    FOREIGN KEY (`users_id`)
    REFERENCES `emmaus_connect`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_users_has_message_message1`
    FOREIGN KEY (`message_id`)
    REFERENCES `emmaus_connect`.`message` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
