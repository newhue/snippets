let table = document.querySelector('table');
let tableHead = document.querySelector('thead');
let tableBody = document.querySelector('tbody');

const fetchTable = async (url, table) => { 
    const response = await fetch(url);
    const { headers,  rows } = await response.json()
    console.log(headers, rows);
    tableHead.innerHTML = '<tr></tr>';
    tableBody.innerHTML = '';

    const th = document.createElement('th');
    th.textContent = 'S. No.';
    tableHead.querySelector('tr').appendChild(th)
    for(let i=1; i<headers.length; i++ ){
        const th = document.createElement('th');
        th.textContent = headers[i];
        tableHead.querySelector('tr').appendChild(th)
    }

    let index = 0;
    
    for(let row of rows){
        const tr = document.createElement('tr');
        for(let i=0; i<row.length; i++){
            const td = document.createElement('td');
            if(i==0){
                index = index + 1;
                td.textContent = index;
                console.log(index);
            }
            else if(i==1){
                const a = document.createElement('a');
                a.textContent = row[1];
                a.setAttribute('href',row[0]);
                a.setAttribute('target','_blank');
                td.append(a)
            }
            else{
                td.textContent = row[i];
            }
            tr.appendChild(td)
        }
        tableBody.appendChild(tr)
    }
}

fetchTable('./list.json', table);