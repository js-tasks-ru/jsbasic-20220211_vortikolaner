// function highlight(table) {
    // console.log(table.rows[0].cells[3].firstChild.data);
    // Array.from(table.rows).filter( item => {
    //     Array.from(item.cells).filter( item => {
    //         console.log(item)
    //     })
    // })
    
    // for(let i = 0; i < table.rows.length; i++){
    //     if(table.rows[i].rowIndex == 3){
    //         console.log(table.rows[i].cells)
    //     }
    // }

//  }

function highlight(table) {
    for(let i = 0; i < table.rows.length; i++){
        let arr = Array.from(table.rows[i].cells);
        arr.map(item =>{
            if(item.cellIndex == 3 && item.firstChild.data != 'Status'){
                console.log(item.closest('tr'))
            item.dataset.available === 'true' ? item.closest('tr').classList.add('available') : item.closest('tr').classList.add('unavailable');
            item.attributes.length == 0 ? item.closest('tr').hidden = 'true' : null;
            console.log(item)
            
            } else if(item.cellIndex == 2){
                item.firstChild.data == 'm' ? item.closest('tr').classList.add('male') : item.closest('tr').classList.add('female')
            } else if(item.cellIndex == 1 && item.firstChild.data < 18){
                item.closest('tr').style="text-decoration: line-through" ;
            }
        })
    }
}