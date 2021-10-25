function check() {
    let str = [];
    //ラジオボタンの中身を取得
    const q = [document.ask.q0, document.ask.q1, document.ask.q2, document.ask.q3, document.ask.q4, document.ask.q5, document.ask.q6];
    //変数の宣言
    var sum = 0;
    var bbb = 0;

    // for文でqの配列の要素番号をaaaに足し込む
    for (let i = 0; i < q.length; i++) {
        // qの配列の中でラジオボタンの選択肢の配列(2字配列)を呼び出し
        for (let j = 0; j < q[i].length; j++) {
            //　チェックが入っているラジオボタンの検索
            if(q[i][j].checked) {
                // チェックが入ってるラジオボタンのvalueをbbbに代入
                bbb = q[i][j].value;
                //valueからは文字列しか取得できないのでbbbの文字列を強制的に数値に変換してaaaに代入
                sum += Number(bbb);
                // ラジオボタンは1つしか選べないのでvalueを取得後にブレイク
                break;
            }
        }
    }
    if (sum === 7) {
        window.onload = function() {
            /*タグを挿入するオブジェクトを取得*/
            const firstViewElement = document.getElementById('firstView');
            firstViewElement.insertAdjacentHTML('beforebegin','<h2>beforebegin追加要素</h2>');
            firstViewElement.insertAdjacentHTML('afterbegin','【afterbegin追加要素】');
            firstViewElement.insertAdjacentHTML('beforeend','【beforeend追加要素】');
            firstViewElement.insertAdjacentHTML('afterend','<h2>afterend追加要素</h2>');
        };
        window.location.href = 'a.html';
        
    } else if (sum === 6) {
        window.location.href = 'b.html'; // 通常の遷移
    } else if (sum < 4 && sum >= 1) {
        window.location.href = 'c.html'; // 通常の遷移
    } else {
        window.location.href = 'd.html'; // 通常の遷移
    }
}