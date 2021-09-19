<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
    <title>Document</title>
    <style>
        *{
            box-sizing: border-box;
        }
        body{
            margin: 0;
            padding: 0;
        }
        .mynav{
            width: 0;
            height: 700px;
            color: white;
            background-color: rgba(0,0,0,0.9);
            position: absolute;
            transition: 0.5s;
            z-index: 1;
            overflow: hidden;
            overflow-y: hidden;
            text-align: center;
        }
        .mynav a {
            font-size: 20px;
            color: white;
            text-decoration: none;
            display: block;
            padding: 20px;
        }
        .mynav a:hover{
            color: rgb(238, 181, 181);
        }
        /*close btn style*/
        .closebtn{
            position: absolute;
            top: 0;
            right: 25px;
            font-size: 36px;
            margin-left: 200px;
            cursor: pointer;
        }
        .nav-item{
            list-style: none;
        }
        .nav-item a {
            padding-left: 10px;
            color: black;
            border: 2px solid transparent;
        }
        .nav-item a:hover{
            border-bottom: 2px solid blue;
            transition:  0.4s;
        }
        #navicon{
            display: none;
            margin-top: -10px;
        }
        .navbar{
            justify-content: flex-end;
        }
        .navbar:first-child{
            justify-content: space-between;
        }
        .submenu{
            display: none;
        }
        .sub-parent:hover .submenu{
            box-shadow: 3px 3px 3px rgba(0,0,0,0.1),-3px -3px 3px rgba(0,0,0,0.1);
            display:block;
            position: absolute;
            margin-top: -40px;
            margin-left:150px;
            width: 150px;
            background-color: white;
                }
        @media screen and (max-width : 567px) {
            body{
                overflow-y: hidden;
            }
            .navbar:first-child {
                justify-content: space-between;
            }
            #navicon{
                display: block;
            }
            #resnav{
                display: none;
            }
        }
    </style>
</head>
<body>
    <nav class="navbar navbar-expand-md shadow">
        <span class="navbar-brand" id="logo">
            <p class="lead">VS Restaurent</p>
        </span>
             <ul class="navbar" id="resnav">
                 <li class="nav-item" data-toggle="dropdown"><a href="#" class="nav-link dropdown-toggle">Home</a>
                <ul class="dropdown-menu">
                    <li class="nav-item"><a href="#" class="nav-link dropdown-item">About</a></li>
                    <li class="nav-item"><a href="#" class="nav-link dropdown-item">Contact</a></li>
                    <li class="nav-item sub-parent" data-toggle="dropdown">
                        <a href="#" class="nav-link dropdown-item dropdown-toggle">Service</a>
                        <div class="submenu">
                            <a href="#" class="nav-link">About</a>
                            <a href="#" class="nav-link">Contact</a>
                            <a href="#" class="nav-link">Contact</a>
                        </div>
                    </li>
                </ul>
                </li>
                 <li class="nav-item"><a href="#" class="nav-link">About</a></li>
                 <li class="nav-item"><a href="#" class="nav-link">Contact</a></li>
                 <li class="nav-item"><a href="#" class="nav-link">Service</a></li>
                </ul>
        <span id="navicon" onclick="opennav()" style="cursor: pointer;font-size: 30px;">&#9776;</span>
    </nav>
 <!--side nav-->
    <div id="sidenav" class="mynav">
        <a class="closebtn" onclick="closenav()"><span style="font-size: 40px;">&times;</span></a>
        <a href="#">Home</a>
        <a href="#">about</a>
        <a href="#">contact</a>
        <a href="#">Services</a>
    </div>

    <div class="card">
        <div class="card-body">
            <button class="btn btn-warning"  id="mybtn">click to buy</button>
        </div>
    </div>




    <script type="text/javascript">
    function closenav(){
        document.getElementById("sidenav").style.width = 0;
    }

    function opennav(){
        var x = document.getElementById("sidenav").style.width = "100%";
    }
    //button
    const x = document.getElementById("mybtn");
    x.addEventListener("click",change);
    x.addEventListener("click",animation);
    function change(){
      document.getElementById("mybtn").innerHTML = "&#10003; item added";
    }
    </script>
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.min.js" integrity="sha384-+YQ4JLhjyBLPDQt//I+STsc9iw4uQqACwlvpslubQzn4u2UU2UFM80nGisd026JF" crossorigin="anonymous"></script>
</body>
</html>