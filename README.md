# query-select-injection
Insert a predefined select element with querys in the DOM - VanillaJS

This script was made with the premisses of a short and clean code, without requiring outside libraries.

# Install

### Tampermonkey Browser add-on
> [Chrome](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=pt-BR)
 
> [Firefox](https://addons.mozilla.org/pt-BR/firefox/addon/tampermonkey/)



# Configure

#### Import the script into Tampermonkey 

> Utilities > URL > Import > ```https://raw.githubusercontent.com/alanmartini/query-select-injection/master/app.js```


#### Change the website trigger filter to your page: 
> // @match        alanmartini.com/*

#### Set element selector
> `#mySqlInputId` The ID or CLASS of the input that will receive the query
    
#### Query list
> increment the object `queryList` with the desired queries

## Contributing
1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request

### known issues

> Execution of script 'InjectSelectScript' failed! Cannot read property 'insertBefore' of undefined

If you got this on your console, you have an error with your selector ``textInput``, perhaps remove the ``[0]`` ¿?  

## Links and References
https://developer.mozilla.org/en-US/docs/Web/API

https://gist.github.com/joyrexus/7307312

https://tampermonkey.net/documentation.php

http://youmightnotneedjquery.com/


# License
This script is available under the [MIT license](https://tldrlegal.com/license/mit-license).