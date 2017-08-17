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
  `p1_mark` varchar(120) DEFAULT NULL,
  `p1_absence` varchar(40) DEFAULT NULL,
  `p1_late` varchar(40) DEFAULT NULL,
  `p2` varchar(45) DEFAULT NULL,
  `p2_name` varchar(255) DEFAULT NULL,
  `p2_mark` varchar(120) DEFAULT NULL,
  `p2_absence` varchar(40) DEFAULT NULL,
  `p2_late` varchar(40) DEFAULT NULL,
  `p3` varchar(45) DEFAULT NULL,
  `p3_name` varchar(255) DEFAULT NULL,
  `p3_mark` varchar(120) DEFAULT NULL,
  `p3_absence` varchar(40) DEFAULT NULL,
  `p3_late` varchar(40) DEFAULT NULL,
  `accumulated_credit` float(8,2) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2793 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_studentinfo`
--

LOCK TABLES `tbl_studentinfo` WRITE;
/*!40000 ALTER TABLE `tbl_studentinfo` DISABLE KEYS */;
INSERT INTO `tbl_studentinfo` VALUES (2777,'Guo','Yifu','984','12','Male','23/08/1999','Guo','Wenxiang','Yang','Yanling','395761604','Minnie Group','SPH4Ud','Physics, Grade 12','86','4','0','ICS4Ud','Computer Science, Grade 12','88','2','0','ENG4Uj','English 12, University Prep.','71','3','0',32.00),(2778,'Han','Yuqian','935','12','Female','05/11/1999','Han','Dinghu','Wang','Xia','481939346','Albert Group','ENG4Uf','English 12, University Prep.','73.2','0','0','CGU4Ma','World Geography: Human Patterns and Interactions, Grade 12','91.6','1','0','BBB4Mf','International Business Fundamentals,Grade 12','93','1','0',31.00),(2779,'Hao','Ziyu','766','12','Female','26/09/1999','Hao','Fengguang','Wang','Weiwei','874333586','Eric Group','ENG4Uf','English 12, University Prep.','72.7','0','0','BOH4Me','Business Leadership: Management Fundamentals 12','88.9','2','0','LKMDUe','Mandarin, Grade 12','90','0','0',33.00),(2780,'Guo','Yifu','984','12','Male','23/08/1999','Guo','Wenxiang','Yang','Yanling','395761604','Minnie Group','SPH4Ud','Physics, Grade 12','86','4','0','ICS4Ud','Computer Science, Grade 12','88','2','0','ENG4Uj','English 12, University Prep.','71','3','0',32.00),(2781,'Guan','Yiwen','867','12','Female','23/08/1999','Guan','Zhanshe','Li','Xiang','76642941','Winnie Group','SPH4Ud',NULL,'95','2','0','ENG4Uh',NULL,'80.1','1','0','SCH4Uc',NULL,'96','2','0',31.00),(2782,'Guo','Yifu','984','12','Male','23/08/1999','Guo','Wenxiang','Yang','Yanling','395761604','Minnie Group','SPH4Ud',NULL,'86','4','0','ICS4Ud',NULL,'88','2','0','ENG4Uj',NULL,'71','3','0',32.00),(2783,'Han','Yuqian','935','12','Female','05/11/1999','Han','Dinghu','Wang','Xia','481939346','Albert Group','ENG4Uf',NULL,'73.2','0','0','CGU4Ma',NULL,'91.6','1','0','BBB4Mf',NULL,'93','1','0',31.00),(2784,'Hao','Ziyu','766','12','Female','26/09/1999','Hao','Fengguang','Wang','Weiwei','874333586','Eric Group','ENG4Uf',NULL,'72.7','0','0','BOH4Me',NULL,'88.9','2','0','LKMDUe',NULL,'90','0','0',33.00),(2785,'Guan','Yiwen','867','12','Female','23/08/1999','Guan','Zhanshe','Li','Xiang','76642941','Winnie Group','SPH4Ud',NULL,'95','2','0','ENG4Uh',NULL,'80.1','1','0','SCH4Uc',NULL,'96','2','0',31.00),(2786,'Guo','Yifu','984','12','Male','23/08/1999','Guo','Wenxiang','Yang','Yanling','395761604','Minnie Group','SPH4Ud',NULL,'86','4','0','ICS4Ud',NULL,'88','2','0','ENG4Uj',NULL,'71','3','0',32.00),(2787,'Han','Yuqian','935','12','Female','05/11/1999','Han','Dinghu','Wang','Xia','481939346','Albert Group','ENG4Uf',NULL,'73.2','0','0','CGU4Ma',NULL,'91.6','1','0','BBB4Mf',NULL,'93','1','0',31.00),(2788,'Hao','Ziyu','766','12','Female','26/09/1999','Hao','Fengguang','Wang','Weiwei','874333586','Eric Group','ENG4Uf',NULL,'72.7','0','0','BOH4Me',NULL,'88.9','2','0','LKMDUe',NULL,'90','0','0',33.00),(2789,'Guan','Yiwen','867','12','Female','23/08/1999','Guan','Zhanshe','Li','Xiang','76642941','Winnie Group','SPH4Ud',NULL,'95','2','0','ENG4Uh',NULL,'80.1','1','0','SCH4Uc',NULL,'96','2','0',31.00),(2790,'Guo','Yifu','984','12','Male','23/08/1999','Guo','Wenxiang','Yang','Yanling','395761604','Minnie Group','SPH4Ud',NULL,'86','4','0','ICS4Ud',NULL,'88','2','0','ENG4Uj',NULL,'71','3','0',32.00),(2791,'Han','Yuqian','935','12','Female','05/11/1999','Han','Dinghu','Wang','Xia','481939346','Albert Group','ENG4Uf',NULL,'73.2','0','0','CGU4Ma',NULL,'91.6','1','0','BBB4Mf',NULL,'93','1','0',31.00),(2792,'Hao','Ziyu','766','12','Female','26/09/1999','Hao','Fengguang','Wang','Weiwei','874333586','Eric Group','ENG4Uf',NULL,'72.7','0','0','BOH4Me',NULL,'88.9','2','0','LKMDUe',NULL,'90','0','0',33.00);
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

-- Dump completed on 2017-08-17 16:12:51
