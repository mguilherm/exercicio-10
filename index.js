function media() {
  var nota01, nota02, nota03;

  nota01 = Number(document.getElementById("nota01").value);
  nota02 = Number(document.getElementById("nota02").value);
  nota03 = Number(document.getElementById("nota03").value);

  nota01 *= 2 / 10;
  nota02 *= 3 / 10;
  nota03 *= 5 / 10;

  media = (nota01 + nota02 + nota03).toFixed(1);

  document.getElementById("media").innerHTML =
    "A média das 3 notas foi: " + media;
}

function senhaFixa() {
  var senhaDigitada = Number(document.getElementById("senhaDigitada").value);

  if (senhaDigitada == "2002") {
    document.getElementById("senha").innerHTML = "Acesso Permitido.";
    alert("Bem Vindo!");
  } else {
    alert("Senha Incorreta. Tente Novamente");
    document.getElementById("senha").innerHTML = "";
  }
}

function qualIntervalo() {
  var valor = Number(document.getElementById("valor").value);

  if (valor > -1 && valor < 25.01) {
    document.getElementById("noIntervalo").innerHTML =
      "O número " + valor + " está no Intervalo [0,25]";
  } else if (valor > 25 && valor < 50.01) {
    document.getElementById("noIntervalo").innerHTML =
      "O número " + valor + " está no Intervalo [25,50]";
  } else if (valor > 50 && valor < 75.01) {
    document.getElementById("noIntervalo").innerHTML =
      "O número " + valor + " está no Intervalo [50,75]";
  } else if (valor > 75 && valor < 100.01) {
    document.getElementById("noIntervalo").innerHTML =
      "O número " + valor + " está no Intervalo [75,100]";
  } else {
    document.getElementById("noIntervalo").innerHTML =
      "O número " + valor + " está fora de Intervalo";
  }
}

function novoSalario() {
  var salarioAtual = Number(document.getElementById("salarioAtual").value);

  if (salarioAtual > 0 && salarioAtual < 400.01) {
    reajusteSalario = salarioAtual * 0.15;
    novoSalario = (reajusteSalario + salarioAtual).toFixed(2).replace(".", ",");
    document.getElementById("novoSalario").innerHTML =
      "Seu novo salário é de " +
      novoSalario +
      ". Seu reajuste foi de 15%, e seu salário atual comparado ao antigo sofreu um acrescimo de R$" +
      reajusteSalario.toFixed(2).replace(".", ",");
  } else if (salarioAtual > 400 && salarioAtual < 800.01) {
    reajusteSalario = salarioAtual * 0.12;
    novoSalario = (reajusteSalario + salarioAtual).toFixed(2).replace(".", ",");
    document.getElementById("novoSalario").innerHTML =
      "Seu novo salário é de " +
      novoSalario +
      ". Seu reajuste foi de 12%, e seu salário atual comparado ao antigo sofreu um acrescimo de R$" +
      reajusteSalario.toFixed(2).replace(".", ",");
  } else if (salarioAtual > 800 && salarioAtual < 1200.01) {
    reajusteSalario = salarioAtual * 0.1;
    novoSalario = (reajusteSalario + salarioAtual).toFixed(2).replace(".", ",");
    document.getElementById("novoSalario").innerHTML =
      "Seu novo salário é de " +
      novoSalario +
      ". Seu reajuste foi de 10%, e seu salário atual comparado ao antigo sofreu um acrescimo de R$" +
      reajusteSalario.toFixed(2).replace(".", ",");
  } else if (salarioAtual > 1.2 && salarioAtual < 2000.01) {
    reajusteSalario = salarioAtual * 0.07;
    novoSalario = (reajusteSalario + salarioAtual).toFixed(2).replace(".", ",");
    document.getElementById("novoSalario").innerHTML =
      "Seu novo salário é de " +
      novoSalario +
      ". Seu reajuste foi de 7%, e seu salário atual comparado ao antigo sofreu um acrescimo de R$" +
      reajusteSalario.toFixed(2).replace(".", ",");
  } else if (salarioAtual > 2000) {
    reajusteSalario = salarioAtual * 0.04;
    novoSalario = (reajusteSalario + salarioAtual).toFixed(2).replace(".", ",");
    document.getElementById("novoSalario").innerHTML =
      "Seu novo salário é de " +
      novoSalario +
      ". Seu reajuste foi de 4%, e seu salário atual comparado ao antigo sofreu um acrescimo de R$" +
      reajusteSalario.toFixed(2).replace(".", ",");
  } else {
    alert("Salário Inválido, tente novamente.");
  }
}

function impostoAPagar() {
  var renda = document.getElementById("renda").value;

  if (renda > 0 && renda < 2000.01) {
    document.getElementById("impostoAPagar").innerHTML = "Isento de Imposto";
  } else if (renda > 2000 && renda < 3000.01) {
    taxa = (renda * 0.08).toFixed(2).replace(".", ",");
    document.getElementById("impostoAPagar").innerHTML = "Imposto: R$ " + taxa;
  } else if (renda > 3000 && renda < 4500.01) {
    taxa = (renda * 0.18).toFixed(2).replace(".", ",");
    document.getElementById("impostoAPagar").innerHTML = "Imposto: R$ " + taxa;
  } else if (renda > 4500) {
    taxa = (renda * 0.28).toFixed(2).replace(".", ",");
    document.getElementById("impostoAPagar").innerHTML = "Imposto: R$ " + taxa;
  } else {
    document.getElementById("impostoAPagar").innerHTML =
      "Valor INCORRETO. Tente Novamente";
  }
}
