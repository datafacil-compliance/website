/* ==========================================================================
   Fase 3: Interatividade em Vanilla JS (ES6+)
   Projeto: DataFacil Compliance
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Navegação Suave (Smooth Scroll)
    const linksInternos = document.querySelectorAll('a[href^="#"]');
    
    linksInternos.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            e.preventDefault();
            const target = document.querySelector(href);
            if(target) {
                window.scrollTo({
                    top: target.offsetTop - 70, // Compensa a altura do header fixo
                    behavior: 'smooth'
                });
            }
        });
    });

    // 2. Transição do Header no Scroll
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
        } else {
            header.style.backgroundColor = 'var(--color-black)';
        }
    });

    // 3. Lógica do Formulário de Contato (Simulação de Envio)
    const form = document.getElementById('leadForm');
    
    if(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('button');
            const textOriginal = btn.innerText;
            
            // Estado de carregamento
            btn.innerText = 'Processando...';
            btn.style.opacity = '0.7';
            btn.disabled = true;
            
            // Simula requisição assíncrona
            setTimeout(() => {
                const nomeGestor = document.getElementById('nome').value;
                alert(`Obrigado, ${nomeGestor}. A DataFacil Compliance recebeu sua solicitação e entrará em contato em breve para agendar o diagnóstico.`);
                
                form.reset();
                btn.innerText = textOriginal;
                btn.style.opacity = '1';
                btn.disabled = false;
            }, 1800);
        });
    }

    // 4. Lógica do Modal de Política de Privacidade
    const modal = document.getElementById('privacyModal');
    const openBtn = document.getElementById('openPrivacy');
    const closeBtn = document.querySelector('.close-modal');

    if(modal && openBtn && closeBtn) {
        // Abrir Modal
        openBtn.addEventListener('click', (e) => {
            e.preventDefault();
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden'; 
        });

        // Fechar Modal pelo "X"
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; 
        });

        // Fechar Modal clicando fora da caixa de conteúdo
        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
        
        // Fechar com a tecla ESC
        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.style.display === 'block') {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }
});