
document.addEventListener("DOMContentLoaded", function() {
    // 文字
    var portfolioTitle = document.getElementById('portfolio-title');

    var links = document.querySelectorAll('.sidebar ul li a');


    links.forEach(function(link) {
            // クリックされたなら
            link.addEventListener("click", function(event) {
            
            // animを取り除きアニメーションをやり直すため初期化する
            portfolioTitle.classList.remove('anim');
            void portfolioTitle.offsetWidth;

            event.preventDefault(); // リンクのデフォルト動作を無効化

            var id = this.getAttribute('id'); // クリックされたリンクのID
            // 切替用関数
            Mode_Swich(id,portfolioTitle);
            // アニメーションを再度再生
            portfolioTitle.classList.add('anim');
            
    });

}); 

});

// 表示切替用の関数
// 1クリックしたリンクのID 2項目文字
const Mode_Swich = (ID,title) =>
{
    // クリック項目の表示と非表示を管理する変数
    var aboutSection = [document.getElementById('about-section_work'),
                        document.getElementById('about-section_infroduction')];

    // ホームがクリックされていればifに入らないので元の表示に戻る
    title.textContent = "Portfolio"; 

    // （下記は余裕があれば関数化する）
    // IDがportfolio-link（「作品」がクリックされたなら）
    if(ID == "work-link")
    {
    // ポートフォリオのタイトルのテキストを変更
    title.textContent = "Work"; 
    // hiddenを消すことで表示する
    aboutSection[0].classList.remove('hidden'); 
    title.classList.add('anim');
    }
    // クリックされていないかつhiddenになっていないなら
    else if(aboutSection[0].classList != 'hidden')
    {
    // hiddenをつけたし非表示にする
    aboutSection[0].classList.add('hidden'); 
    
    }

    // 自己紹介がクリックされたなら
    if(ID == "infroduction-link")
    {
    // ポートフォリオのタイトルのテキストを変更
    title.textContent = "Infroduction"; 
    // hiddenを消すことで表示する
    aboutSection[1].classList.remove('hidden'); 
    title.classList.add('anim');
    }
    // クリックされていないかつhiddenになっていないなら
    else if(aboutSection[1].classList != 'hidden')
    {
    // hiddenをつけたし非表示にする
    aboutSection[1].classList.add('hidden'); 
    
    }

}

// アニメーションが終了しているかどうかを判断する関数
Animation_Is = (title) =>{
title.addEventListener('animationend', () => {
    title.classList.remove('anim');
});
}