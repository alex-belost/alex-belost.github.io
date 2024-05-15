const rehypePrism = require('@mapbox/rehype-prism');
const nextMDX = require('@next/mdx');
const remarkGfm = require('remark-gfm');

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
}

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism],
  },
})

module.exports = withMDX(nextConfig);
