const PORTFOLIO_DATA = {
    logos: {
        blanco: "img/logo.png",
        negro: "img/logo n.png"
    },
    about: {
        title: "SOBRE MÍ",
        text: "Soy Montserrat Vertti, también conocida como MVertti, artista visual y fotógrafa mexicana. Me especializo en el retrato artístico bajo la premisa de que somos Personas únicas como el Arte, buscando capturar la esencia irrepetible, la vulnerabilidad y el mundo emocional de cada individuo. Mi mirada fotográfica está profundamente influenciada por mis estudios en Historia del Arte, Filosofía y Mitología.",
        photo: "img/mon.jpg"
    },
    services: [
        {
            title: "Cabina Fotográfica",
            text: "Lleva una experiencia divertida e interactiva a tus eventos. Este servicio está diseñado para capturar la espontaneidad y alegría de tus invitados, entregando recuerdos fotográficos al instante. Es la opción ideal para darle un toque único, dinámico y memorable a cualquier celebración, con diseños que se personalizan según el estilo de tu evento.",
            photo: "img/s1.jpg"
        },
        {
            title: "Restauración Fotográfica",
            text: "Las fotografías son cápsulas del tiempo y entiendo el profundo valor que tiene la memoria. Mediante un cuidadoso trabajo digital, le devuelvo la vida a esas imágenes antiguas, desgastadas o con daños físicos. Recupero detalles, reparo imperfecciones y rescato tu historia familiar para que esos recuerdos invaluables perduren para las futuras generaciones.",
            photo: "img/s2.jpg"
        },
        {
            title: "Renta de Estudio",
            text: "Un espacio diseñado para materializar tus ideas. Pongo a tu disposición mi estudio fotográfico: un entorno creativo, cómodo y profesional, totalmente equipado con lo necesario para tus producciones. Es el lugar ideal para que fotógrafos, artistas y creadores lleven a cabo sus propias sesiones de retrato, fine art o fotografía comercial en un ambiente inspirador.",
            photo: "img/s3.jpg"
        }
    ],
    heroPhotos: [
        "img/hero1.jpg",
        "img/hero2.jpg",
        "img/hero3.jpg"
    ],
    sections: [
        { title: "FINE ART", bgColor: "#ffffff", mainPhoto: "img/fineart6.jpg", gallery: ["img/fineart1.jpg", "img/fineart2.jpg", "img/fineart3.jpg", "img/fineart4.jpg", "img/fineart5.jpg", "img/fineart6.jpg", "img/fineart7.jpg"] },
        { title: "FANTASÍA", bgColor: "#f0ecf2", mainPhoto: "img/pic2.jpg", gallery: ["img/fantasía1.jpg", "img/fantasía2.jpg", "img/fantasía3.jpg", "img/fantasía4.jpg", "img/fantasía5.jpg", "img/fantasía6.jpg"] },
        { title: "DÍA DE MUERTOS", bgColor: "#f0ecf2", mainPhoto: "img/pic3.jpg", gallery: ["img/diademuertos 1.jpg", "img/diademuertos 2.jpg", "img/diademuertos 3.jpg", "img/diademuertos 4.jpg", "img/diademuertos 5.jpg", "img/diademuertos 6.jpg"] },
        { title: "NAVIDAD", bgColor: "#f0ecf2", mainPhoto: "img/pic4.jpg", gallery: ["img/navidad1.jpg", "img/navidad2.jpg", "img/navidad3.jpg", "img/navidad4.jpg", "img/navidad5.jpg", "img/navidad6.jpg"] },
        { title: "CANCER DE MAMA", bgColor: "#f0ecf2", mainPhoto: "img/pic5.jpg", gallery: ["img/cm1.jpg", "img/cm2.jpg", "img/cm3.jpg", "img/cm4.jpg", "img/cm5.jpg", "img/cm6.jpg"] },
        { title: "VÍA LACTEA", bgColor: "#f0ecf2", mainPhoto: "img/pic6.jpg", gallery: ["img/vl1.jpg", "img/vl2.jpg", "img/vl3.jpg", "img/vl4.jpg", "img/vl5.jpg", "img/vl6.jpg", "img/vl7.jpg", "img/vl8.jpg"] },
        { title: "SOCIALES", bgColor: "#f0ecf2", mainPhoto: "img/pic7.jpg", gallery: ["img/sociales1.jpg", "img/sociales2.jpg", "img/sociales3.jpg", "img/sociales4.jpg", "img/sociales5.jpg", "img/sociales6.jpg", "img/sociales7.jpg", "img/sociales8.jpg"] },
        { title: "CINEMATROGRÁFICO", bgColor: "#f0ecf2", mainPhoto: "img/pic8.jpg", gallery: ["img/cine1.jpg", "img/cine2.jpg", "img/cine3.jpg"] },
        { title: "EXPOSICIONES", bgColor: "#f0ecf2", mainPhoto: "img/pic9.jpg", gallery: ["img/expo1.jpg", "img/expo2.jpg", "img/expo3.jpg", "img/expo4.jpg", "img/expo5.jpg", "img/expo6.jpg"] },
        { title: "POÉTICA DEL ESPACIO", bgColor: "#f0ecf2", mainPhoto: "img/pic10.jpg", gallery: ["img/pde1.jpg", "img/pde2.jpg", "img/pde3.jpg", "img/pde4.jpg", "img/pde5.jpg", "img/pde6.jpg", "img/pde7.jpg", "img/pde8.jpg"] },
        { title: "PAISAJES Y NATURALEZA", bgColor: "#f0ecf2", mainPhoto: "img/pic11.jpg", gallery: ["img/pn1.jpg", "img/pn2.jpg", "img/pn3.jpg", "img/pn4.jpg", "img/pn5.jpg", "img/pn6.jpg"] },
        { title: "RETRATOS", bgColor: "#f0ecf2", mainPhoto: "img/pic12.jpg", gallery: ["img/r1.jpg", "img/r2.jpg", "img/r3.jpg", "img/r4.jpg", "img/r5.jpg", "img/r6.jpg",] }
    ]
};

document.addEventListener("DOMContentLoaded", () => {
    
    // === LOGOS DINÁMICOS CON CROSSFADE ===
    const logoWhite = document.getElementById('global-logo');
    logoWhite.src = PORTFOLIO_DATA.logos.blanco;
    logoWhite.style.opacity = '1';

    const logoBlack = document.createElement('img');
    logoBlack.src = PORTFOLIO_DATA.logos.negro;
    logoBlack.className = 'logo';
    logoBlack.style.position = 'fixed';
    logoBlack.style.top = '10px';
    logoBlack.style.left = '50%';
    logoBlack.style.transform = 'translateX(-50%)';
    logoBlack.style.height = '100px';
    logoBlack.style.zIndex = '100'; 
    logoBlack.style.opacity = '0'; 
    logoBlack.style.transition = 'opacity 0.8s ease';
    logoBlack.style.cursor = 'pointer';
    document.body.appendChild(logoBlack);
    logoBlack.addEventListener('click', () => { logoWhite.click(); });

    document.getElementById('about-title').innerText = PORTFOLIO_DATA.about.title;
    document.getElementById('about-text').innerText = PORTFOLIO_DATA.about.text;
    document.getElementById('about-photo').src = PORTFOLIO_DATA.about.photo;
    
    const servicesContainer = document.getElementById('services-container');
    servicesContainer.innerHTML = '';
    PORTFOLIO_DATA.services.forEach((service, index) => {
        const block = document.createElement('div');
        block.className = `service-block ${index % 2 !== 0 ? 'reverse' : ''}`;
        block.innerHTML = `
            <div class="split-text">
                <h2>${service.title}</h2>
                <p>${service.text}</p>
            </div>
            <div class="split-photo">
                <img src="${service.photo}" alt="${service.title}">
            </div>
        `;
        servicesContainer.appendChild(block);
    });

    document.getElementById('btn-about').addEventListener('click', () => { document.body.classList.add('show-about'); });
    document.getElementById('btn-services').addEventListener('click', () => { document.body.classList.add('show-services'); });
    
    document.getElementById('close-about').addEventListener('click', () => { document.body.classList.remove('show-about'); });
    document.getElementById('close-services').addEventListener('click', () => { 
        document.body.classList.remove('show-services'); 
        setTimeout(() => { document.getElementById('services-screen').scrollTop = 0; }, 600);
    });

    PORTFOLIO_DATA.heroPhotos.forEach((photo, index) => {
        const bgDiv = document.getElementById(`hero-bg-${index}`);
        if(bgDiv) bgDiv.style.backgroundImage = `url('${photo}')`;
    });

    const frame = document.getElementById('amorphous-frame');
    const mainImagesContainer = document.getElementById('main-images-container');
    const titlesTrack = document.getElementById('gallery-titles-track');
    const pagination = document.getElementById('gallery-pagination');
    const totalSections = PORTFOLIO_DATA.sections.length;
    
    PORTFOLIO_DATA.sections.forEach((section, i) => {
        const img = document.createElement('img');
        img.src = section.mainPhoto;
        img.className = `gallery-img ${i === 0 ? 'active' : ''}`;
        mainImagesContainer.appendChild(img);

        const title = document.createElement('div');
        title.className = 'gallery-title-item';
        title.innerText = section.title;
        titlesTrack.appendChild(title);

        const dot = document.createElement('div');
        dot.className = `dot ${i === 0 ? 'active' : ''}`;
        dot.addEventListener('click', () => {
            if (currentStep >= 2 && !isAnimating && !isExpanded) changeStep(i + 2); 
        });
        pagination.appendChild(dot);
    });

    let bgIndex = 0;
    const heroBgs = document.querySelectorAll('.hero-bg');
    setInterval(() => {
        heroBgs[bgIndex].classList.remove('active');
        bgIndex = (bgIndex + 1) % heroBgs.length;
        heroBgs[bgIndex].classList.add('active');
    }, 3500);

    let currentStep = 0; 
    // AGREGAMOS 1 PASO EXTRA AL FINAL PARA LA PANTALLA DE DESPEDIDA (+3 en total)
    const totalSteps = totalSections + 3; 
    let isAnimating = false;
    let isExpanded = false; 
    let heroClipRadius = 100; 
    
    const heroScreen = document.getElementById('hero-screen');
    const galleryScreen = document.getElementById('gallery-screen');

    window.addEventListener('wheel', (e) => {
        if(document.body.classList.contains('show-about') || document.body.classList.contains('show-services')) return;

        if (isExpanded) {
            if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
                document.getElementById('horizontal-track').scrollLeft += e.deltaY;
            }
            return; 
        }

        let isHorizontalSwipe = Math.abs(e.deltaX) > Math.abs(e.deltaY);
        // Validamos que el swipe lateral solo funcione en las galerias, no en la de despedida
        if (isHorizontalSwipe && currentStep >= 2 && currentStep < totalSteps - 1) {
            if (Math.abs(e.deltaX) > 20) handleScrollLogic(e.deltaX);
        } else {
            handleScrollLogic(e.deltaY);
        }
    });

    let touchStartY = 0;
    window.addEventListener('touchstart', e => { 
        if(document.body.classList.contains('show-about') || document.body.classList.contains('show-services')) return;
        touchStartY = e.changedTouches[0].screenY; 
    });
    window.addEventListener('touchend', e => {
        if(document.body.classList.contains('show-about') || document.body.classList.contains('show-services') || isExpanded) return; 
        
        const touchEndY = e.changedTouches[0].screenY;
        const swipeDistance = touchStartY - touchEndY; 
        if (Math.abs(swipeDistance) > 40) handleScrollLogic(swipeDistance);
    });

    function handleScrollLogic(delta) {
        if(isAnimating) return;

        if (currentStep === 0) {
            heroClipRadius -= delta * 0.1; 
            if (heroClipRadius > 100) heroClipRadius = 100; 
            if (heroClipRadius <= 0 || (delta > 100 && window.innerWidth <= 768)) {
                heroClipRadius = 0; currentStep = 1; updateStepUI();
                isAnimating = true; setTimeout(() => { isAnimating = false; }, 800); 
            }
            heroScreen.style.clipPath = `circle(${heroClipRadius}% at 50% 50%)`;
            return;
        }

        if (currentStep === 1 && delta < 0) {
            currentStep = 0; isAnimating = true; heroClipRadius = 100; 
            heroScreen.style.transition = 'clip-path 1s cubic-bezier(0.77, 0, 0.175, 1)';
            heroScreen.style.clipPath = `circle(${heroClipRadius}% at 50% 50%)`;
            updateStepUI();
            setTimeout(() => { heroScreen.style.transition = 'none'; isAnimating = false; }, 1000);
            return;
        }

        if (delta > 0) { 
            if (currentStep < totalSteps - 1) changeStep(currentStep + 1);
        } else { 
            if (currentStep > 1) changeStep(currentStep - 1);
        }
    }

    function changeStep(newStep) {
        isAnimating = true;
        currentStep = newStep;
        updateStepUI();
        setTimeout(() => { isAnimating = false; }, 1200); 
    }

    function updateStepUI() {
        const quoteScreen = document.getElementById('quote-screen'); 

        if (currentStep === 0) {
            logoWhite.style.opacity = '1';
            logoBlack.style.opacity = '0';
            logoWhite.style.pointerEvents = 'auto';
            logoBlack.style.pointerEvents = 'none';
            galleryScreen.classList.remove('active');
            quoteScreen.classList.remove('pushed-up');
        } else if (currentStep === 1) {
            logoWhite.style.opacity = '0';
            logoBlack.style.opacity = '0';
            logoWhite.style.pointerEvents = 'none';
            logoBlack.style.pointerEvents = 'none';
            galleryScreen.classList.remove('active'); 
            quoteScreen.classList.remove('pushed-up'); 
        } else if (currentStep >= 2 && currentStep < totalSteps - 1) {
            // NAVEGANDO POR LAS GALERÍAS
            galleryScreen.classList.remove('final-step');
            if (isExpanded) {
                logoWhite.style.opacity = '1'; logoBlack.style.opacity = '0';
                logoWhite.style.pointerEvents = 'auto'; logoBlack.style.pointerEvents = 'none';
            } else {
                logoWhite.style.opacity = '0'; logoBlack.style.opacity = '1';
                logoWhite.style.pointerEvents = 'none'; logoBlack.style.pointerEvents = 'auto';
            }
            quoteScreen.classList.add('pushed-up'); 
            galleryScreen.classList.add('active'); 
            updateGallery(currentStep - 2);
        } else if (currentStep === totalSteps - 1) {
            // PANTALLA DE DESPEDIDA
            galleryScreen.classList.add('final-step');
            logoWhite.style.opacity = '0'; logoBlack.style.opacity = '1';
            logoWhite.style.pointerEvents = 'none'; logoBlack.style.pointerEvents = 'auto';
            quoteScreen.classList.add('pushed-up');
            galleryScreen.classList.add('active');
        }
    }

    // === CINTA INFINITA 360 (DERECHA E IZQUIERDA) ===
    function updateGallery(index) {
        if(!isExpanded) frame.style.borderRadius = generateAmorphousShape();
        galleryScreen.style.setProperty('--gallery-bg', PORTFOLIO_DATA.sections[index].bgColor);

        document.querySelectorAll('.gallery-img').forEach((img, i) => {
            if(i === index) img.classList.add('active');
            else img.classList.remove('active');
        });

        document.querySelectorAll('.dot').forEach((dot, i) => {
            if(i === index) {
                dot.classList.add('active');
                dot.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
            } else {
                dot.classList.remove('active');
            }
        });

        titlesTrack.style.transform = `translateY(-${index * 120}px)`;

        const track = document.getElementById('horizontal-track');
        track.innerHTML = ''; 
        appendHorizontalImages(index); 
    }

    const hTrack = document.getElementById('horizontal-track');
    let isPrepending = false;

    hTrack.addEventListener('scroll', () => {
        if(!isExpanded) return;
        
        // Carga infinita hacia la derecha
        if (hTrack.scrollWidth - (hTrack.scrollLeft + hTrack.clientWidth) < 500) {
            appendHorizontalImages(currentStep - 2); 
        }
        
        // Carga infinita hacia la izquierda
        if (hTrack.scrollLeft < 500 && !isPrepending) {
            prependHorizontalImages(currentStep - 2); 
        }
    });

    function appendHorizontalImages(sectionIndex) {
        const galleryPhotos = PORTFOLIO_DATA.sections[sectionIndex].gallery;
        galleryPhotos.forEach((photoUrl) => {
            createImg(photoUrl, hTrack, false);
        });
    }

    function prependHorizontalImages(sectionIndex) {
        if(isPrepending) return;
        isPrepending = true;
        
        const oldScrollWidth = hTrack.scrollWidth;
        const oldScrollLeft = hTrack.scrollLeft;
        const galleryPhotos = PORTFOLIO_DATA.sections[sectionIndex].gallery;
        
        // Añadimos en orden inverso para que encajen al principio
        for (let i = galleryPhotos.length - 1; i >= 0; i--) {
            createImg(galleryPhotos[i], hTrack, true);
        }

        // Compensamos el scroll para evitar el "salto visual"
        const newScrollWidth = hTrack.scrollWidth;
        hTrack.scrollLeft = oldScrollLeft + (newScrollWidth - oldScrollWidth);
        
        setTimeout(() => { isPrepending = false; }, 100);
    }

    function createImg(src, track, atBeginning) {
        const hImg = document.createElement('img');
        hImg.src = src;
        hImg.className = 'horizontal-img';
        hImg.addEventListener('click', (e) => { e.stopPropagation(); openZoomFromPosition(e.target); });
        
        if (atBeginning) track.insertBefore(hImg, track.firstChild);
        else track.appendChild(hImg);
    }

    const zoomBackdrop = document.getElementById('zoom-backdrop');
    let activeClone = null;
    let originalImgRef = null;

    function openZoomFromPosition(imgElement) {
        if(activeClone) return; 
        originalImgRef = imgElement;
        const rect = imgElement.getBoundingClientRect();
        
        activeClone = imgElement.cloneNode();
        activeClone.classList.add('zoom-clone');
        
        activeClone.style.top = `${rect.top + rect.height / 2}px`;
        activeClone.style.left = `${rect.left + rect.width / 2}px`;
        activeClone.style.width = `${rect.width}px`;
        activeClone.style.height = `${rect.height}px`;
        activeClone.style.transform = `translate(-50%, -50%) scale(1)`;
        
        document.body.appendChild(activeClone);
        zoomBackdrop.classList.add('active');
        originalImgRef.style.opacity = '0';
        
        const scale = Math.min((window.innerWidth * 0.98) / rect.width, (window.innerHeight * 0.98) / rect.height);
        
        requestAnimationFrame(() => {
            activeClone.style.top = '50vh';
            activeClone.style.left = '50vw';
            activeClone.style.transform = `translate(-50%, -50%) scale(${scale})`;
        });
        
        activeClone.addEventListener('click', closeZoomFromPosition);
        zoomBackdrop.addEventListener('click', closeZoomFromPosition);
    }

    function closeZoomFromPosition() {
        if(!activeClone) return;
        const rect = originalImgRef.getBoundingClientRect();
        
        activeClone.style.top = `${rect.top + rect.height / 2}px`;
        activeClone.style.left = `${rect.left + rect.width / 2}px`;
        activeClone.style.transform = `translate(-50%, -50%) scale(1)`;
        zoomBackdrop.classList.remove('active');
        
        activeClone.addEventListener('transitionend', () => {
            if(activeClone) { activeClone.remove(); activeClone = null; }
            if(originalImgRef) { originalImgRef.style.opacity = '1'; originalImgRef = null; }
        }, {once: true});
    }

    const closeBtn = document.querySelector('.close-btn');
    const expandedView = document.getElementById('expanded-view');

    frame.addEventListener('click', () => {
        if (!isExpanded && currentStep >= 2 && currentStep < totalSteps - 1) {
            isExpanded = true;
            
            logoWhite.style.opacity = '1';
            logoBlack.style.opacity = '0';
            logoWhite.style.pointerEvents = 'auto';
            logoBlack.style.pointerEvents = 'none';

            frame.classList.add('expanded');
            
            // Forzamos inyectar un bloque hacia la izquierda para que al abrir la galería ya haya fotos previas
            prependHorizontalImages(currentStep - 2);
            
            setTimeout(() => {
                const track = document.getElementById('horizontal-track');
                const galleryLength = PORTFOLIO_DATA.sections[currentStep - 2].gallery.length;
                const targetImg = track.children[galleryLength]; 
                
                if(targetImg) {
                    track.scrollLeft = targetImg.offsetLeft - (track.clientWidth / 2) + (targetImg.clientWidth / 2);
                }
            }, 50);
            
            setTimeout(() => {
                const activeImg = document.querySelector('.gallery-img.active');
                if(activeImg) activeImg.classList.add('darkened');
                expandedView.classList.add('visible');
            }, 600); 
        }
    });

    closeBtn.addEventListener('click', (e) => { e.stopPropagation(); closeExpanded(); });
    expandedView.addEventListener('click', (e) => {
        if(e.target === expandedView || e.target === hTrack) { e.stopPropagation(); closeExpanded(); }
    });

    function closeExpanded() {
        logoWhite.style.opacity = '0';
        logoBlack.style.opacity = '1';
        logoWhite.style.pointerEvents = 'none';
        logoBlack.style.pointerEvents = 'auto';

        expandedView.classList.remove('visible');
        const activeImg = document.querySelector('.gallery-img.active');
        if(activeImg) activeImg.classList.remove('darkened');

        setTimeout(() => {
            isExpanded = false;
            frame.classList.remove('expanded');
            setTimeout(() => { frame.style.borderRadius = generateAmorphousShape(); }, 50);
        }, 500); 
    }

    logoWhite.addEventListener('click', () => {
        if (currentStep !== 0) {
            if (zoomBackdrop.classList.contains('active')) closeZoomFromPosition();
            if (isExpanded) closeExpanded();
            
            changeStep(0);
            heroClipRadius = 100;
            heroScreen.style.transition = 'clip-path 1s cubic-bezier(0.77, 0, 0.175, 1)';
            heroScreen.style.clipPath = `circle(100% at 50% 50%)`;
            setTimeout(() => { heroScreen.style.transition = 'none'; }, 1000);
        }
    });

    function generateAmorphousShape() {
        const r = () => Math.floor(Math.random() * 15) + 45; 
        return `${r()}% ${r()}% ${r()}% ${r()}% / ${r()}% ${r()}% ${r()}% ${r()}%`;
    }
});