/* ==========================================================================
   Fase 3 & 4: Interatividade em Vanilla JS (ES6+)
   Projeto: DataFacil Compliance
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Navegação Suave Universal (Smooth Scroll)
    // Seleciona todos os links que começam com '#' ou contêm a extensão '.html#'
    const linksInternos = document.querySelectorAll('a[href*="#"]');
    
    linksInternos.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            
            // Verifica se o link é apenas para a mesma página
            const href = this.getAttribute('href');
            
            // Ignora links vazios
            if (href === '#') return;

            // Se o link contiver 'html#', mas for para a página atual, processa.
            // Se for para uma tela diferente (ex: clicar no link 'Início' estando na página de Política),
            // o navegador segue o comportamento nativo e carrega a nova página.
            const urlFormatada = new URL(this.href);
            if (urlFormatada.pathname === window.location.pathname) {
                e.preventDefault();
                
                const targetId = urlFormatada.hash;
                const target = document.querySelector(targetId);
                
                if(target) {
                    window.scrollTo({
                        top: target.offsetTop - 85, // Compensa a altura exata do header fixo
                        behavior: 'smooth'
                    });
                }
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

    // 3. Lógica do Formulário de Contato (Index)
    const form = document.getElementById('leadForm');
    
    if(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('button');
            const textOriginal = btn.innerText;
            
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

    // 4. Highlight do Menu Lateral na Página de Privacidade
    // Esta função ilumina o link no Índice de acordo com a seção que o usuário está lendo
    const observerOptions = {
        root: null,
        rootMargin: '-100px 0px -60% 0px',
        threshold: 0
    };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute('id');
            const navLink = document.querySelector(`.sticky-nav nav ul li a[href="#${id}"]`);
            
            if (navLink) {
                if (entry.isIntersecting) {
                    // Remove a classe active de todos
                    document.querySelectorAll('.sticky-nav nav ul li a').forEach(link => link.classList.remove('active'));
                    // Adiciona na seção visível
                    navLink.classList.add('active');
                }
            }
        });
    }, observerOptions);

    // Observa todas as seções dentro do corpo jurídico
    document.querySelectorAll('.legal-body section').forEach((section) => {
        observer.observe(section);
    });
});