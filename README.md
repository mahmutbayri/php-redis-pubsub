# PHP Redis PubSub Example
In this example project, i'd like to test how to sent data to redis server, and get data from a browser via node server.
The node server is also connect to the redis server and listen modifications in redis server.

# Installation
    
    git clone git@github.com:mahmutbayri/php-redis-pubsub.git -b master --depth 1
    composer install
    npm install
    cp .env.example .env
    
Please change REDIS_HOST environment variable if you use different redis server IP address.

# Test
This server will listen modifications for specific channel, and send to connected client which connects via browser.

    node subscriber.js

This command creates a web server in order to see any modifications on your web browser. After creating this, you can visit http://localhost:9800

    php -S 0.0.0.0:9800 index.html

This command sends data to the redis server.

    php publisher.php
