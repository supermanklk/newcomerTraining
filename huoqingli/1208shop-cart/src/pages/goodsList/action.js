/**
 * @Description: 获取商品列表的 action
 * @author 霍青利
 * @date 2020/12/9 14:22
*/
const getGoodsList = () => {
    return (dispatch) => {
        fetch('http://prebin.zhushang.net/zhu_pro_zb/public/index.php/api/demoDemoItem')
            .then(response => response.json())
            .then(res => {
                // console.log(res);
              dispatch({
                  type: 'GET_GOODS_LIST',
                  data: res
              })
            })
    }
}

export {
    getGoodsList
}