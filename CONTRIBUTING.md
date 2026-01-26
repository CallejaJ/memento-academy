# Contributing to Memento Academy

Thank you for your interest in contributing to Memento Academy! We are excited to have you join our community of Web3 educators and learners.

## Language / Idioma

This project is bilingual (English/Spanish). Contributions in either language are welcome!

Este proyecto es bilingüe (Inglés/Español). ¡Las contribuciones en cualquier idioma son bienvenidas!

---

## Ways to Contribute

### 1. Report Bugs

Found something broken? [Open an Issue](https://github.com/CallejaJ/memento-academy/issues/new) with:

- Clear description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable

### 2. Suggest Features

Have an idea? Start a [Discussion](https://github.com/orgs/Memento-Academy/discussions) in the **Ideas** category.

### 3. Improve Documentation

- Fix typos or unclear explanations
- Add examples to existing docs
- Translate content (EN ↔ ES)

### 4. Contribute Code

Before starting work on a major feature:

1. Check existing Issues and Discussions
2. Open an Issue to discuss your approach
3. Wait for maintainer feedback

---

## Development Setup

### Prerequisites

- Node.js 18+
- npm or pnpm
- Supabase account (for database)

### Quick Start

```bash
# Clone the repository
git clone https://github.com/CallejaJ/memento-academy.git
cd memento-academy

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your credentials

# Generate Prisma client
npx prisma generate

# Start development server
npm run dev
```

### Running Tests

```bash
npm run test        # Run all tests
npm run lint        # Check code style
npm run build       # Verify production build
```

---

## Pull Request Guidelines

### Before Submitting

- [ ] Code follows the project's style (Prettier + ESLint)
- [ ] Tests pass locally (`npm run test`)
- [ ] Commit messages are clear and descriptive
- [ ] Documentation is updated if needed

### PR Title Format

Use conventional commits:

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style (no logic change)
- `refactor:` Code refactoring
- `test:` Adding tests
- `chore:` Maintenance tasks

Example: `feat: add NFT course module`

### Review Process

1. A maintainer will review your PR
2. Address any requested changes
3. Once approved, a maintainer will merge

---

## Course Content Contributions

### Adding a New Course Section

Course content is stored in Supabase. To contribute:

1. Write content in Markdown format
2. Include both EN and ES versions
3. Submit as a PR with the SQL seed file

### Content Guidelines

- **Clarity**: Explain concepts simply, avoid jargon where possible
- **Examples**: Include real-world Web3 examples
- **Visuals**: Suggest diagrams where helpful
- **Quizzes**: Include 5-10 quiz questions per section

---

## Quiz Questions

To add new quiz questions:

1. Check the existing question bank in `supabase/seed_questions.sql`
2. Follow the format for difficulty ratings and categories
3. Include questions in both languages

---

## Communication

- **GitHub Discussions**: General questions, ideas, showcase
- **Issues**: Bug reports, feature requests
- **X (formerly Twitter)**: [@MementoAcademy](https://twitter.com/MementoAcademy)

---

## Code of Conduct

By participating, you agree to uphold our [Code of Conduct](CODE_OF_CONDUCT.md). We are committed to providing a welcoming environment for everyone.

---

## Recognition

All contributors are valued! Contributors with merged PRs will be:

- Added to the Contributors section
- Eligible for special badges on the platform

---

Thank you for helping make Web3 education accessible to everyone!
