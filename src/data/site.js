export const company = {
  name: 'Sivasakthi',
  mark: 'SS',
  contactPerson: 'Sivasankar T',
  tagline: 'PVC, uPVC and aluminium solutions. Precisely installed.',
  phone: '6380613433',
  whatsapp: '916380613433',
  email: '[EMAIL ADDRESS]',
  address: '[BUSINESS ADDRESS]',
  hours: 'Mon - Sat / 9:00 AM - 6:30 PM',
  mapUrl: 'https://maps.google.com/?q=Coimbatore',
  mapEmbedUrl: 'https://www.google.com/maps?q=Coimbatore&output=embed',
  instagram: '#',
  facebook: '#',
  youtube: '#',
}

const image = (id, width = 1200) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`

export const services = [
  { slug: 'pvc-windows', category: 'PVC Products', title: 'PVC Windows', eyebrow: '01 / Window systems', description: 'Durable PVC window systems that bring in light without the maintenance burden.', image: image('photo-1600607687920-4e2a09cf159d'), benefits: ['Low maintenance finishes', 'Contemporary profiles', 'Professional installation'] },
  { slug: 'pvc-cupboards', category: 'PVC Products', title: 'PVC Cupboards', eyebrow: '02 / Storage', description: 'Hard-working storage designed around the way your home actually moves.', image: image('photo-1558997519-83ea9252edf8'), benefits: ['Moisture-friendly materials', 'Flexible internal layouts', 'Easy-clean finishes'] },
  { slug: 'pvc-wardrobes', category: 'PVC Products', title: 'PVC Wardrobes', eyebrow: '03 / Bedroom storage', description: 'Custom wardrobe storage with durable shutters, practical layouts and a clean finish.', image: image('photo-1558997519-83ea9252edf8'), benefits: ['Custom internal storage', 'Moisture-resistant boards', 'Made-to-fit installation'] },
  { slug: 'pvc-kitchens', category: 'PVC Products', title: 'PVC Kitchen Cabinets', eyebrow: '04 / Kitchen systems', description: 'Practical kitchens with considered proportions, resilient finishes and calm lines.', image: image('photo-1600566753086-00f18fb6b3ea'), benefits: ['Custom cabinet planning', 'Durable shutters', 'Efficient storage planning'] },
  { slug: 'pvc-interior-design', category: 'Interior Works', title: 'PVC Interior Design', eyebrow: '05 / Complete interiors', description: 'One coherent material language for rooms that feel complete, not crowded.', image: image('photo-1600607688969-a5bfcd646154'), benefits: ['End-to-end coordination', 'Material guidance', 'Installation-led design'] },
  { slug: 'pvc-false-ceiling', category: 'Interior Works', title: 'PVC False Ceiling', eyebrow: '06 / Ceiling systems', description: 'Neat, durable ceiling solutions that bring a finished look to any room.', image: image('photo-1600210492486-724fe5c67fb0'), benefits: ['Lightweight panels', 'Clean service access', 'Professional finishing'] },
  { slug: 'pvc-wall-panels', category: 'Interior Works', title: 'PVC Wall Panels', eyebrow: '07 / Wall finishes', description: 'Low-maintenance wall finishes that add texture, protection and a considered look.', image: image('photo-1600494603989-9650cf6ddd3d'), benefits: ['Easy-clean surfaces', 'Multiple finish options', 'Fast installation'] },
  { slug: 'pooja-room-interiors', category: 'Interior Works', title: 'Pooja Room Interiors', eyebrow: '08 / Sacred spaces', description: 'Serene, purposeful spaces shaped around light, proportion and everyday ritual.', image: image('photo-1600210492486-724fe5c67fb0'), benefits: ['Personalised detailing', 'Warm lighting planning', 'Thoughtful storage'] },
  { slug: 'pvc-partitions', category: 'Interior Works', title: 'PVC Partition Works', eyebrow: '09 / Dividers', description: 'Flexible room-making for homes, workspaces and evolving floor plans.', image: image('photo-1497366754035-f200968a6e72'), benefits: ['Fast installation', 'Flexible layouts', 'Private work zones'] },
  { slug: 'pvc-bathroom-storage', category: 'Interior Works', title: 'PVC Bathroom/Utility Storage', eyebrow: '10 / Utility storage', description: 'Moisture-friendly storage for bathrooms, utility areas and hardworking corners.', image: image('photo-1600494603989-9650cf6ddd3d'), benefits: ['Moisture-friendly materials', 'Easy-clean finishes', 'Compact custom layouts'] },
  { slug: 'pvc-office-interiors', category: 'Interior Works', title: 'PVC Office Interiors', eyebrow: '11 / Workspaces', description: 'Functional and professional PVC interiors that help teams work comfortably.', image: image('photo-1497366754035-f200968a6e72'), benefits: ['Practical zoning', 'Durable work surfaces', 'Professional installation'] },
  { slug: 'pvc-bedroom-interiors', category: 'Interior Works', title: 'PVC Bedroom Interiors', eyebrow: '12 / Bedrooms', description: 'Calm, practical bedroom interiors with storage, panels and finishes planned together.', image: image('photo-1558997519-83ea9252edf8'), benefits: ['Coordinated storage', 'Comfortable layouts', 'Durable finishes'] },
  { slug: 'pvc-living-room-interiors', category: 'Interior Works', title: 'PVC Living Room Interiors', eyebrow: '13 / Living rooms', description: 'Welcoming living spaces with balanced storage, wall finishes and clean detailing.', image: image('photo-1600607688969-a5bfcd646154'), benefits: ['Purposeful layouts', 'Wall and storage planning', 'Clean installation'] },
  { slug: 'custom-pvc-furniture', category: 'Custom Works', title: 'Custom PVC Furniture', eyebrow: '14 / Bespoke furniture', description: 'Furniture designed around your measurements, needs and preferred finish.', image: image('photo-1600607687920-4e2a09cf159d'), benefits: ['Requirement-led planning', 'Custom detailing', 'Single-point coordination'] },
  { slug: 'other-pvc-works', category: 'Custom Works', title: 'Other PVC-related Works', eyebrow: '15 / Other works', description: 'Have a specific PVC interior or installation idea in mind? We make the details work.', image: image('photo-1600607688969-a5bfcd646154'), benefits: ['Flexible scope', 'Custom detailing', 'Clear quotation'] },
]

const relatedImageIds = [
  'photo-1497366754035-f200968a6e72', 'photo-1600494603989-9650cf6ddd3d', 'photo-1558997519-83ea9252edf8',
  'photo-1600566753190-17f0baa2a6c3', 'photo-1600607687920-4e2a09cf159d', 'photo-1600210492486-724fe5c67fb0',
  'photo-1600566753086-00f18fb6b3ea', 'photo-1600607688969-a5bfcd646154', 'photo-1497366754035-f200968a6e72',
  'photo-1600494603989-9650cf6ddd3d', 'photo-1497366754035-f200968a6e72', 'photo-1558997519-83ea9252edf8',
  'photo-1600607688969-a5bfcd646154', 'photo-1600607687920-4e2a09cf159d', 'photo-1600566753190-17f0baa2a6c3',
]

export const relatedImages = services.map((service, index) => ({ serviceSlug: service.slug, src: image(relatedImageIds[index]) }))

export const serviceCategories = ['All Services', 'PVC Products', 'Windows & Glass', 'Storage & Furniture', 'Interior Works', 'Custom Works']

export const gallery = [
  ...services.map((service) => ({ title: service.title, category: service.title, type: 'image', image: service.image, serviceSlug: service.slug })),
]

export const testimonials = [
  { quote: 'Placeholder testimonial. A customer review will be added here once the first project stories are ready to share.', name: 'Customer name', detail: 'Verified project review' },
  { quote: 'Placeholder testimonial. Replace this with a real experience from a completed PVC interior project.', name: 'Customer name', detail: 'Residential project' },
  { quote: 'Placeholder testimonial. Clear communication, careful installation and a result worth coming home to.', name: 'Customer name', detail: 'Demo review' },
]

export const process = [
  ['01', 'Consultation', 'A focused conversation about your space, needs and priorities.'],
  ['02', 'Site visit', 'We understand the room, take measurements and look at the details.'],
  ['03', 'Design', 'A considered direction for materials, storage, light and finish.'],
  ['04', 'Installation', 'Skilled fitting, tidy coordination and a proper final handover.'],
]

export const whyUs = [
  ['01', 'Material clarity', 'Straightforward guidance on finishes, use and upkeep.'],
  ['02', 'Measured design', 'Every cabinet, panel and partition is planned for its room.'],
  ['03', 'Careful fitting', 'A professional installation experience from first cut to final check.'],
  ['04', 'One conversation', 'A clear point of contact across design, making and installation.'],
]
