import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
          {
            userAgent: '*',
            allow: '/',
          },
          {
            userAgent: '*',
            allow: 'https://www.gstatic.com/draco/versioned/decoders/1.5.2/draco_decoder.wasm',
          }
        ],
        sitemap: 'https://idevstudio.fr/sitemap.xml'
      }
    }