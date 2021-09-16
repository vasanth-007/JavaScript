<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <!--finding html elemnts-->
    
    <!--getElementById-->
    <p id="demo"></p>
    <p id="demo1">innerhtml gets values</p>
    <script type="text/javascript">
    //set values
    document.getElementById("demo").innerHTML = "innerhtml sets values";
    //get values
    document.getElementById("demo1").innerHTML;
    </script>


    <!--getElementByTagNAme-->
    <p>Sample para</p>
    <div id="parent">
        <p>child one</p>
        <p>child two</p>
    </div>
    <script type="text/javascript">
    //selects all p element in the document
    document.getElementsByTagName("p");

    //first selects the parent
    const x = document.getElementById("parent"); //declaring the object
    //then selects the all p inside the parent
    const y = x.document.getElementsByTagName("p");
    </script>

    <!--GetElementsByClassName-->

    <P class="inro">class name one</P>
    <P class="intro">class name two</P>

    <script type="text/javascript">
    document.getElementsByClassName("intro");
    </script>

    <!--Queryselectorall-->

    <p class="child">
        query content one
    </p>
    <p class="child">
        query content two
    </p>

    <script type="text/javascript">
    document.querySelectorAll("p.child")[1].innerHTML = "query value changed";
    //index value
    </script>
</body>
</html>