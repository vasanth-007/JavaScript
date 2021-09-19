<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
    <script src="https://kit.fontawesome.com/44a6058e92.js" crossorigin="anonymous"></script>
    <title>Document</title>
    <style>
        .box{
            border-radius: 5px;
            width: 130px;
            height: 30px;
            position: relative;
            background-color: blue;
            font-size: 30px;
            color: white;
            margin-top: 190px;
            margin-left: 140px;
        }
        .stylenumber{
            margin-left: 60px;
            margin-top: -9px;
            position: absolute;
        }
        .fa-plus {
            cursor: pointer;
            font-size: 20px;
            color:white;
            position: absolute;
            top: 5px;
            left: 80%;
        }
        .fa-minus{
            cursor: pointer;
            font-size: 20px;
            color:white;
            position: absolute;
            top: 5px;
            right: 80%;
        }
    </style>     
</head>
<diV class="box" id="mybox"><span class="stylenumber" id="mynumber">0</span>
    <a href="#" type="button" id="decrease">
        <i class="fa fa-minus" aria-hidden="true"></i>
    </a>
    <a href="#" type="button" id="increase">
        <i class="fa fa-plus" aria-hidden="true"></i>
    </a>
</diV>

<script type="text/javascript"> 

const x = document.getElementById("mynumber");
const y = document.getElementById("increase");
const z = document.getElementById("decrease");
z.addEventListener("click",()=>{
    inc = inc-1;
    mynumber.innerHTML = inc;
});
var inc =0;
y.addEventListener("click",()=>{
    inc = inc+1;
    mynumber.innerHTML = inc ;
});
</script>
<body>
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.min.js" integrity="sha384-+YQ4JLhjyBLPDQt//I+STsc9iw4uQqACwlvpslubQzn4u2UU2UFM80nGisd026JF" crossorigin="anonymous"></script>
</body>
</html>