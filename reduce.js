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
    const donation = [56,33,88,33,22];
    let totalDonation = donation.reduce(function(prevValue,curValue){
        return prevValue + curValue ;
    });
    console.log(totalDonation);
    </script>
    <script type="text/javascript">
    const cart = [
        {id : 1, item : "milk",cost : 10},
        {id : 1, item : "milk",cost : 10},
        {id : 1, item : "milk",cost : 10},
    ];
    let total = cart.reduce(function(prevVal,curValue){
        return prevVal + curValue.cost;
    },5);
    console.log("total pay",total);
    </script>
</body>
</html>