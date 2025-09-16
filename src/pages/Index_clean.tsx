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
        {/* Propuesta para Mario Hernández */}
        <div className="liquid-glass-intense p-6 sm:p-8 lg:p-16 mb-8 lg:mb-24 relative">
          <SectionBackground type="header" />
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-20">
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

        {/* Call to Action Final */}
        <div className="mb-12 lg:mb-24 relative">
          <SectionBackground type="footer" />
          <CostBreakdown title={<div className="flex items-center gap-4"><Calculator className="h-10 w-10 text-primary" />Oportunidad de Inversión Única</div>} variant="primary">
            <div className="text-center space-y-8">
              <div className="text-center space-y-6 p-6 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl border border-primary/10">
                <p className="text-lg font-light text-muted-foreground max-w-4xl mx-auto">
                  Con su inversión de $2.7M MXN, obtendrá $3.78M MXN por cada implementación vendida.
                </p>
                <div className="text-2xl font-light text-primary">
                  Una oportunidad única en la transformación digital industrial
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-primary to-primary-glow hover:from-primary-glow hover:to-primary text-lg px-16 py-6 text-white font-medium shadow-xl transition-all duration-300 transform hover:scale-105" 
                  onClick={() => {
                    const message = "JUNTIFY - PROPUESTA DE INVERSIÓN PARA MARIO HERNÁNDEZ - ALAN AZUARA - OPORTUNIDAD DE INVERSIÓN: $2,700,000 MXN solicitados - ¡Interesado en esta oportunidad de inversión en Juntify! - Mario Hernández";
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
          </CostBreakdown>
        </div>
      </div>
    </div>
  );
};

export default Index;