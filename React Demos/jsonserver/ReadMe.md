# Steps for Creating JSON Server:
1. Install the json-server in UR machine:
```
npm install -g json-server
```
2. Create a directory called jsonserver
3. Open the directory from the Terminal and create a package.json file
```
npm init -y
```
4. Create a db.json file with data in JSON format based on the schema of the data you want. 
5. Modify the package.json file to watch the db.json file while running the server:
```
 "scripts": {
    "start": "json-server --watch db.json -p 9000"
  }
```
6. Run the command npm start from the terminal to run the server. 
