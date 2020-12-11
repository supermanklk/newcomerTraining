<?php
   //设计数据库

$conn = new mysqli("localhost","root","root","phpcrud");
if($conn->connect_error){
    die("dsdasdasd");
}

//构建接口
$action = "read";

//返回的数据
$res = array("err"=>false);

if(isset($_GET['action'])){
    $action = $_GET['action'];
}

//php获取数据
if ( $action  == "read"){
    $conn->query("set names utf8");
    $result = $conn->query("SELECT * FROM `users`");
//    var_dump($result);
    $users = array();
    while ($row = $result->fetch_assoc()){
        array_push($users , $row);
    }
    //var_dump($users);
    $res['users'] = $users;
}

//添加数据
if ( $action  == "addNum"){
    $num = $_POST['num'];
    $conn->query("set names utf8");
    $result = $conn->query("INSERT INTO `users` (`num`)
 VALUES ('$num')");

    if($result){
        $res['message'] = "User added successful";

    } else {
        $res['err'] = true;
        $res['message'] = "User added failed";
    }

}

//更新数据
if ( $action  == "update"){
    $id = $_POST['id'];
    $num = $_POST['num'];

    $conn->query("set names utf8");

    $result = $conn->query("UPDATE `users`  SET `num` = '$num' WHERE `id` = '$id'");

    if($result){
        $res['message'] = "User upDate successful";

    } else {
        $res['err'] = true;
        $res['message'] = "User upDate failed";
    }

}

//删除
if ( $action  == "delete"){
    $id = $_POST['id'];



    $result = $conn->query("DELETE FROM `users`  WHERE `id` = '$id'");

    if($result){
        $res['message'] = "User DELETE successful";

    } else {
        $res['err'] = true;
        $res['message'] = "User DELETE failed";
    }

}



$conn ->close();


header("Content-type:application/json");
header('Access-Control-Allow-Origin:*');
echo json_encode($res);
die();