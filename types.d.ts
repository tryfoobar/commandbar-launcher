declare module 'commandbar-launcher' {
    import { CSSProperties, FC } from 'react';
  
    export const getControlKey: () => string;
    const Launcher: FC<{ text: string; style: CSSProperties }>;
    export default Launcher;
  }
  