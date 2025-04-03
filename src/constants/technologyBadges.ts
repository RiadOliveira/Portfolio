import ReactIcon from 'assets/react.svg';
import NodejsIcon from 'assets/nodejs.svg';
import SpringIcon from 'assets/spring.svg';
import ReactNativeIcon from 'assets/react-native.svg';
import ElectronIcon from 'assets/electron.svg';
import NextjsIcon from 'assets/nextjs.svg';
import ExpoIcon from 'assets/expo.svg';
import NestjsIcon from 'assets/nestjs.svg';
import ExpressIcon from 'assets/express.svg';
import FastifyIcon from 'assets/fastify.svg';
import JavascriptIcon from 'assets/javascript.svg';
import TypescriptIcon from 'assets/typescript.svg';
import JavaIcon from 'assets/java.svg';
import CIcon from 'assets/c.svg';
import CppIcon from 'assets/cpp.svg';
import PythonIcon from 'assets/python.svg';
import DockerIcon from 'assets/docker.svg';
import SwaggerIcon from 'assets/swagger.svg';
import JestIcon from 'assets/jest.svg';
import AwsIcon from 'assets/aws.svg';
import FirebaseIcon from 'assets/firebase.svg';
import StyledComponentsIcon from 'assets/styled-components.svg';
import TailwindcssIcon from 'assets/tailwindcss.svg';
import TypeormIcon from 'assets/typeorm.svg';
import PrismaIcon from 'assets/prisma.svg';
import PostgresqlIcon from 'assets/postgresql.svg';
import MongodbIcon from 'assets/mongodb.svg';
import RedisIcon from 'assets/redis.svg';
import SqliteIcon from 'assets/sqlite.svg';
import Html5Icon from 'assets/html5.svg';
import Css3Icon from 'assets/css3.svg';

export const TECHNOLOGY_BADGES = {
  React: ReactIcon,
  NodeJs: NodejsIcon,
  Spring: SpringIcon,
  ReactNative: ReactNativeIcon,
  Electron: ElectronIcon,
  NextJs: NextjsIcon,
  Expo: ExpoIcon,
  NestJs: NestjsIcon,
  Express: ExpressIcon,
  Fastify: FastifyIcon,
  JavaScript: JavascriptIcon,
  TypeScript: TypescriptIcon,
  Java: JavaIcon,
  C: CIcon,
  'C++': CppIcon,
  Python: PythonIcon,
  Docker: DockerIcon,
  Swagger: SwaggerIcon,
  Jest: JestIcon,
  AWS: AwsIcon,
  Firebase: FirebaseIcon,
  StyledComponents: StyledComponentsIcon,
  TailwindCSS: TailwindcssIcon,
  TypeORM: TypeormIcon,
  Prisma: PrismaIcon,
  PostgreSQL: PostgresqlIcon,
  MongoDB: MongodbIcon,
  Redis: RedisIcon,
  SQLite: SqliteIcon,
  HTML: Html5Icon,
  CSS: Css3Icon,
} as const;

export type Technology = keyof typeof TECHNOLOGY_BADGES;
