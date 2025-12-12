import { Category, Product } from './types';

export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com',
  instagram: 'https://instagram.com',
  twitter: 'https://twitter.com',
  youtube: 'https://youtube.com',
};

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Nitro X-Treme Buggy',
    category: Category.CARS,
    price: 349.99,
    image: 'https://picsum.photos/400/300?random=1',
    description: 'A 1/8 scale nitro-powered off-road buggy designed for competitive racing. Features a 3.5cc engine and aluminum chassis.',
    specs: {
      'Scale': '1/8',
      'Power': 'Nitro 3.5cc',
      'Drive': '4WD',
      'Top Speed': '45+ mph'
    },
    inStock: true
  },
  {
    id: '2',
    name: 'Velocity Deep-V Hull Boat',
    category: Category.BOATS,
    price: 199.99,
    image: 'https://picsum.photos/400/300?random=2',
    description: 'Slice through the water with this high-speed brushless electric boat. Self-righting hull design prevents capsizing.',
    specs: {
      'Length': '24 inches',
      'Motor': 'Brushless 2200kV',
      'Battery Req': '3S LiPo',
      'Top Speed': '35+ mph'
    },
    inStock: true
  },
  {
    id: '3',
    name: 'Rock Crawler Pro 4x4',
    category: Category.CARS,
    price: 429.99,
    image: 'https://picsum.photos/400/300?random=3',
    description: 'Conquer any terrain with the Pro 4x4 Crawler. Features locking differentials and high-torque steering servos.',
    specs: {
      'Scale': '1/10',
      'Power': 'Electric Brushed',
      'Features': 'Locking Diffs, LED Lights',
      'Waterproof': 'Yes'
    },
    inStock: true
  },
  {
    id: '4',
    name: 'LiPo 5000mAh 3S Battery',
    category: Category.BATTERIES,
    price: 45.00,
    image: 'https://picsum.photos/400/300?random=4',
    description: 'High-capacity 11.1V battery pack for extended run times. Deans connector included.',
    specs: {
      'Capacity': '5000mAh',
      'Voltage': '11.1V (3S)',
      'C-Rating': '50C',
      'Connector': 'Deans'
    },
    inStock: true
  },
  {
    id: '5',
    name: 'Smart Balance Charger',
    category: Category.CHARGERS,
    price: 59.99,
    image: 'https://picsum.photos/400/300?random=5',
    description: 'Universal charger for LiPo, NiMH, and Pb batteries. Features LCD display and safety auto-cutoff.',
    specs: {
      'Input': 'AC/DC',
      'Max Charge': '6A',
      'Supported': 'LiPo/LiFe/NiMH',
      'Discharge': 'Yes'
    },
    inStock: true
  },
  {
    id: '6',
    name: 'Drift Spec Sedan',
    category: Category.CARS,
    price: 259.99,
    image: 'https://picsum.photos/400/300?random=6',
    description: 'Master the art of sliding with this ready-to-run drift car. Includes hard drift tires and gyro stabilization.',
    specs: {
      'Scale': '1/10',
      'Drive': '4WD Belt',
      'Motor': 'Brushless',
      'Includes': 'Gyro'
    },
    inStock: false
  },
  {
    id: '7',
    name: 'Pro Tool Kit Hex Drivers',
    category: Category.ACCESSORIES,
    price: 29.99,
    image: 'https://picsum.photos/400/300?random=7',
    description: 'Precision machined hex drivers with titanium nitride tips. Essential for vehicle maintenance.',
    specs: {
      'Sizes': '1.5, 2.0, 2.5, 3.0mm',
      'Material': 'HSS Steel',
      'Handle': 'Aluminum',
    },
    inStock: true
  },
  {
    id: '8',
    name: 'Suspension Arm Set (Front)',
    category: Category.PARTS,
    price: 12.50,
    image: 'https://picsum.photos/400/300?random=8',
    description: 'Replacement heavy-duty composite suspension arms for 1/10 scale buggies.',
    specs: {
      'Position': 'Front Left/Right',
      'Material': 'Composite Plastic',
      'Fit': 'Series-X Buggy'
    },
    inStock: true
  }
];