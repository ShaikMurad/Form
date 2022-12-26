var form_submit = document.querySelector('#form-submit')
form_submit.addEventListener('submit', (e)=>{
    e.preventDefault()
    var firstname = document.querySelector('[placeholder="firstname"]')
    var lastname = document.querySelector('[placeholder="lastname"]')
    var address = document.querySelector('[placeholder="address"]')
    var city = document.querySelector('[placeholder="city"]')
    console.log('button submitted');
    console.log(firstname, lastname, address, city);

    var datas = [firstname,lastname,address,city]
    var creating_tr = document.createElement('tr')
    for(i=0; i<4; i++){
        var creating_td = document.createElement('td')
        creating_td.innerText = datas[i].value
        creating_tr.append(creating_td)
        document.querySelector('tbody').append(creating_tr)  
    }

    for(let i of datas){
        i.value = ''
    }

})