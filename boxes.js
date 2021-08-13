<!DOCTYPE html>
<head></head>
<body>
<script>
        function box1()
        {
            alert("This page says warning!");
        }
        function box2()
        {
            var x = confirm("DO you want to continue?");
            if(x==true)
            {
                document.write("User wants to continue!");
            }
            else if(x==false)
            {
                document.write("user do not want to continue :(");
            }
        }
        function box3()
        {
            var x = prompt("enter your age:");
                document.write("your age is",x);
        }
    </script>
    <!--
        <input type="button" value="alert box" onclick="box1()"/>
        <input type="button" value="confirm" onclick="box2()"/>
    -->
    <input type="button" value="Age calculate" onclick="box3()"/>
</body>
</html>