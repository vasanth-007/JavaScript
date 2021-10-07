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
   class person {
       constructor(firstName,lastName){
           this.firstName = firstName;
           this.lastName = lastName;
       }
       get fullName(){
           return " my full name is " + this.firstName + " " + this.lastName;
       }
       set fullName(value){
           this.firstName = value;
       }
       set fullName(value){
           this.lastName = value;
       }
   }

   let myPerson = new person("cristiano","ronaldo");
   console.log(myPerson.fullName);

   myPerson.firstName = "leonel";
   console.log(" changed firstName :" + myPerson.fullName );
   
   myPerson.lastName = "messi";
   console.log("changed lastname :" + myPerson.fullName);
    </script>
</body>
</html>