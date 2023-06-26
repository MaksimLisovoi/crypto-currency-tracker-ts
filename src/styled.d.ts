// import original module declarations
import 'styled-components';

// declare module 'styled-system'
// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;


    colors: {
      main: string;
      secondary: string;
    };
  }
}