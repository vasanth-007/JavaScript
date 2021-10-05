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

    let student = {
        firstName :"ddd",
        lastName : "raman",
        fullName(){
            const msg = this.firstName;
            if(typeof msg != "string"){
                const err = new Error("its a number");
                throw err;
            };
            console.log(msg);
        },
    };
    try{
        student.fullName(); //defensive programming
    }catch(e){
        alert(e);
    }
    </script>
</body>
</html>