const frame = document.querySelector("#majorIframe");

frame.src = "./pages/district-data.html"

const loadIframe = e => {
    switch(e){
        case "s":frame.src = './pages/state-data.html';
                break;        
        case "d":frame.src = './pages/district-data.html';
                break ;      
        case "b":frame.src = './pages/block-data.html';
                break;
    }
}