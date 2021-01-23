const submitBtn = document.getElementById('submit');
const passwordInput = document.getElementById('password');
const form = document.getElementById('form');
const alphabeticalOrder = /^[a|A]*[b|B]*[c|C]*[d|D]*[e|E]*[f|F]*[g|G]*[h|H]*[i|I]*[j|J]*[k|K]*[l|L]*[m|M]*[n|N]*[o|O]*[p|P]*[q|Q]*[r|R]*[s|S]*[t|T]*[u|U]*[v|V]*[w|W]*[x|X]*[y|Y]*[z|Z]*$/;
const typicalStrings = /\b(\w*asd\w*|\w*qwert\w*|\w*uiop\w*|\w*zxcv\w*)\b/;

(passwordValidation = () => {
  passwordInput.addEventListener('keyup', () => {
    let password = passwordInput.value;

    if (password.length > 7) {
      document.querySelector('.length').classList.add('active');
      document.querySelector('.length').classList.remove('inactive');
    } else {
      document.querySelector('.length').classList.add('inactive');
      document.querySelector('.length').classList.remove('active');
    }

    if (typicalStrings.test(password)) {
      document.querySelector('.typical-characters').classList.add('inactive');
      document.querySelector('.typical-characters').classList.remove('active');
    } else {
      document.querySelector('.typical-characters').classList.add('active');
      document
        .querySelector('.typical-characters')
        .classList.remove('inactive');
    }

    if (/(.)\1/.test(password)) {
      document.querySelector('.repeating-characters').classList.add('inactive');
      document
        .querySelector('.repeating-characters')
        .classList.remove('active');
    } else {
      document.querySelector('.repeating-characters').classList.add('active');
      document
        .querySelector('.repeating-characters')
        .classList.remove('inactive');
    }

    if (alphabeticalOrder.test(password)) {
      document.querySelector('.alphabetical-order').classList.add('inactive');
      document.querySelector('.alphabetical-order').classList.remove('active');
    } else {
      document.querySelector('.alphabetical-order').classList.add('active');
      document
        .querySelector('.alphabetical-order')
        .classList.remove('inactive');
    }

    if (/[A-Z]/.test(password)) {
      document.querySelector('.uppercase').classList.add('active');
      document.querySelector('.uppercase').classList.remove('inactive');
    } else {
      document.querySelector('.uppercase').classList.remove('active');
      document.querySelector('.uppercase').classList.add('inactive');
    }

    if (/[0-9]/.test(password)) {
      document.querySelector('.number').classList.add('active');
      document.querySelector('.number').classList.remove('inactive');
    } else {
      document.querySelector('.number').classList.add('inactive');
      document.querySelector('.number').classList.remove('active');
    }

    if (/[^A-Za-z0-9]/.test(password)) {
      document.querySelector('.special').classList.add('active');
      document.querySelector('.special').classList.remove('inactive');
    } else {
      document.querySelector('.special').classList.add('inactive');
      document.querySelector('.special').classList.remove('active');
    }

    const divList = document.getElementsByTagName('div');
    if (!password.length) {
      for (let i = 0; i < divList.length; i++) {
        divList[i].classList.remove('active');
        divList[i].classList.remove('inactive');
        divList[i].classList.add('reset');
      }
    }
  });
})();
