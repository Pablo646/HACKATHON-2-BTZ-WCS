-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema emmaus_connect
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Table `phones`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `phones`;
CREATE TABLE IF NOT EXISTS `phones` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `brand` VARCHAR(150) NOT NULL,
  `model` VARCHAR(150) NOT NULL,
  `phone_year` YEAR NOT NULL,
  `storage` INT NOT NULL,
  `memory_ram` INT NOT NULL,
  `is_blocked` TINYINT NOT NULL,
  `screen_size` DECIMAL(2,1) NOT NULL,
  `phone_status` VARCHAR(65) NOT NULL,
  `antutu_score` VARCHAR(150) NOT NULL,
  `estimation_price` DECIMAL(4,2),
  PRIMARY KEY (`id`)
) ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `emmaus`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `emmaus` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `city` VARCHAR(155) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NOT NULL,
  `password` VARCHAR(150) NOT NULL,
  `role` VARCHAR(45) NOT NULL,
  `emmaus_id` INT NULL DEFAULT 1,
  PRIMARY KEY (`id`),
  INDEX `fk_users_emmaus_idx` (`emmaus_id` ASC) VISIBLE,
  CONSTRAINT `fk_users_emmaus`
    FOREIGN KEY (`emmaus_id`)
    REFERENCES `emmaus` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `users_has_phones`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `users_has_phones` (
  `users_id` INT NOT NULL,
  `phones_id` INT NOT NULL,
  PRIMARY KEY (`users_id`, `phones_id`),
  INDEX `fk_users_has_phones_phones1_idx` (`phones_id` ASC) VISIBLE,
  INDEX `fk_users_has_phones_users1_idx` (`users_id` ASC) VISIBLE,
  CONSTRAINT `fk_users_has_phones_users1`
    FOREIGN KEY (`users_id`)
    REFERENCES `users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_users_has_phones_phones1`
    FOREIGN KEY (`phones_id`)
    REFERENCES `phones` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `room`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `room` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `message`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `message` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `content` TEXT(255) NOT NULL,
  `date` DATETIME NOT NULL,
  `room_id` INT NOT NULL,
  PRIMARY KEY (`id`, `room_id`),
  INDEX `fk_message_room1_idx` (`room_id` ASC) VISIBLE,
  CONSTRAINT `fk_message_room1`
    FOREIGN KEY (`room_id`)
    REFERENCES `room` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `users_has_message`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `users_has_message` (
  `users_id` INT NOT NULL,
  `message_id` INT NOT NULL,
  PRIMARY KEY (`users_id`, `message_id`),
  INDEX `fk_users_has_message_message1_idx` (`message_id` ASC) VISIBLE,
  INDEX `fk_users_has_message_users1_idx` (`users_id` ASC) VISIBLE,
  CONSTRAINT `fk_users_has_message_users1`
    FOREIGN KEY (`users_id`)
    REFERENCES `users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_users_has_message_message1`
    FOREIGN KEY (`message_id`)
    REFERENCES `message` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
