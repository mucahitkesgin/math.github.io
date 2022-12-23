

function üstel() {
    var taban = document.getElementById("taban").value
    var üs = document.getElementById("üs").value
    if (+taban < 0 && +üs < 0) {
      document.getElementById("üstelsonuç").innerHTML = `(${+taban})<sup>(${+üs})</sup> = (${Math.pow(+taban, +üs)})`;
      console.log(`(${+taban})<sup>(${+üs})</sup> = (${Math.pow(+taban, +üs)})`);
    }
    else if (+taban < 0 && +üs >= 0 && +üs%2 === 0) {
      document.getElementById("üstelsonuç").innerHTML = `(${+taban})<sup>${+üs}</sup> = ${Math.pow(+taban, +üs)}`;
      console.log(`(${+taban})<sup>${+üs}</sup> = ${Math.pow(+taban, +üs)}`);
    }
    else if (+taban < 0 && +üs >= 0 && +üs%2 === 1) {
      document.getElementById("üstelsonuç").innerHTML = `(${+taban})<sup>${+üs}</sup> = (${Math.pow(+taban, +üs)})`;
      console.log(`(${+taban})<sup>${+üs}</sup> = (${Math.pow(+taban, +üs)})`);
    }
    else if (+taban >= 0 && +üs < 0) {
      document.getElementById("üstelsonuç").innerHTML = `${+taban}<sup>(${+üs})</sup> = ${Math.pow(+taban, +üs)}`;
      console.log(`${+taban}<sup>(${+üs})</sup> = ${Math.pow(+taban, +üs)}`);
    }
    else  {
      document.getElementById("üstelsonuç").innerHTML = `${+taban}<sup>${+üs}</sup> = ${Math.pow(+taban, +üs)}`;
      console.log(`${+taban}<sup>${+üs}</sup> = ${Math.pow(+taban, +üs)}`);
    }
  }

function üsteltemizle() {
    document.getElementById("üstelsonuç").innerHTML = 'Sonuç';
    document.getElementById('taban').value = '';
    document.getElementById('üs').value = '';
    console.clear()
  }

function faktöriyel() {
  var sayı = document.getElementById("faktöriyelsayı").value;

    if (+sayı < 0) {
      document.getElementById("faktöriyelsonuç").innerHTML = ('Sayı negatif olamaz!');
      console.log(`Sayı negatif olamaz!`);
    }
    else if (+sayı === 0) {
      document.getElementById("faktöriyelsonuç").innerHTML = ('1');
      console.log(`${+sayı}! = 1`);
    }
    else {
      let x = 1;
      for (i = 1; i <= +sayı; i++) {
          x *= i;
      }
      document.getElementById("faktöriyelsonuç").innerHTML = (`${Math.floor(+sayı)}! = ${x}`);
      console.log(`${+sayı}! = ${x}`);
    }
  }

function faktöriyeltemizle() {
    document.getElementById("faktöriyelsonuç").innerHTML = 'Sonuç';
    document.getElementById('faktöriyelsayı').value = '';
    console.clear()
  }

function yüzde() {
    var sayı = document.getElementById("yüzdesayı").value;
    var yüzde = document.getElementById("yüzde").value;
    var sonuç = +sayı * +yüzde / 100
    document.getElementById("yüzdesonuç").innerHTML = +sonuç;
    console.log(`${sayı} -> %${yüzde}  = ${+sonuç}`);
  }

function yüzdetemizle() {
    document.getElementById("yüzdesonuç").innerHTML = 'Sonuç';
    document.getElementById('yüzdesayı').value = '';
    document.getElementById('yüzde').value = '';
    console.clear()
  }

function topla() {
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var sonuç = +a + +b;
    if (+a < 0 && +sonuç < 0) {
      document.getElementById("hesapmakinesisonuç").innerHTML = `(${+a}) + ${+b} = (${+a + +b})`;
      console.log(`(${+a}) + ${+b} = (${+a + +b})`);
    }
    else if (+a < 0 && +sonuç >= 0) {
      document.getElementById("hesapmakinesisonuç").innerHTML = `(${+a}) + ${+b} = ${+a + +b}`;
      console.log(`(${+a}) + ${+b} = (${+a + +b})`);
    }
    else if (+b < 0 && +sonuç < 0) {
      document.getElementById("hesapmakinesisonuç").innerHTML = `${+a} + (${+b}) = (${+a + +b})`;
      console.log(`${+a} + (${+b}) = (${+a + +b})`);
    }
    else if (+b < 0 && +sonuç >= 0) {
      document.getElementById("hesapmakinesisonuç").innerHTML = `${+a} + (${+b}) = ${+a + +b}`;
      console.log(`${+a} + (${+b}) = (${+a + +b})`);
    }
    else if (+a > 0 && +b > 0 && +sonuç < 0) {
      document.getElementById("hesapmakinesisonuç").innerHTML = `${+a} + ${+b} = (${+a + +b})`;
      console.log(`${+a} + (${+b}) = (${+a + +b})`);
    }
    else {
      document.getElementById("hesapmakinesisonuç").innerHTML = `${+a} + ${+b} = ${+a + +b}`;
      console.log(`${+a} + ${+b} = ${+a + +b}`);
    }
    
  }

function çıkar() {
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var sonuç = +a - +b;
    if (+a < 0 && +sonuç < 0) {
      document.getElementById("hesapmakinesisonuç").innerHTML = `(${+a}) - ${+b} = (${+a - +b})`;
      console.log(`(${+a}) - ${+b} = (${+a - +b})`);
    }
    else if (+a < 0 && +sonuç >= 0) {
      document.getElementById("hesapmakinesisonuç").innerHTML = `(${+a}) - ${+b} = ${+a - +b}`;
      console.log(`(${+a}) - ${+b} = (${+a - +b})`);
    }
    else if (+b < 0 && +sonuç < 0) {
      document.getElementById("hesapmakinesisonuç").innerHTML = `${+a} - (${+b}) = (${+a - +b})`;
      console.log(`${+a} - (${+b}) = (${+a - +b})`);
    }
    else if (+b < 0 && +sonuç >= 0) {
      document.getElementById("hesapmakinesisonuç").innerHTML = `${+a} - (${+b}) = ${+a - +b}`;
      console.log(`${+a} - (${+b}) = (${+a - +b})`);
    }
    else if (+a > 0 && +b > 0 && +sonuç < 0) {
      document.getElementById("hesapmakinesisonuç").innerHTML = `${+a} - ${+b} = (${+a - +b})`;
      console.log(`${+a} + (${+b}) = (${+a - +b})`);
    }
    else if (+a < 0 && +b > 0 && +sonuç < 0) {
      document.getElementById("hesapmakinesisonuç").innerHTML = `(${+a}) - ${+b} = (${+a - +b})`;
      console.log(`(${+a}) + ${+b} = (${+a - +b})`);
    }
    else if (+a > 0 && +b < 0 && +sonuç < 0) {
      document.getElementById("hesapmakinesisonuç").innerHTML = `${+a} - (${+b}) = (${+a - +b})`;
      console.log(`${+a} + (${+b}) = (${+a - +b})`);
    }
    else {
      document.getElementById("hesapmakinesisonuç").innerHTML = `${+a} - ${+b} = ${+a - +b}`;
      console.log(`${+a} - ${+b} = ${+a - +b}`);
    }
}

function çarp() {
  var a = document.getElementById("a").value;
  var b = document.getElementById("b").value;
  var sonuç = +a * +b;
    if (+a < 0 && +sonuç < 0) {
      document.getElementById("hesapmakinesisonuç").innerHTML = `(${+a}) × ${+b} = (${+a * +b})`;
      console.log(`(${+a}) × ${+b} = (${+a * +b})`);
    }
    else if (+a < 0 && +sonuç >= 0) {
      document.getElementById("hesapmakinesisonuç").innerHTML = `(${+a}) × ${+b} = ${+a * +b}`;
      console.log(`(${+a}) × ${+b} = (${+a * +b})`);
    }
    else if (+b < 0 && +sonuç < 0) {
      document.getElementById("hesapmakinesisonuç").innerHTML = `${+a} × (${+b}) = (${+a * +b})`;
      console.log(`${+a} × (${+b}) = (${+a * +b})`);
    }
    else if (+b < 0 && +sonuç >= 0) {
      document.getElementById("hesapmakinesisonuç").innerHTML = `${+a} × (${+b}) = ${+a * +b}`;
      console.log(`${+a} × (${+b}) = (${+a * +b})`);
    }
    else {
      document.getElementById("hesapmakinesisonuç").innerHTML = `${+a} × ${+b} = ${+a * +b}`;
      console.log(`${+a} × ${+b} = ${+a * +b}`);
    }
}

function böl() {
  var a = document.getElementById("a").value;
  var b = document.getElementById("b").value;
  var sonuç = +a / +b;
    if (+a < 0 && +sonuç < 0) {
      document.getElementById("hesapmakinesisonuç").innerHTML = `(${+a}) ÷ ${+b} = (${+a / +b})`;
      console.log(`(${+a}) ÷ ${+b} = (${+a / +b})`);
    }
    else if (+a < 0 && +sonuç >= 0) {
      document.getElementById("hesapmakinesisonuç").innerHTML = `(${+a}) ÷ ${+b} = ${+a / +b}`;
      console.log(`(${+a}) ÷ ${+b} = (${+a / +b})`);
    }
    else if (+b < 0 && +sonuç < 0) {
      document.getElementById("hesapmakinesisonuç").innerHTML = `${+a} ÷ (${+b}) = (${+a / +b})`;
      console.log(`${+a} ÷ (${+b}) = (${+a / +b})`);
    }
    else if (+b < 0 && +sonuç >= 0) {
      document.getElementById("hesapmakinesisonuç").innerHTML = `${+a} ÷ (${+b}) = ${+a / +b}`;
      console.log(`${+a} ÷ (${+b}) = (${+a / +b})`);
    }
    else {
      document.getElementById("hesapmakinesisonuç").innerHTML = `${+a} ÷ ${+b} = ${+a / +b}`;
      console.log(`${+a} ÷ ${+b} = ${+a / +b}`);
    }
}

function çevir() {
  var a = document.getElementById("a").value;
  var b = document.getElementById("b").value;
  var sonuç = document.getElementById("hesapmakinesisonuç").innerHTML;
  if(sonuç === (document.getElementById("hesapmakinesisonuç").innerHTML = `(${+a}) + ${+b} = (${+a + +b})`)) {
    document.getElementById("hesapmakinesisonuç").innerHTML = `${+b} + (${+a}) = (${+b + +a})`;
  }
  else if(sonuç === (document.getElementById("hesapmakinesisonuç").innerHTML = `(${+a}) + ${+b} = ${+a + +b}`)) {
    document.getElementById("hesapmakinesisonuç").innerHTML = `${+b} + (${+a}) = ${+b + +a}`;
  }
  else if(sonuç === (document.getElementById("hesapmakinesisonuç").innerHTML = `${+a} + (${+b}) = (${+a + +b})`)) {
    document.getElementById("hesapmakinesisonuç").innerHTML = `(${+b}) + ${+a} = (${+b + +a})`;
  }
  else if(sonuç === (document.getElementById("hesapmakinesisonuç").innerHTML = `${+a} + (${+b}) = ${+a + +b}`)) {
    document.getElementById("hesapmakinesisonuç").innerHTML = `(${+b}) + ${+a} = ${+b + +a}`;
  }
  else if(sonuç === (document.getElementById("hesapmakinesisonuç").innerHTML = `${+a} + ${+b} = ${+a + +b}`)) {
    document.getElementById("hesapmakinesisonuç").innerHTML = `${+b} + ${+a} = ${+b + +a}`;
  }
  else if(sonuç === (document.getElementById("hesapmakinesisonuç").innerHTML = `${+a} + ${+b} = (${+a + +b})`)) {
    document.getElementById("hesapmakinesisonuç").innerHTML = `${+b} + ${+a} = (${+b + +a})`;
  }
  else if(sonuç === (document.getElementById("hesapmakinesisonuç").innerHTML = `(${+a}) - ${+b} = (${+a - +b})`)) {
    document.getElementById("hesapmakinesisonuç").innerHTML = `${+b} - (${+a}) = (${+b - +a})`;
  }
  else if(sonuç === (document.getElementById("hesapmakinesisonuç").innerHTML = `(${+a}) - ${+b} = ${+a - +b}`)) {
    document.getElementById("hesapmakinesisonuç").innerHTML = `${+b} - (${+a}) = ${+b - +a}`;
  }
  else if(sonuç === (document.getElementById("hesapmakinesisonuç").innerHTML = `${+a} - (${+b}) = (${+a - +b})`)) {
    document.getElementById("hesapmakinesisonuç").innerHTML = `(${+b}) - ${+a} = (${+b - +a})`;
  }
  else if(sonuç === (document.getElementById("hesapmakinesisonuç").innerHTML = `${+a} - (${+b}) = ${+a - +b}`)) {
    document.getElementById("hesapmakinesisonuç").innerHTML = `(${+b}) - ${+a} = (${+b - +a})`;
  }
  else if(sonuç === (document.getElementById("hesapmakinesisonuç").innerHTML = `${+a} - ${+b} = ${+a - +b}`)) {
    document.getElementById("hesapmakinesisonuç").innerHTML = `${+b} - ${+a} = ${+b - +a}`;
  }
  else if(sonuç === (document.getElementById("hesapmakinesisonuç").innerHTML = `${+a} - ${+b} = (${+a - +b})`)) {
    document.getElementById("hesapmakinesisonuç").innerHTML = `${+b} - ${+a} = ${+b - +a}`;
  }
  else if(sonuç === (document.getElementById("hesapmakinesisonuç").innerHTML = `(${+a}) - ${+b} = (${+a - +b})`)) {
    document.getElementById("hesapmakinesisonuç").innerHTML = `${+b} - (${+a}) = (${+b - +a})`;
  }
  else if(sonuç === (document.getElementById("hesapmakinesisonuç").innerHTML = `${+a} - (${+b}) = (${+a - +b})`)) {
    document.getElementById("hesapmakinesisonuç").innerHTML = `(${+b}) - ${+a} = (${+b - +a})`;
  }
  else if(sonuç === (document.getElementById("hesapmakinesisonuç").innerHTML = `(${+a}) × ${+b} = (${+a * +b})`)) {
    document.getElementById("hesapmakinesisonuç").innerHTML = `${+b} × (${+a}) = (${+b * +a})`;
  }
  else if(sonuç === (document.getElementById("hesapmakinesisonuç").innerHTML = `(${+a}) × ${+b} = ${+a * +b}`)) {
    document.getElementById("hesapmakinesisonuç").innerHTML = `${+b} × (${+a}) = ${+b * +a}`;
  }
  else if(sonuç === (document.getElementById("hesapmakinesisonuç").innerHTML = `${+a} × (${+b}) = (${+a * +b})`)) {
    document.getElementById("hesapmakinesisonuç").innerHTML = `(${+b}) × ${+a} = (${+b * +a})`;
  }
  else if(sonuç === (document.getElementById("hesapmakinesisonuç").innerHTML = `${+a} × (${+b}) = ${+a * +b}`)) {
    document.getElementById("hesapmakinesisonuç").innerHTML = `(${+b}) × ${+a} = ${+b * +a}`;
  }
  else if(sonuç === (document.getElementById("hesapmakinesisonuç").innerHTML = `${+a} × ${+b} = ${+a * +b}`)) {
    document.getElementById("hesapmakinesisonuç").innerHTML = `${+b} × ${+a} = ${+b * +a}`;
  }
  else if(sonuç === (document.getElementById("hesapmakinesisonuç").innerHTML = `(${+a}) ÷ ${+b} = (${+a / +b})`)) {
    document.getElementById("hesapmakinesisonuç").innerHTML = `${+b} ÷ (${+a}) = (${+b / +a})`;
  }
  else if(sonuç === (document.getElementById("hesapmakinesisonuç").innerHTML = `(${+a}) ÷ ${+b} = ${+a / +b}`)) {
    document.getElementById("hesapmakinesisonuç").innerHTML = `${+b} ÷ (${+a}) = ${+b / +a}`;
  }
  else if(sonuç === (document.getElementById("hesapmakinesisonuç").innerHTML = `${+a} ÷ (${+b}) = (${+a / +b})`)) {
    document.getElementById("hesapmakinesisonuç").innerHTML = `(${+b}) ÷ ${+a} = (${+b / +a})`;
  }
  else if(sonuç === (document.getElementById("hesapmakinesisonuç").innerHTML = `${+a} ÷ (${+b}) = ${+a / +b}`)) {
    document.getElementById("hesapmakinesisonuç").innerHTML = `(${+b}) ÷ ${+a} = ${+b / +a}`;
  }
  else if(sonuç === (document.getElementById("hesapmakinesisonuç").innerHTML = `${+a} ÷ ${+b} = ${+a / +b}`)) {
    document.getElementById("hesapmakinesisonuç").innerHTML = `${+b} ÷ ${+a} = ${+b / +a}`;
  }
  else {
    document.getElementById("hesapmakinesisonuç").innerHTML = sonuç
  }
  console.log(document.getElementById("hesapmakinesisonuç").innerHTML);
}

function hesapmakinesitemizle() {
    document.getElementById("hesapmakinesisonuç").innerHTML = 'Sonuç';
    document.getElementById("a").value = '';
    document.getElementById("b").value = '';
    console.clear();
  }

function yukarıgit() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function openTab(tabName) {
  var i, x;
  x = document.getElementsByClassName("containerTab");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }

  document.getElementById(tabName).style.display = "block";
}