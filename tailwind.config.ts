import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ["Inter", "sans-serif"],
				heading: ["Montserrat", "sans-serif"],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				dil: {
					red: "#B00020",
					purple: "#4B0076",
					yellow: "#FFD700", // We keep this for backward compatibility
					yellowOrange: "#F97316", // Added bright orange
					softOrange: "#FEC6A1", // Added soft orange
					softYellow: "#FEF7CD", // Added soft yellow
					cream: "#FFF8E1",
					beige: "#F5F5DC",
					peach: "#FDE1D3",
					lightPeach: "#fcf7ee",
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				marquee: {
					'0%': { transform: 'translateX(0%)' },
					'100%': { transform: 'translateX(-100%)' }
				},
				'marquee-slow': {
					'0%': { transform: 'translateX(0%)' },
					'100%': { transform: 'translateX(-100%)' }
				},
				'marquee-very-slow': {
					'0%': { transform: 'translateX(0%)' },
					'100%': { transform: 'translateX(-100%)' }
				},
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				fadeInUp: {
					'0%': { 
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': { 
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				scaleIn: {
					'0%': { 
						opacity: '0',
						transform: 'scale(0.95)'
					},
					'100%': { 
						opacity: '1',
						transform: 'scale(1)'
					}
				},
				pulse: {
					'0%, 100%': {
						opacity: '1'
					},
					'50%': {
						opacity: '0.5'
					}
				},
				float: {
					'0%, 100%': {
						transform: 'translateY(0)'
					},
					'50%': {
						transform: 'translateY(-10px)'
					}
				},
				'bounce-slow': {
					'0%, 100%': {
						transform: 'translateY(0)'
					},
					'50%': {
						transform: 'translateY(-10px)'
					}
				},
				'bounce-slower': {
					'0%, 100%': {
						transform: 'translateY(0)'
					},
					'50%': {
						transform: 'translateY(-7px)'
					}
				},
				countUp: {
					'0%': {
						content: '0'
					},
					'100%': {
						content: 'attr(data-target)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				marquee: 'marquee 25s linear infinite',
				'marquee-slow': 'marquee-slow 45s linear infinite',
				'marquee-very-slow': 'marquee-very-slow 75s linear infinite',
				fadeIn: 'fadeIn 0.5s ease-out',
				fadeInUp: 'fadeInUp 0.7s ease-out',
				scaleIn: 'scaleIn 0.5s ease-out',
				pulse: 'pulse 2s ease-in-out infinite',
				float: 'float 3s ease-in-out infinite',
				'bounce-slow': 'bounce-slow 0.6s ease-in-out infinite',
				'bounce-slower': 'bounce-slow 0.4s ease-in-out infinite',
				countUp: 'countUp 2s forwards'
			},
			backgroundImage: {
				'gradient-red-purple': 'linear-gradient(135deg, #B00020 0%, #4B0076 100%)',
				'gradient-purple-red': 'linear-gradient(135deg, #4B0076 0%, #B00020 100%)',
				'gradient-red': 'linear-gradient(135deg, #B00020 0%, #FF5555 100%)',
				'gradient-yellow-orange': 'linear-gradient(135deg, #FFD700 0%, #F97316 100%)',
				'gradient-orange-yellow': 'linear-gradient(135deg, #F97316 0%, #FFD700 100%)',
				'gradient-soft-yellow-orange': 'linear-gradient(135deg, #FEF7CD 0%, #FEC6A1 100%)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
