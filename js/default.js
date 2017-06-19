var number = Math.floor(Math.random()*13);
var answer = parseInt(window.prompt('数あてゲーム！0～13を入力してください！'));

var message;
if(answer === number){
  message = 'あたり！Σ(･ω･ﾉ)ﾉ！';
}else if (answer < number){
  message = 'ざんね～ん。もっと大きいよ！( *´艸｀)';
}else if (number < answer){
  message = 'ざんね～ん。もっと小さいよ！( *´艸｀)';
}else{
  message = '0~13の数字を入力してくださいな( ..)φ';
}

document.getElementById('choice').textContent = message;
