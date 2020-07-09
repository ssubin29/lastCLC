var count=0;
var movieImage=document.querySelector(".changeMovie");
var movieTitle=document.querySelector('.movieTitle');
var movieInfo=document.querySelector('.movieInfo');
var movieRank=document.querySelector('.star');
var frames=['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg'];
var movie1Info = {
    text:
    'This article is about the franchise as a whole. For the first film in the series, see Final Destination. For other uses, see Final Destination (disambiguation). Final Destination is an American horror franchise composed of five films, two comic books, and nine novels. It is based on an unproduced spec script by Jeffrey Reddick, originally written for The X-Files television series, and was distributed by New Line Cinema. All five films center around a small group of people who escape impending death when one individual (the protagonist of each film) has a sudden premonition and warns them that they will all die in a terrible mass-casualty accident. After avoiding their foretold deaths, the survivors are killed one by one in bizarre accidents caused by an unseen force creating complicated chains of cause and effect, resembling Rube Goldberg machines in their complexity, and then read omens sent by another unseen entity in order to again avert their deaths. The series is noteworthy among other films in the horror genre in that the antagonist is not a stereotypical slasher or other physical being, but Death personified, subtly manipulating circumstances in the environment with a design on claiming anyone who escapes their fated demise. In addition to the films, a novel series, which includes the novelizations of the first three films, was published throughout 2005 and 2006 by Black Flame. ',
    star:'★★★★☆',
    title:'final destination'
};
var movie2Info = {
    text:
    'The Mist (also known as Stephen King\'s The Mist) is a 2007 American science fiction horror film based on the 1980 novella The Mist by Stephen King. The film was written and directed by Frank Darabont. Darabont had been interested in adapting The Mist for the big screen since the 1980s. Filming for The Mist began in Shreveport, Louisiana, in February 2007. The film was commercially released in the United States and Canada on November 21, 2007; it performed well at the box office and received generally positive reviews. Darabont has since revealed that he had "always had it in mind to shoot The Mist in black and white", a decision inspired by such iconic films as Night of the Living Dead (1968) and the "pre-color" work of Ray Harryhausen. While the film\'s cinematic release was in color, the director has described the black and white print (released on Blu-ray in 2008) as his "preferred version."The director revised the ending of the film to be darker than the novella\'s ending, a change to which King was amenable. Darabont also sought unique creature designs to differentiate them from his creatures in past films.The Mist was screened at the film festival ShowEast on October 18, 2007, at which director Frank Darabont received the Kodak Award for Excellence in Filmmaking for his previous works The Shawshank Redemption and The Green Mile yeahhhhh.',
    star:'★★★★★',
    title:'the mist'
};
var movie3Info = {
    text:'Triangle is a 2009 psychological thriller film written and directed by Christopher Smith and starring Melissa George and Michael Dorman. The film was released in the United Kingdom on 16 October 2009. George portrays a single mother who goes on a boating trip with several friends. When they are forced to abandon their ship, they board a derelict ocean liner, where they become convinced that someone is stalking them.The film, a British-Australian co-production, was written and directed by Christopher Smith. The UK Film Council awarded £1.6 million ($2.8 million) of public money from the National Lottery fund towards the development, production and distribution of the film.[5] Smith was inspired by Dead of Night and Memento. He wanted to make a circular film that explored déjà vu that avoided using the same elements as Jacob\'s Ladder. The film was shot on sets and on location in Queensland, Australia; the sets include the exterior of a cruise liner, which Smith insisted on constructing as he believed it was important that they avoid shooting everything with green screens.The film is based in part on the story of Sisyphus, a figure in Greek mythology.The film premiered in the UK at the London FrightFest Film Festival on 27 August 2009. Triangle was theatrically released on 16 October 2009, in the UK; 30 December 2009 in Belgium;[8] 21 January 2010 in the Netherlands.',
    star:'★★★★☆',
    title:'triangle'
};
var movie4Info = {
    text:'Development of Silent Hill began in the early 2000s. After attempting to gain the film rights to Silent Hill for five years, Gans sent a video interview to them explaining his plans for adapting Silent Hill and how important the games are to him. Konami awarded him the film rights as a result. Gans and Avary began working on the script in 2004. Avary used Centralia, Pennsylvania as an inspiration for the town. Filming began in February 2005 with an estimated $50 million budget and was shot on sound sets and on location in Canada (Brantford, Ontario and Hamilton, Ontario). Silent Hill was released in Canada on April 21, 2006, by TriStar Pictures and in France on April 26, 2006, by Metropolitan Filmexport and grossing $100 million worldwide. The film received mixed reviews, with critics praising the film\'s visuals, set designs, and atmosphere, but criticized the film for its dialogue, plot, and run-time. A sequel entitled Silent Hill: Revelation was released on October 26, 2012 to critical failure, but modest commercial success.Director Christophe Gans attempted for five years to obtain the film rights to the Silent Hill series from Konami. He sent a video interview to them explaining his plans for adapting Silent Hill and how important the games are to him.They were so impressed, he was rewarded with the film rights. In 2004, Gans and screenwriter Roger Avary began writing the script, which would be the first film in a series of Silent Hill films',
    star:'★★★☆☆',
    title:'silent hill'
};
var movie5Info = {
    text:'House of Wax premiered at the Tribeca Film Festival and was released in United States theaters on May 6, 2005, by Warner Bros. Pictures. The film grossed over $70 million worldwide and received generally negative reviews from critics, who criticized its lack of originality, screenplay and characters, but praised the performances and atmosphere. In January 2006, Village Roadshow Studios owners Village Theme Park Management and Warner Brothers Movie World Australia announced they were suing special effects expert David Fletcher and Wax Productions because of a fire on the set during production. Opening in 3,111 theaters, the film grossed $12 million in its opening weekend. House of Wax earned $70 million worldwide, $32 million of which came from North American receipts. House of Wax also earned $42 million in VHS/DVD rentals.On Rotten Tomatoes the film has an approval rating of 26% based on 157 reviews, and the average rating is 4.29/10. The site\'s consensus reads, "Bearing little resemblance to the 1953 original, House of Wax is a formulaic but better-than-average teen slasher flick."There is a song appearing in the film which is not integrated in the soundtrack. It is "Roland" by Interpol, and appears in the scene when the group decides to camp over the night at the beginning of the film. The song that plays during the end credits is "Helena" by My Chemical Romance. ',
    star:'★★★★☆',
    title:'house of wax'
};

function changeF() {
    movieImage.src=frames[count%frames.length];
    ccount=count%frames.length;
    count+=1;
}

function changeMvImg() {
    changeF();
    setInterval(changeF,500);
}

changeMvImg();

function loadMvInfo () {
    switch (ccount) {
        case 0:
            movieTitle.innerText=movie1Info.title;
            movieRank.innerText=movie1Info.star;
            movieInfo.innerText=movie1Info.text;
            break;
        case 1:
            movieTitle.innerText=movie2Info.title;
            movieRank.innerText=movie2Info.star;
            movieInfo.innerText=movie2Info.text;
            break;
        case 2:
            movieTitle.innerText=movie3Info.title;
            movieRank.innerText=movie3Info.star;
            movieInfo.innerText=movie3Info.text;
            break;
        case 3:
            movieTitle.innerText=movie4Info.title;
            movieRank.innerText=movie4Info.star;
            movieInfo.innerText=movie4Info.text;
            break;
        case 4:
            movieTitle.innerText=movie5Info.title;
            movieRank.innerText=movie5Info.star;
            movieInfo.innerText=movie5Info.text;
            break;
    }
}
movieImage.addEventListener('click',loadMvInfo);