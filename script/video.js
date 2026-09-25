// console.log("Video script loaded successfully.");

//1 - fetch the video element

//create lode catagoris

const lodecatagory = () => {
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
        .then((res) => res.json())
        .then((data) => displaycatagory(data.categories))
        .catch((error) => console.error("Error fetching categories:", error));
};
//create display catagoris
const displaycatagory = (categories) => {
    //add data in html
    const categoryContainer = document.getElementById("catagoris");
    categories.forEach((items) => {
        console.log(items);
        //create a button
        const button = document.createElement("button");
        button.classList = "btn";
        button.innerText = items.category;

        //add button to category
        categoryContainer.append(button);

    })
};
//display video
const lodevideos = () => {
    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
        .then((res) => res.json())
        .then((data) => displayvideos(data.videos))
        .catch((error) => console.error("Error fetching videos:", error));
};

const displayvideos = (videos) => {

    const videoContainer = document.getElementById("videos");
    videos.forEach((video) => {

        console.log(video);
        const card = document.createElement("div");
        card.classList = "card card-compact";
        card.innerHTML = `<figure class="h-[300px] w-full relative">
        <img
      src=${video.thumbnail}
      class="h-full w-full object-cover"
      alt="Shoes" />
      <span class="absolute right-2 bottom-2 bg-black text-white p-1 rounded">
      ${video.others.posted_date}</span>
    </figure>
        <div class="px-0 py-2 flex flex-col gap-2">
        <div>
        <img class="w-10 h-10 rounded-full object-cover" src="${video.authors[0].profile_picture}" alt="" />
        </div>
        <div>
        <h2 class="font-bold">${video.title}</h2>
        <div class="flex items-center gap-2">
            <p class="text-gray-500">${video.authors[0].profile_name}</p>
           ${video.authors[0].verified ? ` <img class="w-5" src="https://img.icons8.com/fluency/48/verified-badge--v1.png" alt="verified-badge--v1"/>`: ""}
        </div>
    </div>
    
  </div> `;
        videoContainer.append(card);


    });
}


lodecatagory();

lodevideos();