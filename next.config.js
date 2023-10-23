/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	poweredByHeader: false,
	optimizeFonts: false,
	env: {
		APP_URL: process.env.REACT_APP_URL,
		APP_ENV: process.env.REACT_APP_ENV,
		APP_SERVER_URL: process.env.APP_SERVER_URL,
	},
	async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: 'https://nestjs-app-deploy-production-0c94.up.railway.app/api/:path*',
			},
			{
				source: '/uploads/:path*',
				destination: 'https://nestjs-app-deploy-production-0c94.up.railway.app/uploads/:path*',
			},
		]
	},
}

module.exports = nextConfig
