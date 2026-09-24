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
        .then((data) =>displayvideos(data.videos))
        .catch((error) => console.error("Error fetching videos:", error));
};


const carddemo = {
    "category_id": "1001",
    "video_id": "aaab",
    "thumbnail": "https://i.ibb.co/QPNzYVy/moonlight.jpg",
    "title": "Midnight Serenade",
    "authors": [
        {
            "profile_picture": "https://i.ibb.co/fDbPv7h/Noha.jpg",
            "profile_name": "Noah Walker",
            "verified": false
        }
    ],
    "others": {
        "views": "543K",
        "posted_date": ""
    },
    "description": "'Midnight Serenade' by Noah Walker is a soulful journey into the depths of the night, capturing the mystique and allure of a moonlit evening. With 543K views, this song brings together tender melodies and evocative lyrics, making it a favorite among listeners seeking a contemplative yet uplifting experience. Immerse yourself in this musical masterpiece and feel the calm embrace of the night."
}
const displayvideos = (videos) => {

    const videoContainer = document.getElementById("videos");
    videos.forEach((video) => {

        console.log(video);
        const card = document.createElement("div");
        card.classList = "card card-compact";
        card.innerHTML = `<figure>
    <img
      src=${video.thumbnail}
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${video.title}</h2>
    <p>${video.description}</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Play</button>
    </div>
  </div> `;
  videoContainer.append(card);


    });
}


lodecatagory();

lodevideos();