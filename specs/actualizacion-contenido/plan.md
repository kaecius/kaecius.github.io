# Plan: Actualización de Contenido del Portfolio

## Fase 1 — Entrevista de descubrimiento (ahora)
Objetivo: extraer del usuario toda la información actualizada de su perfil profesional.

### Preguntas por bloque:
1. **Experiencia en Ideable**
   - Evolución de rol: ¿sigues como Software Engineer o has cambiado de título?
   - Proyectos destacados en estos 5.5 años: plataformas, productos, arquitecturas.
   - Logros cuantificables: usuarios, rendimiento, escalado, equipos liderados.
   - Tecnologías que has usado/añadido en producción.
   - Responsabilidades actuales vs las de 2021.

2. **Experiencia previa**
   - ¿Zylk e internship en Ideable siguen siendo relevantes? ¿alguna otra experiencia?

3. **Skills**
   - ¿Qué lenguajes usas ahora día a día?
   - ¿Qué frameworks/stacks dominas ahora?
   - Cloud/DevOps: ¿qué servicios, patrones, herramientas?
   - Bases de datos: ¿alguna nueva?
   - Herramientas, metodologías, soft skills técnicas.
   - ¿Quitar o deprecar algo del stack anterior?

4. **Proyectos**
   - Proyectos personales recientes.
   - Contribuciones open source.
   - Publicaciones, papers, talks.
   - ¿Mantener el Data Analysis Toolkit?

5. **About / Título**
   - ¿Cómo te defines ahora? ¿cambió tu enfoque profesional?
   - ¿Sigues con I+R&D mindset?

## Fase 2 — Consolidación y redacción
- Redactar contenido en inglés (idioma base del portfolio).
- Preparar traducción al español.
- Validar estructura de datos con TypeScript.

## Fase 3 — Implementación
- Actualizar `src/data/portfolio.ts`.
- Actualizar `src/i18n/en.json` y `es.json` si hay textos estáticos afectados.

## Fase 4 — Validación
- Ejecutar tests E2E.
- Revisar visualmente en local.
- Deploy y validación en producción.

## Estado
- [x] Crear especificación (requirements.md, plan.md)
- [x] Fase 1: entrevista de descubrimiento
- [x] Fase 2: consolidación
- [x] Fase 3: implementación
- [x] Fase 4: validación
