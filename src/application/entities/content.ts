export class Content {
    private readonly content: string;

    get value(): string{
        return this.content
    }

    private validatorContentLength(content: string): boolean{
        return content.length >= 5 && content.length <= 240;
    }

    constructor(content: string){
        const contentLengthValid = this.validatorContentLength(content);

        if(!contentLengthValid){
            throw new Error('Content Length Error.');
        }
        
        this.content = content;
    }

}