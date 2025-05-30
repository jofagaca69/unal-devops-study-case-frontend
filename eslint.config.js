// eslint.config.js
import js from '@eslint/js';
import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';

export default [
  // Configuración base
  js.configs.recommended,

  // Configuración básica para TypeScript
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module'
      }
    },
    plugins: {
      '@typescript-eslint': typescript
    },
    rules: {
      // Solo reglas básicas y no estrictas
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'no-console': 'off',
      'no-debugger': 'warn',
      'no-var': 'warn',
      'no-unused-vars': 'off',     // Desactivar variables no usadas
      'no-undef': 'off'            // Desactivar variables no definidas
    }
  },

  // Configuración básica para HTML (opcional)
  {
    files: ['**/*.html'],
    rules: {
      // Sin reglas específicas, solo validación básica
    }
  },

  // Ignorar archivos
  {
    ignores: [
      'dist/**',
      'node_modules/**',
      '*.js',
      '*.d.ts',
      '**/*.spec.ts',      // Archivos de test
      '**/*.test.ts',      // Archivos de test alternativos
      '**/test/**',        // Carpetas de test
      '**/tests/**'        // Carpetas de tests
    ]
  }
];
