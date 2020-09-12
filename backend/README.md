# backend of restaurant_sidechain
The backend of the luxury restaurant business based on Lisk blockchain is the responsible to perform any request to the sidechain blockchain. Also, it is responsible to receive requests from any client and perform transactions to the sidechain.
Restaurants can take advantage of RestaurantFood class and specify its restaurant lisk address on RestaurantInfo.js. For example: Restaurant 1 would have its food types, use the RestaurantFood class for its business and perform transactions to the same sidechain consumed by Restaurant 2. The difference is that Restaurant 2 can be a completely different restaurant business, it just need to specify its own restaurant lisk address on RestaurantInfo.js and peform a MenuTransaction to specify its food types with desserts, menu, entrances ...

Configuring
/*After configure the restaurant sidechain, now is time to configure the backend*/
/*Run*/
npm ci

/*open the config folder and configure the config.json file including the ip address(es) of restaurant sidechain*/

/*open the index.js folder and change the ip address 3333 of this line, server.listen(3333);, to any you desire, or just let it the way it is.*/

/*open the baseClasses folder and specify the restaurant address, passphrase in RestaurantInfo.js file*/

/*ok you are ready to run the backend*/
node index.js

/*If you can read Initiated, then the backend is up and running. Stop it and run it with pm2*/
pm2 start --name luxury_restaurant_backend index.js

/*After configure the backend is time to configure the frontend. The site will make things possible to an user. Go to the web folder from the restaurant_sidechain folder and read the Readme*/
