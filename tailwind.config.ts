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
				display: ['Playfair Display', 'serif'],
				body: ['Lato', 'sans-serif'],
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
				},
				// Bhole ke Chole brand colors - Vibrant street food palette
				bhole: {
					pink: "#E91E63", // Brand Pink - more vibrant, logo-accurate
					saffron: "#FF8F00", // Warm Saffron - appetizing alternative to yellow
					cream: "#FFF8F0", // Soft Cream - warm backgrounds  
					lightPink: "#FCE4EC", // Light Pink - subtle accents
					mutedPink: "#F06292", // Muted Pink - secondary elements
					orange: "#FF6B35", // Rich Orange - CTA gradients
					spiceBrown: "#8D4E27", // Spice Brown - authentic street food feel
					freshGreen: "#4CAF50", // Fresh Green - success states
					charcoal: "#2C2C2C", // Deep Charcoal - better readability
				},
				// House of Andhra brand colors - Royal heritage palette
				andhra: {
					royalMaroon: "#8B3A3A", // Royal Maroon - logo-accurate, traditional
					spiceRed: "#B22222", // Spice Red - authentic chili red
					deepBurgundy: "#722F37", // Deep Burgundy - darker maroon for depth
					lightMaroon: "#CD5C5C", // Light Maroon - softer accents
					warmIvory: "#FFF8DC", // Warm Ivory - classic, elegant backgrounds
					traditionalCream: "#F5F5DC", // Traditional Cream - heritage feel
					warmBeige: "#F7E7CE", // Warm Beige - subtle backgrounds
					paprikaOrange: "#D2691E", // Paprika Orange - spice-inspired accent
					turmericGold: "#DAA520", // Turmeric Gold - traditional spice color
					curryLeafGreen: "#228B22", // Curry Leaf Green - fresh, authentic
					darkCharcoal: "#2F2F2F", // Dark Charcoal - refined text
				},
				// Dil Punjabi Daily brand colors - Celebratory pink-teal palette
				dilDaily: {
					dilPink: "#E91E63", // Primary - logo-accurate vibrant magenta
					richTeal: "#20B2AA", // Secondary - logo-accurate turquoise
					heartRed: "#DC143C", // Gradient accent from "Dil"
					lightPink: "#FFE4E6", // Subtle pink backgrounds
					warmCream: "#FFF8DC", // Main backgrounds
					celebrationGold: "#FFD700", // Festive accent - Punjabi spirit
					pureWhite: "#FFFFFF", // Clean contrast
					darkCharcoal: "#2F2F2F", // Readable text
				},
				// Nagada brand colors - Premium golden-orange palette
				nagada: {
					goldenOrange: "#F57B00", // Primary - logo-accurate main color
					warmGold: "#FFD700", // Secondary - celebratory accent
					richBronze: "#CD7F32", // Deeper golden tone for depth
					lightGold: "#FFF9E6", // Subtle golden backgrounds
					elegantCream: "#FFF8DC", // Main backgrounds
					deepCharcoal: "#1A1A1A", // Sophisticated text
					pureWhite: "#FFFFFF", // Clean contrast
					premiumBlack: "#000000", // Logo-accurate black
				},
				// Khichdi Bar brand colors - Natural wholesome palette
				khichdiBar: {
					forestGreen: "#2E7D32", // Primary - logo-accurate "khichdi" text
					warmOrange: "#FF8F00", // Secondary - logo-accurate "Bar" text
					lightGreen: "#E8F5E8", // Subtle green backgrounds
					softOrange: "#FFE0B2", // Light orange accents
					naturalCream: "#F9F7ED", // Main backgrounds
					deepBrown: "#4B2C20", // Earthy, natural text
					pureWhite: "#FFFFFF", // Clean contrast
				},
				// Junglee Kitchen brand colors - Food palette
				jungle: {
					beige: 'hsl(var(--jungle-beige))',
					brown: 'hsl(var(--jungle-brown))',
					gold: 'hsl(var(--jungle-gold))',
					'brown-dark': 'hsl(var(--jungle-brown-dark))',
					'brown-light': 'hsl(var(--jungle-brown-light))',
					'beige-light': 'hsl(var(--jungle-beige-light))',
					'beige-dark': 'hsl(var(--jungle-beige-dark))',
					// Legacy support
					dark: 'hsl(var(--jungle-dark))',
					medium: 'hsl(var(--jungle-medium))',
					light: 'hsl(var(--jungle-light))',
				},
				terracotta: {
					DEFAULT: 'hsl(var(--terracotta))',
					dark: 'hsl(var(--terracotta-dark))',
				},
				saffron: 'hsl(var(--saffron))',
				cream: {
					DEFAULT: 'hsl(var(--cream))',
					dark: 'hsl(var(--cream-dark))',
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
				'gradient-hero': 'var(--gradient-hero)',
				'gradient-section': 'var(--gradient-section)',
				'gradient-accent': 'var(--gradient-accent)',
				'gradient-jungle': 'var(--gradient-jungle)',
				'gradient-food': 'var(--gradient-food)',
			},
			boxShadow: {
				'soft': 'var(--shadow-soft)',
				'medium': 'var(--shadow-medium)',
				'strong': 'var(--shadow-strong)',
				'glow': 'var(--shadow-glow)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
