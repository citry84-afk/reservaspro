// Onboarding Manager
class OnboardingManager {
    constructor() {
        this.currentStep = 1;
        this.totalSteps = 3;
        this.isCompleted = localStorage.getItem('onboardingDone') === 'true';
        
        // Expose functions globally immediately
        window.closeOnboarding = () => this.closeOnboarding();
        window.saveStep1 = () => this.saveStep1();
        window.saveStep2 = () => this.saveStep2();
        window.saveStep3 = () => this.saveStep3();
        window.showStep = (step) => this.showStep(step);
        
        // Auto-launch if not completed
        if (!this.isCompleted) {
            this.waitForDOM();
        }
    }

    waitForDOM() {
        if (document.readyState === 'complete' && document.body) {
            this.buildModal();
        } else {
            setTimeout(() => this.waitForDOM(), 100);
        }
    }

    buildModal() {
        if (!document.body) {
            console.error('Document body not ready');
            return;
        }
        
        const modal = document.createElement('div');
        modal.id = 'rp-onb-modal';
        modal.style.cssText = `
            position: fixed; 
            inset: 0; 
            background: rgba(0,0,0,0.4); 
            display: flex; 
            align-items: center; 
            justify-content: center; 
            z-index: 2000;
        `;
        
        modal.innerHTML = `
            <div style="background: white; border-radius: 12px; width: 90%; max-width: 720px; padding: 1.5rem; box-shadow: 0 10px 30px rgba(0,0,0,0.15);">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                    <h2 style="margin: 0;">🚀 Configuración Inicial</h2>
                    <button onclick="window.closeOnboarding()" style="border: none; background: none; font-size: 1.25rem; cursor: pointer;">×</button>
                </div>
                
                <div id="rp-onb-step-1" class="rp-onb-step">
                    <h3>1) Servicios base</h3>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                        <div>
                            <label>Servicio 1</label>
                            <input id="rp-onb-s1-name1" placeholder="Corte" style="width: 100%; padding: 0.6rem; border: 1px solid #e5e7eb; border-radius: 8px;"/>
                        </div>
                        <div>
                            <label>Servicio 2</label>
                            <input id="rp-onb-s1-name2" placeholder="Tinte" style="width: 100%; padding: 0.6rem; border: 1px solid #e5e7eb; border-radius: 8px;"/>
                        </div>
                    </div>
                    <div style="margin-top: 1rem; display: flex; gap: 0.5rem; justify-content: flex-end;">
                        <button onclick="window.saveStep1()" class="rp-onb-next" style="background: #1e40af; color: white; border: none; padding: 0.6rem 1rem; border-radius: 8px; cursor: pointer;">Siguiente →</button>
                    </div>
                </div>
                
                <div id="rp-onb-step-2" class="rp-onb-step" style="display: none;">
                    <h3>2) Horario y slots</h3>
                    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem;">
                        <div>
                            <label>Apertura</label>
                            <input id="rp-onb-s2-open" type="time" value="09:00" style="width: 100%; padding: 0.6rem; border: 1px solid #e5e7eb; border-radius: 8px;"/>
                        </div>
                        <div>
                            <label>Cierre</label>
                            <input id="rp-onb-s2-close" type="time" value="18:00" style="width: 100%; padding: 0.6rem; border: 1px solid #e5e7eb; border-radius: 8px;"/>
                        </div>
                        <div>
                            <label>Intervalo</label>
                            <select id="rp-onb-s2-interval" style="width: 100%; padding: 0.6rem; border: 1px solid #e5e7eb; border-radius: 8px;">
                                <option value="15">15 min</option>
                                <option value="30" selected>30 min</option>
                                <option value="60">60 min</option>
                            </select>
                        </div>
                    </div>
                    <div style="margin-top: 1rem; display: flex; gap: 0.5rem; justify-content: space-between;">
                        <button onclick="window.showStep(1)" style="background: #64748b; color: white; border: none; padding: 0.6rem 1rem; border-radius: 8px; cursor: pointer;">← Atrás</button>
                        <button onclick="window.saveStep2()" style="background: #1e40af; color: white; border: none; padding: 0.6rem 1rem; border-radius: 8px; cursor: pointer;">Siguiente →</button>
                    </div>
                </div>
                
                <div id="rp-onb-step-3" class="rp-onb-step" style="display: none;">
                    <h3>3) Recordatorios SMS</h3>
                    <div>
                        <label>Plantilla 24h</label>
                        <textarea id="rp-onb-s3-t24" rows="2" style="width: 100%; padding: 0.6rem; border: 1px solid #e5e7eb; border-radius: 8px;">Hola {cliente}, te recordamos tu cita mañana a las {hora} para {servicio}.</textarea>
                    </div>
                    <div style="margin-top: 0.75rem;">
                        <label>Plantilla 2h</label>
                        <textarea id="rp-onb-s3-t2" rows="2" style="width: 100%; padding: 0.6rem; border: 1px solid #e5e7eb; border-radius: 8px;">Tu cita es en 2 horas ({hora}). ¡Te esperamos!</textarea>
                    </div>
                    <div style="margin-top: 1rem; display: flex; gap: 0.5rem; justify-content: space-between;">
                        <button onclick="window.showStep(2)" style="background: #64748b; color: white; border: none; padding: 0.6rem 1rem; border-radius: 8px; cursor: pointer;">← Atrás</button>
                        <button onclick="window.saveStep3()" style="background: #10b981; color: white; border: none; padding: 0.6rem 1rem; border-radius: 8px; cursor: pointer;">Finalizar ✓</button>
                    </div>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
    }

    showStep(step) {
        console.log(`Showing step ${step}`);
        
        // Hide all steps
        for (let i = 1; i <= this.totalSteps; i++) {
            const stepElement = document.getElementById(`rp-onb-step-${i}`);
            if (stepElement) {
                stepElement.style.display = 'none';
            }
        }
        
        // Show current step
        const currentStepElement = document.getElementById(`rp-onb-step-${step}`);
        if (currentStepElement) {
            currentStepElement.style.display = 'block';
        }
        
        this.currentStep = step;
    }

    saveStep1() {
        console.log('Saving step 1...');
        
        const service1 = document.getElementById('rp-onb-s1-name1')?.value || 'Corte';
        const service2 = document.getElementById('rp-onb-s1-name2')?.value || 'Tinte';
        
        // Save services to localStorage
        const services = [
            { id: 1, name: service1, duration: 60, price: 25 },
            { id: 2, name: service2, duration: 90, price: 45 }
        ];
        localStorage.setItem('services', JSON.stringify(services));
        
        console.log('Step 1 saved:', services);
        this.showStep(2);
    }

    saveStep2() {
        console.log('Saving step 2...');
        
        const openTime = document.getElementById('rp-onb-s2-open')?.value || '09:00';
        const closeTime = document.getElementById('rp-onb-s2-close')?.value || '18:00';
        const interval = parseInt(document.getElementById('rp-onb-s2-interval')?.value || '30');
        
        // Save schedule settings
        const agendaSettings = {
            openTime: openTime,
            closeTime: closeTime,
            slotInterval: interval,
            workingDays: [1, 2, 3, 4, 5], // Monday to Friday
            months: 3
        };
        localStorage.setItem('agendaSettings', JSON.stringify(agendaSettings));
        
        console.log('Step 2 saved:', agendaSettings);
        this.showStep(3);
    }

    saveStep3() {
        console.log('Saving step 3...');
        
        const template24h = document.getElementById('rp-onb-s3-t24')?.value || 'Hola {cliente}, te recordamos tu cita mañana a las {hora} para {servicio}.';
        const template2h = document.getElementById('rp-onb-s3-t2')?.value || 'Tu cita es en 2 horas ({hora}). ¡Te esperamos!';
        
        // Save notification settings
        const notificationSettings = {
            reminder24h: 'sms',
            reminder2h: 'sms',
            bookingConfirmation: 'sms',
            cancellationNotice: 'sms',
            template24h: template24h,
            template2h: template2h
        };
        localStorage.setItem('notificationSettings', JSON.stringify(notificationSettings));
        
        console.log('Step 3 saved:', notificationSettings);
        this.completeOnboarding();
    }

    completeOnboarding() {
        console.log('Completing onboarding...');
        
        localStorage.setItem('onboardingDone', 'true');
        this.isCompleted = true;
        
        // Close modal
        const modal = document.getElementById('rp-onb-modal');
        if (modal) {
            modal.remove();
        }
        
        // Mark onboarding as just completed to trigger mini-tour
        sessionStorage.setItem('onboardingJustCompleted', 'true');
        
        // Show completion message
        alert('¡Onboarding completado! Ahora puedes usar ReservasPro.');
        
        // Reload page to apply settings
        window.location.reload();
    }

    closeOnboarding() {
        console.log('Closing onboarding...');
        
        const modal = document.getElementById('rp-onb-modal');
        if (modal) {
            modal.remove();
        }
    }

    // Public method to start onboarding manually
    startOnboarding() {
        if (!this.isCompleted) {
            this.buildModal();
        }
    }
}

// Initialize onboarding manager
let onboardingManager;

function initOnboarding() {
    if (document.readyState === 'complete' && document.body) {
        onboardingManager = new OnboardingManager();
        window.onboardingManager = onboardingManager;
    } else {
        setTimeout(initOnboarding, 100);
    }
}

// Start initialization
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initOnboarding);
} else {
    initOnboarding();
}

// Fallback timeout
setTimeout(() => {
    if (!onboardingManager) {
        initOnboarding();
    }
}, 2000);