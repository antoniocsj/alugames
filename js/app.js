function alterarStatus(index) {
    let gameId = `game-${index}`;
    console.log(gameId);
    let item = document.getElementById(gameId);
    console.log(item);
    let itemButton = item.querySelector('.dashboard__item__button');
    console.log(itemButton);
    let itemImg = item.querySelector('.dashboard__item__img');
    let itemName = item.querySelector('.dashboard__item__name');

    if (itemImg.classList.contains('dashboard__item__img--rented')) {
        let confirmacao = confirm(`Você tem certeza que deseja devolver o jogo ${itemName.textContent}?`);
        if (confirmacao) {
            itemImg.classList.remove('dashboard__item__img--rented')
            itemButton.classList.remove('dashboard__item__button--return')
            itemButton.textContent = 'Alugar';
        }
    } else {
        let confirmacao = confirm(`Você tem certeza que deseja alugar o jogo ${itemName.textContent}?`);
        if (confirmacao) {
            itemImg.classList.add('dashboard__item__img--rented');
            itemButton.classList.add('dashboard__item__button--return');
            itemButton.textContent = 'Devolver';
        }
    }

    console.log(`numero de jogos alugados = ${numeroJogosAlugados()}`);
}

function numeroJogosAlugados() {
    let itens = document.getElementsByClassName('dashboard__item__img--rented')
    return itens.length;
}
