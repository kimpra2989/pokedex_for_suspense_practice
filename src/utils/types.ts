import { ReactNode } from 'react'

export type WithChildren<T extends Record<string, unknown>> = T & {
  children: ReactNode
}
