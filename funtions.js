<!DOCTYPE html>
<head>
    <script type="text/javascript">
    function name(value1,value2)
    {
        var name = value1+value2;
        return name;
    }
    function fullname()
    {
        var c;
        c = name("vasanth","nazriya");
        document.write(c)
    }
    </script>
</head>
<body>
    <input type="button" value="click!" onclick="fullname()">
</body>
</html>