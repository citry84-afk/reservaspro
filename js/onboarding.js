// Simple Onboarding Manager
class OnboardingManager {
    constructor() {
        this.currentStep = 1;
        this.isCompleted = localStorage.getItem('onboardingDone') === 'true';
        
        // Expose functions globally
        window.closeOnboarding = () => this.closeOnboarding();
        window.saveStep1 = () => this.saveStep1();
        window.saveStep2 = () => this.saveStep2();
        window.saveStep3 = () => this.saveStep3();
        window.showStep = (step) => this.showStep(step);
        window.startOnboarding = () => this.startOnboarding();
        
        // Auto-launch if not completed
        if (!this.isCompleted) {
            setTimeout(() => this.buildModal(), 500);
        }
    }

    buildModal() {
        if (!document.body) {
            setTimeout(() => this.buildModal(), 100);
            return;
        }
        
        const modal = document.createElement('div');
        modal.id = 'rp-onb-modal';
        modal.style.cssText = `
            position: fixed; inset: 0; background: rgba(0,0,0,0.4); 
            display: flex; align-items: center; justify-content: center; z-index: 2000;
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
                        <button onclick="window.saveStep1()" style="background: #1e40af; color: white; border: none; padding: 0.6rem 1rem; border-radius: 8px; cursor: pointer;">Siguiente →</button>
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
        for (let i = 1; i <= 3; i++) {
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
        
        const services = [
            { id: 1, name: service1, duration: 60, price: 25 },
            { id: 2, name: service2, duration: 90, price: 45 }
        ];
        localStorage.setItem('services', JSON.stringify(services));
        
        // Also update the calendar service options
        this.updateCalendarServices(services);
        
        console.log('Step 1 saved:', services);
        this.showStep(2);
    }

    saveStep2() {
        console.log('Saving step 2...');
        
        const openTime = document.getElementById('rp-onb-s2-open')?.value || '09:00';
        const closeTime = document.getElementById('rp-onb-s2-close')?.value || '18:00';
        const interval = parseInt(document.getElementById('rp-onb-s2-interval')?.value || '30');
        
        const agendaSettings = {
            openTime: openTime,
            closeTime: closeTime,
            slotInterval: interval,
            workingDays: [1, 2, 3, 4, 5],
            months: 3
        };
        localStorage.setItem('agendaSettings', JSON.stringify(agendaSettings));
        
        // Also update the calendar time slots
        this.updateCalendarTimeSlots(agendaSettings);
        
        console.log('Step 2 saved:', agendaSettings);
        this.showStep(3);
    }

    saveStep3() {
        console.log('Saving step 3...');
        
        const template24h = document.getElementById('rp-onb-s3-t24')?.value || 'Hola {cliente}, te recordamos tu cita mañana a las {hora} para {servicio}.';
        const template2h = document.getElementById('rp-onb-s3-t2')?.value || 'Tu cita es en 2 horas ({hora}). ¡Te esperamos!';
        
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
        
        const modal = document.getElementById('rp-onb-modal');
        if (modal) {
            modal.remove();
        }
        
        sessionStorage.setItem('onboardingJustCompleted', 'true');
        alert('¡Onboarding completado! Ahora puedes usar ReservasPro.');
        window.location.reload();
    }

    closeOnboarding() {
        console.log('Closing onboarding...');
        const modal = document.getElementById('rp-onb-modal');
        if (modal) {
            modal.remove();
        }
    }

    startOnboarding() {
        if (!this.isCompleted) {
            this.buildModal();
        }
    }

    updateCalendarServices(services) {
        // Update service options in calendar if it exists
        const serviceSelect = document.getElementById('service');
        if (serviceSelect) {
            serviceSelect.innerHTML = '<option value="">Selecciona servicio</option>';
            services.forEach(service => {
                const option = document.createElement('option');
                option.value = service.name.toLowerCase();
                option.textContent = `${service.name} - €${service.price}`;
                serviceSelect.appendChild(option);
            });
        }
    }

    updateCalendarTimeSlots(agendaSettings) {
        // Update time slots in calendar if it exists
        const timeSelect = document.getElementById('time');
        if (timeSelect) {
            timeSelect.innerHTML = '<option value="">Selecciona hora</option>';
            
            const startHour = parseInt(agendaSettings.openTime.split(':')[0]);
            const endHour = parseInt(agendaSettings.closeTime.split(':')[0]);
            const interval = agendaSettings.slotInterval;
            
            for (let hour = startHour; hour < endHour; hour++) {
                for (let minutes = 0; minutes < 60; minutes += interval) {
                    const timeStr = `${hour.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
                    const option = document.createElement('option');
                    option.value = timeStr;
                    option.textContent = timeStr;
                    timeSelect.appendChild(option);
                }
            }
        }
    }
}

// Initialize when DOM is ready
function initOnboarding() {
    window.onboardingManager = new OnboardingManager();
}

// Start when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initOnboarding);
} else {
    initOnboarding();
}