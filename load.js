<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body onbeforeunload="return myfunction()">
   <a href="https://www.w3schools.com/jsref/event_oncontextmenu.asp">click me</a>    
   <script type="text/javascript">
   function myfunction(){
       return "are your sure leaving this page....";
   }
   </script>
</body>
</html>