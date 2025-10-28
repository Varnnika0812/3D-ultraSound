import { ImageWithFallback } from './figma/ImageWithFallback';
import introVideo from 'figma:asset/a329a55047f6225b07cf0c3e57acc93f1594db39.png';
import workingMechVideo from 'figma:asset/356df669dcf5c04d45622f87ee64dd2d97850c6a.png';
import instrumentationVideo from 'figma:asset/aecc6ded0578da24a2ef24de499c099526afd2d0.png';

interface HomePageProps {
  onNavigate: (tab: string) => void;
}

interface Topic {
  id: string;
  title: string;
  description: string;
  video?: string;
}

const topics: Topic[] = [
  {
    id: 'introduction',
    title: 'Introduction',
    description: 'Overview of 3D Ultrasound Imaging technology',
    video: introVideo
  },
  {
    id: 'history',
    title: 'History',
    description: 'Evolution of 3D ultrasound technology'
  },
  {
    id: 'working-mechanism',
    title: 'Working Mechanism',
    description: 'Technical principles of 3D ultrasound',
    video: workingMechVideo
  },
  {
    id: 'instrumentation',
    title: 'Instrumentation',
    description: 'Components of 3D ultrasound systems',
    video: instrumentationVideo
  },
  {
    id: 'advantages',
    title: 'Advantages',
    description: 'Benefits of 3D ultrasound imaging'
  },
  {
    id: 'disadvantages',
    title: 'Disadvantages',
    description: 'Limitations and challenges'
  }
];

export function PortfolioGrid({ onNavigate }: HomePageProps) {
  return (
    <div className="px-6">
      <div className="max-w-[1400px] mx-auto">
        {/* Hero Section */}
        <div 
          className="relative rounded-lg overflow-hidden mb-6 cursor-pointer group"
          style={{ height: '500px' }}
          onClick={() => onNavigate('introduction')}
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1691935152546-3a9e05f4010b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzRCUyMHVsdHJhc291bmQlMjBtZWRpY2FsJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjA0MzgzMDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="3D Ultrasound Imaging"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute bottom-8 right-8 bg-white rounded-lg px-6 py-4 shadow-lg">
            <div className="mb-1">3D Ultrasound</div>
            <div className="text-neutral-400">Medical Imaging</div>
          </div>
        </div>

        {/* Topic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic) => (
            <div
              key={topic.id}
              onClick={() => onNavigate(topic.id)}
              className="relative rounded-lg overflow-hidden cursor-pointer group"
              style={{ height: '320px' }}
            >
              {topic.video ? (
                <>
                  <img
                    src={topic.video}
                    alt={topic.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                    <div className="text-center text-white">
                      <h3 className="text-white mb-2">{topic.title}</h3>
                      <p className="text-white text-opacity-90">{topic.description}</p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="absolute inset-0 bg-gradient-to-br from-neutral-100 to-neutral-200" />
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                    <div className="text-center">
                      <h3 className="text-black mb-2">{topic.title}</h3>
                      <p className="text-neutral-600">{topic.description}</p>
                    </div>
                  </div>
                </>
              )}
              <div className="absolute bottom-6 right-6 bg-white rounded-lg px-4 py-2 shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-black">Explore →</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
