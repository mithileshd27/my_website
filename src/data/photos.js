// Each photo has: id, category, height, title, location, svgContent
// Replace svgContent with an <img src="..."> by swapping the PhotoItem component.
export const photos = [
  {
    id: 1,
    category: 'wildlife',
    height: 320,
    title: 'Golden Vigil',
    location: 'Wildlife · Tanzania',
    gradient: { x1: '#1a1209', x2: '#2d1f0a', dir: 'diagonal' },
  },
  {
    id: 2,
    category: 'landscape',
    height: 420,
    title: 'Arctic Skies',
    location: 'Landscape · Iceland',
    gradient: { x1: '#0a1520', x2: '#0d0a06', dir: 'vertical' },
  },
  {
    id: 3,
    category: 'wildlife',
    height: 260,
    title: 'Thermal Ascent',
    location: 'Wildlife · Scotland',
    gradient: { x1: '#101a08', x2: '#1a2a0d', dir: 'horizontal' },
  },
  {
    id: 4,
    category: 'landscape',
    height: 350,
    title: 'First Light',
    location: 'Landscape · Italy',
    gradient: { x1: '#1a0a06', x2: '#0d0806', dir: 'vertical' },
  },
  {
    id: 5,
    category: 'wildlife',
    height: 380,
    title: 'The Deep',
    location: 'Wildlife · Pacific Ocean',
    gradient: { x1: '#050a10', x2: '#0a1520', dir: 'diagonal' },
  },
  {
    id: 6,
    category: 'landscape',
    height: 280,
    title: 'Mirror Water',
    location: 'Landscape · Norway',
    gradient: { x1: '#0a0808', x2: '#251d0f', dir: 'vertical' },
  },
]
