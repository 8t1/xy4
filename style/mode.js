function swapStylesheet(sheet) {
    document.getElementById('swap').setAttribute('href', sheet); 
    localStorage.setItem('swap', sheet);
    }

function getLocalStorageSwapStyle(){
    let style=localStorage.getItem('swap');
    swapStyleSheet(style);
    }
