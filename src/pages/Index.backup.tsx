import React from "react";
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
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background relative overflow-hidden">
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
        {/* Juntify Header - Improved */}
        <div className="liquid-glass-intense p-6 sm:p-8 lg:p-16 mb-8 lg:mb-24 relative">
          <SectionBackground type="header" />
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-20">
            {/* Juntify Logo Section - Enhanced */}
            <div className="flex flex-col items-center gap-6 lg:flex-shrink-0">
              <div className="relative group">
                <div className="logo-glow bg-white/20 backdrop-blur-md rounded-3xl p-4 sm:p-6 lg:p-8 border border-white/40 shadow-2xl transition-all duration-300 group-hover:scale-105">
                  <img src="/lovable-uploads/f0c776a6-8143-4749-b172-b65367109b45.png" alt="Juntify Logo" className="h-16 sm:h-20 lg:h-28 w-auto filter drop-shadow-lg" />
                </div>
                <div className="absolute -bottom-3 -right-3 bg-gradient-to-r from-primary to-primary-glow backdrop-blur-sm rounded-xl px-4 py-2 border border-primary/30 shadow-lg">
                  <span className="text-sm font-semibold text-white">Juntify AI</span>
                </div>
              </div>
            </div>

            {/* Investment Information - Redesigned */}
            <div className="flex-1 text-center lg:text-left space-y-8">
              <div className="space-y-4">
                <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
                  <div className="p-2 bg-primary/10 rounded-xl">
                    <Mic className="h-8 sm:h-10 lg:h-12 w-8 sm:w-10 lg:w-12 text-primary" />
                  </div>
                  <h1 className="text-2xl sm:text-3xl lg:text-5xl font-light text-foreground tracking-wide">
                    JUNTIFY
                  </h1>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-7xl font-extralight text-primary tracking-wider leading-tight text-glow mb-4">
                  PROPUESTA PARA MARIO HERNÁNDEZ
                </h2>
                <div className="bg-gradient-to-r from-primary/10 to-accent/10 backdrop-blur-sm rounded-2xl p-4 lg:p-6 border border-primary/20">
                  <p className="text-xl sm:text-2xl lg:text-3xl font-light text-foreground tracking-wide">
                    $2,700,000 MXN
                  </p>
                  <p className="text-base sm:text-lg lg:text-xl font-light text-muted-foreground mt-2">
                    15% Participación en Todas las Ventas
                  </p>
                </div>
              </div>
              
              {/* Enhanced Investment Metrics Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 text-sm lg:text-base">
                <div className="liquid-glass-intense p-4 lg:p-6 space-y-3 text-center transform transition-all duration-300 hover:scale-105">
                  <div className="flex items-center justify-center gap-2 text-primary font-semibold mb-2">
                    <Calculator className="h-5 w-5" />
                    <span>Inversión Total</span>
                  </div>
                  <div className="text-2xl lg:text-3xl font-bold text-primary">$2.7M</div>
                  <div className="text-xs text-muted-foreground">
                    $1.8M Desarrollo • $900K Marketing
                  </div>
                </div>
                
                <div className="liquid-glass-intense p-4 lg:p-6 space-y-3 text-center transform transition-all duration-300 hover:scale-105">
                  <div className="flex items-center justify-center gap-2 text-accent font-semibold mb-2">
                    <Target className="h-5 w-5" />
                    <span>ROI por Venta</span>
                  </div>
                  <div className="text-2xl lg:text-3xl font-bold text-accent">$3.78M</div>
                  <div className="text-xs text-muted-foreground">
                    Venta promedio: $25.2M MXN
                  </div>
                </div>
                
                <div className="liquid-glass-intense p-4 lg:p-6 space-y-3 text-center transform transition-all duration-300 hover:scale-105 sm:col-span-2 lg:col-span-1">
                  <div className="flex items-center justify-center gap-2 text-primary font-semibold mb-2">
                    <Gem className="h-5 w-5" />
                    <span>Ya Invertido</span>
                  </div>
                  <div className="text-2xl lg:text-3xl font-bold text-primary">$6.3M</div>
                  <div className="text-xs text-muted-foreground">
                    12 meses • Plataforma funcional
                  </div>
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
                       <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mb-4">
                         <h5 className="font-semibold text-primary mb-2 flex items-center gap-2">
                           <Database className="h-4 w-4" />
                           Infraestructura Empresarial
                         </h5>
                         <p className="text-sm text-muted-foreground">
                           Sistema adaptable que se integra con servidores corporativos existentes, proporcionando máxima seguridad y control de datos.
                         </p>
                       </div>
                       
                       <ul className="space-y-3">
                         <li className="flex items-start gap-3">
                           <div className="p-1 rounded bg-primary/10 mt-1">
                             <Shield className="h-3 w-3 text-primary" />
                           </div>
                           <span><strong>Certificados SSL/TLS:</strong> Conexiones encriptadas end-to-end para todas las comunicaciones.</span>
                         </li>
                         <li className="flex items-start gap-3">
                           <div className="p-1 rounded bg-primary/10 mt-1">
                             <Database className="h-3 w-3 text-primary" />
                           </div>
                           <span><strong>Base de Datos Propia:</strong> MySQL en servidor de GM con accesos controlados y backup automático.</span>
                         </li>
                         <li className="flex items-start gap-3">
                           <div className="p-1 rounded bg-primary/10 mt-1">
                             <Headphones className="h-3 w-3 text-primary" />
                           </div>
                           <span><strong>Audios Seguros:</strong> Grabaciones almacenadas en el mismo servidor de GM, sin transferencia a terceros.</span>
                         </li>
                         <li className="flex items-start gap-3">
                           <div className="p-1 rounded bg-primary/10 mt-1">
                             <UserCog className="h-3 w-3 text-primary" />
                           </div>
                           <span><strong>Roles Personalizables:</strong> Control granular por tipo de usuario: técnico, supervisor, gerente, administrador.</span>
                         </li>
                         <li className="flex items-start gap-3">
                           <div className="p-1 rounded bg-primary/10 mt-1">
                             <Lock className="h-3 w-3 text-primary" />
                           </div>
                           <span><strong>Control de Accesos:</strong> Autenticación multi-factor y permisos específicos por módulo.</span>
                         </li>
                         <li className="flex items-start gap-3">
                           <div className="p-1 rounded bg-primary/10 mt-1">
                             <Monitor className="h-3 w-3 text-primary" />
                           </div>
                           <span><strong>Auditoría Completa:</strong> Log detallado de todas las acciones para cumplimiento normativo.</span>
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

        {/* Oportunidad de Inversión - Rediseñada */}
        <div className="mb-12 lg:mb-24 relative">
          <SectionBackground type="footer" />
          <CostBreakdown title={<div className="flex items-center gap-4"><Calculator className="h-10 w-10 text-primary" />Oportunidad de Inversión Única</div>} variant="primary">
            <div className="space-y-12">
              
              {/* Hero Investment Statement */}
              <div className="text-center space-y-6 p-8 bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl border border-primary/20">
                <h3 className="text-3xl lg:text-4xl font-light text-primary">
                  Recupere su inversión completa en la primera venta
                </h3>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Con su inversión de <span className="font-semibold text-primary">$2.7M MXN</span>, 
                  obtendrá <span className="font-semibold text-accent">$3.78M MXN</span> por cada implementación vendida.
                </p>
              </div>

              {/* Investment Breakdown Grid */}
              <div className="grid gap-8 lg:grid-cols-2">
                <div className="liquid-glass-intense p-8 border-l-4 border-primary">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-primary/10 rounded-xl">
                      <Target className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-medium text-foreground">Inversión Solicitada</h4>
                      <p className="text-muted-foreground">Para acelerar el lanzamiento</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="text-4xl font-light text-primary mb-4">$2,700,000 MXN</div>
                    <div className="space-y-2 text-muted-foreground">
                      <div className="flex justify-between items-center p-3 bg-primary/5 rounded-lg">
                        <span>Desarrollo Acelerado (3 meses)</span>
                        <span className="font-semibold">$1,800,000</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-primary/5 rounded-lg">
                        <span>Marketing y Ventas</span>
                        <span className="font-semibold">$900,000</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-accent/10 rounded-lg border border-accent/20">
                        <span className="font-medium text-accent">Participación en Ventas</span>
                        <span className="font-bold text-accent">15%</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="liquid-glass-intense p-8 border-l-4 border-accent">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-accent/10 rounded-xl">
                      <Gem className="h-8 w-8 text-accent" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-medium text-foreground">Activos Desarrollados</h4>
                      <p className="text-muted-foreground">Ya invertido y funcionando</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="text-4xl font-light text-accent mb-4">$6,300,000 MXN</div>
                    <div className="space-y-2 text-muted-foreground">
                      <div className="flex justify-between items-center p-3 bg-accent/5 rounded-lg">
                        <span>Plataforma IA funcional</span>
                        <span className="text-green-600 font-semibold">✓</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-accent/5 rounded-lg">
                        <span>Dashboard empresarial</span>
                        <span className="text-green-600 font-semibold">✓</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-accent/5 rounded-lg">
                        <span>Equipo técnico especializado</span>
                        <span className="text-green-600 font-semibold">✓</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-accent/5 rounded-lg">
                        <span>12 meses de desarrollo</span>
                        <span className="text-green-600 font-semibold">✓</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* ROI Calculator */}
              <div className="liquid-glass p-8 bg-gradient-to-r from-primary/10 to-accent/10">
                <div className="text-center space-y-6">
                  <h4 className="text-3xl font-light text-primary">Modelo de Retorno Garantizado</h4>
                  <p className="text-lg text-muted-foreground">Cada implementación empresarial genera:</p>
                  
                  <div className="grid gap-6 md:grid-cols-3 mt-8">
                    <div className="text-center p-6 bg-white/5 rounded-2xl">
                      <div className="text-3xl font-bold text-primary mb-2">$25.2M</div>
                      <div className="text-sm text-muted-foreground">Precio promedio por venta</div>
                    </div>
                    <div className="text-center p-6 bg-white/5 rounded-2xl border-2 border-accent/30">
                      <div className="text-3xl font-bold text-accent mb-2">$3.78M</div>
                      <div className="text-sm text-muted-foreground">Su participación (15%)</div>
                    </div>
                    <div className="text-center p-6 bg-white/5 rounded-2xl">
                      <div className="text-3xl font-bold text-primary mb-2">140%</div>
                      <div className="text-sm text-muted-foreground">ROI en primera venta</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Enhanced Call-to-Action Section */}
              <div className="space-y-10">
                <div className="text-center space-y-6 p-6 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl border border-primary/10">
                  <p className="text-lg font-light text-muted-foreground max-w-4xl mx-auto">
                    Con su inversión, aceleramos el desarrollo y lanzamiento al mercado. Sin ella, el proyecto continuará pero tardará 12-18 meses adicionales.
                  </p>
                  <div className="text-2xl font-light text-primary">
                    Una oportunidad única en la transformación digital industrial
                  </div>
                </div>
                
                <div className="text-center space-y-8">
                  {/* Enhanced Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button 
                      size="lg" 
                      className="bg-gradient-to-r from-primary to-primary-glow hover:from-primary-glow hover:to-primary text-lg px-16 py-6 text-white font-medium shadow-xl transition-all duration-300 transform hover:scale-105" 
                      onClick={() => {
                        const message = `*JUNTIFY - PROPUESTA DE INVERSIÓN PARA MARIO HERNÁNDEZ*
*ALAN AZUARA*

---

*OPORTUNIDAD DE INVERSIÓN:*

💰 *INVERSIÓN SOLICITADA: $2,700,000 MXN*
• $1.8M Desarrollo acelerado (3 meses)
• $900K Marketing y ventas
• 15% participación en todas las ventas

💎 *YA INVERTIDO: $6,300,000 MXN*
• 12 meses de desarrollo completados
• Plataforma IA funcional
• Equipo técnico especializado

📈 *MODELO DE RETORNO:*
• Venta promedio: $25,200,000 MXN
• Su participación: $3,780,000 por venta (15%)
• ROI: 140% en primera venta
• Tiempo al mercado: 3 meses

🏭 *FUNCIONALIDADES REVOLUCIONARIAS:*

🎤 *CAPTURA DE VOZ INTELIGENTE*
• Grabación y transcripción automática
• Separación por temas y responsables

🔍 *CONSULTAS CON IA*
• Preguntas en lenguaje natural sobre reuniones
• Respuestas con contexto y precisión

📋 *BITÁCORAS INTELIGENTES*
• Registro verbal directo de intervenciones
• Extracción automática de datos técnicos

📦 *CONTROL DE INVENTARIOS*
• Descuento automático de materiales
• Alertas inteligentes de reabastecimiento

📊 *DASHBOARD EMPRESARIAL*
• Vista consolidada de operaciones
• Reportes automáticos para gerencia

---

¡Interesado en esta oportunidad de inversión en Juntify! - Mario Hernández`;
                        const whatsappUrl = `https://wa.me/5214448481209?text=${encodeURIComponent(message)}`;
                        window.open(whatsappUrl, '_blank');
                      }}
                    >
                      <MessageCircle className="h-6 w-6 mr-3" />
                      Solicitar Reunión con Mario
                    </Button>
                    
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="text-lg px-16 py-6 border-2 hover:bg-primary/10 transition-all duration-300 transform hover:scale-105" 
                      onClick={() => window.open(`tel:+5214448481209`, '_self')}
                    >
                      <Phone className="h-6 w-6 mr-3" />
                      Llamar Ahora
                    </Button>
                  </div>
                  
                  {/* Enhanced Contact Card */}
                  <div className="liquid-glass-intense p-8 max-w-lg mx-auto border border-primary/20">
                    <div className="text-center space-y-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-glow rounded-full flex items-center justify-center mx-auto">
                        <UserCog className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <p className="text-xl font-semibold text-foreground">Alan Azuara</p>
                        <p className="text-base text-primary font-medium">Founder & CEO</p>
                        <p className="text-base text-accent font-medium">Juntify AI</p>
                      </div>
                      <div className="pt-4 border-t border-border/30">
                        <div className="flex items-center justify-center gap-2 text-muted-foreground">
                          <Phone className="h-4 w-4" />
                          <span className="font-medium">+52 1 444 848 1209</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground italic">
                    "La oportunidad de transformar la industria mexicana con Inteligencia Artificial"
                  </p>
                </div>
              </div>
            </div>
          </CostBreakdown>
        </div>
      </div>
    </div>
  );
};

export default Index;
export default Index;