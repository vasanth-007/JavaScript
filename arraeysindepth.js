<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script type="text/javascript">
    //created a array
    const fruits = ["apple","graps","mango"];
    //push
    fruits.push("lemon");
    fruits.unshift("lemon")
    fruits.splice(1, 0, "watermelon", "bananas");
    console.log(fruits[3]);
    </script>
</body>
</html>