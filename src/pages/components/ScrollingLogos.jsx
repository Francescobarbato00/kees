// components/LogosCarousel.js

import React, { useState, useEffect, useRef, useMemo } from 'react';

export default function LogosCarousel() {
  // Array originale: solo 5 loghi
  const logos = [
    '/1.svg',
    '/2.svg',
    '/3.svg',
    '/4.svg',
    '/5.svg'
  ];

  // Numero di loghi visibili contemporaneamente
  const visibleLogos = 3;
  // Array esteso: per l'effetto infinito, duplico i primi "visibleLogos" elementi
  const extendedLogos = useMemo(
    () => [...logos, ...logos.slice(0, visibleLogos)],
    [logos, visibleLogos]
  );

  // Ref per misurare la larghezza del container
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);

  // Aggiorna la larghezza al mount e al resize
  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.clientWidth);
    }
    const handleResize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calcola la larghezza in pixel di ogni slot (ogni logo occupa 1/3 del container)
  const slotWidth = containerWidth / visibleLogos;
  // Il massimo indice valido nell'array esteso (extendedLogos.length - visibleLogos)
  const maxIndex = extendedLogos.length - visibleLogos; // 8 - 3 = 5

  // Stati per indice corrente, per gestire il drag e per disabilitare temporaneamente la transizione
  const [currentIndex, setCurrentIndex] = useState(0);
  const [disableTransition, setDisableTransition] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startPosition, setStartPosition] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);

  // Auto-scroll: ogni 3 secondi incrementa l'indice se non siamo in fase di drag
  const autoScrollIntervalRef = useRef(null);
  const startAutoScroll = () => {
    autoScrollIntervalRef.current = setInterval(() => {
      setCurrentIndex(prevIndex => {
        if (prevIndex < maxIndex) {
          return prevIndex + 1;
        }
        // Se siamo all'ultimo slide (slide clone), non incrementiamo;
        // l'effetto infinito verrà gestito da un useEffect che ripristina a 0
        return prevIndex;
      });
    }, 3000);
  };
  const stopAutoScroll = () => {
    if (autoScrollIntervalRef.current) {
      clearInterval(autoScrollIntervalRef.current);
      autoScrollIntervalRef.current = null;
    }
  };

  useEffect(() => {
    if (!isDragging && containerWidth) {
      startAutoScroll();
    }
    return () => stopAutoScroll();
  }, [isDragging, containerWidth]);

  // Quando l'indice corrente raggiunge il max (slide clone), dopo la transizione lo resetto a 0
  useEffect(() => {
    if (currentIndex === maxIndex && !isDragging) {
      const timeout = setTimeout(() => {
        setDisableTransition(true);
        setCurrentIndex(0);
      }, 500); // durata della transizione
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, isDragging, maxIndex]);

  // Dopo il reset, riabilito la transizione
  useEffect(() => {
    if (disableTransition) {
      const timeout = setTimeout(() => {
        setDisableTransition(false);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [disableTransition]);

  // Gestione del drag/touch
  const handleMouseDown = (e) => {
    stopAutoScroll();
    setIsDragging(true);
    setStartPosition(e.clientX);
  };
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const offset = e.clientX - startPosition;
    setDragOffset(offset);
  };
  const finalizeDrag = () => {
    const threshold = slotWidth / 4; // soglia per cambiare slide
    let newIndex = currentIndex;
    if (dragOffset > threshold && currentIndex > 0) {
      newIndex = currentIndex - 1;
    } else if (dragOffset < -threshold && currentIndex < maxIndex) {
      newIndex = currentIndex + 1;
    }
    setCurrentIndex(newIndex);
    setIsDragging(false);
    setDragOffset(0);
    startAutoScroll();

    // Se con il drag si raggiunge il max, attivo il reset (infinite scroll)
    if (newIndex === maxIndex) {
      const timeout = setTimeout(() => {
        setDisableTransition(true);
        setCurrentIndex(0);
      }, 500);
      return () => clearTimeout(timeout);
    }
  };
  const handleMouseUp = () => {
    if (!isDragging) return;
    finalizeDrag();
  };
  const handleMouseLeave = () => {
    if (isDragging) finalizeDrag();
  };
  const handleTouchStart = (e) => {
    stopAutoScroll();
    setIsDragging(true);
    setStartPosition(e.touches[0].clientX);
  };
  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const offset = e.touches[0].clientX - startPosition;
    setDragOffset(offset);
  };
  const handleTouchEnd = () => {
    if (!isDragging) return;
    finalizeDrag();
  };

  return (
    <section style={{ backgroundColor: '#fff', padding: '40px 0' }}>

      {/* Contenitore esterno: 100% di larghezza, overflow nascosto, supporta drag/touch */}
      <div
        ref={containerRef}
        style={{
          width: '100%',
          overflow: 'hidden',
          margin: '0 auto',
          cursor: isDragging ? 'grabbing' : 'grab'
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Track interno con tutti i loghi (array esteso) in fila */}
        <div
          style={{
            display: 'flex',
            width: `${extendedLogos.length * slotWidth}px`,
            transition: disableTransition ? 'none' : 'transform 0.5s ease-in-out',
            transform: `translateX(-${currentIndex * slotWidth - dragOffset}px)`
          }}
        >
          {extendedLogos.map((logo, index) => (
            <div
              key={index}
              style={{
                flex: '0 0 auto',
                width: `${slotWidth}px`,
                boxSizing: 'border-box',
                padding: '0 10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <img
                src={logo}
                alt={`Logo ${index}`}
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  objectFit: 'contain'
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
