// ==UserScript==
// @name         InjectSelectScript
// @version      0.2
// @description  Insert a predefined select element with querys in the DOM - VanillaJS
// @author       Alan Martini
// @match        alanmartini.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // selector . to classes | selector # to id's
    let textInput = document.querySelectorAll('#mySqlInputId')[0];

    let querySelector = 'inject-select';
    //query list
    let queryList = {
        "Select your query" : "",
        "Query to select clients" : "SELECT * FROM customer WHERE name LIKE '%bruce dickinson%'",
        "Query to get updates" : "SELECT * FROM customer WHERE LAST_UPDATE_DATE > SYSDATE-15",
        "Query C" : "Text C"
    };
    //create and set an id to the select element
    let selectElement = document.createElement('select');
    selectElement.setAttribute('id', querySelector);

    //insert querys into the select
    for(let option in queryList){
        selectElement.options[selectElement.options.length] = new Option(option, queryList[option]);
    }

    function insertAfter(newNode, referenceNode) {
        referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
    }

    //populate #textInput on change
    selectElement.onchange = function() {
        textInput.value = this.value;
    }

    //add element to DOM
    insertAfter(selectElement, textInput);

})();