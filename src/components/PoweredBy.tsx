export default function PoweredBy() {
  return (
    <div className="relative">
      <div className="text-sm font-bold text-zinc-300 uppercase tracking-wider relative overflow-hidden">
        Powered by{' '}
        <span className="relative">
          <span className="relative z-10">QudSystem</span>
          {/* Shine effect overlay */}
          <span 
            className="
              absolute inset-0 -translate-x-full
              bg-gradient-to-r from-transparent via-white/20 to-transparent
              animate-shine
              z-20
            "
          />
        </span>
      </div>
    </div>
  )
}
