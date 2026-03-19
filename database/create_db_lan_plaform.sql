/***********************************************************************************************************************
 * Program name :           create_db_lan_plaform.sql
 * Description :            Database creation script
 * Author :                 Gatien clerc
 * Creation date :          26.02.2026
 * Modified by :            -
 * Modification date :      26.02.2026
 * Version :                0.1
 **********************************************************************************************************************/

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema lan_plaform
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `lan_plaform` ;

-- -----------------------------------------------------
-- Schema lan_plaform
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `lan_plaform` DEFAULT CHARACTER SET utf8 ;
USE `lan_plaform` ;

-- -----------------------------------------------------
-- Table `lan_plaform`.`Roles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lan_plaform`.`Roles` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(15) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `name_UNIQUE` (`name` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `lan_plaform`.`Users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lan_plaform`.`Users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `lastname` VARCHAR(25) NOT NULL,
  `firstname` VARCHAR(25) NOT NULL,
  `pseudo` VARCHAR(25) NOT NULL,
  `birthdate` DATE NOT NULL,
  `passeword` VARCHAR(65) NOT NULL,
  `email` VARCHAR(255) CHARACTER SET 'cp1251' NOT NULL,
  `role_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `pseudo_UNIQUE` (`pseudo` ASC) INVISIBLE,
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE,
  INDEX `fk_Users_Roles_idx` (`role_id` ASC) VISIBLE,
  CONSTRAINT `fk_Users_Roles`
    FOREIGN KEY (`role_id`)
    REFERENCES `lan_plaform`.`Roles` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `lan_plaform`.`LANs`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lan_plaform`.`LANs` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(20) NOT NULL,
  `date` DATE NOT NULL,
  `location` VARCHAR(50) NOT NULL,
  `max_participants` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `name_UNIQUE` (`name` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `lan_plaform`.`Users_take_part_in_LANs`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lan_plaform`.`Users_take_part_in_LANs` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `LAN_id` INT NOT NULL,
  `price` float(5,2) not null,
  PRIMARY KEY (`id`),
  INDEX `fk_Users_take_part_in_LANs_Users1_idx` (`user_id` ASC) VISIBLE,
  INDEX `fk_Users_take_part_in_LANs_LANs1_idx` (`LAN_id` ASC) VISIBLE,
  CONSTRAINT `fk_Users_take_part_in_LANs_Users1`
    FOREIGN KEY (`user_id`)
    REFERENCES `lan_plaform`.`Users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Users_take_part_in_LANs_LANs1`
    FOREIGN KEY (`LAN_id`)
    REFERENCES `lan_plaform`.`LANs` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
