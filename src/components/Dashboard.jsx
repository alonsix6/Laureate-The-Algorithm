import { useState, useEffect } from 'react';
import { TrendingUp, Search, Target, Zap, Calendar, GraduationCap } from 'lucide-react';
import DataLayer from './DataLayer';
import DecisionLayer from './DecisionLayer';
import ExecutionLayer from './ExecutionLayer';
import OptimizationLayer from './OptimizationLayer';
import { BRAND_CONFIG, LAYER_CONFIG, UI_TEXT } from '../data/config';

export default function Dashboard() {
  const [activeLayer, setActiveLayer] = useState('data');
  const [lastUpdate, setLastUpdate] = useState(new Date());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 800);

    const interval = setInterval(() => {
      setLastUpdate(new Date());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const iconMap = {
    Search,
    Target,
    Zap,
    TrendingUp,
  };

  const layers = [
    {
      id: 'data',
      name: LAYER_CONFIG.data.name,
      icon: iconMap[LAYER_CONFIG.data.icon],
      description: LAYER_CONFIG.data.description,
      color: 'bg-fitzone-purple',
      activeText: 'text-white',
    },
    {
      id: 'decision',
      name: LAYER_CONFIG.decision.name,
      icon: iconMap[LAYER_CONFIG.decision.icon],
      description: LAYER_CONFIG.decision.description,
      color: 'bg-fitzone-cyan',
      activeText: 'text-white',
    },
    {
      id: 'execution',
      name: LAYER_CONFIG.execution.name,
      icon: iconMap[LAYER_CONFIG.execution.icon],
      description: LAYER_CONFIG.execution.description,
      color: 'bg-fitzone-emerald',
      activeText: 'text-white',
    },
    {
      id: 'optimization',
      name: LAYER_CONFIG.optimization.name,
      icon: iconMap[LAYER_CONFIG.optimization.icon],
      description: LAYER_CONFIG.optimization.description,
      color: 'bg-fitzone-amber',
      activeText: 'text-white',
    }
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-fitzone-charcoal flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-fitzone-purple border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-fitzone-navy text-lg font-medium">{UI_TEXT.loading}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-fitzone-charcoal">
      {/* Header — dark navy, enterprise style */}
      <header className="bg-upn-navy text-white shadow-nav border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-fitzone-purple rounded-lg flex items-center justify-center flex-shrink-0 shadow-fitzone-glow">
                <GraduationCap className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </div>
              <div className="min-w-0">
                <h1 className="text-xl sm:text-2xl font-bold tracking-tight">{BRAND_CONFIG.name}</h1>
                <p className="text-white/80 text-xs sm:text-sm mt-0.5 font-medium">
                  {BRAND_CONFIG.tagline}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 sm:gap-4 self-end sm:self-auto">
              <div className="text-right">
                <p className="text-xs text-white/50 flex items-center justify-end gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">{UI_TEXT.lastUpdate}</span>
                  <span className="sm:hidden">Actualizado</span>
                </p>
                <p className="text-xs sm:text-sm font-medium text-white/90 whitespace-nowrap">
                  {lastUpdate.toLocaleString('es-PE', {
                    day: '2-digit',
                    month: 'short',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </p>
              </div>
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors duration-200 flex-shrink-0">
                <Zap className="w-5 h-5 text-fitzone-purple" fill="currentColor" />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Layer Navigation — dark sub-header */}
      <div className="bg-upn-deepNavy border-b border-white/10 sticky top-0 z-40 shadow-nav">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto py-3 scrollbar-hide">
            {layers.map((layer) => {
              const Icon = layer.icon;
              const isActive = activeLayer === layer.id;

              return (
                <button
                  key={layer.id}
                  onClick={() => setActiveLayer(layer.id)}
                  className={`
                    flex-shrink-0 flex items-center gap-3 px-4 py-3 rounded-lg font-medium btn-press
                    transition-colors duration-200
                    ${isActive
                      ? `${layer.color} text-white shadow-fitzone`
                      : 'bg-white/5 text-white/50 hover:bg-white/10 hover:text-white/90 border border-white/10 hover:border-fitzone-purple/40'
                    }
                  `}
                >
                  <Icon className={`w-4 h-4 flex-shrink-0 ${isActive ? '' : 'opacity-70'}`} />
                  <div className="text-left min-w-0">
                    <p className="text-xs font-semibold whitespace-nowrap">{layer.name}</p>
                    <p className={`text-[10px] whitespace-nowrap ${isActive ? 'text-white/80' : 'text-white/40'}`}>
                      {layer.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Content — light background */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="animate-fadeIn">
          {activeLayer === 'data' && <DataLayer />}
          {activeLayer === 'decision' && <DecisionLayer />}
          {activeLayer === 'execution' && <ExecutionLayer />}
          {activeLayer === 'optimization' && <OptimizationLayer />}
        </div>
      </main>

      {/* Footer — dark to match header */}
      <footer className="bg-upn-navy border-t border-white/10 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
            <p className="text-xs sm:text-sm text-center sm:text-left text-white/50">
              {UI_TEXT.footer.copyright}
            </p>
            <div className="flex items-center gap-3 sm:gap-4">
              <span className="flex items-center gap-2 text-xs sm:text-sm text-white/50">
                <div className="w-2 h-2 bg-fitzone-emerald rounded-full animate-pulse"></div>
                {UI_TEXT.systemActive}
              </span>
              <span className="text-fitzone-purple font-semibold text-xs sm:text-sm">{UI_TEXT.footer.version}</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
