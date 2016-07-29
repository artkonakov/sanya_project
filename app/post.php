<?
// ----------------------------конфигурация-------------------------- //

//$adminemail="info@kolobashkin.ru";  // e-mail админа
$adminemail=$_POST['adminemail']; // e-mail для теста

$date=date("d.m.y"); // число.месяц.год

$time=date("H:i"); // часы:минуты:секунды

$backurl="http://new.kolobashkin.ru/#/cart";  // На какую страничку переходит после отправки письма

//---------------------------------------------------------------------- //



// Принимаем данные с формы

$name=$_POST['name'];

$email=$_POST['email'];

$tel=$_POST['tel'];

$style=$_POST['style'];

$top=$_POST['top'];

$summary=$_POST['summary'];


$count=$_POST['count'];

for ($i=0; $i<=$count; $i++)
  {
    $msg_value[$i]=$_POST[$i];
    $msg_all = implode("", $msg_value);
  }

  $msg=$style.$msg_all.$summary;

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


  $msg="<font size=+1><b>Данные</b><br><br></font>

  Имя: $name<br>

  E-mail: $email<br>

  Телефон: $tel<br><br>

  <font size=+1><b>Заказ</b><br><br></font>

  $msg";


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
