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
    //object
    let person = {
        name: "you",
        sex: "male"
    };
    //get values using for in out
    for(let key in person)
    {
        document.write(person[key]);
    }
    </script>
</body>
</html>