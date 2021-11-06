const maxNumber = (a, b, c) => {
  const max = Math.max(a, b, c);
  return max;
};

const sortNumbers = (a, b, c) => {
  const numbers = [a, b, c];

  const sortedNumbers = numbers.sort(function (x, y) {
    return x - y;
  });

  return sortedNumbers;
};

function result(formId) {
  const form = document.getElementById(formId);

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  const data = new FormData(form);

  const n1 = data.get("number-1");
  const n2 = data.get("number-2");
  const n3 = data.get("number-3");

  const max = maxNumber(n1, n2, n3);
  const sortedNumbers = sortNumbers(n1, n2, n3);

  let content = `Maior número: ${max}\n`;
  content += `Números ordenados: ${sortedNumbers.join(" ")}`;

  alert(content);
}
