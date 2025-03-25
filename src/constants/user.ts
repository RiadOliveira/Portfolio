import { IconType } from 'react-icons';
import { FaGithub, FaWhatsapp, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { TbFileCv } from 'react-icons/tb';

export type SocialData = {
  Icon: IconType;
  href: string;
  alt: string;
  colorStyles: string;
};

type UserData = {
  ID: number;
  LOGIN: string;
  FULL_NAME: string;
  SOCIALS: SocialData[];
};

export const USER: UserData = {
  ID: 69125013,
  LOGIN: 'RiadOliveira',
  FULL_NAME: 'Ríad Oliveira de Morais',
  SOCIALS: [
    {
      Icon: TbFileCv,
      href: 'https://drive.google.com/file/d/1UsKq6PGbjTbgeK2aUvhPzoCNKlDdSBoC/view?usp=sharing',
      alt: 'CV',
      colorStyles:
        'hover:bg-purple-500 hover:border-purple-600 active:bg-purple-500 active:border-purple-600',
    },
    {
      Icon: FaGithub,
      href: 'https://github.com/RiadOliveira',
      alt: 'Github',
      colorStyles:
        'hover:bg-gray-800 hover:border-gray-900 active:bg-gray-800 active:border-gray-900',
    },
    {
      Icon: FaLinkedin,
      href: 'https://www.linkedin.com/in/ríad-oliveira',
      alt: 'LinkedIn',
      colorStyles:
        'hover:bg-blue-600 hover:border-blue-700 active:bg-blue-600 active:border-blue-700',
    },
    {
      Icon: MdEmail,
      href: 'mailto:riad.oliveira@hotmail.com',
      alt: 'E-mail',
      colorStyles:
        'hover:bg-orange-500 hover:border-orange-600 active:bg-orange-500 active:border-orange-600',
    },
    {
      Icon: FaWhatsapp,
      href: 'https://api.whatsapp.com/send?phone=5584988845152',
      alt: 'WhatsApp',
      colorStyles:
        'hover:bg-green-500 hover:border-green-600 active:bg-green-500 active:border-green-600',
    },
  ],
} as const;
