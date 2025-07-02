import { FaGithub, FaWhatsapp, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { TbFileCv } from 'react-icons/tb';
import { SocialData } from 'types/user/SocialData';
import { GITHUB_URLS } from './requests';

type UserData = {
  id: number;
  login: string;
  fullName: string;
  avatar: `${typeof GITHUB_URLS.avatar}/${number}?v=4`;
  socials: SocialData[];
};

export const USER_DATA: UserData = {
  id: 69125013,
  login: 'RiadOliveira',
  fullName: 'Ríad Oliveira de Morais',
  avatar: `${GITHUB_URLS.avatar}/69125013?v=4`,
  socials: [
    {
      Icon: TbFileCv,
      name: 'CV',
      href: 'https://drive.google.com/file/d/1UsKq6PGbjTbgeK2aUvhPzoCNKlDdSBoC/view?usp=sharing',
      colorStyles:
        'hover:bg-secondary hover:border-secondary active:bg-secondary active:border-secondary',
    },
    {
      Icon: FaGithub,
      name: 'Github',
      href: `${GITHUB_URLS.default}/RiadOliveira`,
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
