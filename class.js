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
    class car {
        constructor(name,year){
            this.name = name;
            this.year = year;
        }
        //age(){
          //  let date = new Date();
            //return date.getFullYear() - this.year;
        //}
        age(x){
            return x - this.year;
        }
    }
    let date = new Date();
    let year = date.getFullYear();
    const myCar = new car ("ford",2014);
    const myCar1 = new car ("ferrari",2012);
    console.log(myCar.name +" "+ myCar.year + " and its " + myCar.age(year) + " year old");
    console.log(myCar1.name +" "+ myCar1.year);
    </script>
</body>
</html>