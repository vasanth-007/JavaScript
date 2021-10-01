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
    const cars = ["lambo","bmw","benz"]
    const bikes = ["ktm","rx","hero"]
    const trucks = ["volvo","scania","ashok layland"]

    let vehicles = [...cars,1,"owner",{item : "sample"},...bikes,...trucks];
    console.log(vehicles);
    </script>
</body>
</html>