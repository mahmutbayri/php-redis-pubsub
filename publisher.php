<?php

require __DIR__ . '/vendor/autoload.php';

Dotenv\Dotenv::create(__DIR__)->load();

$redis = new Predis\Client([
    'scheme' => 'tcp',
    'host' => getenv('REDIS_HOST'),
    'port' => 6379
]);

$redis->publish('someChannel', json_encode(['some data']));
