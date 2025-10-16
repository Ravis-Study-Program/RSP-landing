// Config
// ------------
// Description: The configuration file for the website.

export interface Logo {
	src: string
	alt: string
}


export interface Config {
	siteTitle: string
	siteDescription: string
	ogImage: string
	logo: Logo
	canonical: boolean
	noindex: boolean
	scrollAnimations: boolean
}

export const configData: Config = {
	siteTitle: "Ravi's Study Program - Free intensive coding bootcamp",
	siteDescription:
		"Ravi's Study Program is a free intensive coding bootcamp that helps students land their big tech FAANG companies within 3 months.",
	ogImage: '/og.jpg',
	logo: {
		src: '/logo.svg',
		alt: 'RSP Logo'
	},
	canonical: true,
	noindex: false,
	scrollAnimations: true
}
