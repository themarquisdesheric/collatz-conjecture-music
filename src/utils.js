const createOscillator = (audioCtx, wave, frequency = 0) => {
  const osc = audioCtx.createOscillator();

  osc.type = wave;
  osc.connect(audioCtx.destination);
  osc.start();
  osc.frequency.value = frequency;

  return osc;
};

export default createOscillator;
