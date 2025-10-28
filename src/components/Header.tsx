interface HeaderProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function Header({ activeTab, onTabChange }: HeaderProps) {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'introduction', label: 'Introduction' },
    { id: 'history', label: 'History' },
    { id: 'working-mechanism', label: 'Technology' },
    { id: 'instrumentation', label: 'Equipment' },
    { id: 'about', label: 'About' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-500 via-blue-600 to-purple-600 shadow-lg">
      <div className="max-w-[1400px] mx-auto px-8 py-6">
        <div className="flex justify-between items-center">
          <button 
            onClick={() => onTabChange('home')}
            className="text-white uppercase tracking-wider hover:opacity-70 transition-opacity"
            style={{ fontSize: '1.5rem', fontWeight: '700' }}
          >
            3D Imaging
          </button>
          
          <nav className="flex gap-8 items-center">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onTabChange(item.id)}
                className={`text-white transition-all duration-300 ${
                  activeTab === item.id 
                    ? 'opacity-100 font-medium' 
                    : 'opacity-70 hover:opacity-100'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
          
          <div className="flex gap-4 items-center">
            <button className="w-10 h-10 rounded-full bg-white bg-opacity-20 backdrop-blur-sm flex items-center justify-center hover:bg-opacity-30 transition-all duration-300">
              <span className="text-white">👤</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
