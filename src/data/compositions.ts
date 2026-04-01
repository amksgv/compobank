export interface VocabWord {
  word: string;
  meaning: string;
  partOfSpeech: string;
  example: string;
}

export interface Composition {
  slug: string;
  title: string;
  description: string;
  level: number;
  wordCount: number;
  theme: string;
  body: string;
  vocabulary: VocabWord[];
}

export const compositions: Composition[] = [
  // ════════════════════════════════════════
  // PRIMARY 1
  // ════════════════════════════════════════
  {
    slug: "my-pet-cat",
    title: "My Pet Cat",
    description: "A short story about a boy and his playful pet cat named Whiskers.",
    level: 1,
    wordCount: 120,
    theme: "Pets",
    body: `Last Saturday, I woke up early. I heard a soft sound coming from the kitchen. I tiptoed downstairs and saw my cat, Whiskers, sitting on the table. He was licking his paws.

"Whiskers! Get down!" I said. He looked at me with his big green eyes and jumped off the table. I giggled because he looked so guilty.

I poured some milk into his bowl. He lapped it up happily. Then, he rubbed his furry body against my legs. I bent down and stroked his soft fur.

After breakfast, Whiskers and I played in the garden. He chased a butterfly while I watched. He is my best friend. I love my pet cat very much.`,
    vocabulary: [
      { word: "tiptoed", meaning: "walked very quietly on one's toes", partOfSpeech: "verb", example: "She tiptoed past the sleeping baby." },
      { word: "giggled", meaning: "laughed in a light, silly way", partOfSpeech: "verb", example: "The children giggled at the funny clown." },
      { word: "guilty", meaning: "feeling that you have done something wrong", partOfSpeech: "adjective", example: "He looked guilty after eating the last cookie." },
      { word: "lapped", meaning: "drank by scooping with the tongue", partOfSpeech: "verb", example: "The dog lapped water from the puddle." },
      { word: "stroked", meaning: "moved one's hand gently over something", partOfSpeech: "verb", example: "She stroked the rabbit's soft ears." },
    ],
  },
  {
    slug: "a-rainy-day",
    title: "A Rainy Day",
    description: "What happens when it rains and you cannot go outside to play.",
    level: 1,
    wordCount: 110,
    theme: "Weather",
    body: `It was a rainy day. Dark clouds filled the sky. I pressed my face against the window and watched the raindrops race down the glass.

"Can I go outside?" I asked my mother. She shook her head. "No, dear. You will get wet and catch a cold," she said.

I felt bored. Then, my mother had an idea. She brought out some coloured paper and glue. We made paper boats together! When the rain stopped, we went to the big puddle near our house and floated our boats. My boat sailed the fastest!

It turned out to be a wonderful day after all.`,
    vocabulary: [
      { word: "pressed", meaning: "pushed something firmly against a surface", partOfSpeech: "verb", example: "He pressed his ear to the door to listen." },
      { word: "raindrops", meaning: "small drops of rain", partOfSpeech: "noun", example: "Raindrops splashed on the rooftop." },
      { word: "bored", meaning: "feeling tired because there is nothing interesting to do", partOfSpeech: "adjective", example: "She felt bored during the long car ride." },
      { word: "floated", meaning: "moved slowly on top of water", partOfSpeech: "verb", example: "The leaf floated down the stream." },
      { word: "wonderful", meaning: "extremely good or pleasing", partOfSpeech: "adjective", example: "We had a wonderful time at the beach." },
    ],
  },
  {
    slug: "my-new-shoes",
    title: "My New Shoes",
    description: "A child gets a new pair of shoes and cannot wait to wear them.",
    level: 1,
    wordCount: 115,
    theme: "Shopping",
    body: `Last Sunday, my mother took me to the shoe shop. I was so excited! I had been wearing my old shoes for a long time. They were torn and dirty.

At the shop, I saw many beautiful shoes on the shelves. I tried on a pair of blue shoes with white stripes. They fitted perfectly! I jumped up and down happily.

"Can I wear them now?" I asked my mother. She laughed and said yes. I wore my new shoes out of the shop. I walked proudly all the way home.

The next day, I wore my new shoes to school. My friend, Ali, said they looked very nice. I grinned from ear to ear. I promised myself I would take good care of my new shoes.`,
    vocabulary: [
      { word: "excited", meaning: "feeling very happy and full of energy", partOfSpeech: "adjective", example: "She was excited about her birthday party." },
      { word: "torn", meaning: "ripped or with a hole in it", partOfSpeech: "adjective", example: "His torn shirt needed to be mended." },
      { word: "shelves", meaning: "flat boards fixed to a wall for putting things on", partOfSpeech: "noun", example: "The books were neatly arranged on the shelves." },
      { word: "proudly", meaning: "in a way that shows you are pleased with yourself", partOfSpeech: "adverb", example: "She proudly showed her painting to everyone." },
      { word: "grinned", meaning: "smiled widely", partOfSpeech: "verb", example: "He grinned when he saw his surprise gift." },
    ],
  },
  {
    slug: "the-playground",
    title: "The Playground",
    description: "An afternoon at the playground with friends.",
    level: 1,
    wordCount: 105,
    theme: "Play",
    body: `After school, my mother brought me to the playground. It was sunny and warm. Many children were already there.

I ran to the swings first. I pumped my legs and went higher and higher. The wind blew through my hair. It felt like I was flying!

Then, I went to the slide. I climbed the ladder carefully and slid down. "Wheee!" I shouted. It was so much fun.

My friend, Siti, was at the sandbox. We built a sandcastle together. We used a pail and a small shovel. Our sandcastle was big and beautiful.

When it was time to go home, I waved goodbye to Siti. I had a great time at the playground.`,
    vocabulary: [
      { word: "pumped", meaning: "moved something back and forth with force", partOfSpeech: "verb", example: "She pumped her arms while running." },
      { word: "climbed", meaning: "went up something using hands and feet", partOfSpeech: "verb", example: "He climbed the tall tree in the park." },
      { word: "carefully", meaning: "with great attention so as not to get hurt", partOfSpeech: "adverb", example: "She carefully crossed the busy road." },
      { word: "sandbox", meaning: "an area filled with sand for children to play in", partOfSpeech: "noun", example: "The children dug holes in the sandbox." },
      { word: "shovel", meaning: "a tool used for digging or scooping", partOfSpeech: "noun", example: "He used a shovel to dig in the garden." },
    ],
  },
  {
    slug: "helping-grandmother",
    title: "Helping Grandmother",
    description: "A child helps grandmother bake cookies during a weekend visit.",
    level: 1,
    wordCount: 110,
    theme: "Family",
    body: `Every Saturday, I visit my grandmother. She lives in a small flat near the market. I love going to her house because she always bakes yummy treats.

Last Saturday, grandmother asked me to help her bake cookies. I was delighted! I put on a small apron and washed my hands.

Grandmother showed me how to mix the flour, sugar and butter. I stirred the mixture round and round. Then, we rolled the dough into small balls and placed them on a tray.

We put the tray into the oven. Soon, the whole kitchen smelled lovely. When the cookies were done, I took a big bite. They were crunchy and sweet.

"You are a good helper," grandmother said, patting my head.`,
    vocabulary: [
      { word: "delighted", meaning: "very happy and pleased", partOfSpeech: "adjective", example: "She was delighted to see her old friend." },
      { word: "apron", meaning: "a piece of cloth worn over clothes to keep them clean while cooking", partOfSpeech: "noun", example: "Mother tied her apron before cooking dinner." },
      { word: "stirred", meaning: "mixed something by moving a spoon round and round", partOfSpeech: "verb", example: "She stirred the soup with a wooden spoon." },
      { word: "dough", meaning: "a thick mixture of flour and water used to make bread or cookies", partOfSpeech: "noun", example: "He kneaded the dough to make it soft." },
      { word: "crunchy", meaning: "hard and making a noise when you bite it", partOfSpeech: "adjective", example: "The cereal was crunchy and delicious." },
    ],
  },
  {
    slug: "my-goldfish",
    title: "My Goldfish",
    description: "A child takes care of a pet goldfish and learns about responsibility.",
    level: 1,
    wordCount: 100,
    theme: "Pets",
    body: `I have a pet goldfish. His name is Bubbles. He lives in a round glass bowl on the shelf in my room.

Every morning, I sprinkle some fish food into the bowl. Bubbles swims up quickly and gobbles it all up. His tiny mouth opens and closes very fast. It makes me laugh.

Sometimes, I sit and watch Bubbles swim. He swishes his orange tail and glides through the water. He looks so graceful.

One day, the water in the bowl looked murky. My father taught me how to change the water. I scooped Bubbles out gently with a small net. Then, I cleaned the bowl and filled it with fresh water.

Taking care of Bubbles makes me feel grown up.`,
    vocabulary: [
      { word: "sprinkle", meaning: "to scatter small pieces of something over a surface", partOfSpeech: "verb", example: "She likes to sprinkle sugar on her pancakes." },
      { word: "gobbles", meaning: "eats something very quickly", partOfSpeech: "verb", example: "The hungry boy gobbles up his food." },
      { word: "glides", meaning: "moves smoothly and easily", partOfSpeech: "verb", example: "The swan glides across the lake." },
      { word: "graceful", meaning: "moving in a smooth and beautiful way", partOfSpeech: "adjective", example: "The dancer was very graceful on stage." },
      { word: "murky", meaning: "dark and dirty, not clear", partOfSpeech: "adjective", example: "The murky pond water hid the fish." },
    ],
  },
  {
    slug: "the-ice-cream-truck",
    title: "The Ice Cream Truck",
    description: "A child hears the ice cream truck and rushes out to buy a treat.",
    level: 1,
    wordCount: 100,
    theme: "Food",
    body: `I was doing my homework when I heard a cheerful tune. It was the ice cream truck! I ran to my mother. "Can I have some ice cream, please?" I begged.

My mother gave me two dollars. I dashed out of the house. The truck was parked at the end of the street. Other children were already there, forming a long queue.

When it was my turn, I chose a chocolate ice cream cone. The ice cream man handed it to me with a smile. I licked the creamy ice cream happily. It was cold and sweet.

I walked home slowly, enjoying every lick. By the time I reached home, my hands were sticky. But I did not mind. It was the best treat ever!`,
    vocabulary: [
      { word: "cheerful", meaning: "happy and bright", partOfSpeech: "adjective", example: "She gave a cheerful wave to her friends." },
      { word: "begged", meaning: "asked for something in a strong and emotional way", partOfSpeech: "verb", example: "He begged his mother to let him stay up late." },
      { word: "dashed", meaning: "ran somewhere very quickly", partOfSpeech: "verb", example: "She dashed to catch the bus." },
      { word: "queue", meaning: "a line of people waiting for something", partOfSpeech: "noun", example: "There was a long queue at the canteen." },
      { word: "sticky", meaning: "covered with something that sticks to your skin", partOfSpeech: "adjective", example: "Her fingers were sticky after eating the candy." },
    ],
  },
  {
    slug: "lost-in-the-supermarket",
    title: "Lost in the Supermarket",
    description: "A child gets separated from his mother while shopping.",
    level: 1,
    wordCount: 115,
    theme: "Safety",
    body: `One evening, my mother took me to the supermarket. It was very crowded. My mother held my hand tightly as we walked through the aisles.

I saw a toy car on a shelf. I let go of my mother's hand to look at it. When I turned around, my mother was gone! My heart started to beat very fast. I felt scared.

I walked around but I could not find her. My eyes filled with tears. Then, I remembered what my teacher had taught me. I went to a worker in a uniform and said, "I cannot find my mother."

The kind worker took me to the service counter. She made an announcement. A few minutes later, my mother came running towards me. She hugged me tightly.

"Never let go of my hand again," she said. I nodded. I had learned my lesson.`,
    vocabulary: [
      { word: "crowded", meaning: "full of many people", partOfSpeech: "adjective", example: "The bus was very crowded during rush hour." },
      { word: "aisles", meaning: "long narrow spaces between rows of shelves in a shop", partOfSpeech: "noun", example: "She walked down the aisles looking for bread." },
      { word: "scared", meaning: "feeling afraid or frightened", partOfSpeech: "adjective", example: "He was scared of the dark." },
      { word: "announcement", meaning: "a public message spoken over a loudspeaker", partOfSpeech: "noun", example: "The announcement told passengers to board the train." },
      { word: "hugged", meaning: "held someone tightly in your arms to show love", partOfSpeech: "verb", example: "She hugged her teddy bear before going to sleep." },
    ],
  },
  {
    slug: "the-butterfly-garden",
    title: "The Butterfly Garden",
    description: "A class trip to a butterfly garden full of colourful surprises.",
    level: 1,
    wordCount: 110,
    theme: "Nature",
    body: `Our class went to the butterfly garden. My teacher, Miss Lim, told us to walk quietly so we would not scare the butterflies.

Inside the garden, there were hundreds of butterflies! They were red, yellow, blue and orange. They fluttered from flower to flower. It was like a rainbow had come alive.

A big blue butterfly landed on my shoulder. I stood very still. My friend, Jenny, took a photo of me. I was so thrilled!

Miss Lim showed us a caterpillar on a leaf. She told us that caterpillars turn into butterflies. I was amazed. How could a crawling caterpillar become a beautiful butterfly?

Before we left, I bought a bookmark with a butterfly picture from the gift shop. I will always remember this wonderful trip.`,
    vocabulary: [
      { word: "fluttered", meaning: "moved wings quickly and lightly", partOfSpeech: "verb", example: "The bird fluttered its wings and flew away." },
      { word: "thrilled", meaning: "feeling very excited and happy", partOfSpeech: "adjective", example: "She was thrilled to win the race." },
      { word: "caterpillar", meaning: "a small creature with many legs that later becomes a butterfly", partOfSpeech: "noun", example: "The caterpillar munched on a green leaf." },
      { word: "amazed", meaning: "very surprised in a good way", partOfSpeech: "adjective", example: "I was amazed by the magic trick." },
      { word: "crawling", meaning: "moving slowly on hands and knees or close to the ground", partOfSpeech: "verb", example: "The baby was crawling across the floor." },
    ],
  },
  {
    slug: "sharing-is-caring",
    title: "Sharing is Caring",
    description: "A child learns the importance of sharing with a classmate.",
    level: 1,
    wordCount: 105,
    theme: "Values",
    body: `During art class, we had to colour a picture of a garden. I opened my pencil case and took out my colour pencils. I had a brand new set of twelve colours.

The boy next to me, Kumar, looked sad. He only had three colour pencils. One of them was broken.

At first, I did not want to share. My colour pencils were new! But then I saw Kumar trying to colour a flower with his broken pencil. I felt sorry for him.

"Here, you can use mine," I said, pushing my pencils towards him. Kumar's face lit up. "Thank you!" he said happily.

We shared the colour pencils and finished our pictures. Kumar drew a very pretty garden. At the end of class, he gave me a sweet from his pocket. I smiled. Sharing felt good.`,
    vocabulary: [
      { word: "brand new", meaning: "completely new, never used before", partOfSpeech: "adjective", example: "She got a brand new bicycle for her birthday." },
      { word: "broken", meaning: "damaged and not working properly", partOfSpeech: "adjective", example: "The broken toy could not be fixed." },
      { word: "lit up", meaning: "became bright and happy, usually describing a face", partOfSpeech: "verb", example: "Her face lit up when she saw the surprise." },
      { word: "pocket", meaning: "a small bag sewn into clothing for carrying small things", partOfSpeech: "noun", example: "He put the coin into his pocket." },
      { word: "sharing", meaning: "giving part of what you have to someone else", partOfSpeech: "verb", example: "Sharing your toys makes everyone happy." },
    ],
  },

  // ════════════════════════════════════════
  // PRIMARY 2
  // ════════════════════════════════════════
  {
    slug: "the-lost-puppy",
    title: "The Lost Puppy",
    description: "A girl finds a lost puppy at the park and tries to find its owner.",
    level: 2,
    wordCount: 160,
    theme: "Kindness",
    body: `One sunny afternoon, Mei Ling was playing at the park near her block. She noticed a small brown puppy hiding under a bench. It was shivering and looked frightened.

"Poor thing," Mei Ling whispered. She knelt down and offered her hand. The puppy sniffed her fingers and wagged its tiny tail. She noticed a red collar around its neck with a phone number on it.

Mei Ling rushed home and told her father about the puppy. Her father called the number on the collar. Soon, a worried lady arrived at the park. "Biscuit!" she cried, scooping the puppy into her arms.

The lady thanked Mei Ling many times. "You are a very kind girl," she said with a warm smile. Mei Ling felt proud. She had done a good deed that day.

On the way home, her father said, "I am proud of you, Mei Ling." She beamed with happiness.`,
    vocabulary: [
      { word: "shivering", meaning: "shaking slightly because of cold or fear", partOfSpeech: "verb", example: "The kitten was shivering in the cold rain." },
      { word: "frightened", meaning: "feeling afraid or scared", partOfSpeech: "adjective", example: "The loud thunder made the child frightened." },
      { word: "whispered", meaning: "spoke very softly and quietly", partOfSpeech: "verb", example: "She whispered a secret into my ear." },
      { word: "scooping", meaning: "picking something up quickly with both hands", partOfSpeech: "verb", example: "He was scooping sand into a bucket." },
      { word: "beamed", meaning: "smiled very widely and happily", partOfSpeech: "verb", example: "She beamed when she received the award." },
    ],
  },
  {
    slug: "my-first-day-of-school",
    title: "My First Day of School",
    description: "An exciting and nervous first day at a new school.",
    level: 2,
    wordCount: 150,
    theme: "School",
    body: `I woke up very early on my first day of school. My stomach was full of butterflies. I put on my new uniform and looked at myself in the mirror. I looked smart!

My mother walked me to the school gate. "Be brave," she said and gave me a hug. I took a deep breath and walked in.

The classroom was big and bright. There were colourful posters on the walls. My teacher, Mrs Tan, had a kind face. "Welcome, everyone!" she said cheerfully.

I sat next to a boy named Ravi. He smiled at me. "Do you like dinosaurs?" he asked. I nodded eagerly. We spent recess talking about our favourite dinosaurs.

When my mother picked me up, I could not stop talking about my new friend. School was not scary at all. I could not wait to go back the next day!`,
    vocabulary: [
      { word: "butterflies", meaning: "a nervous, fluttery feeling in your stomach", partOfSpeech: "noun", example: "I had butterflies before my piano recital." },
      { word: "uniform", meaning: "special clothes that students wear to school", partOfSpeech: "noun", example: "She ironed her school uniform the night before." },
      { word: "brave", meaning: "not afraid; ready to face something difficult", partOfSpeech: "adjective", example: "The brave firefighter rescued the cat from the tree." },
      { word: "cheerfully", meaning: "in a happy and positive way", partOfSpeech: "adverb", example: "She cheerfully greeted everyone at the door." },
      { word: "eagerly", meaning: "with great interest and excitement", partOfSpeech: "adverb", example: "The students eagerly raised their hands to answer." },
    ],
  },
  {
    slug: "the-missing-lunchbox",
    title: "The Missing Lunchbox",
    description: "A boy cannot find his lunchbox and learns a lesson about being responsible.",
    level: 2,
    wordCount: 155,
    theme: "Responsibility",
    body: `It was recess time. I reached into my bag to take out my lunchbox, but it was not there! I searched through my bag again and again. My lunchbox had vanished.

I started to panic. My mother had packed my favourite chicken rice for lunch. I checked under my desk and in my locker. It was nowhere to be found.

My classmate, Sarah, saw me looking worried. "What is wrong?" she asked. I told her about my missing lunchbox. She kindly offered to share her sandwich with me.

After recess, my teacher found my lunchbox in the wrong classroom. Someone had picked it up by mistake. My teacher returned it to me with a reminder: "Always write your name on your belongings."

That evening, I took a marker and wrote my name in big letters on my lunchbox. I also labelled my water bottle and pencil case. I did not want to lose anything again.

Sarah became one of my closest friends after that day.`,
    vocabulary: [
      { word: "vanished", meaning: "disappeared suddenly", partOfSpeech: "verb", example: "The magician made the coin vanish into thin air." },
      { word: "panic", meaning: "a sudden feeling of great fear that makes it hard to think clearly", partOfSpeech: "noun", example: "There was no need to panic over a small mistake." },
      { word: "locker", meaning: "a small cupboard where you keep your things at school", partOfSpeech: "noun", example: "She kept her books in her locker." },
      { word: "belongings", meaning: "things that you own", partOfSpeech: "noun", example: "Please take all your belongings when you leave." },
      { word: "labelled", meaning: "attached a tag or wrote a name on something", partOfSpeech: "verb", example: "She labelled all her folders with her name." },
    ],
  },
  {
    slug: "the-surprise-party",
    title: "The Surprise Party",
    description: "Friends plan a surprise birthday party for their classmate.",
    level: 2,
    wordCount: 150,
    theme: "Friendship",
    body: `It was Rina's birthday, but she did not know we had planned a surprise for her. During recess, my friends and I decorated the classroom with balloons and streamers. We worked quickly and quietly.

When Rina came back from the library, we all hid behind our desks. The door opened. "SURPRISE!" we shouted and jumped up. Rina's eyes went wide. Her mouth dropped open in shock.

"Happy birthday, Rina!" we sang together. Our teacher, Mr Wong, brought in a chocolate cake. Rina could not believe her eyes. She clasped her hands over her mouth and burst into happy tears.

We ate cake and played games. Rina received many lovely gifts from her friends. She hugged each one of us. "This is the best birthday ever!" she said joyfully.

When school ended, Rina thanked me again. "You are the best friends anyone could ask for," she said. Her smile made all the planning worth it.`,
    vocabulary: [
      { word: "decorated", meaning: "made something look more attractive by adding pretty things", partOfSpeech: "verb", example: "They decorated the hall with flowers and ribbons." },
      { word: "streamers", meaning: "long, narrow strips of coloured paper used for decoration", partOfSpeech: "noun", example: "Colourful streamers hung from the ceiling." },
      { word: "shock", meaning: "a sudden feeling of great surprise", partOfSpeech: "noun", example: "She stared at the result in shock." },
      { word: "clasped", meaning: "held something tightly with both hands", partOfSpeech: "verb", example: "He clasped the trophy with both hands." },
      { word: "joyfully", meaning: "in a very happy way", partOfSpeech: "adverb", example: "The children danced joyfully in the rain." },
    ],
  },
  {
    slug: "a-trip-to-the-zoo",
    title: "A Trip to the Zoo",
    description: "A family outing to the zoo with unexpected animal encounters.",
    level: 2,
    wordCount: 150,
    theme: "Animals",
    body: `During the school holidays, my family went to the zoo. I was thrilled because I had never seen a real elephant before.

At the entrance, we were given a map. My little brother, Ethan, wanted to see the monkeys first. We walked to the monkey enclosure. The monkeys were swinging from branch to branch. One cheeky monkey stuck out its tongue at us! Ethan giggled loudly.

Next, we visited the elephants. They were enormous! One elephant used its long trunk to spray water. Some of the water splashed on us. We shrieked but it was refreshing in the hot weather.

We also saw giraffes, zebras and colourful parrots. My favourite was the penguin exhibit. The penguins waddled around on the ice and dived into the cold water. They looked so funny!

Before leaving, my father bought us each a soft toy. I chose a penguin. That night, I fell asleep hugging my new toy, dreaming about the wonderful animals I had seen.`,
    vocabulary: [
      { word: "thrilled", meaning: "very excited and happy", partOfSpeech: "adjective", example: "She was thrilled to meet her favourite author." },
      { word: "enclosure", meaning: "a fenced area where animals are kept", partOfSpeech: "noun", example: "The lions rested in their enclosure." },
      { word: "enormous", meaning: "extremely big", partOfSpeech: "adjective", example: "The enormous whale swam past the boat." },
      { word: "shrieked", meaning: "made a loud, high sound because of surprise or excitement", partOfSpeech: "verb", example: "She shrieked when she saw the spider." },
      { word: "waddled", meaning: "walked with short steps, swaying from side to side", partOfSpeech: "verb", example: "The ducks waddled towards the pond." },
    ],
  },
  {
    slug: "the-broken-vase",
    title: "The Broken Vase",
    description: "A child accidentally breaks a vase and decides to tell the truth.",
    level: 2,
    wordCount: 145,
    theme: "Honesty",
    body: `I was playing catch with my sister in the living room when the ball hit my mother's favourite vase. CRASH! The vase fell off the table and shattered into pieces. My heart sank.

"Oh no!" my sister gasped. We stared at the broken pieces on the floor. It was a beautiful vase that my grandmother had given to my mother.

"Let's hide the pieces," my sister suggested. "Mother will not know." I thought about it for a moment. But I knew that hiding it would be wrong.

When my mother came home, I told her the truth. "I am sorry, Mother. We were playing inside and broke your vase." My mother looked upset at first. Then she took a deep breath.

"Thank you for being honest," she said. "I am disappointed about the vase, but I am glad you told me the truth. That takes courage." She hugged me.

From that day on, I made sure to play catch only outdoors.`,
    vocabulary: [
      { word: "shattered", meaning: "broke suddenly into many small pieces", partOfSpeech: "verb", example: "The glass shattered when it fell on the floor." },
      { word: "gasped", meaning: "took a quick, short breath because of surprise or shock", partOfSpeech: "verb", example: "She gasped when she saw the surprise." },
      { word: "suggested", meaning: "put forward an idea for someone to think about", partOfSpeech: "verb", example: "He suggested that we take a different route." },
      { word: "disappointed", meaning: "sad because something did not happen the way you hoped", partOfSpeech: "adjective", example: "She was disappointed when the event was cancelled." },
      { word: "courage", meaning: "the ability to do something that is difficult or scary", partOfSpeech: "noun", example: "It took courage to stand up and speak." },
    ],
  },
  {
    slug: "the-school-garden",
    title: "The School Garden",
    description: "A class project to grow vegetables in the school garden.",
    level: 2,
    wordCount: 140,
    theme: "Nature",
    body: `Our class started a garden project. Our teacher, Mrs Lee, gave each of us a small pot and some seeds. I received tomato seeds.

Every day, I watered my plant carefully. At first, nothing happened. I wondered if the seeds were growing at all. After a week, a tiny green shoot appeared! I was overjoyed.

Over the next few weeks, my plant grew taller and taller. It sprouted leaves and small yellow flowers. Mrs Lee taught us that the flowers would turn into tomatoes.

One morning, I spotted a small green tomato on my plant. I could hardly contain my excitement. I showed everyone in class. Slowly, the tomato grew bigger and turned red.

When it was ready, I plucked the tomato and brought it home. My mother sliced it and added it to our salad. It was the sweetest tomato I had ever tasted. Growing my own food was truly rewarding.`,
    vocabulary: [
      { word: "shoot", meaning: "a new part of a plant that is just beginning to grow", partOfSpeech: "noun", example: "A tiny green shoot poked through the soil." },
      { word: "overjoyed", meaning: "extremely happy", partOfSpeech: "adjective", example: "She was overjoyed when she heard the good news." },
      { word: "sprouted", meaning: "began to grow new parts like leaves or buds", partOfSpeech: "verb", example: "The seeds sprouted after a few days of rain." },
      { word: "plucked", meaning: "picked something by pulling it quickly", partOfSpeech: "verb", example: "She plucked a flower from the garden." },
      { word: "rewarding", meaning: "giving you a feeling of satisfaction", partOfSpeech: "adjective", example: "Helping others is very rewarding." },
    ],
  },
  {
    slug: "the-new-neighbour",
    title: "The New Neighbour",
    description: "A new family moves in next door and a friendship begins.",
    level: 2,
    wordCount: 150,
    theme: "Friendship",
    body: `A new family moved into the flat next to ours. I peeked through the window and saw a boy about my age carrying a box. He looked lonely.

My mother baked some pineapple tarts and asked me to bring them over. I felt shy but I knocked on the door anyway. The boy opened it. "Hi, I am Jun Wei. I live next door," I said, holding out the box of tarts.

The boy smiled. "I am Danish. Thank you!" he said. His mother appeared behind him and thanked me warmly.

The next day, Danish and I played at the corridor. He taught me how to spin a top. I taught him how to play marbles. Even though we liked different things, we got along well.

Soon, Danish and I became inseparable. We walked to school together every morning and did our homework together every afternoon. Having a good neighbour is like having a brother. I am glad Danish moved next door.`,
    vocabulary: [
      { word: "peeked", meaning: "looked quickly and secretly", partOfSpeech: "verb", example: "She peeked through the curtains to see who was outside." },
      { word: "lonely", meaning: "feeling sad because you are alone", partOfSpeech: "adjective", example: "The new student looked lonely on the first day." },
      { word: "shy", meaning: "nervous and uncomfortable about meeting people", partOfSpeech: "adjective", example: "The shy girl hid behind her mother." },
      { word: "corridor", meaning: "a long, narrow passage in a building", partOfSpeech: "noun", example: "Students walked quietly along the corridor." },
      { word: "inseparable", meaning: "always together and very close friends", partOfSpeech: "adjective", example: "The twins were inseparable growing up." },
    ],
  },
  {
    slug: "the-class-pet",
    title: "The Class Pet",
    description: "The class gets a hamster and takes turns caring for it.",
    level: 2,
    wordCount: 145,
    theme: "Responsibility",
    body: `One Monday morning, our teacher, Mrs Goh, brought a surprise to class. It was a small hamster in a cage! "This is our new class pet," she announced. "His name is Fuzzy."

Everyone rushed forward to see Fuzzy. He was small and round with soft brown fur. His tiny black eyes looked at us curiously. He twitched his little pink nose.

Mrs Goh explained that we would take turns caring for Fuzzy. We had to feed him, change his water and clean his cage. She put up a schedule on the notice board.

When it was my turn, I felt very responsible. I gave Fuzzy fresh food and clean water. I watched him stuff sunflower seeds into his chubby cheeks. It was so adorable!

On weekends, one student would bring Fuzzy home. When it was my turn, I placed his cage on my desk. My whole family loved him. Even my grandmother laughed at his funny antics.

Fuzzy taught our class about caring for animals. He was the best class pet ever.`,
    vocabulary: [
      { word: "announced", meaning: "told people something in a clear, public way", partOfSpeech: "verb", example: "The principal announced the winners at assembly." },
      { word: "curiously", meaning: "in a way that shows you want to know more", partOfSpeech: "adverb", example: "The cat looked curiously at the new toy." },
      { word: "twitched", meaning: "made a small, quick movement", partOfSpeech: "verb", example: "The rabbit twitched its ears at the sound." },
      { word: "chubby", meaning: "slightly fat in a cute way", partOfSpeech: "adjective", example: "The baby had chubby little fingers." },
      { word: "antics", meaning: "funny or silly behaviour", partOfSpeech: "noun", example: "The puppy's antics made everyone laugh." },
    ],
  },
  {
    slug: "a-day-at-the-beach",
    title: "A Day at the Beach",
    description: "A fun family outing at the beach with sandcastles and seashells.",
    level: 2,
    wordCount: 150,
    theme: "Family",
    body: `It was a hot Saturday, so my family decided to go to the beach. I packed my bucket, shovel and swimming goggles. I could not wait!

When we arrived, the beach was beautiful. The sand was white and the sea was sparkling blue. My father set up a big umbrella while my mother spread out a mat.

My brother and I ran straight to the water. The waves splashed against our legs. The cool water felt wonderful! We jumped over the small waves and laughed.

After swimming, we built a huge sandcastle. We dug a moat around it and decorated it with seashells. A lady walking past said it was the best sandcastle she had ever seen. I felt so proud.

Later, my mother opened our picnic basket. We ate sandwiches, fruits and drank cold juice. The food tasted extra delicious at the beach.

As the sun began to set, the sky turned orange and pink. We packed up and headed home, tired but happy. It was a perfect day.`,
    vocabulary: [
      { word: "goggles", meaning: "special glasses that protect your eyes, especially in water", partOfSpeech: "noun", example: "He wore goggles when he went swimming." },
      { word: "sparkling", meaning: "shining with small flashes of light", partOfSpeech: "adjective", example: "The sparkling diamond ring was beautiful." },
      { word: "moat", meaning: "a deep, wide channel dug around a castle, usually filled with water", partOfSpeech: "noun", example: "The sandcastle had a moat filled with seawater." },
      { word: "seashells", meaning: "hard outer coverings of sea creatures found on beaches", partOfSpeech: "noun", example: "She collected pretty seashells along the shore." },
      { word: "picnic", meaning: "a meal eaten outdoors, especially in a park or at the beach", partOfSpeech: "noun", example: "We had a lovely picnic under the tree." },
    ],
  },

  // ════════════════════════════════════════
  // PRIMARY 3
  // ════════════════════════════════════════
  {
    slug: "the-school-carnival",
    title: "The School Carnival",
    description: "An adventure at the annual school carnival with games and surprises.",
    level: 3,
    wordCount: 200,
    theme: "School Events",
    body: `The school carnival was the event everyone had been waiting for. Colourful banners hung from every corner of the hall. The air was filled with the aroma of popcorn and candy floss.

My best friend, Ahmad, and I dashed to the game booths first. At the ring toss, I managed to hook a ring onto the bottle on my third attempt. I won a small stuffed bear! Ahmad tried the basketball shoot and scored three baskets in a row. He pumped his fist in celebration.

Next, we visited the haunted house. It was set up in the music room. Spooky music played as we crept through the dark corridor. Suddenly, a figure jumped out from behind a curtain. "Ahhh!" we screamed and bolted out of the room. We laughed so hard that our sides hurt.

Before we left, we bought some delicious chicken wings from the food stall run by the Parent-Teacher Association. They were crispy on the outside and juicy on the inside.

As the carnival came to an end, Ahmad and I agreed that it was the best school event ever. We could not wait for next year's carnival.`,
    vocabulary: [
      { word: "aroma", meaning: "a pleasant smell, especially from food", partOfSpeech: "noun", example: "The aroma of freshly baked bread filled the kitchen." },
      { word: "dashed", meaning: "ran somewhere very quickly", partOfSpeech: "verb", example: "She dashed across the road before the light changed." },
      { word: "attempt", meaning: "an effort to do something", partOfSpeech: "noun", example: "He passed his driving test on the second attempt." },
      { word: "crept", meaning: "moved slowly and quietly", partOfSpeech: "verb", example: "The cat crept towards the bird in the garden." },
      { word: "bolted", meaning: "ran away very quickly", partOfSpeech: "verb", example: "The rabbit bolted when it heard the loud noise." },
      { word: "delicious", meaning: "very tasty and enjoyable to eat", partOfSpeech: "adjective", example: "Grandmother makes the most delicious pineapple tarts." },
    ],
  },
  {
    slug: "the-bully",
    title: "Standing Up to the Bully",
    description: "A student finds the courage to stand up against a school bully.",
    level: 3,
    wordCount: 210,
    theme: "Courage",
    body: `There was a boy in our class named Jason who liked to bully others. He would snatch people's stationery, call them mean names and push them during recess. Everyone was afraid of him.

One day, Jason picked on my friend, Hafiz. He grabbed Hafiz's spectacles and held them high above his head. "Jump for them!" Jason taunted. Hafiz's eyes welled up with tears.

Something inside me snapped. I walked up to Jason and said firmly, "Give them back. That is not funny." Jason looked surprised. Nobody had ever stood up to him before.

"Mind your own business," he growled. But I did not back down. "What you are doing is wrong. How would you feel if someone did that to you?" I asked, looking him straight in the eye.

Jason stared at me for a long moment. Then, he slowly lowered his hand and returned the spectacles to Hafiz. He walked away without saying a word.

After school, I told my teacher, Miss Tan, what had happened. She thanked me and said she would speak to Jason. The next week, Jason was quieter. He even apologised to Hafiz.

Standing up for what is right is never easy, but it is always worth it.`,
    vocabulary: [
      { word: "snatch", meaning: "to grab something quickly and roughly", partOfSpeech: "verb", example: "The thief tried to snatch her handbag." },
      { word: "taunted", meaning: "made fun of someone in a cruel way to make them upset", partOfSpeech: "verb", example: "The other children taunted him about his haircut." },
      { word: "welled up", meaning: "filled with tears that were about to spill over", partOfSpeech: "verb", example: "Her eyes welled up when she heard the sad song." },
      { word: "firmly", meaning: "in a strong and determined way", partOfSpeech: "adverb", example: "She spoke firmly to get everyone's attention." },
      { word: "growled", meaning: "said something in a low, angry voice", partOfSpeech: "verb", example: "The guard growled at the trespassers to leave." },
      { word: "apologised", meaning: "said sorry for doing something wrong", partOfSpeech: "verb", example: "He apologised for being late to class." },
    ],
  },
  {
    slug: "the-cooking-disaster",
    title: "The Cooking Disaster",
    description: "An attempt to cook breakfast for Mother's Day goes hilariously wrong.",
    level: 3,
    wordCount: 200,
    theme: "Family",
    body: `It was Mother's Day. My brother, Zhi Hao, and I decided to surprise our mother by cooking breakfast for her. How hard could it be?

We tiptoed into the kitchen early in the morning. Zhi Hao took out the eggs while I prepared the bread. "I'll make scrambled eggs," he declared confidently.

He cracked an egg, but half the shell fell into the bowl. He tried to fish it out with his fingers. Meanwhile, I put two slices of bread into the toaster and turned the dial all the way up.

Zhi Hao poured the eggs into the pan. He forgot to add oil! The eggs stuck to the pan and started burning. Black smoke filled the kitchen. At the same time, my toast popped out completely charred.

The smoke alarm went off with a piercing beep. Our mother rushed into the kitchen looking alarmed. She saw the burnt eggs, the charred toast and our guilty faces.

Then, she burst out laughing. "Thank you for trying," she said, pulling us into a hug. We ended up eating cereal together, laughing about our cooking disaster.

Next year, we decided we would just buy her flowers instead.`,
    vocabulary: [
      { word: "declared", meaning: "said something in a strong, confident way", partOfSpeech: "verb", example: "She declared that she would win the race." },
      { word: "confidently", meaning: "in a way that shows you believe in yourself", partOfSpeech: "adverb", example: "He confidently answered every question in the quiz." },
      { word: "charred", meaning: "burned black and crispy", partOfSpeech: "adjective", example: "The charred marshmallow tasted bitter." },
      { word: "piercing", meaning: "very loud and sharp", partOfSpeech: "adjective", example: "The piercing alarm woke up the entire building." },
      { word: "alarmed", meaning: "feeling worried or frightened that something bad might happen", partOfSpeech: "adjective", example: "The alarmed mother ran to check on her child." },
      { word: "disaster", meaning: "an event that causes great damage or trouble", partOfSpeech: "noun", example: "The birthday cake was a complete disaster." },
    ],
  },
  {
    slug: "the-mysterious-box",
    title: "The Mysterious Box",
    description: "A child finds a mysterious box in the attic and uncovers a family treasure.",
    level: 3,
    wordCount: 210,
    theme: "Discovery",
    body: `While helping my mother clean the storeroom, I discovered a dusty old box hidden behind some luggage. It was made of dark wood and had a small brass lock on the front. My curiosity was instantly aroused.

"What is this?" I asked my mother, carrying the heavy box out carefully. She looked puzzled. "I have not seen that box in years," she said. "It belonged to your grandfather."

My mother found the tiny key in her jewellery drawer. With trembling hands, I turned the key and lifted the lid. Inside, there was a collection of old photographs, a pocket watch and a bundle of letters tied with a faded ribbon.

The photographs showed my grandfather as a young man. He was wearing a military uniform and standing in front of a ship. My mother's eyes grew misty. "He was in the navy," she said softly. "He never talked much about those days."

We spent the whole afternoon reading his letters. They were written to my grandmother during his time at sea. The words were full of love and longing.

That dusty box opened a window into my grandfather's past. I placed the pocket watch carefully on my desk. Every time I look at it, I feel connected to a grandfather I never got to meet.`,
    vocabulary: [
      { word: "curiosity", meaning: "a strong desire to know or learn something", partOfSpeech: "noun", example: "Her curiosity led her to explore the old house." },
      { word: "aroused", meaning: "caused a feeling or reaction to start", partOfSpeech: "verb", example: "The strange noise aroused suspicion." },
      { word: "puzzled", meaning: "confused and unable to understand something", partOfSpeech: "adjective", example: "He looked puzzled by the difficult math problem." },
      { word: "trembling", meaning: "shaking slightly, usually from excitement or nervousness", partOfSpeech: "adjective", example: "She opened the envelope with trembling hands." },
      { word: "faded", meaning: "lost its colour or brightness over time", partOfSpeech: "adjective", example: "The faded curtains needed to be replaced." },
      { word: "longing", meaning: "a strong feeling of wanting something very much", partOfSpeech: "noun", example: "She felt a deep longing for her hometown." },
    ],
  },
  {
    slug: "the-wrong-bus",
    title: "The Wrong Bus",
    description: "A student takes the wrong bus home and must find her way back.",
    level: 3,
    wordCount: 200,
    theme: "Problem-Solving",
    body: `After school, I was in a hurry and accidentally boarded the wrong bus. I was busy reading a book and did not notice until the bus turned into an unfamiliar road. I looked out the window. Nothing looked familiar!

My heart began to pound. I pressed the bell and got off at the next stop. I stood on the pavement, clutching my school bag tightly. I did not recognise anything around me.

I took a deep breath and tried to stay calm. I remembered my mother's phone number. I looked around and spotted a coffee shop nearby. I walked in and politely asked the uncle at the counter if I could borrow his phone.

"Of course, girl," he said kindly. I called my mother and told her where I was. She sounded worried but told me to stay put. Twenty minutes later, my father's car pulled up. I had never been so relieved in my life.

On the way home, my father was not angry. "You stayed calm and asked for help. That was the right thing to do," he said.

From that day on, I always double-checked the bus number before boarding. I also memorised my parents' phone numbers — just in case.`,
    vocabulary: [
      { word: "unfamiliar", meaning: "not known or recognised; strange", partOfSpeech: "adjective", example: "She felt nervous in the unfamiliar neighbourhood." },
      { word: "pound", meaning: "to beat very fast and hard", partOfSpeech: "verb", example: "My heart began to pound during the scary movie." },
      { word: "clutching", meaning: "holding something tightly because of fear or worry", partOfSpeech: "verb", example: "The child was clutching her mother's hand tightly." },
      { word: "politely", meaning: "in a respectful and well-mannered way", partOfSpeech: "adverb", example: "She politely asked the teacher for permission." },
      { word: "relieved", meaning: "feeling happy because something stressful has ended", partOfSpeech: "adjective", example: "I was relieved when the test was finally over." },
      { word: "memorised", meaning: "learned something so well that you can remember it exactly", partOfSpeech: "verb", example: "She memorised all the spelling words for the test." },
    ],
  },
  {
    slug: "the-talent-show",
    title: "The Talent Show",
    description: "A shy student overcomes stage fright to perform in the school talent show.",
    level: 3,
    wordCount: 210,
    theme: "Confidence",
    body: `I loved singing, but only in the shower. The idea of singing in front of people terrified me. So when my music teacher, Mr Koh, asked me to perform at the school talent show, I wanted to say no immediately.

"You have a beautiful voice," Mr Koh encouraged. "Give it a try." After much persuasion, I reluctantly agreed.

For the next two weeks, I practised every day. I sang in front of my mirror, then in front of my family. My knees wobbled each time, but I kept going.

On the day of the show, the school hall was packed. I stood backstage, peeping through the curtain. My stomach churned. When my name was called, my legs felt like jelly.

I walked to the centre of the stage. The spotlight was blinding. I gripped the microphone, took a deep breath and began to sing. At first, my voice was shaky. But as the melody flowed, I forgot about the audience. I lost myself in the song.

When I finished, there was silence. Then, the hall erupted in thunderous applause. My classmates cheered and whistled. I could see Mr Koh in the front row, clapping with a proud smile.

I did not win first place, but it did not matter. I had conquered my fear. That was my real victory.`,
    vocabulary: [
      { word: "terrified", meaning: "extremely scared", partOfSpeech: "adjective", example: "He was terrified of heights." },
      { word: "persuasion", meaning: "the act of convincing someone to do something", partOfSpeech: "noun", example: "It took a lot of persuasion to get him to join the team." },
      { word: "reluctantly", meaning: "in a way that shows you do not really want to do something", partOfSpeech: "adverb", example: "She reluctantly agreed to lend him her book." },
      { word: "wobbled", meaning: "moved unsteadily from side to side", partOfSpeech: "verb", example: "The table wobbled because one leg was shorter." },
      { word: "churned", meaning: "moved around in an uncomfortable way, usually from nerves", partOfSpeech: "verb", example: "Her stomach churned before the big interview." },
      { word: "conquered", meaning: "successfully overcome something difficult", partOfSpeech: "verb", example: "She conquered her fear of swimming." },
    ],
  },
  {
    slug: "the-stray-kitten",
    title: "The Stray Kitten",
    description: "A child rescues a stray kitten during a storm.",
    level: 3,
    wordCount: 200,
    theme: "Compassion",
    body: `A terrible storm hit our neighbourhood one evening. Rain poured down in sheets and the wind howled fiercely. I was sitting by the window when I heard a faint crying sound. It was coming from outside.

I peered through the rain and spotted a tiny kitten huddled under the drain near our gate. It was soaking wet and meowing pitifully. My heart ached for the poor creature.

"Can we bring it in?" I pleaded with my mother. She hesitated but seeing the kitten shivering in the cold, she nodded.

I grabbed an umbrella and rushed out. I gently picked up the trembling kitten and wrapped it in a towel. It was so small it fitted in one hand. Its fur was matted and dirty, but its big round eyes looked at me with trust.

We dried the kitten and fed it some warm milk. Slowly, it stopped shivering and began to purr. The sound was soft and soothing.

The next day, we took the kitten to the vet. She said it was healthy but needed proper food and care. My parents agreed to let me keep it. I named her Stormy, after the night she came into our lives.

Stormy grew into a beautiful cat. She sleeps on my bed every night, purring contentedly.`,
    vocabulary: [
      { word: "howled", meaning: "made a long, loud crying sound", partOfSpeech: "verb", example: "The wind howled through the trees." },
      { word: "huddled", meaning: "curled up tightly in a small space", partOfSpeech: "verb", example: "The children huddled together to keep warm." },
      { word: "pitifully", meaning: "in a way that makes you feel sorry", partOfSpeech: "adverb", example: "The lost dog whimpered pitifully." },
      { word: "pleaded", meaning: "asked for something in a very emotional and urgent way", partOfSpeech: "verb", example: "She pleaded with her parents to let her go to the party." },
      { word: "matted", meaning: "tangled and stuck together in a messy way", partOfSpeech: "adjective", example: "The dog's matted fur needed to be brushed." },
      { word: "contentedly", meaning: "in a happy and satisfied way", partOfSpeech: "adverb", example: "The baby slept contentedly in her mother's arms." },
    ],
  },
  {
    slug: "the-race",
    title: "The Big Race",
    description: "A student trains hard for sports day and learns about perseverance.",
    level: 3,
    wordCount: 200,
    theme: "Perseverance",
    body: `Sports Day was two weeks away and I had signed up for the 100-metre sprint. There was just one problem — I was one of the slowest runners in my class.

My father offered to help me train. Every morning, we woke up at six o'clock and jogged around the park. At first, I could barely run one round without stopping. My legs burned and my chest heaved. But my father kept encouraging me. "One more round," he would say.

Gradually, I improved. I could run faster and longer without getting tired. My father taught me how to push off the starting line and lean forward at the finish.

On Sports Day, my heart hammered as I crouched at the starting line. The whistle blew. I sprang forward, pumping my arms and legs as fast as I could. The crowd was cheering but I could only hear the thudding of my own heartbeat.

I crossed the finish line in third place. I had won a bronze medal! It was not gold, but I did not care. Two weeks ago, I could not even finish a race. Now I had a medal around my neck.

My father lifted me up and swung me around. "I am so proud of you," he said. That bronze medal remains my most treasured possession.`,
    vocabulary: [
      { word: "sprint", meaning: "a short, fast race", partOfSpeech: "noun", example: "He won the sprint with an impressive time." },
      { word: "heaved", meaning: "rose and fell heavily with effort", partOfSpeech: "verb", example: "His chest heaved after the long run." },
      { word: "gradually", meaning: "slowly, over a period of time", partOfSpeech: "adverb", example: "The weather gradually became warmer in spring." },
      { word: "hammered", meaning: "beat very fast and loudly", partOfSpeech: "verb", example: "My heart hammered with excitement." },
      { word: "crouched", meaning: "bent your knees and lowered your body close to the ground", partOfSpeech: "verb", example: "She crouched behind the bush to hide." },
      { word: "treasured", meaning: "valued very highly and kept carefully", partOfSpeech: "adjective", example: "The locket was her most treasured possession." },
    ],
  },
  {
    slug: "the-power-cut",
    title: "The Power Cut",
    description: "A family bonds during an unexpected power cut at home.",
    level: 3,
    wordCount: 200,
    theme: "Family",
    body: `I was watching my favourite cartoon when suddenly — click — everything went dark. The television, the lights and the fan all stopped at once. It was a power cut!

"Not again!" my sister groaned. We sat in darkness, unsure of what to do. My mother found a torch and my father lit some candles. The flickering candlelight cast dancing shadows on the walls.

Without television or video games, we were at a loss. Then my father suggested we play card games. We sat around the dining table and played "Happy Families" by candlelight. My mother made cold drinks and brought out some snacks.

My father began telling us stories about his childhood. He told us about catching spiders, climbing trees and swimming in the river near his village. His stories were fascinating. We laughed until our stomachs hurt.

My sister and I then took turns telling funny jokes. Some were terrible, but that made them even funnier. Even my usually serious father could not stop chuckling.

Two hours later, the lights flickered back on. Strangely, we felt a little disappointed. "Can we do this again?" my sister asked.

That night, I realised that the best moments do not need electricity. They just need family.`,
    vocabulary: [
      { word: "groaned", meaning: "made a long, low sound to show displeasure or frustration", partOfSpeech: "verb", example: "The students groaned when extra homework was given." },
      { word: "flickering", meaning: "shining with a light that keeps going on and off", partOfSpeech: "adjective", example: "The flickering candle created a cosy atmosphere." },
      { word: "at a loss", meaning: "not knowing what to do or say", partOfSpeech: "phrase", example: "She was at a loss for words after the surprise." },
      { word: "fascinating", meaning: "extremely interesting", partOfSpeech: "adjective", example: "The documentary about sharks was fascinating." },
      { word: "chuckling", meaning: "laughing quietly", partOfSpeech: "verb", example: "He was chuckling at the comic book." },
      { word: "disappointed", meaning: "sad because something did not happen the way you wanted", partOfSpeech: "adjective", example: "She was disappointed when the trip was cancelled." },
    ],
  },
  {
    slug: "the-library-adventure",
    title: "The Library Adventure",
    description: "A visit to the library turns into an exciting adventure through books.",
    level: 3,
    wordCount: 200,
    theme: "Reading",
    body: `I used to think libraries were boring. Rows and rows of dusty books with nothing interesting inside. That changed the day my mother dragged me to the neighbourhood library.

"Just pick one book," she said. "If you do not like it, we will leave." I trudged to the children's section and randomly picked up a book with a dragon on the cover. I sat down on a bean bag and began reading.

Within minutes, I was hooked. The story was about a boy who discovered a dragon egg in his backyard. Together, they went on an incredible journey across mountains and seas. I could not put the book down!

When my mother came to find me, two hours had passed. I was already on chapter ten. "Can I borrow this?" I asked excitedly. She smiled knowingly. "Of course."

I finished the book that same night, reading under my blanket with a torch. The next day, I went back to the library and borrowed three more books from the same series.

Now, I visit the library every week. I have read books about space explorers, jungle adventures and time-travelling detectives. Each book takes me to a different world.

My mother was right. The library is not boring at all. It is the most exciting place I know.`,
    vocabulary: [
      { word: "trudged", meaning: "walked slowly with heavy steps, usually because you do not want to go", partOfSpeech: "verb", example: "He trudged to school on the cold morning." },
      { word: "randomly", meaning: "without any plan or pattern", partOfSpeech: "adverb", example: "She randomly selected a number from the hat." },
      { word: "hooked", meaning: "very interested and wanting more", partOfSpeech: "adjective", example: "I was hooked on the show after the first episode." },
      { word: "incredible", meaning: "amazingly good or hard to believe", partOfSpeech: "adjective", example: "The magician performed incredible tricks." },
      { word: "knowingly", meaning: "in a way that shows you already know or understand something", partOfSpeech: "adverb", example: "She smiled knowingly, as if she had expected this." },
      { word: "series", meaning: "a set of books that are connected and tell a continuing story", partOfSpeech: "noun", example: "I have read every book in the mystery series." },
    ],
  },

  // ════════════════════════════════════════
  // PRIMARY 4
  // ════════════════════════════════════════
  {
    slug: "an-unexpected-visitor",
    title: "An Unexpected Visitor",
    description: "A family discovers a monitor lizard in their garden one morning.",
    level: 4,
    wordCount: 250,
    theme: "Nature",
    body: `It was a peaceful Sunday morning. My family was having breakfast at the dining table when my younger sister, Priya, let out a piercing shriek. "There's a monster in the garden!" she yelled, pointing at the window with trembling fingers.

We all rushed to look. To our astonishment, a large monitor lizard was sprawled across our garden path. It was nearly a metre long, with dark scaly skin and a powerful tail. Its forked tongue flicked in and out as it surveyed its surroundings.

My mother immediately ushered us away from the window. "Don't go near it," she warned. My father calmly took out his phone and called the animal rescue hotline. While we waited, I observed the lizard from a safe distance. Despite my initial fear, I found myself fascinated by the creature. It moved with a slow, deliberate grace.

Within thirty minutes, two officers from the rescue service arrived. They were equipped with special tools and wore thick gloves. With practised skill, they carefully guided the lizard into a secure container. One of the officers explained that monitor lizards sometimes wander into residential areas when their natural habitats are disturbed.

After they left, my father used the incident as a teachable moment. "We share this island with many creatures," he said thoughtfully. "It is our responsibility to treat them with respect and ensure they are returned safely to where they belong."

I nodded in agreement. That unexpected visitor had taught me an important lesson about coexisting with nature.`,
    vocabulary: [
      { word: "piercing", meaning: "very loud and sharp, almost painful to hear", partOfSpeech: "adjective", example: "The piercing sound of the alarm woke everyone up." },
      { word: "astonishment", meaning: "a feeling of great surprise", partOfSpeech: "noun", example: "To my astonishment, I had won first place." },
      { word: "sprawled", meaning: "spread out in an untidy way over a large area", partOfSpeech: "verb", example: "Books were sprawled across the floor." },
      { word: "surveyed", meaning: "looked carefully at the whole of something", partOfSpeech: "verb", example: "She surveyed the room before choosing a seat." },
      { word: "ushered", meaning: "guided or directed someone somewhere", partOfSpeech: "verb", example: "The usher ushered us to our seats in the theatre." },
      { word: "fascinated", meaning: "extremely interested in something", partOfSpeech: "adjective", example: "He was fascinated by the documentary about space." },
      { word: "deliberate", meaning: "done slowly and carefully on purpose", partOfSpeech: "adjective", example: "She took deliberate steps across the icy pavement." },
      { word: "habitats", meaning: "the natural homes of animals or plants", partOfSpeech: "noun", example: "Forests are the habitats of many wild animals." },
    ],
  },
  {
    slug: "the-group-project",
    title: "The Group Project",
    description: "A challenging group project teaches a student about teamwork and compromise.",
    level: 4,
    wordCount: 260,
    theme: "Teamwork",
    body: `Our science teacher, Mr Rahman, assigned us a group project on the water cycle. I was placed in a group with three other students: Hui Min, Darren and Kavitha. We had two weeks to prepare a presentation and a poster.

The problems began immediately. Darren wanted to make a video, Hui Min insisted on a traditional poster, and Kavitha thought we should build a 3D model. Everyone had different ideas and no one was willing to compromise. Our discussions quickly turned into arguments.

After two days of getting nowhere, I decided to take charge. I called a meeting during recess and brought a notebook. "Let us list everyone's ideas and find a way to combine them," I suggested.

Slowly, we came up with a plan. We would create a poster with a small 3D model attached, and Darren could film a short video explanation. Everyone had a role that matched their strengths. Kavitha was artistic, so she designed the poster. Hui Min was great at research, so she gathered the information. Darren handled the video, and I organised everything and wrote the script.

The next two weeks were intense but productive. We met after school several times and communicated through a group chat. There were still occasional disagreements, but we learned to listen to each other and find middle ground.

On presentation day, our project received the highest marks in the class. Mr Rahman commended us not just for the content, but for our excellent teamwork.

Walking home that day, I reflected on the experience. The project had taught me that the best results come not from one person's vision, but from many minds working together.`,
    vocabulary: [
      { word: "assigned", meaning: "gave someone a task or piece of work to do", partOfSpeech: "verb", example: "The teacher assigned homework over the weekend." },
      { word: "compromise", meaning: "an agreement where each side gives up something to reach a solution", partOfSpeech: "noun", example: "They reached a compromise on the holiday destination." },
      { word: "insisted", meaning: "said something firmly and refused to change your mind", partOfSpeech: "verb", example: "She insisted that she was telling the truth." },
      { word: "productive", meaning: "achieving a lot; getting useful results", partOfSpeech: "adjective", example: "It was a very productive meeting." },
      { word: "occasional", meaning: "happening sometimes but not often", partOfSpeech: "adjective", example: "There were occasional showers throughout the day." },
      { word: "commended", meaning: "praised someone formally for doing something well", partOfSpeech: "verb", example: "The firefighter was commended for her bravery." },
      { word: "reflected", meaning: "thought carefully and deeply about something", partOfSpeech: "verb", example: "He reflected on his mistakes and learned from them." },
    ],
  },
  {
    slug: "the-bicycle-accident",
    title: "The Bicycle Accident",
    description: "A cycling trip takes a dangerous turn when a boy has an accident.",
    level: 4,
    wordCount: 250,
    theme: "Safety",
    body: `Every weekend, my friends and I cycled around the park connector near our estate. We loved the feeling of the wind rushing past us as we raced each other along the path.

One Saturday, we decided to try a new route that went downhill. "Last one to the bottom is a rotten egg!" Marcus shouted, pedalling furiously. Not wanting to lose, I picked up speed.

The slope was steeper than I expected. My bicycle began to wobble as it went faster and faster. I squeezed the brakes, but I was going too fast. Ahead of me, the path curved sharply to the left. I tried to turn but lost control. My bicycle skidded sideways and I flew over the handlebars.

I landed hard on the gravel path. Pain shot through my left arm and knee. My friends rushed over, their faces white with shock. There was blood on my knee and my arm was throbbing.

Marcus called his mother, who drove me to the clinic. The doctor cleaned my wounds and confirmed that my arm was badly bruised but not broken. I let out a huge sigh of relief.

That evening, my father sat me down for a serious talk. He reminded me about the importance of wearing a helmet, which I had forgotten that day. He also explained that racing on unfamiliar paths was reckless.

I spent the next week nursing my injuries and thinking about what had happened. When I finally got back on my bicycle, I wore my helmet and rode at a sensible pace. Some lessons are learned the hard way.`,
    vocabulary: [
      { word: "furiously", meaning: "with great energy and speed; intensely", partOfSpeech: "adverb", example: "She typed furiously to finish the essay before the deadline." },
      { word: "steeper", meaning: "rising or falling at a sharper angle", partOfSpeech: "adjective", example: "The path became steeper as we climbed higher." },
      { word: "skidded", meaning: "slid sideways in an uncontrolled way", partOfSpeech: "verb", example: "The car skidded on the wet road." },
      { word: "gravel", meaning: "small stones used to cover paths or roads", partOfSpeech: "noun", example: "The gravel crunched under our feet." },
      { word: "throbbing", meaning: "a strong, regular feeling of pain", partOfSpeech: "adjective", example: "She had a throbbing headache after the long day." },
      { word: "reckless", meaning: "doing something dangerous without thinking about the risks", partOfSpeech: "adjective", example: "Reckless driving can cause serious accidents." },
      { word: "sensible", meaning: "showing good judgment; practical and reasonable", partOfSpeech: "adjective", example: "Wearing sunscreen in hot weather is the sensible thing to do." },
    ],
  },
  {
    slug: "the-music-exam",
    title: "The Music Exam",
    description: "A student struggles to prepare for a difficult piano exam under pressure.",
    level: 4,
    wordCount: 250,
    theme: "Determination",
    body: `My Grade 5 piano exam was three weeks away, and I was not ready. The exam pieces were difficult, with complicated rhythms and fast passages. Every time I practised, my fingers stumbled over the same sections.

To make matters worse, I had a mountain of school homework every night. By the time I sat down at the piano, I was already exhausted. Some nights, I only managed to practise for twenty minutes before my eyes started drooping.

One evening, I broke down in tears. "I cannot do this," I sobbed. "There is not enough time." My mother sat beside me and placed her hand on my shoulder. "You do not have to be perfect," she said gently. "You just have to do your best."

Her words gave me a new perspective. Instead of trying to perfect everything at once, I focused on the hardest sections first. I woke up thirty minutes earlier each morning to practise before school. During lunch breaks, I listened to recordings of the exam pieces to familiarise myself with the music.

Slowly, the pieces began to come together. My fingers found their way through the difficult passages. I was still nervous, but I felt more prepared.

On exam day, I walked into the examination room with sweaty palms. The examiner smiled kindly and nodded for me to begin. I placed my trembling fingers on the keys, took a deep breath, and played.

When the results arrived two months later, I had passed with merit. I stared at the certificate in disbelief. All those early mornings and late nights had paid off.`,
    vocabulary: [
      { word: "complicated", meaning: "having many parts and difficult to understand or do", partOfSpeech: "adjective", example: "The instructions were too complicated to follow." },
      { word: "stumbled", meaning: "made mistakes while doing something", partOfSpeech: "verb", example: "He stumbled over the difficult words in the passage." },
      { word: "exhausted", meaning: "extremely tired, with no energy left", partOfSpeech: "adjective", example: "She was exhausted after running the marathon." },
      { word: "drooping", meaning: "hanging or sinking down from tiredness", partOfSpeech: "verb", example: "His eyelids were drooping during the boring lecture." },
      { word: "perspective", meaning: "a particular way of thinking about something", partOfSpeech: "noun", example: "Travelling gave her a new perspective on life." },
      { word: "familiarise", meaning: "to learn about something so that you know it well", partOfSpeech: "verb", example: "She familiarised herself with the new system." },
      { word: "merit", meaning: "a grade that is higher than a pass, showing very good work", partOfSpeech: "noun", example: "She completed the course with merit." },
    ],
  },
  {
    slug: "the-flood",
    title: "The Flood",
    description: "A sudden flood disrupts a neighbourhood and brings the community together.",
    level: 4,
    wordCount: 260,
    theme: "Community",
    body: `It had been raining heavily for three days straight. On the third night, the storm intensified. Lightning cracked across the sky and thunder shook our windows. I lay in bed, listening to the relentless downpour.

The next morning, I opened the front door and gasped. Our entire ground floor was covered in muddy brown water. The flood had arrived overnight. Shoes, slippers and potted plants were floating in the murky water. Our neighbour's car was half-submerged.

My parents quickly moved our important belongings to higher ground. We carried boxes of documents, electronic devices and photo albums upstairs. The water continued to rise throughout the morning.

By afternoon, the civil defence force arrived with boats. They evacuated elderly residents who lived on the ground floor. Volunteers from the community centre distributed food, water and blankets to affected families.

What impressed me most was how neighbours helped one another. Uncle Tan, who owned a provision shop, gave away his stock of bread and canned food for free. Aunty Mei opened her upper-floor flat to families whose homes were flooded. Even the teenagers in our block formed a chain to pass sandbags to the worst-hit areas.

The flood waters receded after two days, leaving behind a mess of mud and debris. The clean-up took weeks. But through it all, our community grew stronger. People who had barely spoken before became friends.

My father said something I will never forget: "A crisis does not just reveal problems — it reveals character." I saw the truth of those words in the kindness of our neighbours that week.`,
    vocabulary: [
      { word: "intensified", meaning: "became stronger or more extreme", partOfSpeech: "verb", example: "The wind intensified as the storm approached." },
      { word: "relentless", meaning: "never stopping; continuous and intense", partOfSpeech: "adjective", example: "The relentless heat made it hard to go outside." },
      { word: "submerged", meaning: "completely covered by water", partOfSpeech: "adjective", example: "The heavy rain left the road completely submerged." },
      { word: "evacuated", meaning: "moved people away from a dangerous area to safety", partOfSpeech: "verb", example: "The residents were evacuated before the storm hit." },
      { word: "distributed", meaning: "gave things out to several people", partOfSpeech: "verb", example: "The teacher distributed the worksheets to the class." },
      { word: "receded", meaning: "moved back or went down", partOfSpeech: "verb", example: "The flood waters receded after the rain stopped." },
      { word: "debris", meaning: "pieces of broken or destroyed material scattered around", partOfSpeech: "noun", example: "The workers cleared the debris from the road." },
    ],
  },
  {
    slug: "the-spelling-bee",
    title: "The Spelling Bee",
    description: "A student prepares for the school spelling bee and faces an unexpected challenge.",
    level: 4,
    wordCount: 250,
    theme: "Competition",
    body: `I had always been a good speller. My friends called me the "human dictionary." So when the school spelling bee was announced, everyone expected me to enter. And I did.

The preparation was intense. Every night, I studied word lists that grew increasingly difficult. My mother tested me after dinner, reading out words like "accommodate," "millennium" and "necessary." I practised writing each word ten times until it was etched into my memory.

The preliminary rounds were straightforward. I sailed through, spelling every word correctly. By the final round, only three of us remained: myself, a girl named Reshma from another class, and a boy named Timothy.

Timothy was eliminated when he misspelled "bureaucracy." Now it was just Reshma and me. The tension in the hall was electric. We went back and forth for five rounds, each of us spelling perfectly.

Then came the deciding word. The judge looked at me and said, "Your word is: onomatopoeia." My mind went blank. I had seen this word before but could never remember the exact spelling. I closed my eyes, trying to visualise it.

"O-N-O-M-A-T-O-P-O-E-I-A," I spelled slowly. There was a pause. Then the judge said, "That is correct!" The hall burst into applause.

I had won the spelling bee! As I held up my trophy, I felt grateful for all those hours of practice. Reshma came over and shook my hand graciously. "Well done," she said with a genuine smile.

The trophy sits on my bookshelf today, a reminder that hard work pays off.`,
    vocabulary: [
      { word: "increasingly", meaning: "more and more over time", partOfSpeech: "adverb", example: "The questions became increasingly difficult." },
      { word: "etched", meaning: "fixed deeply in your mind or memory", partOfSpeech: "verb", example: "The beautiful sunset was etched in her memory forever." },
      { word: "preliminary", meaning: "happening before the main event as preparation", partOfSpeech: "adjective", example: "The preliminary results looked promising." },
      { word: "eliminated", meaning: "removed from a competition because of a mistake or loss", partOfSpeech: "verb", example: "Three teams were eliminated in the first round." },
      { word: "tension", meaning: "a feeling of nervous worry or excitement", partOfSpeech: "noun", example: "There was great tension in the room before the announcement." },
      { word: "visualise", meaning: "to form a picture of something in your mind", partOfSpeech: "verb", example: "She tried to visualise what the finished garden would look like." },
      { word: "graciously", meaning: "in a polite, kind and generous way", partOfSpeech: "adverb", example: "She graciously accepted the criticism." },
    ],
  },
  {
    slug: "the-secret-ingredient",
    title: "The Secret Ingredient",
    description: "A boy discovers his grandmother's secret recipe and what makes it special.",
    level: 4,
    wordCount: 240,
    theme: "Heritage",
    body: `Every Chinese New Year, my grandmother made the most amazing pineapple tarts in the whole of Singapore. People came from all over the neighbourhood just to get a taste. Her tarts were legendary — golden, buttery and perfectly balanced between sweet and tangy.

I had always wanted to learn her recipe. "Ah Ma, what is your secret?" I would ask every year. She would just wink and say, "One day I will tell you."

This year, she finally agreed to teach me. I stood beside her in her tiny kitchen, watching her weathered hands measure flour, cut butter and knead the dough. She did everything by feel, without measuring cups or scales.

"The secret," she said, rolling the dough with practised ease, "is patience. You must cook the pineapple jam slowly, on low heat, for two hours. Most people rush this step. They use high heat and end up with jam that is too wet or too bitter."

She was right. For two hours, she stirred the bubbling pineapple paste, never leaving its side. The kitchen filled with a heavenly aroma that transported me back to every Chinese New Year I could remember.

As we shaped the tarts together, she told me stories about learning the recipe from her own mother. "This recipe has been in our family for three generations," she said proudly.

That afternoon, I realised that the secret ingredient was not a spice or a technique. It was love — the love that each generation poured into keeping this tradition alive. I promised myself I would pass it on too.`,
    vocabulary: [
      { word: "legendary", meaning: "very famous and admired", partOfSpeech: "adjective", example: "The restaurant's laksa is legendary among food lovers." },
      { word: "tangy", meaning: "having a sharp, slightly sour taste", partOfSpeech: "adjective", example: "The tangy lemon sauce complemented the fish perfectly." },
      { word: "weathered", meaning: "worn and aged by years of exposure and use", partOfSpeech: "adjective", example: "His weathered face told the story of a life spent outdoors." },
      { word: "knead", meaning: "to press and fold dough with your hands to make it smooth", partOfSpeech: "verb", example: "She kneaded the bread dough for ten minutes." },
      { word: "heavenly", meaning: "extremely pleasant; wonderful", partOfSpeech: "adjective", example: "The chocolate cake tasted absolutely heavenly." },
      { word: "transported", meaning: "carried away mentally to another place or time", partOfSpeech: "verb", example: "The old song transported her back to her childhood." },
      { word: "generations", meaning: "all the people born and living around the same time; family levels", partOfSpeech: "noun", example: "The farm has been in the family for four generations." },
    ],
  },
  {
    slug: "the-camp",
    title: "The Adventure Camp",
    description: "A school camp pushes a student out of their comfort zone.",
    level: 4,
    wordCount: 260,
    theme: "Growth",
    body: `When I found out that our school was organising a three-day adventure camp, my first reaction was dread. I was not the outdoor type. I hated insects, disliked getting dirty and had never spent a night away from home.

The camp was held at an outdoor centre surrounded by thick forest. As soon as we arrived, our instructor, Captain Raj, gathered us and announced the activities: jungle trekking, kayaking, rock climbing and an obstacle course. My heart sank with every item on the list.

The first challenge was the rock wall. Looking up at the towering structure, my legs turned to jelly. My teammates encouraged me from below. "You can do it!" they shouted. I gripped the first handhold and pulled myself up, one step at a time. When I reached the top, I could see the entire camp below. The view was breathtaking.

That night, we cooked our own dinner over a campfire. The food was simple — instant noodles and canned beans — but eating under the stars made it taste extraordinary. We told ghost stories until our voices grew hoarse.

The highlight of the camp was the night trek. Armed with only a torchlight each, our group navigated a trail through the dark forest. Every rustle and snap made us jump. But we stuck together, holding hands and encouraging one another through the darkness.

On the bus ride home, I was exhausted, sunburnt and covered in mosquito bites. But I was also transformed. The camp had shown me that I was capable of far more than I believed.

Captain Raj's parting words stayed with me: "Comfort is the enemy of growth."`,
    vocabulary: [
      { word: "dread", meaning: "a feeling of great fear or worry about something that may happen", partOfSpeech: "noun", example: "She felt a sense of dread about the upcoming exam." },
      { word: "obstacle", meaning: "something that blocks your way or makes it difficult to move forward", partOfSpeech: "noun", example: "The runners had to jump over several obstacles." },
      { word: "towering", meaning: "extremely tall and impressive", partOfSpeech: "adjective", example: "The towering skyscrapers dominated the city skyline." },
      { word: "breathtaking", meaning: "extremely beautiful or impressive", partOfSpeech: "adjective", example: "The sunset over the ocean was breathtaking." },
      { word: "extraordinary", meaning: "very unusual or remarkable; beyond ordinary", partOfSpeech: "adjective", example: "She showed extraordinary talent for her age." },
      { word: "hoarse", meaning: "having a rough, harsh voice, often from too much talking or shouting", partOfSpeech: "adjective", example: "His voice was hoarse after cheering at the match." },
      { word: "navigated", meaning: "found the way through a place or situation", partOfSpeech: "verb", example: "They navigated through the narrow alleyways of the old town." },
      { word: "transformed", meaning: "changed completely, usually for the better", partOfSpeech: "adjective", example: "The renovation transformed the old house into a modern home." },
    ],
  },
  {
    slug: "the-kind-stranger",
    title: "The Kind Stranger",
    description: "A stranger's act of kindness inspires a student to pay it forward.",
    level: 4,
    wordCount: 250,
    theme: "Kindness",
    body: `It happened on an ordinary Tuesday afternoon. I was walking home from the bus stop when the sky suddenly darkened. Within seconds, rain poured down in a torrential downpour. I had no umbrella.

I ducked under the shelter of a nearby shop, shivering in my wet uniform. Other people huddled there too, all waiting for the rain to stop. But it showed no sign of letting up.

An elderly man in a grey windbreaker approached me. "Where are you headed, young man?" he asked. I told him my block number. "That is on my way," he said, holding up his umbrella. "Let us walk together."

Under the shared umbrella, we walked through the rain. The old man told me he was a retired teacher. He asked about my school and my favourite subjects. His voice was warm and his questions were genuine.

When we reached my block, I thanked him profusely. He simply smiled and said, "When someone helps you, the best way to thank them is to help someone else." Then he walked away, disappearing into the curtain of rain.

I stood there watching him go, feeling something shift inside me. His words were simple but they carried weight.

The very next day, I noticed a Primary One boy struggling to carry his heavy bag up the stairs. I went over and helped him without being asked. He looked up at me and smiled.

It was a small gesture, but it felt right. The kind stranger had planted a seed of generosity that I have continued to water ever since.`,
    vocabulary: [
      { word: "torrential", meaning: "falling in large amounts and with great force", partOfSpeech: "adjective", example: "The torrential rain caused flooding in the streets." },
      { word: "huddled", meaning: "gathered closely together, usually for warmth or shelter", partOfSpeech: "verb", example: "The children huddled under the tree to stay dry." },
      { word: "retired", meaning: "stopped working, usually because of old age", partOfSpeech: "adjective", example: "The retired pilot enjoyed gardening." },
      { word: "genuine", meaning: "real and honest; not pretending", partOfSpeech: "adjective", example: "Her interest in the project was genuine." },
      { word: "profusely", meaning: "to a great degree; very much", partOfSpeech: "adverb", example: "She thanked the rescuer profusely." },
      { word: "gesture", meaning: "an action done to show a feeling or intention", partOfSpeech: "noun", example: "Bringing flowers was a kind gesture." },
      { word: "generosity", meaning: "the quality of being willing to give and share freely", partOfSpeech: "noun", example: "The community was known for its generosity." },
    ],
  },
  {
    slug: "the-essay-competition",
    title: "The Essay Competition",
    description: "A student enters an essay competition and discovers the power of writing from the heart.",
    level: 4,
    wordCount: 250,
    theme: "Writing",
    body: `When my English teacher, Miss Chua, asked for volunteers to represent our class in the inter-school essay competition, I was the only one who raised my hand. My classmates preferred sports or math competitions. Writing was my thing.

The topic was revealed a week before the competition: "A Person Who Changed My Life." I immediately thought of impressive people — famous scientists, world leaders, athletes. I drafted an essay about a renowned inventor, filling it with big words and complex sentences.

Miss Chua read my draft and shook her head. "This is well-written," she said, "but it does not sound like you. Write about someone you truly know. Write from the heart."

I went home and thought hard. Then it hit me — my helper, Aunty Rosa, who had taken care of me since I was a baby. She taught me to tie my shoes, packed my lunch every day and stayed up with me when I was sick. She was not famous, but she had shaped who I am.

I rewrote the entire essay that night. This time, the words flowed naturally. I wrote about Aunty Rosa's gentle patience, her warm laughter and the lullabies she sang in Tagalog. I wrote about how she sacrificed time with her own children to care for me.

On competition day, I read my essay aloud. My voice cracked when I described how Aunty Rosa cried at my birthday party last year because she missed her son's birthday in the Philippines. Several people in the audience wiped their eyes.

I won second place. But the real prize was the hug Aunty Rosa gave me when I showed her the essay. "You remembered all that?" she whispered, her eyes glistening. "Every bit," I said.`,
    vocabulary: [
      { word: "renowned", meaning: "famous and respected for great achievements", partOfSpeech: "adjective", example: "The renowned artist held an exhibition in the gallery." },
      { word: "complex", meaning: "having many parts and difficult to understand", partOfSpeech: "adjective", example: "The machine had a complex system of gears." },
      { word: "drafted", meaning: "wrote a rough, first version of something", partOfSpeech: "verb", example: "She drafted the letter and revised it the next day." },
      { word: "sacrificed", meaning: "gave up something important for the sake of others", partOfSpeech: "verb", example: "She sacrificed her free time to help her students." },
      { word: "naturally", meaning: "in a way that is easy and not forced", partOfSpeech: "adverb", example: "The conversation flowed naturally between old friends." },
      { word: "glistening", meaning: "shining with a sparkling light, often from tears or moisture", partOfSpeech: "adjective", example: "Her glistening eyes showed how moved she was." },
    ],
  },

  // ════════════════════════════════════════
  // PRIMARY 5
  // ════════════════════════════════════════
  {
    slug: "the-championship-match",
    title: "The Championship Match",
    description: "A gripping account of a school football final and the lessons learned.",
    level: 5,
    wordCount: 300,
    theme: "Sportsmanship",
    body: `The roar of the crowd was deafening as our team, the Riverside Rockets, took to the field for the inter-school football championship. Months of gruelling training had led to this moment. My palms were clammy as I adjusted my shin guards and glanced at the opposing team, the Hilltop Hawks, who looked equally determined.

The referee blew the whistle, and the match commenced. The first half was a tense affair, with both teams defending fiercely. Neither side managed to break through. During the halftime break, our coach, Mr Lim, gathered us into a huddle. "Stay composed," he urged. "Trust the game plan and trust each other."

The second half was a different story. In the fifty-fifth minute, our striker, Wei Jie, received a brilliant through pass. He sprinted past two defenders and struck the ball with precision. It sailed into the top corner of the net. The crowd erupted! We were in the lead.

However, our joy was short-lived. With just five minutes remaining, the Hawks' captain delivered a powerful free kick that curved past our goalkeeper. The score was level once again. My heart sank.

The match went into a penalty shootout. When it was my turn, I felt the weight of the entire school on my shoulders. I placed the ball on the spot, took three steps back, and exhaled. I ran forward and struck the ball firmly to the left. The goalkeeper dived the wrong way. Goal!

We won the championship four goals to three. As my teammates lifted me onto their shoulders, I felt an overwhelming sense of gratitude — not just for the victory, but for the journey. Mr Lim reminded us to shake hands with the Hawks. "A true champion is gracious in victory and dignified in defeat," he said. Those words stayed with me long after the celebrations ended.`,
    vocabulary: [
      { word: "deafening", meaning: "extremely loud, so loud it is hard to hear anything else", partOfSpeech: "adjective", example: "The deafening applause filled the concert hall." },
      { word: "gruelling", meaning: "extremely tiring and demanding", partOfSpeech: "adjective", example: "The soldiers completed a gruelling obstacle course." },
      { word: "clammy", meaning: "slightly wet and cold, usually from nervousness", partOfSpeech: "adjective", example: "His hands were clammy before the exam." },
      { word: "commenced", meaning: "began or started", partOfSpeech: "verb", example: "The ceremony commenced at exactly nine o'clock." },
      { word: "composed", meaning: "calm and in control of one's feelings", partOfSpeech: "adjective", example: "She remained composed despite the stressful situation." },
      { word: "precision", meaning: "the quality of being exact and accurate", partOfSpeech: "noun", example: "The surgeon worked with great precision." },
      { word: "erupted", meaning: "suddenly burst out with noise or activity", partOfSpeech: "verb", example: "The classroom erupted in laughter at the joke." },
      { word: "gratitude", meaning: "the feeling of being thankful and appreciative", partOfSpeech: "noun", example: "She expressed her gratitude with a heartfelt letter." },
      { word: "gracious", meaning: "polite, kind, and generous, especially to those you have defeated", partOfSpeech: "adjective", example: "The gracious winner congratulated her opponent." },
      { word: "dignified", meaning: "calm, serious, and deserving of respect", partOfSpeech: "adjective", example: "He made a dignified speech after the loss." },
    ],
  },
  {
    slug: "the-lie-that-snowballed",
    title: "The Lie That Snowballed",
    description: "A small lie grows bigger and bigger until it becomes impossible to maintain.",
    level: 5,
    wordCount: 310,
    theme: "Honesty",
    body: `It started with a small lie. My science test came back with a score of forty-two out of a hundred. It was my worst result ever. When my mother asked how I did, the words slipped out before I could stop them: "I got eighty-two."

Her face lit up with pride. "That is wonderful! I knew all that studying would pay off." The guilt gnawed at me, but I pushed it aside.

The next day, my mother told my father. He was so pleased that he promised to buy me the new video game I had been wanting. The lie was no longer just words — it was growing legs. I felt trapped but could not bring myself to confess.

Things escalated when my mother called my aunt to brag about my score. My aunt, who happened to be my science teacher's friend, mentioned it to her at a school event. My teacher, Mrs Loh, looked confused. "Forty-two is very different from eighty-two," she remarked.

The phone call came that evening. My mother answered, and I watched her expression change from cheerfulness to disbelief, then to quiet fury. She hung up and turned to me. "Is there something you want to tell me?" she asked, her voice dangerously calm.

I broke down and told her everything. I had never seen my mother look so disappointed. It was not the test score that upset her — it was the dishonesty. "I would rather you scored zero honestly than a hundred dishonestly," she said. "Trust, once broken, is very hard to rebuild."

I apologised to everyone I had deceived. It was humiliating, but necessary. My father cancelled the video game, which I accepted without complaint.

That experience taught me a valuable lesson. A lie may seem like a quick escape, but it always demands a higher price in the end. The truth may be difficult, but it is the only foundation on which real trust can stand.`,
    vocabulary: [
      { word: "gnawed", meaning: "kept causing worry or discomfort over time", partOfSpeech: "verb", example: "Guilt gnawed at him all day long." },
      { word: "trapped", meaning: "unable to escape from a difficult situation", partOfSpeech: "adjective", example: "She felt trapped in a conversation she could not leave." },
      { word: "confess", meaning: "to admit that you have done something wrong", partOfSpeech: "verb", example: "He decided to confess to breaking the window." },
      { word: "escalated", meaning: "became more serious or intense", partOfSpeech: "verb", example: "The argument escalated into a full-blown fight." },
      { word: "disbelief", meaning: "the feeling of not being able to believe something", partOfSpeech: "noun", example: "She stared at the results in disbelief." },
      { word: "fury", meaning: "extreme anger", partOfSpeech: "noun", example: "His fury was evident from his clenched fists." },
      { word: "deceived", meaning: "made someone believe something that is not true", partOfSpeech: "verb", example: "She felt hurt when she realised she had been deceived." },
      { word: "humiliating", meaning: "making you feel very embarrassed and ashamed", partOfSpeech: "adjective", example: "Losing by such a large margin was humiliating." },
      { word: "foundation", meaning: "the base on which something is built", partOfSpeech: "noun", example: "Trust is the foundation of any strong friendship." },
    ],
  },
  {
    slug: "the-environment-project",
    title: "The Green Warriors",
    description: "A group of students starts an environmental initiative in their school.",
    level: 5,
    wordCount: 300,
    theme: "Environment",
    body: `It all began when our geography teacher, Mr Tan, showed us a documentary about ocean pollution. The footage of sea turtles entangled in plastic bags and beaches buried under mountains of waste left the entire class stunned. That evening, I could not sleep. The images haunted me.

The next day, I approached my classmates Wei Ling and Jamal with an idea. "What if we started an environmental club?" I proposed. Their eyes lit up. Within a week, we had fifteen members and a name: The Green Warriors.

Our first project was a waste audit of our school canteen. We spent three days sorting through the rubbish collected after recess. The results were alarming — over sixty percent of the waste was recyclable but had been thrown into general bins. Plastic bottles, aluminium cans and paper were all mixed together.

We presented our findings to the principal, Mr Goh. He was impressed and gave us permission to set up recycling stations around the school. We designed colourful posters to educate students about what could and could not be recycled.

The initiative was not without challenges. In the first week, students contaminated the recycling bins with food waste. We had to station volunteers at each bin during recess to guide them. Some students grumbled about the extra effort, but most were supportive.

After three months, our school's recyclable waste collection increased by forty percent. The municipal council recognised our efforts with an environmental award. We were invited to share our experience at a national student conference.

Standing on that stage, looking out at hundreds of students from different schools, I felt a surge of hope. We may be young, but we are not powerless. Every piece of plastic properly recycled, every tree planted, every awareness campaign — they all add up.

The planet does not need a few perfect environmentalists. It needs millions of imperfect ones trying their best.`,
    vocabulary: [
      { word: "entangled", meaning: "twisted or caught up in something and unable to get free", partOfSpeech: "adjective", example: "The bird was entangled in the fishing net." },
      { word: "stunned", meaning: "so shocked or surprised that you cannot think clearly", partOfSpeech: "adjective", example: "The audience was stunned by the unexpected ending." },
      { word: "proposed", meaning: "put forward an idea or plan for others to consider", partOfSpeech: "verb", example: "She proposed a new method for solving the problem." },
      { word: "audit", meaning: "a careful examination or inspection of something", partOfSpeech: "noun", example: "The company conducted an audit of its financial records." },
      { word: "alarming", meaning: "causing worry or fear", partOfSpeech: "adjective", example: "The alarming rise in temperatures worried scientists." },
      { word: "contaminated", meaning: "made dirty or impure by adding harmful substances", partOfSpeech: "verb", example: "The river was contaminated by factory waste." },
      { word: "initiative", meaning: "a new plan or action to solve a problem or improve something", partOfSpeech: "noun", example: "The government launched an initiative to reduce plastic use." },
      { word: "municipal", meaning: "relating to a city or town and its local government", partOfSpeech: "adjective", example: "The municipal park was open to all residents." },
      { word: "surge", meaning: "a sudden strong feeling or increase", partOfSpeech: "noun", example: "She felt a surge of excitement when she heard the news." },
    ],
  },
  {
    slug: "the-dilemma",
    title: "The Dilemma",
    description: "A student must choose between loyalty to a friend and doing the right thing.",
    level: 5,
    wordCount: 300,
    theme: "Moral Dilemma",
    body: `My best friend, Kai Wen, had always been the smartest student in our class. He topped every test without seeming to try. So I was shocked when I caught him cheating during our mathematics examination.

I was sitting two rows behind him. I saw him glance at a small piece of paper hidden under his calculator. He would peek at it, scribble an answer, then slide it back under. My heart hammered. Kai Wen — cheating?

After the exam, I confronted him. "I saw what you did," I said quietly. His face drained of colour. "Please do not tell anyone," he begged. "My parents will kill me. I have been struggling with math this term but they expect perfect scores."

I felt torn. Kai Wen was my closest friend. We had been through everything together since Primary Two. Reporting him felt like a betrayal. But staying silent meant I was condoning his dishonesty. And what about the other students who had studied fairly?

I spent a sleepless night wrestling with my conscience. By morning, I had made my decision.

I went to Kai Wen before school and told him what I thought he should do. "If you confess to Mrs Ong yourself, it will be better than if she finds out another way," I said. "I will go with you if you want."

He was silent for a long time. Then he nodded slowly. Together, we walked to Mrs Ong's office. Kai Wen told her everything. She was disappointed but thanked him for his honesty. He received a zero for that paper and had to attend extra remedial classes.

Our friendship survived, though it took time for things to feel normal again. Kai Wen eventually told me that confessing was the hardest thing he had ever done, but also the most liberating.

"You were not just being a good student," he said. "You were being a good friend." And that meant more to me than any test score.`,
    vocabulary: [
      { word: "confronted", meaning: "faced someone directly about something serious", partOfSpeech: "verb", example: "She confronted him about his rude behaviour." },
      { word: "betrayal", meaning: "the act of being disloyal to someone who trusts you", partOfSpeech: "noun", example: "The betrayal of his closest friend hurt deeply." },
      { word: "condoning", meaning: "accepting or allowing bad behaviour without criticism", partOfSpeech: "verb", example: "Ignoring bullying is the same as condoning it." },
      { word: "conscience", meaning: "the inner sense of what is right and wrong", partOfSpeech: "noun", example: "His conscience would not let him keep the extra change." },
      { word: "remedial", meaning: "intended to correct or improve a weakness", partOfSpeech: "adjective", example: "She attended remedial classes to improve her reading." },
      { word: "liberating", meaning: "making you feel free from restrictions", partOfSpeech: "adjective", example: "Telling the truth was a liberating experience." },
    ],
  },
  {
    slug: "the-flood-rescue",
    title: "The Rescue",
    description: "A student witnesses a dramatic rescue during a flash flood.",
    level: 5,
    wordCount: 300,
    theme: "Heroism",
    body: `The monsoon season had brought days of unrelenting rain. On Thursday afternoon, as we were heading home from school, a sudden downpour turned the canal behind our estate into a raging torrent. Brown water swirled and surged over the banks, flooding the low-lying path that ran alongside it.

Most people scrambled to higher ground. But then someone screamed, "There is a boy in the water!" I turned and saw, to my horror, a small child clinging to a railing that was now half-submerged. The current was pulling at his legs. He could not have been more than five years old.

Panic rippled through the crowd. People shouted for help and called the emergency services. But the water was rising fast. There was no time to wait.

A man in a delivery uniform pushed through the crowd. Without hesitation, he waded into the thigh-deep water. The current almost knocked him off his feet, but he steadied himself against a lamp post and kept moving. The crowd held its breath.

Reaching the boy, the man prised his small fingers from the railing and lifted him onto his shoulders. Step by agonising step, he fought his way back through the surging water. Twice he stumbled, and a collective gasp rose from the onlookers. But he regained his footing each time.

When he finally emerged from the flood waters, the crowd erupted in applause. The boy's mother, who had been screaming hysterically, rushed forward and clutched her son. The delivery man sat down on the kerb, soaking wet and breathing heavily. Someone draped a towel over his shoulders.

I watched the whole scene unfold from the safety of the overhead bridge. I learned something important that day: heroes are not found in comic books. They are ordinary people who choose to act when others stand still.`,
    vocabulary: [
      { word: "unrelenting", meaning: "not stopping or becoming less intense", partOfSpeech: "adjective", example: "The unrelenting sun made the desert journey unbearable." },
      { word: "torrent", meaning: "a strong, fast-moving stream of water", partOfSpeech: "noun", example: "Rain fell in torrents during the thunderstorm." },
      { word: "surged", meaning: "moved forward suddenly and powerfully", partOfSpeech: "verb", example: "The crowd surged towards the exit." },
      { word: "scrambled", meaning: "moved quickly and awkwardly, often using hands and feet", partOfSpeech: "verb", example: "The hikers scrambled over the rocky terrain." },
      { word: "hesitation", meaning: "a pause before doing something because of uncertainty", partOfSpeech: "noun", example: "She agreed without any hesitation." },
      { word: "prised", meaning: "used force to separate or open something", partOfSpeech: "verb", example: "He prised the lid off the tin with a knife." },
      { word: "agonising", meaning: "causing great pain or anxiety; very slow and difficult", partOfSpeech: "adjective", example: "The wait for the results was agonising." },
      { word: "hysterically", meaning: "in an uncontrolled emotional way", partOfSpeech: "adverb", example: "She was crying hysterically after the accident." },
    ],
  },
  {
    slug: "the-new-student",
    title: "The New Student",
    description: "A foreign transfer student struggles to fit in until a classmate reaches out.",
    level: 5,
    wordCount: 310,
    theme: "Empathy",
    body: `When Yuki Tanaka walked into our classroom on a Monday morning, I could see she was terrified. She was a transfer student from Japan, and everything about her screamed discomfort — the way she clutched her bag strap, the way her eyes darted around the room, the way she flinched when Mr Lee introduced her to the class.

"Please make Yuki feel welcome," Mr Lee said. Everyone smiled and nodded, but as the days passed, nobody really made the effort. Yuki sat alone during recess, ate lunch by herself and rarely spoke. Her English was limited, and most of my classmates did not have the patience to communicate slowly.

I noticed but did nothing for the first week. I told myself it was not my responsibility. But watching her sit alone day after day, picking at her food with her head down, made my stomach twist with guilt.

On Friday, I made a decision. I walked to her table with my lunch tray and sat down across from her. "Hi, Yuki," I said. She looked up, surprised and wary. I pointed at my food. "Chicken rice," I said slowly, then pointed at hers questioningly.

"Onigiri," she said softly, holding up a rice ball. Then she added, "Rice ball." I smiled. "Can I try?" She nodded and carefully passed one to me. It was delicious — filled with salmon and wrapped in seaweed.

That lunch was the beginning of our friendship. I taught Yuki English phrases, and she taught me Japanese words. She introduced me to origami, and I introduced her to our local card games. Slowly, other classmates began joining us.

By the end of the term, Yuki's English had improved dramatically, and she had a circle of friends. At the year-end party, she gave me a handmade origami crane. "First friend," she said, her eyes bright. "Thank you for sitting down."

That simple act of sitting down had changed everything — for both of us.`,
    vocabulary: [
      { word: "flinched", meaning: "made a quick, small movement away from something because of fear or surprise", partOfSpeech: "verb", example: "He flinched when the door slammed shut." },
      { word: "discomfort", meaning: "a feeling of unease or awkwardness", partOfSpeech: "noun", example: "She shifted in her seat with visible discomfort." },
      { word: "wary", meaning: "cautious and watchful, not trusting easily", partOfSpeech: "adjective", example: "The stray cat was wary of strangers." },
      { word: "dramatically", meaning: "in a very noticeable or impressive way", partOfSpeech: "adverb", example: "The weather changed dramatically overnight." },
      { word: "origami", meaning: "the Japanese art of folding paper into shapes", partOfSpeech: "noun", example: "She folded the paper into an origami butterfly." },
      { word: "empathy", meaning: "the ability to understand and share the feelings of another person", partOfSpeech: "noun", example: "His empathy for the homeless man was clear." },
    ],
  },
  {
    slug: "the-inheritance",
    title: "The Inheritance",
    description: "A grandfather's will reveals a surprising and meaningful gift.",
    level: 5,
    wordCount: 310,
    theme: "Values",
    body: `My grandfather passed away on a quiet Wednesday morning. He was eighty-seven. The funeral was solemn and beautiful, attended by relatives I had not seen in years. Grandfather had been a quiet man — a retired postman who lived simply and spoke sparingly.

Two weeks later, the family gathered for the reading of his will. My uncles and aunts sat in the lawyer's office, some fidgeting, others looking expectant. Grandfather had lived in a modest flat, so nobody expected much.

The lawyer read through the usual items: the flat to my grandmother, his savings split equally among his four children. Then came the surprises. To each grandchild, he had left a personal item with a handwritten note.

My cousin, Andrea, received his binoculars. The note read: "Always look for beauty in the distance." My cousin, Samuel, got his compass. "So you will never lose your way." My youngest cousin received his gardening tools. "The best things in life grow slowly."

When it was my turn, the lawyer handed me a small, battered notebook. Inside were pages of neat handwriting — poems, observations about nature, reflections on life, and letters he never sent. The note attached to it said: "You are the storyteller of this family. Tell stories that matter."

I held the notebook against my chest, tears streaming down my face. Of all his possessions, this was the most valuable. It was a window into his mind, his heart, his years of quiet contemplation.

That evening, I read every page. I discovered that my grandfather had wanted to be a writer but gave up his dream to support his family. He poured his words into this notebook instead, never showing anyone.

I decided then that I would honour his wish. I would write — not for fame or grades, but because stories matter. Because some things deserve to be remembered and told.

That battered notebook remains on my desk, a silent reminder of the grandfather who believed in me.`,
    vocabulary: [
      { word: "solemn", meaning: "serious and dignified, often relating to a formal occasion", partOfSpeech: "adjective", example: "The students stood in solemn silence during the ceremony." },
      { word: "sparingly", meaning: "in small amounts; not very often", partOfSpeech: "adverb", example: "She used the expensive perfume sparingly." },
      { word: "fidgeting", meaning: "making small, restless movements because of nervousness", partOfSpeech: "verb", example: "The boy was fidgeting in his seat during the assembly." },
      { word: "modest", meaning: "not large or expensive; humble", partOfSpeech: "adjective", example: "They lived in a modest house in the countryside." },
      { word: "battered", meaning: "old, damaged and worn from use", partOfSpeech: "adjective", example: "He carried a battered suitcase that had been around the world." },
      { word: "contemplation", meaning: "deep, thoughtful consideration", partOfSpeech: "noun", example: "She sat in quiet contemplation by the lake." },
      { word: "honour", meaning: "to show respect and fulfil a promise or duty", partOfSpeech: "verb", example: "He honoured his promise to visit every year." },
    ],
  },
  {
    slug: "the-cyberbullying-incident",
    title: "Behind the Screen",
    description: "A student witnesses cyberbullying and must decide whether to take a stand.",
    level: 5,
    wordCount: 300,
    theme: "Cyberbullying",
    body: `It started as a joke in our class group chat. Someone posted a photo of Li Xuan eating alone in the canteen with the caption: "Forever alone." A few laughing emojis followed. Then more comments appeared. "Nobody wants to sit with her." "Her food looks gross." Each message was more cutting than the last.

I stared at my phone, feeling increasingly uncomfortable. Li Xuan was quiet and kept to herself, but she had never done anything to deserve this. I noticed that some people who were laughing in the chat were the same ones who smiled at her in person. The hypocrisy was sickening.

I wanted to say something, but I was afraid. What if they turned on me? What if I became the next target? So I did nothing. I put my phone down and tried to forget about it.

The next morning, Li Xuan did not come to school. Or the day after. By the third day, our form teacher, Mrs Singh, told us that Li Xuan's parents had called. She was refusing to come to school because of hurtful messages she had seen online.

The class fell silent. Mrs Singh did not raise her voice, but her words cut through the silence like a blade. "Cyberbullying is not a joke. The screen does not protect you from consequences, and it does not shield your victim from pain. Every cruel word you type is a choice — and so is every word you choose not to say in her defence."

That last line hit me hardest. My silence had been a choice too.

That afternoon, I visited Li Xuan at her home. I apologised for not speaking up. I told her that what they wrote was wrong and that she did not deserve any of it. She cried, and so did I.

When she returned to school the following week, I made sure she never sat alone again. Speaking up may not always be easy, but staying silent when someone is hurting is something I never want to live with again.`,
    vocabulary: [
      { word: "hypocrisy", meaning: "pretending to have beliefs or values that you do not actually follow", partOfSpeech: "noun", example: "It was hypocrisy to preach kindness while being cruel to others." },
      { word: "sickening", meaning: "causing a feeling of disgust or horror", partOfSpeech: "adjective", example: "The level of waste was sickening." },
      { word: "consequences", meaning: "the results or effects of an action", partOfSpeech: "noun", example: "Every decision has consequences, good or bad." },
      { word: "defence", meaning: "the act of protecting or supporting someone", partOfSpeech: "noun", example: "He spoke in defence of his friend's character." },
      { word: "cutting", meaning: "unkind and hurtful", partOfSpeech: "adjective", example: "Her cutting remarks left him feeling wounded." },
    ],
  },
  {
    slug: "the-mentor",
    title: "The Mentor",
    description: "A student discovers the value of mentoring a younger child.",
    level: 5,
    wordCount: 300,
    theme: "Leadership",
    body: `When Mrs Ong asked for volunteers to mentor Primary Two students in reading, I signed up mostly to pad my CCA records. I was not expecting much — just an hour a week of listening to a small child read picture books. How hard could it be?

I was assigned to a boy named Adam. He was seven, painfully shy, and struggled with reading. During our first session, he stared at the book in front of him, his lips pressed tightly together, refusing to read aloud. I tried encouraging him, but he shook his head stubbornly.

I was tempted to give up. But something about the way he clutched the book — tightly, almost desperately — told me he wanted to read. He was just afraid of making mistakes.

The next week, I brought a comic book instead of the assigned reader. His eyes widened. "Spider-Man?" he whispered. I nodded. "Let us read it together. I will help with the hard words." Slowly, hesitantly, he began to read. He stumbled often, but I never corrected him harshly. I simply helped him sound out the words.

Week by week, Adam's confidence grew. He progressed from comics to short chapter books. His favourite was a story about a boy wizard. He would get so excited about the plot that he forgot to be shy. One afternoon, he read an entire chapter without stopping. When he finished, he looked up at me with the biggest smile I had ever seen.

"I am a reader now," he said proudly. That simple sentence meant more to me than any award or certificate.

By the end of the year, Adam's reading level had jumped two grades. His class teacher told me that his improvement was remarkable. But the truth was, Adam had taught me more than I taught him. He taught me patience, that growth is not linear, and that sometimes the most valuable thing you can give someone is simply your time and belief in them.

I signed up to mentor again the following year — this time, not for my CCA records.`,
    vocabulary: [
      { word: "mentor", meaning: "an experienced person who guides and supports someone younger or less experienced", partOfSpeech: "noun", example: "She was grateful for her mentor's wise advice." },
      { word: "painfully", meaning: "to an extreme or uncomfortable degree", partOfSpeech: "adverb", example: "He was painfully aware of everyone watching him." },
      { word: "stubbornly", meaning: "in a way that shows refusal to change one's mind", partOfSpeech: "adverb", example: "She stubbornly refused to apologise." },
      { word: "desperately", meaning: "in a way that shows great need or urgency", partOfSpeech: "adverb", example: "He desperately wanted to make the team." },
      { word: "hesitantly", meaning: "in a slow, uncertain way because of nervousness", partOfSpeech: "adverb", example: "She hesitantly raised her hand to answer." },
      { word: "remarkable", meaning: "worthy of attention; unusual and impressive", partOfSpeech: "adjective", example: "The student showed remarkable improvement in just one term." },
      { word: "linear", meaning: "moving in a straight line; progressing steadily in one direction", partOfSpeech: "adjective", example: "Learning is not always linear — there will be ups and downs." },
    ],
  },
  {
    slug: "the-cultural-performance",
    title: "The Cultural Performance",
    description: "A student overcomes embarrassment to embrace her cultural heritage on stage.",
    level: 5,
    wordCount: 300,
    theme: "Identity",
    body: `When our school announced a cultural performance for Racial Harmony Day, my mother immediately volunteered me for the Indian classical dance segment. I was mortified. At thirteen, the last thing I wanted was to wear a traditional costume and dance in front of the entire school.

"It is embarrassing," I protested. My friends all thought classical dance was old-fashioned. They listened to pop music and watched viral dance videos. Bharatanatyam, with its ankle bells and elaborate hand gestures, felt worlds apart from what was considered cool.

My mother was firm. "You have been learning this dance since you were six. Your grandmother would have been proud." She was right about that — my grandmother, who had passed away the year before, had been the one who first taught me the basic steps in her living room.

Rehearsals were gruelling. My dance teacher, Mrs Sundaram, pushed us hard. "Every gesture tells a story," she would say. "Your eyes, your fingers, your posture — they all speak." Slowly, I began to reconnect with the art form. The rhythms were complex and beautiful. Each movement had centuries of tradition behind it.

On performance day, I stood backstage in my silk costume, my hair braided with jasmine flowers, my ankles heavy with bells. My stomach churned. Through the curtain gap, I could see the school hall packed with students.

The music began. I stepped onto the stage and, for a moment, everything else disappeared. My feet stamped the rhythms my grandmother had taught me. My hands painted stories in the air. I danced not for the audience, but for her — for the woman who had loved this art before I was born.

When the music ended, the hall was silent for a heartbeat. Then the applause came — loud, genuine, thunderous. My classmates were cheering. Some were on their feet.

Backstage, tears streamed down my face. I was not embarrassed anymore. I was proud — proud of my heritage, my grandmother, and the tradition I carried in my bones.`,
    vocabulary: [
      { word: "mortified", meaning: "extremely embarrassed", partOfSpeech: "adjective", example: "She was mortified when she tripped on stage." },
      { word: "elaborate", meaning: "detailed and complicated", partOfSpeech: "adjective", example: "The wedding had elaborate decorations." },
      { word: "protested", meaning: "expressed strong disagreement", partOfSpeech: "verb", example: "The students protested against the new rule." },
      { word: "reconnect", meaning: "to form a connection again with something or someone", partOfSpeech: "verb", example: "The trip helped him reconnect with his roots." },
      { word: "posture", meaning: "the way you hold your body when sitting or standing", partOfSpeech: "noun", example: "Good posture is important for dancers." },
      { word: "heritage", meaning: "traditions, culture and values passed down through generations", partOfSpeech: "noun", example: "The festival celebrates our rich cultural heritage." },
      { word: "thunderous", meaning: "extremely loud, like thunder", partOfSpeech: "adjective", example: "The speech was met with thunderous applause." },
    ],
  },

  // ════════════════════════════════════════
  // PRIMARY 6
  // ════════════════════════════════════════
  {
    slug: "the-decision",
    title: "The Decision",
    description: "A student faces a moral dilemma when she finds a wallet full of money.",
    level: 6,
    wordCount: 350,
    theme: "Integrity",
    body: `The dismissal bell had just rung when I spotted it — a sleek leather wallet lying near the school gate, partially hidden under a hedge. I picked it up and glanced around. The corridor was emptying rapidly as students streamed towards the buses and cars. Nobody seemed to be searching for anything.

I unzipped the wallet. Inside, I found several fifty-dollar notes, a few credit cards, and an identification card bearing the name "Mr David Teo." My eyes widened at the amount of money. It had to be at least three hundred dollars.

A small voice in my head whispered temptingly, "Nobody saw you pick it up. You could keep it." I thought about the new art supplies I had been saving up for, and the birthday present I wanted to buy for my mother. The temptation was real.

But another voice — louder and firmer — reminded me of what my grandmother always said: "Honesty is not about what you do when people are watching. It is about what you do when nobody is." I knew what I had to do.

I brought the wallet to the general office and handed it to Mrs Loh, the administrative executive. She raised her eyebrows in surprise. "Where did you find this?" she asked. I explained, and she smiled approvingly. "We will contact Mr Teo right away. You have done the right thing."

The next morning, during assembly, the principal, Mr Raj, called me to the stage. Standing beside him was a middle-aged man — Mr David Teo. He shook my hand firmly. "Thank you," he said, his voice thick with emotion. "That wallet contained money I needed for my mother's medical bills. You have no idea how much this means to my family."

As I returned to my seat, my classmates applauded. Some of them patted me on the back. But the greatest reward was not the applause or the certificate of commendation I received later. It was the quiet certainty in my heart that I had chosen correctly. Integrity, I realised, is its own reward.`,
    vocabulary: [
      { word: "dismissal", meaning: "the time when students are allowed to leave school", partOfSpeech: "noun", example: "Students lined up in an orderly fashion at dismissal." },
      { word: "partially", meaning: "not completely; only in part", partOfSpeech: "adverb", example: "The door was partially open, letting in a breeze." },
      { word: "identification", meaning: "a document that proves who you are", partOfSpeech: "noun", example: "You need to show your identification to enter the building." },
      { word: "temptingly", meaning: "in a way that makes you want to do something, especially something wrong", partOfSpeech: "adverb", example: "The chocolate cake sat temptingly on the counter." },
      { word: "temptation", meaning: "a strong desire to do something, especially something unwise", partOfSpeech: "noun", example: "He resisted the temptation to peek at the answers." },
      { word: "approvingly", meaning: "in a way that shows you agree with or support something", partOfSpeech: "adverb", example: "The teacher nodded approvingly at the student's answer." },
      { word: "commendation", meaning: "formal praise or an award given for doing something well", partOfSpeech: "noun", example: "She received a commendation for her bravery." },
      { word: "integrity", meaning: "the quality of being honest and having strong moral principles", partOfSpeech: "noun", example: "A person of integrity always keeps their promises." },
    ],
  },
  {
    slug: "the-farewell",
    title: "The Farewell",
    description: "A student says goodbye to primary school and reflects on the years gone by.",
    level: 6,
    wordCount: 350,
    theme: "Growing Up",
    body: `I stood at the school gate one last time, my PSLE results slip tucked in my bag. Six years. Two thousand one hundred and ninety days, give or take. That is how long I had walked through these gates.

The school looked the same as it always had — the faded yellow walls, the basketball court with its chipped paint, the canteen where I had eaten a thousand meals. But everything felt different now. Smaller, somehow. Or perhaps I had just grown bigger.

I walked through the corridors slowly, letting my fingers trail along the wall. Classroom 1-3, where I had cried on the first day. Classroom 3-5, where I won the class spelling bee and felt like a champion. The science lab, where I accidentally set off the fire alarm during an experiment and got the whole school evacuated. Mr Rahman had been furious, but even he laughed about it later.

At the assembly hall, I paused. How many times had I sat cross-legged on that floor, listening to speeches, watching performances, singing the school song? I hummed it now, and the melody came back as naturally as breathing.

The hardest part was saying goodbye to my teachers. Mrs Tan, who taught me to read with patience and warmth. Mr Lee, who challenged me to think critically and never accept easy answers. Miss Chua, who read my first story and said, "You have a gift. Do not waste it." Their words had shaped me in ways I was only beginning to understand.

I found my best friend, Aisha, waiting at the gate. We had met in Primary One, bonded over a shared love of mystery novels, and been inseparable since. Next year, we would be in different secondary schools. The thought sat heavily in my chest.

"We will stay friends, right?" she asked, her voice small.

"Always," I said. And I meant it.

I took one last look at the school, then turned and walked towards the bus stop. I did not look back. Not because I was not sad, but because I knew that the best way to honour the past is to walk bravely into the future.

Primary school was over. But the person it had helped me become — she was just getting started.`,
    vocabulary: [
      { word: "corridors", meaning: "long passageways in a building with rooms on each side", partOfSpeech: "noun", example: "Students walked quietly through the corridors between classes." },
      { word: "trail", meaning: "to drag or let something hang loosely", partOfSpeech: "verb", example: "She let her scarf trail along the ground." },
      { word: "evacuated", meaning: "moved people out of a building or area for safety", partOfSpeech: "verb", example: "The entire building was evacuated during the fire drill." },
      { word: "critically", meaning: "in a way that involves careful analysis and judgment", partOfSpeech: "adverb", example: "Good students learn to think critically about information." },
      { word: "inseparable", meaning: "unable to be separated; always together", partOfSpeech: "adjective", example: "The two sisters were inseparable growing up." },
      { word: "melody", meaning: "a sequence of musical notes that form a tune", partOfSpeech: "noun", example: "The melody of the song stayed in my head all day." },
      { word: "bonded", meaning: "formed a close relationship through a shared experience", partOfSpeech: "verb", example: "The teammates bonded during the training camp." },
    ],
  },
  {
    slug: "the-unexpected-leader",
    title: "The Unexpected Leader",
    description: "A reluctant student steps up to lead when no one else will.",
    level: 6,
    wordCount: 350,
    theme: "Leadership",
    body: `I had never considered myself leadership material. I was the kind of student who sat in the middle of the classroom, did reasonably well in my studies, and avoided attention. So when our class chairman, Darren, transferred to another school in Term Three, the last thing I expected was to be nominated as his replacement.

"Xin Yi can do it," my classmate, Priya, said during the nomination. I looked around, expecting someone to suggest a better candidate. But heads were nodding. Before I could protest, the vote was taken and I was elected by a comfortable majority.

My first week as chairman was a disaster. I forgot to submit the attendance register, misunderstood the duty roster, and accidentally scheduled two events on the same date. My confidence plummeted. I was convinced that I was the worst chairman in the school's history.

It was our form teacher, Mr Goh, who set me straight. "Leadership is not about being perfect," he said during a private conversation. "It is about being willing to learn from your mistakes and putting the needs of your class before your own comfort."

His words reframed everything. Instead of trying to be like Darren, I started leading in my own way. I was not the loudest or most charismatic person, but I was organised, fair and genuinely cared about my classmates. I created a suggestion box so that everyone's voice could be heard. I resolved disputes calmly instead of taking sides. I made sure quieter students were included in group activities.

Gradually, things improved. The class began to function more smoothly. Even the teachers noticed. Mrs Tan commented that our class had become more united since I took over.

At the year-end ceremony, I received the "Most Improved Leader" award. Standing on that stage, I realised something profound: leadership is not a personality type. It is a choice — the choice to step forward when it would be easier to step back, to serve when it would be easier to sit down, to listen when it would be easier to speak.

I may not have been the most obvious choice for chairman. But sometimes, the best leaders are the ones nobody expected.`,
    vocabulary: [
      { word: "nominated", meaning: "formally suggested someone for a position or award", partOfSpeech: "verb", example: "She was nominated for the best student award." },
      { word: "candidate", meaning: "a person being considered for a position", partOfSpeech: "noun", example: "There were three candidates for the role of head prefect." },
      { word: "majority", meaning: "the greater number; more than half", partOfSpeech: "noun", example: "The proposal was approved by a large majority." },
      { word: "plummeted", meaning: "fell or dropped suddenly and quickly", partOfSpeech: "verb", example: "Temperatures plummeted overnight." },
      { word: "reframed", meaning: "looked at something from a new and different angle", partOfSpeech: "verb", example: "The counsellor helped her reframe the setback as a learning opportunity." },
      { word: "charismatic", meaning: "having a natural ability to attract and inspire others", partOfSpeech: "adjective", example: "The charismatic speaker had the audience captivated." },
      { word: "disputes", meaning: "disagreements or arguments between people", partOfSpeech: "noun", example: "The mediator helped resolve disputes between the two parties." },
      { word: "profound", meaning: "very deep, meaningful or significant", partOfSpeech: "adjective", example: "The book had a profound impact on the way I think." },
    ],
  },
  {
    slug: "the-last-lesson",
    title: "The Last Lesson",
    description: "A retiring teacher gives her final class a lesson they will never forget.",
    level: 6,
    wordCount: 350,
    theme: "Education",
    body: `Mrs Chandra had been teaching for thirty-eight years. She was the oldest teacher in our school, with silver-streaked hair and reading glasses that perpetually perched on the tip of her nose. She was strict, demanding and did not tolerate nonsense. She was also the best teacher I ever had.

On her last day before retirement, she walked into our classroom carrying nothing but a small wooden box. No textbooks, no worksheets, no slides. The class exchanged puzzled glances.

"Today," she said, setting the box on her desk, "I am not going to teach you English, or mathematics, or science. Today, I am going to teach you the most important lesson of all."

She opened the box and took out a collection of items: a crumpled letter, a faded photograph, a student's report card from 1992, a hand-drawn birthday card, and a small origami crane.

"These," she said, holding up the items one by one, "are from former students. Some are now doctors, engineers, artists, teachers. Some are parents. One is a Member of Parliament." She paused. "But I do not remember them for their careers. I remember them for their character."

She held up the crumpled letter. "This was an apology from a boy who cheated on a test and chose to confess. He is now a judge." She held up the birthday card. "This was from a girl who had no money for a gift, so she drew me one. She is now a renowned illustrator."

Mrs Chandra looked at us, her eyes bright behind her glasses. "Your grades will not define you. Your achievements will fade from memory. What will remain — what people will remember — is how you treated others, whether you had the courage to do what was right, and the kindness to lift someone up when they were down."

The classroom was completely silent. Then she smiled — a warm, gentle smile that softened every stern memory I had of her.

"Be good humans," she said simply. "That is your homework for the rest of your lives."

The bell rang, and Mrs Chandra picked up her box and walked out. Nobody spoke for a long time. Some students had tears in their eyes. I know I did.

She did not teach us a single academic lesson that day. But it was the most important class I have ever attended.`,
    vocabulary: [
      { word: "perpetually", meaning: "at all times; always", partOfSpeech: "adverb", example: "The old clock was perpetually five minutes slow." },
      { word: "perched", meaning: "placed or sitting on the edge of something", partOfSpeech: "verb", example: "The bird perched on the branch outside my window." },
      { word: "crumpled", meaning: "crushed and wrinkled", partOfSpeech: "adjective", example: "She smoothed out the crumpled piece of paper." },
      { word: "confession", meaning: "the act of admitting to something wrong", partOfSpeech: "noun", example: "His confession surprised everyone in the room." },
      { word: "illustrator", meaning: "a person who draws pictures for books and other publications", partOfSpeech: "noun", example: "The illustrator brought the story to life with beautiful drawings." },
      { word: "renowned", meaning: "famous and widely respected", partOfSpeech: "adjective", example: "The renowned chef opened a new restaurant." },
      { word: "stern", meaning: "serious and strict in manner", partOfSpeech: "adjective", example: "The stern principal rarely smiled." },
      { word: "define", meaning: "to determine the essential quality or meaning of something", partOfSpeech: "verb", example: "Your failures do not define who you are." },
    ],
  },
  {
    slug: "the-neighbourhood-mystery",
    title: "The Neighbourhood Mystery",
    description: "A student investigates a series of strange events in the neighbourhood.",
    level: 6,
    wordCount: 350,
    theme: "Mystery",
    body: `It started with the disappearing cats. Three cats from our block vanished within a week. Then Mrs Lim's potted orchids were trampled overnight. A rubbish bin was overturned every morning, its contents scattered across the void deck. The neighbourhood WhatsApp group was buzzing with theories — a wild animal, vandals, or even a ghost.

My friend, Rajan, and I decided to investigate. We called ourselves "The Block Detectives" and armed ourselves with a notebook, a torch, and his father's old camera.

Our first clue came from Uncle Seng, who ran the provision shop. He told us he had heard scratching noises near the bin centre every night around midnight. "Something big," he said ominously. "Bigger than a cat."

The next evening, we set up a stakeout. We positioned ourselves on the fifth-floor corridor with a clear view of the bin centre below. Rajan brought snacks and I brought the camera. We waited in the darkness, whispering theories back and forth.

At eleven-thirty, we saw movement. A shadow emerged from behind the bin centre — not one, but two. They were wild boars! A mother and her piglet. They nosed through the bins, knocking them over with surprising force. The mother was massive, with coarse bristled fur and small, shrewd eyes.

We captured everything on camera. The next morning, we reported our findings to the town council. Officers from the National Parks Board arrived that afternoon. They confirmed that wild boars had been venturing into urban areas due to habitat loss. The boars were humanely relocated to a nature reserve.

The missing cats, it turned out, had not been taken by the boars. They had simply been hiding on the upper floors of the block, frightened by the boars' nightly visits. They returned once the boars were gone.

Our investigation was featured in the community newsletter. Neighbours thanked us and Uncle Seng gave us free ice cream. But the best part was the thrill of the investigation itself — the patience, the deduction, the satisfaction of solving a puzzle that had stumped the entire neighbourhood.

Rajan and I agreed: The Block Detectives would ride again.`,
    vocabulary: [
      { word: "vanished", meaning: "disappeared suddenly and completely", partOfSpeech: "verb", example: "The magician's assistant vanished from the stage." },
      { word: "theories", meaning: "ideas or explanations that have not yet been proven", partOfSpeech: "noun", example: "Scientists developed several theories to explain the phenomenon." },
      { word: "ominously", meaning: "in a way that suggests something bad is going to happen", partOfSpeech: "adverb", example: "The sky darkened ominously before the storm." },
      { word: "stakeout", meaning: "a period of secret watching of a place", partOfSpeech: "noun", example: "The police conducted a stakeout outside the building." },
      { word: "shrewd", meaning: "clever and showing good judgement", partOfSpeech: "adjective", example: "The shrewd businesswoman made a profitable deal." },
      { word: "humanely", meaning: "in a way that shows kindness and avoids causing suffering", partOfSpeech: "adverb", example: "The animals were humanely treated at the shelter." },
      { word: "deduction", meaning: "the process of reaching a conclusion by thinking carefully about known facts", partOfSpeech: "noun", example: "Through careful deduction, the detective solved the case." },
      { word: "stumped", meaning: "unable to answer or solve something; completely puzzled", partOfSpeech: "verb", example: "The riddle stumped everyone in the room." },
    ],
  },
  {
    slug: "the-second-chance",
    title: "The Second Chance",
    description: "A student who has given up on himself is given a second chance by an unlikely source.",
    level: 6,
    wordCount: 350,
    theme: "Redemption",
    body: `By Primary Five, I had earned a reputation as the class troublemaker. I talked back to teachers, skipped homework regularly and spent more time in detention than in class. My grades were abysmal, and most teachers had written me off. I did not blame them — I had written myself off too.

The truth was, I was angry. My parents had divorced the year before, and my world had fractured along with their marriage. I channelled my pain into defiance because it was easier than admitting I was hurting.

Then Mr Lim arrived. He was a new discipline master, transferred from another school. He was tall, soft-spoken and had an unnerving habit of looking at you as if he could read your thoughts.

The first time I was sent to his office, I expected the usual lecture. Instead, he asked me a question: "What do you want to be when you grow up?" I stared at him. Nobody had asked me that in years. "I do not know," I muttered.

"That is fine," he said. "But I would like to find out. Would you be willing to meet me every Tuesday after school? Not for detention — just to talk." I agreed, partly out of curiosity and partly because I had nothing better to do.

Those Tuesday sessions changed my life. Mr Lim never lectured me. He listened. He asked questions. He shared his own story — how he had been a struggling student himself, raised by a single mother, angry at the world. He understood my pain because he had lived it.

Slowly, something shifted. I started completing my homework. I stopped talking back. I rejoined the school football team. My grades crawled upward from Fs to Ds to Cs. It was not dramatic, but it was progress.

At my Primary Six graduation, I received the "Most Improved Student" award. As I walked off the stage, I saw Mr Lim standing at the back of the hall, arms folded, nodding slowly. He did not clap or cheer. He just nodded — as if to say, "I knew you could do it."

I sought him out after the ceremony. "Thank you for not giving up on me," I said.

He smiled quietly. "I did not do anything. You did the work. I just held the door open."

That door changed everything. And because someone held it open for me, I have made it my purpose to hold it open for others.`,
    vocabulary: [
      { word: "abysmal", meaning: "extremely bad; terrible", partOfSpeech: "adjective", example: "The team's performance was abysmal this season." },
      { word: "fractured", meaning: "broken or cracked; damaged", partOfSpeech: "verb", example: "The earthquake fractured the road in several places." },
      { word: "defiance", meaning: "open refusal to obey rules or authority", partOfSpeech: "noun", example: "His defiance of the school rules earned him a suspension." },
      { word: "unnerving", meaning: "making you feel nervous or uncomfortable", partOfSpeech: "adjective", example: "The stranger's stare was unnerving." },
      { word: "muttered", meaning: "spoke very quietly, often in a grumpy way", partOfSpeech: "verb", example: "He muttered an apology and walked away." },
      { word: "channelled", meaning: "directed energy or feelings towards a particular purpose", partOfSpeech: "verb", example: "She channelled her frustration into painting." },
      { word: "redemption", meaning: "the act of being saved or improved after a period of failure", partOfSpeech: "noun", example: "The story is one of redemption and hope." },
      { word: "sought", meaning: "looked for or tried to find", partOfSpeech: "verb", example: "She sought advice from her mentor." },
    ],
  },
  {
    slug: "the-two-friends",
    title: "The Two Friends",
    description: "Two best friends on opposite sides of an academic competition learn about priorities.",
    level: 6,
    wordCount: 350,
    theme: "Friendship",
    body: `Shanice and I had been best friends since kindergarten. We did everything together — studied, played, argued and made up. We knew each other so well that we could finish each other's sentences. People called us "the twins."

So when both of us were shortlisted for the prestigious Tan Kah Kee Young Inventors Award, I assumed we would celebrate together. Instead, it drove a wedge between us.

The competition required each finalist to present an original invention to a panel of judges. Shanice had designed a solar-powered phone charger, while I had created a water filtration device using recycled materials. Both projects were strong, and for the first time, we found ourselves as rivals.

At first, the rivalry was friendly. We teased each other and made bets about who would win. But as the competition drew closer, the atmosphere changed. Shanice became secretive about her project. She stopped sharing her progress and declined my invitations to study together. I felt hurt and responded by becoming equally distant.

By competition week, we were barely speaking. The silence between us was deafening. I missed my best friend, but my pride would not let me reach out first.

The results were announced at a formal ceremony. Shanice won first place. I came in third. When her name was called, I felt a complicated knot of emotions — happiness for her, disappointment for myself, and shame for letting a competition damage our friendship.

After the ceremony, I found Shanice standing alone outside the auditorium, clutching her trophy. She looked at me with uncertain eyes. For a moment, neither of us spoke.

Then I stepped forward and hugged her. "Congratulations," I said, and I meant it with my whole heart. She hugged me back tightly. "I missed you," she whispered.

We sat on the steps and talked for over an hour. We apologised, laughed, cried and promised never to let anything come between us again. We acknowledged that competition is healthy, but not at the expense of the people who matter most.

Shanice and I are still best friends. Her trophy sits on her bookshelf, and my certificate hangs on my wall. But the friendship we almost lost and fought to keep — that is the real prize neither of us would ever trade.`,
    vocabulary: [
      { word: "prestigious", meaning: "having a very high reputation; respected and admired", partOfSpeech: "adjective", example: "She was accepted into the prestigious university." },
      { word: "wedge", meaning: "something that causes division between people", partOfSpeech: "noun", example: "The disagreement drove a wedge between the siblings." },
      { word: "rivalry", meaning: "a situation where two people compete against each other", partOfSpeech: "noun", example: "The friendly rivalry between the two teams made the match exciting." },
      { word: "secretive", meaning: "keeping things hidden; not willing to share information", partOfSpeech: "adjective", example: "She became secretive about her plans." },
      { word: "declined", meaning: "politely refused an offer or invitation", partOfSpeech: "verb", example: "He declined the invitation to the party." },
      { word: "auditorium", meaning: "a large room or hall used for public events and performances", partOfSpeech: "noun", example: "The concert was held in the school auditorium." },
      { word: "acknowledged", meaning: "accepted or admitted the truth of something", partOfSpeech: "verb", example: "She acknowledged her mistake and apologised." },
      { word: "expense", meaning: "the cost or sacrifice of something", partOfSpeech: "noun", example: "He pursued success at the expense of his health." },
    ],
  },
  {
    slug: "the-time-capsule",
    title: "The Time Capsule",
    description: "A class creates a time capsule and discovers what truly matters to them.",
    level: 6,
    wordCount: 350,
    theme: "Reflection",
    body: `On the last week of Primary Six, our form teacher, Mrs Kumar, gave us an unusual assignment. "We are going to create a class time capsule," she announced. "Each of you will contribute one item and a letter to your future self. We will bury it in the school garden, and in ten years, you can come back and open it."

The class buzzed with excitement. Over the next few days, students agonised over what to include. Some brought photographs, others brought small toys or lucky charms. Ahmad contributed his captain's armband from the school football team. Priya added a pressed flower from the school garden.

I struggled with my choice. What single item could represent who I was at twelve? I considered my favourite book, my achievement medals, my lucky pen. None of them felt right.

On the night before the deadline, I sat at my desk staring at my belongings. Then my gaze fell on a folded piece of paper tucked into my mirror frame — a note my best friend, Kai, had slipped into my bag on a day I had failed my mathematics test. It read: "Bad days do not make a bad life. You have got this. — K."

That was it. That note had carried me through one of my lowest moments. It was not valuable in any material sense, but it represented something priceless: the power of kindness in the right moment.

For my letter, I wrote to my twenty-two-year-old self. I told her about our classroom, our teachers, the way sunlight fell through the windows during afternoon lessons. I told her about my fears — of secondary school, of growing up, of losing touch with friends. I told her to be brave and to remember where she came from.

The burial ceremony was surprisingly emotional. Mrs Kumar dug a hole in the garden, and one by one, we placed our items into the box. As the earth covered it, a strange feeling settled over the class — a mixture of nostalgia for something that had not yet passed, and hope for what was to come.

"Ten years," Mrs Kumar said, patting the soil. "I will be here. Will you?"

We all nodded. It was a promise — to ourselves, to each other, and to the children we used to be.`,
    vocabulary: [
      { word: "agonised", meaning: "spent a long time worrying and thinking about a difficult decision", partOfSpeech: "verb", example: "She agonised over which university to attend." },
      { word: "contributed", meaning: "gave something to a shared collection or effort", partOfSpeech: "verb", example: "Everyone contributed ideas to the project." },
      { word: "represent", meaning: "to stand for or symbolise something", partOfSpeech: "verb", example: "The dove is used to represent peace." },
      { word: "priceless", meaning: "so valuable that no price can be put on it", partOfSpeech: "adjective", example: "The memories of childhood are priceless." },
      { word: "material", meaning: "relating to physical objects or money rather than feelings", partOfSpeech: "adjective", example: "Material wealth cannot buy happiness." },
      { word: "nostalgia", meaning: "a sentimental longing for the past", partOfSpeech: "noun", example: "Looking at old photographs filled her with nostalgia." },
      { word: "ceremony", meaning: "a formal event held to mark an important occasion", partOfSpeech: "noun", example: "The graduation ceremony was held in the school hall." },
    ],
  },
  {
    slug: "the-digital-detox",
    title: "The Digital Detox",
    description: "A family gives up screens for a week and discovers life beyond devices.",
    level: 6,
    wordCount: 350,
    theme: "Technology",
    body: `"No screens for one week." My mother dropped the announcement at dinner like a bombshell. My sister, Mei, and I stared at her in horror. No phone, no tablet, no television, no computer — for seven whole days.

"You are both addicted to your devices," my father added, backing my mother's decree. "We all are, actually. So we are doing this as a family." He placed his own phone into a drawer to prove his point.

The first day was excruciating. I reached for my phone at least thirty times out of sheer habit. Without social media, I felt disconnected from the world. Without YouTube, the hours stretched endlessly. Mei lay on the sofa, staring at the ceiling, declaring that she was "dying of boredom."

By the second day, desperation bred creativity. I found my old skateboard in the storeroom and spent the afternoon at the park. Mei pulled out her watercolour set and began painting. My parents — freed from their own screens — actually sat in the living room and talked. Really talked. About their university days, how they met, their childhood dreams. I had never heard some of these stories before.

On the third evening, we played board games as a family for the first time in years. Monopoly turned into a three-hour epic filled with accusations of cheating, dramatic bankruptcies and triumphant deals. We laughed so hard that our neighbour knocked on the wall.

By day five, something remarkable had happened: I stopped reaching for my phone. I was reading a novel, cycling with friends, cooking with my mother and having actual conversations. The constant background anxiety that I had not even realised was there — the need to check notifications, compare myself to others online — had quietened.

When the week ended, my mother unlocked the drawer. We all reached for our phones, but something had shifted. The pull was weaker. The real world, it turned out, was more interesting than the digital one.

We now have "screen-free Sundays" in our family. It is not always easy, and occasionally someone cheats. But those Sundays have become my favourite day of the week — not despite the absence of screens, but because of it.

The digital detox taught me that technology is a wonderful servant but a terrible master. The key is knowing when to put it down.`,
    vocabulary: [
      { word: "bombshell", meaning: "a shocking and unexpected piece of news", partOfSpeech: "noun", example: "The resignation was a bombshell that nobody saw coming." },
      { word: "decree", meaning: "an official order or decision", partOfSpeech: "noun", example: "The principal issued a decree banning phones in class." },
      { word: "excruciating", meaning: "extremely painful or uncomfortable", partOfSpeech: "adjective", example: "The wait for the results was excruciating." },
      { word: "disconnected", meaning: "feeling cut off or not part of something", partOfSpeech: "adjective", example: "Without Wi-Fi, she felt completely disconnected." },
      { word: "desperation", meaning: "a state of extreme urgency or hopelessness", partOfSpeech: "noun", example: "In desperation, he tried one last solution." },
      { word: "triumphant", meaning: "feeling or showing great joy after a victory or achievement", partOfSpeech: "adjective", example: "The triumphant team celebrated their win." },
      { word: "bankruptcies", meaning: "situations of being completely out of money", partOfSpeech: "noun", example: "Several bankruptcies occurred during the Monopoly game." },
      { word: "anxiety", meaning: "a feeling of worry or unease about something uncertain", partOfSpeech: "noun", example: "She felt anxiety before every exam." },
    ],
  },
  {
    slug: "the-interview",
    title: "The Interview",
    description: "A student prepares for a secondary school interview and discovers her true strengths.",
    level: 6,
    wordCount: 350,
    theme: "Self-Discovery",
    body: `The letter arrived on a Tuesday. I had been shortlisted for the Direct School Admission interview at Raffles Institution. My hands trembled as I read it. This was the most prestigious school in the country, and they wanted to talk to me.

My mother immediately went into preparation mode. She bought books on interview techniques, enrolled me in a public speaking course, and arranged mock interviews with my uncle, who was a human resources manager. Every evening after dinner, I practised answering questions in front of the mirror.

"Tell me about yourself." "What are your strengths?" "Why should we accept you?" I rehearsed my answers until they were polished and perfect. I memorised achievements, compiled a portfolio and prepared a two-minute speech about my future goals.

On the morning of the interview, I wore my best outfit and arrived thirty minutes early. The waiting room was filled with other candidates, all looking equally nervous and accomplished. One girl had won a national science competition. A boy next to me was a published poet. My confidence wavered.

When my name was called, I walked into the room to face a panel of three interviewers. They were warm but direct. The questions started predictably — my achievements, my interests, my academic record. I delivered my rehearsed answers smoothly.

Then the head interviewer leaned forward. "Forget your achievements for a moment," she said. "Tell me about a time you failed and what it taught you."

I had not prepared for this. My rehearsed answers were useless. I sat in silence for a moment, then decided to be honest. I told them about the time I lost the class election badly and cried in the toilet. About how losing taught me that leadership is about serving others, not winning titles. About how I went back and volunteered for every unglamorous committee nobody else wanted.

The interviewers exchanged glances. The head interviewer smiled. "That," she said, "is exactly what we are looking for."

I did not get into Raffles Institution in the end. But that interview taught me something more valuable: authenticity is more powerful than perfection. The moment I stopped performing and started being real, I became the most compelling version of myself.

And that is a lesson no rehearsal can teach.`,
    vocabulary: [
      { word: "shortlisted", meaning: "selected as one of a small group of candidates for further consideration", partOfSpeech: "verb", example: "Her application was shortlisted for the scholarship." },
      { word: "portfolio", meaning: "a collection of work samples showing your abilities", partOfSpeech: "noun", example: "The artist presented her portfolio to the gallery." },
      { word: "rehearsed", meaning: "practised something in preparation for a performance or event", partOfSpeech: "verb", example: "The students rehearsed the play every afternoon." },
      { word: "wavered", meaning: "became unsteady or uncertain", partOfSpeech: "verb", example: "Her determination wavered when she saw the difficulty of the task." },
      { word: "predictably", meaning: "in a way that can be expected; without surprise", partOfSpeech: "adverb", example: "The movie ended predictably with a happy ending." },
      { word: "unglamorous", meaning: "not exciting or attractive; ordinary", partOfSpeech: "adjective", example: "The unglamorous work of cleaning was just as important." },
      { word: "authenticity", meaning: "the quality of being genuine and true to oneself", partOfSpeech: "noun", example: "Her authenticity made people trust her immediately." },
      { word: "compelling", meaning: "very interesting and hard to ignore", partOfSpeech: "adjective", example: "She told a compelling story that moved the audience." },
    ],
  },

  // ════════════════════════════════════════
  // PRIMARY 1 — BATCH 2
  // ════════════════════════════════════════
  {
    slug: "the-kind-bus-driver",
    title: "The Kind Bus Driver",
    description: "A bus driver helps a child who forgot to bring money for the fare.",
    level: 1,
    wordCount: 105,
    theme: "Kindness",
    body: `One morning, I was late for school. My mother quickly packed my bag and rushed me to the bus stop. When the bus came, I dug into my pocket for coins. My pocket was empty! I had forgotten my bus fare.

My face turned red. The people behind me were waiting. I felt like crying.

The bus driver, Uncle Lim, smiled kindly. "Don't worry, boy. You can pay me tomorrow," he said. I thanked him and sat down. I felt so grateful.

The next day, I brought extra coins for Uncle Lim. He laughed and ruffled my hair. "You are an honest boy," he said.

From that day on, Uncle Lim and I became friends. I always greeted him with a big smile every morning.`,
    vocabulary: [
      { word: "rushed", meaning: "moved or did something very quickly", partOfSpeech: "verb", example: "She rushed to finish her homework before bedtime." },
      { word: "dug", meaning: "pushed your hand into something to search for it", partOfSpeech: "verb", example: "He dug into his bag to find his pencil." },
      { word: "grateful", meaning: "feeling thankful for something someone did", partOfSpeech: "adjective", example: "I am grateful for my teacher's help." },
      { word: "ruffled", meaning: "messed up someone's hair playfully with your hand", partOfSpeech: "verb", example: "Dad ruffled my hair and called me champ." },
      { word: "greeted", meaning: "said hello to someone in a friendly way", partOfSpeech: "verb", example: "She greeted her neighbours every morning." },
    ],
  },
  {
    slug: "the-missing-tooth",
    title: "The Missing Tooth",
    description: "A child loses a wobbly tooth during class and causes a funny scene.",
    level: 1,
    wordCount: 100,
    theme: "Growing Up",
    body: `My front tooth had been wobbly for days. I kept wiggling it with my tongue during class. My teacher, Mrs Goh, told me to stop fidgeting.

During recess, I bit into a hard biscuit. POP! My tooth flew out and landed on the table. "Ewww!" my friend, Lily, squealed.

I looked at the tiny white tooth and laughed. There was a gap in my mouth! I looked very funny. Everyone at the table giggled.

I wrapped my tooth in a tissue and put it in my pocket. When I got home, my mother put it under my pillow. "The tooth fairy will come tonight," she whispered.

The next morning, I found a shiny coin under my pillow. I grinned my gappy grin all day long.`,
    vocabulary: [
      { word: "wobbly", meaning: "moving from side to side in an unsteady way", partOfSpeech: "adjective", example: "The wobbly table rocked when I leaned on it." },
      { word: "wiggling", meaning: "moving something from side to side with small, quick movements", partOfSpeech: "verb", example: "The puppy was wiggling its tail excitedly." },
      { word: "fidgeting", meaning: "making small, restless movements because you cannot keep still", partOfSpeech: "verb", example: "Stop fidgeting and sit still!" },
      { word: "squealed", meaning: "made a loud, high sound because of surprise or excitement", partOfSpeech: "verb", example: "She squealed when she saw the surprise cake." },
      { word: "gap", meaning: "an empty space between two things", partOfSpeech: "noun", example: "There was a gap in the fence." },
    ],
  },
  {
    slug: "the-library-book",
    title: "The Library Book",
    description: "A child borrows a library book and learns to take care of it.",
    level: 1,
    wordCount: 100,
    theme: "Responsibility",
    body: `I borrowed a storybook from the school library. It was about a brave knight and a dragon. I loved reading it before bedtime.

One day, I was reading the book while eating lunch. A drop of soup fell on the page! I gasped. There was a big brown stain on the picture of the dragon.

I tried to wipe it off, but it only got worse. I felt terrible. The librarian, Miss Tan, would be upset.

The next day, I showed Miss Tan the stain. "I am sorry," I said sadly. She looked at the page and sighed. "Thank you for telling me," she said. "Next time, do not eat while reading."

I promised to be more careful. Now, I always wash my hands before touching a library book.`,
    vocabulary: [
      { word: "borrowed", meaning: "took something to use for a while and return later", partOfSpeech: "verb", example: "She borrowed a pencil from her friend." },
      { word: "knight", meaning: "a brave soldier in the olden days who wore armour", partOfSpeech: "noun", example: "The knight rode on a white horse." },
      { word: "stain", meaning: "a dirty mark that is hard to remove", partOfSpeech: "noun", example: "There was a ketchup stain on his shirt." },
      { word: "terrible", meaning: "very bad or unpleasant", partOfSpeech: "adjective", example: "I felt terrible for breaking the toy." },
      { word: "sighed", meaning: "breathed out heavily to show sadness or tiredness", partOfSpeech: "verb", example: "She sighed when she saw the long queue." },
    ],
  },
  {
    slug: "the-night-market",
    title: "The Night Market",
    description: "A visit to the night market with the family is full of sights, sounds and smells.",
    level: 1,
    wordCount: 110,
    theme: "Outing",
    body: `On Saturday night, my family went to the night market. It was so crowded! There were bright lights everywhere and loud music playing.

The air smelled of fried chicken and satay. My stomach growled. "I am hungry!" I told my father. He laughed and bought me a stick of satay. It was hot and yummy!

My mother stopped at a stall selling pretty bracelets. She tried on a blue one and twirled her wrist. "How does it look?" she asked. "Beautiful!" I said.

My little sister wanted a balloon. The balloon man twisted a long balloon into the shape of a dog. She clapped her hands happily.

We walked around until my legs were tired. On the way home, I fell asleep in the car. The night market was the best Saturday adventure!`,
    vocabulary: [
      { word: "crowded", meaning: "full of many people", partOfSpeech: "adjective", example: "The shopping mall was very crowded on Sunday." },
      { word: "growled", meaning: "made a low rumbling sound", partOfSpeech: "verb", example: "My stomach growled because I was hungry." },
      { word: "twirled", meaning: "turned something around and around quickly", partOfSpeech: "verb", example: "She twirled her umbrella in the rain." },
      { word: "twisted", meaning: "bent something into a different shape", partOfSpeech: "verb", example: "He twisted the wire into a heart shape." },
      { word: "adventure", meaning: "an exciting experience", partOfSpeech: "noun", example: "Going camping was a great adventure." },
    ],
  },
  {
    slug: "the-little-gardener",
    title: "The Little Gardener",
    description: "A child plants a sunflower seed and watches it grow day by day.",
    level: 1,
    wordCount: 105,
    theme: "Nature",
    body: `My teacher gave each of us a sunflower seed. "Take care of it and watch it grow," she said. I was so excited!

At home, I filled a pot with soil. I made a small hole with my finger and dropped the seed in. Then I covered it gently and poured some water.

Every morning, I watered my pot and checked for a sprout. Nothing happened for five days. I was worried. "Maybe it is dead," I thought sadly.

On the sixth day, a tiny green sprout poked through the soil! I jumped up and down. "It is alive!" I shouted.

Week after week, my plant grew taller. It grew big green leaves. One day, a bright yellow flower opened up. It was as big as my face!

I brought my sunflower to school for show-and-tell. Everyone wanted to touch it. I was the proudest little gardener in class.`,
    vocabulary: [
      { word: "soil", meaning: "the earth in which plants grow", partOfSpeech: "noun", example: "The soil in the garden was dark and rich." },
      { word: "sprout", meaning: "a young plant that has just begun to grow", partOfSpeech: "noun", example: "A tiny sprout appeared after a week." },
      { word: "poked", meaning: "pushed or stuck out from something", partOfSpeech: "verb", example: "The turtle poked its head out of the shell." },
      { word: "bloom", meaning: "when a flower opens up its petals", partOfSpeech: "verb", example: "The roses bloom in the spring." },
      { word: "proudest", meaning: "feeling the most pride and happiness about something", partOfSpeech: "adjective", example: "She was the proudest winner on the stage." },
    ],
  },

  // ════════════════════════════════════════
  // PRIMARY 2 — BATCH 2
  // ════════════════════════════════════════
  {
    slug: "the-charity-sale",
    title: "The Charity Sale",
    description: "A class organises a charity sale and learns the joy of giving.",
    level: 2,
    wordCount: 145,
    theme: "Charity",
    body: `Our class was organising a charity sale to raise money for the old folks' home. My teacher, Mrs Tay, asked everyone to bring things to sell. I looked around my room for something to donate.

I found some toys I no longer played with, a few storybooks and a puzzle set. My mother helped me put them in a big bag. "It is good to share with others," she said.

On the day of the sale, the school hall was buzzing with excitement. Each class had a table full of items. Our table had toys, books and even some homemade cookies that Hui Ling's mother had baked.

I was in charge of the money box. Students came and bought things happily. One little boy picked up my old teddy bear and hugged it tightly. He paid for it with shiny coins from his pocket.

By the end of the day, our class had raised one hundred and fifty dollars! Mrs Tay was over the moon. "You have all done a wonderful job," she said proudly.

When we visited the old folks' home the following week, the elderly residents smiled warmly at us. That made everything worth it.`,
    vocabulary: [
      { word: "organising", meaning: "planning and arranging something", partOfSpeech: "verb", example: "The committee is organising a sports event." },
      { word: "donate", meaning: "to give something to help others without expecting anything in return", partOfSpeech: "verb", example: "She decided to donate her old clothes." },
      { word: "buzzing", meaning: "full of energy and noise from activity", partOfSpeech: "adjective", example: "The school was buzzing with excitement on sports day." },
      { word: "residents", meaning: "people who live in a particular place", partOfSpeech: "noun", example: "The residents of the block organised a barbecue." },
      { word: "over the moon", meaning: "extremely happy", partOfSpeech: "phrase", example: "She was over the moon when she passed her test." },
    ],
  },
  {
    slug: "the-thunderstorm",
    title: "The Thunderstorm",
    description: "A child overcomes his fear of thunderstorms with his mother's help.",
    level: 2,
    wordCount: 140,
    theme: "Overcoming Fear",
    body: `I have always been afraid of thunderstorms. The loud booming sounds and bright flashes of lightning scare me.

One night, a terrible storm hit our town. The rain hammered against the windows. Suddenly, a flash of lightning lit up the whole room. BOOM! Thunder crashed so loudly that the walls shook. I screamed and dove under my blanket.

My mother came to my room. She sat on my bed and pulled me close. "The thunder cannot hurt you," she said softly. "It is just the sound of clouds bumping into each other."

She told me to count the seconds between the lightning and the thunder. "One, two, three, four, five..." BOOM! "See? The storm is five kilometres away," she explained.

We counted together each time. Slowly, the numbers grew bigger. The storm was moving away! I started to feel less afraid.

By the time the storm ended, I was no longer hiding under my blanket. I was sitting by the window, watching the last few flashes in the distance.

"Thank you, Mummy," I whispered. She kissed my forehead and smiled.`,
    vocabulary: [
      { word: "terrible", meaning: "very bad or severe", partOfSpeech: "adjective", example: "The terrible weather ruined our picnic." },
      { word: "hammered", meaning: "hit something hard and repeatedly", partOfSpeech: "verb", example: "The rain hammered on the roof all night." },
      { word: "crashed", meaning: "made a sudden, loud noise", partOfSpeech: "verb", example: "The thunder crashed and the dog hid under the table." },
      { word: "dove", meaning: "moved quickly headfirst into something", partOfSpeech: "verb", example: "She dove under the table when the glass fell." },
      { word: "distance", meaning: "the amount of space between two places", partOfSpeech: "noun", example: "We could see the mountains in the distance." },
    ],
  },
  {
    slug: "a-trip-to-the-dentist",
    title: "A Trip to the Dentist",
    description: "A child's dreaded visit to the dentist turns out to be not so bad after all.",
    level: 2,
    wordCount: 145,
    theme: "Overcoming Fear",
    body: `I had a toothache for three days. My mother said I needed to see the dentist. My heart sank! I was terrified of dentists.

On the day of the visit, I dragged my feet all the way to the clinic. The waiting room smelled like medicine. I sat on the chair, gripping the armrests tightly. My legs were trembling.

"Hello! I am Dr Siti," the dentist said. She had a warm smile and wore a funny pair of goggles. "Open wide and let me have a look."

I opened my mouth slowly. Dr Siti used a tiny mirror to look at my teeth. "Ah, I see the problem. You have a small cavity," she said. "I will fix it. It will not hurt, I promise."

She was right! I felt a little pinch, but it was over quickly. Dr Siti even let me choose a sticker from a big box. I chose a dinosaur sticker.

"You were very brave today," she said, giving me a high-five. I walked out of the clinic feeling proud. The dentist was not scary at all!

That night, I brushed my teeth extra carefully. I did not want another cavity!`,
    vocabulary: [
      { word: "toothache", meaning: "a pain in or around a tooth", partOfSpeech: "noun", example: "He could not eat because of his toothache." },
      { word: "terrified", meaning: "extremely scared", partOfSpeech: "adjective", example: "She was terrified of the dark." },
      { word: "dragged", meaning: "moved slowly and unwillingly", partOfSpeech: "verb", example: "He dragged his feet on the way to school." },
      { word: "gripping", meaning: "holding something very tightly", partOfSpeech: "verb", example: "She was gripping the railing on the roller coaster." },
      { word: "cavity", meaning: "a hole in a tooth caused by decay", partOfSpeech: "noun", example: "Eating too many sweets can cause a cavity." },
    ],
  },
  {
    slug: "the-brave-firefighter",
    title: "The Brave Firefighter",
    description: "A class visits the fire station and learns about the brave work of firefighters.",
    level: 2,
    wordCount: 150,
    theme: "Bravery",
    body: `Our class went on a field trip to the fire station. We were met by Captain Faizal, a tall firefighter with a big friendly smile.

He showed us around the station. First, we saw the big red fire engine. It was huge! Captain Faizal let us climb up and sit inside. I pretended to drive it. "Nee-naw! Nee-naw!" I said, and everyone laughed.

Next, he showed us the firefighters' uniforms. The jacket was thick and heavy. The helmet had a special shield to protect their faces from heat. I tried on the helmet. It was so heavy that my head tilted to one side!

Captain Faizal told us that firefighters train every day. They run, climb ladders and carry heavy equipment. "We have to be strong and ready at all times," he said seriously.

Then, the alarm suddenly rang! The firefighters slid down a shiny pole and jumped into the fire engine within seconds. We watched in amazement as the engine sped away with its sirens blaring.

"Are you scared when you fight fires?" I asked Captain Faizal later. He smiled and said, "Sometimes. But when I think about the people I can save, the fear goes away."

I decided that when I grow up, I want to be just as brave as Captain Faizal.`,
    vocabulary: [
      { word: "field trip", meaning: "a visit to a place outside school for learning", partOfSpeech: "noun", example: "We went on a field trip to the science museum." },
      { word: "pretended", meaning: "acted as if something was real when it was not", partOfSpeech: "verb", example: "The children pretended to be superheroes." },
      { word: "shield", meaning: "something that protects you from harm", partOfSpeech: "noun", example: "The knight held up his shield." },
      { word: "equipment", meaning: "tools and things needed for a particular job", partOfSpeech: "noun", example: "The doctor checked her medical equipment." },
      { word: "blaring", meaning: "making a loud, unpleasant sound", partOfSpeech: "adjective", example: "The blaring horn woke up the neighbourhood." },
    ],
  },
  {
    slug: "the-forgetful-day",
    title: "The Forgetful Day",
    description: "A boy has a day where he keeps forgetting things, one after another.",
    level: 2,
    wordCount: 145,
    theme: "Humour",
    body: `It was the most forgetful day of my life. Everything went wrong from the moment I woke up.

First, I forgot to set my alarm. My mother had to shake me awake. "You are going to be late!" she cried. I leapt out of bed and got dressed in a hurry.

At school, I reached into my bag for my homework. It was not there! I had left it on the dining table. My teacher, Miss Ng, shook her head. "Again, Jason?" she said with a sigh.

During art class, I realised I had forgotten my colour pencils. I had to borrow from my friend again. He rolled his eyes and said, "You owe me a packet of chips."

At recess, I went to the canteen and ordered chicken rice. Then I realised I had left my wallet in the classroom! I had to run all the way back to get it. By the time I returned, the chicken rice was sold out.

The final disaster was after school. I waited at the wrong gate for my mother. She waited at Gate A while I stood at Gate B for twenty minutes!

That night, my mother helped me make a checklist. Now I tick off every item before leaving the house. I have not forgotten anything since. Well, almost.`,
    vocabulary: [
      { word: "forgetful", meaning: "often forgetting things", partOfSpeech: "adjective", example: "My grandmother is very forgetful these days." },
      { word: "leapt", meaning: "jumped quickly", partOfSpeech: "verb", example: "The cat leapt onto the counter." },
      { word: "disaster", meaning: "something that goes very badly", partOfSpeech: "noun", example: "The burnt dinner was a complete disaster." },
      { word: "checklist", meaning: "a list of things to remember or do", partOfSpeech: "noun", example: "She used a checklist to pack for her holiday." },
      { word: "rolled his eyes", meaning: "moved his eyes upward to show annoyance", partOfSpeech: "phrase", example: "He rolled his eyes when his sister told the same joke again." },
    ],
  },

  // ════════════════════════════════════════
  // PRIMARY 3 — BATCH 2
  // ════════════════════════════════════════
  {
    slug: "the-food-thief",
    title: "The Food Thief",
    description: "A student's lunch keeps disappearing from the classroom fridge, sparking an investigation.",
    level: 3,
    wordCount: 210,
    theme: "Mystery",
    body: `For three days in a row, food had been disappearing from the classroom fridge. First, it was Mei Ling's sandwich. Then, Kumar's curry puff vanished. On the third day, my chocolate pudding was gone!

"There is a food thief among us!" I declared during recess. My friends nodded gravely. We decided to catch the culprit.

Our plan was simple. We would take turns watching the fridge during class. I volunteered for the first shift. I positioned myself at a desk near the fridge and pretended to read while keeping one eye on it.

Nothing happened on the first day. Or the second. By the third day, I was about to give up. Then, during music period when the classroom was empty, I crept back and hid behind the bookshelf.

Minutes ticked by. Then the door opened slowly. A small furry head poked through the gap. It was a cat! A stray tabby cat had been sneaking into our classroom through a gap in the window grille and helping itself to our lunches!

I burst out laughing. The cat looked at me, licked its whiskers, and strolled out casually as if it owned the place.

When I told the class, everyone laughed. Kumar said, "At least we know the thief has good taste — it chose my curry puff!"

Our teacher sealed the gap in the grille, but we left a small bowl of cat food outside the window. The tabby — which we named Curry Puff — visited every day. It was the best ending to a mystery I could have imagined.`,
    vocabulary: [
      { word: "declared", meaning: "said something in a strong, public way", partOfSpeech: "verb", example: "She declared that she would win the spelling bee." },
      { word: "gravely", meaning: "in a very serious way", partOfSpeech: "adverb", example: "The doctor spoke gravely about the patient's condition." },
      { word: "culprit", meaning: "the person or thing responsible for something bad", partOfSpeech: "noun", example: "The police caught the culprit within an hour." },
      { word: "positioned", meaning: "placed yourself in a particular spot", partOfSpeech: "verb", example: "She positioned herself near the door to greet guests." },
      { word: "strolled", meaning: "walked in a slow, relaxed way", partOfSpeech: "verb", example: "They strolled along the beach at sunset." },
      { word: "casually", meaning: "in a relaxed way, as if it is not important", partOfSpeech: "adverb", example: "He casually walked past as if nothing had happened." },
    ],
  },
  {
    slug: "the-forgiveness",
    title: "Learning to Forgive",
    description: "Two friends fall out over a misunderstanding and learn the power of forgiveness.",
    level: 3,
    wordCount: 210,
    theme: "Forgiveness",
    body: `My best friend, Amir, and I had a terrible quarrel. It started over something silly — a rumour.

Someone told me that Amir had been making fun of my drawing during art class. "He said it looked like a blob," the person whispered. I was furious. I had spent hours on that drawing!

At recess, I marched up to Amir. "Why did you say my drawing looks like a blob?" I demanded. Amir looked confused. "I never said that!" he protested. But I was too angry to listen. I turned my back on him and walked away.

For two whole weeks, we did not speak to each other. I missed my friend, but my pride would not let me apologise. The classroom felt emptier without our usual laughter.

Then one day, I overheard the boy who had told me the rumour. He was telling someone else a completely different story about another classmate. He was a troublemaker who enjoyed stirring up drama!

My heart sank. I had been wrong. Amir had never said those things.

I found Amir sitting alone under the rain tree during recess. I sat down next to him. "I am sorry," I said quietly. "I should have believed you."

Amir looked at me for a long moment. Then he smiled. "I was waiting for you to come around," he said. Just like that, the weight on my chest lifted.

We talked and laughed all through recess, making up for lost time. I learned two important lessons that day: do not believe everything you hear, and never let pride stand in the way of a good friendship.`,
    vocabulary: [
      { word: "quarrel", meaning: "an angry argument between people", partOfSpeech: "noun", example: "The siblings had a quarrel over the remote control." },
      { word: "rumour", meaning: "a story spread by people that may not be true", partOfSpeech: "noun", example: "The rumour about the school closing turned out to be false." },
      { word: "furious", meaning: "extremely angry", partOfSpeech: "adjective", example: "Mother was furious when she saw the mess." },
      { word: "demanded", meaning: "asked for something in a forceful way", partOfSpeech: "verb", example: "She demanded an explanation for the delay." },
      { word: "protested", meaning: "said something strongly to show disagreement", partOfSpeech: "verb", example: "He protested that the decision was unfair." },
      { word: "overheard", meaning: "heard something that was not meant for you", partOfSpeech: "verb", example: "I overheard them planning a surprise party." },
    ],
  },
  {
    slug: "the-embarrassing-moment",
    title: "The Embarrassing Moment",
    description: "A student has an embarrassing moment during a school performance.",
    level: 3,
    wordCount: 200,
    theme: "Embarrassment",
    body: `It was National Day and our class had been chosen to perform a dance on stage. We had practised for weeks. I was confident — until the actual performance.

The school hall was packed with students, teachers and parents. As we waited backstage, my palms grew sweaty. "You will be fine," my friend, Rachel, whispered.

The music started and we walked onto the stage. The bright spotlight was blinding. I squinted and tried to find my position. Left, right, step, turn — I followed the moves perfectly.

Then it happened. During a spin, my shoe flew off my foot and sailed across the stage! It landed right in front of the principal, Mr Tan, with a loud THUD. The audience gasped, then burst into laughter.

My face burned with embarrassment. I wanted the ground to swallow me up. But the music was still playing. I had a choice — freeze or keep going.

I kicked off my other shoe and kept dancing. Barefoot! The audience cheered even louder. My classmates grinned and danced with extra energy.

After the performance, Mr Tan returned my shoe with a twinkle in his eye. "That was the most entertaining National Day performance I have seen," he chuckled.

My classmates surrounded me, patting my back. "That was amazing!" Rachel said. What started as my worst nightmare became one of my proudest moments. I learned that how you handle a mistake matters more than the mistake itself.`,
    vocabulary: [
      { word: "confident", meaning: "feeling sure about your own abilities", partOfSpeech: "adjective", example: "She felt confident before the spelling test." },
      { word: "squinted", meaning: "partly closed your eyes to see better in bright light", partOfSpeech: "verb", example: "He squinted at the sign in the distance." },
      { word: "embarrassment", meaning: "a feeling of being ashamed or awkward in front of others", partOfSpeech: "noun", example: "His face turned red with embarrassment." },
      { word: "barefoot", meaning: "without shoes or socks", partOfSpeech: "adjective", example: "The children ran barefoot on the beach." },
      { word: "entertaining", meaning: "enjoyable and amusing to watch", partOfSpeech: "adjective", example: "The magician put on an entertaining show." },
      { word: "twinkle", meaning: "a sparkle of fun or amusement in someone's eye", partOfSpeech: "noun", example: "Grandpa told the joke with a twinkle in his eye." },
    ],
  },
  {
    slug: "the-dare",
    title: "The Foolish Dare",
    description: "A student accepts a dare from friends and learns that peer pressure can be dangerous.",
    level: 3,
    wordCount: 210,
    theme: "Peer Pressure",
    body: `"I dare you to climb the fence," Marcus said, crossing his arms with a smirk. The other boys watched, waiting to see what I would do.

The fence separated our school from the construction site next door. It was tall, with sharp points at the top. A big sign read: "DANGER — NO ENTRY." My stomach tightened.

"Come on, don't be a chicken," Marcus taunted. The other boys started clucking like chickens. My face burned. I did not want them to think I was a coward.

Before I could think clearly, I grabbed the fence and started climbing. The metal bars were cold and rough against my hands. I was halfway up when my foot slipped. I tried to grab the top of the fence but my hand caught on a sharp point.

"Oww!" I cried. There was a cut on my palm. Blood trickled down my wrist. I let go and dropped to the ground, clutching my injured hand.

My friends went quiet. Marcus looked pale. Nobody was laughing anymore.

The school nurse cleaned and bandaged my wound. My parents were called and my mother rushed to school, worried sick. "What were you thinking?" she asked, her voice shaking.

I was given a stern warning by the principal. But the worst punishment was the guilt I felt. I had risked my safety just to impress people who were not even real friends.

That incident taught me an important lesson: true friends never pressure you to do dangerous things. And being brave does not mean saying yes to every dare — sometimes, the bravest thing is saying no.`,
    vocabulary: [
      { word: "smirk", meaning: "a smile that shows you think you are better than someone", partOfSpeech: "noun", example: "He had a smirk on his face after winning the bet." },
      { word: "taunted", meaning: "made fun of someone to make them angry or upset", partOfSpeech: "verb", example: "The bully taunted the younger boy." },
      { word: "coward", meaning: "a person who is too afraid to do what is right or expected", partOfSpeech: "noun", example: "He called himself a coward for not speaking up." },
      { word: "trickled", meaning: "flowed slowly in a thin stream", partOfSpeech: "verb", example: "Water trickled down the window." },
      { word: "bandaged", meaning: "wrapped a strip of cloth around a wound", partOfSpeech: "verb", example: "The nurse bandaged his injured knee." },
      { word: "peer pressure", meaning: "influence from people your own age to behave in a certain way", partOfSpeech: "noun", example: "She gave in to peer pressure and skipped class." },
    ],
  },
  {
    slug: "the-grateful-neighbour",
    title: "The Grateful Neighbour",
    description: "A child helps an elderly neighbour carry groceries and receives an unexpected reward.",
    level: 3,
    wordCount: 200,
    theme: "Gratitude",
    body: `Every afternoon, I saw Aunty Chen struggling to carry her heavy grocery bags from the market. She was old and walked with a slight limp. Most days, she made two or three trips because she could not carry everything at once.

One day, I offered to help. "Aunty, let me carry those for you," I said, reaching for her bags. She looked surprised but grateful. "Thank you, child," she said with a warm smile.

From that day on, I helped Aunty Chen with her groceries every Saturday. It became our routine. As we walked, she would tell me stories about her life. She had been a teacher for forty years. She had no children of her own and lived alone.

One Saturday, she invited me in for a cold drink. Her flat was neat and cozy, filled with books and photographs. She showed me a photo of her late husband. "He was a kind man, just like you," she said.

When Chinese New Year came, Aunty Chen gave me a red packet. Inside was not just money, but a handwritten note: "Kindness costs nothing, but it means everything. Thank you for brightening an old woman's days."

I kept that note in my drawer. It taught me that helping others does not have to be a grand gesture. Sometimes, carrying a bag of groceries is enough.`,
    vocabulary: [
      { word: "struggling", meaning: "finding it very difficult to do something", partOfSpeech: "verb", example: "He was struggling to carry the heavy box." },
      { word: "limp", meaning: "a way of walking unevenly because of an injured leg", partOfSpeech: "noun", example: "She walked with a slight limp after the fall." },
      { word: "routine", meaning: "something you do regularly at the same time", partOfSpeech: "noun", example: "Brushing my teeth is part of my morning routine." },
      { word: "cozy", meaning: "warm, comfortable and small", partOfSpeech: "adjective", example: "The cozy café was the perfect place to read." },
      { word: "brightening", meaning: "making something happier or more cheerful", partOfSpeech: "verb", example: "Her smile was always brightening everyone's day." },
      { word: "grand", meaning: "big, impressive or important", partOfSpeech: "adjective", example: "You don't need a grand plan to make a difference." },
    ],
  },

  // ════════════════════════════════════════
  // PRIMARY 4 — BATCH 2
  // ════════════════════════════════════════
  {
    slug: "the-pride-before-a-fall",
    title: "Pride Before a Fall",
    description: "A top student learns humility after becoming too arrogant about his grades.",
    level: 4,
    wordCount: 260,
    theme: "Pride",
    body: `I was the best in my class at Mathematics. Every test, without fail, I would score above ninety marks. My classmates called me "The Calculator" because I could solve problems faster than anyone else. I loved the attention.

But somewhere along the way, my confidence turned into arrogance. I started looking down on students who struggled with Mathematics. When my friend, Timothy, asked me for help with fractions, I laughed. "It is so easy! How can you not understand?" I said. Timothy's face crumbled, but I did not care.

I also stopped studying. Why bother when I was already the best? I spent my evenings playing video games instead of revising. "Mathematics is a piece of cake for me," I boasted to my mother. She warned me not to be overconfident, but I dismissed her advice.

Then came the mid-year examination. The paper was unexpectedly difficult. There were questions I had never seen before — questions that required deeper thinking and concepts I had skimmed over. My hand trembled as I stared at the blank spaces on my answer sheet.

When the results were released, I stared at my score in disbelief: sixty-eight marks. Timothy, who had been studying diligently every night, scored eighty-five.

I was devastated. But what hurt more than the grade was remembering how I had treated Timothy. He had every right to gloat, but he did not. Instead, he walked up to me and said quietly, "Do you want to study together for the next test?"

His kindness made me feel smaller than my test score. I nodded, unable to speak.

That experience taught me a lesson I will never forget. Talent without effort is wasted, and intelligence without humility is ugly. I apologised to everyone I had looked down on. And I never laughed at anyone's struggles again.`,
    vocabulary: [
      { word: "arrogance", meaning: "an attitude of believing you are better or more important than others", partOfSpeech: "noun", example: "His arrogance made it hard for people to like him." },
      { word: "crumbled", meaning: "collapsed or fell apart, often describing someone's expression", partOfSpeech: "verb", example: "Her confident smile crumbled when she heard the bad news." },
      { word: "boasted", meaning: "talked proudly about yourself in a way that annoys others", partOfSpeech: "verb", example: "He boasted about his new phone to everyone." },
      { word: "dismissed", meaning: "refused to consider something seriously", partOfSpeech: "verb", example: "She dismissed the warning and carried on." },
      { word: "skimmed", meaning: "read or studied something quickly without paying close attention", partOfSpeech: "verb", example: "He skimmed through the notes instead of reading carefully." },
      { word: "diligently", meaning: "with careful and steady effort", partOfSpeech: "adverb", example: "She diligently practised piano every evening." },
      { word: "gloat", meaning: "to show smug pleasure over someone else's failure", partOfSpeech: "verb", example: "It is unkind to gloat when others lose." },
      { word: "humility", meaning: "the quality of not thinking you are better than others", partOfSpeech: "noun", example: "Despite his success, he showed great humility." },
    ],
  },
  {
    slug: "the-regret",
    title: "A Moment of Regret",
    description: "A student says hurtful words to a friend and deeply regrets it.",
    level: 4,
    wordCount: 250,
    theme: "Regret",
    body: `Words can be like arrows. Once released, they cannot be taken back.

I learned this the hard way when I said something terrible to my best friend, Priya, during a game of basketball. We were on the same team, and she missed an easy shot that cost us the game. In the heat of the moment, I blurted out, "You are useless! Why do you even bother playing?"

The words hung in the air like poison. Priya's face went white. Her lips quivered. Without a word, she walked off the court and sat on the bench alone.

I felt a stab of regret immediately. I wanted to take the words back, but the damage was done. My other teammates stared at me in silence. Nobody said it, but I could see the disappointment in their eyes.

For the rest of the week, Priya avoided me. She changed her seat in class and ate lunch with other friends. Every time I tried to approach her, she would look away. The guilt was unbearable.

On Friday, I wrote her a letter. I poured my heart out, telling her how sorry I was. I explained that my anger had nothing to do with her and everything to do with my own frustration at losing. I slipped the letter into her bag before school ended.

The next morning, Priya was waiting at my desk. Her eyes were red, but she was smiling. "I read your letter," she said. "I forgive you. But please, never speak to me like that again."

"I promise," I said, my voice cracking.

We hugged, and a weight I had been carrying all week finally lifted. I learned that anger is temporary, but the wounds it causes can last. Since that day, I always pause before I speak — because some words, once said, can never be unsaid.`,
    vocabulary: [
      { word: "blurted", meaning: "said something suddenly without thinking", partOfSpeech: "verb", example: "She blurted out the secret before she could stop herself." },
      { word: "quivered", meaning: "trembled or shook slightly", partOfSpeech: "verb", example: "His lip quivered as he tried not to cry." },
      { word: "stab", meaning: "a sudden sharp feeling, especially of pain or emotion", partOfSpeech: "noun", example: "He felt a stab of guilt for lying." },
      { word: "unbearable", meaning: "too painful or unpleasant to deal with", partOfSpeech: "adjective", example: "The heat in the room was unbearable." },
      { word: "frustration", meaning: "a feeling of annoyance when you cannot do or achieve something", partOfSpeech: "noun", example: "She cried out of frustration when the puzzle would not fit." },
      { word: "temporary", meaning: "lasting for only a short time", partOfSpeech: "adjective", example: "The pain was only temporary." },
      { word: "wounds", meaning: "injuries to feelings or to the body", partOfSpeech: "noun", example: "Unkind words can leave invisible wounds." },
    ],
  },
  {
    slug: "the-greed",
    title: "The Price of Greed",
    description: "A student eats too much at a buffet and learns a lesson about self-control.",
    level: 4,
    wordCount: 250,
    theme: "Greed",
    body: `The annual family buffet at the Grand Palace Hotel was the event I looked forward to every year. Tables were laden with every food imaginable — roast chicken, buttered prawns, sushi, pasta, fried rice, and an entire corner dedicated to desserts. My eyes widened at the sight.

"Remember, eat slowly and do not overdo it," my mother cautioned as she handed me a plate. I nodded absentmindedly, already planning my attack.

I piled my first plate high with fried chicken wings, spring rolls and satay. I wolfed everything down in record time. Delicious! Without pausing, I went for a second plate — this time, buttered prawns and a mountain of fried rice.

My father raised an eyebrow. "Slow down, Jun," he warned. But I was on a mission. The food was too good to waste. I squeezed in a third plate of pasta and meatballs.

By now, my stomach was protesting. A dull ache spread across my belly. But the dessert table was calling. I loaded a plate with chocolate cake, ice cream and pudding.

Halfway through the chocolate cake, disaster struck. My stomach lurched violently. A wave of nausea washed over me. I clapped my hand over my mouth and rushed to the bathroom.

I spent the next thirty minutes in misery. When I finally emerged, pale and shaky, my family was ready to leave. The car ride home was agonising. Every bump on the road made my stomach protest.

That night, as I lay in bed with a hot water bottle on my belly, my mother sat beside me. "Your body is not a rubbish bin," she said gently. "Good food is meant to be enjoyed, not hoarded."

I have been back to the buffet since, but now I eat three moderate plates instead of five overloaded ones. Some lessons are best learned the hard way — through the stomach.`,
    vocabulary: [
      { word: "laden", meaning: "heavily loaded or weighed down with something", partOfSpeech: "adjective", example: "The table was laden with food for the party." },
      { word: "cautioned", meaning: "warned someone about a possible problem", partOfSpeech: "verb", example: "The lifeguard cautioned swimmers about the strong current." },
      { word: "absentmindedly", meaning: "without paying attention; lost in thought", partOfSpeech: "adverb", example: "She nodded absentmindedly while reading her book." },
      { word: "wolfed", meaning: "ate food very quickly and greedily", partOfSpeech: "verb", example: "He wolfed down his lunch in five minutes." },
      { word: "lurched", meaning: "moved suddenly and unsteadily", partOfSpeech: "verb", example: "The bus lurched forward, and I nearly fell." },
      { word: "nausea", meaning: "a feeling of sickness with an urge to vomit", partOfSpeech: "noun", example: "The bumpy boat ride gave her nausea." },
      { word: "moderate", meaning: "average in amount; not too much or too little", partOfSpeech: "adjective", example: "A moderate amount of exercise is good for health." },
    ],
  },
  {
    slug: "the-resilience",
    title: "Getting Back Up",
    description: "A student fails an important test and finds the strength to try again.",
    level: 4,
    wordCount: 250,
    theme: "Resilience",
    body: `The red ink on my English composition paper seemed to scream at me: 32 out of 80. It was the lowest mark I had ever received. My teacher's comment read: "Needs significant improvement in vocabulary and plot development."

I wanted to crumple the paper and throw it away. Around me, my classmates compared their scores. Some were celebrating, others were disappointed. But nobody's score was as low as mine. I felt my cheeks burn with shame.

Walking home that day, I considered giving up English composition altogether. What was the point? No matter how hard I tried, my stories were never good enough. My characters were flat, my descriptions were boring, and my vocabulary was limited.

That evening, my father noticed my long face. I showed him the paper reluctantly. He read it carefully, then looked at me. "Do you know how many times Thomas Edison failed before he invented the light bulb?" he asked.

"A lot?" I guessed.

"Over a thousand times," he said. "But he did not see them as failures. He said, 'I have not failed. I have just found a thousand ways that do not work.'"

His words planted a seed in my mind. Instead of giving up, I decided to approach my weakness differently. I started reading more — at least one storybook a week. I kept a vocabulary notebook where I wrote down interesting words and phrases. I asked my teacher for extra composition practice.

The improvement was gradual but real. My next composition scored forty-five. Then fifty-eight. By the end of the year, I scored sixty-seven.

I never became the best writer in class. But I became someone who refused to let a bad score define me. And that, I believe, is worth more than any grade.`,
    vocabulary: [
      { word: "significant", meaning: "large or important enough to have an effect", partOfSpeech: "adjective", example: "There was a significant improvement in her results." },
      { word: "crumple", meaning: "to crush something into a messy ball", partOfSpeech: "verb", example: "She crumpled the failed test paper angrily." },
      { word: "reluctantly", meaning: "in a way that shows you do not really want to do something", partOfSpeech: "adverb", example: "He reluctantly handed over his phone." },
      { word: "altogether", meaning: "completely; entirely", partOfSpeech: "adverb", example: "She decided to quit the team altogether." },
      { word: "gradual", meaning: "happening slowly over time", partOfSpeech: "adjective", example: "The gradual change in weather was barely noticeable." },
      { word: "resilience", meaning: "the ability to recover from difficulties and keep going", partOfSpeech: "noun", example: "Her resilience helped her overcome many challenges." },
      { word: "define", meaning: "to determine the nature or identity of something", partOfSpeech: "verb", example: "One mistake does not define who you are." },
    ],
  },
  {
    slug: "the-alert",
    title: "Being Alert",
    description: "A student's quick thinking prevents a dangerous situation at the void deck.",
    level: 4,
    wordCount: 250,
    theme: "Alertness",
    body: `It was a quiet Sunday afternoon. I was sitting at the void deck of my block doing my homework when I noticed something unusual. A man in a dark hoodie was pacing back and forth near the bicycle rack. He kept looking around nervously, as if checking whether anyone was watching.

At first, I did not think much of it. But then he pulled out a pair of pliers and started working on one of the bicycle locks. My pulse quickened. He was trying to steal a bicycle!

I thought about confronting him, but my father had always told me never to approach strangers in suspicious situations. Instead, I quietly packed up my things and went upstairs. I told my mother what I had seen, and she immediately called the police.

Within ten minutes, a patrol car arrived. Two officers approached the man calmly. When they questioned him, he tried to run, but the officers caught him quickly. They found three stolen bicycles in a van parked nearby.

The next day, a police officer came to our flat. He thanked me for my alertness. "Your quick thinking helped us catch a serial bicycle thief," he said. "Many residents had reported missing bicycles over the past month."

He also praised me for not confronting the man directly. "Your safety must always come first," he reminded me. "Observing and reporting is the best thing a young person can do."

My neighbours thanked me too. Uncle Tan, whose bicycle had been stolen two weeks earlier, was especially relieved. "You are a real community hero," he said, shaking my hand.

I was not sure about being a hero. But I learned that being alert and acting wisely can make a real difference. You do not need to be brave and reckless — sometimes, you just need to be observant and responsible.`,
    vocabulary: [
      { word: "pacing", meaning: "walking back and forth in a worried or nervous way", partOfSpeech: "verb", example: "He was pacing outside the examination hall." },
      { word: "suspicious", meaning: "causing a feeling that something is wrong or dishonest", partOfSpeech: "adjective", example: "The man's suspicious behaviour alerted the security guard." },
      { word: "pliers", meaning: "a tool with two handles used for gripping or cutting", partOfSpeech: "noun", example: "He used pliers to bend the wire." },
      { word: "confronting", meaning: "facing someone directly about something serious or wrong", partOfSpeech: "verb", example: "She avoided confronting the bully alone." },
      { word: "patrol", meaning: "the act of going around an area to check for problems or safety", partOfSpeech: "noun", example: "The security guard went on his nightly patrol." },
      { word: "serial", meaning: "happening repeatedly in a similar pattern", partOfSpeech: "adjective", example: "The serial thefts worried the entire neighbourhood." },
      { word: "observant", meaning: "good at noticing things around you", partOfSpeech: "adjective", example: "An observant student noticed the error on the board." },
    ],
  },

  // ════════════════════════════════════════
  // PRIMARY 5 — BATCH 2
  // ════════════════════════════════════════
  {
    slug: "the-charity-drive",
    title: "The Charity Drive",
    description: "A class organises a charity drive and discovers the true meaning of giving.",
    level: 5,
    wordCount: 310,
    theme: "Charity",
    body: `When our form teacher, Mrs Patel, announced that our class would organise a charity drive for a children's home, most of us groaned. It sounded like a lot of work during an already busy term.

"We need to raise at least five hundred dollars," she said. "How you do it is up to you."

A committee was formed, and I was elected the chairperson — reluctantly. We brainstormed ideas: a bake sale, a car wash, a talent show. After heated debate, we settled on a weekend carnival with multiple activities.

The preparations consumed every free moment. Some students baked cookies and brownies. Others made handmade bookmarks and keychains to sell. Ravi volunteered to run a face-painting booth, despite having no artistic talent whatsoever. His practice attempts on paper looked like abstract art — and not in a good way.

On carnival day, we set up our booths in the school courtyard. The weather was perfect. Parents, teachers and students from other classes streamed in. Business was brisk. Mei Ling's brownies sold out within an hour. The face-painting booth, surprisingly, was the most popular — Ravi's hilariously bad paintings became the star attraction. Students queued up specifically to get his signature "masterpieces."

By late afternoon, we had raised seven hundred and twenty dollars — well above our target. Mrs Patel was visibly moved.

The following Saturday, we visited the children's home. It was a modest building with peeling paint and a small playground. The children, aged between four and twelve, greeted us shyly at first. But within minutes, they were laughing and playing with us.

One little girl, no more than five, tugged at my sleeve. "Are you coming back?" she asked. Her question hit me harder than I expected.

"Yes," I said, and I meant it.

On the bus ride home, the class was unusually quiet. Something had shifted. We had started this project as an obligation, but it had become something deeply personal. We continued visiting the home every month for the rest of the year.

Mrs Patel was right — charity is not about the money you raise. It is about the connections you make and the empathy you develop. We went in thinking we were giving. We came out realising we had received far more.`,
    vocabulary: [
      { word: "reluctantly", meaning: "in a way that shows you do not really want to do something", partOfSpeech: "adverb", example: "She reluctantly agreed to help with the event." },
      { word: "brainstormed", meaning: "came up with ideas as a group", partOfSpeech: "verb", example: "The team brainstormed solutions to the problem." },
      { word: "consumed", meaning: "used up completely", partOfSpeech: "verb", example: "The project consumed all of her weekends." },
      { word: "brisk", meaning: "quick and busy; active", partOfSpeech: "adjective", example: "Business was brisk at the food fair." },
      { word: "hilariously", meaning: "in an extremely funny way", partOfSpeech: "adverb", example: "The clown's act was hilariously bad." },
      { word: "obligation", meaning: "something you must do because of duty or rules", partOfSpeech: "noun", example: "He fulfilled his obligation to the team." },
      { word: "empathy", meaning: "the ability to understand and share the feelings of others", partOfSpeech: "noun", example: "Empathy is what makes us truly human." },
    ],
  },
  {
    slug: "the-adapting-to-change",
    title: "Adapting to Change",
    description: "A student struggles to adapt when his family moves to a new town.",
    level: 5,
    wordCount: 300,
    theme: "Adapting to Change",
    body: `When my father announced that we were moving to a different town because of his job transfer, I felt like the ground had been pulled from under my feet. Leave my school? My friends? The neighbourhood I had known my entire life? It was unthinkable.

The weeks leading up to the move were miserable. I moped around the house, refused to pack my room, and barely spoke to my parents. "You are ruining my life," I told my mother one evening. The hurt in her eyes made me feel guilty, but I was too wrapped up in my own pain to apologise.

Moving day was the worst. I watched the movers carry our furniture into the truck, each item another piece of my old life disappearing. My best friend, Daniel, came to say goodbye. We stood at the gate, unable to find the right words. He gave me a fist bump and walked away quickly. I suspect he did not want me to see him cry.

The new town felt alien. The flat was smaller, the school was different, and I knew nobody. For the first two weeks, I ate lunch alone and spoke to no one unless spoken to. I built walls around myself, convinced that making new friends would somehow betray the old ones.

It was my new neighbour, Arun, who broke through. He knocked on our door one Saturday with a football and said simply, "Want to play?" I almost said no. But something — loneliness, perhaps — made me say yes.

That afternoon at the park changed everything. Arun introduced me to his friends. They were welcoming, curious and genuinely kind. Within a month, I had joined the school football team and was part of a study group.

I still missed Daniel and my old neighbourhood. We video-called regularly and promised to visit each other during the holidays. But I discovered that the heart is not a container that can only hold a fixed number of friendships. It expands.

Moving taught me that change is not the enemy — resistance to change is. The new town was not worse than the old one. It was just different. And different, I learned, can become home.`,
    vocabulary: [
      { word: "unthinkable", meaning: "too terrible or unlikely to imagine", partOfSpeech: "adjective", example: "Leaving the team was unthinkable to her." },
      { word: "moped", meaning: "behaved in a sad, dull way without interest in anything", partOfSpeech: "verb", example: "He moped around the house after losing the match." },
      { word: "alien", meaning: "unfamiliar and strange", partOfSpeech: "adjective", example: "The new school felt completely alien to him." },
      { word: "betray", meaning: "to be disloyal to someone who trusts you", partOfSpeech: "verb", example: "She would never betray her friends' secrets." },
      { word: "resistance", meaning: "the refusal to accept something new or different", partOfSpeech: "noun", example: "There was strong resistance to the new rule." },
      { word: "expands", meaning: "becomes larger or wider", partOfSpeech: "verb", example: "The city expands every year as more people move in." },
    ],
  },
  {
    slug: "the-unexpected-incident",
    title: "The Unexpected Incident",
    description: "An ordinary trip to the mall takes a dramatic turn when a fire alarm goes off.",
    level: 5,
    wordCount: 310,
    theme: "Emergency",
    body: `It was supposed to be a normal Saturday shopping trip. My mother and I were at Westfield Mall, browsing through clothes on the second floor, when the fire alarm pierced through the background music. For a moment, everyone froze.

Then the announcement came: "Attention all shoppers. Please evacuate the building immediately through the nearest emergency exit. This is not a drill."

Panic rippled through the crowd. People began pushing towards the escalators, their faces tight with fear. A child started crying. An elderly man stumbled and nearly fell.

My mother gripped my hand tightly. "Stay calm. Follow me," she said, her voice steady despite the chaos around us. Instead of joining the crush at the escalator, she led me to the fire escape stairwell. We were among the few who used it — most people did not even notice the exit signs.

As we descended, I could smell smoke — faint but unmistakable. My heart raced. We moved quickly but carefully, holding the railing. Other people filed in behind us, their footsteps echoing in the concrete stairwell.

When we burst through the ground-floor exit, fresh air hit my face. We joined hundreds of other shoppers gathered in the car park. Fire engines had already arrived, their red lights flashing. Firefighters rushed into the building with hoses and equipment.

It turned out that a small fire had started in the kitchen of a restaurant on the fourth floor. A deep fryer had overheated and caught fire. Fortunately, the restaurant staff had used the fire extinguisher to contain most of the blaze before the firefighters arrived. Nobody was injured.

While we waited for the all-clear, I noticed my mother's hands were shaking — she had been scared too, even though she had appeared so calm. "How did you know where the exit was?" I asked.

"I always look for exit signs when I enter a building," she said. "It is a habit your grandfather taught me."

That day, I adopted the same habit. Every building I enter, I locate the nearest exit. It takes three seconds and could one day save my life. Preparedness, I learned, is not about being paranoid — it is about being responsible.`,
    vocabulary: [
      { word: "evacuate", meaning: "to leave a building or area quickly because of danger", partOfSpeech: "verb", example: "The students were told to evacuate during the fire drill." },
      { word: "rippled", meaning: "spread gradually through a group of people", partOfSpeech: "verb", example: "Laughter rippled through the audience." },
      { word: "unmistakable", meaning: "impossible to confuse with anything else; very clear", partOfSpeech: "adjective", example: "There was an unmistakable smell of burning." },
      { word: "descended", meaning: "moved downward", partOfSpeech: "verb", example: "The hikers descended the mountain before sunset." },
      { word: "contain", meaning: "to keep something within limits; to stop it from spreading", partOfSpeech: "verb", example: "The firefighters worked to contain the blaze." },
      { word: "preparedness", meaning: "the state of being ready for something, especially danger", partOfSpeech: "noun", example: "Emergency preparedness can save lives." },
      { word: "paranoid", meaning: "unreasonably worried that bad things will happen", partOfSpeech: "adjective", example: "She was not paranoid — she was simply careful." },
    ],
  },
  {
    slug: "the-touching-moment",
    title: "The Touching Moment",
    description: "A student witnesses a touching moment between a father and son at a hawker centre.",
    level: 5,
    wordCount: 300,
    theme: "Gratitude",
    body: `I was at the hawker centre having dinner with my family when I noticed an old man and a young boy at the next table. The man was weathered and thin, wearing a faded polo shirt. His hands were rough and calloused — the hands of someone who worked hard for a living. The boy, around my age, sat across from him.

The old man ordered two plates of chicken rice. When the food arrived, he carefully transferred most of the chicken from his plate to the boy's. He kept only rice and vegetables for himself.

"Ah Gong, you eat the chicken too," the boy said, pushing the pieces back.

"No, no. You are growing. You need it more than me," the grandfather insisted with a gentle wave of his hand.

The boy stopped arguing. But when his grandfather looked away to get some water, the boy quietly slid two pieces of chicken back onto his grandfather's plate. He did it so naturally, as if it were the most ordinary thing in the world.

When the grandfather returned and noticed the extra chicken, he looked at his grandson. The boy pretended to be busy eating. A slow, knowing smile spread across the old man's face. He said nothing, but his eyes glistened.

I looked at my own plate — overflowing with food that I had barely touched. I looked at my parents, who had ordered my favourite dishes without me even asking. I felt a sudden wave of shame for every time I had complained about dinner or taken a meal for granted.

That quiet exchange between a grandfather and his grandson contained more love than any grand declaration. It was love expressed not in words, but in chicken pieces passed back and forth across a plastic table.

That night, I helped my mother wash the dishes without being asked. When she looked at me in surprise, I simply said, "Thank you for dinner, Mum."

She did not ask why. She just smiled. And somehow, that was enough.`,
    vocabulary: [
      { word: "calloused", meaning: "having thick, hardened skin from physical work", partOfSpeech: "adjective", example: "The farmer's calloused hands showed years of hard work." },
      { word: "transferred", meaning: "moved something from one place to another", partOfSpeech: "verb", example: "She transferred the soup into a bigger bowl." },
      { word: "insisted", meaning: "said something firmly and refused to give in", partOfSpeech: "verb", example: "He insisted on paying for everyone's dinner." },
      { word: "glistened", meaning: "shone with moisture, often from tears", partOfSpeech: "verb", example: "Her eyes glistened when she heard the kind words." },
      { word: "declaration", meaning: "a formal or strong statement", partOfSpeech: "noun", example: "His declaration of love surprised everyone." },
      { word: "granted", meaning: "treated something as normal without appreciating it", partOfSpeech: "verb", example: "We often take clean water for granted." },
    ],
  },
  {
    slug: "the-trying-something-new",
    title: "Trying Something New",
    description: "A student is forced to try rock climbing and discovers hidden courage.",
    level: 5,
    wordCount: 300,
    theme: "Trying Something New",
    body: `I had always been the cautious one in my group of friends. While they signed up for adventure camps and extreme sports, I preferred the safety of my books and video games. Heights terrified me. Deep water made me anxious. Even roller coasters were out of the question.

So when my school announced a compulsory outdoor education programme that included rock climbing, my first instinct was to feign illness and skip it. My mother saw right through me. "You are going," she said firmly. "You cannot spend your whole life avoiding things that scare you."

At the outdoor centre, I stood at the base of the climbing wall and looked up. It was twelve metres tall — an impossible fortress of artificial rocks and handholds. My classmates were buzzing with excitement. I felt sick.

The instructor, Coach Tan, must have noticed my pale face. He pulled me aside. "You do not have to reach the top," he said quietly. "Just try. Go as high as you feel comfortable. The rope will catch you if you fall."

I strapped on the harness with trembling hands. The first few metres were manageable. I focused on each handhold, each foothold, refusing to look down. My arms burned. My fingers ached. But I kept climbing.

At the five-metre mark, I made the mistake of looking down. My vision swam. The ground seemed impossibly far away. Every instinct screamed at me to stop.

Then I heard Coach Tan's voice below: "You are doing great. Keep breathing."

I closed my eyes, took a deep breath, and reached for the next hold. And the next. And the next. I did not think about the top — I thought only about the next rock.

When my hand finally touched the buzzer at the top, I could not believe it. Twelve metres. I had climbed twelve metres. The cheers from below sounded distant, drowned out by the thundering of my own heartbeat.

On the way down, I started laughing — a strange, hysterical laugh of disbelief and joy. I had done the thing I was most afraid of.

Coach Tan shook my hand at the bottom. "The wall did not change," he said. "You did."

He was right. The wall was exactly the same as when I started. But I was not. And that has made all the difference.`,
    vocabulary: [
      { word: "cautious", meaning: "careful to avoid danger or risks", partOfSpeech: "adjective", example: "She was cautious about crossing the busy road." },
      { word: "compulsory", meaning: "required by rules; something you must do", partOfSpeech: "adjective", example: "Physical education is compulsory for all students." },
      { word: "feign", meaning: "to pretend to have or feel something", partOfSpeech: "verb", example: "He tried to feign surprise when he already knew the answer." },
      { word: "fortress", meaning: "a large, strong structure built for defence", partOfSpeech: "noun", example: "The ancient fortress stood on top of the hill." },
      { word: "manageable", meaning: "able to be dealt with; not too difficult", partOfSpeech: "adjective", example: "The workload was challenging but manageable." },
      { word: "hysterical", meaning: "showing extreme and uncontrolled emotion", partOfSpeech: "adjective", example: "She burst into hysterical laughter at the joke." },
      { word: "disbelief", meaning: "the feeling of not being able to believe something", partOfSpeech: "noun", example: "He stared at the results in disbelief." },
    ],
  },

  // ════════════════════════════════════════
  // PRIMARY 6 — BATCH 2
  // ════════════════════════════════════════
  {
    slug: "the-argument",
    title: "The Argument",
    description: "A heated argument with a parent leads to a deeper understanding of sacrifice.",
    level: 6,
    wordCount: 350,
    theme: "Family",
    body: `The argument erupted over something trivial — a school excursion that cost eighty dollars. I wanted to go. My mother said no.

"Everyone else is going!" I shouted, slamming my bedroom door. Through the wall, I heard her sigh — that long, tired sigh she always made when she was too exhausted to fight.

In my fury, I did not stop to think. I did not consider that my mother had been working double shifts at the hospital for the past month. I did not notice the dark circles under her eyes or the way she stretched her back every evening, wincing in pain. I was too consumed by my own disappointment to see her struggle.

The next morning, I found eighty dollars in an envelope on the kitchen table. No note. Just the money. My mother had already left for her early shift.

Something about that silent envelope broke through my selfishness. I picked it up and felt its weight — not in dollars, but in hours. Eighty dollars was roughly four hours of her work. Four hours of standing on her feet, lifting patients, enduring complaints, swallowing exhaustion.

I put the money back in her drawer and told my teacher I would not be going on the excursion. When she asked why, I simply said, "Family reasons."

That evening, I cooked dinner for the first time. It was just instant noodles with an egg, but when my mother came home and saw the bowl on the table, she stood in the doorway for a long moment.

"What is this for?" she asked.

"I am sorry about yesterday," I said. "And I am not going on the trip."

She sat down and picked up the chopsticks. For a while, neither of us spoke. Then she said softly, "It is not that I do not want you to go. I just... this month has been tight."

"I know," I said. "I should have understood."

She reached across the table and squeezed my hand. We ate instant noodles in comfortable silence, and somehow it felt like the most expensive meal I had ever shared.

I learned something important that night: maturity is not about winning arguments. It is about knowing when to stop fighting and start understanding. My mother never asked me to grow up. But that evening, sitting across from her at the kitchen table, I think I did — just a little.`,
    vocabulary: [
      { word: "trivial", meaning: "not important or serious; of little value", partOfSpeech: "adjective", example: "They argued over something trivial and regretted it later." },
      { word: "erupted", meaning: "broke out suddenly and intensely", partOfSpeech: "verb", example: "The argument erupted without warning." },
      { word: "wincing", meaning: "making a slight movement because of pain", partOfSpeech: "verb", example: "She kept wincing as the nurse cleaned her wound." },
      { word: "consumed", meaning: "completely taken over by a feeling or thought", partOfSpeech: "adjective", example: "He was consumed by guilt after the incident." },
      { word: "enduring", meaning: "suffering through something difficult patiently", partOfSpeech: "verb", example: "She spent years enduring the harsh training." },
      { word: "selfishness", meaning: "caring only about yourself without thinking of others", partOfSpeech: "noun", example: "His selfishness cost him his closest friendships." },
      { word: "maturity", meaning: "the quality of behaving in a sensible, adult way", partOfSpeech: "noun", example: "She showed great maturity for her age." },
    ],
  },
  {
    slug: "the-special-gift",
    title: "The Special Gift",
    description: "A student receives a meaningful gift from a friend who is moving away.",
    level: 6,
    wordCount: 350,
    theme: "Friendship",
    body: `The news came without warning. My best friend, Jimmy, was moving to Australia. His father had been offered a job in Melbourne, and the family would leave in three weeks. Three weeks. It felt like three minutes.

Jimmy and I had been inseparable since Primary Two. We were on the same basketball team, sat next to each other in class, and spent every weekend at each other's homes. He was the first person I called when something good happened, and the first person I turned to when things went wrong. The thought of him being on the other side of the world was incomprehensible.

The days before his departure passed in a blur of farewell meals and group photos. Our classmates signed a card. Our basketball team gave him a jersey with everyone's signatures. But I could not figure out what to give him. Nothing seemed adequate for fourteen years of friendship.

On his last evening in Singapore, Jimmy came to my house. We sat on the bench at the void deck — our usual spot — and talked for hours. About memories, about the future, about everything and nothing.

Before he left, he handed me a small box. "Open it later," he said. We exchanged an awkward hug — the kind that twelve-year-old boys give when they are trying not to cry — and he walked away.

Back in my room, I opened the box. Inside was a wristband — the same faded blue wristband he had worn every day for as long as I could remember. It was the one his late mother had given him before she passed away when we were in Primary Four. It was, without question, his most precious possession.

There was a note underneath: "I trust you to keep this safe for me. It reminds me that the people we love never really leave. They stay in the things we carry."

I sat on my bed and cried. Not because he was leaving, but because of the magnitude of what he had entrusted me with.

Jimmy and I still talk every week over video call. He has made friends in Melbourne and joined a basketball team there. But every morning, I slip on that faded blue wristband before school. It is not mine to keep — it is mine to carry. And every time I look at it, I am reminded that distance is just a number.

The best gifts are not the most expensive. They are the ones that say, "You matter to me more than I can express in words."`,
    vocabulary: [
      { word: "inseparable", meaning: "always together; impossible to separate", partOfSpeech: "adjective", example: "The two friends were inseparable throughout school." },
      { word: "incomprehensible", meaning: "impossible to understand or imagine", partOfSpeech: "adjective", example: "The scale of the disaster was incomprehensible." },
      { word: "departure", meaning: "the act of leaving a place", partOfSpeech: "noun", example: "The departure of the train was delayed by an hour." },
      { word: "adequate", meaning: "enough or satisfactory for a purpose", partOfSpeech: "adjective", example: "No words seemed adequate to express her gratitude." },
      { word: "magnitude", meaning: "the great size or importance of something", partOfSpeech: "noun", example: "She did not understand the magnitude of her achievement." },
      { word: "entrusted", meaning: "gave someone responsibility for something valuable", partOfSpeech: "verb", example: "She entrusted him with her most important secret." },
      { word: "precious", meaning: "of great value; not to be wasted or treated carelessly", partOfSpeech: "adjective", example: "Time with family is precious." },
    ],
  },
  {
    slug: "the-foolish-dare",
    title: "The Foolish Dare",
    description: "A student accepts a dangerous dare and faces serious consequences.",
    level: 6,
    wordCount: 350,
    theme: "Consequences",
    body: `It began as a joke during recess. Marcus, who fancied himself the daredevil of our class, challenged the group to a dare: whoever could climb the highest on the school's fire escape ladder would be crowned "King of the School." The title was meaningless, but the pressure was real.

Five of us gathered behind the science block after school. The fire escape ladder ran up four storeys along the outside of the building. It was old, rusted in places, and strictly off-limits to students. A sign at its base read: "Authorised Personnel Only."

My conscience whispered that this was a terrible idea. But my ego shouted louder. One by one, the others climbed. Jason reached the first floor and came down. Wei Ming made it to the second. Marcus, predictably, reached the third and climbed down with a triumphant grin.

"Your turn," he said, looking at me. The unspoken challenge was clear: go higher.

I started climbing. The metal rungs were cold and rough beneath my fingers. By the second storey, the wind picked up. By the third, my arms were trembling. I looked down — a mistake. The ground swayed beneath me. My vision blurred.

I should have stopped. But I could hear Marcus's voice below: "Come on! One more floor!" So I kept climbing.

At the fourth storey, my foot slipped on a rusted rung. For a terrifying moment, I hung by one hand, my legs dangling in the air. I screamed. Below, my friends' taunting faces turned to expressions of horror.

Somehow, I managed to grip the ladder with both hands and press my body against the wall. I stayed frozen there, unable to move up or down, until a teacher heard the commotion and called for help. A maintenance worker climbed up and guided me down.

The consequences were swift and severe. All five of us received a two-day suspension. Our parents were summoned. I had to stand before the school during assembly while the principal outlined what could have happened: a four-storey fall onto concrete.

My father did not shout when I got home. He simply said, "You could have died today." The calmness in his voice was worse than any scolding.

That night, lying in bed, I replayed the moment my foot slipped — that split second when I felt nothing but air beneath me. The memory still makes my stomach lurch.

I wish I could say that I climbed because I was brave. The truth is, I climbed because I was too cowardly to say no. Real courage, I now understand, is the ability to walk away from stupidity, even when everyone is watching.`,
    vocabulary: [
      { word: "fancied", meaning: "thought of yourself as something, often without justification", partOfSpeech: "verb", example: "He fancied himself a great singer, but nobody agreed." },
      { word: "daredevil", meaning: "a person who enjoys doing dangerous things", partOfSpeech: "noun", example: "The daredevil attempted a dangerous motorcycle jump." },
      { word: "conscience", meaning: "the inner sense of what is right and wrong", partOfSpeech: "noun", example: "Her conscience told her to return the extra change." },
      { word: "triumphant", meaning: "feeling or showing great joy after a success", partOfSpeech: "adjective", example: "The triumphant athlete raised his arms in victory." },
      { word: "dangling", meaning: "hanging loosely without support", partOfSpeech: "verb", example: "The keys were dangling from the lock." },
      { word: "commotion", meaning: "a state of noisy confusion or disturbance", partOfSpeech: "noun", example: "The commotion in the hallway drew everyone's attention." },
      { word: "suspension", meaning: "a punishment where a student is temporarily banned from school", partOfSpeech: "noun", example: "He received a three-day suspension for fighting." },
      { word: "cowardly", meaning: "lacking courage; afraid to face difficulties", partOfSpeech: "adjective", example: "It was cowardly to blame someone else for his mistake." },
    ],
  },
  {
    slug: "the-thankful-heart",
    title: "A Thankful Heart",
    description: "A volunteer experience at a hospice changes a student's perspective on life.",
    level: 6,
    wordCount: 350,
    theme: "Being Thankful",
    body: `My mother signed me up for weekend volunteering at a hospice without consulting me. I was furious. My weekends were sacred — time for sleep, games, and doing absolutely nothing productive. Being forced to spend them with sick strangers was not my idea of a good time.

On the first Saturday, I dragged myself to Bright Hope Hospice with the enthusiasm of someone attending their own funeral. The building was quieter than I expected. The corridors smelled of disinfectant and something else — something I could not quite place. It was the smell of endings.

My supervisor, Nurse Jenny, assigned me to the recreational room. My job was simple: keep the patients company. Talk to them, play board games, read to them. "Just be present," she said. "That is often enough."

My first conversation was with Uncle Koh, a retired taxi driver in his seventies. He had terminal cancer and had been in the hospice for six months. I expected him to be sad or bitter. Instead, he was the most cheerful person I had ever met.

"How can you be so happy?" I asked, perhaps too bluntly. He laughed — a warm, raspy laugh. "When you know your time is limited, you stop wasting it on unhappiness," he said. "I spent sixty years worrying about money, status, what other people think. Now I only have time for what matters — family, good food, and a nice sunset."

Every Saturday, Uncle Koh taught me something new. He taught me to play Chinese chess. He told me stories about driving his taxi through the streets of old Singapore. He showed me faded photographs of his wife, who had passed away years earlier. "She is waiting for me somewhere," he said with a gentle smile.

Three months into my volunteering, Nurse Jenny told me that Uncle Koh had passed away peacefully in his sleep. I sat in the empty recreational room and wept. I wept not just for Uncle Koh, but for all the Saturdays I had almost refused to come.

Uncle Koh left me no material inheritance. But he gave me something far more valuable: perspective. He taught me that life is not measured by its length, but by its depth. That every meal shared, every sunset watched, every conversation with a loved one is a gift — one that we are not guaranteed to receive tomorrow.

I continued volunteering at the hospice long after my mother's initial requirement ended. Not out of obligation, but out of gratitude — for the unlikely friendships formed in that quiet building, and for the man who taught me to count my blessings while I still can.`,
    vocabulary: [
      { word: "hospice", meaning: "a place that provides care for people who are terminally ill", partOfSpeech: "noun", example: "The hospice offered comfort and dignity to its patients." },
      { word: "sacred", meaning: "regarded as too important to be changed or interfered with", partOfSpeech: "adjective", example: "Sunday dinner was sacred in their family." },
      { word: "disinfectant", meaning: "a chemical substance used to kill germs and clean surfaces", partOfSpeech: "noun", example: "The hospital corridors smelled strongly of disinfectant." },
      { word: "terminal", meaning: "a disease or illness that cannot be cured and will lead to death", partOfSpeech: "adjective", example: "He was diagnosed with a terminal illness." },
      { word: "bluntly", meaning: "in a very direct, honest way that may seem rude", partOfSpeech: "adverb", example: "She bluntly told him his idea would not work." },
      { word: "perspective", meaning: "a particular way of thinking about something, shaped by experience", partOfSpeech: "noun", example: "Travelling gave her a new perspective on life." },
      { word: "inheritance", meaning: "money, property, or qualities received from someone who has died", partOfSpeech: "noun", example: "The greatest inheritance he left was his wisdom." },
      { word: "blessings", meaning: "things that you are grateful for; good fortune", partOfSpeech: "noun", example: "Good health is one of life's greatest blessings." },
    ],
  },
  {
    slug: "the-bad-neighbour",
    title: "The Bad Neighbour",
    description: "A student deals with a difficult neighbour and discovers that understanding changes everything.",
    level: 6,
    wordCount: 350,
    theme: "Understanding",
    body: `Mr Goh was the worst neighbour on our floor. He complained about everything — our shoes in the corridor, our cooking smells, our laundry dripping onto his clothes below. He shouted at children who played too loudly and banged on the wall if our television was on past nine o'clock. Everyone on our floor avoided him.

I disliked Mr Goh intensely. Once, he scolded me for accidentally kicking my football against his door. "Stupid boy! Have you no manners?" he bellowed, his face purple with rage. I ran home trembling, convinced that he was the meanest person alive.

My mother, however, had a different view. "People who are angry all the time are usually hurting inside," she said. I dismissed her words. How could that grumpy old man be hurting?

Then one evening, I heard something I had never heard before coming from Mr Goh's flat. It was the sound of crying — deep, ragged sobs that came through the thin walls. I pressed my ear against the wall, shocked. Mr Goh was crying?

The next day, I asked Aunty Lim, who had lived on our floor the longest, about Mr Goh. She told me his story in a low voice. His wife had died from cancer three years ago. His only son had emigrated to Canada and rarely called. Mr Goh was alone — completely, utterly alone.

"He used to be different," Aunty Lim said. "When his wife was alive, he would bring mooncakes to every flat during Mid-Autumn Festival. He was the friendliest man on this floor."

That information reframed everything. Mr Goh was not mean — he was lonely. His anger was a wall he had built around his grief.

I did something unexpected the following week. I knocked on his door with a plate of my mother's curry puffs. He opened the door and stared at me suspiciously. "What do you want?" he asked gruffly.

"My mother made too many," I said. "She asked me to share them with you."

He took the plate without a word. But as I turned to leave, I heard him say, very quietly, "Thank you."

Over the following months, our relationship changed gradually. I brought him food regularly. Sometimes he invited me in for tea. He showed me his wife's photograph and told me about his son. Slowly, the angry Mr Goh was replaced by a quieter, gentler version of himself.

He still complained about noise occasionally. Old habits die hard. But now when he knocked on our wall, it was to ask if we had any leftover dinner for him.

My mother was right. Behind every difficult person is a story we do not know. And sometimes, all it takes to change that story is a plate of curry puffs and the willingness to see beyond the anger.`,
    vocabulary: [
      { word: "bellowed", meaning: "shouted in a loud, deep voice", partOfSpeech: "verb", example: "The coach bellowed instructions from the sideline." },
      { word: "dismissed", meaning: "chose not to take something seriously", partOfSpeech: "verb", example: "She dismissed the rumour as nonsense." },
      { word: "ragged", meaning: "rough, uneven, and strained", partOfSpeech: "adjective", example: "His ragged breathing showed how exhausted he was." },
      { word: "emigrated", meaning: "left one's own country to go and live in another", partOfSpeech: "verb", example: "Many families emigrated in search of better opportunities." },
      { word: "reframed", meaning: "looked at something from a completely different angle", partOfSpeech: "verb", example: "The counsellor helped her reframe the problem as an opportunity." },
      { word: "gruffly", meaning: "in a rough, low voice that sounds unfriendly", partOfSpeech: "adverb", example: "He gruffly told the children to keep quiet." },
      { word: "willingness", meaning: "the quality of being ready and happy to do something", partOfSpeech: "noun", example: "Her willingness to help impressed everyone." },
    ],
  },
];

export function getCompositionsByLevel(level: number): Composition[] {
  return compositions.filter((c) => c.level === level);
}

export function getComposition(level: number, slug: string): Composition | undefined {
  return compositions.find((c) => c.level === level && c.slug === slug);
}

export const levelColors: Record<number, { bg: string; text: string; accent: string; light: string; border: string }> = {
  1: { bg: "bg-amber-50", text: "text-amber-900", accent: "bg-amber-500", light: "bg-amber-100", border: "border-amber-200" },
  2: { bg: "bg-sky-50", text: "text-sky-900", accent: "bg-sky-500", light: "bg-sky-100", border: "border-sky-200" },
  3: { bg: "bg-emerald-50", text: "text-emerald-900", accent: "bg-emerald-500", light: "bg-emerald-100", border: "border-emerald-200" },
  4: { bg: "bg-violet-50", text: "text-violet-900", accent: "bg-violet-500", light: "bg-violet-100", border: "border-violet-200" },
  5: { bg: "bg-rose-50", text: "text-rose-900", accent: "bg-rose-500", light: "bg-rose-100", border: "border-rose-200" },
  6: { bg: "bg-indigo-50", text: "text-indigo-900", accent: "bg-indigo-500", light: "bg-indigo-100", border: "border-indigo-200" },
};
