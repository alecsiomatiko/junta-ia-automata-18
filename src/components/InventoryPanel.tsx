import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Package, Mic, CheckCircle2, Clock, AlertTriangle, TrendingUp, BarChart3, Database, Search, Filter } from "lucide-react";
import { useState } from "react";

interface InventoryItem {
  id: string;
  name: string;
  category: string;
  currentStock: number;
  minStock: number;
  unit: string;
  recentUsage: number;
  lastUpdated: string;
  status: 'normal' | 'low' | 'critical';
}

interface ServiceLog {
  id: string;
  technician: string;
  equipment: string;
  itemsUsed: { name: string; quantity: number; unit: string }[];
  status: 'pending' | 'approved' | 'rejected';
  timestamp: string;
  audioTranscript: string;
}

const mockInventoryData: InventoryItem[] = [
  {
    id: '1',
    name: 'Filtro de Aire HEPA',
    category: 'Filtros',
    currentStock: 15,
    minStock: 10,
    unit: 'pzas',
    recentUsage: 3,
    lastUpdated: '2024-01-15 14:30',
    status: 'normal'
  },
  {
    id: '2',
    name: 'Refrigerante R410A',
    category: 'Refrigerantes',
    currentStock: 5,
    minStock: 8,
    unit: 'kg',
    recentUsage: 2,
    lastUpdated: '2024-01-15 12:15',
    status: 'low'
  },
  {
    id: '3',
    name: 'Correa de Transmisión',
    category: 'Componentes',
    currentStock: 2,
    minStock: 5,
    unit: 'pzas',
    recentUsage: 1,
    lastUpdated: '2024-01-15 09:45',
    status: 'critical'
  }
];

const mockServiceLogs: ServiceLog[] = [
  {
    id: '1',
    technician: 'Juan Pérez',
    equipment: 'Unidad HVAC - Piso 3',
    itemsUsed: [
      { name: 'Filtro de Aire HEPA', quantity: 2, unit: 'pzas' },
      { name: 'Refrigerante R410A', quantity: 1, unit: 'kg' }
    ],
    status: 'approved',
    timestamp: '2024-01-15 14:30',
    audioTranscript: 'Mantenimiento preventivo completado. Reemplacé dos filtros HEPA y agregué 1 kg de refrigerante R410A.'
  },
  {
    id: '2',
    technician: 'María González',
    equipment: 'Chiller Principal',
    itemsUsed: [
      { name: 'Correa de Transmisión', quantity: 1, unit: 'pzas' }
    ],
    status: 'pending',
    timestamp: '2024-01-15 16:45',
    audioTranscript: 'Reparación de emergencia. La correa de transmisión falló, instalé una nueva. Revisar stock.'
  }
];

export const InventoryPanel = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'logs' | 'analytics'>('overview');

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'normal': return 'bg-primary/10 text-primary border-primary/30';
      case 'low': return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'critical': return 'bg-red-100 text-red-800 border-red-200';
      case 'approved': return 'bg-primary/10 text-primary border-primary/30';
      case 'pending': return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'rejected': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-muted text-muted-foreground border-border';
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3">
          <div className="p-3 rounded-xl bg-primary/10 backdrop-blur-md">
            <Database className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-3xl font-light text-foreground">Panel de Control de Inventarios</h2>
        </div>
        <p className="text-lg font-light text-muted-foreground max-w-3xl mx-auto">
          ¡Órale! Este panel es la onda máxima para manejar tu inventario, compadre. Aquí la IA procesa automáticamente todas las bitácoras que grabas por voz y actualiza el stock en tiempo real. ¡Es como tener un asistente súper inteligente que nunca se equivoca!
        </p>
      </div>

      {/* Navigation Tabs */}
      <div className="flex justify-center">
        <div className="liquid-glass-intense rounded-full p-2 flex gap-2">
          <Button
            variant={activeTab === 'overview' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('overview')}
            className="rounded-full px-6"
          >
            <Package className="h-4 w-4 mr-2" />
            Inventario
          </Button>
          <Button
            variant={activeTab === 'logs' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('logs')}
            className="rounded-full px-6"
          >
            <Mic className="h-4 w-4 mr-2" />
            Bitácoras
          </Button>
          <Button
            variant={activeTab === 'analytics' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('analytics')}
            className="rounded-full px-6"
          >
            <BarChart3 className="h-4 w-4 mr-2" />
            Análisis
          </Button>
        </div>
      </div>

      {/* Content based on active tab */}
      {activeTab === 'overview' && (
        <div className="space-y-6">
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="liquid-glass-intense p-6 text-center space-y-3">
              <div className="p-3 rounded-xl bg-primary/10 w-fit mx-auto">
                <Package className="h-6 w-6 text-primary" />
              </div>
              <div className="text-2xl font-light text-foreground">247</div>
              <div className="text-sm text-muted-foreground">Total Items</div>
            </div>
            
            <div className="liquid-glass-intense p-6 text-center space-y-3">
              <div className="p-3 rounded-xl bg-amber-500/10 w-fit mx-auto">
                <AlertTriangle className="h-6 w-6 text-amber-600" />
              </div>
              <div className="text-2xl font-light text-foreground">8</div>
              <div className="text-sm text-muted-foreground">Stock Bajo</div>
            </div>
            
            <div className="liquid-glass-intense p-6 text-center space-y-3">
              <div className="p-3 rounded-xl bg-primary/10 w-fit mx-auto">
                <CheckCircle2 className="h-6 w-6 text-primary" />
              </div>
              <div className="text-2xl font-light text-foreground">156</div>
              <div className="text-sm text-muted-foreground">Bitácoras Procesadas</div>
            </div>
            
            <div className="liquid-glass-intense p-6 text-center space-y-3">
              <div className="p-3 rounded-xl bg-accent/10 w-fit mx-auto">
                <TrendingUp className="h-6 w-6 text-accent" />
              </div>
              <div className="text-2xl font-light text-foreground">94%</div>
              <div className="text-sm text-muted-foreground">Precisión IA</div>
            </div>
          </div>

          {/* Inventory Table */}
          <div className="liquid-glass-intense p-6">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-medium text-foreground">Estado de Inventario</h3>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Search className="h-4 w-4 mr-2" />
                    Buscar
                  </Button>
                  <Button variant="outline" size="sm">
                    <Filter className="h-4 w-4 mr-2" />
                    Filtrar
                  </Button>
                </div>
              </div>
              
              <div className="space-y-3">
                {mockInventoryData.map((item) => (
                  <div key={item.id} className="liquid-glass p-4 space-y-3">
                    <div className="flex justify-between items-start">
                      <div className="space-y-1">
                        <h4 className="font-medium text-foreground">{item.name}</h4>
                        <p className="text-sm text-muted-foreground">{item.category}</p>
                      </div>
                      <Badge className={`${getStatusColor(item.status)} border`}>
                        {item.status === 'normal' ? 'Normal' : 
                         item.status === 'low' ? 'Stock Bajo' : 'Crítico'}
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Stock Actual: </span>
                        <span className="font-medium text-foreground">{item.currentStock} {item.unit}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Mínimo: </span>
                        <span className="font-medium text-foreground">{item.minStock} {item.unit}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Uso Reciente: </span>
                        <span className="font-medium text-foreground">{item.recentUsage} {item.unit}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'logs' && (
        <div className="space-y-6">
          <div className="liquid-glass-intense p-6">
            <div className="space-y-4">
              <h3 className="text-xl font-medium text-foreground">Bitácoras de Servicio Recientes</h3>
              
              <div className="space-y-4">
                {mockServiceLogs.map((log) => (
                  <div key={log.id} className="liquid-glass p-6 space-y-4">
                    <div className="flex justify-between items-start">
                      <div className="space-y-2">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-primary/10">
                            <Mic className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium text-foreground">{log.equipment}</h4>
                            <p className="text-sm text-muted-foreground">Técnico: {log.technician}</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className={`${getStatusColor(log.status)} border`}>
                          {log.status === 'approved' ? 'Aprobado' : 
                           log.status === 'pending' ? 'Pendiente' : 'Rechazado'}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{log.timestamp}</span>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <h5 className="text-sm font-medium text-foreground mb-2">Transcripción de Audio:</h5>
                        <p className="text-sm text-muted-foreground bg-muted/30 p-3 rounded-lg">
                          "{log.audioTranscript}"
                        </p>
                      </div>
                      
                      <div>
                        <h5 className="text-sm font-medium text-foreground mb-2">Materiales Utilizados:</h5>
                        <div className="space-y-2">
                          {log.itemsUsed.map((item, index) => (
                            <div key={index} className="flex justify-between items-center bg-muted/20 p-2 rounded">
                              <span className="text-sm text-foreground">{item.name}</span>
                              <span className="text-sm font-medium text-primary">{item.quantity} {item.unit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {log.status === 'pending' && (
                      <div className="flex gap-2 pt-2">
                        <Button size="sm" variant="default">
                          <CheckCircle2 className="h-4 w-4 mr-2" />
                          Aprobar
                        </Button>
                        <Button size="sm" variant="outline">
                          Rechazar
                        </Button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'analytics' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="liquid-glass-intense p-6">
              <h3 className="text-xl font-medium text-foreground mb-4">Tendencias de Consumo</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Filtros HEPA</span>
                  <div className="flex items-center gap-2">
                    <div className="w-24 h-2 bg-muted/30 rounded-full overflow-hidden">
                      <div className="w-16 h-full bg-primary rounded-full"></div>
                    </div>
                    <span className="text-sm font-medium text-foreground">67%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Refrigerantes</span>
                  <div className="flex items-center gap-2">
                    <div className="w-24 h-2 bg-muted/30 rounded-full overflow-hidden">
                      <div className="w-20 h-full bg-primary rounded-full"></div>
                    </div>
                    <span className="text-sm font-medium text-foreground">83%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Componentes</span>
                  <div className="flex items-center gap-2">
                    <div className="w-24 h-2 bg-muted/30 rounded-full overflow-hidden">
                      <div className="w-12 h-full bg-amber-500 rounded-full"></div>
                    </div>
                    <span className="text-sm font-medium text-foreground">50%</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="liquid-glass-intense p-6">
              <h3 className="text-xl font-medium text-foreground mb-4">Alertas Inteligentes</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-amber-50/50 rounded-lg border border-amber-200/50">
                  <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Reabastecimiento Sugerido</p>
                    <p className="text-xs text-muted-foreground">Refrigerante R410A alcanzará nivel crítico en 3 días</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-primary/5 rounded-lg border border-primary/20">
                  <TrendingUp className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Patrón Detectado</p>
                    <p className="text-xs text-muted-foreground">Aumento en uso de filtros HEPA (+15% vs mes anterior)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};