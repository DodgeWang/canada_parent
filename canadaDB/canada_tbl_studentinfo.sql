-- MySQL dump 10.13  Distrib 5.7.17, for macos10.12 (x86_64)
--
-- Host: 127.0.0.1    Database: canada
-- ------------------------------------------------------
-- Server version	5.7.18

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
  `surname` varchar(45) DEFAULT NULL,
  `given_name` varchar(45) DEFAULT NULL,
  `student_num` varchar(255) DEFAULT NULL,
  `grade` varchar(255) DEFAULT NULL,
  `gender` varchar(50) DEFAULT NULL,
  `birthday` varchar(100) DEFAULT NULL,
  `father_last` varchar(45) DEFAULT NULL,
  `father_first` varchar(45) DEFAULT NULL,
  `mother_last` varchar(45) DEFAULT NULL,
  `mother_first` varchar(45) DEFAULT NULL,
  `oen_num` varchar(255) DEFAULT NULL,
  `advisory_group` varchar(60) DEFAULT NULL,
  `p1` varchar(45) DEFAULT NULL,
  `p1_name` varchar(255) DEFAULT NULL,
  `p1_mark` float(5,2) DEFAULT NULL,
  `p1_absence` int(11) DEFAULT NULL,
  `p1_late` int(11) DEFAULT NULL,
  `p2` varchar(45) DEFAULT NULL,
  `p2_name` varchar(255) DEFAULT NULL,
  `p2_mark` float(5,2) DEFAULT NULL,
  `p2_absence` int(11) DEFAULT NULL,
  `p2_late` int(11) DEFAULT NULL,
  `p3` varchar(45) DEFAULT NULL,
  `p3_name` varchar(255) DEFAULT NULL,
  `p3_mark` float(5,2) DEFAULT NULL,
  `p3_absence` int(11) DEFAULT NULL,
  `p3_late` int(11) DEFAULT NULL,
  `accumulated_credit` float(8,2) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2123 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_studentinfo`
--

LOCK TABLES `tbl_studentinfo` WRITE;
/*!40000 ALTER TABLE `tbl_studentinfo` DISABLE KEYS */;
INSERT INTO `tbl_studentinfo` VALUES (8,'Wang','ZiLin','000001','幼儿园小班','boy','2017-02-22','Wang','DaiQiang','Pan','ZhangPin','201702225016','Albert Gro','001','语文课',99.00,2,3,'002','数学课',96.50,0,1,'003','英语课',100.00,1,2,50.00),(2107,'An','Yinuo','0','11','Female','13/03/2000',NULL,NULL,NULL,NULL,'0','Albert Group',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0.00),(2108,'Bai','Xindi','904','12','Female','23/05/1999','Bai','Congbo','Qiu','Wenhong','598993756','Victoria Group',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,30.00),(2109,'Bai','Xuesong','1013','12','Male','06/11/1997','Bai','Feng','Ji','Guojing','713587723','Albert Group',NULL,NULL,NULL,NULL,NULL,'ENG2Dj','English, Grade 10',14.20,8,3,NULL,NULL,NULL,NULL,NULL,24.00),(2110,'Bao','Tianheng','1006','12','Female','05/02/1998','Bao','Xiaodong','Li','Li','926382839','Albert Group','ENG4Uf','English 12, University Prep.',71.10,0,0,'SCH4Ub','Chemistry, Grade 12',93.20,1,0,'LKMDUd','Mandarin, Grade 12',91.00,1,10,90.00),(2111,'An','Yinuo','0','11','Female','13/03/2000',NULL,NULL,NULL,NULL,'0','Albert Group',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0.00),(2112,'Bai','Xindi','904','12','Female','23/05/1999','Bai','Congbo','Qiu','Wenhong','598993756','Victoria Group',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,30.00),(2113,'Bai','Xuesong','1013','12','Male','06/11/1997','Bai','Feng','Ji','Guojing','713587723','Albert Group',NULL,NULL,NULL,NULL,NULL,'ENG2Dj','English, Grade 10',14.20,8,3,NULL,NULL,NULL,NULL,NULL,24.00),(2114,'Bao','Tianheng','1006','12','Male','05/10/1998','Bao','Xiaodong','Li','Li','926382839','Albert Group','e1','ceshiceshi',71.10,NULL,0,'e2','heheh',93.20,1,0,'e3','cese3',91.00,1,10,80.00),(2115,'An','Yinuo','0','11','Female','13/03/2000',NULL,NULL,NULL,NULL,'0','Albert Group',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0.00),(2116,'Bai','Xindi','904','12','Female','23/05/1999','Bai','Congbo','Qiu','Wenhong','598993756','Victoria Group',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,30.00),(2117,'Bai','Xuesong','1013','12','Male','06/11/1997','Bai','Feng','Ji','Guojing','713587723','Albert Group',NULL,NULL,NULL,NULL,NULL,'ENG2Dj','English, Grade 10',14.20,8,3,NULL,NULL,NULL,NULL,NULL,24.00),(2118,'Bao','Tianheng','1006','12','Male','05/10/1998','Bao','Xiaodong','Li','Li','926382839','Albert Group','ENG4Uf','English 12, University Prep.',71.10,0,0,'SCH4Ub','Chemistry, Grade 12',93.20,1,0,'LKMDUd','Mandarin, Grade 12',91.00,1,10,80.00),(2119,'An','Yinuo','0','11','Female','13/03/2000',NULL,NULL,NULL,NULL,'0','Albert Group',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0.00),(2120,'Bai','Haha','904','12','Female','23/05/1999','Bai','Congbo','Qiu','Wenhong','598993756','Victoria Group',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,30.00),(2121,'Bai','Xuesong','1013','12','Male','06/11/1997','Bai','Feng','Ji','Guojing','713587723','Albert Group',NULL,NULL,NULL,NULL,NULL,'ENG2Dj','English, Grade 10',14.20,8,3,NULL,NULL,NULL,NULL,NULL,24.00),(2122,'Bao','Tianheng','1006','12','Male','05/10/1998','Bao','Xiaodong','Li','Li','926382839','Albert Group','ENG4Uf','English 12, University Prep.',71.10,0,0,'SCH4Ub','Chemistry, Grade 12',93.20,1,0,'LKMDUd','Mandarin, Grade 12',91.00,1,10,80.00);
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

-- Dump completed on 2017-07-11 17:56:46
