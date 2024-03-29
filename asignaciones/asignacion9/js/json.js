function info() {
    var requestURL = "../code.json";
    var request = new XMLHttpRequest();
    var information = document.getElementById('information');
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function () {
        var place = request.response;
        populateinformation(place);
    }
    function populateinformation(jsonObj) {
        var myH1 = document.createElement('h2');
        myH1.textContent = jsonObj['city'];
        information.appendChild(myH1);

        var myH1 = document.createElement('h3');
        myH1.textContent = jsonObj['place'];
        information.appendChild(myH1);

        var myPara = document.createElement('p');
        myPara.textContent = 'Descripcion: ' + jsonObj['description'];
        information.appendChild(myPara);
    }
}
