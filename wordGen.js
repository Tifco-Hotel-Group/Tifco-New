//idea

function randomWord2() {


	arrays.forEach(spitword);

	function spitword(arr, index) {	
	
	//index = 0,1,2 
	var arrayLength = arr.length;
	// Pick randon muber from 1 to length
	var rand = Math.random() * arrayLength;
	//Round Up 
	rand = Math.floor(rand);
	//Find that number of the array	and assign that item as word	
	var word = arr[rand];
	console.log(word);

	}

}

var arrays = [
//Open Arrays
//Acting Verbs 
["man", "girl", "woman", "child", "animal", "boy", "cowards", "holy men", "law", "gentlemen", "women", "men", "law makers", "shadow", "dead", "weary", "widow", "priest", "feeling", "sound", "cows", "pigs", "beast", "flowers", "trees"],
// Verbs Past
["sailed", "ran", "saved", "searched", "chilled", "buried", "warned", "looked", "glided", "postured", "shot", "heard", "incited", "pondered", "talked", "sang", "spoke", "waved", "walked", "danced", "grimaced", "enraged", "criminalised", "vanished", "dissapeared", "ruined", "held", "serenaded", "beaten", "healed", "rejoiced", "heralded", "celebrated", "entertained", "incanted", "worshipped", "reborn", "unheard", ""],
// Preposition
["towards", "without", "with", "away from", "in the midst of", "because of", "by", "like", "to", "behind", "in front of", "at the mercy of", "in", "of", "on", "at", "at the might of"]
//Close Arrays
]

randomWord2.apply(this, arrays);

function randomWord() {

const articles = ["a", "the"]
var articlesNum = articles.length;
var rand = Math.random() * articlesNum;
rand = Math.floor(rand);
var article = articles[rand];

const subjectHes = ["bounty hunter","man","bearded man","sullen man","young boy","beggar","sinner", "dead man","gravedigger","tall figure","slim figure","ghostly figure","skeletal figure","haggard figure","drunk","dying man"]
var subjectHesNum = subjectHes.length;
var rand = Math.random() * subjectHesNum;
rand = Math.floor(rand);
var subjectHe = subjectHes[rand];

const verbs = ["walked", "made his way", "staggered"]
var verbsNum = verbs.length;
var rand = Math.random() * verbsNum;
rand = Math.floor(rand);
var verb = verbs[rand];

const prepositions = ["into"]
var prepositionsNum = prepositions.length;
var rand = Math.random() * prepositionsNum;
rand = Math.floor(rand);
var preposition = prepositions[rand];

const toObjects = ["church","bar","funeral parlor","wake","crowded place","market","graveyard","grey room","cold room","dark room","cathedral","holy place"]
var toObjectsNum = toObjects.length;
var rand = Math.random() * toObjectsNum;
rand = Math.floor(rand);
var toObject = toObjects[rand];

const conjunctions = ["and"]
var conjunctionsNum = conjunctions.length;
var rand = Math.random() * conjunctionsNum;
rand = Math.floor(rand);
var conjunction = conjunctions[rand];

const endActions = ["lit a cigarette","took off his cap","brushed a hand through his thinning hair","stared meekly at the floor","observed the silence there","gestured to the priest","gazed at the tall figure before him","glanced around at his company","threw his shadow out before the masses","wept in it's emptiness","lit a candle for the dead","knelt out of respect for the dead","took out his hip flask and drank","removed his hands from his coat pockets","removed his shoes and socks","sat beside the old woman","thought of death","shivered from the cold","thought of the loneliness around him","drew his weapon","readied his blade"]
var endActionsNum = endActions.length;
var rand = Math.random() * endActionsNum;
rand = Math.floor(rand);
var endAction = endActions[rand];

const questions = ["Is it always this","Why are you so"]
var questionsNum = questions.length;
var rand = Math.random() * questionsNum;
rand = Math.floor(rand);
var question = questions[rand];

const vibes = ["dark","lonesome","quiet", "silent","serene","weird"]
var vibesNum = vibes.length;
var rand = Math.random() * vibesNum;
rand = Math.floor(rand);
var vibe = vibes[rand];

const objectHaves = ["are you not dead yet","have you a shilling","have you a penny","have you a bit of food","say a prayer for me","have you a good prayer for me","has your time come","have you the time","how long has it been"]
var objectHavesNum = objectHaves.length;
var rand = Math.random() * objectHavesNum;
rand = Math.floor(rand);
var objectHave = objectHaves[rand];

const pronouns = ["he"]
var pronounsNum = pronouns.length;
var rand = Math.random() * pronounsNum;
rand = Math.floor(rand);
var pronoun = pronouns[rand];

const verbQuestions = ["asked","said"]
var verbQuestionsNum = verbQuestions.length;
var rand = Math.random() * verbQuestionsNum;
rand = Math.floor(rand);
var verbQuestion = verbQuestions[rand];


const cigaretteEnds = ["as his smoke rose", "as he inhaled", "as he exhaled", "as he pulled on the cigarette", "as the light from cigarette drew on the darkness", "as he blessed himself"]
var cigaretteEndsNum = cigaretteEnds.length;
var rand = Math.random() * cigaretteEndsNum;
rand = Math.floor(rand);
var cigaretteEnd = cigaretteEnds[rand];

const eyesDescs = ["brilliant", "deep", "cavernous", "hollow", "awful", "sinful", "narrow", "wretched", "darkened", "shiny", "bright", "muddy"]
var eyesDescsNum = eyesDescs.length;
var rand = Math.random() * eyesDescsNum;
rand = Math.floor(rand);
var eyesDesc = eyesDescs[rand];

const eyesColors = ["blue", "grey", "black", "green", "brown", "red"] 
var eyesColorsNum = eyesColors.length;
var rand = Math.random() * eyesColorsNum;
rand = Math.floor(rand);
var eyesColor = eyesColors[rand];

const outsideHappenings = ["there was feint birdsong","there was an ominous caw from a crow","a light rain had begun","a steady wind crept inside","there was a gathering of angry people","a storm was staging itself"]
var outsideHappeningsNum = outsideHappenings.length;
var rand = Math.random() * outsideHappeningsNum;
rand = Math.floor(rand);
var outsideHappening = outsideHappenings[rand];

const randomizers = ["taste","weather","wind","rain","noise","dread"," before the fire with my glass in my hand","half averted, hung pale and pink from his decaying yellow teeth","I had scarcely expected these grotesque custodians","something inhuman in senility, something crouching and atavistic","the human qualities seem to drop from old people insensibly day by day","their bent carriage, their evident unfriendliness to me","I was in the mood for uncomfortable impressions","vague fore-shadowings of the evil things","I will make myself comfortable there"]
var randomizersNum = randomizers.length;
var rand = Math.random() * randomizersNum;
rand = Math.floor(rand);
var randomizer = randomizers[rand];


var sentence10 = article + " " + subjectHe + " " + verb + " " +  preposition + " " +  article + " " +  toObject + " " +  conjunction + " " +  endAction + ". ";

if (endAction === "sat beside the old woman"){

	var sentence20 = objectHave + ", " + pronoun + " " + verbQuestion + ". ";

}

else if (endAction === "lit a cigarette"){

	var sentence20 = question + " " + vibe + ", " + pronoun + " " + verbQuestion + ", " + cigaretteEnd + ". ";

}

else if (endAction === "gazed at the tall figure before him" || endAction === "observed the silence there" || endAction === "glanced around at his company"){

	var sentence20 = "He had " + eyesDesc + " " + eyesColor + " eyes."

}


else

{
	var sentence20 = " ";
}


if (toObject === "church" || toObject === "bar" || toObject === "funeral parlor" || toObject === "cathedral"){

	var sentence30 = " From outside the " + toObject + " " + outsideHappening + ".";

} 

else
{
	var sentence30 = " "
}




var sentence = sentence10 + sentence20 + sentence30; 

$(".sentence").text(sentence);

var radomizer_sentence = randomizer; 

$(".title").text(radomizer_sentence);

}





randomWord();

$('#bulb_change').click(function(){

randomWord();

});