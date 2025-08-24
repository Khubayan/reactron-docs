import type { Locales, LocalizedRecord } from '@/lib/opendocs/types/i18n'

export const defaultLocale = 'id' as const

export const locale = {
  id: defaultLocale,
  en: 'en',
  pt: 'pt',
} as const

export const labels = {
  [defaultLocale]: 'Bahasa Indonesia',
  [locale.en]: 'English',
  [locale.pt]: 'Português',
} as const

export const dateLocales: LocalizedRecord = {
  id: 'id-ID',
  en: 'en-US',
  pt: 'pt-BR',
} as const

export const locales = Object.values(locale) as Locales
