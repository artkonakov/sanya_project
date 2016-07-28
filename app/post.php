<?
// ----------------------------конфигурация-------------------------- //

$adminemail="info@kolobashkin.ru";  // e-mail админа


$date=date("d.m.y"); // число.месяц.год

$time=date("H:i"); // часы:минуты:секунды

$backurl="http://kolobashkin.ru/";  // На какую страничку переходит после отправки письма

//---------------------------------------------------------------------- //



// Принимаем данные с формы

$name=$_POST['name'];

$email=$_POST['email'];

$tel=$_POST['tel'];

$msg0=$_POST['message_0'];
$msg1=$_POST['message_1'];
$msg2=$_POST['message_2'];
$msg3=$_POST['message_3'];
$msg4=$_POST['message_4'];
$msg5=$_POST['message_5'];
$msg6=$_POST['message_6'];
$msg7=$_POST['message_7'];
$msg8=$_POST['message_8'];
$msg9=$_POST['message_9'];

$msg=$msg0.$msg1.$msg2.$msg3.$msg4.$msg5.$msg6.$msg7.$msg8.$msg9;

$headers  = "Content-type: text/html; charset=utf-8 \r\n";
$headers .= "From: Письмо с Колобашкин.ru <from_site@kolobashkin.ru>\r\n";
$headers .= "Reply-To: info@kolobashkin.ru\r\n";



// Проверяем валидность e-mail

if (!preg_match("|^([a-z0-9_\.\-]{1,20})@([a-z0-9\.\-]{1,20})\.([a-z]{2,4})|is",
strtolower($email)))

 {

  echo
"<center>Вернитесь <a
href='javascript:history.back(1)'><B>назад</B></a>. Вы
указали неверные данные!";

  }

 else

 {


$msg="Имя: $name

E-mail: $email

Телефон: $tel

Сообщение: $msg";



 // Отправляем письмо админу

mail("$adminemail", "$date $time Сообщение
от $name, телефон: $tel", "$msg", $headers);



// Сохраняем в базу данных

$f = fopen("message.txt", "a+");

fwrite($f," \n $date $time Сообщение от $name, телефон: $tel");

fwrite($f,"\n $msg ");

fwrite($f,"\n ---------------");

fclose($f);



// Выводим сообщение пользователю

print "<script language='Javascript'><!--
function reload() {location = \"$backurl\"}; setTimeout('reload()', 12000);
--></script>

$msg

<p>Сообщение отправлено! Подождите, сейчас вы будете перенаправлены на главную страницу...</p>";
exit;

}

?>
