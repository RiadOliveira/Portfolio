import { IconType } from 'react-icons';
import { FaGithub, FaWhatsapp, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { TbFileCv } from 'react-icons/tb';

export type SocialData = {
  Icon: IconType;
  name: string;
  href: string;
  colorStyles: string;
};

type UserData = {
  id: number;
  login: string;
  fullName: string;
  socials: SocialData[];
};

export const USER: UserData = {
  id: 69125013,
  login: 'RiadOliveira',
  fullName: 'Ríad Oliveira de Morais',
  socials: [
    {
      Icon: TbFileCv,
      name: 'CV',
      href: 'https://drive.google.com/file/d/1UsKq6PGbjTbgeK2aUvhPzoCNKlDdSBoC/view?usp=sharing',
      colorStyles:
        'hover:bg-purple-500 hover:border-purple-600 active:bg-purple-500 active:border-purple-600',
    },
    {
      Icon: FaGithub,
      name: 'Github',
      href: 'https://github.com/RiadOliveira',
      colorStyles:
        'hover:bg-gray-800 hover:border-gray-900 active:bg-gray-800 active:border-gray-900',
    },
    {
      Icon: FaLinkedin,
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/ríad-oliveira',
      colorStyles:
        'hover:bg-blue-600 hover:border-blue-700 active:bg-blue-600 active:border-blue-700',
    },
    {
      Icon: MdEmail,
      name: 'E-mail',
      href: 'mailto:riad.oliveira@hotmail.com',
      colorStyles:
        'hover:bg-orange-500 hover:border-orange-600 active:bg-orange-500 active:border-orange-600',
    },
    {
      Icon: FaWhatsapp,
      name: 'WhatsApp',
      href: 'https://api.whatsapp.com/send?phone=5584988845152',
      colorStyles:
        'hover:bg-green-500 hover:border-green-600 active:bg-green-500 active:border-green-600',
    },
  ],
} as const;
