import { useState } from "react";
import { useMediaQuery } from "react-responsive";

export const useResponsive = () => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
      })
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const isSM = useMediaQuery({ query: '(max-width: 810px)' })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

    return {isDesktopOrLaptop, isBigScreen, isTabletOrMobile, isPortrait, isRetina, isSM}

}