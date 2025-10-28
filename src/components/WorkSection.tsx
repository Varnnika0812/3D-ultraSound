import { ImageWithFallback } from './figma/ImageWithFallback';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  size?: 'large' | 'medium';
}

const workProjects: Project[] = [
  {
    id: 1,
    title: 'Future Patio',
    category: 'Outdoor Design',
    image: 'https://images.unsplash.com/photo-1758980960353-2fedd7b40bea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwcGF0aW8lMjBmdXJuaXR1cmV8ZW58MXx8fHwxNzYwMTE0MTQwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    size: 'large'
  },
  {
    id: 2,
    title: 'Eternal Playground',
    category: 'Furniture',
    image: 'https://images.unsplash.com/photo-1678115995736-699ac9dc6b3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVja2VycyUyMGdhbWUlMjBkZXNpZ258ZW58MXx8fHwxNzYwMTE0MTQwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    size: 'medium'
  },
  {
    id: 3,
    title: 'Colorful Seating',
    category: 'Furniture',
    image: 'https://images.unsplash.com/photo-1668786977632-98d3fc392193?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMG1vZGVybiUyMGZ1cm5pdHVyZXxlbnwxfHx8fDE3NjAxMTQxNDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    size: 'medium'
  },
  {
    id: 4,
    title: 'Modern Cabinet',
    category: 'Interior',
    image: 'https://images.unsplash.com/photo-1678555815116-52c1b10517f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBjYWJpbmV0JTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYwMDc5NzA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    size: 'medium'
  }
];

export function WorkSection() {
  return (
    <div className="px-6 mb-12">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-8">
          <div className="relative group rounded-lg overflow-hidden cursor-pointer" style={{ height: '260px' }}>
            <ImageWithFallback
              src={workProjects[0].image}
              alt={workProjects[0].title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-4 right-4 bg-white rounded-lg px-4 py-3 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="text-black">{workProjects[0].title}</div>
              <div className="text-neutral-400">{workProjects[0].category}</div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-6">
          {workProjects.slice(1).map((project) => (
            <div
              key={project.id}
              className="relative group cursor-pointer overflow-hidden rounded-lg"
              style={{ height: '280px' }}
            >
              <ImageWithFallback
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-4 right-4 bg-white rounded-lg px-4 py-3 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-black">{project.title}</div>
                <div className="text-neutral-400">{project.category}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
