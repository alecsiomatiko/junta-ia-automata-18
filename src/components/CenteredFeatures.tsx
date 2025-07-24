import { useState, useEffect } from 'react';
import { VoiceWavesSVG, AIBrainSVG, DataFlowSVG, InventorySVG, SecuritySVG } from './AnimatedSVG';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Mic, Brain, Database, Package, Shield, Zap, Target, CheckCircle2, ArrowRight, Play, Smartphone, Headphones, Monitor, Settings, FileText, Users, Clock, BarChart3, Server, Lock } from 'lucide-react';
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
    security?: string;
  };
}
const FeatureCard = ({
  icon,
  title,
  description,
  svgComponent,
  color,
  delay,
  isActive,
  modalContent
}: FeatureCardProps) => {
  return <Dialog>
      <DialogTrigger asChild>
        <div className={`modern-feature-card ${isActive ? 'active' : ''} ${color}`} style={{
        animationDelay: `${delay}s`
      }}>
          <div className="card-content">
            <div className="card-header">
              <div className="feature-icon-wrapper">
                {icon}
              </div>
              <div className="feature-svg-wrapper">
                {svgComponent}
              </div>
            </div>
            
            <div className="card-body">
              <h3 className="card-title">{title}</h3>
              <p className="card-description">{description}</p>
              <div className="card-cta">
                <span>Explorar</span>
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>
            
            <div className="card-glow" />
          </div>
        </div>
      </DialogTrigger>
      
      <DialogContent className="max-w-5xl bg-background/95 backdrop-blur-xl border-white/20 max-h-[90vh] overflow-y-auto">
        <DialogHeader className="space-y-4">
          <DialogTitle className="flex items-center gap-4 text-2xl">
            <div className={`p-4 rounded-2xl bg-gradient-to-br from-${color}/20 to-${color}/5 border border-${color}/20`}>
              {icon}
            </div>
            <div className="text-left">
              <div className="text-2xl font-bold text-foreground">{title}</div>
              <div className="text-lg text-muted-foreground font-light">{modalContent.subtitle}</div>
            </div>
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-8 mt-6">
          {/* Vision Statement - Jony Ive Style */}
          <div className="text-center p-8 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl border border-white/10">
            <div className="text-xl font-light text-foreground leading-relaxed italic max-w-4xl mx-auto">
              "{modalContent.vision}"
            </div>
          </div>

          {/* Security Notice if present */}
          {modalContent.security}

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {modalContent.features.map((feature, index) => <div key={index} className="p-6 bg-gradient-to-br from-white/5 to-white/2 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl bg-${color}/10 text-${color} flex-shrink-0 animate-pulse`}>
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground mb-2 text-lg">{feature.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>)}
          </div>

          {/* Impact Statement */}
          <div className="p-8 bg-gradient-to-br from-primary/10 to-accent/5 rounded-2xl border border-primary/20">
            <div className="flex items-center gap-3 mb-4">
              <Target className={`h-7 w-7 text-${color}`} />
              <h3 className="text-xl font-bold text-foreground">Impacto Transformador</h3>
            </div>
            <p className="text-foreground leading-relaxed text-lg">{modalContent.impact}</p>
          </div>

          {/* Real Example */}
          <div className="p-8 bg-gradient-to-br from-muted/20 to-muted/5 rounded-2xl border border-muted/30">
            <div className="flex items-center gap-3 mb-6">
              <Play className={`h-6 w-6 text-${color}`} />
              <h3 className="text-xl font-bold text-foreground">Ejemplo en Acción</h3>
            </div>
            <div className="bg-black/50 rounded-xl p-6 font-mono text-sm">
              <pre className="text-green-400 whitespace-pre-wrap">{modalContent.example}</pre>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>;
};
export const InteractiveFeatures = () => {
  const [activeFeature, setActiveFeature] = useState<number>(0);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % features.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);
  const features = [{
    icon: <Mic className="h-10 w-10" />,
    title: "Captura de Voz Inteligente",
    description: "Transcripción automática con IA avanzada",
    svgComponent: <VoiceWavesSVG />,
    color: 'primary' as const,
    modalContent: {
      subtitle: "La base fundamental de Juntify",
      vision: "Transformamos cada palabra hablada en conocimiento estructurado y accionable para tu operación industrial.",
      security: "Toda la información de voz y datos se almacena exclusivamente en servidores dedicados de GM San Luis Potosí. Ningún dato sale de sus instalaciones, garantizando máxima seguridad y cumplimiento con políticas corporativas.",
      features: [{
        icon: <Smartphone className="h-5 w-5" />,
        title: "Grabación Universal",
        description: "Captura desde cualquier dispositivo móvil o desktop con calidad profesional y procesamiento en tiempo real."
      }, {
        icon: <Headphones className="h-5 w-5" />,
        title: "Transcripción Precisa",
        description: "IA especializada en terminología industrial con 99.2% de precisión, entrenada específicamente para el sector automotriz."
      }, {
        icon: <Users className="h-5 w-5" />,
        title: "Identificación de Hablantes",
        description: "Reconoce automáticamente quién habla en reuniones y reportes, manteniendo trazabilidad completa."
      }, {
        icon: <FileText className="h-5 w-5" />,
        title: "Organización Inteligente",
        description: "Clasifica por proyectos, fechas, equipos y responsables automáticamente sin intervención manual."
      }],
      impact: "Elimina completamente la pérdida de información en comunicaciones verbales. Cada detalle técnico, cada decisión importante, cada observación queda perfectamente documentada sin esfuerzo manual. Su equipo técnico puede concentrarse en resolver problemas, no en documentarlos.",
      example: `Técnico: "La bomba del área 4 presenta vibración anormal, cambiamos los rodamientos SKF 6205"

Sistema procesa automáticamente:
✓ Equipo: Bomba área 4
✓ Problema: Vibración anormal  
✓ Acción: Cambio rodamientos SKF 6205
✓ Técnico: [Identificado automáticamente]
✓ Fecha/Hora: [Timestamp automático]
✓ Actualiza inventario: -2 rodamientos
✓ Programa próximo mantenimiento`
    }
  }, {
    icon: <Brain className="h-10 w-10" />,
    title: "Procesamiento con IA",
    description: "Análisis inteligente de datos y patrones",
    svgComponent: <AIBrainSVG />,
    color: 'accent' as const,
    modalContent: {
      subtitle: "El cerebro que nunca descansa",
      vision: "Una inteligencia artificial que comprende tu operación mejor que cualquier sistema tradicional, anticipando necesidades y optimizando procesos continuamente.",
      features: [{
        icon: <Brain className="h-5 w-5" />,
        title: "Comprensión Contextual",
        description: "Entiende jerga técnica, códigos de equipos específicos y procedimientos únicos de GM San Luis Potosí."
      }, {
        icon: <BarChart3 className="h-5 w-5" />,
        title: "Análisis Predictivo",
        description: "Identifica patrones de falla 30 días antes de que ocurran problemas críticos, basado en históricos."
      }, {
        icon: <Target className="h-5 w-5" />,
        title: "Optimización Continua",
        description: "Aprende de cada intervención para mejorar recomendaciones y reducir tiempo de parada."
      }, {
        icon: <Clock className="h-5 w-5" />,
        title: "Procesamiento Instantáneo",
        description: "Análisis en tiempo real mientras hablas, sin demoras ni esperas, respuestas inmediatas."
      }],
      impact: "Convierte décadas de experiencia operativa en decisiones inteligentes automatizadas. La IA aprende los patrones únicos de GM San Luis Potosí y se convierte en el asistente técnico más experimentado de su equipo, disponible 24/7.",
      example: `Usuario consulta: "¿Qué se dijo sobre la bomba del área 4 la semana pasada?"

IA responde inteligentemente:
"El martes 15 se reportó vibración anormal en bomba área 4.
Histórico muestra que esta bomba requiere mantenimiento cada 90 días.
Última intervención: hace 87 días.
Patrón detectado: Vibración anormal precede falla en 72% de casos.
RECOMENDACIÓN URGENTE: Programar inspección preventiva hoy."`
    }
  }, {
    icon: <Database className="h-10 w-10" />,
    title: "Flujo de Datos",
    description: "Integración continua y tiempo real",
    svgComponent: <DataFlowSVG />,
    color: 'primary' as const,
    modalContent: {
      subtitle: "Conectividad sin límites",
      vision: "Un ecosistema donde cada dato fluye perfectamente, conectando sistemas, personas y procesos en una sinfonía de información empresarial.",
      security: "Toda la comunicación entre sistemas utiliza protocolos seguros dentro de la red corporativa de GM. La integración es transparente pero completamente segura.",
      features: [{
        icon: <Monitor className="h-5 w-5" />,
        title: "Integración con SAP",
        description: "Conecta directamente con SAP PM para sincronización bidireccional de órdenes de trabajo y materiales."
      }, {
        icon: <Database className="h-5 w-5" />,
        title: "Sincronización Automática",
        description: "Datos actualizados en tiempo real entre Juntify, SAP, sistemas de producción y dashboards gerenciales."
      }, {
        icon: <Settings className="h-5 w-5" />,
        title: "APIs Corporativas",
        description: "Arquitectura compatible con estándares GM para futuras integraciones y expansiones corporativas."
      }, {
        icon: <Shield className="h-5 w-5" />,
        title: "Seguridad Empresarial",
        description: "Cumple con todos los protocolos de seguridad y auditoría requeridos por General Motors."
      }],
      impact: "Elimina silos de información y crea un flujo continuo de conocimiento empresarial. Su equipo toma decisiones basadas en datos completos, actualizados y validados, no en suposiciones o información fragmentada de sistemas múltiples.",
      example: `Flujo automático completo:
1. Bitácora hablada → Juntify procesa
2. Crea orden trabajo → SAP PM actualizado  
3. Notifica supervisor → Dashboard actualizado
4. Programa calendario → Técnicos notificados
5. Verifica inventario → Compras alertadas
6. Genera reporte → Gerencia informada

Todo en 30 segundos, sin intervención manual.`
    }
  }, {
    icon: <Package className="h-10 w-10" />,
    title: "Control de Inventarios",
    description: "Gestión automatizada de recursos",
    svgComponent: <InventorySVG />,
    color: 'accent' as const,
    modalContent: {
      subtitle: "Precisión absoluta en cada componente",
      vision: "Un sistema que conoce cada tornillo, cada componente, cada herramienta, y orquesta su uso con la precisión de la manufactura de clase mundial de GM.",
      features: [{
        icon: <Package className="h-5 w-5" />,
        title: "Trazabilidad GM Standard",
        description: "Seguimiento completo desde proveedores hasta uso final, cumpliendo estándares de trazabilidad GM Global."
      }, {
        icon: <BarChart3 className="h-5 w-5" />,
        title: "Predicción Inteligente",
        description: "Anticipa necesidades basado en ciclos de producción, mantenimiento programado y patrones históricos."
      }, {
        icon: <Zap className="h-5 w-5" />,
        title: "Actualización Verbal",
        description: "Stock se actualiza automáticamente cuando técnicos mencionan uso de materiales en bitácoras habladas."
      }, {
        icon: <Target className="h-5 w-5" />,
        title: "Alertas Proactivas",
        description: "Notificaciones automáticas a compras cuando stock alcanza puntos de reorden específicos por línea."
      }],
      impact: "Nunca más detener una línea de producción por falta de repuestos. El sistema predice, solicita y organiza todo lo necesario antes de que lo necesite, optimizando costos y eliminando tiempo muerto no programado.",
      example: `Técnico reporta: "Cambié los rodamientos de la estación 7"

Sistema procesa automáticamente:
✓ Descuenta: 2 rodamientos SKF 6205 de almacén
✓ Stock actual: 3 unidades restantes
⚠️ ALERTA: Punto de reorden alcanzado (stock mínimo: 5)
✓ Genera solicitud compra automática a SAP
✓ Notifica a supervisor y compras
✓ Programa recepción para antes del próximo mantenimiento`
    }
  }, {
    icon: <Shield className="h-10 w-10" />,
    title: "Seguridad Avanzada",
    description: "Protección integral de datos",
    svgComponent: <SecuritySVG />,
    color: 'primary' as const,
    modalContent: {
      subtitle: "Fortaleza digital corporativa",
      vision: "Una protección invisible pero impenetrable que resguarda cada byte de información crítica de GM mientras facilita el trabajo diario de su equipo operativo.",
      security: "Arquitectura de seguridad diseñada específicamente para cumplir con todos los estándares de ciberseguridad de General Motors Global. Certificaciones ISO 27001 y SOC 2 Type II incluidas.",
      features: [{
        icon: <Lock className="h-5 w-5" />,
        title: "Encriptación GM Standard",
        description: "Protección de grado corporativo con estándares de seguridad equivalentes a los sistemas financieros globales."
      }, {
        icon: <Users className="h-5 w-5" />,
        title: "Roles Corporativos",
        description: "Integración con Active Directory GM para control granular según jerarquía y responsabilidades corporativas."
      }, {
        icon: <FileText className="h-5 w-5" />,
        title: "Auditoría Completa",
        description: "Registro detallado de cada acción para cumplimiento Sarbanes-Oxley y auditorías corporativas."
      }, {
        icon: <Monitor className="h-5 w-5" />,
        title: "Monitoreo Corporativo",
        description: "Vigilancia 24/7 integrada con sistemas de seguridad GM Global para protección proactiva."
      }],
      impact: "Su información crítica está protegida con los más altos estándares corporativos de GM. Cumple automáticamente con todas las normativas globales mientras su equipo trabaja con total libertad y confianza en un entorno digital seguro.",
      example: `Control de acceso por roles:
Gerente Planta: ✓ Acceso total a reportes y métricas
Supervisor Área: ✓ Ve solo su área de responsabilidad  
Técnico Nivel 3: ✓ Registra bitácoras, no ve costos
Técnico Nivel 1: ✓ Solo consulta, no modifica

Cada acción queda registrada:
- Usuario: [Empleado GM]
- Timestamp: [Fecha/Hora exacta]  
- Acción: [Detalle específico]
- IP/Dispositivo: [Trazabilidad completa]`
    }
  }];
  return <div className={`centered-features-section ${isVisible ? 'visible' : ''}`}>
      {/* Enhanced Header */}
      <div className="section-header">
        <div className="header-animation">
          <Zap className="h-16 w-16 text-primary animate-pulse" />
        </div>
        <h2 className="section-title">El Futuro del Mantenimiento Industrial</h2>
        <p className="section-subtitle">
          Cinco tecnologías revolucionarias que transformarán para siempre la gestión de tu planta automotriz
        </p>
        <div className="key-benefit">
          <Server className="h-6 w-6 text-green-500" />
          <span>Todos los datos permanecen en servidores dedicados de GM San Luis Potosí</span>
        </div>
      </div>

      {/* Centered Feature Cards */}
      <div className="features-container">
        <div className="features-grid-center">
          {features.map((feature, index) => <FeatureCard key={index} {...feature} delay={index * 0.3} isActive={activeFeature === index} onClick={() => setActiveFeature(index)} />)}
        </div>
      </div>

      {/* Enhanced Benefits */}
      <div className="benefits-section">
        <div className="benefits-container">
          <div className="benefit-card">
            <CheckCircle2 className="h-8 w-8 text-primary" />
            <div>
              <div className="text-2xl font-bold text-primary">95%</div>
              <div className="text-sm text-muted-foreground">Reducción en errores de registro</div>
            </div>
          </div>
          <div className="benefit-card">
            <CheckCircle2 className="h-8 w-8 text-accent" />
            <div>
              <div className="text-2xl font-bold text-accent">70%</div>
              <div className="text-sm text-muted-foreground">Aumento en productividad operativa</div>
            </div>
          </div>
          <div className="benefit-card">
            <CheckCircle2 className="h-8 w-8 text-primary" />
            <div>
              <div className="text-2xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">Trazabilidad de cada operación</div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};