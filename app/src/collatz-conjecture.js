/* eslint no-console: "off" */

function collatz(num) {
  var sequence = [num];
  var scaledSequence;

  function scaleBetween(unscaled, floor, ceiling) {
    const min = Math.min(...unscaled);
    const max = Math.max(...unscaled);
  
    return unscaled.map( 
      (num) => (ceiling - floor) * (num - min) / (max - min) + floor
    );
  }

  function playCollatz(sequence, wave = 'sine') {
    var AudioContext = window.AudioContext || window.webkitAudioContext;
    var audioCtx = new AudioContext();
    var osc = audioCtx.createOscillator();
    var counter = 0;
  
    osc.type = wave;
    osc.connect(audioCtx.destination);
    osc.start();
    osc.frequency.value = 0;
    osc.stop(sequence.length);
  
    var intervalID = setInterval(function() {
      if (counter === sequence.length) {
        clearInterval(intervalID);
        osc.disconnect(audioCtx.destination);
      } else {
        osc.frequency.value = sequence[counter];

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

  // scale hz within speaker's capabilities
  scaledSequence = scaleBetween(sequence, 880, 9000);

  playCollatz(scaledSequence);
}

collatz(15);