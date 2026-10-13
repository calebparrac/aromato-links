// Edita aquí los enlaces de la página. Todo lo demás se genera a partir de esto.

export type IconName = 'catalog' | 'instagram' | 'tiktok' | 'facebook' | 'whatsapp';

export interface LinkItem {
  label: string;
  href: string;
  icon: IconName;
  variant: 'primary' | 'secondary';
  hint?: string;
}

export const whatsapp = {
  // Número con indicativo, solo dígitos (ej. 573001234567).
  // PENDIENTE: mientras esté vacío, el botón de WhatsApp no se muestra.
  phone: '',
  message: 'Hola AROMATO, quiero información sobre una fragancia.',
};

export const links: LinkItem[] = [
  {
    label: 'Ver catálogo',
    href: 'https://aromato-catalogo.vercel.app/',
    icon: 'catalog',
    variant: 'primary',
    hint: 'Fragancias árabes, de diseñador y nicho',
  },
  { label: 'Instagram', href: 'https://www.instagram.com/aromato.perfumeria', icon: 'instagram', variant: 'secondary' },
  { label: 'TikTok', href: 'https://www.tiktok.com/@aromato.perfumeria', icon: 'tiktok', variant: 'secondary' },
  { label: 'Facebook', href: 'https://www.facebook.com/share/1DyqyNvXuH/', icon: 'facebook', variant: 'secondary' },
  ...(whatsapp.phone
    ? [{ label: 'Asesoría personalizada', href: whatsappLink(), icon: 'whatsapp', variant: 'secondary' } as LinkItem]
    : []),
];

function whatsappLink() {
  return `https://wa.me/${whatsapp.phone}?text=${encodeURIComponent(whatsapp.message)}`;
}
