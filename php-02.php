<?php
//contact us section
$name=$_POST['cname'];
$email=$_POST['cemail'];
$phonenb=$_POST['cphone'];
$city=$_POST['ccity'];
$message_from_customer=$_POST['messagetext'];
$msg="";
$msg=$msg."Name: ".$name."<br>";
$msg=$msg."PhoneNumber: ".$phonenb."<br>";
$msg=$msg."Customer Email: ".$email."<br>";
$msg=$msg."City: ".$city."<br>";
$msg=$msg."Message Sended By Client: ".$message_from_customer."<br>";
$to="talakhatib4@gmail.com";
$subject="quotation";
$headers="From:".$email. "\r\n";
//mail($to,$subject,$msg,$headers);
echo $msg;
 ?>
