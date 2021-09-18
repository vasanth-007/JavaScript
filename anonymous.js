<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
    <button id="btn"></button>
    <p id="p"></p>

    <script>
        var a = 10;
        var b = 134;
        var x = document.getElementById("btn");
        x.addEventListener("click", function(){myfunction(value1,value2)});

        function myfunction(a,b){
            const add = document.getElementById("p").innerHTML = a + b;
        }

    </script>
</body>
</html>