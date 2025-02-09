import withBundleAnalyzer from '@next/bundle-analyzer'

// Rename the constant to avoid conflict
const bundleAnalyzerConfig = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
const nextConfig = {}

const config = bundleAnalyzerConfig(nextConfig)

export default config
