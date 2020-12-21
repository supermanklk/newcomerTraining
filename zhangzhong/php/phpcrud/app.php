<?php
   //设计数据库

//连接数据库
$conn = new mysqli("localhost","root","root","phpcrud");
if($conn->connect_error){
    die("数据库连接失败");
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
    $result = $conn->query("SELECT * FROM `users`"); //查询users表的所有内容
//    var_dump($result);
    $users = array();
    while ($row = $result->fetch_assoc()){                 //通过$result遍历users表将取出的每一项值赋值给$row
        array_push($users , $row);                 //把每个$row取到的值push到 $users数组中
    }
    //var_dump($users);
    $res['users'] = $users;                               //把$users数组赋值给$res中的users数组
}

//添加数据
if ( $action  == "addNum"){
    $num = $_POST['num'];
    $conn->query("set names utf8");
    $result = $conn->query("INSERT INTO `users` (`num`) VALUES ('$num')");//将通过POST请求接收到的num插入数据库中,用$result接受插入状态

    if($result){                                              //通过判断$result的值（ture|false）来返回插入成功或失败
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

    $conn->query("set names utf8");                    //设置编码

    $result = $conn->query("UPDATE `users`  SET `num` = '$num' WHERE `id` = '$id'");//将通过POST请求接收到的num和id,根据id查询数据的位置，再修改num的值,用$result接受插入状态

    if($result){                                                                   //通过判断$result的值（ture|false）来返回数据更新成功或失败
        $res['message'] = "User upDate successful";

    } else {
        $res['err'] = true;
        $res['message'] = "User upDate failed";
    }

}

//删除
if ( $action  == "delete"){
    $id = $_POST['id'];



    $result = $conn->query("DELETE FROM `users`  WHERE `id` = '$id'");//将通过POST请求接收到的id,根据id来删除对应的字段,用$result接受插入状态

    if($result){                                           //通过判断$result的值（ture|false）来返回删除成功或失败
        $res['message'] = "User DELETE successful";

    } else {
        $res['err'] = true;
        $res['message'] = "User DELETE failed";
    }

}



$conn ->close();                //关闭数据库


header("Content-type:application/json");
header('Access-Control-Allow-Origin:*');       //解决前端跨域问题
echo json_encode($res);                                //将结果转化成json格式
