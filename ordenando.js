var valor = document.getElementById('valor')
var ul = document.getElementById('valores')
var lista = ul.children
var opc = document.getElementById('sel')
//------------------------------------------------------botões-----------
function add(){
    var node = document.createElement('li')
    node.innerText = `${valor.value}`
    ul.appendChild(node)
}
function ordenar(){
    var vetor = []
    var escolhido = opc.options[opc.selectedIndex].value
    for(var child of lista){
        vetor.push(eval(child.innerHTML))
    }
    let new_vet = []
    if (escolhido == 'bubbleSort'){
        new_vet = bubble_sort(vetor)
    }else if (escolhido == 'selectionSort'){
        new_vet = selection_sort(vetor)
    }else if (escolhido == 'quickSort'){
         new_vet = quick_sort(vetor, 0, vetor.length - 1);
    }
    new_vet = new_vet.map(item => String(item))
    ul.innerHTML = new_vet.map(item =>`<li>${item}</li>`).join('')
}
function misturar(){
    vetor = []
    for(var child of lista){
        vetor.push(eval(child.innerHTML))
    }

    let new_vet = []
    new_vet =shuffle(vetor, 3)
    
    new_vet = new_vet.map(item => String(item))
    ul.innerHTML = new_vet.map(item =>`<li>${item}</li>`).join('')
}
//---------------------------------------------------------shuffle--------
const shuffle = (array, n) => {
    var cont = 0
    while(cont < n){
        for (let i = (array.length - 1); i > 0; i--){
            let j = Math.floor(Math.random() * (i + 1)); 
            [array[i], array[j]] = [array[j], array[i]];
        }
        cont++
    }
    return array
}

//----------------------------------------------------bubble---------
var bubble_sort = (array) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) {
                let aux = array[i]
                array[i] = array[j]
                array[j] = aux
            }
        }
    }
    return array
} 
//---------------------------------------------------selection-------
var selection_sort = (array) => {
    for (let i = 0; i < array.length; i++) {
        let lowest = i
        for (let j = i + 1; j < array.length; j++) {
        if (array[j] < array[lowest]) {
            lowest = j
        }
        }
        if (lowest !== i) {
            [array[i], array[lowest]] = [array[lowest], array[i]]
        }
    }
    return array
}
//---------------------------------------------------quick----------
function swap(items, leftIndex, rightIndex){
    var temp = items[leftIndex]
    items[leftIndex] = items[rightIndex]
    items[rightIndex] = temp
}
function particionamento(items, left, right) {
    var pivot = items[Math.floor((right + left) / 2)]
        i = left
        j = right
    while (i <= j) {
        while (items[i] < pivot) {
            i++
        }
        while (items[j] > pivot) {
            j--
        }
        if (i <= j) {
            swap(items, i, j); 
            i++
            j--
        }
    }
    return i
}
function quick_sort(items, left, right) {
    var index
    if (items.length > 1) {
        index = particionamento(items, left, right)
        if (left < index - 1) {  
            quick_sort(items, left, index - 1)
        }
        if (index < right) { 
            quick_sort(items, index, right)
        }
    }
    return items
}
 