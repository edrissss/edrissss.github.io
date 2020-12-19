---
title: About Me
description: "Derek Kedziora is a UX writer, content strategist, geek, tinkerer and avid reader."   
about: true
permalink: /about
nav: about
--- 

<figure class="about-picture"><img src="" alt="" title="Derek Kedziora" id="aboutImg"><figcaption id="aboutImgCaption"></figcaption>
</figure>

<noscript>
<figure class="about-picture"><img src="https://res.cloudinary.com/derekkedziora/image/upload/v1607160963/About%20Pictures/IMG_1446_febpss.jpg" alt="" title="Derek Kedziora">
<figcaption>That’s me</figcaption></figure>
</noscript>

I'm a writer in tech: everything from content strategy, UX writing, marketing and documentation. In a past life I was English teacher. 

I grew up in Phoenix, Arizona but have spent most of my adult life in Kyiv, Ukraine (long story). Along the way I've lived in Kyrgyzstan, China and Saudi Arabia (even longer story). 

## Contact 

Getting emails is one of my favorite parts of running this site, and is the best way to contact me: **{{ site.email }}**

You can also find me on [LinkedIn](https://www.linkedin.com/in/derekkedziora/), [Twitter](https://twitter.com/derekkedziora) and [GitHub](https://github.com/derekkedziora).

The best way to follow me is [RSS](/feed.xml).

## Colophon 

This is a [small b blog](https://tomcritchlow.com/2018/02/23/small-b-blogging/). It's meant to be lighthearted, rough around the edges and a constant work in progress. 

I use [Jekyll](https://jekyllrb.com) to build a static site that's served over [GitHub Pages](https://pages.github.com).

View the [source code on GitHub](https://github.com/derekkedziora/derekkedziora.com) and [local change log](/change-log).

My goals are speed, simplicity and longevity. Thus, my site is static HTML, CSS and a few JavaScript enhancements. [It's designed to last](https://jeffhuang.com/designed_to_last/).

Matthew Butterick's [Practical Typography](https://practicaltypography.com) has heavily influence how I designed my site. 

<script>
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
</script>