<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
	header('Access-Control-Allow-Origin: *');
	header('Access-Control-Allow-Methods: POST, GET, DELETE, PUT, PATCH, OPTIONS');
	header('Access-Control-Allow-Headers: token, Content-Type');
	header('Access-Control-Max-Age: 1728000');
	header('Content-Length: 0');
	header('Content-Type: text/plain');
	die();
}
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

require("Utils/config.php");
require("Utils/Show.php");
require("Utils/AccessCheck.php");
require("Utils/FludControl.php");
require("Utils.php");
require 'vkapi.php';

// set_exception_handler('exceptionerror');

// require 'api/api/users.php';

session_id($_GET['vk_user_id']);
session_start();

function exceptionerror($ex)
{
	// $code = $ex->getCode();
	// $msg = $ex->getMessage();

	// if ( $code == 0 ) $msg = CONFIG::ERRORS[0];
	// $data = [
	// 	'result' => false,
	// 	'error' => [
	// 		'code' => $code,
	// 		'message' => $msg
	// 	]
	// 	];
	Show::error(0);

	// $pretty = isset($data['debug']) ? JSON_PRETTY_PRINT : 0;
	// echo json_encode( $data, JSON_UNESCAPED_UNICODE | $pretty );
}

new AccessCheck();
new FludControl();

$params = [
	'groups.getById' => [
		'parameters' => [
			'group_ids' => [
				'type' => 'string',
				'required' => true
			],
			'fields' => [
				'type' => 'string',
				'required' => true
			]
		],
	],
];
$user_id = (int) $_GET['vk_user_id'];
$method = $_GET['method'];

$data = file_get_contents('php://input');
$data = json_decode($data, true);

if (!$data) {
	$data = $_POST;
}

if (!isset($params[$method])) {
	Show::error(405);
}
$data = Utils::checkParams($params[$method]['parameters'], $data);


switch ($method) {
	case 'groups.getById':
		$groups = $data['group_ids'];
		$fields = $data['fields'];
		$vk_api = new VKApi(CONFIG::VK_APP_TOKEN);
		$result = $vk_api->_request('groups.getById', [
			'group_ids' => $groups,
			'fields' => $fields,
		]);
		Show::response($result);
}
