<!DOCTYPE html>
<head>
<script type="text/javascript">
    var records = new Object();
    records.name = "vasanth";
    records.age = "20";
    function attn(x,y)
    {
        this.name = x;
        this.status = y;
    }
    </script>
</head>
<body>
    <script type="text/javascript">
    document.write(records.name + records.age ,"</br>");
    var attedance = new attn("vasanth" , "present");
    document.write(attedance.name ,"</br>", attedance.status);
    </script>
</body>
</html>