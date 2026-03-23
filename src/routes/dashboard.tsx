import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useState, useEffect, useRef, useCallback } from 'react'

export const Route = createFileRoute('/dashboard')({
  component: Dashboard,
})

type LogEntry = { id: number; message: string }
type AlertEntry = { id: number; message: string }

function Dashboard() {
  const navigate = useNavigate()

  // Auth state
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loginError, setLoginError] = useState('')

  // Dashboard state
  const [time, setTime] = useState('')
  const [status, setStatus] = useState('ACTIVE')
  const [typedTitle, setTypedTitle] = useState('')
  const [crypto, setCrypto] = useState<string | null>(null)
  const [cryptoColor, setCryptoColor] = useState('lime')
  const [news, setNews] = useState<string[]>([])
  const [logs, setLogs] = useState<LogEntry[]>([])
  const [alerts, setAlerts] = useState<AlertEntry[]>([])

  const lastBTC = useRef(0)
  const logIdRef = useRef(0)
  const alertIdRef = useRef(0)

  const addLog = useCallback((msg: string) => {
    logIdRef.current++
    setLogs((prev) => [{ id: logIdRef.current, message: msg }, ...prev].slice(0, 50))
  }, [])

  const addAlert = useCallback(
    (msg: string) => {
      alertIdRef.current++
      setAlerts((prev) => [{ id: alertIdRef.current, message: msg }, ...prev].slice(0, 20))
      addLog('ALERT: ' + msg)
    },
    [addLog],
  )

  // Check localStorage for existing session
  useEffect(() => {
    if (typeof window !== 'undefined' && localStorage.getItem('pv_logged') === 'true') {
      setIsLoading(true)
      const timer = setTimeout(() => {
        setIsLoading(false)
        setIsLoggedIn(true)
      }, 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  // Login handler
  function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    if (username === 'proxyy' && password === 'omega') {
      localStorage.setItem('pv_logged', 'true')
      setLoginError('')
      setIsLoading(true)
      setTimeout(() => {
        setIsLoading(false)
        setIsLoggedIn(true)
      }, 1500)
    } else {
      setLoginError('ACCESS DENIED')
    }
  }

  // Clock
  useEffect(() => {
    if (!isLoggedIn) return
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString())
    }, 1000)
    return () => clearInterval(interval)
  }, [isLoggedIn])

  // Status rotation
  useEffect(() => {
    if (!isLoggedIn) return
    const statuses = ['ACTIVE', 'SCANNING', 'PROCESSING']
    const interval = setInterval(() => {
      setStatus(statuses[Math.floor(Math.random() * statuses.length)])
    }, 3000)
    return () => clearInterval(interval)
  }, [isLoggedIn])

  // Typewriter title
  useEffect(() => {
    if (!isLoggedIn) return
    const text = 'PROXYVERSE'
    let i = 0
    setTypedTitle('')
    const interval = setInterval(() => {
      if (i < text.length) {
        setTypedTitle(text.slice(0, i + 1))
        i++
      } else {
        clearInterval(interval)
      }
    }, 100)
    return () => clearInterval(interval)
  }, [isLoggedIn])

  // Crypto fetcher
  useEffect(() => {
    if (!isLoggedIn) return

    async function fetchCrypto() {
      try {
        const r = await fetch(
          'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd',
        )
        const d = await r.json()
        const price: number = d.bitcoin.usd

        setCryptoColor(price > lastBTC.current ? 'lime' : 'red')
        setCrypto('BTC $' + price.toLocaleString())

        if (lastBTC.current) {
          const diff = ((price - lastBTC.current) / lastBTC.current) * 100
          if (diff > 1) addAlert('BTC naik ' + diff.toFixed(2) + '%')
          if (diff < -1) addAlert('BTC turun ' + diff.toFixed(2) + '%')
        }

        lastBTC.current = price
      } catch {
        setCrypto('Crypto error')
      }
    }

    fetchCrypto()
    const interval = setInterval(fetchCrypto, 10000)
    return () => clearInterval(interval)
  }, [isLoggedIn, addAlert])

  // News fetcher
  useEffect(() => {
    if (!isLoggedIn) return

    async function fetchNews() {
      try {
        const r = await fetch('https://api.spaceflightnewsapi.net/v4/articles/')
        const d = await r.json()

        const keywords = ['war', 'attack', 'crypto', 'economy', 'finance']
        const results: string[] = []

        d.results.slice(0, 10).forEach((n: { title: string }) => {
          const t = n.title.toLowerCase()
          if (keywords.some((k) => t.includes(k))) {
            const summary = n.title.split(' ').slice(0, 8).join(' ') + '...'
            results.push(summary)

            if (t.includes('war') || t.includes('attack')) {
              addAlert('HIGH ALERT: ' + n.title)
            }
          }
        })

        setNews(results.length > 0 ? results : ['No critical intel'])
      } catch {
        setNews(['News error'])
      }
    }

    fetchNews()
    const interval = setInterval(fetchNews, 30000)
    return () => clearInterval(interval)
  }, [isLoggedIn, addAlert])

  // Log initial system messages after login
  useEffect(() => {
    if (!isLoggedIn) return
    addLog('System initialized')
    addLog('Connection secured')
    addLog('Modules loaded')
  }, [isLoggedIn, addLog])

  // --- LOGIN SCREEN ---
  if (!isLoggedIn && !isLoading) {
    return (
      <div className="dashboard-screen min-h-screen flex items-center justify-center flex-col gap-4">
        <h2 className="text-[#00ff9f] text-2xl font-bold tracking-widest neon-text">
          PROXYVERSE LOGIN
        </h2>
        <form onSubmit={handleLogin} className="flex flex-col items-center gap-2">
          <input
            className="dashboard-input"
            placeholder="USERNAME"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="username"
          />
          <input
            className="dashboard-input"
            type="password"
            placeholder="PASSWORD"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />
          <button type="submit" className="dashboard-btn mt-2">
            ACCESS
          </button>
        </form>
        {loginError && <div className="text-red-500 text-sm tracking-widest">{loginError}</div>}
        <button
          className="text-[#00ff9f]/40 text-xs tracking-wider mt-6 hover:text-[#00ff9f] transition-colors cursor-pointer bg-transparent border-none font-mono"
          onClick={() => navigate({ to: '/' })}
        >
          &larr; BACK TO HOME
        </button>
      </div>
    )
  }

  // --- LOADING SCREEN ---
  if (isLoading) {
    return (
      <div className="dashboard-screen min-h-screen flex items-center justify-center flex-col">
        <div className="text-[#00ff9f] text-xl tracking-widest animate-pulse neon-text">
          INITIALIZING...
        </div>
      </div>
    )
  }

  // --- MAIN DASHBOARD ---
  return (
    <div className="dashboard-screen min-h-screen relative">
      {/* Header Bar */}
      <div className="dashboard-panel flex items-center gap-4 flex-wrap">
        <b className="text-[#00ff9f] tracking-widest neon-text">PROXYVERSE CORE</b>
        <span className="text-[#00ff9f]/70">|</span>
        <span className="text-[#00ff9f]/80 text-sm">{time}</span>
        <span className="text-[#00ff9f]/70">|</span>
        <span className="text-[#00ff9f] text-sm flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-[#00ff9f] animate-pulse" />
          {status}
        </span>
        <div className="ml-auto flex gap-3">
          <button
            className="dashboard-btn text-xs py-1 px-3"
            onClick={() => navigate({ to: '/' })}
          >
            HOME
          </button>
          <button
            className="dashboard-btn text-xs py-1 px-3"
            onClick={() => {
              localStorage.removeItem('pv_logged')
              setIsLoggedIn(false)
              setUsername('')
              setPassword('')
            }}
          >
            LOGOUT
          </button>
        </div>
      </div>

      {/* Title + Command */}
      <div className="dashboard-panel">
        <h2 className="text-[#00ff9f] text-3xl md:text-5xl font-black tracking-widest neon-text-hero mb-4">
          {typedTitle}
          <span className="animate-pulse">_</span>
        </h2>
        <button
          className="dashboard-btn"
          onClick={() => {
            addLog('COMMAND CENTER ACTIVATED')
            addAlert('Command Center accessed')
          }}
        >
          ENTER COMMAND
        </button>
      </div>

      {/* Crypto */}
      <div className="dashboard-panel">
        <h3 className="text-[#00ff9f] text-sm tracking-widest mb-2 font-bold">CRYPTO</h3>
        <div
          className="text-lg font-bold"
          style={{ color: crypto === 'Crypto error' ? '#ff4444' : cryptoColor }}
        >
          {crypto ?? 'Loading...'}
        </div>
      </div>

      {/* Intel News */}
      <div className="dashboard-panel">
        <h3 className="text-[#00ff9f] text-sm tracking-widest mb-2 font-bold">INTEL NEWS</h3>
        <div className="text-[#00ff9f]/70 text-sm space-y-2">
          {news.length === 0 ? (
            <span>Loading...</span>
          ) : (
            news.map((item, i) => <div key={i}>&bull; {item}</div>)
          )}
        </div>
      </div>

      {/* Activity Log */}
      <div className="dashboard-panel">
        <h3 className="text-[#00ff9f] text-sm tracking-widest mb-2 font-bold">ACTIVITY LOG</h3>
        <div className="text-[#00ff9f]/60 text-xs max-h-40 overflow-auto space-y-1 font-mono">
          {logs.map((entry) => (
            <div key={entry.id}>&gt; {entry.message}</div>
          ))}
        </div>
      </div>

      {/* Alert Box (fixed bottom right) */}
      <div className="fixed bottom-4 right-4 w-64 border border-[#00ff9f]/60 bg-black/90 p-3 z-50 backdrop-blur-sm">
        <b className="text-[#00ff9f] text-xs tracking-widest block mb-2">ALERT</b>
        <div className="text-[#00ff9f]/70 text-xs max-h-32 overflow-auto space-y-1">
          {alerts.length === 0 ? (
            <span className="text-[#00ff9f]/30">No alerts</span>
          ) : (
            alerts.map((a) => (
              <div key={a.id}>&#9888;&#65039; {a.message}</div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}
