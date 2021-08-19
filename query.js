<!DOCTYPE html>
<head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script>
        jQuery(document).ready(function(){
        jQuery("button").click(function(){
        var x = jQuery("p");
        x.css("color","yellow"); 
        }); 
        });
        jQuery(document).ready(function(){
        jQuery("type="button"").click(function(){
        var x = jQuery("h2");
        x.css("color","blue"); 
        }); 
        });
        </script> 
</head>
<body>
    <p>Getting an identity is important</p>
 <button>Desired Changes</button>
 <h2>this is heading</h2>
 <input type="button" value="button">
</body>
</html>