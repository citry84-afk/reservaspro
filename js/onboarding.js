// Onboarding Súper Simple para Pequeños Emprendedores
class SimpleOnboarding {
    constructor() {
        this.isCompleted = localStorage.getItem('onboardingCompleted') === 'true';
        
        // Expose functions globally
        window.startOnboarding = () => this.startOnboarding();
        window.completeOnboarding = () => this.completeOnboarding();
        window.closeOnboarding = () => this.closeOnboarding();
        
        // Auto-start if not completed
        if (!this.isCompleted) {
            setTimeout(() => this.startOnboarding(), 1000);
        }
    }

    startOnboarding() {
        if (this.isCompleted) return;
        
        this.createModal();
    }

    createModal() {
        // Remove existing modal if any
        const existing = document.getElementById('onboarding-modal');
        if (existing) existing.remove();

        const modal = document.createElement('div');
        modal.id = 'onboarding-modal';
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            font-family: system-ui, -apple-system, sans-serif;
        `;

        modal.innerHTML = `
            <div style="
                background: white;
                border-radius: 16px;
                padding: 2rem;
                max-width: 500px;
                width: 90%;
                box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
            ">
                <div style="text-align: center; margin-bottom: 2rem;">
                    <h1 style="margin: 0; color: #1e40af; font-size: 1.8rem; margin-bottom: 0.5rem;">
                        🚀 ¡Bienvenido a ReservasPro!
                    </h1>
                    <p style="color: #64748b; font-size: 1.1rem;">
                        Tu agenda digital para gestionar clientes fácilmente
                    </p>
                </div>

                <div style="background: #f8fafc; padding: 1.5rem; border-radius: 12px; margin-bottom: 2rem;">
                    <h3 style="color: #1e40af; margin-bottom: 1rem;">Configuración rápida (2 minutos)</h3>
                    
                    <div style="margin-bottom: 1.5rem;">
                        <label style="display: block; margin-bottom: 0.5rem; font-weight: 600; color: #374151;">
                            ¿Qué servicios ofreces?
                        </label>
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                            <input type="text" id="service1" placeholder="Ej: Corte" style="
                                width: 100%;
                                padding: 0.75rem;
                                border: 2px solid #e2e8f0;
                                border-radius: 8px;
                                font-size: 1rem;
                            " value="Corte">
                            <input type="text" id="service2" placeholder="Ej: Tinte" style="
                                width: 100%;
                                padding: 0.75rem;
                                border: 2px solid #e2e8f0;
                                border-radius: 8px;
                                font-size: 1rem;
                            " value="Tinte">
                        </div>
                    </div>
                    
                    <div style="margin-bottom: 1.5rem;">
                        <label style="display: block; margin-bottom: 0.5rem; font-weight: 600; color: #374151;">
                            ¿Cuándo trabajas?
                        </label>
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                            <div>
                                <label style="font-size: 0.875rem; color: #64748b;">Desde</label>
                                <input type="time" id="openTime" value="09:00" style="
                                    width: 100%;
                                    padding: 0.75rem;
                                    border: 2px solid #e2e8f0;
                                    border-radius: 8px;
                                    font-size: 1rem;
                                ">
                            </div>
                            <div>
                                <label style="font-size: 0.875rem; color: #64748b;">Hasta</label>
                                <input type="time" id="closeTime" value="18:00" style="
                                    width: 100%;
                                    padding: 0.75rem;
                                    border: 2px solid #e2e8f0;
                                    border-radius: 8px;
                                    font-size: 1rem;
                                ">
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <label style="display: block; margin-bottom: 0.5rem; font-weight: 600; color: #374151;">
                            ¿Cada cuánto tiempo atiendes?
                        </label>
                        <select id="interval" style="
                            width: 100%;
                            padding: 0.75rem;
                            border: 2px solid #e2e8f0;
                            border-radius: 8px;
                            font-size: 1rem;
                        ">
                            <option value="15">Cada 15 minutos</option>
                            <option value="30" selected>Cada 30 minutos</option>
                            <option value="60">Cada hora</option>
                        </select>
                    </div>
                </div>

                <div style="text-align: center;">
                    <button onclick="window.completeOnboarding()" style="
                        background: #059669;
                        color: white;
                        border: none;
                        padding: 1rem 2rem;
                        border-radius: 12px;
                        cursor: pointer;
                        font-size: 1.1rem;
                        font-weight: 600;
                        width: 100%;
                        margin-bottom: 1rem;
                    ">¡Empezar a usar! 🎉</button>
                    
                    <button onclick="window.closeOnboarding()" style="
                        background: none;
                        color: #64748b;
                        border: none;
                        padding: 0.5rem;
                        cursor: pointer;
                        font-size: 0.9rem;
                    ">Saltar por ahora</button>
                </div>
            </div>
        `;

        document.body.appendChild(modal);
    }

    completeOnboarding() {
        // Save services
        const service1 = document.getElementById('service1')?.value || 'Corte';
        const service2 = document.getElementById('service2')?.value || 'Tinte';
        
        const services = [
            { id: 1, name: service1, duration: 60, price: 25 },
            { id: 2, name: service2, duration: 90, price: 45 }
        ];
        localStorage.setItem('services', JSON.stringify(services));
        
        // Save schedule
        const openTime = document.getElementById('openTime')?.value || '09:00';
        const closeTime = document.getElementById('closeTime')?.value || '18:00';
        const interval = parseInt(document.getElementById('interval')?.value || '30');
        
        const schedule = {
            openTime: openTime,
            closeTime: closeTime,
            slotInterval: interval,
            workingDays: [1, 2, 3, 4, 5]
        };
        localStorage.setItem('schedule', JSON.stringify(schedule));
        
        // Mark as completed
        localStorage.setItem('onboardingCompleted', 'true');
        this.isCompleted = true;
        
        // Close modal
        const modal = document.getElementById('onboarding-modal');
        if (modal) modal.remove();
        
        // Show success message
        alert('¡Perfecto! Ya puedes gestionar tus citas fácilmente. 📅');
        
        // Reload to apply settings
        window.location.reload();
    }

    closeOnboarding() {
        const modal = document.getElementById('onboarding-modal');
        if (modal) modal.remove();
    }
}

// Initialize when DOM is ready
function initOnboarding() {
    window.simpleOnboarding = new SimpleOnboarding();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initOnboarding);
} else {
    initOnboarding();
}