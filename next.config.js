/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'export',
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: 'http',
				hostname: 'bilgievdewp.innokar.com.tr',
				port: '',
				pathname: '/**',
			},
		],
	},
};

module.exports = nextConfig;
