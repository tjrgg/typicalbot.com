<?php

namespace TypicalBot\Controllers;

class FrontController extends Controller
{
	public function index($request, $response)
	{
		return $this->view->render($response, 'home.twig');
	}
}