import { IconType } from 'react-icons';
import { AiFillAndroid } from 'react-icons/ai';
import { DiRedis } from 'react-icons/di';
import {
  FaAws,
  FaCss3Alt,
  FaDocker,
  FaHtml5,
  FaJava,
  FaLinux,
  FaNodeJs,
  FaPython,
  FaReact,
  FaUbuntu,
} from 'react-icons/fa';
import { GrArchlinux } from 'react-icons/gr';
import { IoLogoElectron, IoLogoFirebase } from 'react-icons/io5';
import { RiNextjsFill } from 'react-icons/ri';
import {
  SiC,
  SiCplusplus,
  SiExpo,
  SiExpress,
  SiFastify,
  SiJavascript,
  SiJest,
  SiMongodb,
  SiNestjs,
  SiPostgresql,
  SiPrisma,
  SiSpring,
  SiSqlite,
  SiStyledcomponents,
  SiSwagger,
  SiTailwindcss,
  SiTypeorm,
  SiTypescript,
} from 'react-icons/si';
import { BadgeComponents } from 'types/technology/BadgeComponents';
import { Technology } from 'types/technology/Technology';

type TechnologiesData = {
  [key in Technology]: { Icon: IconType; badgeComponents: BadgeComponents };
};

export const TECHNOLOGIES_DATA: TechnologiesData = {
  React: {
    Icon: FaReact,
    badgeComponents: {
      label: 'react-%2320232a',
      logo: 'react',
      logoColor: '%2361DAFB',
    },
  },
  NodeJs: {
    Icon: FaNodeJs,
    badgeComponents: {
      label: 'node.js-6DA55F',
      logo: 'node.js',
      logoColor: 'white',
    },
  },
  Spring: {
    Icon: SiSpring,
    badgeComponents: {
      label: 'Spring-6DB33F',
      logo: 'spring',
      logoColor: 'white',
    },
  },
  ReactNative: {
    Icon: FaReact,
    badgeComponents: {
      label: 'React_Native-20232A',
      logo: 'react',
      logoColor: '61DAFB',
    },
  },
  Electron: {
    Icon: IoLogoElectron,
    badgeComponents: {
      label: 'Electron-191970',
      logo: 'Electron',
      logoColor: 'white',
    },
  },
  NextJs: {
    Icon: RiNextjsFill,
    badgeComponents: {
      label: 'Next-black',
      logo: 'next.js',
      logoColor: 'white',
    },
  },
  Expo: {
    Icon: SiExpo,
    badgeComponents: {
      label: 'expo-1C1E24',
      logo: 'expo',
      logoColor: '#D04A37',
    },
  },
  NestJs: {
    Icon: SiNestjs,
    badgeComponents: {
      label: 'nestjs-%23E0234E',
      logo: 'nestjs',
      logoColor: 'white',
    },
  },
  Express: {
    Icon: SiExpress,
    badgeComponents: {
      label: 'express.js-%23404d59',
      logo: 'express',
      logoColor: '%2361DAFB',
    },
  },
  Fastify: {
    Icon: SiFastify,
    badgeComponents: {
      label: 'fastify-%23000000',
      logo: 'fastify',
      logoColor: 'white',
    },
  },
  JavaScript: {
    Icon: SiJavascript,
    badgeComponents: {
      label: 'javascript-%23323330',
      logo: 'javascript',
      logoColor: '%23F7DF1E',
    },
  },
  TypeScript: {
    Icon: SiTypescript,
    badgeComponents: {
      label: 'typescript-%23007ACC',
      logo: 'typescript',
      logoColor: 'white',
    },
  },
  Java: {
    Icon: FaJava,
    badgeComponents: {
      label: 'java-%23ED8B00',
      logo: 'openjdk',
      logoColor: 'white',
    },
  },
  C: {
    Icon: SiC,
    badgeComponents: {
      label: 'C-00599C',
      logo: 'c',
      logoColor: 'white',
    },
  },
  'C++': {
    Icon: SiCplusplus,
    badgeComponents: {
      label: 'C%2B%2B-00599C',
      logo: 'c%2B%2B',
      logoColor: 'white',
    },
  },
  Python: {
    Icon: FaPython,
    badgeComponents: {
      label: 'Python-14354C',
      logo: 'python',
      logoColor: 'white',
    },
  },
  Docker: {
    Icon: FaDocker,
    badgeComponents: {
      label: 'docker-%230db7ed',
      logo: 'docker',
      logoColor: 'white',
    },
  },
  Android: {
    Icon: AiFillAndroid,
    badgeComponents: {
      label: 'Android-3DDC84',
      logo: 'android',
      logoColor: 'white',
    },
  },
  Linux: {
    Icon: FaLinux,
    badgeComponents: {
      label: 'Linux-FCC624',
      logo: 'linux',
      logoColor: 'black',
    },
  },
  Arch: {
    Icon: GrArchlinux,
    badgeComponents: {
      label: 'Arch%20Linux',
      logo: 'arch-linux',
      logoColor: 'fff',
    },
  },
  Ubuntu: {
    Icon: FaUbuntu,
    badgeComponents: {
      label: 'Ubuntu-E95420',
      logo: 'ubuntu',
      logoColor: 'white',
    },
  },
  Swagger: {
    Icon: SiSwagger,
    badgeComponents: {
      label: '-Swagger-%23Clojure',
      logo: 'swagger',
      logoColor: 'white',
    },
  },
  Jest: {
    Icon: SiJest,
    badgeComponents: {
      label: 'Jest-323330',
      logo: 'Jest',
      logoColor: 'white',
    },
  },
  AWS: {
    Icon: FaAws,
    badgeComponents: {
      label: 'AWS-%23FF9900',
      logo: 'amazon-aws',
      logoColor: 'white',
    },
  },
  Firebase: {
    Icon: IoLogoFirebase,
    badgeComponents: {
      label: 'Firebase-039BE5',
      logo: 'Firebase',
      logoColor: 'white',
    },
  },
  StyledComponents: {
    Icon: SiStyledcomponents,
    badgeComponents: {
      label: 'styled--components-DB7093',
      logo: 'styled-components',
      logoColor: 'white',
    },
  },
  TailwindCSS: {
    Icon: SiTailwindcss,
    badgeComponents: {
      label: 'tailwindcss-%2338B2AC',
      logo: 'tailwind-css',
      logoColor: 'white',
    },
  },
  TypeORM: {
    Icon: SiTypeorm,
    badgeComponents: {
      label: 'typeorm-FE0803',
      logo: 'typeorm',
      logoColor: 'white',
    },
  },
  Prisma: {
    Icon: SiPrisma,
    badgeComponents: {
      label: 'Prisma-3982CE',
      logo: 'Prisma',
      logoColor: 'white',
    },
  },
  PostgreSQL: {
    Icon: SiPostgresql,
    badgeComponents: {
      label: 'postgres-%23316192',
      logo: 'postgresql',
      logoColor: 'white',
    },
  },
  MongoDB: {
    Icon: SiMongodb,
    badgeComponents: {
      label: 'MongoDB-%234ea94b',
      logo: 'mongodb',
      logoColor: 'white',
    },
  },
  Redis: {
    Icon: DiRedis,
    badgeComponents: {
      label: 'redis-%23DD0031',
      logo: 'redis',
      logoColor: 'white',
    },
  },
  SQLite: {
    Icon: SiSqlite,
    badgeComponents: {
      label: 'SQLite-07405E',
      logo: 'sqlite',
      logoColor: 'white',
    },
  },
  HTML: {
    Icon: FaHtml5,
    badgeComponents: {
      label: 'html5-%23E34F26',
      logo: 'html5',
      logoColor: 'white',
    },
  },
  CSS: {
    Icon: FaCss3Alt,
    badgeComponents: {
      label: 'css3-%231572B6',
      logo: 'css3',
      logoColor: 'white',
    },
  },
} as const;
