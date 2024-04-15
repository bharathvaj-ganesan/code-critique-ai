export class TokenLimits {
  maxTokens: number
  requestTokens: number
  responseTokens: number

  constructor(model = 'anthropic.claude-3-haiku-20240307-v1:0') {
    if (model === 'anthropic.claude-3-haiku-20240307-v1:0') {
      this.maxTokens = 16000
      this.responseTokens = 3000
    } else if (model === 'anthropic.claude-3-sonnet-20240229-v1:0') {
      this.maxTokens = 16000
      this.responseTokens = 2000
    } else {
      this.maxTokens = 4000
      this.responseTokens = 1000
    }
    // provide some margin for the request tokens
    this.requestTokens = this.maxTokens - this.responseTokens - 100
  }

  string(): string {
    return `max_tokens=${this.maxTokens}, request_tokens=${this.requestTokens}, response_tokens=${this.responseTokens}`
  }
}
