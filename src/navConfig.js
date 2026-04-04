import {
  LayoutDashboard,
  Zap,
  Calendar,
  Map,
  LayoutGrid,
  Package,
} from 'lucide-react'

/** Keys must match `icon` on each nav item */
export const NAV_ICON_MAP = {
  LayoutDashboard,
  Zap,
  Calendar,
  Map,
  LayoutGrid,
  Package,
}

export const NAV_ITEMS = [
  {
    id: 'overview',
    label: 'Executive Summary',
    path: '/',
    icon: 'LayoutDashboard',
  },
  {
    id: 'trigger-map',
    label: 'Engagement Triggers',
    path: '/triggers',
    icon: 'Zap',
  },
  {
    id: 'seasonal-calendar',
    label: 'Seasonal Calendar',
    path: '/calendar',
    icon: 'Calendar',
  },
  {
    id: 'journey-maps',
    label: 'User Journey Maps',
    path: '/journeys',
    icon: 'Map',
  },
  {
    id: 'heatmap',
    label: 'Opportunity Heatmap',
    path: '/heatmap',
    icon: 'LayoutGrid',
  },
  {
    id: 'modules',
    label: 'Product Modules',
    path: '/modules',
    icon: 'Package',
  },
]
