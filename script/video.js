// console.log("Video script loaded successfully.");

//1 - fetch the video element

//create lode catagoris

const lodecatagory = () => {
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
        .then((res) => res.json())
        .then((data) => displaycatagory(data.categories))
        .catch((error) => console.error("Error fetching categories:", error));
};

const lodecatagoryvideos = (id) => {
    fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
        .then((res) => res.json())
        .then((data) => displayvideos(data.category))
        .catch((error) => console.error("Error fetching categories:", error));
};


//create display catagoris
const displaycatagory = (categories) => {
    //add data in html
    const categoryContainer = document.getElementById("catagoris");
    categories.forEach((items) => {
        console.log(items);
        //create a button

        const buttoncontainer = document.createElement("div");
        buttoncontainer.innerHTML =

            `
        <button onclick="lodecatagoryvideos(${items.category_id})" class ="btn">
        ${items.category}
        </button>

        `;

        //add button to category
        categoryContainer.append(buttoncontainer);

    })
};
//convert seconds to month day hour minute second
const getTimeString = (time) => {
    let seconds = parseInt(time);
    const year = Math.floor(seconds / (365 * 86400));
    seconds %= 365 * 86400;
    const month = Math.floor(seconds / (30 * 86400));
    seconds %= 30 * 86400;
    const day = Math.floor(seconds / 86400);
    seconds %= 86400;
    const hour = Math.floor(seconds / 3600);
    seconds %= 3600;
    const minute = Math.floor(seconds / 60);
    const second = seconds % 60;

    let result = "";
    if (year > 0) result += `${year} year `;
    if (month > 0) result += `${month} month `;
    if (day > 0) result += `${day} day `;
    if (hour > 0) result += `${hour} hour `;
    if (minute > 0) result += `${minute} min `;
    if (second > 0 || result === "") result += `${second} sec `;
    return result + "ago";
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
    videoContainer.innerHTML = "";

    if (videos.length === 0) {
        videoContainer.classList.remove("grid");
        videoContainer.innerHTML =
            `
        <div class = "min-h-[600px] flex flex-col justify-center items-center">
        <img src="/icon/Icon.png" alt="No videos found" />
         <h1 class="text-center text-xl font-bold py-10">
        No videos found for this category
    </h1>

        </div>
        `;
    }
    else {
        videoContainer.classList.add("grid");
    }



    videos.forEach((video) => {

        console.log(video);
        const card = document.createElement("div");
        card.classList = "card card-compact";
        card.innerHTML = `<figure class="h-[300px] w-full relative">
        <img
      src=${video.thumbnail}
      class="h-full w-full object-cover"
      alt="Shoes" />

      ${video.others.posted_date?.length == 0 ? "" : `<span class="absolute right-2 bottom-2 bg-blacktext-xs text-white p-1 rounded">
      ${getTimeString(video.others.posted_date)}</span>`}

      
    </figure>
        <div class="px-0 py-2 flex flex-col gap-2">
        <div>
        <img class="w-10 h-10 rounded-full object-cover" src="${video.authors[0].profile_picture}" alt="" />
        </div>
        <div>
        <h2 class="font-bold">${video.title}</h2>
        <div class="flex items-center gap-2">
            <p class="text-gray-500">${video.authors[0].profile_name}</p>
           ${video.authors[0].verified ? ` <img class="w-5" src="https://img.icons8.com/fluency/48/verified-badge--v1.png" alt="verified-badge--v1"/>` : ""}
        </div>
    </div>
    
  </div> `;
        videoContainer.append(card);


    });
}


lodecatagory();

lodevideos();