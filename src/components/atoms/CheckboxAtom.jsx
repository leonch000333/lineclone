const setYear = () => {
  const sel = document.createElement("select");
  for (let i = 2020; i < 2025; i++) {
    let op = document.createElement("option");
    op.value = i;
    op.text = i;
    sel.appendChild(op);
  }
  return sel;
};

const setMonth = () => {
  const sel = document.createElement("select");
  for (let i = 1; i <= 12; i++) {
    let op = document.createElement("option");
    op.value = i;
    op.text = i;
    sel.appendChild(op);
  }
  return sel;
};

const setDay = () => {
  const sel = document.createElement("select");
  for (let i = 1; i <= 31; i++) {
    let op = document.createElement("option");
    op.value = i;
    op.text = i;
    sel.appendChild(op);
  }
  return sel;
};

export {setYear, setMonth, setDay};