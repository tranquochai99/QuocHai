document.getElementById('random').onclick = () => {
    const valueRandom = Math.random();
    const value=Math.floor(Math.random() *4 );
    switch(value) {
        case 0:
        document.getElementsByTagName("h3") [0].innerText="nguyen quynh";
         break
        case 1:
        document.getElementsByTagName("h3") [0].innerText="quoc hai";
        break
        case 2:
        document.getElementsByTagName("h3") [0].innerText="hoang linh";
        break
        case 3:
        document.getElementsByTagName("h3") [0].innerText="tay ho";
        break
    
    }

};