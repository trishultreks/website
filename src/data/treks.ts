export type Trek = {
  name: string;
  region: string;
  difficulty:
    | "Easy"
    | "Easy-Moderate"
    | "Moderate"
    | "Moderate-Difficult"
    | "Difficult"
    | "Technical";
  altitude: string;
  season: string;
  description: string;
  highlights: string[];
  image: {
    src: string;
    alt: string;
    credit: string;
    sourceUrl: string;
  };
};

export const company = {
  name: "Trishul Treks",
  tagline: "Himalayan treks planned with local care and mountain discipline.",
  phoneDisplay: "+91 63972 05114",
  whatsappNumber: "916397205114",
  email: "trishultreks@gmail.com",
  base: "Sankri, Uttarakhand",
};

const image = (
  src: string,
  alt: string,
  credit: string,
  sourceUrl: string,
): Trek["image"] => ({
  src,
  alt,
  credit,
  sourceUrl,
});

const fallbackImages = {
  sankri: image(
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Har_ki_doon_valley_-Sankari_Range_-Uttarakhand-DSC_0003.jpg/1280px-Har_ki_doon_valley_-Sankari_Range_-Uttarakhand-DSC_0003.jpg",
    "Har Ki Dun valley landscape in the Garhwal Himalayas",
    "Ash1091patil / Wikimedia Commons",
    "https://commons.wikimedia.org/wiki/File:Har_ki_doon_valley_-Sankari_Range_-Uttarakhand-DSC_0003.jpg",
  ),
  kedarkantha: image(
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Himalayas_from_Kedarkantha_Summit.jpg/1280px-Himalayas_from_Kedarkantha_Summit.jpg",
    "Snow-covered Himalayan range viewed from Kedarkantha summit",
    "Wikimedia Commons",
    "https://commons.wikimedia.org/wiki/File:Himalayas_from_Kedarkantha_Summit.jpg",
  ),
  gangotri: image(
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Gaumukh_Gangotri_glacier.jpg/1280px-Gaumukh_Gangotri_glacier.jpg",
    "Gangotri glacier and Gaumukh region in Uttarakhand",
    "Atarax42 / Wikimedia Commons",
    "https://commons.wikimedia.org/wiki/File:Gaumukh_Gangotri_glacier.jpg",
  ),
  valley: image(
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Pushpawati_river_inside_the_Valley_of_Flowers_Uttarakhand_I.jpg/1280px-Pushpawati_river_inside_the_Valley_of_Flowers_Uttarakhand_I.jpg",
    "Pushpawati river flowing through a high Himalayan valley in Uttarakhand",
    "Daniel Romanson / Wikimedia Commons CC0",
    "https://commons.wikimedia.org/wiki/File:Pushpawati_river_inside_the_Valley_of_Flowers_Uttarakhand_I.jpg",
  ),
  trishul: image(
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Panorama_of_Garhwal_Peaks_as_seen_from_Brahmatal_trek.jpg/1280px-Panorama_of_Garhwal_Peaks_as_seen_from_Brahmatal_trek.jpg",
    "Panorama of Garhwal Himalayan peaks seen from a Uttarakhand trek",
    "Wikimedia Commons",
    "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=Brahmatal%20Trishul%20Garhwal%20peaks",
  ),
};

export const treks: Trek[] = [
  {
    name: "Har Ki Dun",
    region: "Govind Pashu Vihar, Uttarakhand",
    difficulty: "Moderate",
    altitude: "11,700 ft",
    season: "Apr-Jun, Sep-Nov",
    description:
      "A classic valley trail through Osla-side villages, pine forests, river crossings, and views of Swargarohini.",
    highlights: ["Ancient villages", "River valley", "Swargarohini views"],
    image: fallbackImages.sankri,
  },
  {
    name: "Kedarkantha Trek",
    region: "Uttarkashi, Uttarakhand",
    difficulty: "Easy-Moderate",
    altitude: "12,500 ft",
    season: "Nov to Apr",
    description:
      "A snow-season classic with pine forests, wide campsites, and a rewarding summit view across the Garhwal Himalaya.",
    highlights: ["Snow trails", "Beginner friendly", "Summit sunrise"],
    image: fallbackImages.kedarkantha,
  },
  {
    name: "Dayara Bugyal",
    region: "Uttarkashi, Uttarakhand",
    difficulty: "Easy-Moderate",
    altitude: "11,830 ft",
    season: "Dec-Mar, Apr-Jun, Sep-Oct",
    description:
      "A wide alpine meadow trek with rolling bugyals, forest approaches, and generous views of the Gangotri range.",
    highlights: ["Alpine meadows", "Beginner friendly", "Winter snow"],
    image: image(
      "https://upload.wikimedia.org/wikipedia/commons/3/39/Dayara_Bugyal.jpg",
      "Dayara Bugyal alpine meadow in Uttarakhand",
      "Wikimedia Commons",
      "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=Dayara%20Bugyal",
    ),
  },
  {
    name: "Dodital",
    region: "Uttarkashi, Uttarakhand",
    difficulty: "Moderate",
    altitude: "10,800 ft",
    season: "Mar-Jun, Sep-Dec",
    description:
      "A forested lake trek to the quiet waters of Dodital, often extended toward Darwa Top for wider mountain views.",
    highlights: ["Freshwater lake", "Forest trail", "Ganesh temple"],
    image: fallbackImages.sankri,
  },
  {
    name: "Darwa Pass",
    region: "Dodital region, Uttarakhand",
    difficulty: "Moderate",
    altitude: "13,600 ft",
    season: "May-Jun, Sep-Oct",
    description:
      "A high ridge extension above Dodital with steeper climbs, Darwa Top views, and a more adventurous finish.",
    highlights: ["Dodital extension", "High ridge", "Mountain panorama"],
    image: fallbackImages.sankri,
  },
  {
    name: "Phulara Ridge",
    region: "Sankri, Uttarakhand",
    difficulty: "Moderate",
    altitude: "12,345 ft",
    season: "May-Jun, Sep-Nov",
    description:
      "A rare ridge-walk trek above Sankri where long skyline traverses replace the usual summit-and-return format.",
    highlights: ["Ridge walk", "Sankri base", "Swargarohini views"],
    image: fallbackImages.sankri,
  },
  {
    name: "Surya Top",
    region: "Dayara Bugyal region, Uttarakhand",
    difficulty: "Easy-Moderate",
    altitude: "12,950 ft",
    season: "Dec-Mar, Apr-Jun, Sep-Oct",
    description:
      "A scenic summit above the Dayara meadows with open slopes, snow possibilities, and a beginner-friendly high point.",
    highlights: ["Meadow summit", "Snow slopes", "Gangotri range views"],
    image: image(
      "https://upload.wikimedia.org/wikipedia/commons/3/39/Dayara_Bugyal.jpg",
      "Dayara Bugyal and Surya Top region in Uttarakhand",
      "Wikimedia Commons",
      "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=Surya%20Top%20Dayara%20Bugyal",
    ),
  },
  {
    name: "Bali Pass",
    region: "Sankri to Yamunotri, Uttarakhand",
    difficulty: "Difficult",
    altitude: "16,207 ft",
    season: "May-Jun, Sep-Oct",
    description:
      "A demanding high pass crossing linking Har Ki Dun and Yamunotri, with steep snow, scree, and exposed sections.",
    highlights: ["High pass", "Experienced trekkers", "Ruinsara route"],
    image: fallbackImages.sankri,
  },
  {
    name: "Ruinsara Tal",
    region: "Govind Pashu Vihar, Uttarakhand",
    difficulty: "Moderate",
    altitude: "11,800 ft",
    season: "May-Jun, Sep-Oct",
    description:
      "A remote lake trek beyond Osla with forests, meadows, and a quiet approach toward the Bali Pass basin.",
    highlights: ["High lake", "Remote camps", "Swargarohini basin"],
    image: fallbackImages.sankri,
  },
  {
    name: "Borasu Pass",
    region: "Har Ki Dun to Kinnaur",
    difficulty: "Difficult",
    altitude: "17,880 ft",
    season: "May-Jun, Sep-Oct",
    description:
      "A remote trans-Himalayan pass from the Har Ki Dun side into Himachal, suited to experienced high-altitude trekkers.",
    highlights: ["Remote pass", "Glacier sections", "Uttarakhand to Himachal"],
    image: fallbackImages.sankri,
  },
  {
    name: "Rupin Pass",
    region: "Uttarakhand to Himachal",
    difficulty: "Moderate-Difficult",
    altitude: "15,250 ft",
    season: "May-Jun, Sep-Oct",
    description:
      "A dramatic crossover trek known for hanging villages, waterfalls, snow bridges, and a steep pass climb.",
    highlights: ["Crossover trail", "Waterfalls", "Snow bridge"],
    image: image(
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Rupin_Pass.jpg/1280px-Rupin_Pass.jpg",
      "Rupin Pass trail in the Himalayas",
      "Wikimedia Commons",
      "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=Rupin%20Pass",
    ),
  },
  {
    name: "Gaumukh",
    region: "Gangotri National Park, Uttarakhand",
    difficulty: "Moderate",
    altitude: "13,200 ft",
    season: "May-Jun, Sep-Oct",
    description:
      "A sacred glacier approach to the source of the Bhagirathi, following the Gangotri trail through Chirbasa and Bhojbasa.",
    highlights: ["Ganga source", "Glacier snout", "Pilgrimage route"],
    image: fallbackImages.gangotri,
  },
  {
    name: "Tapovan",
    region: "Gangotri National Park, Uttarakhand",
    difficulty: "Moderate-Difficult",
    altitude: "14,203 ft",
    season: "May-Jun, Sep-Oct",
    description:
      "A high meadow above Gaumukh, reached by moraine and boulder sections beneath Shivling and the Bhagirathi peaks.",
    highlights: ["Shivling view", "Moraine climb", "High meadow"],
    image: fallbackImages.gangotri,
  },
  {
    name: "Nandanvan",
    region: "Gangotri National Park, Uttarakhand",
    difficulty: "Moderate-Difficult",
    altitude: "14,240 ft",
    season: "May-Jun, Sep-Oct",
    description:
      "A glacier-side campsite across the Gangotri glacier with close views of the Bhagirathi massif and Shivling.",
    highlights: ["Glacier traverse", "Bhagirathi peaks", "Expedition base"],
    image: fallbackImages.gangotri,
  },
  {
    name: "Vasuki Tal",
    region: "Gangotri National Park, Uttarakhand",
    difficulty: "Difficult",
    altitude: "15,750 ft",
    season: "May-Jun, Sep-Oct",
    description:
      "A demanding extension beyond Tapovan/Nandanvan involving glacier travel, high camps, and serious acclimatisation.",
    highlights: ["High lake", "Glacier route", "Experienced trekkers"],
    image: fallbackImages.gangotri,
  },
  {
    name: "Kedar Tal",
    region: "Gangotri National Park, Uttarakhand",
    difficulty: "Difficult",
    altitude: "15,580 ft",
    season: "May-Jun, Sep-Oct",
    description:
      "A steep, rugged trail to a glacial lake below Thalay Sagar, known for boulder sections and serious altitude gain.",
    highlights: ["Glacial lake", "Thalay Sagar", "Steep trail"],
    image: image(
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Kedartal.jpg/1280px-Kedartal.jpg",
      "Kedar Tal lake below high Himalayan peaks",
      "Wikimedia Commons",
      "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=Kedartal",
    ),
  },
  {
    name: "Gangotri",
    region: "Uttarkashi, Uttarakhand",
    difficulty: "Easy-Moderate",
    altitude: "10,200 ft",
    season: "Apr-Jun, Sep-Nov",
    description:
      "A high-altitude pilgrimage and acclimatisation base for Gaumukh, Tapovan, Kedar Tal, and deeper glacier routes.",
    highlights: ["Pilgrimage town", "Acclimatisation", "Gateway trail"],
    image: fallbackImages.gangotri,
  },
  {
    name: "Kalindi Khal",
    region: "Gangotri to Badrinath",
    difficulty: "Technical",
    altitude: "19,520 ft",
    season: "Jun, Aug-Sep",
    description:
      "One of Garhwal's hardest glacier expeditions, crossing from the Gangotri basin toward Badrinath via remote icefields.",
    highlights: ["Extreme pass", "Glacier expedition", "Experienced teams only"],
    image: fallbackImages.gangotri,
  },
  {
    name: "Lamkhaga Pass",
    region: "Harsil to Kinnaur",
    difficulty: "Technical",
    altitude: "17,320 ft",
    season: "Jun, Sep-Oct",
    description:
      "A remote borderland pass linking Harsil and Chitkul, with glacier travel, moraine, and expedition-style logistics.",
    highlights: ["Remote traverse", "Glacier travel", "Harsil to Chitkul"],
    image: fallbackImages.gangotri,
  },
  {
    name: "Black Peak Base Camp",
    region: "Govind Pashu Vihar, Uttarakhand",
    difficulty: "Difficult",
    altitude: "13,300 ft",
    season: "May-Jun, Sep-Oct",
    description:
      "A demanding approach into the Kalanag basin, often used for Black Peak expeditions beyond Ruinsara and Kyarkoti.",
    highlights: ["Kalanag basin", "Expedition approach", "High camps"],
    image: fallbackImages.sankri,
  },
  {
    name: "Bandarpunch Base Camp",
    region: "Yamunotri-Garhwal region",
    difficulty: "Difficult",
    altitude: "14,000 ft",
    season: "May-Jun, Sep-Oct",
    description:
      "A serious base-camp style trail into the Bandarpunch massif region, suited to fit trekkers with altitude experience.",
    highlights: ["Base camp route", "Bandarpunch massif", "Remote camps"],
    image: image(
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Bandarpunch.jpg/1280px-Bandarpunch.jpg",
      "Bandarpunch massif in the Garhwal Himalayas",
      "Wikimedia Commons",
      "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=Bandarpunch",
    ),
  },
  {
    name: "Kyarkoti Lake",
    region: "Govind Pashu Vihar, Uttarakhand",
    difficulty: "Difficult",
    altitude: "13,700 ft",
    season: "May-Jun, Sep-Oct",
    description:
      "A high, remote lake and meadow zone used on approaches toward Black Peak, reached through long and rugged trail days.",
    highlights: ["Remote lake", "Black Peak approach", "High meadow"],
    image: fallbackImages.sankri,
  },
  {
    name: "Nachiketa Tal",
    region: "Uttarkashi, Uttarakhand",
    difficulty: "Easy",
    altitude: "8,050 ft",
    season: "Mar-Jun, Sep-Dec",
    description:
      "A short forest walk to a quiet mythological lake near Uttarkashi, ideal as a gentle introduction to Himalayan trails.",
    highlights: ["Short trek", "Forest lake", "Beginner friendly"],
    image: fallbackImages.sankri,
  },
  {
    name: "Manjhi Forest Trek",
    region: "Dayara Bugyal region, Uttarakhand",
    difficulty: "Easy-Moderate",
    altitude: "10,000 ft",
    season: "Mar-Jun, Sep-Dec",
    description:
      "A forest-led Dayara side trail through oak and rhododendron terrain, suitable for easy camps and slow-paced groups.",
    highlights: ["Forest trail", "Oak camps", "Beginner groups"],
    image: image(
      "https://upload.wikimedia.org/wikipedia/commons/3/39/Dayara_Bugyal.jpg",
      "Forest and meadow region near Dayara Bugyal in Uttarakhand",
      "Wikimedia Commons",
      "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=Manjhi%20Dayara%20Bugyal",
    ),
  },
  {
    name: "Jandi Top",
    region: "Brahmatal region, Uttarakhand",
    difficulty: "Moderate",
    altitude: "12,000 ft",
    season: "Dec-Mar, Sep-Nov",
    description:
      "A ridge-top viewpoint in the Brahmatal belt with open views toward Trishul, Nanda Ghunti, and winter snow slopes.",
    highlights: ["Ridge viewpoint", "Trishul views", "Winter trail"],
    image: fallbackImages.trishul,
  },
  {
    name: "Baradsar",
    region: "Govind Pashu Vihar, Uttarakhand",
    difficulty: "Moderate-Difficult",
    altitude: "15,100 ft",
    season: "May-Jun, Sep-Oct",
    description:
      "A remote lake trek near the Rupin-Supin watershed with long climbs, open ridges, and a strong wilderness feel.",
    highlights: ["Remote lake", "Long ridge", "Offbeat route"],
    image: fallbackImages.sankri,
  },
  {
    name: "Sadhara Pani",
    region: "Uttarkashi, Uttarakhand",
    difficulty: "Easy-Moderate",
    altitude: "High Himalayan trail",
    season: "Mar-Jun, Sep-Nov",
    description:
      "An offbeat local trail best positioned as a custom short trek once route, campsite, and local logistics are confirmed.",
    highlights: ["Offbeat trail", "Custom batch", "Local route"],
    image: fallbackImages.sankri,
  },
];

export const trustPoints = [
  "Certified trek leaders and local mountain guides",
  "Small groups with clear briefing before every climb",
  "Fresh vegetarian meals and clean campsite discipline",
  "Route decisions based on weather, acclimatisation, and safety",
];

export const testimonials = [
  {
    quote:
      "The team handled pace, food, safety, and every small worry beautifully. It felt adventurous without ever feeling careless.",
    name: "Aarav Mehta",
    detail: "Kedarkantha, Delhi",
  },
  {
    quote:
      "Our guide knew every turn of the trail and kept the group comfortable through snow and cold mornings.",
    name: "Ishita Rao",
    detail: "Brahmatal, Bengaluru",
  },
  {
    quote:
      "Honest preparation calls, clear guidance, and a very warm local crew. Exactly what first-time trekkers need.",
    name: "Rohan Saini",
    detail: "Har Ki Dun, Jaipur",
  },
];

export const faqs = [
  {
    question: "Can beginners join Trishul Treks?",
    answer:
      "Yes. We recommend Kedarkantha or selected easy-moderate batches for first-time trekkers after a short fitness and packing discussion.",
  },
  {
    question: "What is included in the trek fee?",
    answer:
      "The usual package includes accommodation during the trek, vegetarian meals, trek leader, local guide, permits, camping gear, and safety equipment. Transport can be added where required.",
  },
  {
    question: "How do I book a batch?",
    answer:
      "Send a WhatsApp enquiry with your preferred trek and date. The team will share availability, payment steps, packing list, and pickup details.",
  },
  {
    question: "What happens in bad weather?",
    answer:
      "The trek leader can hold, reroute, or turn back based on weather, trail, and group health conditions. Safety decisions are final on the mountain.",
  },
];
