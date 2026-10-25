export interface SkillGroup {
  category: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    category: 'Backend y APIs',
    items: ['Python', 'Django', 'Node.js', '.NET', 'REST APIs', 'Microservicios', 'PostgreSQL']
  },
  {
    category: 'Frontend',
    items: ['Angular', 'Astro', 'TypeScript', 'Tailwind CSS', 'Diseño responsive']
  },
  {
    category: 'Móvil',
    items: ['Flutter', 'Android', 'Firebase']
  },
  {
    category: 'Redes e ISP',
    items: ['MikroTik', 'FreeRADIUS', 'RadiusDesk', 'SNMP', 'IPv6', 'Linux']
  },
  {
    category: 'IA y automatización',
    items: ['Claude AI', 'Python', 'Selenium', 'Bots', 'RPA', 'Integraciones']
  },
  {
    category: 'DevOps',
    items: ['Docker', 'CI/CD', 'Grafana', 'Prometheus', 'NGINX']
  }
];
