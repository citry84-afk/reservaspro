(function initOnboarding() {
    if (window.__onboardingInjected) return; 
    window.__onboardingInjected = true;

    function showStep(step) {
        console.log('Showing step:', step);
        document.querySelectorAll('.rp-onb-step').forEach(el => el.style.display = 'none');
        const el = document.getElementById(`rp-onb-step-${step}`);
        if (el) {
            el.style.display = 'block';
            console.log('Step', step, 'displayed');
        } else {
            console.error('Step element not found:', `rp-onb-step-${step}`);
        }
        localStorage.setItem('onboardingStep', String(step));
    }

    function closeOnboarding() {
        const modal = document.getElementById('rp-onb-modal');
        if (modal && modal.parentElement) modal.parentElement.removeChild(modal);
        localStorage.setItem('onboardingDone', 'true');
    }

    function saveStep1() {
        console.log('Saving step 1...');
        const services = [
            { name: document.getElementById('rp-onb-s1-name1').value || 'Corte', duration: 30, price: 20 },
            { name: document.getElementById('rp-onb-s1-name2').value || 'Tinte', duration: 90, price: 45 }
        ];
        console.log('Services:', services);
        localStorage.setItem('businessServices', JSON.stringify(services));
        showStep(2);
    }

    function saveStep2() {
        const open = document.getElementById('rp-onb-s2-open').value || '09:00';
        const close = document.getElementById('rp-onb-s2-close').value || '18:00';
        const slotInterval = parseInt(document.getElementById('rp-onb-s2-interval').value || '30');
        const schedule = {
            'lunes': { active: true, openTime: open, closeTime: close },
            'martes': { active: true, openTime: open, closeTime: close },
            'miércoles': { active: true, openTime: open, closeTime: close },
            'jueves': { active: true, openTime: open, closeTime: close },
            'viernes': { active: true, openTime: open, closeTime: close },
            'sábado': { active: true, openTime: open, closeTime: close },
            'domingo': { active: false, openTime: '00:00', closeTime: '00:00' }
        };
        localStorage.setItem('businessSchedule', JSON.stringify(schedule));
        const agendaSettings = JSON.parse(localStorage.getItem('agendaSettings') || '{}');
        localStorage.setItem('agendaSettings', JSON.stringify({ ...agendaSettings, slotInterval }));
        showStep(3);
    }

    function saveStep3() {
        const notifications = {
            enabled: true,
            reminder24h: 'sms',
            reminder2h: 'sms',
            bookingConfirmation: 'sms',
            cancellationNotice: 'sms',
            templates: {
                reminder24h: document.getElementById('rp-onb-s3-t24').value || 'Recordatorio: cita mañana a las {hora} ({servicio})',
                reminder2h: document.getElementById('rp-onb-s3-t2').value || 'Recordatorio: cita en 2 horas ({hora})',
                confirmation: '✅ Cita confirmada para {fecha} a las {hora}. Servicio: {servicio}. ¡Gracias!'
            }
        };
        localStorage.setItem('businessNotifications', JSON.stringify(notifications));
        closeOnboarding();
        
        // Mark onboarding as just completed to trigger mini-tour
        sessionStorage.setItem('onboardingJustCompleted', 'true');
    }

    function buildModal() {
        const modal = document.createElement('div');
        modal.id = 'rp-onb-modal';
        modal.style.cssText = `
            position: fixed; inset: 0; background: rgba(0,0,0,0.4); display:flex; align-items:center; justify-content:center; z-index: 2000;
        `;
        modal.innerHTML = `
            <div style="background:white; border-radius:12px; width:90%; max-width:720px; padding:1.5rem; box-shadow:0 10px 30px rgba(0,0,0,0.15);">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem;">
                    <h2 style="margin:0;">🚀 Configuración Inicial</h2>
                    <button id="closeOnboardingBtn" style="border:none;background:none;font-size:1.25rem;cursor:pointer;">×</button>
                </div>
                <div id="rp-onb-step-1" class="rp-onb-step">
                    <h3>1) Servicios base</h3>
                    <div style="display:grid; grid-template-columns:1fr 1fr; gap:1rem;">
                        <div>
                            <label>Servicio 1</label>
                            <input id="rp-onb-s1-name1" placeholder="Corte" style="width:100%; padding:0.6rem; border:1px solid #e5e7eb; border-radius:8px;"/>
                        </div>
                        <div>
                            <label>Servicio 2</label>
                            <input id="rp-onb-s1-name2" placeholder="Tinte" style="width:100%; padding:0.6rem; border:1px solid #e5e7eb; border-radius:8px;"/>
                        </div>
                    </div>
                    <div style="margin-top:1rem; display:flex; gap:0.5rem; justify-content:flex-end;">
                        <button id="saveStep1Btn" class="rp-onb-next" style="background:#1e40af;color:white;border:none;padding:0.6rem 1rem;border-radius:8px;cursor:pointer;">Siguiente →</button>
                    </div>
                </div>
                <div id="rp-onb-step-2" class="rp-onb-step" style="display:none;">
                    <h3>2) Horario y slots</h3>
                    <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:1rem;">
                        <div>
                            <label>Apertura</label>
                            <input id="rp-onb-s2-open" type="time" value="09:00" style="width:100%; padding:0.6rem; border:1px solid #e5e7eb; border-radius:8px;"/>
                        </div>
                        <div>
                            <label>Cierre</label>
                            <input id="rp-onb-s2-close" type="time" value="18:00" style="width:100%; padding:0.6rem; border:1px solid #e5e7eb; border-radius:8px;"/>
                        </div>
                        <div>
                            <label>Intervalo</label>
                            <select id="rp-onb-s2-interval" style="width:100%; padding:0.6rem; border:1px solid #e5e7eb; border-radius:8px;">
                                <option value="15">15 min</option>
                                <option value="30" selected>30 min</option>
                                <option value="60">60 min</option>
                            </select>
                        </div>
                    </div>
                    <div style="margin-top:1rem; display:flex; gap:0.5rem; justify-content:space-between;">
                        <button id="backToStep1Btn" style="background:#64748b;color:white;border:none;padding:0.6rem 1rem;border-radius:8px;cursor:pointer;">← Atrás</button>
                        <button id="saveStep2Btn" style="background:#1e40af;color:white;border:none;padding:0.6rem 1rem;border-radius:8px;cursor:pointer;">Siguiente →</button>
                    </div>
                </div>
                <div id="rp-onb-step-3" class="rp-onb-step" style="display:none;">
                    <h3>3) Recordatorios SMS</h3>
                    <div>
                        <label>Plantilla 24h</label>
                        <textarea id="rp-onb-s3-t24" rows="2" style="width:100%; padding:0.6rem; border:1px solid #e5e7eb; border-radius:8px;">Hola {cliente}, te recordamos tu cita mañana a las {hora} para {servicio}.</textarea>
                    </div>
                    <div style="margin-top:0.75rem;">
                        <label>Plantilla 2h</label>
                        <textarea id="rp-onb-s3-t2" rows="2" style="width:100%; padding:0.6rem; border:1px solid #e5e7eb; border-radius:8px;">Tu cita es en 2 horas ({hora}). ¡Te esperamos!</textarea>
                    </div>
                    <div style="margin-top:1rem; display:flex; gap:0.5rem; justify-content:space-between;">
                        <button id="backToStep2Btn" style="background:#64748b;color:white;border:none;padding:0.6rem 1rem;border-radius:8px;cursor:pointer;">← Atrás</button>
                        <button id="saveStep3Btn" style="background:#10b981;color:white;border:none;padding:0.6rem 1rem;border-radius:8px;cursor:pointer;">Finalizar ✓</button>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
        
        // Add event listeners after DOM is updated
        setTimeout(() => {
            const closeBtn = document.getElementById('closeOnboardingBtn');
            const save1Btn = document.getElementById('saveStep1Btn');
            const back1Btn = document.getElementById('backToStep1Btn');
            const save2Btn = document.getElementById('saveStep2Btn');
            const back2Btn = document.getElementById('backToStep2Btn');
            const save3Btn = document.getElementById('saveStep3Btn');
            
            if (closeBtn) closeBtn.addEventListener('click', closeOnboarding);
            if (save1Btn) save1Btn.addEventListener('click', saveStep1);
            if (back1Btn) back1Btn.addEventListener('click', () => showStep(1));
            if (save2Btn) save2Btn.addEventListener('click', saveStep2);
            if (back2Btn) back2Btn.addEventListener('click', () => showStep(2));
            if (save3Btn) save3Btn.addEventListener('click', saveStep3);
        }, 100);
    }

    function maybeAutoLaunch() {
        const done = localStorage.getItem('onboardingDone') === 'true';
        if (done) return;
        buildModal();
        const savedStep = parseInt(localStorage.getItem('onboardingStep') || '1');
        showStep(savedStep);
    }

    // Public API
    window.startOnboarding = function() {
        buildModal();
        showStep(1);
    };

    // Auto
    document.addEventListener('DOMContentLoaded', maybeAutoLaunch);
})();


