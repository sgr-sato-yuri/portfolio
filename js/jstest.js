//参考：https://www.webdesignleaves.com/pr/jquery/js-audio-player.html
// audio 要素と各ボタン要素を取得
const audio = document.querySelector('audio');
const playBtn =  document.querySelector('.play');
const pauseBtn =  document.querySelector('.pause');
const stopBtn =  document.querySelector('.stop');
 
// 各ボタン要素の click イベントにリスナー関数を登録
playBtn.addEventListener('click', playAudio, false );
pauseBtn.addEventListener('click', pauseAudio, false );
stopBtn.addEventListener('click', stopAudio, false );
 
// Play ボタンのリスナー関数
function playAudio() {
  // play() メソッドで音声を再生
  audio.play();
}
 
// Pause ボタンのリスナー関数
function pauseAudio() {
  // pause() メソッドで停止
  audio.pause();
}
 
// Stop ボタンのリスナー関数
function stopAudio() {
  // 停止して再生位置を先頭に戻す
  audio.pause();
  audio.currentTime = 0;
}

// ボリュームスライダー
const volumeBar = document.querySelector(".volume");
// スライダーの値に現在の volume の値（初期値）を設定
volumeBar.value = audio.volume;
// スライダーの値が変更されたら
volumeBar.addEventListener('input', (e) => {
  // スライダーの値に現在の値を設定
  audio.volume = e.currentTarget.value;
  // ミュート中であればミュートを解除
  if (audio.muted) {
    audio.muted = false;
  }});

  // シークバー
  const seekBar = document.querySelector(".slider");
  // シークバーの値が変更されたら
  seekBar.addEventListener('input', (e) => {
    //再生位置を変更された値に設定
    audio.currentTime = e.currentTarget.value;
  });

  // 再生時間（音声データの長さ）
  const durSpan = document.querySelector(".length");
  let duration;
  // メタデータの読み込みが完了した時点で再生時間を取得
  audio.addEventListener('loadedmetadata', () => {
    duration = audio.duration;
    // 再生時間を hh:mm:ss に変換して表示
    var min = Math.floor(duration/60);
    var sec = Math.floor(duration%60);
    durSpan.textContent = `${min}:${sec}`;
    console.log(duration);
    // シークバー（レンジ入力欄）の max 属性に再生時間を設定
    seekBar.setAttribute('max', Math.floor(duration));
  });

  // currentTime プロパティの値が更新される際に発火するイベント
  audio.addEventListener('timeupdate', updateTime, false);

  function updateTime() {
    const cTime = audio.currentTime;
    const ctSpan = document.querySelector(".current");
    // 現在の再生位置（時間）の表示を更新
    var cmin = Math.floor(cTime/60);
    var csec = String(Math.floor(cTime%60)).padStart(2,"0");
    ctSpan.textContent = `${cmin}:${csec}`;
    // シークバーの現在の再生位置を更新
    seekBar.value = cTime;
  }

