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

				$t.css('background-position', 'center 100%, center 100%, center 0px');

				$window
					.on('scroll._parallax', function() {

						var pos = parseInt($window.scrollTop()) - parseInt($t.position().top);

						$t.css('background-position', 'center ' + (pos * (-1 * intensity)) + 'px');

					});

			};

			off = function() {

				$t
					.css('background-position', '');

				$window
					.off('scroll._parallax');

			};

			breakpoints.on('<=medium', off);
			breakpoints.on('>medium', on);

		});

		$window
			.off('load._parallax resize._parallax')
			.on('load._parallax resize._parallax', function() {
				$window.trigger('scroll');
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

	// Fix: Enable IE-only tweaks.
		if (browser.name == 'ie' || browser.name == 'edge')
			$body.addClass('is-ie');

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

				// Set image.
					$this.css('background-image', 'url(' + $img.attr('src') + ')');

				// Set position.
					if (x = $img.data('position'))
						$image.css('background-position', x);

				// Hide original.
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

						// Prevent default.
							event.stopPropagation();
							event.preventDefault();

						// Target blank?
							if ($link.attr('target') == '_blank') {

								// Open in new tab.
									window.open(href);

							}

						// Otherwise ...
							else {

								// Start transitioning.
									$this.addClass('is-transitioning');
									$wrapper.addClass('is-transitioning');

								// Redirect.
									window.setTimeout(function() {
										location.href = href;
									}, 500);

							}

					});

				}

		});

	// Tiles2.
		var $tiles2 = $('.tiles2 > article');

		$tiles2.each(function() {

			var $this = $(this),
				$image = $this.find('.image'), $img = $image.find('img'),
				$link = $this.find('.link'),
				x;

			// Image.

				// Set image.
					$this.css('background-image', 'url(' + $img.attr('src') + ')');

				// Set position.
					if (x = $img.data('position'))
						$image.css('background-position', x);

				// Hide original.
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

						// Prevent default.
							event.stopPropagation();
							event.preventDefault();

						// Target blank?
							if ($link.attr('target') == '_blank') {

								// Open in new tab.
									window.open(href);

							}

						// Otherwise ...
							else {

								// Start transitioning.
									$this.addClass('is-transitioning');
									$wrapper.addClass('is-transitioning');

								// Redirect.
									window.setTimeout(function() {
										location.href = href;
									}, 500);

							}

					});

				}

		});
		
	// Tiles3.
		var $tiles3 = $('.tiles3 > article');

		$tiles3.each(function() {

			var $this = $(this),
				$image = $this.find('.image'), $img = $image.find('img'),
				$link = $this.find('.link'),
				x;

			// Image.

				// Set image.
					$this.css('background-image', 'url(' + $img.attr('src') + ')');

				// Set position.
					if (x = $img.data('position'))
						$image.css('background-position', x);

				// Hide original.
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

						// Prevent default.
							event.stopPropagation();
							event.preventDefault();

						// Target blank?
							if ($link.attr('target') == '_blank') {

								// Open in new tab.
									window.open(href);

							}

						// Otherwise ...
							else {

								// Start transitioning.
									$this.addClass('is-transitioning');
									$wrapper.addClass('is-transitioning');

								// Redirect.
									window.setTimeout(function() {
										location.href = href;
									}, 500);

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

			// Parallax.
				$this._parallax(0.275);

			// Image.
				if ($image.length > 0) {

					// Set image.
						$this.css('background-image', 'url(' + $img.attr('src') + ')');

					// Hide original.
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

				// Hide.
					$menu._hide();

				// Redirect.
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

				// Toggle.
					$menu._toggle();

			})
			.on('click', function(event) {

				// Hide.
					$menu._hide();

			})
			.on('keydown', function(event) {

				// Hide on escape.
					if (event.keyCode == 27)
						$menu._hide();

			});

})(jQuery);

function abrirModal(src) {
  // 1. Buscamos el modal
  const modal = document.getElementById("miModal");
  // 2. Buscamos la imagen de adentro y le ponemos la foto correcta
  document.getElementById("imgExpandida").src = src;
  // 3. ¡AGREGAMOS la clase .mostrar para que aparezca suavemente!
  modal.classList.add("mostrar");
}

function cerrarModal() {
  // Buscamos el modal y QUITAMOS la clase .mostrar para que desaparezca suavemente
  document.getElementById("miModal").classList.remove("mostrar");
}


// ==========================================
// 1. SELECCIÓN DE ELEMENTOS PRINCIPALES
// ==========================================
const pista = document.querySelector('.galeria-pista');
const escenario = document.querySelector('.galeria-escenario');
const imagenesOriginales = Array.from(pista.querySelectorAll('.imagen-slide'));

// Elementos del Modal (Lupa)
const modal = document.getElementById("modal-foto");
const fotoExpandida = document.getElementById("foto-expandida");
const botonCerrar = document.querySelector(".cerrar-modal");

// Elementos de Navegación (Flechas Escritorio)
const btnPrev = document.getElementById('prevBtn');
const btnNext = document.getElementById('nextBtn');

// ==========================================
// 2. DETECCIÓN DE PANTALLA Y CLONACIÓN
// ==========================================
// Función para saber si estamos en versión móvil (menos de 768px)
const esMovil = () => window.innerWidth <= 768;

// Solo clonamos las imágenes si estamos en ESCRITORIO (para el bucle infinito)
// En móvil no queremos fotos repetidas en la vista de lista
if (!esMovil()) {
    const copiasAlFinal = imagenesOriginales.map(el => el.cloneNode(true));
    const copiasAlInicio = imagenesOriginales.map(el => el.cloneNode(true));

    copiasAlFinal.forEach(clon => {
        clon.classList.remove('active');
        clon.classList.add('clon-galeria'); // Le ponemos una clase por si acaso
        pista.appendChild(clon);
    });

    copiasAlInicio.reverse().forEach(clon => {
        clon.classList.remove('active');
        clon.classList.add('clon-galeria');
        pista.insertBefore(clon, pista.firstChild);
    });
}

// Lista actualizada con todos los elementos que existan en el momento
let todosLosSlides = Array.from(pista.querySelectorAll('.imagen-slide'));

// En escritorio empezamos después de los clones, en móvil empezamos en 0
let indiceActual = !esMovil() ? imagenesOriginales.length : 0;

// ==========================================
// 3. FUNCIÓN DE MOVIMIENTO (Solo Escritorio)
// ==========================================
function actualizarGaleria(indice, conAnimacion = true) {
    if (esMovil()) return; // Cortamos la función si estamos en celular
    if (indice < 0 || indice >= todosLosSlides.length) return;

    pista.style.transition = conAnimacion ? 'transform 0.7s cubic-bezier(0.25, 1, 0.5, 1)' : 'none';
    
    // Cambiamos opacidades
    todosLosSlides.forEach(s => s.classList.remove('active'));
    todosLosSlides[indice].classList.add('active');

    // Calculamos el centro
    const desplazamiento = (escenario.offsetWidth / 2) - (todosLosSlides[indice].offsetWidth / 2) - todosLosSlides[indice].offsetLeft;
    pista.style.transform = `translateX(${desplazamiento}px)`;
    
    indiceActual = indice;
}

// ==========================================
// 4. LÓGICA DE CLICS (Navegación + Lupa)
// ==========================================
pista.addEventListener('click', (e) => {
    const slide = e.target.closest('.imagen-slide');
    if (!slide) return;

    if (esMovil()) {
        // MÓVIL: Cualquier clic en la lista abre la lupa directo
        const img = slide.querySelector('img');
        if (img) abrirLupa(img.src);
    } else {
        // ESCRITORIO: Clic en el centro abre lupa, clic a los lados mueve la galería
        if (slide.classList.contains('active')) {
            const img = slide.querySelector('img');
            if (img) abrirLupa(img.src);
        } else {
            actualizarGaleria(todosLosSlides.indexOf(slide));
        }
    }
});

// ==========================================
// 5. BOTONES DE NAVEGACIÓN (Flechas)
// ==========================================
if (btnNext) {
    btnNext.addEventListener('click', (e) => {
        e.stopPropagation(); // Evita que se disparen otros clics por accidente
        actualizarGaleria(indiceActual + 1);
    });
}

if (btnPrev) {
    btnPrev.addEventListener('click', (e) => {
        e.stopPropagation();
        actualizarGaleria(indiceActual - 1);
    });
}

// ==========================================
// 6. FUNCIONES DEL MODAL (Lupa)
// ==========================================
function abrirLupa(src) {
    if (!modal || !fotoExpandida) return;
    modal.style.display = "flex";
    fotoExpandida.src = src;
    document.body.style.overflow = "hidden"; // Bloquea el scroll de la web
}

function cerrarLupa() {
    if (!modal) return;
    modal.style.display = "none";
    document.body.style.overflow = "auto"; // Devuelve el scroll
}

// Métodos para cerrar el modal
if (botonCerrar) botonCerrar.onclick = cerrarLupa;

if (modal) {
    modal.onclick = (e) => { 
        // Solo se cierra si haces clic en lo oscuro, no en la foto como tal
        if (e.target === modal) cerrarLupa(); 
    };
}

// Permite cerrar con la tecla Escape
document.addEventListener('keydown', (e) => { 
    if (e.key === "Escape") cerrarLupa(); 
});

// ==========================================
// 7. BUCLE INFINITO (Salto invisible)
// ==========================================
pista.addEventListener('transitionend', () => {
    if (esMovil()) return; // En móvil no hay bucle

    if (indiceActual >= (todosLosSlides.length - imagenesOriginales.length)) {
        actualizarGaleria(indiceActual - imagenesOriginales.length, false);
    } 
    else if (indiceActual < imagenesOriginales.length) {
        actualizarGaleria(indiceActual + imagenesOriginales.length, false);
    }
});

// ==========================================
// 8. INICIALIZACIÓN Y RESIZE
// ==========================================
window.addEventListener('load', () => {
    if (!esMovil()) {
        setTimeout(() => actualizarGaleria(indiceActual, false), 200);
    }
});

// Si reescalan la ventana en escritorio, recalculamos el centro
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        if (!esMovil()) {
            actualizarGaleria(indiceActual, false);
        }
    }, 250);
});