<?php
 $name=$_POST['name'];
 $email=$_POST['email'];
 $phonenb=$_POST['phone'];
 $city=$_POST['cityname'];
 $zipcode=$_POST['zipcode'];
$selectedservices=$_POST['services'];
$msg="";
$msg=$msg."Name: ".$name."<br>";
$msg=$msg."PhoneNumber: ".$phonenb."<br>";
$msg=$msg."Client Email: ".$email."<br>";
$msg=$msg."CityName: ".$city."<br>";
$msg=$msg."ZipCode: ".$zipcode."<br>";
$msg=$msg."Service Needed: ".$selectedservices."<br>";
$to="talakhatib4@gmail.com";
$subject="quotation";
$headers="From:".$email. "\r\n";
//mail($to,$subject,$msg,$headers);
// header('location:index.php');
//echo $msg;
 ?>
