var number = Math.floor(Math.random()*13);
var answer = parseInt(window.prompt('数あてゲーム！0～13を入力してください！'));
while(1)
{
  
var message;
if(answer === number){
  message = 'あたり！Σ(･ω･ﾉ)ﾉ！';
  break;
}
  else if (answer < number){
  message =window.cofirm( 'ざんね～ん。もっと大きいよ！( *´艸｀)');
}
  else if (number < answer){
  message =window.cofirm ('ざんね～ん。もっと小さいよ！( *´艸｀)');
}
 else{
  message =window.cofirm ('0~13の数字を入力してくださいな( ..)φ');
}
if (result === true)
  result=0;
  else break;
}
document.getElementById('choice').textContent = message;
