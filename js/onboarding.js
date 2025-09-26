// Simple Onboarding System
class OnboardingSystem {
    constructor() {
        this.currentStep = 1;
        this.totalSteps = 3;
        this.isCompleted = localStorage.getItem('onboardingCompleted') === 'true';
        
        // Expose functions globally
        window.startOnboarding = () => this.startOnboarding();
        window.nextStep = () => this.nextStep();
        window.prevStep = () => this.prevStep();
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
        this.showStep(1);
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
                max-width: 600px;
                width: 90%;
                max-height: 80vh;
                overflow-y: auto;
                box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
            ">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem;">
                    <h1 style="margin: 0; color: #1e40af; font-size: 1.5rem;">🚀 Configuración Inicial</h1>
                    <button onclick="window.closeOnboarding()" style="
                        background: none;
                        border: none;
                        font-size: 1.5rem;
                        cursor: pointer;
                        color: #64748b;
                        padding: 0.5rem;
                    ">×</button>
                </div>

                <!-- Step 1: Services -->
                <div id="step-1" class="onboarding-step">
                    <h2 style="color: #1e40af; margin-bottom: 1rem;">1. Configura tus servicios</h2>
                    <p style="color: #64748b; margin-bottom: 1.5rem;">Define los servicios que ofreces a tus clientes</p>
                    
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 2rem;">
                        <div>
                            <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Servicio 1</label>
                            <input type="text" id="service1" placeholder="Ej: Corte de pelo" style="
                                width: 100%;
                                padding: 0.75rem;
                                border: 2px solid #e2e8f0;
                                border-radius: 8px;
                                font-size: 1rem;
                            " value="Corte">
                        </div>
                        <div>
                            <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Servicio 2</label>
                            <input type="text" id="service2" placeholder="Ej: Tinte" style="
                                width: 100%;
                                padding: 0.75rem;
                                border: 2px solid #e2e8f0;
                                border-radius: 8px;
                                font-size: 1rem;
                            " value="Tinte">
                        </div>
                    </div>
                </div>

                <!-- Step 2: Schedule -->
                <div id="step-2" class="onboarding-step" style="display: none;">
                    <h2 style="color: #1e40af; margin-bottom: 1rem;">2. Configura tu horario</h2>
                    <p style="color: #64748b; margin-bottom: 1.5rem;">Define cuándo trabajas y cada cuánto tiempo puedes atender</p>
                    
                    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem; margin-bottom: 2rem;">
                        <div>
                            <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Apertura</label>
                            <input type="time" id="openTime" value="09:00" style="
                                width: 100%;
                                padding: 0.75rem;
                                border: 2px solid #e2e8f0;
                                border-radius: 8px;
                                font-size: 1rem;
                            ">
                        </div>
                        <div>
                            <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Cierre</label>
                            <input type="time" id="closeTime" value="18:00" style="
                                width: 100%;
                                padding: 0.75rem;
                                border: 2px solid #e2e8f0;
                                border-radius: 8px;
                                font-size: 1rem;
                            ">
                        </div>
                        <div>
                            <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Intervalo</label>
                            <select id="interval" style="
                                width: 100%;
                                padding: 0.75rem;
                                border: 2px solid #e2e8f0;
                                border-radius: 8px;
                                font-size: 1rem;
                            ">
                                <option value="15">15 minutos</option>
                                <option value="30" selected>30 minutos</option>
                                <option value="60">60 minutos</option>
                            </select>
                        </div>
                    </div>
                </div>

                <!-- Step 3: Notifications -->
                <div id="step-3" class="onboarding-step" style="display: none;">
                    <h2 style="color: #1e40af; margin-bottom: 1rem;">3. Configura notificaciones</h2>
                    <p style="color: #64748b; margin-bottom: 1.5rem;">Personaliza los mensajes que recibirán tus clientes</p>
                    
                    <div style="margin-bottom: 1.5rem;">
                        <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Recordatorio 24h antes</label>
                        <textarea id="reminder24h" rows="3" style="
                            width: 100%;
                            padding: 0.75rem;
                            border: 2px solid #e2e8f0;
                            border-radius: 8px;
                            font-size: 1rem;
                            resize: vertical;
                        ">Hola {cliente}, te recordamos tu cita mañana a las {hora} para {servicio}. ¡Te esperamos!</textarea>
                    </div>
                    
                    <div style="margin-bottom: 2rem;">
                        <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Recordatorio 2h antes</label>
                        <textarea id="reminder2h" rows="3" style="
                            width: 100%;
                            padding: 0.75rem;
                            border: 2px solid #e2e8f0;
                            border-radius: 8px;
                            font-size: 1rem;
                            resize: vertical;
                        ">Tu cita es en 2 horas ({hora}). ¡Te esperamos!</textarea>
                    </div>
                </div>

                <!-- Navigation -->
                <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 2rem; padding-top: 1rem; border-top: 1px solid #e2e8f0;">
                    <button onclick="window.prevStep()" id="prevBtn" style="
                        background: #64748b;
                        color: white;
                        border: none;
                        padding: 0.75rem 1.5rem;
                        border-radius: 8px;
                        cursor: pointer;
                        font-size: 1rem;
                        display: none;
                    ">← Anterior</button>
                    
                    <div style="display: flex; gap: 0.5rem;">
                        <span id="stepIndicator" style="color: #64748b; font-weight: 600;">Paso 1 de 3</span>
                    </div>
                    
                    <button onclick="window.nextStep()" id="nextBtn" style="
                        background: #1e40af;
                        color: white;
                        border: none;
                        padding: 0.75rem 1.5rem;
                        border-radius: 8px;
                        cursor: pointer;
                        font-size: 1rem;
                    ">Siguiente →</button>
                </div>
            </div>
        `;

        document.body.appendChild(modal);
    }

    showStep(step) {
        // Hide all steps
        for (let i = 1; i <= this.totalSteps; i++) {
            const stepEl = document.getElementById(`step-${i}`);
            if (stepEl) stepEl.style.display = 'none';
        }

        // Show current step
        const currentStepEl = document.getElementById(`step-${step}`);
        if (currentStepEl) currentStepEl.style.display = 'block';

        // Update navigation
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const stepIndicator = document.getElementById('stepIndicator');

        if (prevBtn) prevBtn.style.display = step > 1 ? 'block' : 'none';
        if (stepIndicator) stepIndicator.textContent = `Paso ${step} de ${this.totalSteps}`;
        
        if (nextBtn) {
            if (step === this.totalSteps) {
                nextBtn.textContent = 'Finalizar ✓';
                nextBtn.onclick = () => this.completeOnboarding();
            } else {
                nextBtn.textContent = 'Siguiente →';
                nextBtn.onclick = () => this.nextStep();
            }
        }

        this.currentStep = step;
    }

    nextStep() {
        if (this.currentStep < this.totalSteps) {
            this.saveCurrentStep();
            this.showStep(this.currentStep + 1);
        }
    }

    prevStep() {
        if (this.currentStep > 1) {
            this.showStep(this.currentStep - 1);
        }
    }

    saveCurrentStep() {
        if (this.currentStep === 1) {
            // Save services
            const service1 = document.getElementById('service1')?.value || 'Corte';
            const service2 = document.getElementById('service2')?.value || 'Tinte';
            
            const services = [
                { id: 1, name: service1, duration: 60, price: 25 },
                { id: 2, name: service2, duration: 90, price: 45 }
            ];
            localStorage.setItem('services', JSON.stringify(services));
            console.log('Services saved:', services);
        }
        
        if (this.currentStep === 2) {
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
            console.log('Schedule saved:', schedule);
        }
        
        if (this.currentStep === 3) {
            // Save notifications
            const reminder24h = document.getElementById('reminder24h')?.value || 'Hola {cliente}, te recordamos tu cita mañana a las {hora} para {servicio}. ¡Te esperamos!';
            const reminder2h = document.getElementById('reminder2h')?.value || 'Tu cita es en 2 horas ({hora}). ¡Te esperamos!';
            
            const notifications = {
                reminder24h: reminder24h,
                reminder2h: reminder2h,
                enabled: true
            };
            localStorage.setItem('notifications', JSON.stringify(notifications));
            console.log('Notifications saved:', notifications);
        }
    }

    completeOnboarding() {
        this.saveCurrentStep();
        
        localStorage.setItem('onboardingCompleted', 'true');
        this.isCompleted = true;
        
        const modal = document.getElementById('onboarding-modal');
        if (modal) modal.remove();
        
        alert('¡Configuración completada! 🎉 Ya puedes usar ReservasPro.');
        
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
    window.onboardingSystem = new OnboardingSystem();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initOnboarding);
} else {
    initOnboarding();
}