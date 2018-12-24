export const createOscillator = (
  wave, 
  frequency = 0,
  audioCtx = new (window.AudioContext || window.webkitAudioContext)()
) => {
  const osc = audioCtx.createOscillator();

  osc.type = wave;
  osc.connect(audioCtx.destination);
  osc.start();
  osc.frequency.value = frequency;

  return [osc, audioCtx];
};

export const calculateCollatz = (n) => {
  let num = Number(n);
  const sequence = [num];

  while (num > 1) {
    if (num % 2 === 0) {
      num /= 2;
    } else {
      num = num * 3 + 1;
    }
    sequence.push(num);
  }

  return sequence;
};

// scale to within speaker's capabilities between min/max hz
export const scaleBetween = (unscaled, floor = 880, ceiling = 9000) => {
  const min = Math.min(...unscaled);
  const max = Math.max(...unscaled);

  return unscaled.map( (num) => 
    (ceiling - floor) * (num - min) / (max - min) + floor
  );
};
