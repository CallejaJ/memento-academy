# Guía de Remediación: React2Shell (CVE-2025-55183)

Sigue estos pasos en la terminal de cada uno de tus proyectos para aplicar el parche de seguridad de Vercel.

## Pasos en la Terminal

1. **Ejecutar la herramienta de parcheo oficial:**
   ```bash
   npx fix-react2shell-next
   ```
   *Cuando te pregunte "Apply fixes? [Y/n]", presiona `Y` y luego `Enter`.*

2. **Sincronizar las dependencias:**
   ```bash
   npm install
   ```

3. **Verificar que el proyecto sigue funcionando:**
   ```bash
   npm run build
   ```

4. **Confirmar versiones seguras:**
   - `next`: Debe ser `>= 15.2.8`.
   - `react` / `react-dom`: Debe ser `>= 19.2.2`.

## Resumen del Commit Sugerido

```bash
git add package.json package-lock.json
git commit -m "fix: security patch for React Server Components (CVE-2025-55183)"
```
