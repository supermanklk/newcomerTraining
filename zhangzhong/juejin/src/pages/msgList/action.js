/**
 * @Description: action.js
 * @author zhangzhong
 * @date 2020/12/20 
*/
export let getRes = () => {
    //通过中间件，将action设为方法
    return (dispatch) => {
        const url = "http://localhost/phpcrud/msg.php?action=msg" //获取列表信息api
        fetch(url,{
            method: "GET",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            }
        })
            .then((response) => response.json())
            .then((res) => {
                dispatch({type: 'GET_RES',list: res})  //代理发送dispatch
            });
    }
}
