(()=>{
  const executeScript = (studentNo,name,age) => {
    const table = document.getElementById('table')
    let row = document.createElement('tr');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');
    let td4 = document.createElement('td');
    td1.innerHTML = studentNo;
    td2.innerHTML = name;
    td3.innerHTML = age;
    row.append(td1,td2,td3)
    table.appendChild(row)
 }
 window.addEventListener('DOMContentLoaded', ()=> {
    executeScript('2100999', 'TestUser', 70)
 });
})()

