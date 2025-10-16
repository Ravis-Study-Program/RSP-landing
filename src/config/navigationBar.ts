// Navigation Bar
// ------------
// Description: The navigation bar data for the website.
export interface Logo {
	src: string
	alt: string
	text: string
}

export interface NavSubItem {
	name: string
	link: string
}

export interface NavItem {
	name: string
	link: string
	submenu?: NavSubItem[]
}

export interface NavAction {
	name: string
	link: string
	style: string
	size: string
}

export interface NavData {
	logo: Logo
	navItems: NavItem[]
	navActions: NavAction[]
}

export const navigationBarData: NavData = {
	logo: {
		src: '/logo.svg',
		alt: 'RSP Logo',
		text: "Ravi's Study Program"
	},
	navItems: [
		{ name: 'Home', link: '#intro' },
		{ name: 'Alumni', link: '#companies' },
		{ name: 'Features', link: '#features' },
		{ name: 'FAQ', link: '#faq' },
	],
	navActions: [{ name: 'Donate', link: '/', style: 'primary', size: 'lg' }]
}
