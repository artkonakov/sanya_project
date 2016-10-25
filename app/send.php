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
 
$msg=$_POST['message']; 
 
$headers  = "Content-type: text/html; charset=utf-8 \r\n";
$headers .= "From: Письмо от Колобашкин.ru <from_site@kolobashkin.ru>\r\n";
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
от $name, телефон: $tel", "$msg"); 
 
  
 
// Сохраняем в базу данных 
 
$f = fopen("message.txt", "a+"); 
 
fwrite($f," \n $date $time Сообщение от $name, телефон: $tel"); 
 
fwrite($f,"\n $msg "); 
 
fwrite($f,"\n ---------------"); 
 
fclose($f); 
 
  
 
// Выводим сообщение пользователю 
 
print "<script language='Javascript'><!-- 
function reload() {location = \"$backurl\"}; setTimeout('reload()', 3000); 
//--></script> 
 
$msg 
 
<p>Сообщение отправлено! Наш менеджер с вами свяжется</p>";  
exit; 
 
 } 
 
?>