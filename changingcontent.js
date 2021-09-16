<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <!--changing the html elemnt content-->
    <p id="para">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam soluta impedit officia eius quod eaque quidem cum in? Quaerat laborum facilis hic dignissimos doloribus aspernatur ab alias dolorem eos consequatur!
    </p>
    <script type="text/javascript">
    const x = document.getElementById("para").innerHTML = "Content changed using js";
    </script>

    <!--chaning the attribute values-->

    <p id="para" title="para"  style="background-color: yellow;">
        New para
    </p>

    <script>
        let y = document.getElementsByTagName("p")[1].title = "value changed";
    </script>

    <!--dynamic html content-->
    <p id="date"></p>

    <script type="text/javascript">
    const sample = document.getElementById("date").innerHTML = "Date : " + Date();
    </script>

    <form>
        <input type="text" name="name" placeholder="name" optional/>
    </form>
</body>
</html>