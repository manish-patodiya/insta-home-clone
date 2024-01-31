var storylist = [
  {
    img:
      "https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg?auto=compress&cs=tinysrgb&w=600",
    status:
      "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    img:
      "https://images.pexels.com/photos/2787341/pexels-photo-2787341.jpeg?auto=compress&cs=tinysrgb&w=600",
    status:
      "https://images.pexels.com/photos/982585/pexels-photo-982585.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    img:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600",
    status:
      "https://images.pexels.com/photos/1193942/pexels-photo-1193942.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    img:
      "https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=600",
    status:
      "https://images.pexels.com/photos/36469/woman-person-flowers-wreaths.jpg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    img:
      "https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=600",
    status:
      "https://images.pexels.com/photos/1321909/pexels-photo-1321909.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

var storiyan = document.querySelector("#storiyan");

var clutter = "";
storylist.map((data, id) => {
  clutter += `<div class="story">
                    <img src="${data.img}" id="${id}">
                </div>`;
});

storiyan.innerHTML = clutter;

var show = document.querySelector("#show");

storiyan.addEventListener("click", function (ele) {
  show.style.display = "block";
  show.style.backgroundImage = `url(${storylist[ele.target.id].status})`;
  setTimeout(() => {
    show.style.display = "none";
  }, 2000);
});

var img = document.querySelector("#feed img");
var hrt = document.querySelector("#feed i");

img.addEventListener("dblclick", function (e) {
  hrt.style.opacity = "0.8";
  hrt.style.transform = "scale(1)";

  setTimeout(() => {
    hrt.style.opacity = "0";
    hrt.style.transform = "scale(0)";
  }, 1000);
});
