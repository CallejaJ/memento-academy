# 🎓 Memento Academy - Plataforma Educativa Crypto

Bienvenido al repositorio oficial de **Memento Academy**, una plataforma educativa premium enfocada en el mundo de las criptomonedas, NFTs y trading. Esta landing page ha sido diseñada para ofrecer una experiencia de usuario excepcional, integrando tecnologías de vanguardia para la gestión de datos y comunicación.

## 🚀 Tecnologías Utilizadas

- **Frontend**: [Next.js 15](https://nextjs.org/) (App Router), [React 19](https://react.dev/), [Tailwind CSS](https://tailwindcss.com/).
- **Componentes**: [Radix UI](https://www.radix-ui.com/), [Lucide React](https://lucide.dev/), [Framer Motion](https://www.framer.com/motion/).
- **Base de Datos y ORM**: [Supabase](https://supabase.com/) (PostgreSQL) y [Prisma 7](https://www.prisma.io/).
- **Emailing**: [Resend](https://resend.com/).
- **Automatización**: GitHub Actions.

## 🛠️ Funcionamiento de la Landing Page

La página está estructurada de forma modular para garantizar rendimiento y escalabilidad:

### 1. Sistema de Diseño Premium
- **Modo Oscuro/Claro**: Implementado con `next-themes` para una visualización cómoda.
- **Micro-interacciones**: Animaciones fluidas al hacer scroll y hover sobre elementos clave.
- **Responsive Design**: Totalmente optimizado para dispositivos móviles, tablets y escritorio.

### 2. Gestión de Suscriptores (Newsletter)
El corazón de la interacción de la landing es el formulario de suscripción, que funciona de la siguiente manera:
1. **Captura de Datos**: El usuario ingresa su email y selecciona sus preferencias (Noticias Crypto, NFTs, Señales de Trading, etc.).
2. **Server Actions**: Se utiliza `use server` de Next.js para procesar la suscripción de forma segura en el servidor.
3. **Persistencia con Prisma**: Los datos se validan y se guardan en la tabla `newsletter_subscribers` de Supabase usando el cliente de Prisma.
4. **Respuesta inmediata**: Se verifica si el usuario ya existe y se devuelve un mensaje de éxito o error en tiempo real.

### 3. Comunicación Automática
Una vez que el suscriptor es guardado correctamente:
- Se dispara un evento hacia **Resend**.
- El usuario recibe un email de bienvenida profesional con los enlaces a sus intereses seleccionados.

### 4. Mantenimiento Automático (Keep-Alive)
Dado que Supabase puede pausar las bases de datos en su tier gratuito tras periodos de inactividad, hemos implementado una **GitHub Action**:
- Ejecuta un ping diario (`SELECT 1`) a la base de datos.
- Garantiza que el servicio esté siempre disponible para nuevos visitantes.

## ⚙️ Configuración del Proyecto

### Variables de Entorno (`.env.local`)
Necesitas configurar las siguientes claves:

```env
# Prisma Connection
DATABASE_URL="tu_url_de_pooler_de_supabase"
DIRECT_URL="tu_url_directa_de_supabase"

# Supabase Auth
NEXT_PUBLIC_SUPABASE_URL="https://tu-proyecto.supabase.co"
NEXT_PUBLIC_SUPABASE_ANON_KEY="tu_clave_anon_publica"

# Servicio de Email
RESEND_API_KEY="re_tu_clave_de_resend"
```

### Comandos Útiles

- `npm install`: Instala las dependencias.
- `npx prisma generate`: Genera el cliente de Prisma basado en el esquema.
- `npx prisma db pull`: Sincroniza el esquema local con la base de datos remota.
- `npm run dev`: Inicia el servidor de desarrollo.

---
Generado con ❤️ para Memento Academy.
