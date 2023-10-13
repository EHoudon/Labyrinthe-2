// Fonctions : une seule responsabilité
// 'Unix' : fais une seule chose, mais fais la bien
// conseil : avoir des fonctions avec paramètres d'entrée et valeur de retour

// Partie exécutable
let widhtCase = 100
choixNombreCase()
choixNombreExo()
// Fin partie exécutable
function newLabyrinthe(){
    if (document.getElementById('container').innerHTML === "") {
        optionsLabyrinthe()
    } else {
        clearDivContainer()
        optionsLabyrinthe()
    }
}
function clearDivContainer(){
    let div = document.getElementById("container");
         div.replaceChildren();
}
function optionsLabyrinthe(){ 
    let size = getValuesCase();
    let num = getValuesExo(); 
    let datas = getLabyrintheData(size, num);
    initLabyrinthe(datas); 
}
function getLabyrintheData(pSize, pNum) {
    let data_to_return = data[pSize][pNum];
    return data_to_return 
}
function initCase(cellData){
        // Get information about the cell to be created
        console.log('cellData', cellData)

        // Create element
        let elt = document.createElement('div')

        // manipulate element
        elt.id = 'test'
        
        elt.style.border = '2px solid'
        elt.style.height = '100px'
        elt.style.width = widhtCase +'px'
        elt.style.backgroundColor = '#39ADB3'
        elt.style.borderColor = '#39ADB3'
        if (cellData.entrance === true) {
            elt.style.background = '#FFB400'
            elt.innerHTML = "ENTREE";
            elt.style.textAlign = 'center'            
        }
        if (cellData.exit === true) {
            elt.style.background = '#9B2915'
            elt.innerHTML = "SORTIE";
            elt.style.textAlign = 'center'
        }
        if (cellData.walls[0] === true) {
            elt.style.borderTopColor = '#033D44'
        }
        if (cellData.walls[1] === true) {
            elt.style.borderRightColor = '#033D44'
        }
        if (cellData.walls[2] === true) {
            elt.style.borderBottomColor = '#033D44'
        }
        if (cellData.walls[3] === true) {
            elt.style.borderLeftColor = '#033D44'
        }

        elt.classList.add('inCase')
        return elt; 
}
function initLabyrinthe(pData) {
    let lab = document.createElement('div')
    lab.id = 'lab'
    lab.style.margin = '20px'
    lab.style.width = getSizeLabyrinthe (pData);
    // console.log(getSizeLabyrinthe ())
    lab.style.display ='flex'
    lab.style.flexWrap = 'wrap'
    $("#container").append(lab);
    
    for (let i = 0; i < pData.length; i++) {
        let cellData = pData[i]
        let cell = initCase(cellData)
        $("#lab").append(cell);  // Append element to main container
    }
}
function getSizeLabyrinthe (pDdata) {
    let labLength = pDdata.length
    let labSize = Math.sqrt(labLength)*widhtCase 
    return labSize + 'px'
}
function choixNombreCase(){
    let number = document.createElement('select');
    number.id = 'choix_nombre_cases';
    // number.style.width = '200px'
    // number.style.height = '25px'
    $("#choix1").append(number);
        for (let item in data){
            $("#choix_nombre_cases").append($('<option>', {value:item,text:item}))
        //    return item  
        }   
}
function choixNombreExo(){
        let numExo = document.createElement('select');
        numExo.id = 'choix_nombre_exo';
        numExo.style.width = '200px'
        $("#choix2").append(numExo);
        $("#choix_nombre_exo").append($('<option>', {value:'ex-0',text:'ex-0'}))
        $("#choix_nombre_exo").append($('<option>', {value:'ex-1',text:'ex-1'}))
        $("#choix_nombre_exo").append($('<option>', {value:'ex-2',text:'ex-2'}))
        
        
}
function getValuesCase(){
        valueSize = document.getElementById('choix_nombre_cases').value;
        return valueSize;
}
function getValuesExo(){
        valueExo = document.getElementById('choix_nombre_exo').value;
         return valueExo;
}



    














// initLabyrinthe()





// let posJ = data[3]["ex-0"][0]
// let posJY = posJ.posY
// let posJX = posJ.posX
// let posData = data[3]["ex-0"]
// let posDY = posData.posY
// let posDX = posData.posX

//     console.log(posJX, posJY)

// if (posJ === posData[i]){
//     if (posJ.walls[1] == false) {
//         posJY = posJY + 1;
//     }

//     if (posJ.walls[3] == false) {
//         posJY = posJY - 1;
//     }

//     if (posJ.walls[0] == false) {
//         posJX = posJX - 1;
//     }

//     if (posJ.walls[2] == false) {
//         posJX = posJX + 1;
//     }

//     console.log(posJX, posJY)
   
    
    
// }
// for (let i = 0; i < 9; i++) {
//     if (posJY === posData[i].posY && posJX === posData[i].posX){
//         console.log(posData[i])
//     }
// }
// // console.log(posData[i])
// // console.log(posJ)

























