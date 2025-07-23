import { useState, useEffect } from 'react';
import { VoiceWavesSVG, AIBrainSVG, DataFlowSVG, InventorySVG, SecuritySVG } from './AnimatedSVG';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Mic, Brain, Database, Package, Shield, Zap, Target, CheckCircle2, ArrowRight, Play, Pause, BarChart3, FileText, Users, Clock, Smartphone, Headphones, Monitor, Settings } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  svgComponent: React.ReactNode;
  color: 'primary' | 'accent';
  delay: number;
  isActive: boolean;
  onClick: () => void;
  modalContent: {
    subtitle: string;
    vision: string;
    features: Array<{
      icon: React.ReactNode;
      title: string;
      description: string;
    }>;
    impact: string;
    example: string;
  };
}

const FeatureCard = ({ icon, title, description, svgComponent, color, delay, isActive, onClick, modalContent }: FeatureCardProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div 
          className={`interactive-feature-card ${isActive ? 'active' : ''} ${color}`}
          style={{ animationDelay: `${delay}s` }}
          onClick={onClick}
        >
          <div className="feature-card-inner">
            {/* Icon and SVG container */}
            <div className="feature-visual">
              <div className="feature-icon">
                {icon}
              </div>
              <div className="feature-svg">
                {svgComponent}
              </div>
            </div>
            
            {/* Content */}
            <div className="feature-content">
              <h3 className="feature-title">{title}</h3>
              <p className="feature-description">{description}</p>
              <div className="feature-cta">
                <ArrowRight className="h-4 w-4" />
                <span>Descubrir más</span>
              </div>
            </div>
            
            {/* Interactive elements */}
            <div className="feature-interaction">
              <div className="pulse-indicator" />
              <div className="glow-effect" />
            </div>
          </div>
        </div>
      </DialogTrigger>
      
      <DialogContent className="max-w-4xl liquid-glass border-white/20 max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-4 text-2xl mb-4">
            <div className={`p-3 rounded-xl bg-${color}/10 text-${color}`}>
              {icon}
            </div>
            <div>
              <div className="text-xl font-semibold">{title}</div>
              <div className="text-sm text-muted-foreground font-normal">{modalContent.subtitle}</div>
            </div>
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-8">
          {/* Vision Statement - Jony Ive Style */}
          <div className="liquid-glass-intense p-6 text-center">
            <div className="text-lg font-light text-foreground leading-relaxed italic">
              "{modalContent.vision}"
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-4">
            {modalContent.features.map((feature, index) => (
              <div key={index} className="liquid-glass p-4 hover:shadow-elegant transition-all duration-300">
                <div className="flex items-start gap-3">
                  <div className={`p-2 rounded-lg bg-${color}/10 text-${color} animate-pulse`}>
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-foreground mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Impact Statement */}
          <div className="liquid-glass-intense p-6">
            <div className="flex items-center gap-3 mb-4">
              <Target className={`h-6 w-6 text-${color}`} />
              <h3 className="text-lg font-semibold">Impacto Transformador</h3>
            </div>
            <p className="text-foreground leading-relaxed">{modalContent.impact}</p>
          </div>

          {/* Real Example */}
          <div className="liquid-glass p-6 bg-gradient-to-br from-primary/5 to-accent/5">
            <div className="flex items-center gap-3 mb-4">
              <Play className={`h-5 w-5 text-${color}`} />
              <h3 className="text-lg font-semibold">Ejemplo en Acción</h3>
            </div>
            <div className="bg-muted/30 rounded-lg p-4 font-mono text-sm">
              <p className="text-foreground">{modalContent.example}</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export const InteractiveFeatures = () => {
  const [activeFeature, setActiveFeature] = useState<number>(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Auto-cycle through features
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: <Mic className="h-8 w-8" />,
      title: "Captura de Voz Inteligente",
      description: "Transcripción automática con IA avanzada",
      svgComponent: <VoiceWavesSVG />,
      color: 'primary' as const,
      modalContent: {
        subtitle: "La base fundamental de Juntify",
        vision: "Transformamos cada palabra hablada en conocimiento estructurado y accionable para tu operación industrial.",
        features: [
          {
            icon: <Smartphone className="h-4 w-4" />,
            title: "Grabación Universal",
            description: "Captura desde cualquier dispositivo móvil o desktop con calidad profesional"
          },
          {
            icon: <Headphones className="h-4 w-4" />,
            title: "Transcripción Precisa",
            description: "IA especializada en terminología industrial con 99.2% de precisión"
          },
          {
            icon: <Users className="h-4 w-4" />,
            title: "Identificación de Hablantes",
            description: "Reconoce automáticamente quién habla en reuniones y reportes"
          },
          {
            icon: <FileText className="h-4 w-4" />,
            title: "Organización Inteligente",
            description: "Clasifica por proyectos, fechas y responsables automáticamente"
          }
        ],
        impact: "Elimina completamente la pérdida de información en comunicaciones verbales. Cada detalle técnico, cada decisión importante, cada observación queda perfectamente documentada sin esfuerzo manual.",
        example: 'Técnico: "La bomba del área 4 presenta vibración anormal"\nSistema: ✓ Registra: Equipo: Bomba área 4, Estado: Vibración anormal, Responsable: [Técnico], Fecha: [Auto], Prioridad: Media'
      }
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Procesamiento con IA",
      description: "Análisis inteligente de datos y patrones",
      svgComponent: <AIBrainSVG />,
      color: 'accent' as const,
      modalContent: {
        subtitle: "El cerebro que nunca descansa",
        vision: "Una inteligencia artificial que comprende tu operación mejor que cualquier sistema tradicional, anticipando necesidades y optimizando procesos.",
        features: [
          {
            icon: <Brain className="h-4 w-4" />,
            title: "Comprensión Contextual",
            description: "Entiende jerga técnica, equipos específicos y procedimientos de tu planta"
          },
          {
            icon: <BarChart3 className="h-4 w-4" />,
            title: "Análisis Predictivo",
            description: "Identifica patrones de falla antes de que ocurran problemas críticos"
          },
          {
            icon: <Target className="h-4 w-4" />,
            title: "Optimización Continua",
            description: "Aprende de cada intervención para mejorar recomendaciones futuras"
          },
          {
            icon: <Clock className="h-4 w-4" />,
            title: "Procesamiento en Tiempo Real",
            description: "Análisis instantáneo mientras hablas, sin demoras ni esperas"
          }
        ],
        impact: "Convierte años de experiencia operativa en decisiones inteligentes automatizadas. La IA aprende los patrones únicos de tu planta y se convierte en el asistente técnico más experimentado de tu equipo.",
        example: 'Usuario: "¿Qué se dijo sobre la bomba del área 4 la semana pasada?"\nIA: "El martes se reportó vibración anormal. Historial muestra que esta bomba requiere mantenimiento cada 90 días. Última intervención: hace 87 días. Recomendación: Programar inspección preventiva."'
      }
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Flujo de Datos",
      description: "Integración continua y tiempo real",
      svgComponent: <DataFlowSVG />,
      color: 'primary' as const,
      modalContent: {
        subtitle: "Conectividad sin límites",
        vision: "Un ecosistema donde cada dato fluye perfectamente, conectando sistemas, personas y procesos en una sinfonía de información.",
        features: [
          {
            icon: <Monitor className="h-4 w-4" />,
            title: "Integración Universal",
            description: "Conecta con ERPs, CRMs y sistemas existentes sin interrupciones"
          },
          {
            icon: <Database className="h-4 w-4" />,
            title: "Sincronización Automática",
            description: "Datos actualizados en tiempo real entre todas las plataformas"
          },
          {
            icon: <Settings className="h-4 w-4" />,
            title: "APIs Abiertas",
            description: "Arquitectura flexible para futuras integraciones y expansiones"
          },
          {
            icon: <Shield className="h-4 w-4" />,
            title: "Transferencia Segura",
            description: "Encriptación de extremo a extremo para proteger información crítica"
          }
        ],
        impact: "Elimina silos de información y crea un flujo continuo de conocimiento. Tu equipo toma decisiones basadas en datos completos y actualizados, no en suposiciones o información fragmentada.",
        example: 'Bitácora hablada → Actualización automática en ERP → Notificación a supervisor → Programación en calendario → Alerta de inventario → Reporte gerencial. Todo en segundos, sin intervención manual.'
      }
    },
    {
      icon: <Package className="h-8 w-8" />,
      title: "Control de Inventarios",
      description: "Gestión automatizada de recursos",
      svgComponent: <InventorySVG />,
      color: 'accent' as const,
      modalContent: {
        subtitle: "Precisión absoluta en cada pieza",
        vision: "Un sistema que conoce cada tornillo, cada componente, cada herramienta, y orquesta su uso con la precisión de un director de orquesta.",
        features: [
          {
            icon: <Package className="h-4 w-4" />,
            title: "Trazabilidad Completa",
            description: "Seguimiento desde la adquisición hasta el uso en cada intervención"
          },
          {
            icon: <BarChart3 className="h-4 w-4" />,
            title: "Predicción de Demanda",
            description: "Anticipa necesidades basado en patrones históricos y mantenimiento programado"
          },
          {
            icon: <Zap className="h-4 w-4" />,
            title: "Actualización Automática",
            description: "Stock actualizado instantáneamente cuando se menciona uso en bitácoras"
          },
          {
            icon: <Target className="h-4 w-4" />,
            title: "Alertas Inteligentes",
            description: "Notificaciones proactivas de stock bajo o uso anormal de materiales"
          }
        ],
        impact: "Nunca más detener una operación por falta de repuestos. El sistema predice, compra y organiza todo lo necesario antes de que lo necesites, optimizando costos y minimizando tiempo muerto.",
        example: 'Técnico menciona: "Cambiamos los rodamientos"\nSistema: ✓ Descuenta 2 rodamientos SKF 6205, ✓ Stock actual: 3 unidades, ⚠️ Alerta: Solicitar compra (punto de reorden alcanzado), ✓ Genera orden de compra automática'
      }
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Seguridad Avanzada",
      description: "Protección integral de datos",
      svgComponent: <SecuritySVG />,
      color: 'primary' as const,
      modalContent: {
        subtitle: "Fortaleza digital para tu operación",
        vision: "Una protección invisible pero impenetrable que resguarda cada byte de información crítica mientras facilita el trabajo diario de tu equipo.",
        features: [
          {
            icon: <Shield className="h-4 w-4" />,
            title: "Encriptación Militar",
            description: "Protección de grado empresarial con estándares bancarios internacionales"
          },
          {
            icon: <Users className="h-4 w-4" />,
            title: "Roles Granulares",
            description: "Control preciso de quién ve qué, cuándo y bajo qué circunstancias"
          },
          {
            icon: <FileText className="h-4 w-4" />,
            title: "Auditoría Completa",
            description: "Registro detallado de cada acción para cumplimiento y trazabilidad"
          },
          {
            icon: <Monitor className="h-4 w-4" />,
            title: "Monitoreo 24/7",
            description: "Vigilancia continua con respuesta automática ante amenazas"
          }
        ],
        impact: "Tu información crítica está más segura que en cualquier bóveda física. Cumples automáticamente con normativas internacionales mientras tu equipo trabaja con total libertad y confianza.",
        example: 'Gerente accede: ✓ Ve todos los reportes\nSupervisor accede: ✓ Ve su área únicamente\nTécnico accede: ✓ Registra bitácoras, no ve costos\nTodo queda registrado con timestamp, IP y nivel de acceso para auditorías.'
      }
    },
  ];

  return (
    <div className={`interactive-features-container ${isVisible ? 'visible' : ''}`}>
      {/* Header */}
      <div className="features-header">
        <div className="header-decoration">
          <Zap className="h-12 w-12 text-primary glow-icon" />
        </div>
        <h2 className="features-title">El Futuro del Mantenimiento Industrial</h2>
        <p className="features-subtitle">
          Cinco tecnologías revolucionarias que transformarán para siempre la gestión de tu planta
        </p>
      </div>

      {/* Centered Feature Grid */}
      <div className="features-grid-centered">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            {...feature}
            delay={index * 0.2}
            isActive={activeFeature === index}
            onClick={() => setActiveFeature(index)}
          />
        ))}
      </div>

      {/* Floating particles for this section */}
      <div className="section-particles">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="section-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Benefits showcase */}
      <div className="benefits-showcase">
        <div className="benefits-grid">
          <div className="benefit-item">
            <CheckCircle2 className="h-6 w-6 text-primary" />
            <span>95% Reducción en errores de registro</span>
          </div>
          <div className="benefit-item">
            <CheckCircle2 className="h-6 w-6 text-accent" />
            <span>70% Aumento en productividad operativa</span>
          </div>
          <div className="benefit-item">
            <CheckCircle2 className="h-6 w-6 text-primary" />
            <span>100% Trazabilidad de cada operación</span>
          </div>
        </div>
      </div>
    </div>
  );
};