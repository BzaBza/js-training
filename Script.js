/**
 * Created by ARTUR on 01.08.2017.
 */
    document.querySelector('.personName').style.display = 'none';
    document.querySelector('#hidePerson').onclick = function viewInfo() {
    document.querySelector('.personName').style.display = 'block';
    };
//**if (viewInfo() == true) {
//    document.querySelector('#hidePerson').onclick = function hideInfo() {
//       document.querySelector('.personName').style.display = 'none';
//};


for (let i = 0; i < 1; i++)document.querySelector('#btn').onclick = function character() {
    let personName = document.querySelector('#name').value;
    let personAge = document.querySelector('#age').value;
    let person = [{name: personName, age: personAge}];
    let ul = document.querySelector('.personName');

    for (let i = 0; i < 1; i++) {
        let newLi = document.createElement('li');
        ul.appendChild(newLi);
        newLi.appendChild(document.createTextNode(person[0].name));
    }

    document.querySelector('li').onclick = function nextCharacter() {
        let newP = document.createElement('p');
        ul.appendChild(newP);
        newP.appendChild(document.createTextNode(person[0].age));
    }
}
