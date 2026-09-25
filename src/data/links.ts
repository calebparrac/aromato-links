// Edita aquí los enlaces de la página. Todo lo demás se genera a partir de esto.
// PENDIENTE: reemplazar los valores de relleno por las cuentas reales.

export type IconName = 'catalog' | 'instagram' | 'tiktok' | 'facebook';

export interface LinkItem {
  label: string;
  href: string;
  icon: IconName;
  variant: 'primary' | 'secondary';
  hint?: string;
}

export const links: LinkItem[] = [
  {
    label: 'Ver catálogo',
    href: 'https://example.com/catalogo',
    icon: 'catalog',
    variant: 'primary',
    hint: 'Fragancias árabes, de diseñador y nicho',
  },
  { label: 'Instagram', href: 'https://instagram.com/aromato', icon: 'instagram', variant: 'secondary' },
  { label: 'TikTok', href: 'https://tiktok.com/@aromato', icon: 'tiktok', variant: 'secondary' },
  { label: 'Facebook', href: 'https://facebook.com/aromato', icon: 'facebook', variant: 'secondary' },
];

export const whatsapp = {
  // Número con indicativo, solo dígitos (ej. 573001234567).
  phone: '570000000000',
  message: 'Hola AROMATO, quiero información sobre una fragancia.',
};
