/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'placehold.jp',
                port: "",
                pathname: "/**",
                search: ""
            },
            {
                protocol: 'https',
                hostname: 'github.com',
                port: "",
                pathname: "/**",
                search: ""
            }
        ]
    }
};

export default nextConfig;
