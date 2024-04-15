// eslint-disable-next-line camelcase
import {countTokens} from '@anthropic-ai/tokenizer'

export function getTokenCount(input: string): number {
  input = input.replace(/<\|endoftext\|>/g, '')
  return countTokens(input)
}
