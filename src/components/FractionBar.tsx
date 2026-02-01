"use client";

import { useState, useCallback, useRef } from "react";
import { FractionBarProps } from "@/types/fraction";

export function FractionBar({
  fraction,
  shadedSegments: controlledShaded,
  width = 500,
  height = 64,
  interactive = false,
  onSegmentChange,
}: FractionBarProps) {
  const [internalShaded, setInternalShaded] = useState<number[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const dragStartRef = useRef<Set<number>>(new Set());
  const svgRef = useRef<SVGSVGElement>(null);

  const shadedSegments = controlledShaded ?? internalShaded;
  const segmentWidth = width / fraction.denominator;

  const updateShaded = useCallback(
    (newShaded: number[]) => {
      if (onSegmentChange) {
        onSegmentChange(newShaded);
      } else {
        setInternalShaded(newShaded);
      }
    },
    [onSegmentChange]
  );

  const getSegmentIndex = useCallback(
    (clientX: number): number | null => {
      if (!svgRef.current) return null;
      const rect = svgRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const index = Math.floor(x / segmentWidth);
      if (index >= 0 && index < fraction.denominator) {
        return index;
      }
      return null;
    },
    [segmentWidth, fraction.denominator]
  );

  const handlePointerDown = useCallback(
    (e: React.PointerEvent, index: number) => {
      if (!interactive) return;
      e.preventDefault();
      (e.target as Element).setPointerCapture(e.pointerId);

      setIsDragging(true);
      dragStartRef.current = new Set(shadedSegments);

      const newShaded = shadedSegments.includes(index)
        ? shadedSegments.filter((i) => i !== index)
        : [...shadedSegments, index];
      updateShaded(newShaded);
    },
    [interactive, shadedSegments, updateShaded]
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!interactive) return;

      const index = getSegmentIndex(e.clientX);
      setHoveredIndex(index);

      if (!isDragging) return;
      if (index !== null && !shadedSegments.includes(index)) {
        updateShaded([...shadedSegments, index]);
      }
    },
    [interactive, isDragging, getSegmentIndex, shadedSegments, updateShaded]
  );

  const handlePointerUp = useCallback(() => {
    setIsDragging(false);
    dragStartRef.current.clear();
  }, []);

  const handlePointerLeave = useCallback(() => {
    setHoveredIndex(null);
    handlePointerUp();
  }, [handlePointerUp]);

  const getSegmentFill = (index: number, isShaded: boolean): string => {
    if (isShaded) {
      if (interactive && hoveredIndex === index) return "#2563eb";
      return "#3b82f6";
    }
    if (interactive && hoveredIndex === index) return "#e5e5e5";
    return "#f5f5f5";
  };

  return (
    <svg
      ref={svgRef}
      width="100%"
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="xMidYMid meet"
      className="select-none max-w-full"
      style={{ touchAction: interactive ? "none" : "auto" }}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerLeave}
      role="img"
      aria-label={`Fraction bar showing ${shadedSegments.length} out of ${fraction.denominator} parts shaded`}
    >
      {Array.from({ length: fraction.denominator }).map((_, index) => {
        const isShaded = shadedSegments.includes(index);
        return (
          <rect
            key={index}
            x={index * segmentWidth + 1}
            y={1}
            width={segmentWidth - 2}
            height={height - 2}
            fill={getSegmentFill(index, isShaded)}
            stroke="#333"
            strokeWidth={2}
            rx={2}
            style={{
              cursor: interactive ? "pointer" : "default",
              pointerEvents: interactive ? "all" : "none",
              transition: "fill 0.1s ease",
            }}
            onPointerDown={(e) => handlePointerDown(e, index)}
          />
        );
      })}

      <rect
        x={1}
        y={1}
        width={width - 2}
        height={height - 2}
        fill="none"
        stroke="#333"
        strokeWidth={2}
        rx={4}
        pointerEvents="none"
      />
    </svg>
  );
}
