/**
 * Created by ARTUR on 01.08.2017.
 */

    document.querySelector('button').onclick = function character() {
        let personName = document.getElementById('name').value;
        let personAge = document.getElementById('age').value;
        let person = [{name:personName, age:personAge}];
        let ul = document.querySelector('.personName');
        let newLi = document.createElement('li');
        ul.appendChild (newLi);
        newLi.appendChild(document.createTextNode(personName)); 
        function qu() {
            
        }

    };
