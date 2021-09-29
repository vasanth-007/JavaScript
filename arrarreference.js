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
    const vegetables = [
        {name : "brinjol", quantity : 2}, 
        {name : "potatos", quantity : 2},
        {name : "tomatos", quantity : 2},
    ]
    let result = vegetables.findIndex(function(myveg){
       return myveg.name == "potatos"
    })
    console.log(result);
    </script>
    </body>
</html>