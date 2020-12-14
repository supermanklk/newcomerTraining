/**
 * @Description:
 * @author LuHao
 * @date 2020/12/9
 */
export function write() {
    return (dispatch) => {
        const url = 'http://prebin.zhushang.net/zhu_pro_zb/public/index.php/api/demoDemoItem';
        fetch(url)
            .then(response => response.json())
            .then(res => dispatch(to(res)))
    }

}

export function to(res) {
    return {
        type: 'write',
        res
    }

}
;