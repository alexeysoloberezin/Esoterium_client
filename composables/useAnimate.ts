export function useAnimate({
                             baseDelay = 0.6,
                             baseDuration = 0.1,
                           }: {baseDelay?: number, baseDuration?: number}) {

  const getDelay = (count: number) => {
    return {
      transitionDelay: `${baseDelay + baseDuration * count}s`
    }
  }

  return {getDelay}
}