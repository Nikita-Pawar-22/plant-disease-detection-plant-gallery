// src/components/plantData.js
import aloe from '../assets/aloe.jpg';
import cactus from '../assets/cactus.jpg';
import snake from '../assets/snakeplant.jpg';
import peaceLilyImage from '../assets/peacelily.jpg';
import spiderPlantImage from '../assets/spiderplant.jpg';
import fiddleLeafImage from '../assets/fiddleleaf.webp';
import rubberPlantImage from '../assets/rubberplant.jpg';
import zzPlantImage from '../assets/zzplant.jpg';
import philodendronImage from '../assets/philodendron.jpg';
import bambooPalmImage from '../assets/bamboopalm.jpg';
import jadePlantImage from '../assets/jadeplant.jpg';

import monsteraImage from '../assets/monstera.jpg';
import pothosImage from '../assets/pothos.jpg';
import crotonImage from '../assets/croton.jpg';
import dracaenaImage from '../assets/dracaena.jpg';
import aglaonemaImage from '../assets/aglaonema.jpg';
import birdOfParadiseImage from '../assets/birdofparadise.jpg';
import lavenderImage from '../assets/lavender.jpg';
import rosemaryImage from '../assets/rosemary.jpg';
import orchidImage from '../assets/orchid.jpg';
import kalanchoeImage from '../assets/kalanchoe.jpg';
import anthuriumImage from '../assets/anthurium.jpg';
import prayerPlantImage from '../assets/prayerplant.jpg';
import coleusImage from '../assets/coleus.jpg';
import succulentsImage from '../assets/succulents.jpg';
import calatheaImage from '../assets/calathea.jpg';
import echeveriaImage from '../assets/echeveria.jpg';
import hibiscusImage from '../assets/hibiscus.jpeg';
import geraniumImage from '../assets/geranium.jpg';
import moneyPlantImage from '../assets/moneyplant.jpeg';

const plantData = [
    {
        name: 'Aloe Vera',
        scientificName: 'Aloe barbadensis miller',
        image: aloe,
        shortDescription: 'A succulent plant with medicinal properties.',
        description: 'Aloe Vera is known for its soothing gel used for skin care, burns, and other medical uses. It requires minimal watering and grows well indoors.',
        care: {
          light: 'Bright, indirect light',
          water: 'Every 2-3 weeks',
          temperature: '13-27°C',
        },
      },
      {
        name: 'Cactus',
        scientificName: 'Cactaceae family',
        image: cactus,
        shortDescription: 'Desert plant requiring little water.',
        description: 'Cactus is a drought-tolerant plant that thrives in sunny spots. Ideal for dry climates or low-maintenance indoor gardening.',
        care: {
          light: 'Full sun',
          water: 'Every 3-4 weeks',
          temperature: '18-35°C',
        },
      },
      {
        name: 'Snake Plant',
        scientificName: 'Sansevieria trifasciata',
        image: snake,
        shortDescription: "Also called 'Mother-in-law's Tongue'.",
        description: 'Snake Plants are popular for their air-purifying qualities and hardy nature. They survive in low light and need minimal care.',
        care: {
          light: 'Low to bright indirect light',
          water: 'Every 2-4 weeks',
          temperature: '15-29°C',
        },
      },
      {
        name: 'Monstera Deliciosa',
        scientificName: 'Monstera deliciosa',
        image: monsteraImage,
        shortDescription: 'Tropical plant with iconic split leaves.',
        description: 'Monstera Deliciosa thrives in indirect light and humid conditions. Its iconic split leaves make it a favorite for home décor. Water when the top inch of soil is dry.',
        care: {
          light: 'Bright, indirect light',
          water: 'Weekly',
          temperature: '18-30°C',
        },
      },
      {
        name: 'Pothos',
        scientificName: 'Epipremnum aureum',
        image: pothosImage,
        shortDescription: 'Popular low-maintenance vining plant.',
        description: 'Pothos is one of the easiest houseplants to care for. It thrives in low light and tolerates irregular watering. Excellent for hanging baskets or shelves.',
        care: {
          light: 'Low to bright indirect light',
          water: 'Every 1-2 weeks',
          temperature: '18-24°C',
        },
      },
      {
        name: 'Croton',
        scientificName: 'Codiaeum variegatum',
        image: crotonImage,
        shortDescription: 'Colorful foliage plant with vibrant leaves.',
        description: 'Crotons bring a burst of color with red, orange, and yellow leaves. They love bright light and consistent moisture. Keep away from drafts.',
        care: {
          light: 'Bright, indirect light',
          water: 'Keep soil moist',
          temperature: '18-27°C',
        },
      },
      {
        name: 'Dracaena',
        scientificName: 'Dracaena marginata',
        image: dracaenaImage,
        shortDescription: 'Striking foliage and air-purifying.',
        description: 'Dracaena has dramatic sword-like leaves and is great at removing toxins from the air. It prefers filtered light and evenly moist soil.',
        care: {
          light: 'Filtered light',
          water: 'Every 1-2 weeks',
          temperature: '18-24°C',
        },
      },
      {
        name: 'Aglaonema',
        scientificName: 'Aglaonema commutatum',
        image: aglaonemaImage,
        shortDescription: 'Tolerant of low light, great for beginners.',
        description: 'Also known as Chinese Evergreen, Aglaonema is a low-light champion. Water when soil begins to dry and enjoy its patterned leaves.',
        care: {
          light: 'Low to medium light',
          water: 'Every 1-2 weeks',
          temperature: '18-27°C',
        },
      },
      {
        name: 'Bird of Paradise',
        scientificName: 'Strelitzia reginae',
        image: birdOfParadiseImage,
        shortDescription: 'Large tropical plant with unique flowers.',
        description: 'Known for its banana-like leaves and crane-shaped flowers. Needs bright light and space to grow tall—ideal for large rooms.',
        care: {
          light: 'Bright, direct light',
          water: 'Weekly',
          temperature: '20-30°C',
        },
      },
      {
        name: 'Lavender',
        scientificName: 'Lavandula angustifolia',
        image: lavenderImage,
        shortDescription: 'Fragrant herb great for indoor or outdoor.',
        description: 'Lavender needs full sun and well-drained soil. The aroma is calming and its also used for essential oils and teas.',
        care: {
          light: 'Full sun',
          water: 'Every 1-2 weeks',
          temperature: '15-30°C',
        },
      },
      {
        name: 'Rosemary',
        scientificName: 'Rosmarinus officinalis',
        image: rosemaryImage,
        shortDescription: 'Herbal and aromatic plant for cooking.',
        description: 'Rosemary thrives in bright light and dry soil. Besides its culinary use, it also adds a pleasant scent indoors.',
        care: {
          light: 'Bright light',
          water: 'Every 1-2 weeks',
          temperature: '15-27°C',
        },
      },
      {
        name: 'Orchid',
        scientificName: 'Orchidaceae',
        image: orchidImage,
        shortDescription: 'Elegant flowering plant for bright interiors.',
        description: 'Orchids bloom beautifully with the right balance of indirect light and humidity. Let roots dry out between watering.',
        care: {
          light: 'Bright, indirect light',
          water: 'Weekly or when dry',
          temperature: '16-24°C',
        },
      },
      {
        name: 'Kalanchoe',
        scientificName: 'Kalanchoe blossfeldiana',
        image: kalanchoeImage,
        shortDescription: 'Succulent with vibrant flowers.',
        description: 'Kalanchoe is easy to maintain, needing bright indirect light and infrequent watering. Its blooms last for weeks.',
        care: {
          light: 'Bright, indirect light',
          water: 'Every 2 weeks',
          temperature: '15-23°C',
        },
      },
      {
        name: 'Anthurium',
        scientificName: 'Anthurium andraeanum',
        image: anthuriumImage,
        shortDescription: 'Heart-shaped flowers with glossy leaves.',
        description: 'Anthuriums prefer warm, humid conditions. Water when the topsoil is dry. They’re long-lasting and add elegance indoors.',
        care: {
          light: 'Bright, indirect light',
          water: 'Weekly',
          temperature: '20-28°C',
        },
      },
      {
        name: 'Prayer Plant',
        scientificName: 'Maranta leuconeura',
        image: prayerPlantImage,
        shortDescription: 'Leaves fold at night like praying hands.',
        description: 'Known for its beautiful patterned leaves that move with light. Keep in medium light with consistent moisture.',
        care: {
          light: 'Medium indirect light',
          water: 'Keep soil moist',
          temperature: '18-24°C',
        },
      },
      {
        name: 'Coleus',
        scientificName: 'Plectranthus scutellarioides',
        image: coleusImage,
        shortDescription: 'Bright foliage in shades of purple and pink.',
        description: 'Coleus can grow in sun or shade but needs regular watering. Great in containers or as a garden accent.',
        care: {
          light: 'Partial sun or shade',
          water: 'Keep soil consistently moist',
          temperature: '18-27°C',
        },
      },
      {
        name: 'Mixed Succulents',
        scientificName: 'Various Succulent Species',
        image: succulentsImage,
        shortDescription: 'Assorted drought-tolerant plants.',
        description: 'Succulents love bright light and minimal watering. Their compact size and variety make them ideal for desktops and small spaces.',
        care: {
          light: 'Bright, indirect to full light',
          water: 'Every 2-4 weeks',
          temperature: '18-30°C',
        },
      },
      {
        name: 'Calathea',
        scientificName: 'Calathea spp.',
        image: calatheaImage,
        shortDescription: 'Pet-friendly plant with unique leaf patterns.',
        description: 'Calatheas thrive in humidity and filtered light. Their leaves curl or fold in response to light changes, making them a dynamic addition.',
        care: {
          light: 'Filtered light',
          water: 'Keep soil consistently moist',
          temperature: '18-24°C',
        },
      },
      {
        name: 'Echeveria',
        scientificName: 'Echeveria spp.',
        image: echeveriaImage,
        shortDescription: 'Rosette-forming succulent.',
        description: 'Echeveria needs lots of light and dry soil. Avoid watering the leaves directly. Excellent for succulent arrangements.',
        care: {
          light: 'Full sun',
          water: 'Every 2-3 weeks',
          temperature: '15-26°C',
        },
      },
      {
        name: 'Hibiscus',
        scientificName: 'Hibiscus rosa-sinensis',
        image: hibiscusImage,
        shortDescription: 'Large, tropical flowering plant.',
        description: 'Hibiscus prefers full sun and warm temperatures. Water regularly and enjoy bold, colorful blooms that attract pollinators.',
        care: {
          light: 'Full sun',
          water: '2-3 times per week',
          temperature: '20-35°C',
        },
      },
      {
        name: 'Geranium',
        scientificName: 'Pelargonium spp.',
        image: geraniumImage,
        shortDescription: 'Bright flowers and fragrant leaves.',
        description: 'Geraniums bloom best with sunlight and moderate watering. Ideal for sunny windowsills or garden containers.',
        care: {
          light: 'Full sun',
          water: 'Weekly',
          temperature: '15-25°C',
        },
      },
      {
        name: 'Money Plant (Pilea/Devil’s Ivy)',
        scientificName: 'Epipremnum aureum / Pilea peperomioides',
        image: moneyPlantImage,
        shortDescription: 'Symbol of prosperity and good luck.',
        description: 'Money Plants are easy to grow, adaptable to various light levels, and require occasional watering. Great for feng shui and decoration.',
        care: {
          light: 'Low to bright indirect light',
          water: 'Every 1-2 weeks',
          temperature: '18-26°C',
        },
      },
      {
        name: 'Peace Lily',
        scientificName: 'Spathiphyllum',
        image: peaceLilyImage,
        shortDescription:'Elegant white blooms and excellent air purifier; thrives in low light.',
        description: 'Peace Lilies are popular houseplants known for their air-purifying qualities and elegant white blooms. They thrive in low to medium light and prefer moist soil.',
        care: {
          light: 'Low to bright indirect light',
          water: 'Keep soil consistently moist',
          temperature: '18-26°C (65-80°F)',
        },
      },
      {
        name: 'Spider Plant',
        scientificName: 'Chlorophytum comosum',
        image: spiderPlantImage,
        shortDescription:'Easy-care with arching green leaves and baby offshoots.',
        description: 'Spider Plants are resilient and easy to care for, making them a great choice for beginners. Their long, arching leaves and baby plantlets add a nice touch of greenery.',
        care: {
          light: 'Bright, indirect light',
          water: 'Water when top inch of soil is dry',
          temperature: '13-27°C (55-80°F)',
        },
      },
      {
        name: 'Fiddle Leaf Fig',
        scientificName: 'Ficus lyrata',
        image: fiddleLeafImage,
        shortDescription:'Striking plant with large violin-shaped leaves; loves bright spaces.',
        description: 'Fiddle Leaf Figs are striking indoor plants with large, violin-shaped leaves. They need bright light and proper watering to thrive.',
        care: {
          light: 'Bright, indirect light',
          water: 'Water when top 2-3 inches of soil are dry',
          temperature: '18-24°C (65-75°F)',
        },
      },
      {
        name: 'Rubber Plant',
        scientificName: 'Ficus elastica',
        image: rubberPlantImage,
        shortDescription:'Glossy, bold foliage that grows tall with minimal care.',
        description: 'Rubber Plants are attractive houseplants with thick, glossy leaves. They adapt well to indoor conditions and grow quite tall with proper care.',
        care: {
          light: 'Bright, indirect light',
          water: 'Allow soil to dry between watering',
          temperature: '16-27°C (60-80°F)',
        },
      },
      {
        name: 'ZZ Plant',
        scientificName: 'Zamioculcas zamiifolia',
        image: zzPlantImage,
        shortDescription:'Tough and stylish with dark, shiny leaves; thrives on neglect.',
        description: 'ZZ Plants are low-maintenance and drought-tolerant with glossy, dark green leaves. They are great for offices and low-light areas.',
        care: {
          light: 'Low to bright indirect light',
          water: 'Water every 2-3 weeks',
          temperature: '15-24°C (60-75°F)',
        },
      },
      {
        name: 'Philodendron',
        scientificName: 'Philodendron hederaceum',
        image: philodendronImage,
        shortDescription:'Fast-growing vine with heart-shaped leaves; perfect for hanging.',
        description: 'Philodendrons are fast-growing vines with heart-shaped leaves. They’re easy to grow and can be trained to climb or trail from containers.',
        care: {
          light: 'Medium to bright indirect light',
          water: 'Water when top inch of soil is dry',
          temperature: '18-27°C (65-80°F)',
        },
      },
      {
        name: 'Bamboo Palm',
        scientificName: 'Chamaedorea seifrizii',
        image: bambooPalmImage,
        shortDescription:'Lush, tropical look and great for low-light indoor areas.',
        description: 'Bamboo Palms are elegant indoor palms that purify the air. They bring a tropical vibe to interiors and thrive in low light.',
        care: {
          light: 'Low to medium light',
          water: 'Keep soil evenly moist',
          temperature: '18-24°C (65-75°F)',
        },
      },
      {
        name: 'Jade Plant',
        scientificName: 'Crassula ovata',
        image: jadePlantImage,
        shortDescription:'Classic succulent with thick, coin-shaped leaves and longevity.',
        description: 'Jade Plants are succulent houseplants with thick, fleshy leaves. They are known for their longevity and easy-care nature.',
        care: {
          light: 'Bright light, including some direct sunlight',
          water: 'Water when soil is completely dry',
          temperature: '18-24°C (65-75°F)',
        },
      },
    
    
];

export default plantData;