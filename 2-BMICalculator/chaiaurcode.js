const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = `please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = `please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = `<div>${bmi}</div>`;

    const range = document.querySelector('#range');
    if (bmi < 18.5) {
      range.innerHTML = '<span>under weight</span>';
    } else if (bmi < 24.9) {
      range.innerHTML = '<span>normal range</span>';
    } else {
      range.innerHTML = '<span>over weight</span>';
    }
  }
});
