function collatz(num) {
  var sequence = [num];
  var counter = 0;

  var AudioContext = window.AudioContext || window.webkitAudioContext;
  var audioCtx = new AudioContext();
  var osc = audioCtx.createOscillator();

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

  osc.type = 'square';
  osc.connect(audioCtx.destination);
  osc.start();
  osc.stop(sequence.length);

  var intervalID = setInterval(function() {
    if (counter === sequence.length - 1) {
      clearInterval(intervalID);
      osc.disconnect(audioCtx.destination);
    } else {
      // multiplying frequency by 110 to hear better, and by 1.05946 for the semitones step
      osc.frequency.value = sequence[counter] * 110 * 1.05946;
      counter++;
    }
  }, 300);
}

collatz(15);
