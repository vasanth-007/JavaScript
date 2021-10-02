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

    const mobileCart = [
        {id : 1, name1 : "samsung", cost : "10000"},
        {id : 2, name : "asus", cost : "9500"},
        {id : 3, name : "redmi", cost : "100000"},
        {id : 4, name : "oppo", cost : "8000"},
        {id : 5, name : "vivo", cost : "7300"},
        {id : 6, name : "iphone", cost : "60000"},
        {id : 7, name : "realme", cost : "12000"},
    ];

    let mobiles =  mobileCart.find((value) => value.name1);
    console.log("Affortable Phones :", mobiles);
    </script>
</body>
</html>