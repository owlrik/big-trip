const BasePrice = {
  MIN: 10,
  MAX: 5000
};

const OfferPrice = {
  MIN: 10,
  MAX: 200
};

const MinutesDuration = {
  MIN: 10,
  MAX: 10080
};

const DaysDuration = {
  MIN: 0,
  MAX: 10
};

const pointTypes = [
  'taxi',
  'bus',
  'train',
  'ship',
  'drive',
  'flight',
  'check-in',
  'sightseeing',
  'restaurant'
];

const pointNames = [
  'Amsterdam',
  'Chamonix',
  'Geneva',
  'Lisbon',
  'Barcelona',
  'Paris',
  'Rome',
  'Munich',
  'Bruges',
  'Vienna',
  'Zagreb',
  'Budapest',
  'Athens',
  'Sofia',
  'Prague',
  'Warsaw',
  'Venice',
  'Naples',
  'Thessaloniki',
  'Zurich'
];

const pointDescriptions = [
  'A resort town nestled in a high mountain valley, near the junction of three countries. Located at the foot of the highest peak in the range, it is world-famous for its extreme winter sports and summer glacier hiking.',
  'A historic port city built on a series of canals, often called the "Venice of the North". It is renowned for its 17th-century gabled houses, vibrant flower markets, and over a thousand bridges connecting its tiny islands.',
  'An ancient hilltop settlement overlooking a winding river, dominated by a colossal Gothic cathedral that took over 600 years to complete. Its narrow cobblestone lanes are filled with traditional breweries and half-timbered houses.',
  'A coastal metropolis stretched along a crescent-shaped bay, known for its mild Mediterranean climate and futuristic museum complexes. It serves as a major hub for international film festivals and luxury yachting.',
  'A thermal spa town tucked away in a forested valley, famous for its hot sulfur springs and ornate 19th-century bathhouses. It has been a favorite retreat for royalty and classical composers seeking treatment for respiratory ailments.',
  'A compact capital city situated on the confluence of two major rivers, characterized by its eclectic architecture – from medieval castles to brutalist Soviet-era apartment blocks. It is particularly noted for its ruined hilltop fortress and underground cave systems.',
  'An alpine village perched on the shore of a deep, crystal-clear lake, surrounded by dramatic sheer cliffs. Accessible only by funicular or boat, it remains car-free and is a popular starting point for via ferrata climbing routes.',
  'A bustling inland trading hub, often referred to as the "Crossroads of Europe" due to its position at the intersection of major motorways and rail lines. It is home to one of the continent\'s largest inland ports and a renowned diamond-polishing district.',
  'A windswept island outpost in the northern archipelago, characterized by its colorful wooden warehouses and pungent fish-drying racks. Despite its latitude, it enjoys a surprisingly temperate climate and is a prime spot for viewing the midnight sun.',
  'A fortified medieval city perched dramatically on a volcanic plug, surrounded by steep cliffs on three sides. Its skyline is punctuated by a Romanesque basilica and a massive keep, while its subterranean tunnels were used as bomb shelters during world wars.',
];

const photos = [
  'img/photos/1.jpg',
  'img/photos/2.jpg',
  'img/photos/3.jpg',
  'img/photos/4.jpg',
  'img/photos/5.jpg',
];

const offersByType = {
  'taxi': ['Order Uber', 'Switch to comfort', 'Add child seat', 'Request electric'],
  'bus': ['Add luggage', 'Select seat', 'Wi-Fi onboard'],
  'train': [],
  'ship': ['Add breakfast', 'Upgrade cabin', 'Book transfer'],
  'drive': ['Rent a car', 'Add insurance', 'GPS navigation'],
  'flight': ['Add luggage', 'Switch to comfort', 'Select meal', 'Priority boarding'],
  'check-in': ['Add breakfast', 'Late check-out', 'Room upgrade'],
  'sightseeing': ['Book tickets', 'Audio guide', 'Skip the line'],
  'restaurant': []
};

export {
  pointTypes,
  pointNames,
  pointDescriptions,
  photos,
  offersByType,
  BasePrice,
  OfferPrice,
  MinutesDuration,
  DaysDuration,
};
