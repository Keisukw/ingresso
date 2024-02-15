function comprar() {
    let tipo = document.getElementById('tipo-ingresso').value;
    let qtd = parseInt(document.getElementById('qtd').value);
    let qtdDisponivel = document.getElementById(`qtd-${tipo}`);

    if (qtd > 0) {
        if (qtd <= qtdDisponivel.innerHTML) {
            let newQtd = qtdDisponivel.innerHTML - qtd;
            if (newQtd >= 0) {
                qtdDisponivel.innerText = newQtd;
            } else {
                alert('Quantidade indisponível');
            }
        } else {
            alert('Quantidade indisponível');
        }
    } else {
        alert('Por favor, preencha o campo quantidade corretamente!');
    }
}