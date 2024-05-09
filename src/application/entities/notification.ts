import { Replace } from "src/helpers/Replace";
import { Content } from "./content";

export interface NotificationProps { // Interface criada para evitar conflitos dentro da classe, e para facilitar a criação de setters e getters
    recipientID: string;
    content: Content;
    category: string;
    readAt?: Date | null; // Esse é identado ?: pois é um parametro opcional, basicamente esta dizendo para o codigo que ele é tipo
                          // "Date", "undifined" ou "Nulo", se não houvesse o | não consideraria nulo
    createdAt: Date;
}



export class Notification {
    private props:  NotificationProps;

    constructor(props: Replace<NotificationProps, {createdAt?: Date}>){ // Após criar um helper com o Replace é assim que se utiliza ele para tornar uma variavel opcional
        this.props = {
            ...props,
            createdAt: props.createdAt ?? new Date(),
        }; // E é assim que se declara dentro do construtor
    }
    
    

    public set recipientID(recipientID: string){
        this.props.recipientID = recipientID // Nova após a criação da interface
    }

    public get recipientID(): string{
    return this.props.recipientID;
    }

    public set content(content: Content){
        // this.content = content // Antiga indentação
        this.props.content = content // Nova após a criação da interface
    }

    public get content(): Content{
    return this.props.content;
    }

    public set readAt(readAt: Date | null | undefined ){
        this.props.readAt = readAt // Nova após a criação da interface
    }

    public get readAt(): Date | null | undefined {
    return this.props.readAt;
    }

    public get createdAt(): Date{
    return this.props.createdAt;
    }

}