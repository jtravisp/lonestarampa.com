import createMDX from '@next/mdx';

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

/** @type {import('next').NextConfig} */
export default withMDX({
  output: 'export',          // static HTML export
  pageExtensions: ['tsx', 'mdx'],
});
