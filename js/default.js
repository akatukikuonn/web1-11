var number = Math.floor(Math.random()*13);
var answer = parseInt(window.prompt('数あてゲーム！0～12を入力してください！'));

var message;
if(answer === number){
  message = window.confirm('あたり！Σ(･ω･ﾉ)ﾉ！');
}
  else if (answer < number){
  result = window.confirm('ざんね～ん。もっと大きいよ！( *´艸｀)');
}
  else if (number < answer){
 result =window.confirm('ざんね～ん。もっと小さいよ！( *´艸｀)');
}
 else{
 result =window.confirm('0~12の数字を入力してくださいな( ..)φ');
}

document.getElementById('choice').textContent = message;
