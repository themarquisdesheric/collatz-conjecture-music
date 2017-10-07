function collatz(num) {
  var sequence = [num];

  function playCollatz(sequence) {
    var AudioContext = window.AudioContext || window.webkitAudioContext;
    var audioCtx = new AudioContext();
    var osc = audioCtx.createOscillator();
    var counter = 0;
  
    osc.type = 'sine';
    osc.connect(audioCtx.destination);
    osc.start();
    osc.frequency.value = 0;
    osc.stop(sequence.length);
  
    var intervalID = setInterval(function() {
      if (counter === sequence.length) {
        clearInterval(intervalID);
        osc.disconnect(audioCtx.destination);
      } else {
        // logarithmic step for the semitones, like a fretboard
        osc.frequency.value = 880 * Math.pow(1.05946, sequence[counter] - 1);

        counter++;
      }
    }, 300);
  }

  while (num > 1) {
    if (num % 2 === 0) {
      console.log(num + ' is even, so we divide it by 2.');

      num /= 2;
      sequence.push(num);
    } else {
      console.log(num + ' is odd. Multiplyling by 3 and adding 1');

      num = num * 3 + 1;
      sequence.push(num);
    }
  }

  console.log(num);

  playCollatz(sequence);
}