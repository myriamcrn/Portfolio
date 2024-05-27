document.addEventListener('DOMContentLoaded', () => {
  // ICI TOUT COMMENCE
  console.log('cest le debut');

  // ajoute une tache quand on click sur le btn add
  const bouton = document.getElementById('bouton');
  bouton.addEventListener('click', handleClick);

  function handleClick() {
    const inpute = document.getElementById('inpute');
    const text = inpute.value;
    const tasks = document.getElementById('tasks');

    const div = document.createElement('div');
    div.classList.add('flex');

    const input = document.createElement('input');
    input.type = 'checkbox';

    const li = document.createElement('li');
    li.textContent = text;

    div.appendChild(input);
    div.appendChild(li);

    div.addEventListener('click', regardeSiCestCheckEtBarreEnFonction);

    tasks.appendChild(div);

    inpute.value = '';
  }

  // barre la tache quand on clique sur la checkbox
  const flexs = document.getElementsByClassName('flex');
  for (let i = 0; i < flexs.length; i++) {
    flexs[i].addEventListener('click', regardeSiCestCheckEtBarreEnFonction);
  }

  function regardeSiCestCheckEtBarreEnFonction() {
    let i = 0;
    while (i < flexs.length) {
      if (flexs[i].children[0].checked) {
        flexs[i].children[1].classList.add('cestfait');
      } else {
        flexs[i].children[1].classList.remove('cestfait');
      }
      i++;
    }
  }

  // changer de contenu en cliquant sur le menu
  const nav = document.getElementById('menu');
  const menu = nav.children;

  let i = 0;
  while (i < menu.length) {
    menu[i].addEventListener('click', changerDeContent);
    i++;
  }

  function changerDeContent(e) {
    let i = 0;
    while (i < menu.length) {
      menu[i].classList.remove('selected');
      i++;
    }
    e.target.classList.add('selected');

    const pute = document.getElementById('tasks');
    const petiot = pute.children;

    i = 0;
    while (i < petiot.length) {
      petiot[i].classList.remove('none');
      i++;
    }
    document.getElementById('createTask').style.display = 'flex';

    if (e.target.outerText === 'Completed') {
      let i = 0;
      while (i < petiot.length) {
        if (!petiot[i].children[0].checked) petiot[i].classList.add('none');
        i++;
      }
      document.getElementById('createTask').style.display = 'none';
    }
    if (e.target.outerText === 'Active') {
      let i = 0;
      while (i < petiot.length) {
        if (petiot[i].children[0].checked) petiot[i].classList.add('none');
        i++;
      }
    }
  }
});
