<?php

// Front
$app->get('/', 'FrontController:index');

// Demo
$app->get('/demo', 'DemoController:index');