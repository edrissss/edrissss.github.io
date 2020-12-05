const photos = [
"https://res.cloudinary.com/derekkedziora/image/upload/v1607160963/About%20Pictures/IMG_1446_febpss.jpg", 
"https://res.cloudinary.com/derekkedziora/image/upload/v1607160963/About%20Pictures/IMG_2329_qi3omz.jpg", 
"https://res.cloudinary.com/derekkedziora/image/upload/v1607160963/About%20Pictures/IMG_6150_qnfwq1.jpg",
"https://res.cloudinary.com/derekkedziora/image/upload/v1607160963/About%20Pictures/IMG_3262_ijcnrg.jpg",
"https://res.cloudinary.com/derekkedziora/image/upload/v1607160964/About%20Pictures/IMG_3710_hwneoe.jpg"
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