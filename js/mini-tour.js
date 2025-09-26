(function initMiniTour() {
    if (window.__miniTourInjected) return;
    window.__miniTourInjected = true;

    let currentStep = 0;
    let tourOverlay = null;
    let tourTooltip = null;

    const tourSteps = [
        {
            target: 'a[href*="calendar"]',
            title: '📅 Calendario',
            content: 'Aquí verás todas tus citas organizadas por día, semana o mes. Puedes cambiar la vista con los botones superiores.',
            position: 'bottom'
        },
        {
            target: 'a[href*="agenda-settings"]',
            title: '⚙️ Configuración',
            content: 'Ajusta horarios, servicios, intervalos de slots y notificaciones desde aquí.',
            position: 'bottom'
        },
        {
            target: 'a[href*="notifications"]',
            title: '📱 Notificaciones',
            content: 'Configura plantillas SMS y envía recordatorios a tus clientes automáticamente.',
            position: 'bottom'
        },
        {
            target: 'a[onclick*="startOnboarding"]',
            title: '🚀 Onboarding',
            content: 'Si necesitas reconfigurar algo, puedes volver a ejecutar el asistente de configuración inicial.',
            position: 'top'
        },
        {
            target: '#uiModeToggle',
            title: '✨ Modo Avanzado',
            content: 'Cambia entre vista simplificada (solo lo esencial) y avanzada (todas las funciones).',
            position: 'left'
        }
    ];

    function createOverlay() {
        if (tourOverlay) return;
        
        tourOverlay = document.createElement('div');
        tourOverlay.id = 'mini-tour-overlay';
        tourOverlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.7);
            z-index: 9998;
            pointer-events: none;
        `;
        document.body.appendChild(tourOverlay);
    }

    function createTooltip() {
        if (tourTooltip) return;
        
        tourTooltip = document.createElement('div');
        tourTooltip.id = 'mini-tour-tooltip';
        tourTooltip.style.cssText = `
            position: fixed;
            background: white;
            border-radius: 12px;
            padding: 1.5rem;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
            z-index: 9999;
            max-width: 300px;
            pointer-events: auto;
            transform: translate(-50%, -50%);
        `;
        document.body.appendChild(tourTooltip);
    }

    function highlightElement(element) {
        if (!element) return null;

        const rect = element.getBoundingClientRect();
        const highlight = document.createElement('div');
        highlight.id = 'mini-tour-highlight';
        highlight.style.cssText = `
            position: fixed;
            top: ${rect.top - 4}px;
            left: ${rect.left - 4}px;
            width: ${rect.width + 8}px;
            height: ${rect.height + 8}px;
            border: 3px solid #1e40af;
            border-radius: 8px;
            background: rgba(30, 64, 175, 0.1);
            z-index: 9997;
            pointer-events: none;
            animation: pulse 2s infinite;
        `;

        // Add pulse animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes pulse {
                0% { box-shadow: 0 0 0 0 rgba(30, 64, 175, 0.7); }
                70% { box-shadow: 0 0 0 10px rgba(30, 64, 175, 0); }
                100% { box-shadow: 0 0 0 0 rgba(30, 64, 175, 0); }
            }
        `;
        document.head.appendChild(style);

        document.body.appendChild(highlight);
        return highlight;
    }

    function positionTooltip(element, step) {
        if (!element || !tourTooltip) return;

        const rect = element.getBoundingClientRect();
        const tooltipRect = tourTooltip.getBoundingClientRect();
        let top, left;

        switch (step.position) {
            case 'top':
                top = rect.top - tooltipRect.height - 20;
                left = rect.left + (rect.width / 2);
                break;
            case 'bottom':
                top = rect.bottom + 20;
                left = rect.left + (rect.width / 2);
                break;
            case 'left':
                top = rect.top + (rect.height / 2);
                left = rect.left - tooltipRect.width - 20;
                break;
            case 'right':
                top = rect.top + (rect.height / 2);
                left = rect.right + 20;
                break;
            default:
                top = rect.bottom + 20;
                left = rect.left + (rect.width / 2);
        }

        // Ensure tooltip stays within viewport
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        
        if (left < 20) left = 20;
        if (left + tooltipRect.width > viewportWidth - 20) {
            left = viewportWidth - tooltipRect.width - 20;
        }
        if (top < 20) top = 20;
        if (top + tooltipRect.height > viewportHeight - 20) {
            top = viewportHeight - tooltipRect.height - 20;
        }

        tourTooltip.style.top = `${top}px`;
        tourTooltip.style.left = `${left}px`;
        tourTooltip.style.transform = 'none';
    }

    function showStep(stepIndex) {
        if (stepIndex >= tourSteps.length) {
            endTour();
            return;
        }

        const step = tourSteps[stepIndex];
        const element = document.querySelector(step.target);
        
        if (!element) {
            console.log(`Tour step ${stepIndex + 1}: Element not found for selector "${step.target}"`);
            // Skip this step if element not found
            showStep(stepIndex + 1);
            return;
        }

        currentStep = stepIndex;
        createOverlay();
        createTooltip();

        // Remove previous highlight
        const prevHighlight = document.getElementById('mini-tour-highlight');
        if (prevHighlight) prevHighlight.remove();

        // Highlight current element
        const highlight = highlightElement(element);

        // Update tooltip content
        tourTooltip.innerHTML = `
            <div style="margin-bottom: 1rem;">
                <h3 style="margin: 0 0 0.5rem 0; color: #1e40af; font-size: 1.1rem;">${step.title}</h3>
                <p style="margin: 0; color: #64748b; line-height: 1.5;">${step.content}</p>
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <div style="font-size: 0.9rem; color: #64748b;">
                    ${stepIndex + 1} de ${tourSteps.length}
                </div>
                <div style="display: flex; gap: 0.5rem;">
                    ${stepIndex > 0 ? '<button onclick="window.miniTour.prevStep()" style="background: #64748b; color: white; border: none; padding: 0.5rem 1rem; border-radius: 6px; cursor: pointer;">Atrás</button>' : ''}
                    <button onclick="window.miniTour.nextStep()" style="background: #1e40af; color: white; border: none; padding: 0.5rem 1rem; border-radius: 6px; cursor: pointer;">
                        ${stepIndex === tourSteps.length - 1 ? 'Finalizar' : 'Siguiente'}
                    </button>
                </div>
            </div>
        `;

        // Position tooltip
        setTimeout(() => positionTooltip(element, step), 100);

        // Scroll element into view
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    function endTour() {
        // Clean up
        if (tourOverlay) {
            tourOverlay.remove();
            tourOverlay = null;
        }
        if (tourTooltip) {
            tourTooltip.remove();
            tourTooltip = null;
        }
        const highlight = document.getElementById('mini-tour-highlight');
        if (highlight) highlight.remove();

        // Mark tour as completed
        localStorage.setItem('miniTourCompleted', 'true');
        
        // Show completion message
        if (window.multiLanguage) {
            alert('¡Tour completado! Ya conoces las funciones principales de ReservasPro.');
        } else {
            alert('¡Tour completado! Ya conoces las funciones principales de ReservasPro.');
        }
    }

    function startTour() {
        currentStep = 0;
        showStep(0);
    }

    function nextStep() {
        showStep(currentStep + 1);
    }

    function prevStep() {
        if (currentStep > 0) {
            showStep(currentStep - 1);
        }
    }

    // Public API
    window.miniTour = {
        start: startTour,
        nextStep: nextStep,
        prevStep: prevStep
    };

    // Auto-start after onboarding completion
    document.addEventListener('DOMContentLoaded', function() {
        // Check if onboarding was just completed
        const onboardingJustCompleted = sessionStorage.getItem('onboardingJustCompleted') === 'true';
        const tourCompleted = localStorage.getItem('miniTourCompleted') === 'true';
        
        if (onboardingJustCompleted && !tourCompleted) {
            // Clear the flag
            sessionStorage.removeItem('onboardingJustCompleted');
            // Start tour after a short delay to ensure all elements are loaded
            setTimeout(() => {
                // Check if we're on the dashboard page
                if (window.location.pathname.includes('dashboard')) {
                    startTour();
                }
            }, 1500);
        }
    });
})();
