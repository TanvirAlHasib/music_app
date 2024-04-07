/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      // to load image from online any domain in nextJs app we have to tell the domain name in here
      domains: ['cdn.pixabay.com','images.unsplash.com'],
    },
  };
  
  export default nextConfig;
