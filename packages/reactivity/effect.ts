import { extend } from 'shared'

type TrackedMarkers = {
  /**
   * wasTracked
   */
  w: number
  /**
   * newTracked
   */
  n: number
}
export type Dep = Set<ReactiveEffect> & TrackedMarkers
export type EffectScheduler = (...args: any[]) => any

export class ReactiveEffect<T = any> {
  active = true
  deps: Dep[] = []
  computed?: boolean
  allowRecurse?: boolean
  onStop?: () => void
  onTrack?: () => void
  onTrigger?: () => void

  constructor (public fn: () => T, public scheduler: EffectScheduler) {}
}
