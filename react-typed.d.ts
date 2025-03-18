// react-typed.d.ts
declare module "react-typed" {
    import * as React from "react";
  
    export interface ReactTypedProps {
      strings: string[];
      typeSpeed?: number;
      backSpeed?: number;
      loop?: boolean;
      // Add any other props you need based on the library's documentation
    }
  
    const ReactTyped: React.FC<ReactTypedProps>;
    export default ReactTyped;
  }
  