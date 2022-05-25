function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
 
// Exercício 1: 
// Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days". Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.
// Os dias devem estar contidos em uma tag <li>, e todos devem ter a classe day. Ex: <li class="day">3</li>
// Os dias 24, 25 e 31 são feriados e, além da classe day, devem conter também a classe holiday. Ex: <li class="day holiday">24</li>
// Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday. Ex: <li class="day friday">4</li>  

function createDaysOfTheMonth() {
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const daysMonth = document.querySelector('#days');

    for (let index = 0; index < dezDaysList.length; index += 1) {
        const days = dezDaysList[index];
        const daylistItem = document.createElement('li');
        daylistItem.innerHTML = days;
        daylistItem.classList.add('day');
        
        if (days === 24 || days === 25 || days === 31) {
            daylistItem.classList.add('holiday');
        }
        
        if (days === 4 || days === 11 || days === 18 || days === 25) {
            daylistItem.classList.add('friday');
        }

        daysMonth.appendChild(daylistItem);
    };
};

createDaysOfTheMonth();

// Exercício 2:
// Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
// Adicione a este botão a ID "btn-holiday".
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container".

function buttonHolidays(string) {
    const buttons = document.querySelector('.buttons-container');
    
    const holiday = document.createElement('button');
    holiday.innerHTML = string;
    holiday.id = 'btn-holiday';
    
    buttons.appendChild(holiday);
}

let str = 'Feriados';
buttonHolidays(str);

// Exercício 3:
// Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday".
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)".

function changeColorHolidays() {
    const holidaysClass = document.querySelectorAll('.holiday')
    const holidayColor = 'red';
    const standardColor = 'rgb(238,238,238)';

    for (let i = 0; i < holidaysClass.length; i += 1) {
        if (holidaysClass[i].style.backgroundColor === holidayColor) {    
        holidaysClass[i].style.backgroundColor = standardColor;
        } else {
            holidaysClass[i].style.backgroundColor = holidayColor;
        }
    }
}
const colorButton = document.querySelector('#btn-holiday');
colorButton.addEventListener('click', changeColorHolidays);

// Exercício 4:
// Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
// Adicione a este botão o ID "btn-friday".
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container".

function createButtonFriday(string) {
    const buttons = document.querySelector('.buttons-container');
    
    const friday = document.createElement('button');
    friday.innerHTML = string;
    friday.id = 'btn-friday';
    
    buttons.appendChild(friday);
}

let strFriday= 'Sexta-feira';
createButtonFriday(strFriday);

//Exercício 5:
// Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.

function changeColorFridays() {
    const fridayClass = document.querySelectorAll('.friday');
    const standardColor = '#777';
    const newColor = 'yellow'; 
    
    for(let i = 0; i < fridayClass.length; i += 1) {
        if (fridayClass[i].style.color === newColor) {
            fridayClass[i].style.color = standardColor;
        } else {
            fridayClass[i].style.color = newColor
        }
    }
}

const buttonFriday = document.querySelector('#btn-friday');
buttonFriday.addEventListener('click', changeColorFridays);

// Exercício 6:
// Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
// Dica - Propriedade: event.target.

function zoom() {
    let textDay = document.querySelector('#days');
    textDay.addEventListener('mouseover', function(event) {
      event.target.style.fontSize = '40px';
    });
}

zoom()
  
function zoomLeave() {
    let textDay = document.querySelector('#days');
    textDay.addEventListener('mouseout', function(event) {
      event.target.style.fontSize = '20px';
    });
}

zoomLeave()

// Exercício 7:
// Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".

function addTasks(task) {
    let taskElement = document.createElement('span');
    taskElement.innerText = task;
    
    const myTasks = document.querySelector('.my-tasks');
    myTasks.appendChild(taskElement);
};

addTasks('Estudar para arrebentar no projeto!!!!');

// Exercício 8:
// Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task.
// O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".

function colorTask(color) {
    const taskColor = document.createElement('div');
    taskColor.className = 'task';
    taskColor.style.backgroundColor = color

    const myTasks = document.querySelector('.my-tasks');
    myTasks.appendChild(taskColor)
};

colorTask('green')

//Exercício 9:
// Implemente uma função que adiciona um evento que, ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected, ou seja, quando sua tarefa possuir a classe task selected, ela estará selecionada.
// Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task, ou seja, esta tarefa está deixando de ser uma tarefa selecionada.

const task = document.querySelector('.task');
const taskClicked = document.getElementsByClassName('task selected')

task.addEventListener('click', function(event) {
    if (taskClicked.length === 0) {
        event.target.className = 'task selected';
    } else {
        event.target.className = 'task';
    }
}
);

// Exercício 10:
// Implemente uma função que adiciona um evento que, ao clicar em um dia do mês no calendário, atribua a este dia a cor da legenda da sua tarefa selecionada.
// Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119).



// Bônus:
// Vamos adicionar compromissos ao seu calendário? Implemente uma função que, ao digitar um compromisso na caixa de texto "COMPROMISSOS", adiciona o item à lista "MEUS COMPROMISSOS" ao clicar no botão "ADICIONAR".
// Se nenhum caractere for inserido no campo input, a função deve retornar um alert com uma mensagem de erro ao clicar em "ADICIONAR".
// Ao pressionar a tecla "enter" o evento também deverá ser disparado.
// Dica - Propriedade: key.