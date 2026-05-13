const imagem = document.getElementById("visualizar");
const nomeP = document.getElementById("nomeP");
const info = document.getElementById("descricao");
const ingred = document.getElementById("ingredientes");

const card1 = document.getElementById("opcao-Calabresa");

card1.addEventListener("click", () => {
    imagem.src = "imagems/pizza_calabresa_e_mussarela_4389_orig.jpg";
    nomeP.textContent = "Pizza de Calabresa";
    info.textContent = "Uma clássica irresistível que conquista desde a primeira fatia. Nossa Pizza Calabresa é feita sobre massa artesanal de fermentação lenta, generosamente coberta com molho de tomate San Marzano temperado com manjericão fresco. Fatias finas de linguiça calabresa defumada são distribuídas com fartura, acompanhadas de cebola roxa em rodelas e azeitonas pretas selecionadas. Finalizada com mussarela de primeira qualidade, gratinada no forno à lenha até atingir a cor dourada perfeita.";
    ingred.textContent = "Ingredientes: massa artesanal, molho de tomate, mussarela, linguiça calabresa defumada, cebola roxa, azeitonas pretas, manjericão, azeite de oliva.";
})


const card2 = document.getElementById("opcao-Costela");

card2.addEventListener("click", () => {
    imagem.src = "imagems/bife-e-cebola-caramelizada-com-queijo-suico-e-rucula-780x520.jpg";
    nomeP.textContent = "Pizza de Costela";
    info.textContent = "Para os amantes de sabores intensos e reconfortantes. Nossa Pizza Costela é construída sobre uma massa artesanal de borda alta e crocante, coberta com um generoso molho de tomate levemente adocicado. O destaque fica por conta da costela bovina desfiada, cozida lentamente por horas até atingir uma maciez que derrete na boca, com aquele sabor defumado inconfundível. Complementada com mussarela cremosa, pimentões coloridos e um toque de alho dourado, cada fatia é uma experiência completa.";
    ingred.textContent = "Ingredientes: massa artesanal, molho de tomate, mussarela, costela bovina desfiada, pimentão vermelho e amarelo, alho dourado, cebola caramelizada, salsinha, azeite de oliva.";
})

const card3 = document.getElementById("opcao-Mussarela");

card3.addEventListener("click", () => {
    imagem.src = "imagems/2-12.png";
    nomeP.textContent = "Pizza de Mussarela";
    info.textContent = "A rainha das pizzas, simples e perfeita. Nossa Pizza Mussarela celebra a elegância dos ingredientes de qualidade: massa artesanal fininha, molho de tomate San Marzano com toque de manjericão e uma cobertura generosa de mussarela fresca, gratinada até formar aquela camada dourada e borbulhante irresistível. Um clássico atemporal que agrada a todos.";
    ingred.textContent = "Ingredientes: massa artesanal, molho de tomate, mussarela fresca, manjericão, azeite de oliva, oregano.";
})

const card4 = document.getElementById("opcao-Escarola");

card4.addEventListener("click", () => {
    imagem.src = "imagems/Pizza-de-calabresa-e-escarola.jpg";
    nomeP.textContent = "Pizza de Escarola";
    info.textContent = "Sofisticada e cheia de personalidade. Nossa Pizza Escarola traz uma combinação surpreendente e equilibrada: folhas de escarola refogadas no alho e azeite, com aquele leve amargor característico que harmoniza perfeitamente com a mussarela cremosa. Finalizada com azeitonas pretas e um fio de azeite extra virgem, é a escolha certa para quem busca algo diferente e refinado.";
    ingred.textContent = "Ingredientes: massa artesanal, molho de tomate, mussarela, escarola refogada, alho, azeitonas pretas, azeite extra virgem, pimenta-do-reino.";
})

const card5 = document.getElementById("opcao-Carbonara");

card5.addEventListener("click", () => {
    imagem.src = "imagems/pizza-carbonara-com-bacon-74898136.webp";
    nomeP.textContent = "Pizza de Carbonara";
    info.textContent = "Uma viagem à Itália em cada fatia. Inspirada no clássico macarrão romano, nossa Pizza Carbonara substitui o molho de tomate por um cremoso molho à base de ovos e queijo parmesão curado. Coberta com tiras de bacon crocante, cebola caramelizada e generosa quantidade de mussarela, é finalizada com pimenta-do-reino moída na hora. Intensa, cremosa e absolutamente irresistível.";
    ingred.textContent = "Ingredientes: massa artesanal, molho carbonara (ovos, parmesão, creme de leite), mussarela, bacon, cebola caramelizada, pimenta-do-reino, salsinha.";
})

const card6 = document.getElementById("opcao-4queijos");

card6.addEventListener("click", () => {
    imagem.src = "imagems/b762eabc40805110c7f70d63db021b39.jpg";
    nomeP.textContent = "Pizza de 4 Queijos";
    info.textContent = "O paraíso dos amantes de queijo. Nossa Pizza 4 Queijos reúne uma seleção harmoniosa de queijos cuidadosamente escolhidos, cada um contribuindo com seu sabor e textura únicos. A combinação de mussarela cremosa, gorgonzola marcante, parmesão curado e catupiry aveludado forma uma cobertura rica e encorpada que derrete uniformemente sobre a massa artesanal. Um espetáculo de sabores que se complementam a cada mordida.";
    ingred.textContent = "Ingredientes: massa artesanal, mussarela, gorgonzola, parmesão, catupiry, azeite de oliva, orégano.";
})

const card7 = document.getElementById("opcao-Chilli");

card7.addEventListener("click", () => {
    imagem.src = "imagems/vista-superior-de-pizza-com-pimenta-vermelha-e-ingredientes_23-2148765345.avif";
    nomeP.textContent = "Pizza de Chilli";
    info.textContent = "Para quem gosta de emoção no paladar. Nossa Pizza Chilli é uma explosão de sabor com personalidade marcante: carne moída temperada com pimenta chilli, cominho e páprica defumada, sobre molho de tomate encorpado e mussarela derretida. Finalizada com jalapeños em rodelas, cebola roxa e um fio de cream cheese, entrega aquele calor agradável que aquece por dentro sem abrir mão do sabor.";
    ingred.textContent = "Ingredientes: massa artesanal, molho de tomate, mussarela, carne moída temperada, pimenta chilli, jalapeño, cebola roxa, cream cheese, páprica defumada, cominho.";
})

const card8 = document.getElementById("opcao-Carne");

card8.addEventListener("click", () => {
    imagem.src = "imagems/swcs29ctxqcsnvabzknj.webp";
    nomeP.textContent = "Pizza de Carne";
    info.textContent = "Robusta, suculenta e feita para saciar. Nossa Pizza Carne é a escolha dos apreciadores de sabores intensos: carne moída temperada com ervas frescas e alho, distribuída com fartura sobre o molho de tomate artesanal e mussarela de alta qualidade. Cebola ao molho, pimentão e um toque de chimichurri finalizam essa pizza que remete ao melhor churrasco em cada fatia.";
    ingred.textContent = "Ingredientes: massa artesanal, molho de tomate, mussarela, carne moída, cebola, pimentão, alho, chimichurri, salsinha, azeite de oliva.";
})

const scroll = document.querySelector('.carrousel')

scroll.addEventListener("wheel", (e) => {
    e.preventDefault();
    scroll.scrollLeft += e.deltaY
})