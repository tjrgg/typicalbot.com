<?php

namespace TypicalBot\Controllers;

class DemoController extends Controller
{
	public function index($request, $response)
	{
		return $this->view->render($response, 'demo/dashboard.twig');
	}
}