// even: n = n / 2
// odd: n = 3n + 1

function collatzStep(n) {
  return n % 2 === 0 ? n / 2 : 3 * n + 1;
}

function collatzSequence(start, terms) {
  const sequence = [];
  let n = start;

  for (let i = 0; i < terms; i++) {
    sequence.push(n);
    n = collatzStep(n);
  }

  return sequence;
}

for (let i = 1; i <= 20; i++) {
  const sequence = collatzSequence(i, 21);
  const joinedseq = sequence.join(", ");
  console.log(`Sequence for ${i}: ${joinedseq}`);

  let stepsto1 = 0;
  for (let j = 0; j < sequence.length; j++) {
    if (sequence[j] === 1) {
      break;
    }
    stepsto1++;
  }

  console.log(`Steps: ${stepsto1}`);
}
