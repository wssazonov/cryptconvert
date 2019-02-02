var from, newArray, curs;
fetch('https://cors-anywhere.herokuapp.com/https://changenow.io/api/v1/market-info/fixed-rate/2d8b957501a879d763fbe76a30014ea3e06831d4d94460f579711a0990add876')
    .then(result => {
        return result.json();
    })
    .then(data => {
        // console.log(data);
        from = data.map(function(item, i, data) {           
            // console.log(data[i].from);
            return data[i].from;
        });
        newArray = from.filter(function(elem, pos) {
        	return from.indexOf(elem) == pos;
        });
        console.log(newArray);
        curs = newArray;
    })
    .catch(error => console.log(error));

// var select = document.querySelector('.form-control')

// select.innerHTML = newArray.map(n => `<option value=${n}>${n}</option>`).join('')
