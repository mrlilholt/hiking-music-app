
import React, { useEffect, useMemo, useRef, useState } from 'react'

const STATIONS = [
  // Original 5
  {
    key: 'guitar',
    name: 'Trail Guitar',
    tagline: 'Acoustic & folk for the trail',
    tags: ["guitar", "acoustic", "folk", "trail", "campfire", "strings", "hiking", "nature", "calm"],
    url: 'https://ice2.somafm.com/folkfwd-128-mp3',
    art: '/assets/stations/station-trail-guitar.png',
  },
  {
    key: 'lofi',
    name: 'Lo-Fi Woods',
    tagline: 'Chill beats under the trees',
    tags: ["lofi", "chill", "beats", "study", "focus", "woods", "downtempo", "relax"],
    url: 'https://ice2.somafm.com/groovesalad-128-mp3',
    art: '/assets/stations/station-lofi-woods.png',
  },
  {
    key: 'ambient',
    name: 'Ultra Ambient',
    tagline: 'Deep, beatless, wide-open calm',
    tags: ["ambient", "ultra", "drone", "space", "meditation", "sleep", "calm", "atmospheric"],
    url: 'https://ice2.somafm.com/dronezone-128-mp3',
    art: '/assets/stations/station-ultra-ambient.png',
  },
  {
    key: 'psyindia',
    name: 'Chill Psy-India',
    tagline: 'Hypnotic global psy, mellow energy',
    tags: ["indian", "goa", "psychedelic", "electronic", "world", "trippy", "dance", "tabla"],
    url: 'https://ice2.somafm.com/suburbsofgoa-128-mp3',
    art: '/assets/stations/station-chill-psy-india.png',
  },
  {
    key: 'forest',
    name: 'Forest Drift',
    tagline: 'Ambient electronic for long walks',
    tags: ["forest", "drift", "downtempo", "chill", "ambient", "explore", "wander"],
    url: 'https://ice2.somafm.com/deepspaceone-128-mp3',
    art: '/assets/stations/station-forest-drift.png',
  },

  // 15 new options (variety pack)
  {
    key: 'indiepop',
    name: 'Indie Pop Rocks!',
    tagline: 'Guitars + chill indie energy',
    tags: ["indie", "pop", "rock", "guitar", "uplifting", "daytime", "hike", "singalong"],
    url: 'https://ice2.somafm.com/indiepop-128-mp3',
    art: '/assets/stations/station-indie-pop-rocks.png',
  },
  {
    key: 'illstreet',
    name: 'Illinois Street Lounge',
    tagline: 'Downtempo lounge & smoky grooves',
    tags: ["lounge", "downtempo", "jazz", "chill", "vinyl", "night", "city"],
    url: 'https://ice2.somafm.com/illstreet-128-mp3',
    art: '/assets/stations/station-illinois-street-lounge.png',
  },
  {
    key: 'thetrip',
    name: 'The Trip',
    tagline: 'Psychedelic rock, wide open',
    tags: ["psychedelic", "rock", "trippy", "classic", "guitar", "jam", "60s", "70s"],
    url: 'https://ice2.somafm.com/thetrip-128-mp3',
    art: '/assets/stations/station-the-trip.png',
  },
  {
    key: 'beatblender',
    name: 'Beat Blender',
    tagline: 'Chillhop + downtempo beats',
    tags: ["beats", "downtempo", "chillhop", "hiphop", "groove", "lofi", "walk"],
    url: 'https://ice2.somafm.com/beatblender-128-mp3',
    art: '/assets/stations/station-beat-blender.png',
  },
  {
    key: 'defcon',
    name: 'DEF CON Radio (Music)',
    tagline: 'Dark chill • cyber night hike',
    tags: ["dark", "cyber", "industrial", "ambient", "glitch", "night", "tech"],
    url: 'https://ice2.somafm.com/defcon-128-mp3',
    art: '/assets/stations/station-defcon-radio.png',
  },
  {
    key: 'synphaera',
    name: 'Synphaera Radio',
    tagline: 'Ambient • space • minimal',
    tags: ["ambient", "space", "drone", "minimal", "deep", "focus", "sleep"],
    url: 'https://ice1.somafm.com/synphaera-128-mp3',
    art: '/assets/stations/station-synphaera.png',
  },
  {
    key: 'fluid',
    name: 'Fluid',
    tagline: 'Liquid ambient drift',
    tags: ["ambient", "liquid", "drift", "calm", "float", "water", "chill"],
    url: 'https://ice2.somafm.com/fluid-128-mp3',
    art: '/assets/stations/station-fluid.png',
  },
  {
    key: 'dronezone64',
    name: 'Drone Zone (Low Bandwidth)',
    tagline: 'Ultra calm • lighter stream',
    tags: ["drone", "ambient", "sleep", "deep", "minimal", "longform", "zen"],
    url: 'https://ice2.somafm.com/dronezone-64-aac',
    art: '/assets/stations/station-drone-zone-low.png',
  },
  {
    key: 'darkzone',
    name: 'Dark Zone',
    tagline: 'Deep ambient for night trails',
    tags: ["dark", "ambient", "night", "deep", "minimal", "mystery"],
    url: 'https://ice2.somafm.com/darkzone-128-mp3',
    art: '/assets/stations/station-dark-zone.png',
  },
  {
    key: 'secretagent',
    name: 'Secret Agent',
    tagline: 'Retro spy grooves • travel vibes',
    tags: ["retro", "spy", "lounge", "surf", "groove", "vintage", "fun"],
    url: 'https://ice2.somafm.com/secretagent-128-mp3',
    art: '/assets/stations/station-secret-agent.png',
  },
  {
    key: 'poptron',
    name: 'PopTron',
    tagline: 'Alt pop + electronic candy',
    tags: ["pop", "electronic", "indie", "bright", "upbeat", "color"],
    url: 'https://ice2.somafm.com/poptron-128-mp3',
    art: '/assets/stations/station-poptron.png',
  },
  {
    key: 'sf1033',
    name: 'SF 10-33',
    tagline: 'Signal drift • experimental calm',
    tags: ["glitch", "ambient", "experimental", "noise", "tech", "mood"],
    url: 'https://ice2.somafm.com/sf1033-128-mp3',
    art: '/assets/stations/station-sf-10-33.png',
  },
  {
    key: 'digitalis',
    name: 'Digitalis',
    tagline: 'Melodic electronic • forward motion',
    tags: ["electronic", "melodic", "motion", "drive", "uplift", "synth"],
    url: 'https://ice2.somafm.com/digitalis-128-mp3',
    art: '/assets/stations/station-digitalis.png',
  },
  {
    key: 'goa64',
    name: 'Suburbs of Goa (Low Bandwidth)',
    tagline: 'Psy-India • lighter stream',
    tags: ["indian", "goa", "psychedelic", "downtempo", "world", "trippy", "lowbandwidth"],
    url: 'https://ice2.somafm.com/suburbsofgoa-64-aac',
    art: '/assets/stations/station-suburbs-of-goa-low.png',
  },
  {
    key: 'rpmellow',
    name: 'Radio Paradise • Mellow',
    tagline: 'Curated mellow mix for long hikes',
    tags: ["mellow", "eclectic", "chill", "easy", "softrock", "indie", "ambient"],
    url: 'https://stream.radioparadise.com/mellow-192',
    art: '/assets/stations/station-radio-paradise-mellow.png',
  },

  {
    key: 'bossa_roots',
    name: 'Bossa Nova Roots',
    tagline: 'Warm bossa & Brazilian grooves',
    tags: ["bossa", "bossa nova", "brazil", "acoustic", "latin", "guitar", "chill", "sunset"],
    url: 'https://ice1.somafm.com/bossa-128-mp3',
    art: '/assets/stations/bossa-nova-roots.png',
  },
  {
    key: 'bossa_beyond',
    name: 'Bossa Beyond',
    tagline: 'SomaFM: modern bossa, downtempo & samba',
    tags: ["bossa", "downtempo", "latin", "soma", "chill", "groove"],
    url: 'https://ice6.somafm.com/bossa-128-mp3',
    art: '/assets/stations/somafm-bossa-beyond.png',
  },
  {
    key: 'poolside',
    name: 'Poolside',
    tagline: 'Tiki, exotica & beach lounge',
    tags: ["tiki", "exotica", "beach", "tropical", "lounge", "summer", "poolside"],
    url: 'https://ice1.somafm.com/tikitime-128-mp3',
    art: '/assets/stations/somafm-tiki-time.png',
  },
  {
    key: 'jazzy_french',
    name: 'Jazz-a-Paris',
    tagline: 'French vocals + jazzy Paris vibes',
    tags: ["jazz", "french", "vocals", "lyrics", "paris", "cafe", "chill"],
    url: 'http://jazz-wr18.ice.infomaniak.ch/jazz-wr18-128.mp3',
    art: '/assets/stations/jazz-a-paris.png',
  },
  {
    key: 'jazz_classique_fr',
    name: 'Night Paris',
    tagline: 'Jazz & Classique (France)',
    tags: ["jazz", "classique", "france", "paris", "night", "late"],
    url: 'http://jazz-wr17.ice.infomaniak.ch/jazz-wr17-128.mp3',
    art: '/assets/stations/paris-late-jazz.png',
  },
  {
    key: 'late_night_piano',
    name: 'Late Night Piano',
    tagline: 'Piano-led jazz and nocturne vibes',
    tags: ["piano", "jazz", "late night", "calm", "focus", "instrumental"],
    url: 'https://jzr-piano.ice.infomaniak.ch/jzr-piano.mp3',
    art: '/assets/stations/late-night-piano.png',
  },
  {
    key: 'piano_lounge',
    name: 'Piano Lounge',
    tagline: 'Smooth piano + modern lounge jazz',
    tags: ["piano", "lounge", "jazz", "smooth", "instrumental", "chill"],
    url: 'http://stream.srg-ssr.ch/m/rsj/mp3_128',
    art: '/assets/stations/piano-jazz-lounge.png',
  },
  {
    key: "lisboa-bossa",
    name: "Lisboa Bossa",
    tagline: "Smooth Bossa vibes (Europe)",
    url: 'https://ice2.somafm.com/bossa-128-mp3',
    art: '/assets/stations/lisboa-bossa.png',
    tags: ["bossa", "smooth", "chill", "latin", "global"]
  },
]

function clamp(n, a, b){ return Math.min(b, Math.max(a, n)); }

function usePersistentState(key, initial) {
  const [value, setValue] = useState(() => {
    try {
      const raw = localStorage.getItem(key)
      return raw == null ? initial : JSON.parse(raw)
    } catch {
      return initial
    }
  })
  useEffect(() => {
    try { localStorage.setItem(key, JSON.stringify(value)) } catch {}
  }, [key, value])
  return [value, setValue]
}

function Icon({ name }) {
  const common = { width: 22, height: 22, viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' }

  if (name === 'home') return (
    <svg {...common}>
      <path d="M3 10.5 12 3l9 7.5V21a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1V10.5Z"
        stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  )

  if (name === 'stations') return (
    <svg {...common}>
      <path d="M5 7h14M5 12h14M5 17h14"
        stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )

  if (name === 'settings') return (
    <svg {...common}>
      <path d="M12 2.5v2M12 19.5v2M4.5 12h-2M21.5 12h-2M5.4 5.4l-1.4-1.4M20 20l-1.4-1.4M18.6 5.4l1.4-1.4M4 20l1.4-1.4"
        stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  )

  if (name === 'play') return (
    <svg {...common}>
      <path d="M9 7.5v9l8-4.5-8-4.5Z" fill="currentColor"/>
    </svg>
  )

  if (name === 'pause') return (
    <svg {...common}>
      <path d="M7.5 7.5h3v9h-3v-9Zm6 0h3v9h-3v-9Z" fill="currentColor"/>
    </svg>
  )

  return null
}

function StationImage({ src, alt, fallback }) {
  const [cur, setCur] = useState(src)
  useEffect(() => { setCur(src) }, [src])
  return (
    <img
      src={cur}
      alt={alt}
      loading="lazy"
      onError={() => {
        if (fallback && cur !== fallback) setCur(fallback)
      }}
    />
  )
}

function Visualizer({ mode, analyserRef, isPlaying }) {
  const canvasRef = useRef(null)
  const rafRef = useRef(null)

  // 🍄 Mushroom mode state
  const MUSHROOMS = useMemo(() => (
    Array.from({ length: 9 }, (_, i) => `/assets/mushrooms/m${i + 1}.png`)
  ), [])
  const [mushrooms, setMushrooms] = useState([])
  const mushTimersRef = useRef(new Map())
  const lastSpawnRef = useRef(0)
  const freqBufRef = useRef(null)
  const tRef = useRef(0)

  // Cleanup timers on unmount
  useEffect(() => {
    return () => {
      for (const t of mushTimersRef.current.values()) clearTimeout(t)
      mushTimersRef.current.clear()
    }
  }, [])

  // Clear mushrooms + timers when leaving mushroom mode
  useEffect(() => {
    if (mode !== 'mushroom') {
      for (const t of mushTimersRef.current.values()) clearTimeout(t)
      mushTimersRef.current.clear()
      setMushrooms([])
    }
  }, [mode])

  function scheduleFade(id, delayMs) {
    if (mushTimersRef.current.has(id)) return
    const t = setTimeout(() => {
      setMushrooms((prev) => prev.map(m => m.id === id ? { ...m, fading: true } : m))
      const t2 = setTimeout(() => {
        setMushrooms((prev) => prev.filter(m => m.id !== id))
        mushTimersRef.current.delete(id + ':rm')
      }, 900)
      mushTimersRef.current.set(id + ':rm', t2)
      mushTimersRef.current.delete(id)
    }, delayMs)
    mushTimersRef.current.set(id, t)
  }


  // If something is already fading (e.g., overflow trimming), ensure it gets removed
  useEffect(() => {
    if (mode !== 'mushroom') return
    for (const m of mushrooms) {
      if (!m.fading) continue
      const key = m.id + ':rm'
      if (mushTimersRef.current.has(key)) continue
      const t = setTimeout(() => {
        setMushrooms((prev) => prev.filter(x => x.id !== m.id))
        mushTimersRef.current.delete(key)
      }, 900)
      mushTimersRef.current.set(key, t)
    }
  }, [mode, mushrooms])
  // Spawn mushrooms with variable timing (sometimes quick, sometimes up to ~2s).
  // Uses analyser energy if available; otherwise a pleasant fallback.
  useEffect(() => {
    if (mode !== 'mushroom') return

    let cancelled = false
    let timeoutId = null

    const computeEnergy = () => {
      let energy = 0
      const analyser = analyserRef.current
      if (analyser) {
        if (!freqBufRef.current || freqBufRef.current.length !== analyser.frequencyBinCount) {
          freqBufRef.current = new Uint8Array(analyser.frequencyBinCount)
        }
        analyser.getByteFrequencyData(freqBufRef.current)
        const bins = Math.min(64, freqBufRef.current.length)
        let sum = 0
        for (let i = 0; i < bins; i++) sum += freqBufRef.current[i]
        energy = (sum / bins) / 255
      } else {
        tRef.current += 0.06
        energy = 0.25 + 0.55 * (Math.sin(tRef.current * 2.0) * 0.5 + 0.5) + (Math.random() * 0.12)
        energy = clamp(energy, 0, 1)
      }
      return clamp(energy, 0, 1)
    }

    const spawnOne = () => {
      if (cancelled) return

      // If paused, check again soon (don't spawn while paused)
      if (!isPlaying) {
        timeoutId = setTimeout(spawnOne, 500)
        return
      }

      const now = performance.now()
      lastSpawnRef.current = now

      const energy = computeEnergy()
      const id = `${now.toFixed(0)}-${Math.random().toString(16).slice(2)}`
      const src = MUSHROOMS[Math.floor(Math.random() * MUSHROOMS.length)]

      // random positions along width, with edge padding
      const padPct = 6
      const leftPct = padPct + Math.random() * (100 - padPct * 2)

      // base scale + a little boost from energy
      const scale = clamp((0.35 + Math.random() * 0.55) + energy * 0.10, 0.30, 0.98)

      setMushrooms((prev) => {
        let next = [...prev, { id, src, leftPct, scale, fading: false }]

        // If too many, fade out oldest first (oldest non-fading)
        const nonFading = next.filter(m => !m.fading)
        if (nonFading.length > 10) {
          const oldest = nonFading[0]
          next = next.map(m => m.id === oldest.id ? { ...m, fading: true } : m)
        }
        return next
      })

      // Lifetime before fade
      scheduleFade(id, 4800 + Math.floor(Math.random() * 2400))

      // Variable spawn delay: ~700ms to ~2000ms, sometimes a bit quicker on higher energy
      let nextDelay = 700 + Math.random() * 1300
      if (energy > 0.65 && Math.random() < 0.28) nextDelay *= 0.75
      nextDelay = Math.max(550, Math.min(2000, nextDelay))

      timeoutId = setTimeout(spawnOne, nextDelay)
    }

    // Start after a short initial delay so it doesn't instantly fill
    timeoutId = setTimeout(spawnOne, 850)

    return () => {
      cancelled = true
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [mode, isPlaying, analyserRef, MUSHROOMS])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const dpr = Math.max(1, window.devicePixelRatio || 1)

    function resize() {
      const w = canvas.clientWidth
      const h = canvas.clientHeight
      canvas.width = Math.floor(w * dpr)
      canvas.height = Math.floor(h * dpr)
      ctx.setTransform(dpr,0,0,dpr,0,0)
    }
    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    let t = 0
    const buf = new Uint8Array(1024)

    function draw() {
      rafRef.current = requestAnimationFrame(draw)
      const w = canvas.clientWidth
      const h = canvas.clientHeight
      ctx.clearRect(0,0,w,h)

      // subtle grid glow
      ctx.globalAlpha = 0.15
      ctx.fillStyle = '#ffffff'
      for (let x=0;x<w;x+=24) ctx.fillRect(x, 0, 1, h)
      ctx.globalAlpha = 1

      if (!isPlaying) {
        ctx.globalAlpha = 0.5
      }

      const analyser = analyserRef.current
      const effectiveLive = (mode === 'real' && analyser)

      if (effectiveLive) {
        analyser.getByteTimeDomainData(buf)
        ctx.lineWidth = 2
        ctx.strokeStyle = 'rgba(255,255,255,.9)'
        ctx.beginPath()
        for (let i=0;i<buf.length;i++) {
          const v = (buf[i] - 128) / 128
          const x = (i / (buf.length-1)) * w
          const y = (h/2) + v * (h*0.32)
          if (i===0) ctx.moveTo(x,y); else ctx.lineTo(x,y)
        }
        ctx.stroke()

        // accent line
        ctx.globalAlpha = 0.55
        ctx.strokeStyle = 'rgba(255,122,26,.9)'
        ctx.beginPath()
        for (let i=0;i<buf.length;i+=2) {
          const v = (buf[i] - 128) / 128
          const x = (i / (buf.length-1)) * w
          const y = (h/2) + v * (h*0.18)
          if (i===0) ctx.moveTo(x,y); else ctx.lineTo(x,y)
        }
        ctx.stroke()
        ctx.globalAlpha = 1
      } else {
        // fallback animated equalizer bars (always works) — used for Animated + Mushroom
        t += 0.045
        const bars = 42
        const gap = 4
        const bw = (w - gap*(bars-1)) / bars
        for (let i=0;i<bars;i++){
          const phase = t + i*0.25
          const amp = (Math.sin(phase)*0.5 + 0.5)
          const base = isPlaying ? 0.22 : 0.10
          const height = (base + amp*0.58) * h
          const x = i*(bw+gap)
          const y = (h - height)/2
          ctx.fillStyle = i%2===0 ? 'rgba(255,255,255,.78)' : 'rgba(255,122,26,.75)'
          ctx.fillRect(x, y, bw, height)
        }
      }

      ctx.globalAlpha = 1
    }

    draw()
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      ro.disconnect()
    }
  }, [mode, analyserRef, isPlaying])

  const label = mode === 'mushroom'
    ? 'Visualizer: Mushrooms'
    : ((mode === 'real' && analyserRef.current) ? 'Visualizer: Live' : 'Visualizer: Animated')

  return (
    <div className="visualWrap">
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:8}}>
        <div className="pill">{label}</div>
        <div className="pill">{isPlaying ? 'Playing' : 'Paused'}</div>
      </div>

      <div className="visCanvasWrap">
        <canvas ref={canvasRef} className="visCanvas" />
        {mode === 'mushroom' && (
          <div className="mushLayer" aria-hidden="true">
            {mushrooms.map((m) => (
              <div
                key={m.id}
                className={"mush " + (m.fading ? 'fade' : '')}
                style={{ left: `${m.leftPct}%`, '--s': m.scale }}
              >
                <img src={m.src} alt="" />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

function MiniPlayer({ station, isPlaying, buffering, onToggle, onOpen }){
  return (
    <div className="mini" role="button" tabIndex={0} onClick={onOpen} onKeyDown={(e)=>{ if(e.key==='Enter') onOpen(); }}>
      <div className="miniArt"><StationImage src={station.art} alt={station.name} fallback={'/assets/icons/icon-192.png'} /></div>
      <div className="miniText">
        <div className="miniTitle">{station.name}</div>
        <div className="miniSub">{buffering ? 'Buffering…' : (isPlaying ? 'Playing' : 'Paused')}</div>
      </div>
      <button className="miniBtn" onClick={(e)=>{ e.stopPropagation(); onToggle(); }} aria-label={isPlaying ? 'Pause' : 'Play'}>
        <Icon name={isPlaying ? 'pause' : 'play'} />
      </button>
    </div>
  )
}

function BottomSheetPlayer({
  open,
  station,
  stations,
  isPlaying,
  buffering,
  status,
  volume,
  visMode,
  analyserOk,
  analyserRef,
  onClose,
  onTogglePlay,
  onPlayStation,
  onSetVolume,
  onCycleVisualizer,
}){
  const sheetRef = useRef(null)
  const handleRef = useRef(null)

  useEffect(() => {
    if (!open) return
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  // Simple swipe-down to close
  useEffect(() => {
    if (!open) return
    const el = sheetRef.current
    const handle = handleRef.current
    if (!el || !handle) return
    let startY = 0
    let dy = 0
    let active = false
    const onDown = (e) => {
      active = true
      dy = 0
      startY = e.touches ? e.touches[0].clientY : e.clientY
    }
    const onMove = (e) => {
      if (!active) return
      const y = e.touches ? e.touches[0].clientY : e.clientY
      dy = y - startY
      if (dy > 0) {
        el.style.transform = `translateY(${dy}px)`
      }
    }
    const onUp = () => {
      if (!active) return
      active = false
      el.style.transform = ''
      if (dy > 110) onClose()
    }
    // Attach swipe gesture to the handle only so buttons/controls remain clickable.
    handle.addEventListener('pointerdown', onDown)
    window.addEventListener('pointermove', onMove)
    window.addEventListener('pointerup', onUp)
    return () => {
      handle.removeEventListener('pointerdown', onDown)
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerup', onUp)
    }
  }, [open, onClose])

  const fallbackArt = '/assets/icons/icon-512.png'
  const visLabel = visMode === 'mushroom' ? 'Mushrooms' : ((visMode === 'real' && analyserOk) ? 'Live' : 'Animated')

  return (
    <>
      <div className={"sheetBackdrop " + (open ? 'open' : '')} onClick={onClose} />
      <div className={"sheet " + (open ? 'open' : '')} ref={sheetRef} role="dialog" aria-modal="true" aria-hidden={!open}>
        <div className="sheetHandle" ref={handleRef} />

        <div className="sheetTop">
          <div className="sheetArt">
            <StationImage src={station.art} fallback={fallbackArt} alt={station.name} />
          </div>
          <div className="sheetMeta">
            <div className="sheetTitle">{station.name}</div>
            <div className="sheetSub">{buffering ? 'Buffering…' : status}</div>
          </div>
          <button className="sheetClose" onClick={onClose} aria-label="Close player">✕</button>
        </div>

        {/* Scrollable body so nothing overlaps on smaller screens */}
        <div className="sheetBody">
          <div className="sheetControls">
            <button className="btn btnPrimary" onClick={onTogglePlay} style={{flex:1}}>
              <span style={{display:'inline-flex', alignItems:'center', gap:10}}>
                <Icon name={isPlaying ? 'pause' : 'play'} />
                {isPlaying ? 'Pause' : 'Play'}
              </span>
            </button>
            <button className="btn btnGhost" onClick={onCycleVisualizer}>
              Visual: {visLabel}
            </button>
          </div>

          <div className="sheetVis">
            <Visualizer mode={visMode} analyserRef={analyserRef} isPlaying={isPlaying} />
          </div>

          <div className="sheetRow">
            <div className="sheetRowLeft">
              <div className="sheetRowLabel">Volume</div>
              <div className="small">{Math.round(volume * 100)}%</div>
            </div>
            <input
              className="rangeSlider"
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={(e) => onSetVolume(Number(e.target.value))}
            />
          </div>

          <div className="sheetSectionTitle">Swipe stations</div>
          <div className="sheetCarousel">
            {stations.map(s => (
              <button
                key={s.key}
                className={"stationChip " + (s.key === station.key ? 'active' : '')}
                onClick={() => onPlayStation(s.key)}
              >
                <div className="chipArt">
                  <StationImage src={s.art} fallback={fallbackArt} alt={s.name} />
                </div>
                <div className="chipText">
                  <div className="chipName">{s.name}</div>
                  <div className="chipHint">{s.tagline}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}


const MOODS = [
  { key: 'surprise', label: 'Surprise me', tags: [] },
  { key: 'hike', label: 'Trail / Hike', tags: ['trail','hike','guitar','acoustic','forest'] },
  { key: 'focus', label: 'Focus', tags: ['focus','ambient','piano','lofi','study'] },
  { key: 'sleep', label: 'Sleep', tags: ['ultra','ambient','drift','sleep','night'] },
  { key: 'tropical', label: 'Tropical', tags: ['tiki','poolside','beach','tropical','summer'] },
  { key: 'india', label: 'India / Psy', tags: ['india','indian','psy','goa'] },
  { key: 'jazz_fr', label: 'French Jazz', tags: ['french','paris','vocals','lyrics','jazz'] },
  { key: 'bossa', label: 'Bossa Nova', tags: ['bossa','brazil','latin'] },
  { key: 'glitch', label: 'Glitch', tags: ['glitch','digital','electron'] },
  { key: 'dark', label: 'Dark', tags: ['dark','zone','trip'] },
]

export default function App() {
  // --- Splash (2s) ---
  const [showSplash, setShowSplash] = useState(true)
  useEffect(() => {
    const t = setTimeout(() => setShowSplash(false), 2000)
    return () => clearTimeout(t)
  }, [])

  const [tab, setTab] = usePersistentState('hm_tab', 'home')
  const [stationKey, setStationKey] = usePersistentState('hm_station', 'guitar')
  const [volume, setVolume] = usePersistentState('hm_volume', 0.9)

  const [stationQuery, setStationQuery] = useState('')

  const [moodOpen, setMoodOpen] = useState(false)
  const [moodSelected, setMoodSelected] = useState('surprise')

  const [wakeLockOn, setWakeLockOn] = usePersistentState('hm_wakelock', false)
  const [sleepMinutes, setSleepMinutes] = usePersistentState('hm_sleep_minutes', 0)

  const station = useMemo(() => STATIONS.find(s => s.key === stationKey) || STATIONS[0], [stationKey])

  const stationTags = useMemo(() => {
    // Build tag chips ordered by popularity (count desc) then alpha
    const counts = new Map()
    for (const s of STATIONS) {
      for (const t of (s.tags || [])) {
        const k = String(t).trim().toLowerCase()
        if (!k) continue
        counts.set(k, (counts.get(k) || 0) + 1)
      }
    }
    return Array.from(counts.entries())
      .sort((a, b) => (b[1] - a[1]) || a[0].localeCompare(b[0]))
      .map(([k]) => k)
  }, [])

  const filteredStations = useMemo(() => {
    const q = stationQuery.trim().toLowerCase()
    if (!q) return STATIONS
    return STATIONS.filter(s => {
      const hay = `${s.name} ${s.tagline} ${(s.tags || []).join(' ')}`.toLowerCase()
      return hay.includes(q)
    })
  }, [stationQuery])

  const audioRef = useRef(null)
  const audioCtxRef = useRef(null)
  const analyserRef = useRef(null)
  const sourceRef = useRef(null)
  const wakeLockRef = useRef(null)
  const sleepTimeoutRef = useRef(null)
  const sleepTickRef = useRef(null)

  const [isPlaying, setIsPlaying] = useState(false)
  const [buffering, setBuffering] = useState(false)
  const [visMode, setVisMode] = useState('animated') // 'real' | 'animated' | 'mushroom'
  const [analyserOk, setAnalyserOk] = useState(false)
  const [sleepEndsAt, setSleepEndsAt] = useState(null)
  const [sleepTick, setSleepTick] = useState(0)
  const visModeRef = useRef('animated')
  useEffect(() => { visModeRef.current = visMode }, [visMode])
  const [status, setStatus] = useState('Ready')
  const [sheetOpen, setSheetOpen] = useState(false)

  // Setup audio element
  useEffect(() => {
    const a = audioRef.current
    if (!a) return
    a.preload = 'none'
    a.crossOrigin = 'anonymous'
    a.volume = clamp(volume, 0, 1)

    const onPlay = () => { setIsPlaying(true); setStatus('Playing'); setBuffering(false) }
    const onPause = () => { setIsPlaying(false); setStatus('Paused') }
    const onWaiting = () => { setBuffering(true); setStatus('Buffering…') }
    const onStalled = () => { setBuffering(true); setStatus('Stalled…') }
    const onError = () => { setBuffering(false); setStatus('Stream error') }
    const onCanPlay = () => { if (a.paused === false) setBuffering(false) }

    a.addEventListener('play', onPlay)
    a.addEventListener('pause', onPause)
    a.addEventListener('waiting', onWaiting)
    a.addEventListener('stalled', onStalled)
    a.addEventListener('error', onError)
    a.addEventListener('canplay', onCanPlay)
    a.addEventListener('playing', () => { setBuffering(false); setStatus('Playing') })

    return () => {
      a.removeEventListener('play', onPlay)
      a.removeEventListener('pause', onPause)
      a.removeEventListener('waiting', onWaiting)
      a.removeEventListener('stalled', onStalled)
      a.removeEventListener('error', onError)
      a.removeEventListener('canplay', onCanPlay)
    }
  }, [])

  // Volume persistence
  useEffect(() => {
    const a = audioRef.current
    if (a) a.volume = clamp(volume, 0, 1)
  }, [volume])

  // Wake Lock (keep screen awake) — only while playing
  useEffect(() => {
    let cancelled = false

    async function applyWakeLock() {
      try {
        if (!wakeLockOn || !isPlaying) {
          if (wakeLockRef.current) {
            await wakeLockRef.current.release()
            wakeLockRef.current = null
          }
          return
        }
        if (!('wakeLock' in navigator)) return
        const sentinel = await navigator.wakeLock.request('screen')
        if (cancelled) {
          await sentinel.release()
          return
        }
        wakeLockRef.current = sentinel
        sentinel.addEventListener('release', () => {
          if (wakeLockRef.current === sentinel) wakeLockRef.current = null
        })
      } catch (e) {
        wakeLockRef.current = null
      }
    }

    applyWakeLock()

    const onVis = () => {
      if (document.visibilityState === 'visible') applyWakeLock()
    }
    document.addEventListener('visibilitychange', onVis)

    return () => {
      cancelled = true
      document.removeEventListener('visibilitychange', onVis)
      if (wakeLockRef.current) {
        wakeLockRef.current.release().catch(() => {})
        wakeLockRef.current = null
      }
    }
  }, [wakeLockOn, isPlaying])

  // Sleep timer — pauses audio after N minutes
  useEffect(() => {
    if (sleepTimeoutRef.current) clearTimeout(sleepTimeoutRef.current)
    if (sleepTickRef.current) clearInterval(sleepTickRef.current)
    sleepTimeoutRef.current = null
    sleepTickRef.current = null
    setSleepEndsAt(null)

    const mins = Number(sleepMinutes || 0)
    if (!mins || mins <= 0) return

    const ends = Date.now() + mins * 60_000
    setSleepEndsAt(ends)

    sleepTimeoutRef.current = setTimeout(() => {
      const a = audioRef.current
      if (a) a.pause()
      setSleepMinutes(0)
      setSleepEndsAt(null)
    }, mins * 60_000)

    sleepTickRef.current = setInterval(() => {
      setSleepTick(t => t + 1)
    }, 1000)

    return () => {
      if (sleepTimeoutRef.current) clearTimeout(sleepTimeoutRef.current)
      if (sleepTickRef.current) clearInterval(sleepTickRef.current)
      sleepTimeoutRef.current = null
      sleepTickRef.current = null
    }
  }, [sleepMinutes])


  // Media Session metadata
  useEffect(() => {
    if (!('mediaSession' in navigator)) return
    try {
      navigator.mediaSession.metadata = new MediaMetadata({
        title: station.name,
        artist: 'Hiking Music',
        album: 'Stations',
        artwork: [
          { src: station.art, sizes: '512x512', type: 'image/png' }
        ],
      })
    } catch {}
  }, [station])

  async function ensureAudioGraph(){
    // Try to create analyser graph once playback begins (may fail due to CORS restrictions).
    const a = audioRef.current
    if (!a) return
    try {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)()
      }
      const ctx = audioCtxRef.current
      if (ctx.state === 'suspended') await ctx.resume()

      if (!sourceRef.current) {
        sourceRef.current = ctx.createMediaElementSource(a)
        analyserRef.current = ctx.createAnalyser()
        analyserRef.current.fftSize = 2048
        sourceRef.current.connect(analyserRef.current)
        analyserRef.current.connect(ctx.destination)
      }
      setAnalyserOk(true)
      // Mushroom mode still benefits from analyser for beat detection
      if (visModeRef.current === 'real') setVisMode('real')
    } catch {
      // Common failure if stream is not CORS-enabled for analysis
      setAnalyserOk(false)
      if (visModeRef.current === 'real') setVisMode('animated')
    }
  }
  function pickByMood(moodKey) {
    const mood = MOODS.find(m => m.key === moodKey) || MOODS[0]
    const pool = (mood.tags && mood.tags.length)
      ? STATIONS.filter(s => (s.tags || []).some(t => mood.tags.includes(String(t).toLowerCase())))
      : STATIONS.slice()
    const candidates = pool.length ? pool : STATIONS
    const pick = candidates[Math.floor(Math.random() * candidates.length)]
    setMoodSelected(mood.key)
    setMoodOpen(false)
    if (pick && pick.key) playStation(pick.key)
  }



  async function playStation(nextKey){
    const next = STATIONS.find(s => s.key === nextKey)
    if (!next) return

    const a = audioRef.current
    if (!a) return

    setStationKey(nextKey)
    setStatus('Switching…')
    setBuffering(true)

    // Hard reset to prevent "stuck buffering" across station switches
    try {
      a.pause()
      a.src = ''
      a.load()
      // small delay helps some Android devices actually tear down the previous stream
      await new Promise(r => setTimeout(r, 120))
      a.src = next.url
      a.load()

      // play must be triggered from a user gesture - this is called from button/tap
      const p = a.play()
      if (p && typeof p.then === 'function') {
        await p
      }
      setIsPlaying(true)
      setStatus('Playing')
      setBuffering(false)

      // attempt analyser hookup after play begins
      await ensureAudioGraph()
    } catch {
      setStatus('Tap play')
      setIsPlaying(false)
      setBuffering(false)
    }
  }

  async function togglePlay(){
    const a = audioRef.current
    if (!a) return
    try {
      if (a.paused) {
        setBuffering(true)
        const p = a.play()
        if (p && typeof p.then === 'function') await p
        setIsPlaying(true)
        setBuffering(false)
        await ensureAudioGraph()
      } else {
        a.pause()
        setIsPlaying(false)
      }
    } catch {
      setIsPlaying(false)
      setBuffering(false)
    }
  }

  // Autoplay last station after first user interaction (prevents "auto play blocked")
  const [primed, setPrimed] = useState(false)
  useEffect(() => {
    const onFirstTap = () => {
      setPrimed(true)
      window.removeEventListener('pointerdown', onFirstTap)
    }
    window.addEventListener('pointerdown', onFirstTap, { once: true })
    return () => window.removeEventListener('pointerdown', onFirstTap)
  }, [])
  useEffect(() => {
    // If user already interacted and we were previously playing, keep it simple: don't auto-start.
    // User can hit play.
  }, [primed])

  const brandIcon = '/assets/icons/icon-192.png'
  const fallbackArt = '/assets/icons/icon-512.png'

  const cycleVisualizer = () => {
    setVisMode(v => (v === 'real' ? 'animated' : (v === 'animated' ? 'mushroom' : 'real')))
  }

  return (
    <>
      {showSplash && (
        <div className="splashOverlay">
          <img className="splashImg portrait" src="/assets/splash/splash-portrait.png" alt="Splash" />
          <img className="splashImg landscape" src="/assets/splash/splash-landscape.png" alt="Splash" />
        </div>
      )}

      <div className="app">
        <div className="header">
          <div className="brand">
            <img src={brandIcon} alt="Hiking Music" />
            <div>
              <h1>HIKING MUSIC</h1>
              <div className="sub">Hike-ready radio • Android PWA</div>
            </div>
          </div>
          <div className="pill">{buffering ? 'Buffering…' : status}</div>
        </div>

        {tab === 'home' && (
          <>
            <div className="hero" style={{'--heroBg': `url(${station.art})`}}>
              <div className="heroBg" aria-hidden="true" />
              <div className="heroContent">
                <div className="heroTop">
                  <div className="heroArt">
                    <StationImage src={station.art} fallback={fallbackArt} alt={station.name} />
                  </div>
                  <div className="heroText">
                    <div className="heroTitle">{station.name}</div>
                    <div className="heroSub">{station.tagline}</div>
                    <div className="heroMeta">{buffering ? 'Buffering…' : status} • {analyserOk ? 'Live viz OK' : 'Animated viz'}</div>
                    <button className="nowPlayingCard" onClick={() => setSheetOpen(true)}>
                      <span className="npLabel">Now Playing</span>
                      <span className="npHint">Tap to open player</span>
                    </button>
                  </div>
                </div>

                <div className="heroBtns">
                  <button className="bigPlay" onClick={togglePlay} aria-label="Play/Pause">
                    <span className="bigPlayIco"><Icon name={isPlaying ? 'pause' : 'play'} /></span>
                    <span className="bigPlayTxt">{isPlaying ? 'Pause' : 'Play'}</span>
                  </button>
                  <button className="btn btnGhost" onClick={() => setSheetOpen(true)}>Now Playing</button>
                  <button className="btn btnGhost" onClick={() => setMoodOpen(true)}>Smart Mood</button>
                  <button className="btn btnGhost" onClick={cycleVisualizer}>Visualizer</button>
                </div>

                <div className="heroVis">
                  <Visualizer mode={visMode} analyserRef={analyserRef} isPlaying={isPlaying} />
                </div>
              </div>
            </div>

            <div className="sectionTitle">Stations</div>
            <div className="carousel">
              {filteredStations.length === 0 && (
                <div className="emptyCard">No stations match “{stationQuery.trim()}”.</div>
              )}
              {filteredStations.map(s => (
                <button
                  key={s.key}
                  className={"stationCard " + (s.key === station.key ? 'active' : '')}
                  onClick={() => playStation(s.key)}
                  style={{border:'none', textAlign:'left'}}
                >
                  <div className="art"><StationImage src={s.art} fallback={fallbackArt} alt={s.name} /></div>
                  <div className="name">{s.name}</div>
                  <div className="hint">{s.tagline}</div>
                  <div className="playBadge"><Icon name="play" /></div>
                </button>
              ))}
            </div>
          </>
        )}

        {tab === 'stations' && (
          <>
            <div className="sectionTitle">Stations</div>
            <div className="searchBar">
              <input
                className="searchInput"
                value={stationQuery}
                onChange={(e) => setStationQuery(e.target.value)}
                placeholder="Search stations (guitar, glitch, indian, ambient...)"
                inputMode="search"
              />
              {stationQuery.trim() && (
                <button className="searchClear" onClick={() => setStationQuery('')} aria-label="Clear search">×</button>
              )}
            </div>
            <div className="tagRow" aria-label="Station tags">
              {stationTags.map(tag => {
                const active = stationQuery.trim().toLowerCase() === tag
                return (
                  <button
                    key={tag}
                    className={"tagChip " + (active ? 'active' : '')}
                    onClick={() => setStationQuery(active ? '' : tag)}
                    title={`Filter by ${tag}`}
                  >
                    #{tag}
                  </button>
                )
              })}
            </div>
            <div className="carousel">
              {filteredStations.length === 0 && (
                <div className="emptyCard">No stations match “{stationQuery.trim()}”.</div>
              )}
              {filteredStations.map(s => (
                <div key={s.key} className={"stationCard " + (s.key === station.key ? 'active' : '')}>
                  <div className="art"><StationImage src={s.art} fallback={fallbackArt} alt={s.name} /></div>
                  <div className="name">{s.name}</div>
                  <div className="hint">{s.tagline}</div>
                  <div style={{display:'flex', gap:10, marginTop: 12}}>
                    <button className="btn btnPrimary" onClick={() => playStation(s.key)} style={{flex:1}}>
                      <span style={{display:'inline-flex', alignItems:'center', gap:8}}>
                        <Icon name="play" /> Play
                      </span>
                    </button>
                    <button className="btn" onClick={() => { setStationKey(s.key); setTab('home') }} style={{flex:1}}>
                      Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="pill" style={{margin:'0 6px'}}>Tip: swipe left/right to browse, tap Play.</div>
          </>
        )}

        {tab === 'settings' && (
          <>
            <div className="sectionTitle">Settings</div>
            <div className="card" style={{padding: 14}}>
              <div style={{fontWeight:900, letterSpacing:'.06em'}}>Hike Mode</div>
              <p className="small" style={{marginTop:6}}>
                This build focuses on reliability: real streaming audio + background playback on Android.
              </p>
              <div className="settingsGrid" style={{marginTop: 12}}>
                <div className="settingRow">
                  <div>
                    <div className="settingTitle">Sleep timer</div>
                    <div className="small">Auto‑pause after a set time (great for night hikes).</div>
                    {sleepEndsAt && (
                      <div className="small" style={{marginTop:6}}>
                        Ends in <b>{(() => {
                          const ms = Math.max(0, sleepEndsAt - Date.now())
                          const m = Math.floor(ms / 60000)
                          const s = Math.floor((ms % 60000) / 1000)
                          return `${m}:${String(s).padStart(2,'0')}`
                        })()}</b>
                      </div>
                    )}
                  </div>
                  <select
                    className="select"
                    value={sleepMinutes}
                    onChange={(e) => setSleepMinutes(Number(e.target.value))}
                    aria-label="Sleep timer"
                  >
                    <option value={0}>Off</option>
                    <option value={15}>15 min</option>
                    <option value={30}>30 min</option>
                    <option value={45}>45 min</option>
                    <option value={60}>60 min</option>
                    <option value={90}>90 min</option>
                  </select>
                </div>

                <div className="settingRow">
                  <div>
                    <div className="settingTitle">Keep screen awake</div>
                    <div className="small">Prevents the display from sleeping while music is playing (if supported).</div>
                  </div>
                  <label className="switch">
                    <input
                      type="checkbox"
                      checked={!!wakeLockOn}
                      onChange={(e) => setWakeLockOn(e.target.checked)}
                      aria-label="Keep screen awake"
                    />
                    <span className="switchSlider" />
                  </label>
                </div>
              </div>

              <div style={{marginTop: 16}}>
                <div style={{fontWeight:900, letterSpacing:'.06em'}}>Visualizer</div>
                <p className="small" style={{marginTop:6}}>
                  If the stream blocks audio analysis, Hiking Music automatically switches to the animated visualizer.
                </p>
              </div>
            </div>
          </>
        )}

        <audio ref={audioRef} />
      </div>

      <BottomSheetPlayer
        open={sheetOpen}
        station={station}
        stations={STATIONS}
        isPlaying={isPlaying}
        buffering={buffering}
        status={status}
        volume={volume}
        visMode={visMode}
        analyserOk={analyserOk}
        analyserRef={analyserRef}
        onClose={() => setSheetOpen(false)}
        onTogglePlay={togglePlay}
        onPlayStation={(k) => playStation(k)}
        onSetVolume={setVolume}
        onCycleVisualizer={cycleVisualizer}
      />

      {/* Persistent mini-player above the bottom nav */}
      <div className="miniWrap">
        <MiniPlayer
          station={station}
          isPlaying={isPlaying}
          buffering={buffering}
          onToggle={togglePlay}
          onOpen={() => setSheetOpen(true)}
        />
      </div>

      <div className="nav">
        <div className="navInner">
          <button className={"navBtn " + (tab==='home'?'active':'')} onClick={() => setTab('home')}>
            <div className="ico"><Icon name="home"/></div>
            Home
          </button>
          <button className={"navBtn " + (tab==='stations'?'active':'')} onClick={() => setTab('stations')}>
            <div className="ico"><Icon name="stations"/></div>
            Stations
          </button>
          <button className={"navBtn " + (tab==='settings'?'active':'')} onClick={() => setTab('settings')}>
            <div className="ico"><Icon name="settings"/></div>
            Settings
          </button>
        </div>
      </div>
      {moodOpen && (
        <div className="modalOverlay" role="dialog" aria-modal="true" onClick={() => setMoodOpen(false)}>
          <div className="modalCard" onClick={(e) => e.stopPropagation()}>
            <div className="modalHead">
              <div className="modalTitle">Smart Mood</div>
              <button className="iconBtn" onClick={() => setMoodOpen(false)} aria-label="Close">✕</button>
            </div>
            <div className="chipRow">
              {MOODS.map(m => (
                <button
                  key={m.key}
                  className={"chip " + (moodSelected === m.key ? "chipActive" : "")}
                  onClick={() => pickByMood(m.key)}
                >
                  {m.label}
                </button>
              ))}
            </div>
            <div className="modalHint">Picks a station based on vibe tags (and a little randomness).</div>
          </div>
        </div>
      )}

    </>
  )
}