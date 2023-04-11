import conquerImage from '@/shared/assets/projectImages/conquer.webp';
import modsenImage from '@/shared/assets/projectImages/modsen.webp';

export const projectsConfig = [
  {
    title: 'Conquer',
    subtitle: 'startup',
    description:
      'Creating a No-code platform for website creation with integration into existing React applications.' +
      ' Developed a system for parsing jsx/tsx files, identifying components and their props.' +
      ' Added the ability to display existing components in the project in a visual editor. ' +
      'Implemented a backend service for rendering components in a browser emulator (Playwright) ' +
      'to display component screenshots. Worked on parsing Redux stores to visually display and edit them using the react-flow library. ' +
      'Constant interaction with the backend team, marketing, and testers. Used SCRUM methodology and Atlassian Confluence for project management.',
    technologies:
      'react, redux, redux-thunk, typescript, grapejs, next.js, reactflow, emotion, etc.',
    image: conquerImage,
  },
  {
    title: 'Modsen',
    subtitle: 'Company',
    description:
      'Support and refactoring of legacy code. Developing logic in React. Layout according ' +
      'to design templates, animations, development of React components, interaction ' +
      'with backend. Maintenance, testing, and enhancement of existing functionality.\n' +
      'Configuration of rollup/webpack, ci/cd settings. Developed a library of reusable ' +
      'components for the project. Performed application optimization (PureComponent, memo, useMemo, useCallback, ' +
      'Lazy, image compression, use of memoized selectors in Redux - Reselect). Developed ' +
      'a chat with subsequent additions such as emojis, likes, and pinned messages. ' +
      'Constant interaction with the backend team, testers. In the last one and a half months, ' +
      'worked on a crypto project, implementing the Phantom wallet.',
    technologies:
      'TypeScript, React, Redux, RTK, React-Redux, Redux-Thunk, Redux-Saga, Reselect, REST API, WS, styled-components etc.',
    image: modsenImage,
  },
];
