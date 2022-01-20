const imagesList = [
    './images/a.jpg',
    './images/b.jpg',
    './images/c.jpg',
    './images/d.jpg'
]

let currentImage = 1
let imageELement = document.getElementById('imgtag')
let lastButtonClicked = ""


document.getElementById('leftbutton').addEventListener('click' , previousImage);
document.getElementById('rightbutton').addEventListener('click' , nextImage);


let sliderID = setInterval(nextImage , 4000);

function previousImage()
{
    clearInterval(sliderID);
    if(lastButtonClicked == "next")
        currentImage -= 2
    // console.log('previous')
    if(currentImage == -1)
    {
        currentImage = imagesList.length - 1;
        imageELement.style.opacity = 0
        setTimeout(()=>{
            imageELement.src = imagesList[currentImage]
            imageELement.style.opacity = 1
            currentImage -= 1
        } , 600)
    }
    else
    {
        imageELement.style.opacity = 0
        setTimeout(()=>{
            imageELement.src = imagesList[currentImage]
            imageELement.style.opacity = 1
            currentImage -= 1
        } , 600)
    }
    lastButtonClicked = "previous";
    sliderID = setInterval(nextImage , 4000);
}


function nextImage()
{
    clearInterval(sliderID)
    if(lastButtonClicked == "previous")
        currentImage += 2
    // console.log('next')
    if(currentImage == imagesList.length)
    {
        currentImage = 0;
        imageELement.style.opacity = 0
        setTimeout(()=>{
            imageELement.src = imagesList[currentImage]
            imageELement.style.opacity = 1
            currentImage += 1
        } , 600)
    }
    else
    {
        imageELement.style.opacity = 0
        setTimeout(()=>{
            imageELement.src = imagesList[currentImage]
            imageELement.style.opacity = 1
            currentImage += 1
        } , 600)
    }
    lastButtonClicked = "next";
    sliderID = setInterval(nextImage , 4000);
}






// Code to show the modal !!
function showModalForm(){
    document.getElementById('documentForm').style.display = "flex";
}
// document.getElementById('deathCertificate').addEventListener('click' , () => {
//     document.getElementById('documentForm').style.display = "flex"
// });

// document.getElementById('documentForm').addEventListener('click' , () => {
//     document.getElementById('documentForm').style.display = "none"
// });





// DropDown Code

document.getElementById('toggleButton').addEventListener('click' , ()=>{
    if(document.getElementById('navcontent2').style.height == "200px")
        document.getElementById('navcontent2').style.height = 0
    else
        document.getElementById('navcontent2').style.height = "200px"
})




// Download PDf Code

document.getElementById('submitButton').addEventListener('click' , ()=>
{
    window.open("../PDF/Kamal_Soukhiya.pdf" , "_target");
})










// Method One
// var input = document.createElement('input')
// input.required = true


// Method Two
// var input = document.createElement('input')
// input.setAttribute('required' , true)



// Method Third
// var input = document.createElement('input')
// var elements = document.getElementsByTagName('input')
// for (const element of elements) {
//     element.required = true
// }


// Method Fourth
// var input = document.createElement('input')
// var elements = document.getElementsByTagName('input')
// for (const element of elements) {
//     element.required = true
// }

