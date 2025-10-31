# Santa Josefina SpA – Vue 3 (Vite)

Sitio portado desde el contenido de https://bymac-si.github.io/SantaJosefinaSpA/ a un proyecto **Vue 3 + Vite** con **Bootstrap 5** y **BootstrapVue 3**.

## Comandos
```bash
npm i
npm run dev
npm run build
```

## Estructura
- `src/views`: Home, Servicios, Copropiedades, Contacto
- `src/components`: NavBar, SiteFooter
- Router: `/`, `/servicios`, `/copropiedades`, `/contacto`



### GitHub Pages
1. Cambia el valor de `base` si tu repositorio no se llama `santajosefina-vue3`:
   - En `vite.config.js`, ajusta:
   ```js
   const base = process.env.VITE_BASE || '/santajosefina-vue3/'
   ```
2. Sube el proyecto a GitHub, rama `main`.
3. Habilita **Pages** en Settings → Pages → Source: GitHub Actions (recomendado).
4. El workflow `.github/workflows/deploy.yml` construye y publica a Pages en cada push a `main`.

### Netlify
- Sólo conecta el repo y usa los defaults:
  - **Build command:** `npm run build`
  - **Publish directory:** `dist`
  - Env var opcional `VITE_BASE=/`

## Deploy (GitHub Pages)

### Requisitos previos
- Tener un repositorio en GitHub (p. ej. `santajosefina-vue3`).
- Habilitar GitHub Actions (viene activado por defecto).

### 1) Ajusta el `base` (si usas otro nombre de repo)
Abre `vite.config.js` y verifica que el `base` coincida con el nombre de tu repositorio:
```js
const base = process.env.VITE_BASE || '/santajosefina-vue3/'
```
Si tu repo se llama distinto (por ejemplo `mi-sitio`), cambia a:
```js
const base = process.env.VITE_BASE || '/mi-sitio/'
```

### 2) Sube el proyecto a GitHub
```bash
git init
git add .
git commit -m "deploy: initial version for GitHub Pages"
git branch -M main
git remote add origin https://github.com/<tu-usuario>/santajosefina-vue3.git
git push -u origin main
```

### 3) Habilita Pages con GitHub Actions
- En tu repositorio, entra a **Settings → Pages**.
- En **Source**, selecciona **GitHub Actions** (el workflow ya está incluido en `.github/workflows/deploy.yml`).

### 4) Verifica el deploy
- Ve a la pestaña **Actions** y abre el job **Deploy to GitHub Pages**.
- Cuando finalice, tu sitio estará disponible en:
```
https://<tu-usuario>.github.io/santajosefina-vue3/
```
(si cambiaste el nombre del repo, reemplázalo en la URL).

### 5) Actualizaciones
Cada `git push` a `main` reconstruirá y publicará automáticamente la última versión del sitio.
