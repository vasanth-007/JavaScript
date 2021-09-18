<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <button id="btn">click me</button>
    <p id="p"></p>
<script type="text/javascript">
    const x = document.getElementById("btn");
    x.addEventListener("click", feed);
    x.addEventListener("click", add);
    x.addEventListener("click", adds);

    function feed(){
        alert("page has been loaded");
    }
    function add()
    {
        document.getElementById("p").innerHTML = "content added </br>";
    }
    function adds()
    {
       let y = document.getElementById("p").innerHTML = "another content";
        y.document.getElementById("p").style.color = "green";
    }
</script>
</body>
</html>