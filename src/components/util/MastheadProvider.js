import React from 'react';
import { Box } from '@chakra-ui/react';
export default function MastheadProvider({children}) {
  const activateMasthead = process.env.activateMasthead

  // set default config
  const config = {
    headerConfig: {
      logoColor: "black",
      textColor: "black",
      bgColor: "white",
      css: {
        boxShadow: "0px 3px 6px 0px rgba(0, 0, 0, 0.16)",
        position: 'fixed',
        top: '0px',
        zIndex: '9999999'
      }
    },
    footerConfig: {
      logoColor: "black",
      textColor: "black",
      bgColor: "white",
    },
  }

  React.useEffect(() => {
    let isMounted = false;

    const fairfaxInit = async () => {
      const runscript = (await import('nine-immersive-header')).default

      if (!isMounted) {
        runscript({
          headerConfig: config.headerConfig,
          footerConfig: config.footerConfig
        });
      }
    }

    fairfaxInit()

    return () => isMounted = true;

  }, []);

  if(!activateMasthead) return children

  return (
    <Box as='main' >
      <header></header>

        {children}

      <footer></footer>
    </Box>
  )
}