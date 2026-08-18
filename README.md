# DataFacil Compliance - Portal Institucional

Este repositório contém o código-fonte da landing page institucional da **DataFacil Compliance**, uma consultoria independente focada em auditoria LGPD e segurança da informação, com atuação prioritária em instituições de ensino.

## 🎯 Arquitetura do Projeto

O portal foi desenvolvido sob rígidos padrões de performance, acessibilidade e design, adotando uma arquitetura **Mobile-First**. Não foram utilizados frameworks externos (como React, Angular ou Bootstrap) ou bibliotecas de terceiros (como jQuery), garantindo um carregamento ultrarrápido, excelente ranqueamento em SEO e máxima segurança (redução de superfície de ataque).

### Stack Tecnológico
* **HTML5 Semântico:** Estrutura otimizada para leitores de tela e motores de busca.
* **CSS3 Moderno:** Arquitetura Mobile-First, uso de Custom Properties (variáveis) para controle de paleta cromática e Flexbox/Grid para responsividade fluida.
* **Vanilla JavaScript (ES6+):** Manipulação de DOM nativa para interações e navegação suave.

## 🎨 Design System e Cromografia

O design foi orientado para transmitir confiança, rigor técnico e autoridade, utilizando uma paleta estrita de 6 tons hexadecimais:
* **Preto Absoluto (`#000000`) & Cinza Chumbo (`#1A1A1A`):** Segurança, peso institucional e alto contraste para legibilidade.
* **Dourado Médio (`#D4AF37`) & Dourado Suave (`#E6C57A`):** O padrão-ouro em auditoria, excelência e chamadas para ação (CTAs).
* **Champagne (`#F7E7CE`) & Branco Puro (`#FFFFFF`):** Respiro visual, áreas de conteúdo limpas e sofisticação.

## 📁 Estrutura de Arquivos

* `index.html`: Arquivo principal da aplicação. Contém toda a estrutura semântica da página, incluindo seções de Hero, Pilares da Adequação Escolar (com SVGs inline para ganho de performance), Perfil do Auditor e Formulário de Contato.
* `style.css`: Folha de estilos baseada na metodologia Mobile-First. Define o layout padrão para smartphones e introduz complexidade estrutural (breakpoints) gradualmente para tablets e desktops.
* `script.js`: Lógica de interatividade. Responsável pelo *Smooth Scroll* da navegação, transição visual do cabeçalho (Sticky Header), simulação de envio do formulário de captação e controle do Modal de Política de Privacidade.
* `public/images/`: Diretório de ativos estáticos (Logotipo, fotografia corporativa e retrato do auditor).

## 🚀 O Que Foi Feito Até Agora

1. **Fase 1: Wireframing e UI/UX**
   - Mapeamento cromático e planejamento da hierarquia da informação, com foco na conversão de gestores escolares.
2. **Fase 2: Estruturação e Refatoração Mobile-First**
   - Construção do HTML5.
   - Refatoração do CSS para Mobile-First, garantindo que o código mais leve seja entregue primeiro aos dispositivos móveis.
   - Inserção de ícones SVG *inline* para reduzir requisições HTTP e melhorar o LCP (*Largest Contentful Paint*).
3. **Fase 3: Interatividade, Compliance e Autoridade**
   - Implementação de Vanilla JS para fluidez de navegação.
   - Criação de um Modal customizado e elegante para a **Política de Privacidade e Compliance**.
   - Otimização de *copywriting* para destacar marcos legais recentes, como o novo ECA Digital (Lei 15.211/2025).

---
*Desenvolvido com foco no mais alto padrão de segurança e design de interface.*