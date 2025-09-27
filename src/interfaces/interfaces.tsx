import type { LucideIcon } from "lucide-react";

export interface WhatWeDoItem {
    text: string;
    icon: React.ElementType;
}
export interface ValueItem {
  title: string;
  text: string;
  icon: React.ComponentType<any>;
  iconColor: string;
  bgColor: string;   
}
export interface CtaSectionProps {
  contactEmail?: string; 
}
export interface ExpertiseItem {
    title: string;
    text: string;
    icon: React.ComponentType<any>;
    iconBgColor: string;
    iconColor: string;
}
export interface FooterLink {
  name: string;
  href: string;
}
export interface ProductItem {
    name: string;
    tagline: string;
    icon: React.ComponentType<any>;
    description: string;
    features: string[];

}
export interface StatItemProps {
  label: string;
  value: number;
  suffix?: string;
  duration?: number;
  icon: LucideIcon;
  trigger?: boolean; 
}
