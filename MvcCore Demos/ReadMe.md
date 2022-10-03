# Code First Approach:
Assumptions: No tables in the database
database has to generate the tables based on my classes. 


Things to do:
Create the Class and the DBContext Derived class. --Done 
UR DBContext is a parameterized Constructor. --Done
U should add the AddDbContext in the Startup.cs file. --Done
U should add the ConnectionString in the appsettings file. -done
The commands: 
add-migration someName
update-database

Then u should create a field in the controller and in the constructor of the controller U should pass the DBContext object which will be passed by the Framework. 

# DB First Approach:
Assumptions: 
The tables already exist in the database
The EF should generate the classes for the tables that are existing. 

Things to do:
Run the command:
Scaffold-DbContext "server=.\SQLEXPRESS;database=FaiTraining;Trusted_Connection=True" Microsoft.EntityFrameworkCore.SqlServer -outputDir Models

UR DBContext class will be UR DBNameContext. It will be having default constructor unlike the CODE-FIRST Approach. 
No need to go to Startup.cs or appsettings. 
There is no need for Constructor in the COntroller class. 

 
