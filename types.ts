
// Import React to provide the React namespace for ReactNode
import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
}

export interface NavItem {
  label: string;
  href: string;
}