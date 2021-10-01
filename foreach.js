<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://kit.fontawesome.com/44a6058e92.js" crossorigin="anonymous"></script>
</head>
<body>
    <p>
        <i class="fas fa-thumbs-up" id="btn" style="font-size: 30px;"></i>
    </p>
    <span id="display">likes: 0</span>
    <script type="text/javascript">
    const design = document.getElementsByClassName("fas")[0].style.Color = "white";
    const likes = document.getElementById("display");
    const buttons = document.getElementById("btn");
    buttons.addEventListener("click",myFunction);
    let x = 0;
    function myFunction(){
        x = x+1;
        likes.innerHTML = "likes :" + x;
    }
    </script>
</body>
</html>