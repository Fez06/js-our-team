'use strict';

//creazione array

/*const team = [
    'Wayne Barnett', 
    'Angela Caroll', 
    'Walter Gordon', 
    'Angela Lopez', 
    'Scott Estrada', 
    'Barbara Ramos'
];*/

const team = [
    {
    nome: 'Wayne Barnett',
    ruolo: 'Founder & CEO',
    pic: 'wayne-barnett-founder-ceo.jpg'
},
{
    nome: 'Angela Caroll',
    ruolo: 'Chief Editor',
    pic: 'angela-caroll-chief-editor.jpg'
},
{
    nome: 'Walter Gordon',
    ruolo: 'Office Manager',
    pic: 'walter-gordon-office-manager.jpg'
},
{
    nome: 'Angela Lopez',
    ruolo: 'Social Media Manager',
    pic: 'angela-lopez-social-media-manager.jpg'
},
{
    nome: 'Scott Estrada',
    ruolo: 'Developer',
    pic: 'scott-estrada-developer.jpg'
},
{
    nome: 'Barbara Ramos',
    ruolo: 'Graphic Designer',
    pic: 'barbara-ramos-graphic-designer.jpg'
}
];
//console.log(team);

//diamo valori che descrivano gli oggetti

/*team['Wayne Barnett'] = {
    nome: 'Wayne Barnett',
    ruolo: 'Founder & CEO',
    pic: 'wayne-barnett-founder-ceo.jpg'
};

console.log(team['Wayne Barnett']);

team['Angela Caroll'] = {
    nome: 'Angela Caroll',
    ruolo: 'Chief Editor',
    pic: 'angela-caroll-chief-editor.jpg'
};

team['Walter Gordon'] = {
    nome: 'Walter Gordon',
    ruolo: 'Office Manager',
    pic: 'walter-gordon-office-manager.jpg'
};

team['Angela Lopez'] = {
    nome: 'Angela Lopez',
    ruolo: 'Social Media Manager',
    pic: 'angela-lopez-social-media-manager.jpg'
};

team['Scott Estrada'] = {
    nome: 'Scott Estrada',
    ruolo: 'Developer',
    pic: 'scott-estrada-developer.jpg'
};

team['Barbara Ramos'] = {
    nome: 'Barbara Ramos',
    ruolo: 'Graphic Designer',
    pic: 'barbara-ramos-graphic-designer.jpg'
};*/

//ora ciclo team per vedere se e' corretto e per il mio punto 3

/*for (let details in team) {
    console.log()
    console.log(team[details])
};*/


//ora ultima milestone, stampo i details nel dom

const mainWall = document.querySelector('main');



for (let detail in team) {
    //console.log()
    //console.log(team[details])
    const ul = document.createElement('ul');
    mainWall.append(ul);

    let profileHtml1 = document.createElement('li');
    profileHtml1.innerHTML = team[detail].nome;
    ul.append(profileHtml1);

    let profileHtml2 = document.createElement('li');
    profileHtml2.innerHTML = team[detail].ruolo;
    ul.append(profileHtml2);

    let profileHtml3 = document.createElement('li');
    profileHtml3.innerHTML = team[detail].pic;
    ul.append(profileHtml3);

    //console.log(team);
};