import { ImageResponse } from 'next/og'

export const dynamic = 'force-static'
export const alt = 'Sites Systems — Web Design Brisbane'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-end',
          padding: '64px',
          background: '#EAE8E2',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            fontSize: '120px',
            fontWeight: 900,
            color: 'transparent',
            WebkitTextStroke: '2px #1a1a1a',
            lineHeight: 0.88,
            marginBottom: '32px',
          }}
        >
          SITES
          <br />
          SYSTEMS
        </div>
        <div
          style={{
            fontSize: '22px',
            color: 'rgba(0,0,0,0.6)',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            fontFamily: 'monospace',
          }}
        >
          Web Design · Brisbane
        </div>
      </div>
    ),
    { ...size }
  )
}
