# library-management-nodejs

### How to use

Before using this demo, you need to have a mongodb atlas account and set up a database.

1. clone the project
2. cd /server and run "npm install"
3. cd /client and run "npm install" to install the dependent packages
<!-- 4. Create a ".env" file in the root folder and /client folder, respectively -->
4. copy /server/configs/config-template.js as config.js in the same folder
5. Edit the config.js file, fill in the following
   - db_uri
   - jwt.secret
   - jwt.options
6. then, cd the server folder, and execute "node populate.js" to add some mock data to the database
7. cd /server and run "npm run dev-start"
8. cd /client and run "npm start"
9. before use, you need to sign up first. Use any email and password you like.
