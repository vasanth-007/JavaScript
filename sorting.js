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
    const soccer = [{ name :"ronaldo"},{name: "messi"}, {name : "neymar"},];
    soccer.sort((a,b)=> {
        //a<b = -1 
        if(a.name < b.name) return -1;
        //a>b =1
        if(a.name > b.name) return 1;
        //a===b = o
        return 0;
    });
    console.log(soccer);
    </script>
</body>
</html>