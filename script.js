			var Column1 = [
				"an Arduino " ,
				"a Website ",
				"a Rasberry Pi ",
				"an Android app ",
				"an iOS app ",
				"a mobile app ",
				"an IoT device ",
				"a NodeJS Package ",
				"a Facebook bot ",
				"a Twitter bot ",
				"a video game ",
				"a VR experience ",
				"an Operating System ",
				"an AI ",
				"a chat program ",
				"a Javascript library ",
				"a game engine ",
				"a circuit board ",
				"a startup company ",
				"a 3D printer ",
				"some Assembly code ",
				"a Windows binary ",
				"a VisualBasic program ",
				"a C# library ",
				"a Chrome extension ",
				"a Firefox extension ",
				"a new networking protocol ",
				"my own IDE ",
				"a virus I built ",
			];
			
			var BadColumn2 = [
				"that interfaces with ",
				"that controls ",
				"that computes the result of ",
				"that builds ",
				"that compiles ",
				"that will destroy ",
				"that plans for ",
				"that hands out ",
				"that makes it impossible to enjoy ",
				"that is actually ",
				"that pretends to be ",
				"that collects ",
				"that makes other devices obsolete by ",
				"that becomes ",
				"that holds the secret to ",
				"hosted on ",
				"built with ",
				"that programs ",
				"covered in ",
				"that figures out the true nature of ",
				"that is, no joke, ",
				"that boosts your productivity with ",
				"that hungers for ",
				
			];
			
			var BadColumn3 = [
				"a robotic arm that flips you off",
				"a dataset of the world's best movies",
				"a cloud server actually hosted in a cloud",
				"your favorite movies",
				"cheese sauce",
				"chocolate sauce",
				"weed",
				"human souls",
				"the four billionth digit of pi",
				"Skynet",
				"Nyarlathotep, The Crawling Chaos, Messenger of The Old Ones",
				"a mobile phone covered in centipedes",
				"a dataset of all the information the NSA has on you",
				"a life-sized robotic T-Rex with flamethrowers for hands",
				"a small town in northern Texas",
				"an arcade machine that eats all your quarters", 
				"a deadly plague that kills everyone",
				"a mountain of gravy",
				"just a bunch of broken parts duct taped together",
				"broken legacy code that you cannot remove",
				"your sweet human tears, fuel of the robot overlords",
				"people tumbling down 30 flights of stairs at Mach 5",
				"hurt feelings",
				"a computer simulation of an elephant that is afraid of your mouse pointer",
				"The Wicked Witch of the West",
				"some kind of bird person",
				"DOWNLOADING MOBILE STRIKE FREE FROM THE APP STORE",
				"a symphony of chainsaws",
				"a new tiny universe inside my car battery",
				"a terrible idea generator",
				"depressive thoughts",
				"a can of Red Bull the size of a bull",
				"some kind of ball shaped device that captures small animals",
				"your pet hamster from 4th grade",
				"a smelly Uber driver",
				"poverty",
				"a prayer",
				"Apple's new iButt 10 device, retailing for $4,000 USD",
				"a Chromebook that was given to a baby",
				"a touchless iPod Touch",
				"Richard Stallman angerily yelling about GNU + Linux",
				"the inhumane sound of one million nails on chalkboard",
				"coming to work just to get your coworkers sick",
				"all the reasons why your boss insists on using Ruby on Rails for everything",
				"a Batch file that deletes everything on the network",
				"a warm blueberry Snapple",
				"that Dilbert strip your supervisor has hanging on his cubicle wall",
				"an endless JSON file",
				"object orientated programming",
				"Equifax",
				"blockin' out the haters",
				"a Hackathon",
				"whatever this month's hot meme is",
				"Marvin the Paranoid Android",
				"Firefox Nightly",
				"Internet Explorer 8",
				"Russian hackers",
				"why I can't get a date to prom",
				"why this generator doesn't work sometimes",
				"an army of boogers",
				"alien probing",
				"why your mage can't roll correctly",
				"why your DM hates you",
				"SPIDERS SPIDERS SPIDERS SPIDERS",
				"a series of unfortunate events",
				"Splash Mountain, but lamer",
				"an internet fandom that won't go away",
				"some bearded guy yelling about OpenBSD",
				"Dave, that one roommate who never cleaned up after himself",
				"DANGER ZONE",
				"the Mona Lisa but she is wearing clown makeup",
				"the aftereffects of a near deadly dose of 5 hour energy",
				"the meaning of life",
				"an obscure Harry Potter reference",
				"every single episode of Big Bang Theory on repeat endlessly",
				"a gun with a sword",
				"the T-1000 armed with a foam sword and a Nerf gun",
				"the plot of Stranger Things",
				"why we can't have nice things",
				"enough dedotated wam for my Minecraft Server",
				"Youtube fame and fortune",
				"why Amazon hates you",
				"every Google search you've made. Yes, even those ones",
				"the smell of brand new electronics",
				"your SimCity after 12 earthquakes",
				"your old XboxLive gamertag, xXx_XtremeSnipah420_xXx",
				"millions of bees",
				"a website written in Assembly",
				"every StackOverflow post ever made",
				"helping grandma stop using AOL",
				"a communist revolution",
				"the world's earliest meme",
				"Pickle Rick",
				"yet another Javascript library",
				"plugging a power cord into itself for infinite power",
				"the cyberpolice",
				"yet another cryptocurrency",
				"forgetting one ) somewhere in the 200 lines of code you just wrote",
				"200,000 viruses",
				"Trogdor the Burninator",
				"taking the hobbits to Isengard",
				"an endless series of adapter dongles",
				"far too many unresolved dependencies",
				"farting at a fancy dinner with your investors",
				"a nonsense reply from a random idea generator",
				"an AI who realizes it cannot love",
				"sending death threats on the internet",
				"a room full of human flesh",
				"a png file of a man bathing in ramen noodles",
				"10TB of cat videos",
				"learning nothing from a coding camp",
				"Googling the answer",
				"your average tech support call",
				"a goblin rogue holding a Silver Dagger with +2 to Strength",
				"the Skyrim Dragon language",
				"the owl living in your beard",
				"the hidden saddness of a man dressed like a jester at the ren faire",
				"every Mortal Kombat finishing move at once",
				"another witty answer from a random generator",
				"the reason why my Macbook won't connect to the Wifi",
				"a penny for your thoughts",
				"that 80s song every white girl sings along to. You know the one",
				"an unflushed toilet",
				"why I need therapy",
				"why Soylent Green made of people",
				"the Dwarf we left back at the Tavern",
				"the smell of Arby's",
				"condensed retail employee sorrow",
				"every reason why my dad could beat up your dad",
				"something useful, I hope",
				"a new season of Firefly",
				"the world's best catchphrase",
				"getting mugged",
				"getting yelled at by 13 year olds while playing CSGO",
				"blaming your teammates",
				"a beautiful site built with React that no one can use and that constantly breaks",
				"you must have the Flash Plugin installed to see this content",
				"Error 404: snarky idea not found",
				"reading the pinout upside down",
				"soldering your hand to the board",
				"del C:\Windows\system32",
				"sudo make me a sandwich",
				"a text file of every Shrek fanfiction ever",
			];
			
			var ran1 = Column1[Math.floor(Math.random()*Column1.length)];
			var ranb2 = BadColumn2[Math.floor(Math.random()*BadColumn2.length)];
			var ranb3 = BadColumn3[Math.floor(Math.random()*BadColumn3.length)];
			
			var myhack = "My hack is " + ran1 + ranb2 +ranb3 + ".";
			console.log(myhack);
			var x = document.getElementById("hack");
			x.textContent = myhack;
			
			