interface AnimatedCursorProps {
  x: number;
  y: number;
  scale: number;
  opacity: number;
  isVisible: boolean;
}

export function AnimatedCursor({ x, y, scale, opacity, isVisible }: AnimatedCursorProps) {
  if (!isVisible) return null;

  return (
    <div
      className="pointer-events-none absolute top-0 left-0"
      style={{
        transform: `translate3d(${x}px, ${y}px, 0) scale(${scale})`,
        opacity,
        willChange: 'transform, opacity',
        zIndex: 9999,
        transition: 'opacity 200ms ease-in-out',
      }}
    >
      {/* Cursor Arrow SVG */}
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.15))',
        }}
      >
        {/* Standard arrow pointer */}
        <path
          d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z"
          fill="#111"
          stroke="#fff"
          strokeWidth="0.5"
        />
      </svg>
    </div>
  );
}