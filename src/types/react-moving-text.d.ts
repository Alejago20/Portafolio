declare module 'react-moving-text' {
    import * as React from 'react';
  
    interface MovingComponentProps {
      type?: string;
      duration?: string;
      delay?: string;
      direction?: string;
      timing?: string;
      iteration?: string;
      fillMode?: string;
      children?: React.ReactNode;
    }
  
    export class MovingComponent extends React.Component<MovingComponentProps> {}
  }
  