# UI/UX Design Guide — Cómo no parecer vibecodeado

> Este documento establece principios de diseño obligatorios para este proyecto.
> Su objetivo es elevar la calidad visual más allá del output estadístico promedio de un LLM.
> **Leer completo antes de implementar cualquier componente de UI.**

---

## 1. El Problema: Por Qué El Frontend Generado Por IA Se Ve Igual en Todos Lados

Existe un fenómeno documentado llamado **"AI slop"**: diseños generados por IA que son instantáneamente reconocibles por cualquier diseñador. En agosto de 2025, el creador de Tailwind UI publicó disculpas virales porque `bg-indigo-500` como botón por defecto causó que básicamente **toda interfaz generada por IA en el mundo se volviera morada**.

Los LLMs no son diseñadores. Son máquinas estadísticas: cuando no se les da restricciones específicas, generan **la mediana visual** de todo el CSS de Tailwind en GitHub entre 2019 y 2024. El resultado: el mismo layout, el mismo gradiente, la misma fuente, una y otra vez.

**Los 7 telltales del vibecoding que debemos evitar activamente:**

1. Gradiente purple-to-blue en hero o fondo
2. Cards de glassmorphism flotando en vacíos pastel
3. `Inter` o `Roboto` como única fuente
4. Tres cajas con íconos en grid 3-col como sección de features
5. Paleta "tímida" (casi sin color, todo gris neutro)
6. Botones `indigo-600` o `violet-500` por defecto
7. Ilustraciones 3D abstractas de figuras sin cara

---

## 2. Filosofía Central

> **El diseño intencional se diferencia del diseño estadístico por la razón detrás de cada decisión.**

Cada elección visual —color, sombra, blur, espaciado, animación— debe tener un **por qué**. No "se ve moderno", sino "esta sombra multi-capa comunica elevación del elemento sobre el fondo" o "este blur reduce la carga visual del contexto secundario sin eliminarlo".

### Principio general: Restraint + Intención

- Menos efectos aplicados bien > más efectos aplicados genéricamente
- Cada componente debe sentirse diseñado para **este** producto, no copiado de un template
- La consistencia interna es más importante que seguir tendencias externas

---

## 3. Color y Paleta

### ✅ Qué hacer

- **Definir CSS tokens propios ANTES de tocar componentes.** Variables como `--color-brand`, `--color-accent`, `--surface`, `--text-primary`, `--text-muted` deben existir a nivel raíz.
- Usar **OKLCH** como espacio de color para derivar variantes de hover, active, disabled. OKLCH es perceptual: el brillo y la saturación se comportan de manera más predecible que en HSL/RGB, y los ramps de color se ven consistentes en todos los dispositivos.
- Paleta limitada: **1 color de marca primario + 1 acento + escala de neutros**. Eso es todo.
- El acento debe ser **un color con carácter propio**, no indigo ni violet. Pensar en: terracota, sage, mostaza apagado, teal oscuro, coral, verde lima desaturado.
- Los estados (hover, active, focus, disabled) deben derivar matemáticamente del color base, no elegirse a ojo.

### ❌ Qué no hacer

- **No usar `indigo-500`, `violet-600`, `purple-700` como color primario** a menos que el brand específicamente lo requiera y se haya definido explícitamente.
- No mezclar más de 3 hues distintos en la paleta funcional.
- No usar gradientes de color como relleno de fondo de página o de cards sin justificación brand específica.
- No elegir colores "porque se ven bonitos con el dark mode". El dark mode se genera de los tokens, no al revés.
- No usar blancos puros (#ffffff) ni negros puros (#000000) para texto y fondo. Usar off-whites y near-blacks para reducir el contraste agresivo y mejorar la legibilidad.

### Referencia de implementación

```css
:root {
  /* Definir en OKLCH para ramps consistentes */
  --color-brand:   oklch(55% 0.18 245);   /* ejemplo: azul petróleo */
  --color-accent:  oklch(70% 0.15 55);    /* ejemplo: ámbar cálido */
  
  --surface-base:  oklch(98% 0.005 245);
  --surface-raised: oklch(100% 0 0);
  --surface-overlay: oklch(96% 0.008 245);
  
  --text-primary:  oklch(15% 0.02 245);
  --text-muted:    oklch(45% 0.02 245);
  --text-disabled: oklch(70% 0.01 245);
}
```

---

## 4. Tipografía

### ✅ Qué hacer

- **Usar máximo 2 familias tipográficas**: una para headings y una para body. Que sean complementarias en proporción y peso.
- `Inter` y `Roboto` están permitidas, pero solo si el sistema de tokens **sobreescribe completamente** sus usos por defecto. No se deben ver como "Inter por defecto sin opinión".
- Establecer una escala tipográfica con **ratio matemático** (ej: Major Third = ×1.250, o Perfect Fourth = ×1.333). No mezclar tamaños arbitrarios.
- Body text: mínimo **16px**, preferiblemente 17-18px para lectura extendida.
- Line height en body: entre **1.5 y 1.7** para máxima legibilidad.
- Letter spacing en headings display: ligeramente negativo (-0.01em a -0.03em) para look contemporáneo y compacto.
- **3 niveles de jerarquía** son suficientes en la mayoría de vistas: display/heading, body, label/caption.

### ❌ Qué no hacer

- No mezclar más de 2 familias tipográficas en el mismo contexto.
- No usar `font-weight: 400` para absolutamente todo. Variar weights para crear jerarquía sin cambiar tamaño.
- No usar tamaños de fuente arbitrarios (ej: 13px, 17px, 22px, 31px todos en la misma vista). Usar la escala.
- No usar `letter-spacing: 0.1em` en body text. Solo en labels en mayúsculas y capsizes.
- No usar ALL CAPS en textos de más de 4 palabras. Ralentiza la lectura.
- No dejar `line-height: 1` o `line-height: normal` en texto corrido.

### Escala de ejemplo (base 16px, ratio 1.25)

```
xs:   12px  / 0.75rem
sm:   14px  / 0.875rem
base: 16px  / 1rem
md:   20px  / 1.25rem
lg:   25px  / 1.563rem
xl:   31px  / 1.953rem
2xl:  39px  / 2.441rem
3xl:  49px  / 3.052rem
```

---

## 5. Sombras *(permitidas y recomendadas)*

Las sombras bien aplicadas comunican **elevación real** y son una de las herramientas más efectivas para el diseño moderno. No son un efecto decorativo: son lenguaje visual de profundidad. Úsalas con intención.

### ✅ Cómo usarlas bien

- Definir un **sistema de sombras por niveles de elevación** (no sombras ad-hoc por componente):
  - `shadow-xs`: para inputs, chips en reposo
  - `shadow-sm`: para cards planas
  - `shadow-md`: para cards interactivas, dropdowns
  - `shadow-lg`: para modals, sheets, popovers
  - `shadow-xl`: para elementos floating importantes
  
- Usar **sombras de color** (no solo `rgba(0,0,0,x)`). Una sombra que toma el color de la superficie o del brand color se integra mejor visualmente. Ejemplo: `box-shadow: 0 8px 24px oklch(55% 0.18 245 / 0.15)` para un card de brand color.

- Combinar sombras de **múltiples capas** para realismo (una cercana/nítida + una lejana/difusa):
  ```css
  box-shadow: 
    0 1px 2px rgba(0,0,0,0.08),
    0 4px 12px rgba(0,0,0,0.06),
    0 12px 32px rgba(0,0,0,0.04);
  ```

- Los **hover states** deben elevar la sombra notablemente (`shadow-sm` → `shadow-lg`) para comunicar que el elemento está "levantado". Hacer la transición smooth: `transition: box-shadow 200ms ease`.

- Para dark mode, las sombras casi no sirven sobre fondo oscuro. En dark mode, usar **elevación por color de superficie** (surface ligeramente más clara) en lugar de sombras agresivas.

### ❌ Qué no hacer

- No usar `box-shadow: 0 0 10px rgba(0,0,0,0.5)` — sombra uniforme sin dirección se ve genérica y plana.
- No aplicar la misma sombra a absolutamente todos los elementos. La sombra debe comunicar jerarquía de elevación.
- No usar sombras de color demasiado saturado que compitan con el contenido.
- No animar `box-shadow` en el `keyframes` de un loop. Sombras animando constantemente fatigan visualmente.
- No usar `text-shadow` decorativo en body text o headings a menos que sea glassmorphism sobre background activo.

---

## 6. Blur y Glassmorphism *(permitidos y recomendados)*

El glassmorphism bien aplicado comunica profundidad real sin necesitar sombras agresivas. Apple y Microsoft lo usan en sus OS por algo: funciona cuando está justificado.

### ✅ Cómo usarlo bien

- Aplicar glassmorphism **solo a elementos que flotan sobre contexto activo**: navbars sobre contenido que se scroll, sidebars sobre fondos complejos, modals, tooltips, popovers.
- El efecto **requiere un fondo con contenido o gradiente detrás**. Sobre fondo sólido se ve plano y vacío.
- Valores recomendados:
  ```css
  .glass {
    background: rgba(255, 255, 255, 0.10);   /* o con color de brand */
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.18);
    border-radius: 12px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  }
  ```
- **Blur entre 8-15px** es el sweet spot. Valores más altos son costosos en GPU y se ven "embarrados".
- Mantener **no más de 2-3 elementos glassmórficos simultáneos** en viewport.
- Usar `@supports (backdrop-filter: blur(1px))` con fallback de fondo sólido para compatibilidad.
- Para garantizar legibilidad sobre el blur: añadir `text-shadow: 0 1px 2px rgba(0,0,0,0.15)` en texto claro sobre glass oscuro, o un overlay semi-opaco detrás del texto.

### ❌ Qué no hacer

- No aplicar glassmorphism a **elementos de interacción** como botones, inputs, o toggles. El blur sobre controles dificulta el feedback visual del estado.
- No apilar múltiples elementos glassmórficos uno encima del otro.
- No aplicar `backdrop-filter: blur()` a elementos grandes, full-screen o en animación continua. Mata performance en móvil.
- No usar glassmorphism como sustituto de jerarquía visual. El blur no crea estructura, solo profundidad.
- En dark mode, reducir la opacidad del glass (0.06-0.12) para que no compita con el texto.

---

## 7. Gradientes

Los gradientes son la herramienta más abusada del vibecoding. Usarlos con cirugía.

### ✅ Cuándo y cómo usarlos

- **Como fondo de página en dark mode**: un gradiente muy sutil (casi imperceptible, diferencia de luminosidad del 3-5%) añade profundidad sin gritar "AI-generated".
- **Gradientes de texto** en headings display: cuando el brand lo justifica, bien ejecutado. Usar `background-clip: text` con gradient de colores análogos del brand.
- **Gradient meshes** o **aurora gradients** como elemento de background decorativo detrás de hero sections, con opacidad reducida (20-40%).
- **Gradient borders** con `border-image` o pseudo-elementos para destacar cards o inputs activos sin necesitar color sólido agresivo.
- Usar colores **análogos o monocromáticos** en el gradient, no complementarios saturados (rojo → azul es demasiado agresivo).

### ❌ Qué no hacer

- **No usar gradiente purple-to-blue como color de brand.** Es la señal más obvia de vibecoding. Si el brand color va hacia ese rango, definirlo como color sólido específico con personalidad.
- No aplicar gradiente a superficies de cards de contenido.
- No usar gradientes radiales de luz ("glow spots") centrados en medio de la página como elemento decorativo genérico.
- No mezclar más de 3 stops en un gradiente de uso funcional.
- No animar gradientes en `background` (fuerza re-paint). Si necesitas animación, usar `opacity` sobre capas de gradiente o `background-position` en gradientes muy grandes.

---

## 8. Layout, Espaciado y Grids

### ✅ Qué hacer

- Definir un **sistema de espaciado con base 4px** (o 8px): todos los valores de padding, margin, gap deben ser múltiplos de 4 (4, 8, 12, 16, 24, 32, 48, 64...). Esto crea coherencia visual inmediata.
- Usar **grids de 12 columnas** para layout macro y flexbox para componentes internos.
- Respetar **jerarquía de whitespace**: más espacio entre secciones distintas, menos entre elementos relacionados. Proximity es lenguaje visual.
- El "squint test": alejarse de la pantalla y entrecerrar los ojos. El elemento más importante debe seguir destacando. Si todo tiene el mismo peso visual, la jerarquía falló.
- Limitar líneas de texto a **65-75 caracteres** de largo (measure óptimo para legibilidad).
- Usar **F-pattern y Z-pattern** conscientemente: ubicar el CTA principal donde el ojo llega naturalmente (esquina inferior derecha en Z-pattern, o a la derecha del primer scan horizontal en F-pattern).

### ❌ Qué no hacer

- No centrar absolutamente todo. El centrado total en layouts de contenido largo se ve genérico y dificulta el scan.
- No usar espaciados arbitrarios que rompan la grilla (ej: `padding: 17px 23px`).
- No tener más de 5 niveles distintos de énfasis visual en una misma vista. Si todo grita, nada comunica.
- No llenar el espacio por miedo al whitespace. El espacio negativo es diseño activo.
- No diseñar solo para desktop. Touch targets mínimos de **44x44px** en móvil.

---

## 9. Micro-interacciones y Animaciones *(enfoque del proyecto)*

Las animaciones fluidas son una ventaja competitiva cuando están bien ejecutadas. Son lo que separa una UI "muerta" de una que "respira". Sin embargo, el abuso es también un telltale del vibecoding.

### ✅ Principios de animación

- **Timing estándar para micro-interacciones: 150-300ms**. Para transiciones de página o modals: 250-400ms. Nada importante que supere 500ms.
- Usar **curvas de easing naturales**, no lineales:
  - Elementos que entran: `cubic-bezier(0.16, 1, 0.3, 1)` (inicio rápido, desaceleración suave)
  - Elementos que salen: `cubic-bezier(0.5, 0, 0.75, 0)` (aceleración hacia afuera)
  - Interacciones físicas: `cubic-bezier(0.34, 1.56, 0.64, 1)` (leve overshoot/bounce)
- Animar siempre `transform` y `opacity`. **Nunca** `width`, `height`, `top`, `left` directamente (fuerzan layout/repaint).
- Cada animación debe tener un **propósito funcional**: confirmar acción, revelar estado, guiar atención, comunicar jerarquía.
- Implementar **`prefers-reduced-motion`** para todos los casos:
  ```css
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      transition-duration: 0.01ms !important;
    }
  }
  ```

### ✅ Micro-interacciones recomendadas

- **Hover en cards**: elevar sombra + translate sutil (`translateY(-2px)`) en 200ms
- **Botones al click**: scale down (`scale(0.97)`) en 100ms, luego recovery
- **Focus states**: ring animado, no solo borde estático
- **Loading states**: skeleton screens con shimmer en lugar de spinners genéricos
- **Success/error states**: checkmark animado, shake suave en error
- **Scroll-reveal**: `opacity: 0 → 1` + `translateY(16px → 0)` en elementos al entrar al viewport
- **Transiciones de página**: fade + ligero scale del contenido nuevo
- **Inputs al focus**: label flotante suave, border color transition
- **Tooltips y popovers**: fade + scale desde el origen del trigger

### ❌ Qué no hacer

- No animar más de 5-6 elementos simultáneamente en la misma vista.
- No usar `animation` loops decorativos en elementos que el usuario no inició (floating blobs, pulsing backgrounds, etc).
- No usar `transition: all` — siempre especificar qué propiedad se transiciona.
- No hacer bounce/elastic en elementos de UI seria (formularios, tablas, estados críticos). El bounce es para gamificación y onboarding.
- No usar `keyframes` complejos en el critical path de carga.
- No repetir la misma animación de entrada en todos los elementos de una lista simultáneamente. Usar `stagger` (delay escalonado) para que se vea orquestado.

### Stagger pattern recomendado

```css
.list-item:nth-child(1) { animation-delay: 0ms; }
.list-item:nth-child(2) { animation-delay: 50ms; }
.list-item:nth-child(3) { animation-delay: 100ms; }
/* No más de 4-5 items con stagger visible; después el delay se vuelve molesto */
```

---

## 10. Componentes: Cómo Evitar el Look Genérico

### Botones

- **No usar border-radius: 9999px** (pill shape) para todos los botones. Es el default más vibecodeado. Elegir un border-radius que sea consistente con el design language general.
- Hierarchy de botones: Primary → Secondary → Ghost → Link. **Solo 1 botón primary por vista**.
- Padding horizontal generoso: mínimo `1.25em` a cada lado.
- Font-weight en botones: **500 o 600**, nunca 400.
- States obligatorios: `default`, `hover`, `active/pressed`, `focus`, `disabled`, `loading`.

### Cards

- Evitar cards con solo `border-radius: 8px` + `box-shadow` genérico flotando sobre fondo blanco. Eso es el card del vibecoding por excelencia.
- Opciones más interesantes: cards con borde izquierdo de acento, cards con surface ligeramente diferenciada del fondo (no necesariamente sombra), cards glassmórficas sobre fondo con textura o gradiente.
- El padding interno de cards debe seguir la escala de espaciado (no `padding: 15px`).

### Inputs y Forms

- Label siempre visible (no placeholder como label). El placeholder desaparece cuando el usuario escribe.
- Focus state con ring claro y bien definido. No solo `outline: none`.
- Error state con color rojo + ícono + mensaje debajo del campo. No solo borde rojo.
- Inputs con suficiente padding vertical (`0.625rem` mínimo).

### Íconos

- Usar una sola librería de íconos con estilo consistente (outline O filled, no mezclar).
- Tamaño de ícono alineado con el text-size adyacente (`1em` o `1.25em` del texto que acompaña).
- No decorar íconos con backgrounds circulares en todos lados. Solo cuando el ícono necesita contenedor visual por jerarquía.

---

## 11. Dark Mode

- El dark mode no es invertir colores. Es redefinir los tokens para un contexto de luminosidad reducida.
- **Evitar backgrounds negros puros** (`#000`). Usar `oklch(8% 0.01 245)` o similar. El negro puro causa halos en texto blanco (Halation effect).
- Surfaces en dark mode se diferencian por luminosidad, no por sombras:
  - Base: `oklch(8% 0.01 245)`
  - Raised: `oklch(11% 0.01 245)`
  - Overlay: `oklch(14% 0.015 245)`
- Reducir saturación de colores de acento en dark mode (los colores muy saturados en dark mode se ven neón y agresivos).
- Glassmorphism en dark mode: usar `rgba(255,255,255,0.06)` como base, no `rgba(0,0,0,x)`.

---

## 12. Consistencia del Sistema

- Todo el sistema de diseño debe vivir en **CSS custom properties** (tokens). Nada hard-coded.
- Nunca escribir un valor de color hexadecimal directamente en un componente. Siempre `var(--color-brand)`.
- Si un componente necesita un valor que no existe en el sistema de tokens, o se añade el token o se justifica el desvío.
- Los tokens deben tener nombres **semánticos**, no literales: `--color-destructive` no `--color-red`. `--surface-overlay` no `--color-white-10`.

---

## 13. Checklist Pre-implementación

Antes de implementar o aprobar cualquier componente o vista nueva:

- [ ] ¿La paleta de color usa los tokens definidos? ¿Ningún hex hardcodeado?
- [ ] ¿No hay gradiente purple/blue/violet por defecto?
- [ ] ¿La tipografía sigue la escala establecida?
- [ ] ¿Los espaciados son múltiplos de 4px?
- [ ] ¿Las sombras comunican elevación real (no son decorativas)?
- [ ] ¿El blur/glass tiene un fondo activo detrás para justificarse?
- [ ] ¿Las animaciones usan `transform`/`opacity` y no propiedades de layout?
- [ ] ¿Cada animación tiene un propósito funcional claro?
- [ ] ¿Se implementó `prefers-reduced-motion`?
- [ ] ¿El squint test revela jerarquía clara (un elemento principal destaca)?
- [ ] ¿Hay un solo botón primary por vista?
- [ ] ¿Los focus states son visibles y accesibles?
- [ ] ¿Los touch targets mínimos son de 44x44px?

---

## 14. Referencia Rápida: Síntomas vs Diagnóstico

| Síntoma visible | Diagnóstico | Fix |
|---|---|---|
| Todo se ve igual a otro SaaS | Paleta sin tokens propios | Definir palette con color de marca real |
| Fondo purple/blue gradient | Default de Tailwind sin sobreescribir | Reemplazar con surface token o gradient custom |
| Animaciones se sienten robóticas | `linear` easing | Usar `cubic-bezier` natural |
| Cards "flotan" sin contexto | Glass sobre fondo sólido | Glass necesita contenido detrás o eliminarlo |
| UI se ve "apagada" | Sombras solo con negro | Añadir color hint en `box-shadow` |
| Todo rebota | Bounce en todos los hovers | Reservar bounce para gamificación |
| Tipografía sin jerarquía | Un solo font-weight | Usar 400/500/600/700 para crear niveles |
| Inputs con placeholder como label | Mala accesibilidad | Label siempre visible encima del input |
| Ícono + texto no alineados | Gap inconsistente | Usar `gap: 0.5em` y `align-items: center` |
| Animaciones lentas y pesadas | Transiciones >500ms | Reducir a 150-300ms |

---

*Fuentes: Nielsen Norman Group, Medium/@Rythmuxdesigner, prg.sh/ramblings, dev.to/jaainil, uxpilot.ai, codercrafter.in, primotech.com, parallelhq.com, toptal.com, betasofttechnology.com — compilado April 2026.*
