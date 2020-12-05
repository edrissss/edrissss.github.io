const photos = [
"https://res.cloudinary.com/derekkedziora/image/upload/v1607159818/About%20Pictures/IMG_1446_vxn0as.jpg", 
"https://res.cloudinary.com/derekkedziora/image/upload/v1607159821/About%20Pictures/IMG_2329_mh48ew.jpg", 
"https://res.cloudinary.com/derekkedziora/image/upload/v1607159823/About%20Pictures/IMG_6150_qohadj.jpg",
"https://res.cloudinary.com/derekkedziora/image/upload/v1607159821/About%20Pictures/IMG_3262_izph3l.jpg",
"https://res.cloudinary.com/derekkedziora/image/upload/v1607159820/About%20Pictures/IMG_3710_jhezfc.jpg"
]

const captions = [
"That’s me",
"Looking fancy",
"An office smile",
"The Pub Quiz Master",
"I’m owned by a cat"
]

const selectedPhoto = Math.floor(Math.random() * photos.length)

document.getElementById("aboutImg").setAttribute("src", photos[selectedPhoto]);
document.getElementById("aboutImgCaption").innerHTML = captions[selectedPhoto];