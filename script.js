const data = [
  {
    "category": "Reaction",
    "score": 80,
    "icon": "./assets/images/icon-reaction.svg",
    "color": "hsla(0, 100%, 95%, 1)" // HSLA color value
  },
  {
    "category": "Memory",
    "score": 92,
    "icon": "./assets/images/icon-memory.svg",
    "color": "hsla(240, 100%, 95%, 1)" // HSLA color value
  },
  {
    "category": "Verbal",
    "score": 61,
    "icon": "./assets/images/icon-verbal.svg",
    "color": "hsla(120, 100%, 95%, 1)" // HSLA color value
  },
  {
    "category": "Visual",
    "score": 72,
    "icon": "./assets/images/icon-visual.svg",
    "color": "hsla(60, 100%, 95%, 1)" // HSLA color value
  }
];

const tableBody = document.querySelector('#summary_option');

data.forEach(item => {
  const row = document.createElement('div');
  row.className = 'option_container';
  row.style.backgroundColor = item.color;
  const row_1 = document.createElement('div')
  row_1.className='row_1'

  const iconCell = document.createElement('div');
  const iconImg = document.createElement('img');
  iconImg.src = item.icon;
  iconImg.alt = "icons"
  iconCell.appendChild(iconImg);

  const categoryCell = document.createElement('div');
  categoryCell.textContent = item.category;
  categoryCell.className = 'category';

  const scoreCell = document.createElement('div');
  scoreCell.className='row_2'
  scoreCell.innerHTML = `<div class="item_score">${item.score}<p>/100</p></div>`;
  row.appendChild(row_1)
  row_1.appendChild(iconCell);
  row_1.appendChild(categoryCell);
  row.appendChild(scoreCell);

  tableBody.appendChild(row);
});
