import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  BarChart3, 
  Users, 
  Mic, 
  CheckSquare, 
  FileText, 
  Image, 
  MessageCircle, 
  Phone, 
  Clock, 
  Calendar,
  TrendingUp,
  Bot,
  Brain,
  Activity,
  Zap,
  Settings,
  Download,
  Play,
  Pause,
  Volume2,
  Package,
  ShoppingCart,
  UserCheck,
  AlertTriangle,
  Target,
  Award,
  PieChart,
  Filter,
  Search,
  ChevronDown,
  Plus,
  DollarSign
} from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";

const Admin = () => {
  const [selectedArea, setSelectedArea] = useState("all");
  const [selectedTeam, setSelectedTeam] = useState("all");
  const [timeFrame, setTimeFrame] = useState("week");

  // Datos específicos del depósito dental extraídos de Juntify
  const dentalAreas = [
    { 
      name: "Ventas", 
      team: "Equipo Comercial", 
      tasksCompleted: 87, 
      totalTasks: 95, 
      efficiency: 91.6,
      lead: "María González",
      criticalTasks: 3,
      revenue: "$125,340"
    },
    { 
      name: "Inventario", 
      team: "Almacén", 
      tasksCompleted: 142, 
      totalTasks: 150, 
      efficiency: 94.7,
      lead: "Carlos Ruiz",
      criticalTasks: 2,
      revenue: "N/A"
    },
    { 
      name: "Atención Cliente", 
      team: "Soporte", 
      tasksCompleted: 234, 
      totalTasks: 267, 
      efficiency: 87.6,
      lead: "Ana Martínez",
      criticalTasks: 8,
      revenue: "N/A"
    },
    { 
      name: "Logística", 
      team: "Distribución", 
      tasksCompleted: 76, 
      totalTasks: 82, 
      efficiency: 92.7,
      lead: "Pedro Silva",
      criticalTasks: 1,
      revenue: "$18,450"
    },
    { 
      name: "Administración", 
      team: "Backoffice", 
      tasksCompleted: 45, 
      totalTasks: 52, 
      efficiency: 86.5,
      lead: "Laura Torres",
      criticalTasks: 4,
      revenue: "N/A"
    }
  ];

  const criticalTasks = [
    {
      id: 1,
      title: "Resolver problema stock implantes premium",
      area: "Inventario",
      assignee: "Carlos Ruiz",
      priority: "Alta",
      dueDate: "Hoy",
      status: "En progreso",
      extractedFrom: "Reunión semanal inventario - 14:30"
    },
    {
      id: 2,
      title: "Seguimiento pedido urgente Clínica San José",
      area: "Ventas",
      assignee: "María González",
      priority: "Crítica",
      dueDate: "Hoy",
      status: "Pendiente",
      extractedFrom: "Llamada cliente - 09:15"
    },
    {
      id: 3,
      title: "Capacitación nuevos productos ortodoncia",
      area: "Atención Cliente",
      assignee: "Ana Martínez",
      priority: "Media",
      dueDate: "Mañana",
      status: "Programada",
      extractedFrom: "WhatsApp equipo soporte"
    },
    {
      id: 4,
      title: "Revisar contratos proveedores Q1",
      area: "Administración",
      assignee: "Laura Torres",
      priority: "Alta",
      dueDate: "Esta semana",
      status: "En revisión",
      extractedFrom: "Reunión administrativa - 16:00"
    },
    {
      id: 5,
      title: "Optimizar ruta entrega zona norte",
      area: "Logística",
      assignee: "Pedro Silva",
      priority: "Media",
      dueDate: "Próxima semana",
      status: "Planificando",
      extractedFrom: "Análisis mensual logística"
    }
  ];

  const salesMetrics = [
    { product: "Implantes Premium", sold: 145, target: 180, revenue: "$87,500" },
    { product: "Brackets Metálicos", sold: 89, target: 75, revenue: "$23,400" },
    { product: "Materiales Endodoncia", sold: 234, target: 200, revenue: "$45,600" },
    { product: "Instrumentos Quirúrgicos", sold: 67, target: 90, revenue: "$125,300" }
  ];

  const teamPerformance = [
    { member: "María González", role: "Gerente Ventas", tasksCompleted: 23, efficiency: 95.8, meetings: 8 },
    { member: "Carlos Ruiz", role: "Jefe Almacén", tasksCompleted: 45, efficiency: 94.2, meetings: 5 },
    { member: "Ana Martínez", role: "Líder Soporte", tasksCompleted: 67, efficiency: 89.1, meetings: 12 },
    { member: "Pedro Silva", role: "Coord. Logística", tasksCompleted: 34, efficiency: 91.7, meetings: 6 },
    { member: "Laura Torres", role: "Admin. General", tasksCompleted: 28, efficiency: 88.3, meetings: 9 }
  ];

  const recentInsights = [
    {
      type: "opportunity",
      title: "Aumento demanda implantes en zona sur",
      description: "Análisis de llamadas revela 35% más consultas sobre implantes premium en clínicas zona sur",
      actionRequired: "Aumentar stock y personal de ventas",
      confidence: 87,
      source: "Análisis conversaciones WhatsApp + Llamadas"
    },
    {
      type: "alert",
      title: "Retraso en entregas zona norte",
      description: "Patrón identificado: 15% de entregas con retraso por problemas de tráfico",
      actionRequired: "Optimizar rutas y horarios de entrega",
      confidence: 92,
      source: "Reuniones logística + Reportes conductores"
    },
    {
      type: "success",
      title: "Mejora satisfacción cliente",
      description: "Sentimiento positivo aumentó 23% después de implementar nuevos protocolos",
      actionRequired: "Documentar y replicar mejores prácticas",
      confidence: 89,
      source: "Análisis sentiment conversaciones soporte"
    }
  ];

  const filteredAreas = selectedArea === "all" ? dentalAreas : dentalAreas.filter(area => area.name.toLowerCase() === selectedArea);
  const filteredTasks = selectedArea === "all" ? criticalTasks : criticalTasks.filter(task => task.area.toLowerCase() === selectedArea);
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      {/* Header with Juntify branding */}
      <div className="border-b border-border/40 backdrop-blur-xl">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img 
                src="/lovable-uploads/f0c776a6-8143-4749-b172-b65367109b45.png"
                alt="Juntify Logo" 
                className="h-10 w-auto logo-glow" 
              />
              <div>
                <h1 className="text-2xl font-light text-foreground tracking-wide">Panel de Administración</h1>
                <p className="text-sm text-muted-foreground">Centro de Control Juntify</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                <Activity className="h-3 w-3 mr-1" />
                Sistema Activo
              </Badge>
              <Button variant="outline" size="sm">
                <Settings className="h-4 w-4 mr-2" />
                Configuración
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <Tabs defaultValue="dashboard" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 lg:w-fit">
            <TabsTrigger value="dashboard" className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              <span className="hidden sm:inline">Dashboard</span>
            </TabsTrigger>
            <TabsTrigger value="meetings" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span className="hidden sm:inline">Reuniones</span>
            </TabsTrigger>
            <TabsTrigger value="ai-engines" className="flex items-center gap-2">
              <Bot className="h-4 w-4" />
              <span className="hidden sm:inline">Motores IA</span>
            </TabsTrigger>
            <TabsTrigger value="content" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              <span className="hidden sm:inline">Contenido</span>
            </TabsTrigger>
          </TabsList>

          {/* Dashboard Principal */}
          <TabsContent value="dashboard" className="space-y-6">
            {/* Filtros */}
            <div className="flex flex-wrap gap-4 items-center justify-between">
              <div className="flex gap-3 items-center">
                <Select value={selectedArea} onValueChange={setSelectedArea}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Filtrar por área" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todas las áreas</SelectItem>
                    <SelectItem value="ventas">Ventas</SelectItem>
                    <SelectItem value="inventario">Inventario</SelectItem>
                    <SelectItem value="atención cliente">Atención Cliente</SelectItem>
                    <SelectItem value="logística">Logística</SelectItem>
                    <SelectItem value="administración">Administración</SelectItem>
                  </SelectContent>
                </Select>
                
                <Select value={timeFrame} onValueChange={setTimeFrame}>
                  <SelectTrigger className="w-36">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="week">Esta semana</SelectItem>
                    <SelectItem value="month">Este mes</SelectItem>
                    <SelectItem value="quarter">Trimestre</SelectItem>
                  </SelectContent>
                </Select>
                
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Exportar
                </Button>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="relative">
                  <Search className="h-4 w-4 absolute left-3 top-3 text-muted-foreground" />
                  <Input placeholder="Buscar tareas, equipos..." className="pl-9 w-64" />
                </div>
              </div>
            </div>

            {/* KPIs Principales */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="liquid-glass p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-green-100 rounded-lg">
                    <CheckSquare className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-semibold text-foreground">89.2%</p>
                    <p className="text-sm text-muted-foreground">Eficiencia Global</p>
                    <div className="flex items-center gap-1 mt-1">
                      <TrendingUp className="h-3 w-3 text-green-500" />
                      <span className="text-xs text-green-500">+5.3% vs mes anterior</span>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="liquid-glass p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <Package className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-semibold text-foreground">584</p>
                    <p className="text-sm text-muted-foreground">Tareas Completadas</p>
                    <div className="flex items-center gap-1 mt-1">
                      <Target className="h-3 w-3 text-blue-500" />
                      <span className="text-xs text-blue-500">646 total asignadas</span>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="liquid-glass p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-yellow-100 rounded-lg">
                    <AlertTriangle className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-semibold text-foreground">18</p>
                    <p className="text-sm text-muted-foreground">Tareas Críticas</p>
                    <div className="flex items-center gap-1 mt-1">
                      <Clock className="h-3 w-3 text-yellow-500" />
                      <span className="text-xs text-yellow-500">8 vencen hoy</span>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="liquid-glass p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-purple-100 rounded-lg">
                    <DollarSign className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-semibold text-foreground">$169K</p>
                    <p className="text-sm text-muted-foreground">Ventas del Mes</p>
                    <div className="flex items-center gap-1 mt-1">
                      <TrendingUp className="h-3 w-3 text-green-500" />
                      <span className="text-xs text-green-500">+12.4% vs objetivo</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Rendimiento por Áreas */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="liquid-glass-intense p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-medium text-foreground flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-primary" />
                    Rendimiento por Áreas del Depósito
                  </h3>
                  <Button variant="outline" size="sm">
                    <Filter className="h-4 w-4 mr-2" />
                    Filtros
                  </Button>
                </div>
                <div className="space-y-4">
                  {filteredAreas.map((area, index) => (
                    <div key={index} className="border border-border/40 rounded-lg p-4 hover:bg-muted/30 transition-colors cursor-pointer">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className={`w-3 h-3 rounded-full ${area.efficiency >= 90 ? 'bg-green-500' : area.efficiency >= 85 ? 'bg-yellow-500' : 'bg-red-500'}`}></div>
                          <h4 className="font-medium text-foreground">{area.name}</h4>
                          <Badge variant="outline" className="text-xs">{area.team}</Badge>
                        </div>
                        <span className="text-lg font-semibold text-primary">{area.efficiency}%</span>
                      </div>
                      
                      <div className="space-y-2 mb-3">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Progreso de tareas</span>
                          <span className="text-foreground">{area.tasksCompleted}/{area.totalTasks}</span>
                        </div>
                        <Progress value={(area.tasksCompleted / area.totalTasks) * 100} className="h-2" />
                      </div>
                      
                      <div className="grid grid-cols-3 gap-4 text-xs">
                        <div>
                          <p className="text-muted-foreground">Líder</p>
                          <p className="font-medium text-foreground">{area.lead}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Críticas</p>
                          <p className="font-medium text-foreground">{area.criticalTasks}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Revenue</p>
                          <p className="font-medium text-foreground">{area.revenue}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="liquid-glass-intense p-6">
                <h3 className="text-lg font-medium text-foreground mb-6 flex items-center gap-2">
                  <Brain className="h-5 w-5 text-primary" />
                  Insights de Juntify IA
                </h3>
                <div className="space-y-4">
                  {recentInsights.map((insight, index) => (
                    <div key={index} className="border border-border/40 rounded-lg p-4">
                      <div className="flex items-start gap-3 mb-3">
                        <div className={`p-2 rounded-lg ${
                          insight.type === 'opportunity' ? 'bg-blue-100' :
                          insight.type === 'alert' ? 'bg-yellow-100' : 'bg-green-100'
                        }`}>
                          {insight.type === 'opportunity' ? <Target className="h-4 w-4 text-blue-600" /> :
                           insight.type === 'alert' ? <AlertTriangle className="h-4 w-4 text-yellow-600" /> :
                           <Award className="h-4 w-4 text-green-600" />}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-foreground mb-1">{insight.title}</h4>
                          <p className="text-sm text-muted-foreground mb-2">{insight.description}</p>
                          <p className="text-xs font-medium text-primary mb-2">Acción: {insight.actionRequired}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-muted-foreground">{insight.source}</span>
                            <Badge variant="outline" className="text-xs">
                              {insight.confidence}% confianza
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Ventas y Rendimiento del Equipo */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="liquid-glass p-6 lg:col-span-2">
                <h3 className="text-lg font-medium text-foreground mb-6 flex items-center gap-2">
                  <ShoppingCart className="h-5 w-5 text-primary" />
                  Productos Estrella - Análisis de Ventas
                </h3>
                <div className="space-y-4">
                  {salesMetrics.map((product, index) => (
                    <div key={index} className="border border-border/40 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-medium text-foreground">{product.product}</h4>
                        <span className="text-lg font-semibold text-primary">{product.revenue}</span>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Vendido vs Objetivo</span>
                          <span className="text-foreground">{product.sold}/{product.target}</span>
                        </div>
                        <Progress value={(product.sold / product.target) * 100} className="h-2" />
                        <div className="flex justify-between items-center">
                          <span className={`text-xs ${product.sold >= product.target ? 'text-green-600' : 'text-yellow-600'}`}>
                            {product.sold >= product.target ? '✓ Objetivo alcanzado' : `Faltan ${product.target - product.sold} unidades`}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {Math.round((product.sold / product.target) * 100)}%
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="liquid-glass p-6">
                <h3 className="text-lg font-medium text-foreground mb-6 flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Top Performers
                </h3>
                <div className="space-y-4">
                  {teamPerformance.slice(0, 5).map((member, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                          <span className="text-sm font-medium text-primary">
                            {member.member.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-foreground text-sm truncate">{member.member}</p>
                        <p className="text-xs text-muted-foreground">{member.role}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-xs text-foreground">{member.tasksCompleted} tareas</span>
                          <span className="text-xs text-primary font-medium">{member.efficiency}%</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="meetings" className="space-y-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-light text-foreground">Gestión de Reuniones del Depósito</h2>
              <div className="flex gap-3">
                <Button variant="outline" size="sm">
                  <Calendar className="h-4 w-4 mr-2" />
                  Programar Reunión
                </Button>
                <Button size="sm">
                  <Plus className="h-4 w-4 mr-2" />
                  Nueva Junta
                </Button>
              </div>
            </div>

            {/* Tareas Críticas Extraídas */}
            <Card className="liquid-glass-intense p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-medium text-foreground flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-yellow-500" />
                  Tareas Críticas Extraídas por Juntify
                </h3>
                <div className="flex gap-2">
                  <Badge variant="outline">{criticalTasks.length} tareas</Badge>
                  <Button variant="outline" size="sm">
                    <Filter className="h-4 w-4 mr-2" />
                    Filtrar
                  </Button>
                </div>
              </div>
              
              <div className="space-y-4">
                {filteredTasks.map((task) => (
                  <div key={task.id} className="border border-border/40 rounded-lg p-4 hover:bg-muted/30 transition-colors">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="font-medium text-foreground">{task.title}</h4>
                          <Badge 
                            variant={task.priority === 'Crítica' ? 'destructive' : task.priority === 'Alta' ? 'default' : 'secondary'}
                            className="text-xs"
                          >
                            {task.priority}
                          </Badge>
                          <Badge variant="outline" className="text-xs">{task.area}</Badge>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground mb-3">
                          <div>
                            <span className="font-medium">Asignado a:</span> {task.assignee}
                          </div>
                          <div>
                            <span className="font-medium">Vence:</span> {task.dueDate}
                          </div>
                        </div>
                        <div className="bg-muted/50 rounded-lg p-3 mb-3">
                          <p className="text-xs text-muted-foreground mb-1">Extraído de:</p>
                          <p className="text-sm text-foreground">{task.extractedFrom}</p>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <Badge 
                          variant={task.status === 'Completada' ? 'default' : task.status === 'En progreso' ? 'secondary' : 'outline'}
                        >
                          {task.status}
                        </Badge>
                        <div className="flex gap-1">
                          <Button size="sm" variant="outline">Editar</Button>
                          <Button size="sm" variant="outline">
                            <CheckSquare className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Reuniones Recientes */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <Card className="liquid-glass-intense p-6">
                  <h3 className="text-lg font-medium text-foreground mb-4 flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    Reuniones Recientes del Depósito
                  </h3>
                  <div className="space-y-4">
                    {[
                      { 
                        title: "Revisión Inventario Semanal", 
                        team: "Equipo Almacén", 
                        duration: "35 min", 
                        status: "completed",
                        insights: "12 tareas críticas de stock, 3 proveedores nuevos evaluados",
                        participants: ["Carlos Ruiz", "Ana López", "Miguel Santos"],
                        keyTopics: ["Stock crítico", "Nuevos proveedores", "Optimización almacén"]
                      },
                      { 
                        title: "Planning Comercial Q1", 
                        team: "Equipo Ventas", 
                        duration: "55 min", 
                        status: "completed",
                        insights: "Objetivos 2025 definidos, nuevas estrategias zona sur",
                        participants: ["María González", "Roberto Díaz", "Carmen Ruiz"],
                        keyTopics: ["Objetivos Q1", "Expansión zona sur", "Productos premium"]
                      },
                      { 
                        title: "Capacitación Productos Nuevos", 
                        team: "Soporte Técnico", 
                        duration: "45 min", 
                        status: "processing",
                        insights: "Procesando transcripción y generando material...",
                        participants: ["Ana Martínez", "Luis Torres", "Patricia Vega"],
                        keyTopics: ["Implantes titanio", "Protocolos nuevos", "Certificaciones"]
                      }
                    ].map((meeting, index) => (
                      <div key={index} className="border border-border/40 rounded-lg p-4 hover:bg-muted/30 transition-colors">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-medium text-foreground">{meeting.title}</h4>
                          <Badge 
                            variant={meeting.status === 'completed' ? 'default' : 'secondary'}
                          >
                            {meeting.status === 'completed' ? 'Completada' : 'Procesando'}
                          </Badge>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground mb-3">
                          <span>{meeting.team} • {meeting.duration}</span>
                          <span>{meeting.participants.length} participantes</span>
                        </div>
                        <div className="bg-primary/5 rounded-lg p-3 mb-3">
                          <p className="text-sm font-medium text-foreground mb-1">Insights extraídos:</p>
                          <p className="text-sm text-muted-foreground">{meeting.insights}</p>
                        </div>
                        <div className="mb-3">
                          <p className="text-xs font-medium text-foreground mb-2">Temas clave identificados:</p>
                          <div className="flex flex-wrap gap-1">
                            {meeting.keyTopics.map((topic, topicIndex) => (
                              <Badge key={topicIndex} variant="outline" className="text-xs">
                                {topic}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="flex items-center gap-2 mt-3">
                          <Button size="sm" variant="outline">Ver Transcripción</Button>
                          <Button size="sm" variant="outline">
                            <Download className="h-3 w-3 mr-1" />
                            Exportar
                          </Button>
                          {meeting.status === 'completed' && (
                            <Button size="sm" variant="outline">
                              <Play className="h-3 w-3 mr-1" />
                              Reproducir
                            </Button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>

              <div>
                <Card className="liquid-glass p-6 mb-6">
                  <h3 className="text-lg font-medium text-foreground mb-4 flex items-center gap-2">
                    <Mic className="h-5 w-5 text-primary" />
                    Análisis de Voz
                  </h3>
                  <div className="space-y-4">
                    <div className="text-center">
                      <p className="text-3xl font-semibold text-primary">98.1%</p>
                      <p className="text-sm text-muted-foreground">Precisión Transcripción</p>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-semibold text-primary">2.7</p>
                      <p className="text-sm text-muted-foreground">Idiomas Promedio</p>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-semibold text-primary">234h</p>
                      <p className="text-sm text-muted-foreground">Audio Procesado (Mes)</p>
                    </div>
                    <div className="border-t pt-4">
                      <p className="text-sm font-medium text-foreground mb-2">Palabras clave frecuentes:</p>
                      <div className="flex flex-wrap gap-1">
                        {['implantes', 'stock', 'cliente', 'entrega', 'urgente', 'presupuesto'].map((word) => (
                          <Badge key={word} variant="secondary" className="text-xs">
                            {word}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Motores de IA */}
          <TabsContent value="ai-engines" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="liquid-glass-intense p-6">
                <h3 className="text-lg font-medium text-foreground mb-4 flex items-center gap-2">
                  <Brain className="h-5 w-5 text-primary" />
                  Historial de Conversaciones
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      type: "phone",
                      contact: "Cliente Premium",
                      duration: "8:45",
                      sentiment: "positive",
                      extracted: "Interés en upgrade de plan"
                    },
                    {
                      type: "whatsapp",
                      contact: "Soporte Técnico",
                      duration: "12:30",
                      sentiment: "neutral",
                      extracted: "Resolución de incidencia #2456"
                    },
                    {
                      type: "phone",
                      contact: "Lead Prospecto",
                      duration: "15:20",
                      sentiment: "positive",
                      extracted: "Demo programada para viernes"
                    }
                  ].map((conversation, index) => (
                    <div key={index} className="border border-border/40 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          {conversation.type === 'phone' ? (
                            <Phone className="h-4 w-4 text-primary" />
                          ) : (
                            <MessageCircle className="h-4 w-4 text-primary" />
                          )}
                          <span className="font-medium text-foreground">{conversation.contact}</span>
                        </div>
                        <Badge 
                          variant={conversation.sentiment === 'positive' ? 'default' : 'secondary'}
                        >
                          {conversation.sentiment === 'positive' ? 'Positivo' : 'Neutral'}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">Duración: {conversation.duration}</p>
                      <p className="text-sm text-foreground">{conversation.extracted}</p>
                      <div className="flex items-center gap-2 mt-3">
                        <Button size="sm" variant="outline">Ver Completo</Button>
                        <Button size="sm" variant="outline">
                          <Volume2 className="h-3 w-3 mr-1" />
                          Audio
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="liquid-glass-intense p-6">
                <h3 className="text-lg font-medium text-foreground mb-4 flex items-center gap-2">
                  <Zap className="h-5 w-5 text-primary" />
                  Análisis de Datos IA
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium text-foreground mb-3">Extracción de Tareas</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Llamadas de IA</span>
                        <span className="text-sm font-medium text-foreground">84 tareas</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Chats WhatsApp</span>
                        <span className="text-sm font-medium text-foreground">127 tareas</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Reuniones</span>
                        <span className="text-sm font-medium text-foreground">231 tareas</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-foreground mb-3">Análisis de Sentimiento</h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="text-sm text-muted-foreground">Positivo</span>
                        <span className="text-sm font-medium text-foreground ml-auto">68%</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <span className="text-sm text-muted-foreground">Neutral</span>
                        <span className="text-sm font-medium text-foreground ml-auto">24%</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <span className="text-sm text-muted-foreground">Negativo</span>
                        <span className="text-sm font-medium text-foreground ml-auto">8%</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-foreground mb-3">Palabras Clave</h4>
                    <div className="flex flex-wrap gap-2">
                      {['urgente', 'presupuesto', 'demo', 'implementación', 'soporte'].map((keyword) => (
                        <Badge key={keyword} variant="outline" className="text-xs">
                          {keyword}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>

          {/* Creación de Contenido */}
          <TabsContent value="content" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="liquid-glass-intense p-6">
                <h3 className="text-lg font-medium text-foreground mb-4 flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  Generación de Contenido
                </h3>
                <div className="space-y-4">
                  <div className="border border-border/40 rounded-lg p-4">
                    <h4 className="font-medium text-foreground mb-2">Cursos Automáticos</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Genera cursos basados en las reuniones y conocimiento capturado
                    </p>
                    <div className="space-y-2">
                      <Button size="sm" className="w-full">Crear Curso desde Reunión</Button>
                      <Button size="sm" variant="outline" className="w-full">Plantillas de Curso</Button>
                    </div>
                  </div>

                  <div className="border border-border/40 rounded-lg p-4">
                    <h4 className="font-medium text-foreground mb-2">Documentación</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Convierte conversaciones en documentación estructurada
                    </p>
                    <div className="space-y-2">
                      <Button size="sm" variant="outline" className="w-full">Generar Manual</Button>
                      <Button size="sm" variant="outline" className="w-full">FAQ Automático</Button>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="liquid-glass-intense p-6">
                <h3 className="text-lg font-medium text-foreground mb-4 flex items-center gap-2">
                  <Image className="h-5 w-5 text-primary" />
                  Recursos Visuales
                </h3>
                <div className="space-y-4">
                  <div className="border border-border/40 rounded-lg p-4">
                    <h4 className="font-medium text-foreground mb-2">Generación de Imágenes</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Crea imágenes para cursos y documentación
                    </p>
                    <div className="space-y-2">
                      <Button size="sm" className="w-full">Generar Imagen</Button>
                      <Button size="sm" variant="outline" className="w-full">Galería</Button>
                    </div>
                  </div>

                  <div className="border border-border/40 rounded-lg p-4">
                    <h4 className="font-medium text-foreground mb-2">Presentaciones</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Genera slides automáticos de reuniones
                    </p>
                    <div className="space-y-2">
                      <Button size="sm" variant="outline" className="w-full">Nueva Presentación</Button>
                      <Button size="sm" variant="outline" className="w-full">Templates</Button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Contenido reciente */}
            <Card className="liquid-glass p-6">
              <h3 className="text-lg font-medium text-foreground mb-4">Contenido Generado Recientemente</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { title: "Manual de Onboarding", type: "Documento", date: "Hace 2 horas" },
                  { title: "Curso: Uso de la Plataforma", type: "Curso", date: "Hace 1 día" },
                  { title: "FAQ Soporte Técnico", type: "Documento", date: "Hace 3 días" },
                  { title: "Presentación Q1", type: "Presentación", date: "Hace 1 semana" },
                  { title: "Diagrama de Proceso", type: "Imagen", date: "Hace 1 semana" },
                  { title: "Guía de Instalación", type: "Documento", date: "Hace 2 semanas" }
                ].map((content, index) => (
                  <div key={index} className="border border-border/40 rounded-lg p-4 hover:bg-muted/30 transition-colors">
                    <h4 className="font-medium text-foreground mb-1">{content.title}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{content.type}</p>
                    <p className="text-xs text-muted-foreground">{content.date}</p>
                    <div className="flex items-center gap-2 mt-3">
                      <Button size="sm" variant="outline">Ver</Button>
                      <Button size="sm" variant="outline">
                        <Download className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;