import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// function to make page scroll to top on navigation to new page
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0,0);
  }, [pathname]);
  return null
}

export default ScrollToTop
