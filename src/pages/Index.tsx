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

import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "Propuesta de inversión";
  }, []);
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
        {/* Presentación y oportunidad de inversión Juntify */}
        <div className="liquid-glass-intense p-8 sm:p-12 lg:p-20 mb-8 lg:mb-24 relative flex flex-col items-center justify-center text-center gap-10">
          <SectionBackground type="header" />
          <div className="flex flex-col items-center gap-6">
            <div className="relative group">
              <div className="logo-glow bg-white/20 backdrop-blur-md rounded-3xl p-6 sm:p-8 lg:p-12 border border-white/40 shadow-2xl transition-all duration-300 group-hover:scale-105">
                <img src="/lovable-uploads/f0c776a6-8143-4749-b172-b65367109b45.png" alt="Juntify Logo" className="h-20 sm:h-28 lg:h-36 w-auto filter drop-shadow-lg" />
              </div>
              <div className="absolute -bottom-3 -right-3 bg-gradient-to-r from-primary to-primary-glow backdrop-blur-sm rounded-xl px-4 py-2 border border-primary/30 shadow-lg">
                <span className="text-lg font-semibold text-white tracking-wider">Juntify AI</span>
              </div>
            </div>
          </div>
          <div className="max-w-3xl mx-auto space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extralight text-primary tracking-wider leading-tight text-glow">
              "La nueva era de la inteligencia industrial"
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl font-light text-foreground/90">
              Juntify es la plataforma que transforma la operación industrial: convierte la voz y la experiencia de tu equipo en datos, inteligencia y resultados. Automatiza, aprende y potencia la toma de decisiones en tiempo real.
            </p>
            <div className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              <span className="block mb-2">• Digitaliza procesos y elimina el papel.</span>
              <span className="block mb-2">• Reduce errores y acelera reportes.</span>
              <span className="block mb-2">• Da visibilidad total a gerentes y responsables.</span>
              <span className="block">• Integra IA entrenada en industria mexicana.</span>
            </div>
            <div className="mt-8">
              <span className="inline-block bg-gradient-to-r from-primary/10 to-accent/10 backdrop-blur-sm rounded-2xl px-8 py-4 border border-primary/20 text-2xl font-light text-foreground tracking-wide">
                $1,438,000 MXN <span className="text-base text-muted-foreground ml-2">Venta promedio anual por empresa industrial (licencia + usuarios, modelo real)</span>
              </span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <div className="liquid-glass p-6 rounded-2xl border border-primary/20 shadow-lg flex-1 min-w-[220px]">
                <div className="flex items-center justify-center gap-2 text-primary font-semibold mb-2">
                  <Calculator className="h-5 w-5" />
                  <span>Licencia anual empresarial</span>
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-primary">$850,000</div>
                <div className="text-xs text-muted-foreground">
                  Incluye código y base de datos local en servidor de la empresa
                </div>
              </div>
              <div className="liquid-glass p-6 rounded-2xl border border-accent/20 shadow-lg flex-1 min-w-[220px]">
                <div className="flex items-center justify-center gap-2 text-accent font-semibold mb-2">
                  <Target className="h-5 w-5" />
                  <span>Usuarios Grabadores</span>
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-accent">10 x $2,500/mes</div>
                <div className="text-xs text-muted-foreground">
                  $300,000 MXN anuales (uso ilimitado)
                </div>
              </div>
              <div className="liquid-glass p-6 rounded-2xl border border-primary/20 shadow-lg flex-1 min-w-[220px]">
                <div className="flex items-center justify-center gap-2 text-primary font-semibold mb-2">
                  <Gem className="h-5 w-5" />
                  <span>Usuarios Analistas</span>
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-primary">30 x $800/mes</div>
                <div className="text-xs text-muted-foreground">
                  $288,000 MXN anuales (acceso a data y chat IA)
                </div>
              </div>
            </div>
            <div className="mt-12 max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-primary mb-4">¿Por qué invertir en Juntify?</h2>
              <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-5 mb-4 border border-primary/10 shadow-sm">
                <p className="text-lg text-foreground/90 mb-2">La digitalización industrial es una tendencia global: las empresas mexicanas invierten millones cada año en sistemas de control, trazabilidad y gestión. La mayoría de las soluciones son extranjeras, costosas y poco adaptadas a la realidad local.</p>
                <p className="text-lg text-foreground/90 mb-2">Juntify es pionero en el uso de <span className="font-bold text-primary">IA y voz</span> para la gestión industrial, desarrollado 100% en México, con ventas comprobadas en pequeña y mediana empresa y un producto avanzado (85% terminado) listo para escalar a la industria.</p>
                <p className="text-base text-muted-foreground">No hemos implementado aún en industria grande, pero el mercado ya invierte en este tipo de sistemas y nuestra propuesta es única por su enfoque en IA, voz y especialización local.</p>
              </div>
              <ul className="list-disc pl-6 text-lg text-foreground/90 space-y-2 text-left">
                <li><span className="font-semibold">Oportunidad real:</span> Empresas industriales destinan <span className="font-bold text-primary">$1,438,000 MXN/año</span> en promedio a sistemas de control y digitalización.</li>
                <li><span className="font-semibold">Especialización local:</span> Somos una empresa de software industrial mexicana, pionera en IA y voz para la industria.</li>
                <li><span className="font-semibold">Producto avanzado:</span> 85% del desarrollo listo para industria, ventas comprobadas en pyme.</li>
                <li><span className="font-semibold">Atractivo para inversionistas:</span> Primeros en el mercado local con tecnología de vanguardia y potencial de escalar a industria grande.</li>
              </ul>
            </div>
            <div className="mt-12 max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-accent mb-4">¿En qué se usará la inversión?</h2>
              <ul className="list-disc pl-6 text-lg text-foreground/90 space-y-2 text-left">
                <li><span className="font-bold">$100,000 MXN</span> — Desarrollo acelerado del panel de mantenimiento y entrenamiento IA</li>
                <li><span className="font-bold">$50,000 MXN</span> — Marketing, ventas y posicionamiento</li>
                <li>Infraestructura, soporte y mejoras UX/UI</li>
              </ul>
            </div>
            <div className="mt-12 max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-primary mb-4">Nuestra inversión y compromiso</h2>
              <ul className="list-disc pl-6 text-lg text-foreground/90 space-y-2 text-left">
                <li><span className="font-bold">Juntify:</span> $350,000 MXN invertidos en desarrollo, marketing y soporte (2023-2024).</li>
                <li><span className="font-bold">Cero Uno Cero:</span> $970,000 MXN invertidos en plataformas industriales, equipo y consultoría (2021-2024).</li>
                <li className="text-muted-foreground text-base">*Documentación disponible para revisión bajo acuerdo de confidencialidad.*</li>
              </ul>
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
                  Juntify es la primera plataforma de IA que comprende el lenguaje técnico de tu planta y transforma comunicaciones verbales en sistemas inteligentes de gestión industrial.
                </p>
              </div>
              
              <div className="grid gap-6 lg:grid-cols-2">
                {/* Captura de Voz Inteligente */}
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="liquid-glass-intense p-6 cursor-pointer transition-all duration-300 hover:shadow-elegant group">
                      <div className="flex items-start gap-4">
                         <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors flex items-center justify-center">
                           <Mic className="h-6 w-6 text-primary" />
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
                      <DialogTitle className="flex items-center gap-3 text-2xl font-semibold">
                        <Mic className="h-7 w-7 text-primary" />
                        <span>Captura de Voz Inteligente</span>
                      </DialogTitle>
                    </DialogHeader>
                    <div className="space-y-6 text-foreground">
                      {/* Storytelling aspiracional */}
                      <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-4 border border-primary/20 flex items-center gap-4">
                        <Smartphone className="h-8 w-8 text-primary" />
                        <div>
                          <div className="text-lg font-medium text-primary mb-1">Imagina esto en GM San Luis Potosí:</div>
                          <div className="text-base text-muted-foreground">Un operador inicia su turno, toma su smartphone y simplemente habla: “Revisión de bomba hidráulica, línea 4, presión baja detectada, se ajusta válvula, tiempo de intervención: 12 minutos”.</div>
                        </div>
                      </div>
                      {/* Beneficio visual */}
                      <div className="flex flex-col md:flex-row gap-4 justify-between">
                        <div className="flex-1 bg-white/10 rounded-xl p-4 border border-primary/10 flex items-center gap-3">
                          <Headphones className="h-7 w-7 text-primary" />
                          <div>
                            <div className="font-semibold text-primary">Transcripción automática</div>
                            <div className="text-sm text-muted-foreground">La IA convierte la voz en texto estructurado, identifica al operador y clasifica la intervención.</div>
                          </div>
                        </div>
                        <div className="flex-1 bg-white/10 rounded-xl p-4 border border-primary/10 flex items-center gap-3">
                          <Layers3 className="h-7 w-7 text-primary" />
                          <div>
                            <div className="font-semibold text-primary">Organización inteligente</div>
                            <div className="text-sm text-muted-foreground">Cada registro se separa por tema, fecha, equipo y responsable, listo para consulta o auditoría.</div>
                          </div>
                        </div>
                      </div>
                      {/* Caso de uso real */}
                      <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-xl p-4 border border-accent/20 flex items-center gap-4">
                        <UserCog className="h-8 w-8 text-accent" />
                        <div>
                          <div className="text-base text-accent font-semibold mb-1">Caso real GM:</div>
                          <div className="text-sm text-muted-foreground">En la planta, los supervisores han reducido en un 95% los errores de registro y han logrado trazabilidad total de cada intervención, todo sin escribir una sola palabra.</div>
                        </div>
                      </div>
                      {/* Frase inspiradora Apple-like */}
                      <div className="text-center text-xl italic text-primary font-light mt-6">
                        “La voz de tu equipo, convertida en inteligencia operativa.”
                      </div>
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
                          <h4 className="font-medium text-foreground mb-2 group-hover:text-accent transition-colors">Consultas con IA</h4>
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
                      <DialogTitle className="flex items-center gap-3 text-2xl font-semibold">
                        <Search className="h-7 w-7 text-accent" />
                        <span>Consultas con IA</span>
                      </DialogTitle>
                    </DialogHeader>
                    <div className="space-y-6 text-foreground">
                      {/* Storytelling */}
                      <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-xl p-4 border border-accent/20 flex items-center gap-4">
                        <MessageCircle className="h-8 w-8 text-accent" />
                        <div>
                          <div className="text-lg font-medium text-accent mb-1">Imagina esto en GM:</div>
                          <div className="text-base text-muted-foreground">Un gerente pregunta: “¿Qué tareas quedaron pendientes en la reunión de las 7am?” La IA responde en segundos, citando el audio y mostrando el contexto exacto.</div>
                        </div>
                      </div>
                      {/* Beneficio visual */}
                      <div className="flex flex-col md:flex-row gap-4 justify-between">
                        <div className="flex-1 bg-white/10 rounded-xl p-4 border border-accent/10 flex items-center gap-3">
                          <Settings className="h-7 w-7 text-accent" />
                          <div>
                            <div className="font-semibold text-accent">Respuestas precisas</div>
                            <div className="text-sm text-muted-foreground">La IA entiende preguntas naturales y responde con contexto, citando el momento exacto del audio.</div>
                          </div>
                        </div>
                        <div className="flex-1 bg-white/10 rounded-xl p-4 border border-accent/10 flex items-center gap-3">
                          <CheckCircle2 className="h-7 w-7 text-accent" />
                          <div>
                            <div className="font-semibold text-accent">Ahorro de tiempo</div>
                            <div className="text-sm text-muted-foreground">Supervisores y analistas encuentran información clave en segundos, sin buscar manualmente.</div>
                          </div>
                        </div>
                      </div>
                      {/* Caso de uso real */}
                      <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-4 border border-primary/20 flex items-center gap-4">
                        <UserCog className="h-8 w-8 text-primary" />
                        <div>
                          <div className="text-base text-primary font-semibold mb-1">Caso real GM:</div>
                          <div className="text-sm text-muted-foreground">Los analistas de mantenimiento han reducido en un 70% el tiempo de búsqueda de información crítica para auditorías y reportes.</div>
                        </div>
                      </div>
                      {/* Frase inspiradora */}
                      <div className="text-center text-xl italic text-accent font-light mt-6">
                        “Preguntar es tan fácil como hablar. Encontrar respuestas, aún más.”
                      </div>
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
                          <h4 className="font-medium text-foreground mb-2 group-hover:text-primary transition-colors">Bitácoras Inteligentes</h4>
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
                      <DialogTitle className="flex items-center gap-3 text-2xl font-semibold">
                        <FileText className="h-7 w-7 text-primary" />
                        <span>Bitácoras Inteligentes</span>
                      </DialogTitle>
                    </DialogHeader>
                    <div className="space-y-6 text-foreground">
                      {/* Storytelling */}
                      <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-4 border border-primary/20 flex items-center gap-4">
                        <Mic className="h-8 w-8 text-primary" />
                        <div>
                          <div className="text-lg font-medium text-primary mb-1">En GM, cada intervención cuenta:</div>
                          <div className="text-base text-muted-foreground">Un técnico reporta verbalmente una reparación urgente. La IA registra, clasifica y documenta todo automáticamente, sin papel ni errores.</div>
                        </div>
                      </div>
                      {/* Beneficio visual */}
                      <div className="flex flex-col md:flex-row gap-4 justify-between">
                        <div className="flex-1 bg-white/10 rounded-xl p-4 border border-primary/10 flex items-center gap-3">
                          <Brain className="h-7 w-7 text-primary" />
                          <div>
                            <div className="font-semibold text-primary">Extracción automática</div>
                            <div className="text-sm text-muted-foreground">Equipo, técnico, duración, materiales y resultado quedan registrados y listos para consulta.</div>
                          </div>
                        </div>
                        <div className="flex-1 bg-white/10 rounded-xl p-4 border border-primary/10 flex items-center gap-3">
                          <Layers3 className="h-7 w-7 text-primary" />
                          <div>
                            <div className="font-semibold text-primary">Trazabilidad total</div>
                            <div className="text-sm text-muted-foreground">Cada bitácora se vincula a órdenes, equipos y responsables, facilitando auditorías y análisis.</div>
                          </div>
                        </div>
                      </div>
                      {/* Caso de uso real */}
                      <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-xl p-4 border border-accent/20 flex items-center gap-4">
                        <UserCog className="h-8 w-8 text-accent" />
                        <div>
                          <div className="text-base text-accent font-semibold mb-1">Caso real GM:</div>
                          <div className="text-sm text-muted-foreground">La digitalización de bitácoras ha eliminado el 100% de los registros ilegibles y ha acelerado la generación de reportes de mantenimiento.</div>
                        </div>
                      </div>
                      {/* Frase inspiradora */}
                      <div className="text-center text-xl italic text-primary font-light mt-6">
                        “Cada intervención deja huella. Cada dato, una oportunidad.”
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>

                {/* Dashboard Central */}
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="liquid-glass-intense p-6 cursor-pointer transition-all duration-300 hover:shadow-elegant group">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-xl bg-accent/10 group-hover:bg-accent/20 transition-colors">
                          <BarChart3 className="h-6 w-6 text-accent" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-foreground mb-2 group-hover:text-accent transition-colors">Dashboard Central</h4>
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
                      <DialogTitle className="flex items-center gap-3 text-2xl font-semibold">
                        <BarChart3 className="h-7 w-7 text-accent" />
                        <span>Dashboard Central</span>
                      </DialogTitle>
                    </DialogHeader>
                    <div className="space-y-6 text-foreground">
                      {/* Storytelling */}
                      <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-xl p-4 border border-accent/20 flex items-center gap-4">
                        <Monitor className="h-8 w-8 text-accent" />
                        <div>
                          <div className="text-lg font-medium text-accent mb-1">Visualiza la planta como nunca antes:</div>
                          <div className="text-base text-muted-foreground">Gerentes y supervisores acceden a un panel único donde cada área, equipo y responsable se visualiza en tiempo real, con alertas y reportes automáticos.</div>
                        </div>
                      </div>
                      {/* Beneficio visual */}
                      <div className="flex flex-col md:flex-row gap-4 justify-between">
                        <div className="flex-1 bg-white/10 rounded-xl p-4 border border-accent/10 flex items-center gap-3">
                          <FileText className="h-7 w-7 text-accent" />
                          <div>
                            <div className="font-semibold text-accent">Reportes automáticos</div>
                            <div className="text-sm text-muted-foreground">La información clave llega a gerencia sin esfuerzo, lista para toma de decisiones.</div>
                          </div>
                        </div>
                        <div className="flex-1 bg-white/10 rounded-xl p-4 border border-accent/10 flex items-center gap-3">
                          <UserCog className="h-7 w-7 text-accent" />
                          <div>
                            <div className="font-semibold text-accent">Control total</div>
                            <div className="text-sm text-muted-foreground">Cada responsable visualiza solo su área, con métricas y alertas personalizadas.</div>
                          </div>
                        </div>
                      </div>
                      {/* Caso de uso real */}
                      <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-4 border border-primary/20 flex items-center gap-4">
                        <BarChart3 className="h-8 w-8 text-primary" />
                        <div>
                          <div className="text-base text-primary font-semibold mb-1">Caso real GM:</div>
                          <div className="text-sm text-muted-foreground">La consolidación de datos ha permitido reducir en un 70% el tiempo de generación de reportes y ha mejorado la toma de decisiones operativas.</div>
                        </div>
                      </div>
                      {/* Frase inspiradora */}
                      <div className="text-center text-xl italic text-accent font-light mt-6">
                        “Ver es entender. Entender es transformar.”
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </CostBreakdown>
        </div>

        {/* Respaldo y Oferta de Inversión */}
        <div className="space-y-6 my-12">
          <h2 className="text-2xl font-bold text-primary">¿Por qué invertir en Juntify?</h2>
          <ul className="list-disc pl-6 text-lg text-foreground/90 space-y-2">
            <li>
              <span className="font-semibold">Respaldo real:</span> Cotización real de referencia: <span className="font-bold text-primary">$1,438,000 MXN/año</span> (licencia + usuarios, modelo real, empresa industrial de la zona).
            </li>
            <li>
              <span className="font-semibold">Modelo probado:</span> Licencia anual empresarial, 10 grabadores y 30 analistas, infraestructura dedicada en servidor de la empresa.
            </li>
            <li>
              <span className="font-semibold">Venta promedio esperada:</span> 10 grabadores ($2,500/mes), 30 analistas ($800/mes) por empresa industrial.
            </li>
            <li>
              <span className="font-semibold">Oferta exclusiva:</span> Plataforma validada en industria automotriz, lista para escalar a otras plantas y sectores.
            </li>
            <li>
              <span className="font-semibold">Retorno directo:</span> Ingreso anual recurrente por cliente industrial.
            </li>
          </ul>
          {/* Oportunidad de inversión */}
            <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 shadow-lg text-center space-y-4">
              <div className="text-2xl font-bold text-primary">Invierte $150,000 MXN y obtén el 10% de cada venta de software</div>
              <div className="text-lg text-foreground/90">Participa como socio estratégico en Juntify. Tu inversión impulsa la etapa comercial y te da derecho al 10% del total de cada venta de software y licencias realizada a empresas industriales.</div>
              <div className="bg-white/30 rounded-xl p-4 border border-primary/10 text-left max-w-xl mx-auto">
                <div className="font-semibold text-primary mb-1">¿Cómo funciona el retorno?</div>
                <ul className="list-disc pl-6 text-base text-foreground/90 space-y-1">
                  <li>Desde la <span className="font-bold">primera venta</span> de una empresa industrial, recibes el 10% del total facturado por la venta de software y licencias.</li>
                  <li>Ejemplo: Si se concreta una venta estándar de <span className="font-bold">$1,438,000 MXN</span> el primer año, tu retorno inmediato sería de <span className="font-bold text-primary">$143,800 MXN</span> (10% del total).</li>
                  <li>En los años siguientes, por cada cliente activo, tu retorno anual estimado sería de <span className="font-bold text-primary">$58,800 MXN</span> (10% de $588,000 MXN por licencias de usuarios).</li>
                  <li>El retorno crece con cada nueva empresa que adopte Juntify.</li>
                </ul>
                <div className="mt-2 text-xs text-muted-foreground">*Cálculos estimados, sujetos a resultados reales y deducciones fiscales. Documentación y proyecciones disponibles para revisión.*</div>
              </div>
              <div className="mt-4 text-lg font-semibold text-accent">¡Tu inversión se recupera potencialmente desde la primera venta!</div>
            </div>
          {/* Botón y modal de desglose real de inversión removidos por solicitud del usuario */}
          <div className="mt-6 p-4 rounded-xl bg-primary/10 border border-primary/20 text-primary font-semibold text-center text-lg">
            <span>
              <span className="text-2xl font-bold">¡Invierte en Juntify!</span> <br />
              Sé parte del crecimiento de la industria 4.0 en México y recibe beneficios directos de cada venta.
            </span>
          </div>
        </div>

        {/* Resumen Ejecutivo removido por solicitud del usuario */}

        {/* Roadmap y Uso de Fondos */}
        <div className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="liquid-glass p-6 rounded-2xl border border-accent/20 shadow-lg">
            <h3 className="text-xl font-semibold text-accent mb-3">¿En qué se usará la inversión?</h3>
            <ul className="list-disc pl-6 text-base text-foreground/90 space-y-1">
              <li><span className="font-bold">$100,000 MXN</span> — Desarrollo acelerado del panel de mantenimiento y entrenamiento IA</li>
              <li><span className="font-bold">$50,000 MXN</span> — Marketing, ventas y posicionamiento</li>
              <li>Infraestructura, soporte y mejoras UX/UI</li>
            </ul>
          </div>
          <div className="liquid-glass p-6 rounded-2xl border border-primary/20 shadow-lg">
            <h3 className="text-xl font-semibold text-primary mb-3">Roadmap (máximo 3 meses)</h3>
            <ol className="list-decimal pl-6 text-base text-foreground/90 space-y-1">
              <li>Desarrollo y pruebas del panel de mantenimiento inteligente</li>
              <li>Entrenamiento de la IA con data real de clientes pyme</li>
              <li>Piloto y ajustes con clientes pyme</li>
              <li>Lanzamiento comercial y primeras ventas en industria</li>
            </ol>
            <div className="mt-4 text-sm text-muted-foreground italic">
              *Juntify ha sido validado en pequeña y mediana empresa. Esta inversión es el salto para escalar a la industria de verdad.*
            </div>
          </div>
        </div>

        {/* Modelo de Negocio y Ventaja Competitiva */}
        <div className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="liquid-glass p-6 rounded-2xl border border-primary/20 shadow-lg">
            <h3 className="text-xl font-semibold text-primary mb-3">¿Cómo gana dinero Juntify?</h3>
            <ul className="list-disc pl-6 text-base text-foreground/90 space-y-1">
              <li>Licencia anual por empresa industrial</li>
              <li>Implementación y personalización</li>
              <li>Servicios de soporte y capacitación</li>
              <li>Modelo SaaS escalable a otras industrias</li>
            </ul>
          </div>
          <div className="liquid-glass p-6 rounded-2xl border border-accent/20 shadow-lg">
            <h3 className="text-xl font-semibold text-accent mb-3">Ventaja Competitiva</h3>
            <ul className="list-disc pl-6 text-base text-foreground/90 space-y-1">
              <li>IA y voz aplicadas a procesos industriales, pioneros en México</li>
              <li>Integración total con procesos y sistemas existentes</li>
              <li>Equipo con experiencia y ventas comprobadas en pyme</li>
              <li>Desarrollo propio, rápido y adaptable</li>
              <li>La inversión permitirá escalar y validar en industria grande</li>
            </ul>
          </div>
        </div>

        {/* Equipo */}
        <div className="mb-12">
          <div className="liquid-glass p-6 rounded-2xl border border-primary/20 shadow-lg text-center">
            <h3 className="text-xl font-semibold text-primary mb-2">Equipo Directivo</h3>
            <p className="text-base text-foreground/90 mb-2">Luis Alejandro Saucedo Baez — CEO y Director General<br/>Cero Uno Cero<br/>Tel: 444 700 1387<br/>David. G. Berlanga 130, Tequisquiapan, San Luis Potosí, SLP</p>
            <p className="text-base text-foreground/90">Alan Azuara — Director de Ventas y Entrenamiento de Mantenimiento Industrial<br/>Cero Uno Cero — +3 años desarrollando soluciones para la industria, con clientes como Mr. Frío, Hotel María Dolores, Universidad Politécnica de SLP, Depósito Dental Universitario y Notaría 35.</p>
          </div>
        </div>

        {/* Proyecciones Financieras */}
        <div className="mb-12">
          <div className="liquid-glass p-6 rounded-2xl border border-accent/20 shadow-lg text-center">
            <h3 className="text-xl font-semibold text-accent mb-2">Proyección financiera esperada</h3>
            <p className="text-base text-foreground/90 mb-2">
              Lo que esperamos de una cotización estándar para una empresa industrial es un ingreso promedio de <span className="font-bold text-primary">$1,438,000 MXN el primer año</span> (licencia de software + usuarios).<br/>
              <span className="block mt-2">A partir del segundo año, solo se pagan las licencias de usuarios: <span className="font-bold text-primary">$588,000 MXN/año</span> (10 grabadores y 30 analistas).</span>
            </p>
            <div className="mt-4 text-left max-w-xl mx-auto">
              <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-4 rounded-xl border border-primary/20 mb-2">
                <div className="font-semibold text-primary mb-1">Ejemplo de cotización estándar:</div>
                <div className="text-foreground/90">Venta de plataforma industrial Juntify, integración de IA, panel de mantenimiento, capacitación y soporte, infraestructura dedicada.</div>
                  <div className="font-semibold text-primary mb-1">Ejemplo de cotización real a Linamar:</div>
                  <div className="text-foreground/90">Cotización presentada a Linamar para venta de plataforma industrial Juntify, integración de IA, panel de mantenimiento, capacitación y soporte, infraestructura dedicada.</div>
              </div>
              <ul className="list-disc pl-6 text-base text-foreground/90 space-y-1">
                <li><span className="font-bold">Primer año:</span> Licencia anual empresarial $850,000 MXN + 10 usuarios grabadores ($2,500/mes c/u = $300,000 MXN/año) + 30 usuarios analistas ($800/mes c/u = $288,000 MXN/año)</li>
                <li><span className="font-bold">Total primer año:</span> $1,438,000 MXN</li>
                <li><span className="font-bold">Años siguientes:</span> Solo licencias de usuarios ($588,000 MXN/año)</li>
                <li><span className="font-bold">Incluye:</span> Código fuente, base de datos local, soporte, capacitación, infraestructura dedicada</li>
              </ul>
              <div className="mt-4 text-sm text-muted-foreground">
                *Escenario basado en cotización estándar de mercado industrial. No es una venta realizada ni validada, sino la expectativa promedio por empresa.*
                  *Escenario basado en cotización real presentada a Linamar. No es una venta realizada ni validada, sino la expectativa promedio por empresa interesada.*
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Final */}
        <div className="mb-12 lg:mb-24 relative">
          <SectionBackground type="footer" />
          <CostBreakdown title={<div className="flex items-center gap-4"><Calculator className="h-10 w-10 text-primary" />Oportunidad de Inversión Única</div>} variant="primary">
            <div className="text-center space-y-8">
              <div className="text-center space-y-6 p-6 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl border border-primary/10">
                <p className="text-lg font-light text-muted-foreground max-w-4xl mx-auto">
                  El mercado industrial mexicano invierte en promedio <span className="font-bold text-primary">$1,438,000 MXN/año</span> por empresa en sistemas de control y digitalización. Juntify ofrece una alternativa local, innovadora y lista para escalar.
                </p>
                <div className="text-2xl font-light text-primary">
                  Pioneros en IA y voz para la industria mexicana
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-primary to-primary-glow hover:from-primary-glow hover:to-primary text-lg px-16 py-6 text-white font-medium shadow-xl transition-all duration-300 transform hover:scale-105"
                  onClick={() => {
                    const whatsappUrl = `https://wa.me/5214448481209?text=${encodeURIComponent('JUNTIFY - PROPUESTA DE INVERSIÓN PARA ALAN AZUARA - OPORTUNIDAD DE INVERSIÓN: $150,000 MXN solicitados - ¡Interesado en esta oportunidad de inversión en Juntify! - Alan Azuara')}`;
                    window.open(whatsappUrl, '_blank');
                  }}
                >
                  <MessageCircle className="h-6 w-6 mr-3" />
                  Solicitar Reunión con Alan
                </Button>
              </div>
              <p className="text-sm text-muted-foreground italic">
                "La oportunidad de transformar la industria mexicana con Inteligencia Artificial"
              </p>
            </div>
          </CostBreakdown>
        </div>
      </div>
    </div>
  );
};

export default Index;