module.exports = {
    "presets": [
        {
            "theme": {
                "extend": {
                    "screens": {
                        "sm": "640px",
                        "md": "768px",
                        "lg": "1024px",
                        "xl": "1280px",
                        "2xl": "1536px"
                    },
                    "colors": {
                        "transparent": "transparent",
                        "current": "currentColor",
                        "white": "#fff",
                        "black": "#000",
                        "darkCoolGray": {
                            "50": "#F5F6F7",
                            "100": "#EBEDEF",
                            "200": "#CED1D6",
                            "300": "#B0B5BD",
                            "400": "#757E8C",
                            "500": "#3A475B",
                            "600": "#344052",
                            "700": "#2C3544",
                            "800": "#232B37",
                            "900": "#1C232D"
                        },
                        "coolGray": {
                            "50": "#F7F8F9",
                            "100": "#EEF0F3",
                            "200": "#D5DAE1",
                            "300": "#BBC3CF",
                            "400": "#8896AB",
                            "500": "#556987",
                            "600": "#4D5F7A",
                            "700": "#404F65",
                            "800": "#333F51",
                            "900": "#2A3342"
                        },
                        "indigo": {
                            "50": "#F8F6FF",
                            "100": "#F0EEFF",
                            "200": "#DAD4FF",
                            "300": "#C3B9FF",
                            "400": "#9685FF",
                            "500": "#6951FF",
                            "600": "#5F49E6",
                            "700": "#4F3DBF",
                            "800": "#3F3199",
                            "900": "#33287D"
                        },
                        "violet": {
                            "50": "#FBF7FF",
                            "100": "#F6EEFE",
                            "200": "#E9D5FD",
                            "300": "#DCBBFC",
                            "400": "#C288F9",
                            "500": "#A855F7",
                            "600": "#974DDE",
                            "700": "#7E40B9",
                            "800": "#653394",
                            "900": "#522A79"
                        },
                        "yellow": {
                            "50": "#FFFAF3",
                            "100": "#FEF5E7",
                            "200": "#FDE7C2",
                            "300": "#FBD89D",
                            "400": "#F8BB54",
                            "500": "#F59E0B",
                            "600": "#DD8E0A",
                            "700": "#B87708",
                            "800": "#935F07",
                            "900": "#784D05"
                        },
                        "red": {
                            "50": "#FEF7F6",
                            "100": "#FDEEEC",
                            "200": "#FBD6D0",
                            "300": "#F9BDB4",
                            "400": "#F48B7C",
                            "500": "#EF5844",
                            "600": "#D7503D",
                            "700": "#B34333",
                            "800": "#8F3529",
                            "900": "#752C21"
                        },
                        "green": {
                            "50": "#F4FDF7",
                            "100": "#EAFAF0",
                            "200": "#CAF4D9",
                            "300": "#AAEDC3",
                            "400": "#6ADF95",
                            "500": "#2AD167",
                            "600": "#26BC5E",
                            "700": "#209D4E",
                            "800": "#197D3E",
                            "900": "#156633"
                        },
                        "blue": {
                            "50": "#F5F9FF",
                            "100": "#EBF3FE",
                            "200": "#CEE0FD",
                            "300": "#B1CDFB",
                            "400": "#76A8F9",
                            "500": "#3B82F6",
                            "600": "#3575DD",
                            "700": "#2C62B9",
                            "800": "#234E94",
                            "900": "#1D4079"
                        },
                        "gray": {
                            "50": "#f9fafb",
                            "100": "#f3f4f6",
                            "200": "#e5e7eb",
                            "300": "#d1d5db",
                            "400": "#9ca3af",
                            "500": "#6b7280",
                            "600": "#4b5563",
                            "700": "#374151",
                            "800": "#1f2937",
                            "900": "#111827"
                        }
                    },
                    "spacing": {
                        "0": "0px",
                        "1": "0.25rem",
                        "2": "0.5rem",
                        "3": "0.75rem",
                        "4": "1rem",
                        "5": "1.25rem",
                        "6": "1.5rem",
                        "7": "1.75rem",
                        "8": "2rem",
                        "9": "2.25rem",
                        "10": "2.5rem",
                        "11": "2.75rem",
                        "12": "3rem",
                        "14": "3.5rem",
                        "16": "4rem",
                        "18": "4.5rem",
                        "20": "5rem",
                        "24": "6rem",
                        "28": "7rem",
                        "32": "8rem",
                        "36": "9rem",
                        "40": "10rem",
                        "44": "11rem",
                        "48": "12rem",
                        "52": "13rem",
                        "56": "14rem",
                        "60": "15rem",
                        "64": "16rem",
                        "72": "18rem",
                        "80": "20rem",
                        "96": "24rem",
                        "px": "1px",
                        "0.5": "0.125rem",
                        "1.5": "0.375rem",
                        "2.5": "0.625rem",
                        "3.5": "0.875rem"
                    },
                    "animation": {
                        "none": "none",
                        "spin": "spin 1s linear infinite",
                        "ping": "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
                        "pulse": "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                        "bounce": "bounce 1s infinite"
                    },
                    "backdropBlur": (theme) => theme('blur'),
                    "backdropBrightness": (theme) => theme('brightness'),
                    "backdropContrast": (theme) => theme('contrast'),
                    "backdropGrayscale": (theme) => theme('grayscale'),
                    "backdropHueRotate": (theme) => theme('hueRotate'),
                    "backdropInvert": (theme) => theme('invert'),
                    "backdropOpacity": (theme) => theme('opacity'),
                    "backdropSaturate": (theme) => theme('saturate'),
                    "backdropSepia": (theme) => theme('sepia'),
                    "backgroundColor": (theme) => theme('colors'),
                    "backgroundImage": {
                        "none": "none",
                        "gradient-to-t": "linear-gradient(to top, var(--tw-gradient-stops))",
                        "gradient-to-tr": "linear-gradient(to top right, var(--tw-gradient-stops))",
                        "gradient-to-r": "linear-gradient(to right, var(--tw-gradient-stops))",
                        "gradient-to-br": "linear-gradient(to bottom right, var(--tw-gradient-stops))",
                        "gradient-to-b": "linear-gradient(to bottom, var(--tw-gradient-stops))",
                        "gradient-to-bl": "linear-gradient(to bottom left, var(--tw-gradient-stops))",
                        "gradient-to-l": "linear-gradient(to left, var(--tw-gradient-stops))",
                        "gradient-to-tl": "linear-gradient(to top left, var(--tw-gradient-stops))"
                    },
                    "backgroundOpacity": (theme) => theme('opacity'),
                    "backgroundPosition": {
                        "bottom": "bottom",
                        "center": "center",
                        "left": "left",
                        "left-bottom": "left bottom",
                        "left-top": "left top",
                        "right": "right",
                        "right-bottom": "right bottom",
                        "right-top": "right top",
                        "top": "top"
                    },
                    "backgroundSize": {
                        "auto": "auto",
                        "cover": "cover",
                        "contain": "contain"
                    },
                    "blur": {
                        "0": "0",
                        "none": "0",
                        "sm": "4px",
                        "DEFAULT": "8px",
                        "md": "12px",
                        "lg": "16px",
                        "xl": "24px",
                        "2xl": "40px",
                        "3xl": "64px"
                    },
                    "brightness": {
                        "0": "0",
                        "50": ".5",
                        "75": ".75",
                        "90": ".9",
                        "95": ".95",
                        "100": "1",
                        "105": "1.05",
                        "110": "1.1",
                        "125": "1.25",
                        "150": "1.5",
                        "200": "2"
                    },
                    "borderColor": (theme) => ({
      ...theme('colors'),
      DEFAULT: theme('colors.gray.200', 'currentColor'),
    }),
                    "borderOpacity": (theme) => theme('opacity'),
                    "borderRadius": {
                        "none": "0px",
                        "sm": "0.125rem",
                        "DEFAULT": "0.25rem",
                        "md": "0.375rem",
                        "lg": "0.5rem",
                        "xl": "0.625rem",
                        "2xl": "0.75rem",
                        "3xl": "0.875rem",
                        "4xl": "1rem",
                        "5xl": "1.25rem",
                        "6xl": "1.375rem",
                        "7xl": "1.5rem",
                        "8xl": "2rem",
                        "9xl": "2.25rem",
                        "10xl": "2.5rem",
                        "11xl": "5rem",
                        "full": "9999px"
                    },
                    "borderWidth": {
                        "0": "0px",
                        "2": "2px",
                        "4": "4px",
                        "8": "8px",
                        "DEFAULT": "1px"
                    },
                    "boxShadow": {
                        "xsm": "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
                        "sm": "0 1px 2px 0 rgba(105, 81, 255, 0.05)",
                        "DEFAULT": "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
                        "md": "0 1px 2px 0 rgba(85, 105, 135, 0.1)",
                        "lg": "0px 1px 3px rgba(42, 51, 66, 0.06)",
                        "xl": "10px 14px 34px rgba(0, 0, 0, 0.04)",
                        "2xl": "0px 32px 64px -12px rgba(85, 105, 135, 0.08)",
                        "3xl": "0px 24px 48px -12px rgba(42, 51, 66, 0.06)",
                        "button": "0px 1px 2px rgba(85, 105, 135, 0.06)",
                        "input": "0px 1px 2px rgba(0, 0, 0, 0.05)",
                        "dashboard": "0px 1px 3px rgba(42, 51, 66, 0.06), 0px 1px 2px rgba(42, 51, 66, 0.03)",
                        "inner": "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
                        "none": "none"
                    },
                    "caretColor": (theme) => theme('colors'),
                    "contrast": {
                        "0": "0",
                        "50": ".5",
                        "75": ".75",
                        "100": "1",
                        "125": "1.25",
                        "150": "1.5",
                        "200": "2"
                    },
                    "container": [],
                    "content": {
                        "none": "none"
                    },
                    "cursor": {
                        "auto": "auto",
                        "default": "default",
                        "pointer": "pointer",
                        "wait": "wait",
                        "text": "text",
                        "move": "move",
                        "help": "help",
                        "not-allowed": "not-allowed"
                    },
                    "divideColor": (theme) => theme('borderColor'),
                    "divideOpacity": (theme) => theme('borderOpacity'),
                    "divideWidth": (theme) => theme('borderWidth'),
                    "dropShadow": {
                        "sm": "0 1px 1px rgba(0,0,0,0.05)",
                        "DEFAULT": [
                            "0 1px 2px rgba(0, 0, 0, 0.1)",
                            "0 1px 1px rgba(0, 0, 0, 0.06)"
                        ],
                        "md": [
                            "0 4px 3px rgba(0, 0, 0, 0.07)",
                            "0 2px 2px rgba(0, 0, 0, 0.06)"
                        ],
                        "lg": [
                            "0 10px 8px rgba(0, 0, 0, 0.04)",
                            "0 4px 3px rgba(0, 0, 0, 0.1)"
                        ],
                        "xl": [
                            "0 20px 13px rgba(0, 0, 0, 0.03)",
                            "0 8px 5px rgba(0, 0, 0, 0.08)"
                        ],
                        "2xl": "0 25px 25px rgba(0, 0, 0, 0.15)",
                        "none": "0 0 #0000"
                    },
                    "fill": {
                        "current": "currentColor"
                    },
                    "grayscale": {
                        "0": "0",
                        "DEFAULT": "100%"
                    },
                    "hueRotate": {
                        "0": "0deg",
                        "15": "15deg",
                        "30": "30deg",
                        "60": "60deg",
                        "90": "90deg",
                        "180": "180deg",
                        "-180": "-180deg",
                        "-90": "-90deg",
                        "-60": "-60deg",
                        "-30": "-30deg",
                        "-15": "-15deg"
                    },
                    "invert": {
                        "0": "0",
                        "DEFAULT": "100%"
                    },
                    "flex": {
                        "1": "1 1 0%",
                        "auto": "1 1 auto",
                        "initial": "0 1 auto",
                        "none": "none"
                    },
                    "flexGrow": {
                        "0": "0",
                        "DEFAULT": "1"
                    },
                    "flexShrink": {
                        "0": "0",
                        "DEFAULT": "1"
                    },
                    "fontFamily": {
                        "body": [
                            "\"Poppins\"",
                            "ui-sans-serif",
                            "system-ui",
                            "-apple-system",
                            "BlinkMacSystemFont",
                            "\"Segoe UI\"",
                            "Roboto",
                            "\"Helvetica Neue\"",
                            "Arial",
                            "\"Noto Sans\"",
                            "sans-serif",
                            "\"Apple Color Emoji\"",
                            "\"Segoe UI Emoji\"",
                            "\"Segoe UI Symbol\"",
                            "\"Noto Color Emoji\""
                        ],
                        "heading": [
                            "Poppins",
                            "ui-sans-serif",
                            "system-ui",
                            "-apple-system",
                            "BlinkMacSystemFont",
                            "\"Segoe UI\"",
                            "Roboto",
                            "\"Helvetica Neue\"",
                            "Arial",
                            "\"Noto Sans\"",
                            "sans-serif",
                            "\"Apple Color Emoji\"",
                            "\"Segoe UI Emoji\"",
                            "\"Segoe UI Symbol\"",
                            "\"Noto Color Emoji\""
                        ],
                        "sans": [
                            "Poppins",
                            "ui-sans-serif",
                            "system-ui",
                            "-apple-system",
                            "BlinkMacSystemFont",
                            "\"Segoe UI\"",
                            "Roboto",
                            "\"Helvetica Neue\"",
                            "Arial",
                            "\"Noto Sans\"",
                            "sans-serif",
                            "\"Apple Color Emoji\"",
                            "\"Segoe UI Emoji\"",
                            "\"Segoe UI Symbol\"",
                            "\"Noto Color Emoji\""
                        ],
                        "serif": [
                            "ui-serif",
                            "Georgia",
                            "Cambria",
                            "\"Times New Roman\"",
                            "Times",
                            "serif"
                        ],
                        "mono": [
                            "ui-monospace",
                            "SFMono-Regular",
                            "Menlo",
                            "Monaco",
                            "Consolas",
                            "\"Liberation Mono\"",
                            "\"Courier New\"",
                            "monospace"
                        ]
                    },
                    "fontSize": {
                        "xxs": [
                            "0.6875rem"
                        ],
                        "xs": [
                            "0.75rem"
                        ],
                        "sm": [
                            "0.875rem"
                        ],
                        "base": [
                            "1rem"
                        ],
                        "lg": [
                            "1.125rem"
                        ],
                        "xl": [
                            "1.25rem"
                        ],
                        "2xl": [
                            "1.5rem"
                        ],
                        "3xl": [
                            "1.875rem"
                        ],
                        "4xl": [
                            "2.25rem"
                        ],
                        "5xl": [
                            "3rem"
                        ],
                        "6xl": [
                            "3.75rem"
                        ],
                        "7xl": [
                            "4.5rem"
                        ],
                        "8xl": [
                            "6rem"
                        ],
                        "9xl": [
                            "8rem"
                        ]
                    },
                    "fontWeight": {
                        "thin": "100",
                        "extralight": "200",
                        "light": "300",
                        "normal": "400",
                        "medium": "500",
                        "semibold": "600",
                        "bold": "700",
                        "extrabold": "800",
                        "black": "900"
                    },
                    "gap": (theme) => theme('spacing'),
                    "gradientColorStops": (theme) => theme('colors'),
                    "gridAutoColumns": {
                        "auto": "auto",
                        "min": "min-content",
                        "max": "max-content",
                        "fr": "minmax(0, 1fr)"
                    },
                    "gridAutoRows": {
                        "auto": "auto",
                        "min": "min-content",
                        "max": "max-content",
                        "fr": "minmax(0, 1fr)"
                    },
                    "gridColumn": {
                        "auto": "auto",
                        "span-1": "span 1 \/ span 1",
                        "span-2": "span 2 \/ span 2",
                        "span-3": "span 3 \/ span 3",
                        "span-4": "span 4 \/ span 4",
                        "span-5": "span 5 \/ span 5",
                        "span-6": "span 6 \/ span 6",
                        "span-7": "span 7 \/ span 7",
                        "span-8": "span 8 \/ span 8",
                        "span-9": "span 9 \/ span 9",
                        "span-10": "span 10 \/ span 10",
                        "span-11": "span 11 \/ span 11",
                        "span-12": "span 12 \/ span 12",
                        "span-full": "1 \/ -1"
                    },
                    "gridColumnEnd": {
                        "1": "1",
                        "2": "2",
                        "3": "3",
                        "4": "4",
                        "5": "5",
                        "6": "6",
                        "7": "7",
                        "8": "8",
                        "9": "9",
                        "10": "10",
                        "11": "11",
                        "12": "12",
                        "13": "13",
                        "auto": "auto"
                    },
                    "gridColumnStart": {
                        "1": "1",
                        "2": "2",
                        "3": "3",
                        "4": "4",
                        "5": "5",
                        "6": "6",
                        "7": "7",
                        "8": "8",
                        "9": "9",
                        "10": "10",
                        "11": "11",
                        "12": "12",
                        "13": "13",
                        "auto": "auto"
                    },
                    "gridRow": {
                        "auto": "auto",
                        "span-1": "span 1 \/ span 1",
                        "span-2": "span 2 \/ span 2",
                        "span-3": "span 3 \/ span 3",
                        "span-4": "span 4 \/ span 4",
                        "span-5": "span 5 \/ span 5",
                        "span-6": "span 6 \/ span 6",
                        "span-full": "1 \/ -1"
                    },
                    "gridRowStart": {
                        "1": "1",
                        "2": "2",
                        "3": "3",
                        "4": "4",
                        "5": "5",
                        "6": "6",
                        "7": "7",
                        "auto": "auto"
                    },
                    "gridRowEnd": {
                        "1": "1",
                        "2": "2",
                        "3": "3",
                        "4": "4",
                        "5": "5",
                        "6": "6",
                        "7": "7",
                        "auto": "auto"
                    },
                    "gridTemplateColumns": {
                        "1": "repeat(1, minmax(0, 1fr))",
                        "2": "repeat(2, minmax(0, 1fr))",
                        "3": "repeat(3, minmax(0, 1fr))",
                        "4": "repeat(4, minmax(0, 1fr))",
                        "5": "repeat(5, minmax(0, 1fr))",
                        "6": "repeat(6, minmax(0, 1fr))",
                        "7": "repeat(7, minmax(0, 1fr))",
                        "8": "repeat(8, minmax(0, 1fr))",
                        "9": "repeat(9, minmax(0, 1fr))",
                        "10": "repeat(10, minmax(0, 1fr))",
                        "11": "repeat(11, minmax(0, 1fr))",
                        "12": "repeat(12, minmax(0, 1fr))",
                        "none": "none"
                    },
                    "gridTemplateRows": {
                        "1": "repeat(1, minmax(0, 1fr))",
                        "2": "repeat(2, minmax(0, 1fr))",
                        "3": "repeat(3, minmax(0, 1fr))",
                        "4": "repeat(4, minmax(0, 1fr))",
                        "5": "repeat(5, minmax(0, 1fr))",
                        "6": "repeat(6, minmax(0, 1fr))",
                        "none": "none"
                    },
                    "height": (theme) => ({
      auto: 'auto',
      ...theme('spacing'),
      '1\/2': '50%',
      '1\/3': '33.333333%',
      '2\/3': '66.666667%',
      '1\/4': '25%',
      '2\/4': '50%',
      '3\/4': '75%',
      '1\/5': '20%',
      '2\/5': '40%',
      '3\/5': '60%',
      '4\/5': '80%',
      '1\/6': '16.666667%',
      '2\/6': '33.333333%',
      '3\/6': '50%',
      '4\/6': '66.666667%',
      '5\/6': '83.333333%',
      full: '100%',
      screen: '100vh',
    }),
                    "inset": (theme, { negative }) => ({
      auto: 'auto',
      ...theme('spacing'),
      ...negative(theme('spacing')),
      '1\/2': '50%',
      '1\/3': '33.333333%',
      '2\/3': '66.666667%',
      '1\/4': '25%',
      '2\/4': '50%',
      '3\/4': '75%',
      full: '100%',
      '-1\/2': '-50%',
      '-1\/3': '-33.333333%',
      '-2\/3': '-66.666667%',
      '-1\/4': '-25%',
      '-2\/4': '-50%',
      '-3\/4': '-75%',
      '-full': '-100%',
    }),
                    "keyframes": {
                        "spin": {
                            "to": {
                                "transform": "rotate(360deg)"
                            }
                        },
                        "ping": {
                            "75%, 100%": {
                                "transform": "scale(2)",
                                "opacity": "0"
                            }
                        },
                        "pulse": {
                            "50%": {
                                "opacity": ".5"
                            }
                        },
                        "bounce": {
                            "0%, 100%": {
                                "transform": "translateY(-25%)",
                                "animationTimingFunction": "cubic-bezier(0.8,0,1,1)"
                            },
                            "50%": {
                                "transform": "none",
                                "animationTimingFunction": "cubic-bezier(0,0,0.2,1)"
                            }
                        }
                    },
                    "letterSpacing": {
                        "tighter": "-0.02em",
                        "tight": "-1px",
                        "normal": "0em",
                        "wide": "0.03em",
                        "wider": "0.08em",
                        "widest": "0.1em"
                    },
                    "lineHeight": {
                        "3": ".75rem",
                        "4": "1rem",
                        "5": "1.25rem",
                        "6": "1.5rem",
                        "7": "1.75rem",
                        "8": "2rem",
                        "9": "2.25rem",
                        "10": "2.5rem",
                        "none": "1",
                        "tight": "1.25",
                        "snug": "1.375",
                        "normal": "1.5",
                        "relaxed": "1.625",
                        "loose": "2"
                    },
                    "listStyleType": {
                        "none": "none",
                        "disc": "disc",
                        "decimal": "decimal"
                    },
                    "margin": (theme, { negative }) => ({
      auto: 'auto',
      ...theme('spacing'),
      ...negative(theme('spacing')),
    }),
                    "maxHeight": (theme) => ({
      ...theme('spacing'),
      full: '100%',
      screen: '100vh',
    }),
                    "maxWidth": (theme, { breakpoints }) => ({
      none: 'none',
      0: '0rem',
      xs: '20rem',
      sm: '24rem',
      md: '28rem',
      lg: '32rem',
      xl: '36rem',
      '2xl': '42rem',
      '3xl': '48rem',
      '4xl': '56rem',
      '5xl': '64rem',
      '6xl': '72rem',
      '7xl': '80rem',
      full: '100%',
      min: 'min-content',
      max: 'max-content',
      prose: '65ch',
      ...breakpoints(theme('screens')),
    }),
                    "minHeight": {
                        "0": "0px",
                        "full": "100%",
                        "screen": "100vh"
                    },
                    "minWidth": {
                        "0": "0px",
                        "full": "100%",
                        "min": "min-content",
                        "max": "max-content"
                    },
                    "objectPosition": {
                        "bottom": "bottom",
                        "center": "center",
                        "left": "left",
                        "left-bottom": "left bottom",
                        "left-top": "left top",
                        "right": "right",
                        "right-bottom": "right bottom",
                        "right-top": "right top",
                        "top": "top"
                    },
                    "opacity": {
                        "0": "0",
                        "5": "0.05",
                        "10": "0.1",
                        "20": "0.2",
                        "25": "0.25",
                        "30": "0.3",
                        "40": "0.4",
                        "50": "0.5",
                        "60": "0.6",
                        "70": "0.7",
                        "75": "0.75",
                        "80": "0.8",
                        "90": "0.9",
                        "95": "0.95",
                        "100": "1"
                    },
                    "order": {
                        "1": "1",
                        "2": "2",
                        "3": "3",
                        "4": "4",
                        "5": "5",
                        "6": "6",
                        "7": "7",
                        "8": "8",
                        "9": "9",
                        "10": "10",
                        "11": "11",
                        "12": "12",
                        "first": "-9999",
                        "last": "9999",
                        "none": "0"
                    },
                    "outline": {
                        "none": [
                            "2px solid transparent",
                            "2px"
                        ],
                        "white": [
                            "2px dotted white",
                            "2px"
                        ],
                        "black": [
                            "2px dotted black",
                            "2px"
                        ]
                    },
                    "padding": (theme) => theme('spacing'),
                    "placeholderColor": (theme) => theme('colors'),
                    "placeholderOpacity": (theme) => theme('opacity'),
                    "ringColor": (theme) => ({
      DEFAULT: theme('colors.blue.500', '#3b82f6'),
      ...theme('colors'),
    }),
                    "ringOffsetColor": (theme) => theme('colors'),
                    "ringOffsetWidth": {
                        "0": "0px",
                        "1": "1px",
                        "2": "2px",
                        "4": "4px",
                        "8": "8px"
                    },
                    "ringOpacity": (theme) => ({
      DEFAULT: '0.5',
      ...theme('opacity'),
    }),
                    "ringWidth": {
                        "0": "0px",
                        "1": "1px",
                        "2": "2px",
                        "4": "4px",
                        "8": "8px",
                        "DEFAULT": "3px"
                    },
                    "rotate": {
                        "0": "0deg",
                        "1": "1deg",
                        "2": "2deg",
                        "3": "3deg",
                        "6": "6deg",
                        "12": "12deg",
                        "45": "45deg",
                        "90": "90deg",
                        "180": "180deg",
                        "-180": "-180deg",
                        "-90": "-90deg",
                        "-45": "-45deg",
                        "-12": "-12deg",
                        "-6": "-6deg",
                        "-3": "-3deg",
                        "-2": "-2deg",
                        "-1": "-1deg"
                    },
                    "saturate": {
                        "0": "0",
                        "50": ".5",
                        "100": "1",
                        "150": "1.5",
                        "200": "2"
                    },
                    "scale": {
                        "0": "0",
                        "50": ".5",
                        "75": ".75",
                        "90": ".9",
                        "95": ".95",
                        "100": "1",
                        "105": "1.05",
                        "110": "1.1",
                        "125": "1.25",
                        "150": "1.5"
                    },
                    "sepia": {
                        "0": "0",
                        "DEFAULT": "100%"
                    },
                    "skew": {
                        "0": "0deg",
                        "1": "1deg",
                        "2": "2deg",
                        "3": "3deg",
                        "6": "6deg",
                        "12": "12deg",
                        "-12": "-12deg",
                        "-6": "-6deg",
                        "-3": "-3deg",
                        "-2": "-2deg",
                        "-1": "-1deg"
                    },
                    "space": (theme, { negative }) => ({
      ...theme('spacing'),
      ...negative(theme('spacing')),
    }),
                    "stroke": {
                        "current": "currentColor"
                    },
                    "strokeWidth": [
                        "0",
                        "1",
                        "2"
                    ],
                    "textColor": (theme) => ({
      ...theme('colors'),
      body: '#2A3342',
    }),
                    "textOpacity": (theme) => theme('opacity'),
                    "transformOrigin": {
                        "center": "center",
                        "top": "top",
                        "top-right": "top right",
                        "right": "right",
                        "bottom-right": "bottom right",
                        "bottom": "bottom",
                        "bottom-left": "bottom left",
                        "left": "left",
                        "top-left": "top left"
                    },
                    "transitionDelay": {
                        "75": "75ms",
                        "100": "100ms",
                        "150": "150ms",
                        "200": "200ms",
                        "300": "300ms",
                        "500": "500ms",
                        "700": "700ms",
                        "1000": "1000ms"
                    },
                    "transitionDuration": {
                        "75": "75ms",
                        "100": "100ms",
                        "150": "150ms",
                        "200": "200ms",
                        "300": "300ms",
                        "500": "500ms",
                        "700": "700ms",
                        "1000": "1000ms",
                        "DEFAULT": "150ms"
                    },
                    "transitionProperty": {
                        "none": "none",
                        "all": "all",
                        "DEFAULT": "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
                        "colors": "background-color, border-color, color, fill, stroke",
                        "opacity": "opacity",
                        "shadow": "box-shadow",
                        "transform": "transform"
                    },
                    "transitionTimingFunction": {
                        "DEFAULT": "cubic-bezier(0.4, 0, 0.2, 1)",
                        "linear": "linear",
                        "in": "cubic-bezier(0.4, 0, 1, 1)",
                        "out": "cubic-bezier(0, 0, 0.2, 1)",
                        "in-out": "cubic-bezier(0.4, 0, 0.2, 1)"
                    },
                    "translate": (theme, { negative }) => ({
      ...theme('spacing'),
      ...negative(theme('spacing')),
      '1\/2': '50%',
      '1\/3': '33.333333%',
      '2\/3': '66.666667%',
      '1\/4': '25%',
      '2\/4': '50%',
      '3\/4': '75%',
      full: '100%',
      '-1\/2': '-50%',
      '-1\/3': '-33.333333%',
      '-2\/3': '-66.666667%',
      '-1\/4': '-25%',
      '-2\/4': '-50%',
      '-3\/4': '-75%',
      '-full': '-100%',
    }),
                    "width": (theme) => ({
      auto: 'auto',
      ...theme('spacing'),
      '1\/2': '50%',
      '1\/3': '33.333333%',
      '2\/3': '66.666667%',
      '1\/4': '25%',
      '2\/4': '50%',
      '3\/4': '75%',
      '1\/5': '20%',
      '2\/5': '40%',
      '3\/5': '60%',
      '4\/5': '80%',
      '1\/6': '16.666667%',
      '2\/6': '33.333333%',
      '3\/6': '50%',
      '4\/6': '66.666667%',
      '5\/6': '83.333333%',
      '1\/12': '8.333333%',
      '2\/12': '16.666667%',
      '3\/12': '25%',
      '4\/12': '33.333333%',
      '5\/12': '41.666667%',
      '6\/12': '50%',
      '7\/12': '58.333333%',
      '8\/12': '66.666667%',
      '9\/12': '75%',
      '10\/12': '83.333333%',
      '11\/12': '91.666667%',
      full: '100%',
      screen: '100vw',
      min: 'min-content',
      max: 'max-content',
    }),
                    "zIndex": {
                        "0": "0",
                        "10": "10",
                        "20": "20",
                        "30": "30",
                        "40": "40",
                        "50": "50",
                        "auto": "auto"
                    }
                }
            }
        }
    ],
    "theme": {
        "extend": []
    },
    "content": [
        ".\/src\/pug\/*.pug",
        ".\/src\/html\/*.html",
        ".\/src\/pages\/*.js",
        ".\/src\/components\/*\/*.js"
    ],
    "plugins": []
};