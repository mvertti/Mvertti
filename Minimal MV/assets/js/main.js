/*
	Forty by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$wrapper = $('#wrapper'),
		$header = $('#header'),
		$banner = $('#banner');

	// Breakpoints.
		breakpoints({
			xlarge:    ['1281px',   '1680px'   ],
			large:     ['981px',    '1280px'   ],
			medium:    ['737px',    '980px'    ],
			small:     ['481px',    '736px'    ],
			xsmall:    ['361px',    '480px'    ],
			xxsmall:   [null,       '360px'    ]
		});

	/**
	 * Applies parallax scrolling to an element's background image.
	 * @return {jQuery} jQuery object.
	 */
	$.fn._parallax = (browser.name == 'ie' || browser.name == 'edge' || browser.mobile) ? function() { return $(this) } : function(intensity) {

		var	$window = $(window),
			$this = $(this);

		if (this.length == 0 || intensity === 0)
			return $this;

		if (this.length > 1) {
			for (var i=0; i < this.length; i++)
				$(this[i])._parallax(intensity);
			return $this;
		}

		if (!intensity)
			intensity = 0.25;

		$this.each(function() {

			var $t = $(this),
				on, off;

			on = function() {
				$t.css('background-position', 'center 0px');
				$window
					.on('scroll._parallax', function() {
						var pos = parseInt($window.scrollTop()) - parseInt($t.position().top);
						$t.css('background-position', 'center ' + (pos * (-1 * intensity)) + 'px');
					});
			};

			off = function() {
				$t
					.css('background-position', '')
					.css('background-size', '');
				$window
					.off('scroll._parallax');
			};

			breakpoints.on('<=medium', off);
			breakpoints.on('>medium', on);

		});

		return $(this);
	};

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Clear transitioning state on unload/hide.
		$window.on('unload pagehide', function() {
			window.setTimeout(function() {
				$('.is-transitioning').removeClass('is-transitioning');
			}, 250);
		});

	// Fix: Enable transitions in some cases (for iOS).
		if (browser.os == 'ios')
			$body.addClass('is-touch');

	// Scrolly.
		$('.scrolly').scrolly({
			offset: function() {
				return $header.height() - 2;
			}
		});

	// Tiles.
		var $tiles = $('.tiles > article');

		$tiles.each(function() {

			var $this = $(this),
				$image = $this.find('.image'), $img = $image.find('img'),
				$link = $this.find('.link'),
				x;

			// Image.
				$this.css('background-image', 'url(' + $img.attr('src') + ')');
				if (x = $img.data('position'))
					$image.css('background-position', x);
				$image.hide();

			// Link.
				if ($link.length > 0) {
					$x = $link.clone()
						.text('')
						.addClass('primary')
						.appendTo($this);

					$link = $link.add($x);

					$link.on('click', function(event) {
						var href = $link.attr('href');

						// Solo ejecutamos la animación original si NO es un enlace que abre la galería
						if (!$link.hasClass('abrir-galeria')) {
							event.stopPropagation();
							event.preventDefault();

							if ($link.attr('target') == '_blank') {
								window.open(href);
							} else {
								$this.addClass('is-transitioning');
								$wrapper.addClass('is-transitioning');
								window.setTimeout(function() {
									location.href = href;
								}, 500);
							}
						}
					});
				}
		});

	// Header.
		if ($banner.length > 0
		&&	$header.hasClass('alt')) {

			$window.on('resize', function() {
				$window.trigger('scroll');
			});

			$window.on('load', function() {

				$banner.scrollex({
					bottom:		$header.height() + 10,
					terminate:	function() { $header.removeClass('alt'); },
					enter:		function() { $header.addClass('alt'); $header.css({
'background-color': 'transparent',
'backdrop-filter': 'none',
'-webkit-backdrop-filter': 'none'
}); },
					leave:		function() { $header.removeClass('alt'); $header.addClass('reveal'); $header.css({
'background-color': 'rgba(42, 47, 74, 0.5)',
'backdrop-filter': 'blur(10px)',
'-webkit-backdrop-filter': 'blur(10px)'
}); }
				});

				window.setTimeout(function() {
					$window.triggerHandler('scroll');
				}, 100);

			});

		}

	// Banner.
		$banner.each(function() {
			var $this = $(this),
				$image = $this.find('.image'), $img = $image.find('img');

			$this._parallax(0.275);

			if ($image.length > 0) {
				$this.css('background-image', 'url(' + $img.attr('src') + ')');
				$image.hide();
			}
		});

	// Menu.
		var $menu = $('#menu'),
			$menuInner;

		$menu.wrapInner('<div class="inner"></div>');
		$menuInner = $menu.children('.inner');
		$menu._locked = false;

		$menu._lock = function() {
			if ($menu._locked)
				return false;
			$menu._locked = true;
			window.setTimeout(function() {
				$menu._locked = false;
			}, 350);
			return true;
		};

		$menu._show = function() {
			if ($menu._lock())
				$body.addClass('is-menu-visible');
		};

		$menu._hide = function() {
			if ($menu._lock())
				$body.removeClass('is-menu-visible');
		};

		$menu._toggle = function() {
			if ($menu._lock())
				$body.toggleClass('is-menu-visible');
		};

		$menuInner
			.on('click', function(event) {
				event.stopPropagation();
			})
			.on('click', 'a', function(event) {
				var href = $(this).attr('href');
				event.preventDefault();
				event.stopPropagation();
				$menu._hide();
				window.setTimeout(function() {
					window.location.href = href;
				}, 250);
			});

		$menu
			.appendTo($body)
			.on('click', function(event) {
				event.stopPropagation();
				event.preventDefault();
				$body.removeClass('is-menu-visible');
			})
			.append('<a class="close" href="#menu">Close</a>');

		$body
			.on('click', 'a[href="#menu"]', function(event) {
				event.stopPropagation();
				event.preventDefault();
				$menu._toggle();
			})
			.on('click', function(event) {
				$menu._hide();
			})
			.on('keydown', function(event) {
				if (event.keyCode == 27)
					$menu._hide();
			});

})(jQuery);


/* ==========================================================
   GALERÍA AVANZADA DE MON: FADE, ZOOM TÁCTIL, INFINITO, CENTRADO EXACTO Y BLUR CORREGIDO
   ========================================================== */
$(window).on('load', function() {
    // 1. Desvinculamos completamente el click original de la plantilla para los recuadros de galería
    $('.tiles > article').has('.abrir-galeria').off('click');
    $('.abrir-galeria').off('click');

    const modal = document.getElementById('modal-galeria');
    const btnCerrar = document.getElementById('cerrar-modal');
    const escenario = document.getElementById('galeria-escenario');
    const pista = document.getElementById('galeria-pista');
    const wrapper = document.getElementById('wrapper');

    let animacionScroll;
    let velocidadScroll = 0;
    
    // Configuración del loop infinito
    const multiplicadorSets = 6; 
    let usaScrollInfinito = false;

    // Activamos el motor de zoom por si pusiste fotos a mano en el HTML
    asignarZoom();

    // 2. Lógica para Abrir Modal y Calcular Centro Matemático
    $('.tiles > article').has('.abrir-galeria')
        .css('cursor', 'pointer')
        .on('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const enlace = $(this).find('.abrir-galeria');
            const attrImagenes = enlace.attr('data-imagenes');
            
            // Hacemos el modal visible de inmediato (aunque transparente) para poder hacer cálculos espaciales
            modal.style.display = 'flex';
            
            if (attrImagenes && attrImagenes.trim() !== "") {
                pista.innerHTML = ''; 
                const fotos = attrImagenes.split(',').filter(r => r.trim() !== "");
                
                let imagenesCargadas = 0;
                const totalImgs = fotos.length * multiplicadorSets;
                usaScrollInfinito = true;

                // FUNCIÓN MAESTRA DE CENTRADO (Espera a que carguen las fotos para medir)
                const iniciarEnElMedio = () => {
                    imagenesCargadas++;
                    if (imagenesCargadas === totalImgs) {
                        const gap = parseInt(window.getComputedStyle(pista).gap) || 0;
                        const anchoSet = (pista.scrollWidth + gap) / multiplicadorSets;
                        
                        const primeraImagen = pista.children[0]; 
                        const anchoPrimeraImagen = primeraImagen.getBoundingClientRect().width; 
                        
                        const mitadPantalla = window.innerWidth / 2;
                        const mitadImagen = anchoPrimeraImagen / 2;
                        
                        // Teletransporte matemático al centro exacto de la primera imagen
                        escenario.scrollLeft = (anchoSet * 2) - mitadPantalla + mitadImagen; 
                    }
                };
                
                // Inyectamos las copias necesarias para el scroll infinito
                for (let i = 0; i < multiplicadorSets; i++) {
                    fotos.forEach(ruta => {
                        const img = document.createElement('img');
                        img.src = ruta.trim();
                        img.style.height = '100%';
                        img.style.width = 'auto';
                        img.style.objectFit = 'contain';
                        
                        img.onload = iniciarEnElMedio;
                        img.onerror = iniciarEnElMedio; 
                        
                        pista.appendChild(img);
                    });
                }
                asignarZoom(); 
            } else {
                usaScrollInfinito = false; 
            }
            
            // --- ACTIVAR EFECTOS DE FONDO (FADE Y BLUR) ---
            setTimeout(() => {
                modal.style.opacity = '1';
                modal.style.pointerEvents = 'auto';
                
                // Aplicamos la clase limpia de Blur para no estorbar al menú de la plantilla
                if (wrapper) {
                    wrapper.classList.add('galeria-blur-activo');
                }
                
                document.documentElement.style.overflow = 'hidden';
                document.body.style.overflow = 'hidden';
            }, 10);
            
            animarGaleria();
        });

    // 3. Cerrar Modal
    if (btnCerrar) btnCerrar.addEventListener('click', (e) => { e.stopPropagation(); cerrarModal(); });
    if (modal) modal.addEventListener('click', (e) => { if (e.target === modal || e.target === escenario) cerrarModal(); });

    function cerrarModal() {
        modal.style.opacity = '0';
        modal.style.pointerEvents = 'none';
        
        // Destruimos la clase de Blur para que la web quede libre para el menú
        if (wrapper) {
            wrapper.classList.remove('galeria-blur-activo');
        }
        
        document.documentElement.style.overflow = '';
        document.body.style.overflow = '';
        
        pista.querySelectorAll('img').forEach(img => img.classList.remove('zoomed'));
        velocidadScroll = 0;
        cancelAnimationFrame(animacionScroll); 
        
        // Ocultar por completo tras el fade
        setTimeout(() => modal.style.display = 'none', 400);
    }

    // 4. Desplazamiento por Bordes
    if (escenario) {
        escenario.addEventListener('mousemove', function(e) {
            if (window.innerWidth > 768 && !pista.querySelector('.zoomed')) { 
                const anchoPantalla = window.innerWidth;
                const zonaActiva = anchoPantalla * 0.20; 
                if (e.clientX > anchoPantalla - zonaActiva) velocidadScroll = 12; 
                else if (e.clientX < zonaActiva) velocidadScroll = -12; 
                else velocidadScroll = 0;
            }
        });
        escenario.addEventListener('mouseleave', () => velocidadScroll = 0);
        escenario.addEventListener('wheel', (e) => e.stopPropagation(), { passive: true });
    }

    // 5. MOTOR INVISIBLE DE LOOP INFINITO 
    function animarGaleria() {
        if (velocidadScroll !== 0) escenario.scrollLeft += velocidadScroll;

        if (usaScrollInfinito && pista.children.length > 0) {
            const gap = parseInt(window.getComputedStyle(pista).gap) || 0;
            const anchoSet = (pista.scrollWidth + gap) / multiplicadorSets;

            if (anchoSet > 0) {
                // Si va muy a la derecha, regresa un set
                if (escenario.scrollLeft >= anchoSet * 4) {
                    escenario.scrollLeft -= anchoSet * 2;
                }
                // Si va muy a la izquierda, avanza un set
                else if (escenario.scrollLeft <= anchoSet) {
                    escenario.scrollLeft += anchoSet * 2;
                }
            }
        }
        animacionScroll = requestAnimationFrame(animarGaleria);
    }

    // 4. MOTOR DE ZOOM INTELIGENTE (Arrastre Nivel Hardware 60fps)
    function asignarZoom() {
        pista.querySelectorAll('img').forEach(img => {
            if (!img.dataset.zoomActivo) {
                img.dataset.zoomActivo = "true"; 
                
                // --- 1. ESCRITORIO Y TOQUE SIMPLE ---
                img.addEventListener('click', function(e) {
                    e.stopPropagation();
                    if (!this.classList.contains('zoomed')) {
                        pista.querySelectorAll('img').forEach(item => {
                            item.classList.remove('zoomed');
                            item.style.removeProperty('transition');
                        });
                        const rect = this.getBoundingClientRect();
                        const x = e.clientX - rect.left;
                        const y = e.clientY - rect.top;
                        const xPercent = (x / rect.width) * 100;
                        const yPercent = (y / rect.height) * 100;
                        
                        this.style.transformOrigin = `${xPercent}% ${yPercent}%`;
                        this.classList.add('zoomed');
                    } else {
                        this.classList.remove('zoomed');
                    }
                });

                // --- 2. MÓVIL (Blindado y con Caché) ---
                let distanciaInicialPellizco = null;
                let isDragging = false;
                let startX = 0, startY = 0;
                let currentOriginX = 50, currentOriginY = 50;
                let cachedWidth = 0, cachedHeight = 0; // NUEVO: Memoria para no asfixiar el procesador
                let animationFrameId = null;

                // NOTA: El { passive: false } al final obliga al celular a hacernos caso absoluto
                img.addEventListener('touchstart', function(e) {
                    if (e.touches.length === 2) {
                        isDragging = false;
                        distanciaInicialPellizco = Math.hypot(
                            e.touches[0].pageX - e.touches[1].pageX,
                            e.touches[0].pageY - e.touches[1].pageY
                        );
                    } else if (e.touches.length === 1 && this.classList.contains('zoomed')) {
                        isDragging = true;
                        startX = e.touches[0].clientX;
                        startY = e.touches[0].clientY;
                        
                        // Guardamos el tamaño exacto UNA sola vez en caché
                        cachedWidth = this.offsetWidth;
                        cachedHeight = this.offsetHeight;
                        
                        // BLINDAJE ABSOLUTO: Anula cualquier CSS terco a la fuerza
                        this.style.setProperty('transition', 'none', 'important');
                        
                        const originStr = this.style.transformOrigin.split(' ');
                        currentOriginX = parseFloat(originStr[0]) || 50;
                        currentOriginY = parseFloat(originStr[1]) || 50;
                    }
                }, { passive: false });

                img.addEventListener('touchmove', function(e) {
                    if (e.touches.length === 2 && distanciaInicialPellizco !== null) {
                        e.preventDefault();
                        const distanciaActual = Math.hypot(
                            e.touches[0].pageX - e.touches[1].pageX,
                            e.touches[0].pageY - e.touches[1].pageY
                        );

                        if (distanciaActual > distanciaInicialPellizco + 30) {
                            if (!this.classList.contains('zoomed')) {
                                pista.querySelectorAll('img').forEach(item => {
                                    item.classList.remove('zoomed');
                                    item.style.removeProperty('transition');
                                });
                                
                                const rect = this.getBoundingClientRect();
                                const centroX = ((e.touches[0].clientX + e.touches[1].clientX) / 2) - rect.left;
                                const centroY = ((e.touches[0].clientY + e.touches[1].clientY) / 2) - rect.top;
                                currentOriginX = (centroX / rect.width) * 100;
                                currentOriginY = (centroY / rect.height) * 100;

                                this.style.transformOrigin = `${currentOriginX}% ${currentOriginY}%`;
                                this.classList.add('zoomed');
                            }
                        }

                        if (distanciaActual < distanciaInicialPellizco - 30) {
                            this.classList.remove('zoomed');
                            this.style.removeProperty('transition');
                        }
                    } 
                    else if (e.touches.length === 1 && isDragging && this.classList.contains('zoomed')) {
                        e.preventDefault(); 

                        const dx = e.touches[0].clientX - startX;
                        const dy = e.touches[0].clientY - startY;

                        const sensibilidad = 1.2; 
                        
                        // USAMOS LA CACHÉ en lugar de leer el procesador en tiempo real
                        const moveX = (dx / cachedWidth) * 100 * sensibilidad;
                        const moveY = (dy / cachedHeight) * 100 * sensibilidad;

                        currentOriginX -= moveX;
                        currentOriginY -= moveY;

                        currentOriginX = Math.max(0, Math.min(100, currentOriginX));
                        currentOriginY = Math.max(0, Math.min(100, currentOriginY));

                        if (animationFrameId) cancelAnimationFrame(animationFrameId);
                        
                        animationFrameId = requestAnimationFrame(() => {
                            this.style.transformOrigin = `${currentOriginX}% ${currentOriginY}%`;
                        });

                        startX = e.touches[0].clientX;
                        startY = e.touches[0].clientY;
                    }
                }, { passive: false });

                img.addEventListener('touchend', function(e) {
                    if (e.touches.length < 2) {
                        distanciaInicialPellizco = null;
                    }
                    if (e.touches.length === 0) {
                        isDragging = false;
                        // Devolvemos el control de animaciones al CSS al soltar
                        this.style.removeProperty('transition');
                    }
                });
            }
        });
    }
});