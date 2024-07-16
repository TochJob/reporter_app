import type { Component } from 'vue'

interface InputItem {
  id: number
  value: string | number | null
}
interface InputButton {
  icon: Component
  action: () => void
  isButtonVisible: boolean
  id: number
  extraClass?: string
  disabled: boolean
}
type InputList = InputItem[]

export type { InputList, InputItem, InputButton }
