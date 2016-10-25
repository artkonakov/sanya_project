<?
// ----------------------------конфигурация-------------------------- //

$adminemail="info@kolobashkin.ru";  // e-mail админа
//$adminemail=$_POST['adminemail']; // e-mail для теста

$date=date("d.m.y"); // число.месяц.год

$time=date("H:i"); // часы:минуты:секунды

$backurl="http://kolobashkin.ru/#!/completed";  // На какую страничку переходит после отправки письма

//---------------------------------------------------------------------- //



// Принимаем данные с формы

$name=$_POST['name'];

$email=$_POST['email'];

$tel=$_POST['tel'];

$address=$_POST['address'];

$promo=$_POST['promo'];

$promo=$_POST['comment'];

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
  $headers .= "From: Заказ на Колобашкин.ru <from_site@kolobashkin.ru>\r\n";
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


  $msg="<font size=+1><b>Данные:</b><br><br></font>

  Имя: $name<br>

  E-mail: $email<br>

  Телефон: $tel<br><br>

  Адрес: $address<br><br>

  Комментарий: $comment<br><br>

  Промокод: $promo<br><br>

  <font size=+1><b>Заказ</b><br><br></font>

  $msg";


   // Отправляем письмо админу

  mail("$adminemail", "$date $time Сообщение от $name, телефон: $tel, адрес: $address, промокод: $promo", "$msg", $headers);



  // Сохраняем в базу данных

  $f = fopen("message.txt", "a+");

  fwrite($f," \n $date $time Сообщение от $name, телефон: $tel");

  fwrite($f,"\n $msg ");

  fwrite($f,"\n ---------------");

  fclose($f);



  // Выводим сообщение пользователю

  print "<script language='Javascript'><!--
  function reload() {location = \"$backurl\"}; setTimeout('reload()', 7000);
  --></script>

  $msg

  <p>Ваш заказ успешно отправлен нашему менеджеру!</p>";
  exit;

  }




?>
