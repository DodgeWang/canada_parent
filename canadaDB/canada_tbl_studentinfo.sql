-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: canada
-- ------------------------------------------------------
-- Server version	5.7.18-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `tbl_studentinfo`
--

DROP TABLE IF EXISTS `tbl_studentinfo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_studentinfo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `surname` varchar(45) NULL,
  `given_name` varchar(45) NULL,
  `student_num` varchar(255) NULL,
  `grade` varchar(255) DEFAULT NULL,
  `gender` enum('boy','girl') DEFAULT NULL,
  `birthday` date DEFAULT NULL,
  `father_last` varchar(45) DEFAULT NULL,
  `father_first` varchar(45) DEFAULT NULL,
  `mother_last` varchar(45) DEFAULT NULL,
  `mother_first` varchar(45) DEFAULT NULL,
  `oen_num` varchar(255) NULL,
  `advisory_group` varchar(60) DEFAULT NULL,
  `p1` varchar(45) DEFAULT NULL,
  `p1_name` varchar(60) DEFAULT NULL,
  `p1_mark` float(5,2) DEFAULT NULL,
  `p1_absence` int(11) DEFAULT NULL,
  `p1_late` int(11) DEFAULT NULL,
  `p2` varchar(45) DEFAULT NULL,
  `p2_name` varchar(60) DEFAULT NULL,
  `p2_mark` float(5,2) DEFAULT NULL,
  `p2_absence` int(11) DEFAULT NULL,
  `p2_late` int(11) DEFAULT NULL,
  `p3` varchar(45) DEFAULT NULL,
  `p3_name` varchar(60) DEFAULT NULL,
  `p3_mark` float(5,2) DEFAULT NULL,
  `p3_absence` int(11) DEFAULT NULL,
  `p3_late` int(11) DEFAULT NULL,
  `accumulated_credit` float(8,2) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_studentinfo`
--

LOCK TABLES `tbl_studentinfo` WRITE;
/*!40000 ALTER TABLE `tbl_studentinfo` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_studentinfo` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-06-15 22:18:47
