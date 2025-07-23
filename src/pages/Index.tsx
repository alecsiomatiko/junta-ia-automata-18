import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CostBreakdown } from "@/components/CostBreakdown";
import { InventoryPanel } from "@/components/InventoryPanel";
import { ParticleBackground } from "@/components/ParticleBackground";
import { InteractiveFeatures } from "@/components/InteractiveFeatures";
import { InteractiveFeatures as CenteredFeatures } from "@/components/CenteredFeatures";
import { TechDecorators, SparkleEffects, EnergyFlow, DataParticles } from "@/components/AdvancedDecorators";
import { FloatingDecorators, SectionBackground } from "@/components/AnimatedDecorators";
import { 
  VoiceRecordingIcon, AIProcessingIcon, MaintenanceIcon, InventoryIcon, 
  AnalyticsIcon, CommunicationIcon, MonitoringIcon 
} from "@/components/ContentAnimatedIcons";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { CalendarDays, Users, Zap, Clock, Shield, Star, ArrowRight, CheckCircle2, MessageCircle, Plus, Minus, Mic, Package, BarChart3, Brain, Lock, Settings, Calculator, Gem, Target, Layers3, Database, Monitor, Building2, MapPin, Phone, Mail, Search, Smartphone, FileText, UserCog, Headphones, Cloud } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
const Index = () => {
  return <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <ParticleBackground />
      <TechDecorators />
      <SparkleEffects />
      <EnergyFlow />
      <DataParticles />
      <FloatingDecorators />
      
      {/* Enhanced floating orbs with Apple-style blur */}
      <div className="floating-orb w-64 h-64 md:w-96 md:h-96 bg-gradient-to-r from-primary/20 to-primary-glow/30 top-10 right-10"></div>
      <div className="floating-orb w-32 h-32 md:w-64 md:h-64 bg-gradient-to-r from-accent/15 to-primary/10 bottom-20 left-20" style={{
      animationDelay: '7s'
    }}></div>
      <div className="floating-orb w-48 h-48 md:w-80 md:h-80 bg-gradient-to-r from-primary/10 to-primary-glow/20 top-1/2 left-1/2" style={{
      animationDelay: '14s'
    }}></div>
      
      <div className="relative z-10 container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 lg:py-16 max-w-6xl">
        {/* Juntify Header */}
        <div className="liquid-glass-intense p-4 sm:p-6 lg:p-12 mb-8 lg:mb-24 relative">
          <SectionBackground type="header" />
          <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-16">
            {/* Juntify Logo Section */}
            <div className="flex flex-col items-center gap-4 sm:gap-6">
              <div className="relative">
                <div className="logo-glow bg-white/15 backdrop-blur-sm rounded-2xl p-3 sm:p-4 lg:p-6 border border-white/30 shadow-elegant">
                  <img src="/lovable-uploads/f0c776a6-8143-4749-b172-b65367109b45.png" alt="Juntify Logo" className="h-12 sm:h-16 lg:h-24 w-auto" />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-primary/10 backdrop-blur-sm rounded-xl px-2 sm:px-3 py-1 border border-primary/20">
                  <span className="text-xs font-medium text-primary">Juntify</span>
                </div>
              </div>
            </div>

            {/* Company Information */}
            <div className="flex-1 text-center lg:text-left space-y-6">
              <div className="space-y-3">
                <div className="flex items-center justify-center lg:justify-start gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <Mic className="h-6 sm:h-7 lg:h-8 w-6 sm:w-7 lg:w-8 text-primary" />
                  <h1 className="text-lg sm:text-2xl lg:text-4xl font-light text-foreground tracking-wide">
                    JUNTIFY
                  </h1>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-6xl font-extralight text-primary tracking-wider leading-tight text-glow">
                  GM San Luis Potosí
                </h2>
                <p className="text-base sm:text-lg lg:text-2xl font-light text-muted-foreground tracking-wide">
                  Inteligencia Artificial para Mantenimiento Industrial
                </p>
              </div>
              
              {/* Contact Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-sm lg:text-base">
                <div className="liquid-glass p-3 sm:p-4 space-y-2">
                  <div className="flex items-center gap-2 text-primary font-medium">
                    <Users className="h-4 w-4" />
                    <span>Presentado por</span>
                  </div>
                  <div className="text-foreground font-semibold">ALAN AZUARA</div>
                </div>
                
                <div className="liquid-glass p-3 sm:p-4 space-y-2">
                  <div className="flex items-center gap-2 text-primary font-medium">
                    <Phone className="h-4 w-4" />
                    <span>Contacto</span>
                  </div>
                  <div className="text-foreground">
                    <div>+52 1 444 848 1209</div>
                  </div>
                </div>
                
                <div className="liquid-glass p-3 sm:p-4 space-y-2 sm:col-span-2">
                  <div className="flex items-center gap-2 text-primary font-medium">
                    <Target className="h-4 w-4" />
                    <span>Especialidad</span>
                  </div>
                  <div className="text-foreground">
                    <div>Módulos y Funcionalidades Propuestas</div>
                    <div className="text-sm text-muted-foreground">Captura de Voz Inteligente • Bitácoras Automatizadas • Control de Inventarios</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Módulos y Funcionalidades Juntify */}
        <div className="mb-12 lg:mb-24">
          <CostBreakdown title={<div className="flex items-center gap-3"><Brain className="h-8 w-8 text-primary" />Funcionalidades Revolucionarias de Juntify</div>} variant="primary">
            <div className="space-y-8">
              <div className="text-center space-y-6">
                <div className="text-3xl font-light text-primary leading-tight">
                  "Imagina un mundo donde cada conversación técnica se convierte automáticamente en conocimiento estructurado y accionable"
                </div>
                <p className="text-xl font-light text-muted-foreground max-w-5xl mx-auto leading-relaxed">
                  Juntify es la primera plataforma de IA que comprende el lenguaje técnico de tu planta y transforma comunicaciones verbales en sistemas inteligentes de gestión industrial. No más reportes perdidos, no más información fragmentada, no más decisiones basadas en suposiciones.
                </p>
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <div className="flex flex-col items-center gap-3 p-6">
                    <VoiceRecordingIcon />
                    <span className="text-sm text-muted-foreground">Captura Inteligente</span>
                  </div>
                  <div className="flex flex-col items-center gap-3 p-6">
                    <AIProcessingIcon />
                    <span className="text-sm text-muted-foreground">Procesamiento IA</span>
                  </div>
                  <div className="flex flex-col items-center gap-3 p-6">
                    <AnalyticsIcon />
                    <span className="text-sm text-muted-foreground">Análisis Avanzado</span>
                  </div>
                </div>
              </div>
              
              <div className="grid gap-6 lg:grid-cols-2">
                {/* Captura de Voz Inteligente */}
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="liquid-glass-intense p-6 cursor-pointer transition-all duration-300 hover:shadow-elegant group">
                      <div className="flex items-start gap-4">
                         <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors flex items-center justify-center">
                           <VoiceRecordingIcon />
                         </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-foreground mb-2 group-hover:text-primary transition-colors">Captura de Voz Inteligente</h4>
                          <p className="text-sm text-muted-foreground mb-3">Base Juntify - Grabación y transcripción automática</p>
                          <div className="flex items-center gap-2 text-xs text-accent">
                            <ArrowRight className="h-3 w-3" />
                            <span>Ver detalles</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl liquid-glass border-white/20">
                    <DialogHeader>
                      <DialogTitle className="flex items-center gap-3 text-xl">
                        <Mic className="h-6 w-6 text-primary" />
                        Captura de Voz Inteligente (Base Juntify)
                      </DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4 text-foreground">
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <div className="p-1 rounded bg-primary/10 mt-1">
                            <Smartphone className="h-3 w-3 text-primary" />
                          </div>
                          <span>Grabación de conversaciones, reuniones técnicas, reportes verbales y llamadas, desde dispositivos móviles o escritorio.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="p-1 rounded bg-primary/10 mt-1">
                            <Headphones className="h-3 w-3 text-primary" />
                          </div>
                          <span>Transcripción automática de alta precisión con identificación de hablantes.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="p-1 rounded bg-primary/10 mt-1">
                            <Layers3 className="h-3 w-3 text-primary" />
                          </div>
                          <span>Separación por temas, fechas, proyectos y responsables.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="p-1 rounded bg-primary/10 mt-1">
                            <Cloud className="h-3 w-3 text-primary" />
                          </div>
                          <span>Almacenamiento seguro, accesible y organizado.</span>
                        </li>
                      </ul>
                    </div>
                  </DialogContent>
                </Dialog>

                {/* Consultas con IA */}
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="liquid-glass-intense p-6 cursor-pointer transition-all duration-300 hover:shadow-elegant group">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-xl bg-accent/10 group-hover:bg-accent/20 transition-colors">
                          <Search className="h-6 w-6 text-accent" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-foreground mb-2 group-hover:text-accent transition-colors">Consultas con IA sobre Reuniones</h4>
                          <p className="text-sm text-muted-foreground mb-3">Preguntas en lenguaje natural sobre reuniones grabadas</p>
                          <div className="flex items-center gap-2 text-xs text-accent">
                            <ArrowRight className="h-3 w-3" />
                            <span>Ver detalles</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl liquid-glass border-white/20">
                    <DialogHeader>
                      <DialogTitle className="flex items-center gap-3 text-xl">
                        <Search className="h-6 w-6 text-accent" />
                        Consultas con IA sobre Reuniones y Reportes
                      </DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4 text-foreground">
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <div className="p-1 rounded bg-accent/10 mt-1">
                            <Target className="h-3 w-3 text-accent" />
                          </div>
                          <span>Selección de una o más reuniones grabadas para consultar información específica.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="p-1 rounded bg-accent/10 mt-1">
                            <MessageCircle className="h-3 w-3 text-accent" />
                          </div>
                          <span>Preguntas en lenguaje natural como: "¿Qué tareas quedaron pendientes en la reunión del lunes?"</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="p-1 rounded bg-accent/10 mt-1">
                            <Settings className="h-3 w-3 text-accent" />
                          </div>
                          <span>"¿Qué se dijo sobre la bomba de presión del área 4?"</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="p-1 rounded bg-accent/10 mt-1">
                            <CheckCircle2 className="h-3 w-3 text-accent" />
                          </div>
                          <span>La IA responde con contexto y precisión, citando el momento exacto en el que se mencionó.</span>
                        </li>
                      </ul>
                    </div>
                  </DialogContent>
                </Dialog>

                {/* Bitácoras Inteligentes */}
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="liquid-glass-intense p-6 cursor-pointer transition-all duration-300 hover:shadow-elegant group">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                          <FileText className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-foreground mb-2 group-hover:text-primary transition-colors">Bitácoras Inteligentes de Mantenimiento</h4>
                          <p className="text-sm text-muted-foreground mb-3">Registro verbal directo de intervenciones</p>
                          <div className="flex items-center gap-2 text-xs text-accent">
                            <ArrowRight className="h-3 w-3" />
                            <span>Ver detalles</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl liquid-glass border-white/20">
                    <DialogHeader>
                      <DialogTitle className="flex items-center gap-3 text-xl">
                        <FileText className="h-6 w-6 text-primary" />
                        Bitácoras Inteligentes de Mantenimiento
                      </DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4 text-foreground">
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <div className="p-1 rounded bg-primary/10 mt-1">
                            <Mic className="h-3 w-3 text-primary" />
                          </div>
                          <span>Registro verbal directo de intervenciones de mantenimiento.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="p-1 rounded bg-primary/10 mt-1">
                            <Brain className="h-3 w-3 text-primary" />
                          </div>
                          <span>La IA extrae tipo de tarea, equipo intervenido, técnico responsable, duración, materiales usados y resultado.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="p-1 rounded bg-primary/10 mt-1">
                            <Layers3 className="h-3 w-3 text-primary" />
                          </div>
                          <span>Clasificación automática por área, tipo de intervención y criticidad.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="p-1 rounded bg-primary/10 mt-1">
                            <CalendarDays className="h-3 w-3 text-primary" />
                          </div>
                          <span>Integración con calendario y cronograma de mantenimiento.</span>
                        </li>
                      </ul>
                    </div>
                  </DialogContent>
                </Dialog>

                {/* Control de Inventarios */}
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="liquid-glass-intense p-6 cursor-pointer transition-all duration-300 hover:shadow-elegant group">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-xl bg-accent/10 group-hover:bg-accent/20 transition-colors">
                          <Package className="h-6 w-6 text-accent" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-foreground mb-2 group-hover:text-accent transition-colors">Control de Inventarios Automatizado</h4>
                          <p className="text-sm text-muted-foreground mb-3">Relación entre bitácoras y movimientos de inventario</p>
                          <div className="flex items-center gap-2 text-xs text-accent">
                            <ArrowRight className="h-3 w-3" />
                            <span>Ver detalles</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl liquid-glass border-white/20">
                    <DialogHeader>
                      <DialogTitle className="flex items-center gap-3 text-xl">
                        <Package className="h-6 w-6 text-accent" />
                        Control de Inventarios Automatizado
                      </DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4 text-foreground">
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <div className="p-1 rounded bg-accent/10 mt-1">
                            <Zap className="h-3 w-3 text-accent" />
                          </div>
                          <span>Relación entre bitácoras habladas y movimientos de inventario.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="p-1 rounded bg-accent/10 mt-1">
                            <Settings className="h-3 w-3 text-accent" />
                          </div>
                          <span>Descuento automático de materiales usados.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="p-1 rounded bg-accent/10 mt-1">
                            <Monitor className="h-3 w-3 text-accent" />
                          </div>
                          <span>Actualización en tiempo real de stock disponible.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="p-1 rounded bg-accent/10 mt-1">
                            <Shield className="h-3 w-3 text-accent" />
                          </div>
                          <span>Alertas inteligentes por debajo de stock mínimo o uso inesperado.</span>
                        </li>
                      </ul>
                    </div>
                  </DialogContent>
                </Dialog>

                {/* Dashboard Central */}
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="liquid-glass-intense p-6 cursor-pointer transition-all duration-300 hover:shadow-elegant group">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                          <BarChart3 className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-foreground mb-2 group-hover:text-primary transition-colors">Dashboard Central de Comando</h4>
                          <p className="text-sm text-muted-foreground mb-3">Vista consolidada de operaciones</p>
                          <div className="flex items-center gap-2 text-xs text-accent">
                            <ArrowRight className="h-3 w-3" />
                            <span>Ver detalles</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl liquid-glass border-white/20">
                    <DialogHeader>
                      <DialogTitle className="flex items-center gap-3 text-xl">
                        <BarChart3 className="h-6 w-6 text-primary" />
                        Dashboard Central de Comando
                      </DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4 text-foreground">
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <div className="p-1 rounded bg-primary/10 mt-1">
                            <Monitor className="h-3 w-3 text-primary" />
                          </div>
                          <span>Vista consolidada de operaciones de mantenimiento por planta, área, equipo o responsable.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="p-1 rounded bg-primary/10 mt-1">
                            <BarChart3 className="h-3 w-3 text-primary" />
                          </div>
                          <span>Métricas clave: cumplimiento de tareas, uso de recursos, tiempo medio de atención.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="p-1 rounded bg-primary/10 mt-1">
                            <Target className="h-3 w-3 text-primary" />
                          </div>
                          <span>Indicadores predictivos basados en frecuencia de fallas o patrones de uso.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="p-1 rounded bg-primary/10 mt-1">
                            <FileText className="h-3 w-3 text-primary" />
                          </div>
                          <span>Exportación de reportes automáticos para gerencia.</span>
                        </li>
                      </ul>
                    </div>
                  </DialogContent>
                </Dialog>

                {/* Documentación Técnica */}
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="liquid-glass-intense p-6 cursor-pointer transition-all duration-300 hover:shadow-elegant group">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-xl bg-accent/10 group-hover:bg-accent/20 transition-colors">
                          <Brain className="h-6 w-6 text-accent" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-foreground mb-2 group-hover:text-accent transition-colors">Documentación Técnica con IA</h4>
                          <p className="text-sm text-muted-foreground mb-3">Generación automática con IA Generativa</p>
                          <div className="flex items-center gap-2 text-xs text-accent">
                            <ArrowRight className="h-3 w-3" />
                            <span>Ver detalles</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl liquid-glass border-white/20">
                    <DialogHeader>
                      <DialogTitle className="flex items-center gap-3 text-xl">
                        <Brain className="h-6 w-6 text-accent" />
                        Documentación Técnica con IA Generativa
                      </DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4 text-foreground">
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <div className="p-1 rounded bg-accent/10 mt-1">
                            <FileText className="h-3 w-3 text-accent" />
                          </div>
                          <span>Generación automática de reportes de mantenimiento en formato profesional.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="p-1 rounded bg-accent/10 mt-1">
                            <Settings className="h-3 w-3 text-accent" />
                          </div>
                          <span>Creación y actualización de manuales operativos.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="p-1 rounded bg-accent/10 mt-1">
                            <Target className="h-3 w-3 text-accent" />
                          </div>
                          <span>Recomendaciones técnicas personalizadas según el historial de cada equipo.</span>
                        </li>
                      </ul>
                    </div>
                  </DialogContent>
                </Dialog>

                {/* Seguridad y Control */}
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="liquid-glass-intense p-6 cursor-pointer transition-all duration-300 hover:shadow-elegant group">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                          <Lock className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-foreground mb-2 group-hover:text-primary transition-colors">Seguridad y Control de Accesos</h4>
                          <p className="text-sm text-muted-foreground mb-3">Roles personalizables por usuario</p>
                          <div className="flex items-center gap-2 text-xs text-accent">
                            <ArrowRight className="h-3 w-3" />
                            <span>Ver detalles</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl liquid-glass border-white/20">
                    <DialogHeader>
                      <DialogTitle className="flex items-center gap-3 text-xl">
                        <Lock className="h-6 w-6 text-primary" />
                        Seguridad y Control de Accesos
                      </DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4 text-foreground">
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <div className="p-1 rounded bg-primary/10 mt-1">
                            <UserCog className="h-3 w-3 text-primary" />
                          </div>
                          <span>Roles personalizables por tipo de usuario: técnico, supervisor, gerente.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="p-1 rounded bg-primary/10 mt-1">
                            <Shield className="h-3 w-3 text-primary" />
                          </div>
                          <span>Control total sobre quién puede ver, editar, aprobar o eliminar contenido.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="p-1 rounded bg-primary/10 mt-1">
                            <FileText className="h-3 w-3 text-primary" />
                          </div>
                          <span>Registro detallado de actividad por usuario (bitácora de auditoría).</span>
                        </li>
                      </ul>
                    </div>
                  </DialogContent>
                </Dialog>

                {/* Plataforma Unificada */}
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="liquid-glass-intense p-6 cursor-pointer transition-all duration-300 hover:shadow-elegant group">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-xl bg-accent/10 group-hover:bg-accent/20 transition-colors">
                          <Zap className="h-6 w-6 text-accent" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-foreground mb-2 group-hover:text-accent transition-colors">Plataforma Unificada e Integración</h4>
                          <p className="text-sm text-muted-foreground mb-3">Una sola interfaz, experiencia continua</p>
                          <div className="flex items-center gap-2 text-xs text-accent">
                            <ArrowRight className="h-3 w-3" />
                            <span>Ver detalles</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl liquid-glass border-white/20">
                    <DialogHeader>
                      <DialogTitle className="flex items-center gap-3 text-xl">
                        <Zap className="h-6 w-6 text-accent" />
                        Plataforma Unificada e Integración con Juntify
                      </DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4 text-foreground">
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <div className="p-1 rounded bg-accent/10 mt-1">
                            <Monitor className="h-3 w-3 text-accent" />
                          </div>
                          <span>Una sola interfaz, con experiencia de usuario continua.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="p-1 rounded bg-accent/10 mt-1">
                            <Database className="h-3 w-3 text-accent" />
                          </div>
                          <span>API abierta para integrarse con ERPs, CRMs u otros sistemas existentes.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="p-1 rounded bg-accent/10 mt-1">
                            <Zap className="h-3 w-3 text-accent" />
                          </div>
                          <span>Actualizaciones y mejoras continuas sin interrumpir la operación.</span>
                        </li>
                      </ul>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </CostBreakdown>
        </div>

        {/* Centered Features Section */}
        <div className="mb-12 lg:mb-24">
          <CenteredFeatures />
        </div>

        {/* Resultados Esperados */}
        <div className="mb-12 lg:mb-24 relative">
          <SectionBackground type="results" />
          <CostBreakdown title={<div className="flex items-center gap-3"><Target className="h-8 w-8 text-primary" />Resultados Esperados</div>} variant="accent">
            <div className="space-y-6">
              <div className="grid gap-4 lg:grid-cols-2">
                <div className="liquid-glass-intense p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <h4 className="font-medium text-foreground">Reducción de Errores</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">Reducción de errores y omisiones en el registro de tareas.</p>
                </div>
                
                <div className="liquid-glass-intense p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Zap className="h-5 w-5 text-accent" />
                    <h4 className="font-medium text-foreground">Aumento de Productividad</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">Aumento de productividad por claridad y trazabilidad.</p>
                </div>
                
                <div className="liquid-glass-intense p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Brain className="h-5 w-5 text-primary" />
                    <h4 className="font-medium text-foreground">Toma de Decisiones</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">Mejora en la toma de decisiones mediante datos reales, no supuestos.</p>
                </div>
                
                <div className="liquid-glass-intense p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <FileText className="h-5 w-5 text-accent" />
                    <h4 className="font-medium text-foreground">Estandarización</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">Estandarización de reportes sin esfuerzo adicional del personal.</p>
                </div>
                
                <div className="liquid-glass-intense p-6 lg:col-span-2">
                  <div className="flex items-center gap-3 mb-3">
                    <Shield className="h-5 w-5 text-primary" />
                    <h4 className="font-medium text-foreground">Trazabilidad Total</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">Trazabilidad total de cada acción, cada pieza, cada intervención.</p>
                </div>
              </div>
            </div>
          </CostBreakdown>
        </div>

        {/* Siguiente Paso */}
        <div className="mb-12 lg:mb-24 relative">
          <SectionBackground type="footer" />
          <CostBreakdown title={<div className="flex items-center gap-3"><Star className="h-8 w-8 text-primary" />Siguiente Paso</div>} variant="primary">
            <div className="space-y-8">
              <div className="text-center space-y-6">
                <p className="text-lg font-light text-muted-foreground max-w-4xl mx-auto">
                  Podemos coordinar una demostración funcional de Juntify y discutir los requerimientos específicos del sistema a medida que GM San Luis Potosí necesita.
                </p>
                <div className="text-2xl font-light text-primary">
                  Estamos listos para diseñar una solución a la altura de su operación
                </div>
                <p className="text-lg text-muted-foreground">inteligente, precisa y construida para durar.</p>
              </div>
              
              <div className="text-center space-y-6">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="apple-button text-lg px-12 py-4 text-foreground hover:text-foreground" onClick={() => {
                  const message = `*JUNTIFY - PRESENTACIÓN PARA GM SAN LUIS POTOSÍ*
*ALAN AZUARA*

---

*MÓDULOS Y FUNCIONALIDADES PROPUESTAS:*

🎤 *CAPTURA DE VOZ INTELIGENTE*
• Grabación de conversaciones, reuniones técnicas, reportes verbales
• Transcripción automática de alta precisión
• Separación por temas, fechas, proyectos y responsables

🔍 *CONSULTAS CON IA*
• Preguntas en lenguaje natural sobre reuniones grabadas
• Respuestas con contexto y precisión
• Citado del momento exacto mencionado

📋 *BITÁCORAS INTELIGENTES*
• Registro verbal directo de intervenciones
• Extracción automática de datos técnicos
• Clasificación por área, tipo y criticidad

📦 *CONTROL DE INVENTARIOS*
• Descuento automático de materiales
• Actualización en tiempo real de stock
• Alertas inteligentes de reabastecimiento

📊 *DASHBOARD CENTRAL*
• Vista consolidada de operaciones
• Métricas clave y análisis predictivo
• Reportes automáticos para gerencia

---

¡Hola! Me interesa conocer más detalles sobre Juntify para GM San Luis Potosí.`;
                  const whatsappUrl = `https://wa.me/5214448481209?text=${encodeURIComponent(message)}`;
                  window.open(whatsappUrl, '_blank');
                }}>
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Conocer Más
                  </Button>
                  
                  <Button size="lg" variant="outline" className="text-lg px-12 py-4" onClick={() => window.open(`tel:+5214448481209`, '_self')}>
                    📞 Llamar Ahora
                  </Button>
                </div>
                
                <div className="liquid-glass-intense p-6 max-w-md mx-auto">
                  <div className="text-center space-y-2">
                    <p className="text-lg font-medium text-foreground">Alan Azuara</p>
                    <p className="text-sm text-muted-foreground">Especialista en Módulos y Funcionalidades</p>
                    <p className="text-sm text-primary font-medium">Juntify</p>
                    <p className="text-sm text-muted-foreground">Tel: +52 1 444 848 1209</p>
                  </div>
                </div>
                
                <p className="text-xs text-muted-foreground">
                  Transformando la gestión de mantenimiento industrial con Inteligencia Artificial.
                </p>
              </div>
            </div>
          </CostBreakdown>
        </div>
      </div>
    </div>;
};
export default Index;