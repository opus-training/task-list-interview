import { Task } from '../types/types';

export const longTask: Task = {
  id: 'long-task-1',
  title: 'Long Kitchen Line Check',
  description: 'Monitor food safety and equipment status on the kitchen line',
  steps: [
    {
      id: 'step-1',
      title: 'Chicken temperature check',
      description: 'Record the internal temperature of cooked chicken',
      type: 'number',
      multiple_choice_options: [],
      image_upload: 'disabled'
    },
    {
      id: 'step-2',
      title: 'Heat lamp status',
      description: 'Check if heat lamps are functioning properly',
      type: 'checkbox',
      multiple_choice_options: [],
      image_upload: 'optional'
    },
    {
      id: 'step-3',
      title: 'Refrigerator temperature',
      description: 'Record refrigerator temperature reading',
      type: 'number',
      multiple_choice_options: [],
      image_upload: 'disabled'
    },
    {
      id: 'step-4',
      title: 'Equipment cleanliness',
      description: 'Rate the cleanliness level of kitchen equipment',
      type: 'multiple_choice',
      multiple_choice_options: ['Needs cleaning', 'Acceptable', 'Clean', 'Spotless'],
      image_upload: 'optional'
    },
    {
      id: 'step-5',
      title: 'Food storage notes',
      description: 'Record any observations about food storage conditions',
      type: 'text',
      multiple_choice_options: [],
      image_upload: 'optional'
    },
    {
      id: 'step-6',
      title: 'Oven temperature verification',
      description: 'Check and record oven temperature readings',
      type: 'number',
      multiple_choice_options: [],
      image_upload: 'disabled'
    },
    {
      id: 'step-7',
      title: 'Ventilation system check',
      description: 'Verify kitchen ventilation is working properly',
      type: 'checkbox',
      multiple_choice_options: [],
      image_upload: 'optional'
    },
    {
      id: 'step-8',
      title: 'Dishwasher water temperature',
      description: 'Measure dishwasher water temperature',
      type: 'number',
      multiple_choice_options: [],
      image_upload: 'disabled'
    },
    {
      id: 'step-9',
      title: 'Sanitation station supplies',
      description: 'Check availability of sanitizing supplies',
      type: 'multiple_choice',
      multiple_choice_options: ['Well stocked', 'Low stock', 'Out of stock', 'Needs restocking'],
      image_upload: 'optional'
    },
    {
      id: 'step-10',
      title: 'Hand washing station condition',
      description: 'Inspect hand washing stations for proper functioning',
      type: 'text',
      multiple_choice_options: [],
      image_upload: 'optional'
    },
    {
      id: 'step-11',
      title: 'Freezer temperature check',
      description: 'Record freezer temperature reading',
      type: 'number',
      multiple_choice_options: [],
      image_upload: 'disabled'
    },
    {
      id: 'step-12',
      title: 'Food prep area cleanliness',
      description: 'Assess cleanliness of food preparation surfaces',
      type: 'multiple_choice',
      multiple_choice_options: ['Needs cleaning', 'Acceptable', 'Clean', 'Spotless'],
      image_upload: 'required'
    },
    {
      id: 'step-13',
      title: 'Cutting board condition',
      description: 'Check condition of cutting boards',
      type: 'checkbox',
      multiple_choice_options: [],
      image_upload: 'optional'
    },
    {
      id: 'step-14',
      title: 'Refrigerator door seals',
      description: 'Inspect refrigerator door seals for damage',
      type: 'text',
      multiple_choice_options: [],
      image_upload: 'optional'
    },
    {
      id: 'step-15',
      title: 'Pest control inspection',
      description: 'Check for signs of pests in the kitchen',
      type: 'checkbox',
      multiple_choice_options: [],
      image_upload: 'optional'
    },
    {
      id: 'step-16',
      title: 'Employee hygiene observation',
      description: 'Observe employee hygiene practices',
      type: 'multiple_choice',
      multiple_choice_options: ['Excellent', 'Good', 'Needs improvement', 'Unacceptable'],
      image_upload: 'disabled'
    },
    {
      id: 'step-17',
      title: 'Waste disposal area',
      description: 'Check waste disposal area cleanliness',
      type: 'text',
      multiple_choice_options: [],
      image_upload: 'optional'
    },
    {
      id: 'step-18',
      title: 'Fire extinguisher inspection',
      description: 'Verify fire extinguishers are in place and accessible',
      type: 'checkbox',
      multiple_choice_options: [],
      image_upload: 'optional'
    },
    {
      id: 'step-19',
      title: 'Floor condition assessment',
      description: 'Evaluate floor cleanliness and condition',
      type: 'multiple_choice',
      multiple_choice_options: ['Needs mopping', 'Acceptable', 'Clean', 'Recently cleaned'],
      image_upload: 'required'
    },
    {
      id: 'step-20',
      title: 'Utensil storage organization',
      description: 'Check utensil storage organization and cleanliness',
      type: 'text',
      multiple_choice_options: [],
      image_upload: 'optional'
    },
    {
      id: 'step-21',
      title: 'Dish rack cleanliness',
      description: 'Inspect dish rack for cleanliness',
      type: 'checkbox',
      multiple_choice_options: [],
      image_upload: 'optional'
    },
    {
      id: 'step-22',
      title: 'Beverage station temperature',
      description: 'Check beverage station temperature controls',
      type: 'number',
      multiple_choice_options: [],
      image_upload: 'disabled'
    },
    {
      id: 'step-23',
      title: 'Garbage disposal unit',
      description: 'Verify garbage disposal is functioning',
      type: 'checkbox',
      multiple_choice_options: [],
      image_upload: 'optional'
    },
    {
      id: 'step-24',
      title: 'Microwave cleanliness',
      description: 'Assess microwave interior and exterior cleanliness',
      type: 'multiple_choice',
      multiple_choice_options: ['Needs cleaning', 'Acceptable', 'Clean', 'Spotless'],
      image_upload: 'required'
    },
    {
      id: 'step-25',
      title: 'Ice machine inspection',
      description: 'Check ice machine for proper operation and cleanliness',
      type: 'text',
      multiple_choice_options: [],
      image_upload: 'optional'
    },
    {
      id: 'step-26',
      title: 'Walk-in cooler temperature',
      description: 'Record walk-in cooler temperature',
      type: 'number',
      multiple_choice_options: [],
      image_upload: 'disabled'
    },
    {
      id: 'step-27',
      title: 'Chemical storage safety',
      description: 'Verify chemical storage is secure and labeled',
      type: 'checkbox',
      multiple_choice_options: [],
      image_upload: 'optional'
    },
    {
      id: 'step-28',
      title: 'Dishwasher cycle time',
      description: 'Check dishwasher cycle completion time',
      type: 'number',
      multiple_choice_options: [],
      image_upload: 'disabled'
    },
    {
      id: 'step-29',
      title: 'Food labeling compliance',
      description: 'Check that all food items are properly labeled',
      type: 'multiple_choice',
      multiple_choice_options: ['All labeled', 'Some missing', 'Most missing', 'None labeled'],
      image_upload: 'required'
    },
    {
      id: 'step-30',
      title: 'Emergency exit accessibility',
      description: 'Verify emergency exits are clear and accessible',
      type: 'checkbox',
      multiple_choice_options: [],
      image_upload: 'optional'
    },
    {
      id: 'step-31',
      title: 'Thermometer calibration',
      description: 'Check calibration of food thermometers',
      type: 'text',
      multiple_choice_options: [],
      image_upload: 'optional'
    },
    {
      id: 'step-32',
      title: 'Grill surface temperature',
      description: 'Measure grill surface temperature',
      type: 'number',
      multiple_choice_options: [],
      image_upload: 'disabled'
    },
    {
      id: 'step-33',
      title: 'First aid kit inspection',
      description: 'Check first aid kit contents and accessibility',
      type: 'multiple_choice',
      multiple_choice_options: ['Complete', 'Missing items', 'Out of date', 'Not accessible'],
      image_upload: 'optional'
    },
    {
      id: 'step-34',
      title: 'Dining area cleanliness',
      description: 'Assess dining area cleanliness and organization',
      type: 'text',
      multiple_choice_options: [],
      image_upload: 'required'
    },
    {
      id: 'step-35',
      title: 'Hot holding unit temperature',
      description: 'Check hot holding unit temperature',
      type: 'number',
      multiple_choice_options: [],
      image_upload: 'disabled'
    },
    {
      id: 'step-36',
      title: 'Lock and key security',
      description: 'Verify door locks and key security measures',
      type: 'checkbox',
      multiple_choice_options: [],
      image_upload: 'disabled'
    },
    {
      id: 'step-37',
      title: 'Beverage dispenser cleanliness',
      description: 'Inspect beverage dispensers for cleanliness',
      type: 'multiple_choice',
      multiple_choice_options: ['Needs cleaning', 'Acceptable', 'Clean', 'Spotless'],
      image_upload: 'optional'
    },
    {
      id: 'step-38',
      title: 'Food allergen awareness',
      description: 'Check allergen labeling and awareness signage',
      type: 'text',
      multiple_choice_options: [],
      image_upload: 'optional'
    },
    {
      id: 'step-39',
      title: 'Cooling fan operation',
      description: 'Verify cooling fans are functioning properly',
      type: 'checkbox',
      multiple_choice_options: [],
      image_upload: 'optional'
    },
    {
      id: 'step-40',
      title: 'Food waste management',
      description: 'Assess food waste disposal procedures',
      type: 'multiple_choice',
      multiple_choice_options: ['Proper', 'Needs improvement', 'Inadequate', 'Non-compliant'],
      image_upload: 'optional'
    },
    {
      id: 'step-41',
      title: 'Hand sanitizer stations',
      description: 'Check hand sanitizer station availability and levels',
      type: 'checkbox',
      multiple_choice_options: [],
      image_upload: 'optional'
    },
    {
      id: 'step-42',
      title: 'Deep fryer oil temperature',
      description: 'Measure deep fryer oil temperature',
      type: 'number',
      multiple_choice_options: [],
      image_upload: 'disabled'
    },
    {
      id: 'step-43',
      title: 'Menu board accuracy',
      description: 'Verify menu board information is current and accurate',
      type: 'text',
      multiple_choice_options: [],
      image_upload: 'optional'
    },
    {
      id: 'step-44',
      title: 'Backup generator readiness',
      description: 'Check backup generator fuel and readiness',
      type: 'checkbox',
      multiple_choice_options: [],
      image_upload: 'optional'
    },
    {
      id: 'step-45',
      title: 'Dish rack drainage',
      description: 'Inspect dish rack drainage system',
      type: 'multiple_choice',
      multiple_choice_options: ['Good drainage', 'Slow drainage', 'Poor drainage', 'No drainage'],
      image_upload: 'optional'
    },
    {
      id: 'step-46',
      title: 'Condiment station organization',
      description: 'Check condiment station cleanliness and organization',
      type: 'text',
      multiple_choice_options: [],
      image_upload: 'required'
    },
    {
      id: 'step-47',
      title: 'Gas line safety check',
      description: 'Verify gas lines and connections are secure',
      type: 'checkbox',
      multiple_choice_options: [],
      image_upload: 'disabled'
    },
    {
      id: 'step-48',
      title: 'Food rotation compliance',
      description: 'Check FIFO (first in, first out) compliance',
      type: 'multiple_choice',
      multiple_choice_options: ['Compliant', 'Minor issues', 'Major issues', 'Non-compliant'],
      image_upload: 'optional'
    },
    {
      id: 'step-49',
      title: 'Employee break area',
      description: 'Assess employee break area cleanliness',
      type: 'text',
      multiple_choice_options: [],
      image_upload: 'optional'
    },
    {
      id: 'step-50',
      title: 'Walk-in freezer defrost',
      description: 'Check walk-in freezer defrost cycle',
      type: 'checkbox',
      multiple_choice_options: [],
      image_upload: 'optional'
    },
    {
      id: 'step-51',
      title: 'Steam table temperature',
      description: 'Measure steam table temperature',
      type: 'number',
      multiple_choice_options: [],
      image_upload: 'disabled'
    },
    {
      id: 'step-52',
      title: 'Floor drain cleanliness',
      description: 'Inspect floor drains for cleanliness and function',
      type: 'multiple_choice',
      multiple_choice_options: ['Clean', 'Minor debris', 'Heavy debris', 'Blocked'],
      image_upload: 'optional'
    },
    {
      id: 'step-53',
      title: 'Utensil sanitizer effectiveness',
      description: 'Test sanitizer concentration levels',
      type: 'number',
      multiple_choice_options: [],
      image_upload: 'disabled'
    },
    {
      id: 'step-54',
      title: 'Food display case lighting',
      description: 'Check lighting in food display cases',
      type: 'checkbox',
      multiple_choice_options: [],
      image_upload: 'optional'
    },
    {
      id: 'step-55',
      title: 'Bakery oven temperature',
      description: 'Record bakery oven temperature',
      type: 'number',
      multiple_choice_options: [],
      image_upload: 'disabled'
    },
    {
      id: 'step-56',
      title: 'Employee uniform condition',
      description: 'Assess employee uniform cleanliness and condition',
      type: 'multiple_choice',
      multiple_choice_options: ['Excellent', 'Good', 'Needs cleaning', 'Unacceptable'],
      image_upload: 'disabled'
    },
    {
      id: 'step-57',
      title: 'Reach-in cooler organization',
      description: 'Check organization of reach-in coolers',
      type: 'text',
      multiple_choice_options: [],
      image_upload: 'required'
    },
    {
      id: 'step-58',
      title: 'Dishwasher detergent levels',
      description: 'Check dishwasher detergent and rinse aid levels',
      type: 'checkbox',
      multiple_choice_options: [],
      image_upload: 'optional'
    },
    {
      id: 'step-59',
      title: 'Food processor safety',
      description: 'Verify food processor safety guards and operation',
      type: 'checkbox',
      multiple_choice_options: [],
      image_upload: 'optional'
    },
    {
      id: 'step-60',
      title: 'Dry storage area inspection',
      description: 'Assess dry storage area organization and cleanliness',
      type: 'multiple_choice',
      multiple_choice_options: ['Well organized', 'Some issues', 'Poor organization', 'Needs major cleanup'],
      image_upload: 'required'
    },
    {
      id: 'step-61',
      title: 'Sous vide machine temperature',
      description: 'Check sous vide machine water bath temperature',
      type: 'number',
      multiple_choice_options: [],
      image_upload: 'disabled'
    },
    {
      id: 'step-62',
      title: 'Grease trap maintenance',
      description: 'Inspect grease trap for proper maintenance',
      type: 'text',
      multiple_choice_options: [],
      image_upload: 'optional'
    },
    {
      id: 'step-63',
      title: 'Hot water heater temperature',
      description: 'Measure hot water heater temperature',
      type: 'number',
      multiple_choice_options: [],
      image_upload: 'disabled'
    },
    {
      id: 'step-64',
      title: 'Food scale calibration',
      description: 'Check food scale calibration accuracy',
      type: 'checkbox',
      multiple_choice_options: [],
      image_upload: 'optional'
    },
    {
      id: 'step-65',
      title: 'Beverage syrup levels',
      description: 'Check beverage dispenser syrup levels',
      type: 'multiple_choice',
      multiple_choice_options: ['Full', 'Low', 'Empty', 'Needs replacement'],
      image_upload: 'optional'
    },
    {
      id: 'step-66',
      title: 'Convection oven temperature',
      description: 'Record convection oven temperature',
      type: 'number',
      multiple_choice_options: [],
      image_upload: 'disabled'
    },
    {
      id: 'step-67',
      title: 'Knife sharpening station',
      description: 'Inspect knife sharpening and storage',
      type: 'text',
      multiple_choice_options: [],
      image_upload: 'optional'
    },
    {
      id: 'step-68',
      title: 'Walk-in freezer organization',
      description: 'Check walk-in freezer organization and labeling',
      type: 'multiple_choice',
      multiple_choice_options: ['Well organized', 'Some issues', 'Poor organization', 'Needs major cleanup'],
      image_upload: 'required'
    },
    {
      id: 'step-69',
      title: 'Ice cream machine cleanliness',
      description: 'Inspect ice cream machine for cleanliness',
      type: 'checkbox',
      multiple_choice_options: [],
      image_upload: 'required'
    },
    {
      id: 'step-70',
      title: 'Food packaging integrity',
      description: 'Check food packaging for damage or contamination',
      type: 'text',
      multiple_choice_options: [],
      image_upload: 'optional'
    },
    {
      id: 'step-71',
      title: 'Pressure cooker safety',
      description: 'Verify pressure cooker safety features',
      type: 'checkbox',
      multiple_choice_options: [],
      image_upload: 'disabled'
    },
    {
      id: 'step-72',
      title: 'Salad bar temperature',
      description: 'Check salad bar refrigeration temperature',
      type: 'number',
      multiple_choice_options: [],
      image_upload: 'disabled'
    },
    {
      id: 'step-73',
      title: 'Dish room ventilation',
      description: 'Assess dish room ventilation effectiveness',
      type: 'multiple_choice',
      multiple_choice_options: ['Good', 'Adequate', 'Poor', 'None'],
      image_upload: 'optional'
    },
    {
      id: 'step-74',
      title: 'Food color and appearance',
      description: 'Assess food color and appearance quality',
      type: 'text',
      multiple_choice_options: [],
      image_upload: 'required'
    },
    {
      id: 'step-75',
      title: 'Blender operation',
      description: 'Check blender safety and operation',
      type: 'checkbox',
      multiple_choice_options: [],
      image_upload: 'optional'
    },
    {
      id: 'step-76',
      title: 'Reach-in freezer temperature',
      description: 'Record reach-in freezer temperature',
      type: 'number',
      multiple_choice_options: [],
      image_upload: 'disabled'
    },
    {
      id: 'step-77',
      title: 'Food thaw station',
      description: 'Inspect food thawing procedures and equipment',
      type: 'multiple_choice',
      multiple_choice_options: ['Proper', 'Needs improvement', 'Unsafe', 'Non-compliant'],
      image_upload: 'optional'
    },
    {
      id: 'step-78',
      title: 'Coffee maker cleanliness',
      description: 'Check coffee maker and surrounding area cleanliness',
      type: 'text',
      multiple_choice_options: [],
      image_upload: 'optional'
    },
    {
      id: 'step-79',
      title: 'Dish rack sanitizing',
      description: 'Verify dish rack sanitizing procedures',
      type: 'checkbox',
      multiple_choice_options: [],
      image_upload: 'optional'
    },
    {
      id: 'step-80',
      title: 'Dry goods inventory',
      description: 'Check dry goods inventory organization',
      type: 'multiple_choice',
      multiple_choice_options: ['Well organized', 'Some issues', 'Poor organization', 'Needs major cleanup'],
      image_upload: 'optional'
    },
    {
      id: 'step-81',
      title: 'Toaster operation',
      description: 'Check toaster safety and operation',
      type: 'checkbox',
      multiple_choice_options: [],
      image_upload: 'optional'
    },
    {
      id: 'step-82',
      title: 'Soup warmer temperature',
      description: 'Measure soup warmer temperature',
      type: 'number',
      multiple_choice_options: [],
      image_upload: 'disabled'
    },
    {
      id: 'step-83',
      title: 'Employee hand washing',
      description: 'Observe employee hand washing procedures',
      type: 'text',
      multiple_choice_options: [],
      image_upload: 'disabled'
    },
    {
      id: 'step-84',
      title: 'Walk-in cooler organization',
      description: 'Assess walk-in cooler organization and labeling',
      type: 'multiple_choice',
      multiple_choice_options: ['Well organized', 'Some issues', 'Poor organization', 'Needs major cleanup'],
      image_upload: 'required'
    },
    {
      id: 'step-85',
      title: 'Can opener blade sharpness',
      description: 'Check can opener blade condition',
      type: 'checkbox',
      multiple_choice_options: [],
      image_upload: 'optional'
    },
    {
      id: 'step-86',
      title: 'Beverage cooler temperature',
      description: 'Record beverage cooler temperature',
      type: 'number',
      multiple_choice_options: [],
      image_upload: 'disabled'
    },
    {
      id: 'step-87',
      title: 'Food thermometer storage',
      description: 'Check food thermometer storage and availability',
      type: 'text',
      multiple_choice_options: [],
      image_upload: 'optional'
    },
    {
      id: 'step-88',
      title: 'Microwave operation',
      description: 'Verify microwave safety and operation',
      type: 'checkbox',
      multiple_choice_options: [],
      image_upload: 'optional'
    },
    {
      id: 'step-89',
      title: 'Dish soap concentration',
      description: 'Check dish soap concentration levels',
      type: 'number',
      multiple_choice_options: [],
      image_upload: 'disabled'
    },
    {
      id: 'step-90',
      title: 'Food preparation flow',
      description: 'Assess food preparation workflow efficiency',
      type: 'multiple_choice',
      multiple_choice_options: ['Excellent', 'Good', 'Needs improvement', 'Poor'],
      image_upload: 'optional'
    },
    {
      id: 'step-91',
      title: 'Griddle temperature',
      description: 'Measure griddle surface temperature',
      type: 'number',
      multiple_choice_options: [],
      image_upload: 'disabled'
    },
    {
      id: 'step-92',
      title: 'Garbage container lids',
      description: 'Check that garbage containers have proper lids',
      type: 'checkbox',
      multiple_choice_options: [],
      image_upload: 'optional'
    },
    {
      id: 'step-93',
      title: 'Ingredient labeling',
      description: 'Verify ingredient containers are properly labeled',
      type: 'multiple_choice',
      multiple_choice_options: ['All labeled', 'Some missing', 'Most missing', 'None labeled'],
      image_upload: 'required'
    },
    {
      id: 'step-94',
      title: 'Steam kettle temperature',
      description: 'Check steam kettle temperature',
      type: 'number',
      multiple_choice_options: [],
      image_upload: 'disabled'
    },
    {
      id: 'step-95',
      title: 'Employee break room',
      description: 'Assess employee break room cleanliness and organization',
      type: 'text',
      multiple_choice_options: [],
      image_upload: 'optional'
    },
    {
      id: 'step-96',
      title: 'Food display lighting',
      description: 'Check food display area lighting adequacy',
      type: 'checkbox',
      multiple_choice_options: [],
      image_upload: 'optional'
    },
    {
      id: 'step-97',
      title: 'Dish rack air drying',
      description: 'Verify dishes are properly air dried',
      type: 'multiple_choice',
      multiple_choice_options: ['Properly dried', 'Some moisture', 'Wet', 'Not dried'],
      image_upload: 'optional'
    },
    {
      id: 'step-98',
      title: 'Refrigerator coil cleanliness',
      description: 'Check refrigerator coil cleanliness',
      type: 'text',
      multiple_choice_options: [],
      image_upload: 'optional'
    },
    {
      id: 'step-99',
      title: 'Food waste container',
      description: 'Inspect food waste container cleanliness',
      type: 'checkbox',
      multiple_choice_options: [],
      image_upload: 'optional'
    },
    {
      id: 'step-100',
      title: 'Beverage dispenser temperature',
      description: 'Check beverage dispenser refrigeration temperature',
      type: 'number',
      multiple_choice_options: [],
      image_upload: 'disabled'
    },
    {
      id: 'step-101',
      title: 'Dish machine water pressure',
      description: 'Check dish machine water pressure levels',
      type: 'number',
      multiple_choice_options: [],
      image_upload: 'disabled'
    },
    {
      id: 'step-102',
      title: 'Food allergen separation',
      description: 'Verify proper separation of allergen-containing foods',
      type: 'checkbox',
      multiple_choice_options: [],
      image_upload: 'optional'
    },
    {
      id: 'step-103',
      title: 'Bakery display case temperature',
      description: 'Record bakery display case temperature',
      type: 'number',
      multiple_choice_options: [],
      image_upload: 'disabled'
    },
    {
      id: 'step-104',
      title: 'Employee training records',
      description: 'Check employee food safety training records',
      type: 'text',
      multiple_choice_options: [],
      image_upload: 'optional'
    },
    {
      id: 'step-105',
      title: 'Hot plate temperature',
      description: 'Measure hot plate surface temperature',
      type: 'number',
      multiple_choice_options: [],
      image_upload: 'disabled'
    },
    {
      id: 'step-106',
      title: 'Refrigerator gasket condition',
      description: 'Inspect refrigerator door gaskets for wear',
      type: 'multiple_choice',
      multiple_choice_options: ['Good condition', 'Minor wear', 'Needs replacement', 'Damaged'],
      image_upload: 'optional'
    },
    {
      id: 'step-107',
      title: 'Food prep sink cleanliness',
      description: 'Assess food preparation sink cleanliness',
      type: 'text',
      multiple_choice_options: [],
      image_upload: 'required'
    },
    {
      id: 'step-108',
      title: 'Toaster oven temperature',
      description: 'Check toaster oven temperature settings',
      type: 'number',
      multiple_choice_options: [],
      image_upload: 'disabled'
    },
    {
      id: 'step-109',
      title: 'Beverage ice machine',
      description: 'Inspect beverage ice machine cleanliness',
      type: 'checkbox',
      multiple_choice_options: [],
      image_upload: 'required'
    },
    {
      id: 'step-110',
      title: 'Dry goods shelf life',
      description: 'Check expiration dates on dry goods inventory',
      type: 'multiple_choice',
      multiple_choice_options: ['All current', 'Some expired', 'Many expired', 'Needs inventory check'],
      image_upload: 'optional'
    },
    {
      id: 'step-111',
      title: 'Salad prep area temperature',
      description: 'Record salad preparation area temperature',
      type: 'number',
      multiple_choice_options: [],
      image_upload: 'disabled'
    },
    {
      id: 'step-112',
      title: 'Hand drying stations',
      description: 'Check availability of hand drying facilities',
      type: 'checkbox',
      multiple_choice_options: [],
      image_upload: 'optional'
    },
    {
      id: 'step-113',
      title: 'Food processor blade sharpness',
      description: 'Check food processor blade condition',
      type: 'text',
      multiple_choice_options: [],
      image_upload: 'optional'
    },
    {
      id: 'step-114',
      title: 'Walk-in freezer door seals',
      description: 'Inspect walk-in freezer door seals',
      type: 'multiple_choice',
      multiple_choice_options: ['Good condition', 'Minor wear', 'Needs replacement', 'Damaged'],
      image_upload: 'optional'
    },
    {
      id: 'step-115',
      title: 'Beverage station cleanliness',
      description: 'Assess beverage station and equipment cleanliness',
      type: 'multiple_choice',
      multiple_choice_options: ['Needs cleaning', 'Acceptable', 'Clean', 'Spotless'],
      image_upload: 'required'
    },
    {
      id: 'step-116',
      title: 'Dish rack capacity',
      description: 'Check dish rack capacity and usage',
      type: 'text',
      multiple_choice_options: [],
      image_upload: 'optional'
    },
    {
      id: 'step-117',
      title: 'Refrigeration unit defrost',
      description: 'Verify refrigeration unit defrost cycles',
      type: 'checkbox',
      multiple_choice_options: [],
      image_upload: 'optional'
    },
    {
      id: 'step-118',
      title: 'Food display case organization',
      description: 'Check food display case organization and labeling',
      type: 'multiple_choice',
      multiple_choice_options: ['Well organized', 'Some issues', 'Poor organization', 'Needs major cleanup'],
      image_upload: 'required'
    },
    {
      id: 'step-119',
      title: 'Hot water availability',
      description: 'Check hot water availability at all stations',
      type: 'checkbox',
      multiple_choice_options: [],
      image_upload: 'optional'
    },
    {
      id: 'step-120',
      title: 'Employee glove usage',
      description: 'Observe proper glove usage by employees',
      type: 'multiple_choice',
      multiple_choice_options: ['Always used', 'Sometimes used', 'Rarely used', 'Not used'],
      image_upload: 'disabled'
    },
    {
      id: 'step-121',
      title: 'Microwave wattage verification',
      description: 'Verify microwave power output',
      type: 'number',
      multiple_choice_options: [],
      image_upload: 'disabled'
    },
    {
      id: 'step-122',
      title: 'Food waste segregation',
      description: 'Check proper segregation of food waste types',
      type: 'text',
      multiple_choice_options: [],
      image_upload: 'optional'
    },
    {
      id: 'step-123',
      title: 'Grill hood cleaning',
      description: 'Inspect grill hood and filter cleanliness',
      type: 'multiple_choice',
      multiple_choice_options: ['Clean', 'Light grease', 'Heavy grease', 'Needs cleaning'],
      image_upload: 'required'
    },
    {
      id: 'step-124',
      title: 'Dishwasher chemical levels',
      description: 'Check dishwasher chemical reservoir levels',
      type: 'checkbox',
      multiple_choice_options: [],
      image_upload: 'optional'
    },
    {
      id: 'step-125',
      title: 'Walk-in cooler lighting',
      description: 'Verify walk-in cooler lighting adequacy',
      type: 'checkbox',
      multiple_choice_options: [],
      image_upload: 'optional'
    },
    {
      id: 'step-126',
      title: 'Food packaging storage',
      description: 'Check food packaging material storage conditions',
      type: 'text',
      multiple_choice_options: [],
      image_upload: 'optional'
    },
    {
      id: 'step-127',
      title: 'Beverage carbonation levels',
      description: 'Check beverage carbonation system',
      type: 'number',
      multiple_choice_options: [],
      image_upload: 'disabled'
    },
    {
      id: 'step-128',
      title: 'Knife storage safety',
      description: 'Verify proper knife storage practices',
      type: 'multiple_choice',
      multiple_choice_options: ['Safe storage', 'Some issues', 'Unsafe storage', 'No storage system'],
      image_upload: 'optional'
    },
    {
      id: 'step-129',
      title: 'Refrigerator shelf cleanliness',
      description: 'Inspect refrigerator shelf cleanliness',
      type: 'checkbox',
      multiple_choice_options: [],
      image_upload: 'required'
    },
    {
      id: 'step-130',
      title: 'Food temperature documentation',
      description: 'Check food temperature documentation procedures',
      type: 'text',
      multiple_choice_options: [],
      image_upload: 'optional'
    },
    {
      id: 'step-131',
      title: 'Dish drying rack condition',
      description: 'Inspect dish drying rack condition',
      type: 'multiple_choice',
      multiple_choice_options: ['Good condition', 'Minor wear', 'Needs replacement', 'Damaged'],
      image_upload: 'optional'
    },
    {
      id: 'step-132',
      title: 'Employee hair restraint usage',
      description: 'Observe proper hair restraint usage',
      type: 'checkbox',
      multiple_choice_options: [],
      image_upload: 'disabled'
    },
    {
      id: 'step-133',
      title: 'Walk-in freezer shelf organization',
      description: 'Check walk-in freezer shelf organization',
      type: 'multiple_choice',
      multiple_choice_options: ['Well organized', 'Some issues', 'Poor organization', 'Needs major cleanup'],
      image_upload: 'required'
    },
    {
      id: 'step-134',
      title: 'Beverage dispenser cleaning',
      description: 'Verify beverage dispenser cleaning schedule',
      type: 'text',
      multiple_choice_options: [],
      image_upload: 'optional'
    },
    {
      id: 'step-135',
      title: 'Food processor maintenance',
      description: 'Check food processor maintenance records',
      type: 'checkbox',
      multiple_choice_options: [],
      image_upload: 'optional'
    },
    {
      id: 'step-136',
      title: 'Dry storage pest control',
      description: 'Inspect dry storage area for pest activity',
      type: 'multiple_choice',
      multiple_choice_options: ['No signs', 'Minor activity', 'Moderate activity', 'Heavy infestation'],
      image_upload: 'optional'
    },
    {
      id: 'step-137',
      title: 'Hot holding cabinet temperature',
      description: 'Measure hot holding cabinet temperature',
      type: 'number',
      multiple_choice_options: [],
      image_upload: 'disabled'
    },
    {
      id: 'step-138',
      title: 'Dish rack sanitizing solution',
      description: 'Check dish rack sanitizing solution concentration',
      type: 'number',
      multiple_choice_options: [],
      image_upload: 'disabled'
    },
    {
      id: 'step-139',
      title: 'Food display case defrost',
      description: 'Verify food display case defrost cycles',
      type: 'checkbox',
      multiple_choice_options: [],
      image_upload: 'optional'
    },
    {
      id: 'step-140',
      title: 'Employee jewelry policy',
      description: 'Check compliance with jewelry policy',
      type: 'multiple_choice',
      multiple_choice_options: ['Compliant', 'Minor violations', 'Major violations', 'No policy followed'],
      image_upload: 'disabled'
    },
    {
      id: 'step-141',
      title: 'Refrigerator fan operation',
      description: 'Check refrigerator fan operation',
      type: 'checkbox',
      multiple_choice_options: [],
      image_upload: 'optional'
    },
    {
      id: 'step-142',
      title: 'Beverage mixing station',
      description: 'Inspect beverage mixing station cleanliness',
      type: 'text',
      multiple_choice_options: [],
      image_upload: 'required'
    },
    {
      id: 'step-143',
      title: 'Food thawing documentation',
      description: 'Check food thawing documentation procedures',
      type: 'multiple_choice',
      multiple_choice_options: ['Well documented', 'Some records', 'Poor records', 'No documentation'],
      image_upload: 'optional'
    },
    {
      id: 'step-144',
      title: 'Dish machine rinse temperature',
      description: 'Check dish machine rinse water temperature',
      type: 'number',
      multiple_choice_options: [],
      image_upload: 'disabled'
    },
    {
      id: 'step-145',
      title: 'Walk-in cooler pest control',
      description: 'Inspect walk-in cooler for pest activity',
      type: 'checkbox',
      multiple_choice_options: [],
      image_upload: 'optional'
    },
    {
      id: 'step-146',
      title: 'Food allergen cleaning procedures',
      description: 'Verify allergen cleaning procedures',
      type: 'text',
      multiple_choice_options: [],
      image_upload: 'optional'
    },
    {
      id: 'step-147',
      title: 'Refrigeration unit vibration',
      description: 'Check for excessive refrigeration unit vibration',
      type: 'checkbox',
      multiple_choice_options: [],
      image_upload: 'optional'
    },
    {
      id: 'step-148',
      title: 'Beverage syrup dating',
      description: 'Check beverage syrup expiration dates',
      type: 'multiple_choice',
      multiple_choice_options: ['All current', 'Some expired', 'Many expired', 'No dates visible'],
      image_upload: 'optional'
    },
    {
      id: 'step-149',
      title: 'Food prep table height',
      description: 'Check food preparation table ergonomics',
      type: 'text',
      multiple_choice_options: [],
      image_upload: 'optional'
    },
    {
      id: 'step-150',
      title: 'Dish rack loading efficiency',
      description: 'Assess dish rack loading efficiency',
      type: 'multiple_choice',
      multiple_choice_options: ['Excellent', 'Good', 'Needs improvement', 'Poor'],
      image_upload: 'optional'
    },
    {
      id: 'step-151',
      title: 'Employee smoking area',
      description: 'Check designated employee smoking area cleanliness',
      type: 'text',
      multiple_choice_options: [],
      image_upload: 'optional'
    },
    {
      id: 'step-152',
      title: 'Food scale accuracy',
      description: 'Verify food scale accuracy with test weights',
      type: 'checkbox',
      multiple_choice_options: [],
      image_upload: 'optional'
    },
    {
      id: 'step-153',
      title: 'Refrigerator door alignment',
      description: 'Check refrigerator door alignment and closure',
      type: 'multiple_choice',
      multiple_choice_options: ['Perfect alignment', 'Minor misalignment', 'Poor alignment', 'Door damage'],
      image_upload: 'optional'
    },
    {
      id: 'step-154',
      title: 'Beverage fountain cleaning',
      description: 'Inspect beverage fountain nozzle cleanliness',
      type: 'checkbox',
      multiple_choice_options: [],
      image_upload: 'required'
    },
    {
      id: 'step-155',
      title: 'Dry goods rotation system',
      description: 'Verify dry goods rotation system effectiveness',
      type: 'multiple_choice',
      multiple_choice_options: ['Excellent', 'Good', 'Needs improvement', 'Poor'],
      image_upload: 'optional'
    },
    {
      id: 'step-156',
      title: 'Hot water tank temperature',
      description: 'Check hot water tank temperature setting',
      type: 'number',
      multiple_choice_options: [],
      image_upload: 'disabled'
    },
    {
      id: 'step-157',
      title: 'Food display case lighting bulbs',
      description: 'Check food display case lighting bulb functionality',
      type: 'checkbox',
      multiple_choice_options: [],
      image_upload: 'optional'
    },
    {
      id: 'step-158',
      title: 'Walk-in freezer floor condition',
      description: 'Inspect walk-in freezer floor for damage or moisture',
      type: 'text',
      multiple_choice_options: [],
      image_upload: 'optional'
    },
    {
      id: 'step-159',
      title: 'Dishwasher cycle documentation',
      description: 'Check dishwasher cycle documentation procedures',
      type: 'multiple_choice',
      multiple_choice_options: ['Well documented', 'Some records', 'Poor records', 'No documentation'],
      image_upload: 'optional'
    },
    {
      id: 'step-160',
      title: 'Employee personal item storage',
      description: 'Check employee personal item storage areas',
      type: 'checkbox',
      multiple_choice_options: [],
      image_upload: 'optional'
    },
    {
      id: 'step-161',
      title: 'Refrigeration coil frost buildup',
      description: 'Check refrigeration coils for excessive frost',
      type: 'multiple_choice',
      multiple_choice_options: ['No frost', 'Light frost', 'Moderate frost', 'Heavy frost'],
      image_upload: 'optional'
    },
    {
      id: 'step-162',
      title: 'Beverage dispenser nozzle condition',
      description: 'Inspect beverage dispenser nozzles for wear',
      type: 'text',
      multiple_choice_options: [],
      image_upload: 'optional'
    },
    {
      id: 'step-163',
      title: 'Food prep glove availability',
      description: 'Check availability of food preparation gloves',
      type: 'checkbox',
      multiple_choice_options: [],
      image_upload: 'optional'
    },
    {
      id: 'step-164',
      title: 'Walk-in cooler shelf stability',
      description: 'Check walk-in cooler shelf stability and safety',
      type: 'multiple_choice',
      multiple_choice_options: ['Stable', 'Minor issues', 'Needs repair', 'Unsafe'],
      image_upload: 'optional'
    },
    {
      id: 'step-165',
      title: 'Dish rack water drainage',
      description: 'Verify dish rack water drainage effectiveness',
      type: 'checkbox',
      multiple_choice_options: [],
      image_upload: 'optional'
    },
    {
      id: 'step-166',
      title: 'Food allergen signage',
      description: 'Check allergen awareness signage placement and visibility',
      type: 'multiple_choice',
      multiple_choice_options: ['Excellent placement', 'Good placement', 'Poor placement', 'No signage'],
      image_upload: 'required'
    },
    {
      id: 'step-167',
      title: 'Refrigerator light bulb replacement',
      description: 'Check refrigerator light bulb functionality',
      type: 'text',
      multiple_choice_options: [],
      image_upload: 'optional'
    },
    {
      id: 'step-168',
      title: 'Beverage station organization',
      description: 'Assess beverage station organization and efficiency',
      type: 'multiple_choice',
      multiple_choice_options: ['Well organized', 'Some issues', 'Poor organization', 'Needs major cleanup'],
      image_upload: 'required'
    },
    {
      id: 'step-169',
      title: 'Food processor cleaning procedures',
      description: 'Verify food processor cleaning procedures',
      type: 'checkbox',
      multiple_choice_options: [],
      image_upload: 'optional'
    },
    {
      id: 'step-170',
      title: 'Walk-in freezer air circulation',
      description: 'Check walk-in freezer air circulation patterns',
      type: 'text',
      multiple_choice_options: [],
      image_upload: 'optional'
    },
    {
      id: 'step-171',
      title: 'Dish machine maintenance schedule',
      description: 'Verify dish machine maintenance schedule compliance',
      type: 'multiple_choice',
      multiple_choice_options: ['Up to date', 'Minor delays', 'Major delays', 'No schedule'],
      image_upload: 'optional'
    },
    {
      id: 'step-172',
      title: 'Employee break schedule compliance',
      description: 'Check employee break schedule compliance',
      type: 'checkbox',
      multiple_choice_options: [],
      image_upload: 'disabled'
    },
    {
      id: 'step-173',
      title: 'Refrigeration unit noise levels',
      description: 'Check for abnormal refrigeration unit noise',
      type: 'multiple_choice',
      multiple_choice_options: ['Normal', 'Slightly noisy', 'Moderately noisy', 'Excessively noisy'],
      image_upload: 'optional'
    },
    {
      id: 'step-174',
      title: 'Beverage ice bin cleanliness',
      description: 'Inspect beverage ice bin cleanliness',
      type: 'text',
      multiple_choice_options: [],
      image_upload: 'required'
    },
    {
      id: 'step-175',
      title: 'Food thawing equipment calibration',
      description: 'Check food thawing equipment temperature calibration',
      type: 'checkbox',
      multiple_choice_options: [],
      image_upload: 'optional'
    },
    {
      id: 'step-176',
      title: 'Walk-in cooler humidity levels',
      description: 'Monitor walk-in cooler humidity levels',
      type: 'number',
      multiple_choice_options: [],
      image_upload: 'disabled'
    },
    {
      id: 'step-177',
      title: 'Dish rack drying time',
      description: 'Check dish rack drying time effectiveness',
      type: 'multiple_choice',
      multiple_choice_options: ['Excellent', 'Good', 'Needs improvement', 'Poor'],
      image_upload: 'optional'
    },
    {
      id: 'step-178',
      title: 'Food packaging contamination',
      description: 'Check food packaging for contamination risks',
      type: 'text',
      multiple_choice_options: [],
      image_upload: 'optional'
    },
    {
      id: 'step-179',
      title: 'Refrigerator energy efficiency',
      description: 'Assess refrigerator energy efficiency indicators',
      type: 'checkbox',
      multiple_choice_options: [],
      image_upload: 'optional'
    },
    {
      id: 'step-180',
      title: 'Beverage dispenser maintenance',
      description: 'Check beverage dispenser maintenance records',
      type: 'multiple_choice',
      multiple_choice_options: ['Up to date', 'Minor delays', 'Major delays', 'No records'],
      image_upload: 'optional'
    },
    {
      id: 'step-181',
      title: 'Food prep area ventilation',
      description: 'Verify food preparation area ventilation adequacy',
      type: 'checkbox',
      multiple_choice_options: [],
      image_upload: 'optional'
    },
    {
      id: 'step-182',
      title: 'Walk-in freezer temperature variation',
      description: 'Check temperature variation throughout walk-in freezer',
      type: 'text',
      multiple_choice_options: [],
      image_upload: 'optional'
    },
    {
      id: 'step-183',
      title: 'Dish machine water filtration',
      description: 'Check dish machine water filtration system',
      type: 'multiple_choice',
      multiple_choice_options: ['Clean', 'Needs cleaning', 'Clogged', 'No filter'],
      image_upload: 'optional'
    },
    {
      id: 'step-184',
      title: 'Employee hygiene documentation',
      description: 'Check employee hygiene documentation procedures',
      type: 'checkbox',
      multiple_choice_options: [],
      image_upload: 'disabled'
    },
    {
      id: 'step-185',
      title: 'Refrigeration unit age assessment',
      description: 'Assess refrigeration unit age and replacement needs',
      type: 'multiple_choice',
      multiple_choice_options: ['New', 'Good condition', 'Needs monitoring', 'Needs replacement'],
      image_upload: 'optional'
    },
    {
      id: 'step-186',
      title: 'Beverage syrup contamination',
      description: 'Check beverage syrup containers for contamination',
      type: 'text',
      multiple_choice_options: [],
      image_upload: 'optional'
    },
    {
      id: 'step-187',
      title: 'Food display case energy usage',
      description: 'Monitor food display case energy consumption',
      type: 'number',
      multiple_choice_options: [],
      image_upload: 'disabled'
    },
    {
      id: 'step-188',
      title: 'Walk-in cooler door sweep',
      description: 'Check walk-in cooler door sweep condition',
      type: 'multiple_choice',
      multiple_choice_options: ['Good condition', 'Minor wear', 'Needs replacement', 'Damaged'],
      image_upload: 'optional'
    },
    {
      id: 'step-189',
      title: 'Dish rack material quality',
      description: 'Inspect dish rack material quality and durability',
      type: 'checkbox',
      multiple_choice_options: [],
      image_upload: 'optional'
    },
    {
      id: 'step-190',
      title: 'Food allergen cross-contamination',
      description: 'Verify prevention of allergen cross-contamination',
      type: 'multiple_choice',
      multiple_choice_options: ['Excellent prevention', 'Good prevention', 'Needs improvement', 'High risk'],
      image_upload: 'optional'
    },
    {
      id: 'step-191',
      title: 'Refrigerator defrost drainage',
      description: 'Check refrigerator defrost water drainage',
      type: 'text',
      multiple_choice_options: [],
      image_upload: 'optional'
    },
    {
      id: 'step-192',
      title: 'Beverage station energy efficiency',
      description: 'Assess beverage station energy usage patterns',
      type: 'checkbox',
      multiple_choice_options: [],
      image_upload: 'optional'
    },
    {
      id: 'step-193',
      title: 'Walk-in freezer air quality',
      description: 'Check walk-in freezer air quality and odor',
      type: 'multiple_choice',
      multiple_choice_options: ['Excellent', 'Good', 'Needs attention', 'Poor'],
      image_upload: 'optional'
    },
    {
      id: 'step-194',
      title: 'Dish machine cycle optimization',
      description: 'Assess dish machine cycle time optimization',
      type: 'number',
      multiple_choice_options: [],
      image_upload: 'disabled'
    },
    {
      id: 'step-195',
      title: 'Food prep area ergonomics',
      description: 'Check food preparation area ergonomic design',
      type: 'text',
      multiple_choice_options: [],
      image_upload: 'optional'
    },
    {
      id: 'step-196',
      title: 'Refrigeration unit remote monitoring',
      description: 'Verify refrigeration unit remote monitoring functionality',
      type: 'checkbox',
      multiple_choice_options: [],
      image_upload: 'optional'
    },
    {
      id: 'step-197',
      title: 'Beverage dispenser water quality',
      description: 'Check beverage dispenser water quality and filtration',
      type: 'multiple_choice',
      multiple_choice_options: ['Excellent', 'Good', 'Needs filter', 'Poor quality'],
      image_upload: 'optional'
    },
    {
      id: 'step-198',
      title: 'Walk-in cooler inventory system',
      description: 'Assess walk-in cooler inventory management system',
      type: 'checkbox',
      multiple_choice_options: [],
      image_upload: 'optional'
    },
    {
      id: 'step-199',
      title: 'Dish rack environmental impact',
      description: 'Evaluate dish rack system environmental efficiency',
      type: 'text',
      multiple_choice_options: [],
      image_upload: 'optional'
    },
    {
      id: 'step-200',
      title: 'Final inspection summary',
      description: 'Provide overall assessment and recommendations',
      type: 'text',
      multiple_choice_options: [],
      image_upload: 'optional'
    }
  ]
};
