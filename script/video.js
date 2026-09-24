// console.log("Video script loaded successfully.");

//1 - fetch the video element

//create lode catagoris

const lodecatagory = () =>{
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res)=> res.json())
    .then((data)=> displaycatagory(data.categories))
    .catch((error)=>console.error("Error fetching categories:", error));
}
//create display catagoris

const displaycatagory = (categories) => {
    //add data in html

    const categoryContainer = document.getElementById("catagoris");

    categories.forEach((items) => {
        console.log(items);
        //create a button
        const button = document.createElement("button");
        button.classList ="btn";
        button.innerText = items.category;

        //add button to category
        categoryContainer.append(button);

    });


}


lodecatagory();